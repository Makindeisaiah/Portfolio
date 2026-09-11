import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface LightboxImage {
  src: string;
  caption?: string;
  label?: string;
}

interface CaseStudyLightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const CaseStudyLightbox: React.FC<CaseStudyLightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  useEffect(() => {
    setZoomLevel(1);
  }, [currentIndex, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && images.length > 1) {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight' && images.length > 1) {
        onNavigate((currentIndex + 1) % images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex] || images[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col bg-neutral-950/95 backdrop-blur-md text-white select-none"
        onClick={onClose}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-neutral-950/60"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            {current.label && (
              <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded">
                {current.label}
              </span>
            )}
            <span className="text-xs font-mono text-neutral-400">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setZoomLevel((z) => (z > 1 ? 1 : 1.75))}
              className="p-2 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors"
              title={zoomLevel > 1 ? 'Reset Zoom' : 'Zoom In'}
              aria-label="Toggle zoom"
            >
              {zoomLevel > 1 ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors"
              title="Close (Esc)"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image viewport */}
        <div
          className="flex-1 relative flex items-center justify-center p-4 sm:p-8 overflow-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/60 text-white rounded-full transition-colors shadow-lg"
                title="Previous"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate((currentIndex + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/60 text-white rounded-full transition-colors shadow-lg"
                title="Next"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div
            className="transition-transform duration-200 flex items-center justify-center max-w-full max-h-full"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src={current.src}
              alt={current.caption || 'Ticketa Showcase Visual'}
              className="max-w-[90vw] max-h-[75vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Bottom caption bar */}
        {current.caption && (
          <div
            className="px-6 py-4 border-t border-neutral-800/80 bg-neutral-950/80 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm text-neutral-300 max-w-3xl mx-auto font-sans leading-relaxed">
              {current.caption}
            </p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
