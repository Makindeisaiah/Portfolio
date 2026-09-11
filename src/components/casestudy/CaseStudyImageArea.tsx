import React, { useState, useEffect, useRef } from 'react';
import { Upload, X, Maximize2, Trash2, Edit3, Check, Plus, Image as ImageIcon } from 'lucide-react';
import { CaseStudyLightbox, LightboxImage } from './CaseStudyLightbox';

export interface UploadedMediaItem {
  id: string;
  src: string;
  caption?: string;
  label?: string;
}

interface CaseStudyImageAreaProps {
  storageKey: string;
  storagePrefix?: string;
  placeholderLabel: string;
  description?: string;
  allowMultiple?: boolean;
  aspectRatio?: '16/9' | '4/3' | '21/9' | 'phone' | 'auto';
  defaultImages?: UploadedMediaItem[];
  defaultFit?: 'contain' | 'cover';
  className?: string;
}

export const CaseStudyImageArea: React.FC<CaseStudyImageAreaProps> = ({
  storageKey,
  storagePrefix = 'pacejet',
  placeholderLabel,
  description,
  allowMultiple = false,
  aspectRatio = '16/9',
  defaultImages = [],
  defaultFit = 'cover',
  className = '',
}) => {
  const resolvedStorageKey = `${storagePrefix}_img_${storageKey}`;

  const [items, setItems] = useState<UploadedMediaItem[]>(() => {
    try {
      const saved = localStorage.getItem(resolvedStorageKey) || localStorage.getItem(`ticketa_img_${storageKey}`);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // ignore
    }
    return defaultImages;
  });

  const [objectFit, setObjectFit] = useState<'contain' | 'cover'>(defaultFit);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [editingCaptionId, setEditingCaptionId] = useState<string | null>(null);
  const [captionDraft, setCaptionDraft] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      if (items.length > 0) {
        localStorage.setItem(resolvedStorageKey, JSON.stringify(items));
      } else {
        localStorage.removeItem(resolvedStorageKey);
      }
    } catch {
      // LocalStorage quota or private mode fallback
    }
  }, [items, resolvedStorageKey]);

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const readFiles = Array.from(files);
    readFiles.forEach((file) => {
      if (!file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (!result) return;
        const newItem: UploadedMediaItem = {
          id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
          src: result,
          caption: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '),
          label: placeholderLabel.replace(/^UPLOAD:?\s*/i, '').trim(),
        };

        setItems((prev) => (allowMultiple ? [...prev, newItem] : [newItem]));
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const removeItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const saveCaption = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, caption: captionDraft } : item))
    );
    setEditingCaptionId(null);
  };

  const aspectClass =
    aspectRatio === '16/9'
      ? 'aspect-[16/9]'
      : aspectRatio === '4/3'
      ? 'aspect-[4/3]'
      : aspectRatio === '21/9'
      ? 'aspect-[21/9]'
      : aspectRatio === 'phone'
      ? 'aspect-[9/19.5] max-w-[280px] mx-auto'
      : 'min-h-[280px]';

  const lightboxImages: LightboxImage[] = items.map((it) => ({
    src: it.src,
    caption: it.caption,
    label: it.label || placeholderLabel,
  }));

  return (
    <div className={`w-full group ${className}`}>
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple={allowMultiple}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {items.length === 0 ? (
        /* Empty Upload Placeholder Container */
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`relative w-full ${aspectClass} rounded-2xl border-2 border-dashed transition-all duration-200 cursor-pointer flex flex-col items-center justify-center p-8 text-center bg-neutral-50 hover:bg-neutral-100/80 ${
            isDragging
              ? 'border-emerald-500 bg-emerald-50/50 scale-[1.005]'
              : 'border-neutral-300/80 hover:border-neutral-400'
          }`}
        >
          {/* Subtle Grid Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative z-10 flex flex-col items-center max-w-md mx-auto space-y-4">
            {/* Specified Placeholder Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 text-white shadow-sm">
              <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[11px] font-mono uppercase tracking-widest font-semibold">
                {placeholderLabel}
              </span>
            </div>

            <p className="text-sm font-medium text-neutral-700">
              Drop screenshot or click to upload
            </p>

            <p className="text-xs text-neutral-400 font-sans leading-relaxed">
              {description ||
                (allowMultiple
                  ? 'Supports high-res PNG, JPG, or WebP. Multiple screens can be uploaded.'
                  : 'Upload your high-res product visual or UI mockup.')}
            </p>

            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-wider bg-white border border-neutral-200 text-neutral-800 rounded-lg shadow-xs hover:border-neutral-900 transition-colors"
            >
              <Upload className="w-3.5 h-3.5 text-neutral-500" />
              <span>Select File</span>
            </button>
          </div>
        </div>
      ) : (
        /* Uploaded Images View */
        <div className="space-y-4">
          {/* Action Toolbar */}
          <div className="flex items-center justify-between px-1 text-xs text-neutral-500">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider bg-neutral-100 text-neutral-700 rounded border border-neutral-200">
                {placeholderLabel}
              </span>
              <span className="font-mono text-[11px]">
                {items.length} {items.length === 1 ? 'screen' : 'screens'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setObjectFit((f) => (f === 'cover' ? 'contain' : 'cover'))}
                className="text-[11px] font-mono uppercase px-2 py-1 bg-white hover:bg-neutral-100 rounded border border-neutral-200 text-neutral-700 transition-colors"
                title="Toggle fit"
              >
                Fit: {objectFit}
              </button>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-1 text-[11px] font-mono uppercase px-2.5 py-1 bg-neutral-900 hover:bg-neutral-800 text-white rounded transition-colors"
              >
                <Plus className="w-3 h-3" />
                <span>{allowMultiple ? 'Add Screen' : 'Replace'}</span>
              </button>
            </div>
          </div>

          {/* Media Grid / Single Showcase */}
          {items.length === 1 ? (
            <div className="relative group/single overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-950 shadow-sm">
              <div className={`relative w-full ${aspectClass} overflow-hidden flex items-center justify-center`}>
                <img
                  src={items[0].src}
                  alt={items[0].caption || placeholderLabel}
                  className={`w-full h-full transition-transform duration-500 group-hover/single:scale-[1.01] ${
                    objectFit === 'cover' ? 'object-cover' : 'object-contain p-2'
                  }`}
                />

                {/* Overlay actions on hover */}
                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover/single:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(0)}
                    className="p-3 bg-white/95 hover:bg-white text-neutral-900 rounded-full shadow-lg transition-transform hover:scale-110"
                    title="View Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => removeItem(items[0].id, e)}
                    className="p-3 bg-red-600/90 hover:bg-red-600 text-white rounded-full shadow-lg transition-transform hover:scale-110"
                    title="Remove Image"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Caption Bar */}
              <div className="px-5 py-3.5 bg-white border-t border-neutral-100 flex items-center justify-between text-xs">
                {editingCaptionId === items[0].id ? (
                  <div className="flex items-center gap-2 w-full">
                    <input
                      type="text"
                      value={captionDraft}
                      onChange={(e) => setCaptionDraft(e.target.value)}
                      placeholder="Add an editorial caption..."
                      className="flex-1 px-2.5 py-1 text-xs border border-neutral-300 rounded focus:outline-hidden focus:border-neutral-900"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={() => saveCaption(items[0].id)}
                      className="p-1.5 bg-neutral-900 text-white rounded hover:bg-neutral-800"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between w-full">
                    <p className="text-neutral-600 font-sans line-clamp-1 italic">
                      {items[0].caption || 'Uploaded visual artifact.'}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setEditingCaptionId(items[0].id);
                        setCaptionDraft(items[0].caption || '');
                      }}
                      className="text-neutral-400 hover:text-neutral-900 ml-2 p-1"
                      title="Edit caption"
                    >
                      <Edit3 className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Multi-Image Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item, idx) => (
                <div
                  key={item.id}
                  className="relative group/multi rounded-xl overflow-hidden border border-neutral-200 bg-neutral-950 flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden flex items-center justify-center">
                    <img
                      src={item.src}
                      alt={item.caption || `${placeholderLabel} ${idx + 1}`}
                      className={`w-full h-full ${
                        objectFit === 'cover' ? 'object-cover' : 'object-contain p-2'
                      }`}
                    />
                    <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover/multi:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => setLightboxIndex(idx)}
                        className="p-2 bg-white text-neutral-900 rounded-full hover:scale-110 transition-transform"
                        title="View Fullscreen"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => removeItem(item.id, e)}
                        className="p-2 bg-red-600 text-white rounded-full hover:scale-110 transition-transform"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="p-3 bg-white border-t border-neutral-100 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-neutral-400">#{idx + 1}</span>
                      <p className="text-neutral-700 font-sans text-xs truncate flex-1 px-2">
                        {item.caption || 'Interface screen'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Fullscreen Lightbox */}
      <CaseStudyLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};
