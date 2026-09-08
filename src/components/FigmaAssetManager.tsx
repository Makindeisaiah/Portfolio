import React, { useState, useRef } from 'react';
import { 
  UploadCloud, 
  FolderDown, 
  Layers, 
  X, 
  Check, 
  Trash2, 
  GripVertical, 
  Image as ImageIcon, 
  Sparkles, 
  RefreshCw, 
  ChevronDown, 
  HelpCircle,
  Download,
  FolderOpen
} from 'lucide-react';
import { useAssets, PROJECT_SLOTS, ProjectSlot, UploadedAsset } from '../context/AssetContext';

export const FigmaAssetManager: React.FC = () => {
  const {
    uploadedAssets,
    assignedSlots,
    isTrayOpen,
    setTrayOpen,
    draggedAsset,
    setDraggedAsset,
    uploadFiles,
    assignAssetToSlot,
    removeAssignedAsset,
    deleteUploadedAsset,
    resetAll,
    downloadAssetForFolder,
  } = useAssets();

  const [activeTab, setActiveTab] = useState<'upload' | 'slots' | 'guide'>('upload');
  const [isDragOverUploadZone, setIsDragOverUploadZone] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const assignedCount = Object.keys(assignedSlots).length;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      uploadFiles(e.target.files);
      e.target.value = '';
    }
  };

  const handleUploadDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOverUploadZone(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      uploadFiles(e.dataTransfer.files);
    }
  };

  const handleDragStart = (e: React.DragEvent, asset: UploadedAsset) => {
    setDraggedAsset(asset);
    e.dataTransfer.setData('text/plain', asset.dataUrl);
    e.dataTransfer.setData('application/json', JSON.stringify({ id: asset.id, name: asset.name }));
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleDragEnd = () => {
    setDraggedAsset(null);
  };

  return (
    <>
      {/* Floating Trigger Pill */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setTrayOpen(!isTrayOpen)}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 shadow-lg border backdrop-blur-md ${
            isTrayOpen
              ? 'bg-neutral-900 text-white border-neutral-700 shadow-neutral-900/20'
              : assignedCount > 0
              ? 'bg-neutral-900 text-white border-neutral-800 hover:bg-neutral-800'
              : 'bg-white/95 text-neutral-800 border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50'
          }`}
          aria-label="Toggle Figma Asset & Image Manager"
        >
          {/* Stylized Figma / Upload emblem */}
          <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          
          <span className="font-bold">Figma Assets</span>

          {assignedCount > 0 && (
            <span className="bg-emerald-500 text-white text-[10px] font-mono px-1.5 py-0.5 rounded-full font-bold">
              {assignedCount} active
            </span>
          )}

          {uploadedAssets.length > 0 && assignedCount === 0 && (
            <span className="bg-neutral-200 text-neutral-800 text-[10px] font-mono px-1.5 py-0.5 rounded-full font-bold">
              {uploadedAssets.length}
            </span>
          )}

          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isTrayOpen ? 'rotate-180 text-white' : 'text-neutral-500'
            }`}
          />
        </button>
      </div>

      {/* Slide-over Asset Tray / Drawer */}
      {isTrayOpen && (
        <div className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-6 pointer-events-none flex justify-center">
          <div className="pointer-events-auto w-full max-w-5xl max-h-[85vh] sm:max-h-[80vh] flex flex-col rounded-2xl bg-white/98 backdrop-blur-xl border border-neutral-300/90 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
            
            {/* Drawer Header */}
            <div className="px-5 py-4 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/70">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 text-white flex items-center justify-center shadow-xs">
                  <UploadCloud className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                    Figma Asset & Mockup Manager
                    <span className="text-[10px] font-mono text-neutral-500 bg-neutral-200/70 px-2 py-0.5 rounded uppercase font-semibold">
                      Drag & Drop
                    </span>
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Upload your Figma design files or PNG exports, then drag into each project card.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {assignedCount > 0 && (
                  <button
                    type="button"
                    onClick={resetAll}
                    className="hidden sm:inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-red-600 px-2.5 py-1.5 rounded-md hover:bg-neutral-100 transition-colors font-medium"
                    title="Reset all custom images"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reset All</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setTrayOpen(false)}
                  className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-200/60 transition-colors"
                  aria-label="Close tray"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="px-5 pt-3 border-b border-neutral-200/80 flex gap-4 text-xs font-semibold bg-white">
              <button
                type="button"
                onClick={() => setActiveTab('upload')}
                className={`pb-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${
                  activeTab === 'upload'
                    ? 'border-neutral-900 text-neutral-900'
                    : 'border-transparent text-neutral-500 hover:text-neutral-800'
                }`}
              >
                <UploadCloud className="w-3.5 h-3.5" />
                <span>Upload & Drag Shelf ({uploadedAssets.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('slots')}
                className={`pb-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${
                  activeTab === 'slots'
                    ? 'border-neutral-900 text-neutral-900'
                    : 'border-transparent text-neutral-500 hover:text-neutral-800'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Project Slots ({assignedCount}/{PROJECT_SLOTS.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('guide')}
                className={`pb-2.5 border-b-2 transition-colors flex items-center gap-1.5 ${
                  activeTab === 'guide'
                    ? 'border-neutral-900 text-neutral-900'
                    : 'border-transparent text-neutral-500 hover:text-neutral-800'
                }`}
              >
                <FolderOpen className="w-3.5 h-3.5" />
                <span>Folder Structure Guide</span>
              </button>
            </div>

            {/* Content Body */}
            <div className="p-5 overflow-y-auto max-h-[60vh] space-y-6">
              
              {/* TAB 1: UPLOAD & DRAG SHELF */}
              {activeTab === 'upload' && (
                <div className="space-y-6">
                  {/* Upload Dropzone */}
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragOverUploadZone(true);
                    }}
                    onDragLeave={() => setIsDragOverUploadZone(false)}
                    onDrop={handleUploadDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-6 sm:p-8 text-center cursor-pointer transition-all duration-200 ${
                      isDragOverUploadZone
                        ? 'border-neutral-900 bg-neutral-100/80 scale-[0.99]'
                        : 'border-neutral-300 bg-neutral-50/50 hover:bg-neutral-100/40 hover:border-neutral-400'
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/png,image/jpeg,image/webp,image/svg+xml"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    <div className="w-12 h-12 mx-auto rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-xs mb-3">
                      <UploadCloud className="w-6 h-6" />
                    </div>

                    <h4 className="text-sm font-bold text-neutral-900">
                      Drop Figma Design Exports or Click to Browse
                    </h4>
                    <p className="text-xs text-neutral-500 mt-1 max-w-md mx-auto">
                      Supports PNG, JPG, WebP, SVG. Select multiple files at once.
                    </p>

                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-[11px] text-neutral-600 font-mono">
                      <span>Pro-tip: In Figma select frame → press <strong>Shift+Cmd+C</strong> to copy PNG</span>
                    </div>
                  </div>

                  {/* Drag Shelf */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                          UPLOADED ASSETS
                        </span>
                        <span className="text-[11px] text-neutral-500">
                          (Drag any card onto a project card in the page, or click Assign)
                        </span>
                      </div>
                      {uploadedAssets.length > 0 && (
                        <span className="text-xs text-neutral-500">
                          {uploadedAssets.length} image{uploadedAssets.length === 1 ? '' : 's'} ready
                        </span>
                      )}
                    </div>

                    {uploadedAssets.length === 0 ? (
                      <div className="p-8 rounded-xl bg-neutral-50 border border-neutral-200/80 text-center text-xs text-neutral-500">
                        No files uploaded yet. Drag exported Figma screens or images into the box above!
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {uploadedAssets.map((asset) => (
                          <div
                            key={asset.id}
                            draggable
                            onDragStart={(e) => handleDragStart(e, asset)}
                            onDragEnd={handleDragEnd}
                            className={`group relative rounded-xl border border-neutral-200 bg-white p-2.5 shadow-2xs hover:shadow-md transition-all cursor-grab active:cursor-grabbing hover:border-neutral-400 ${
                              draggedAsset?.id === asset.id ? 'opacity-50 ring-2 ring-neutral-900' : ''
                            }`}
                          >
                            {/* Drag Indicator Overlay */}
                            <div className="absolute top-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-[9px] font-mono px-2 py-0.5 rounded flex items-center gap-1 pointer-events-none">
                              <GripVertical className="w-2.5 h-2.5" />
                              <span>Drag to project</span>
                            </div>

                            {/* Thumbnail Preview */}
                            <div className="w-full aspect-video rounded-lg overflow-hidden bg-neutral-100 border border-neutral-200/60 mb-2">
                              <img
                                src={asset.dataUrl}
                                alt={asset.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>

                            {/* Info */}
                            <div className="space-y-1">
                              <p className="text-xs font-semibold text-neutral-900 truncate" title={asset.name}>
                                {asset.name}
                              </p>
                              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                                <span>{asset.sizeFormatted}</span>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    deleteUploadedAsset(asset.id);
                                  }}
                                  className="text-neutral-400 hover:text-red-600 transition-colors p-0.5"
                                  title="Delete asset"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </div>

                              {/* 1-Click Assignment Menu */}
                              <div className="pt-1.5 border-t border-neutral-100">
                                <label className="block text-[9px] font-mono text-neutral-400 uppercase mb-0.5">
                                  Quick Assign:
                                </label>
                                <select
                                  defaultValue=""
                                  onChange={(e) => {
                                    if (e.target.value) {
                                      assignAssetToSlot(e.target.value, asset.dataUrl);
                                      e.target.value = '';
                                    }
                                  }}
                                  className="w-full text-[11px] font-medium py-1 px-1.5 rounded bg-neutral-50 border border-neutral-200 text-neutral-800 focus:outline-hidden focus:border-neutral-400 cursor-pointer"
                                >
                                  <option value="" disabled>Select project...</option>
                                  {PROJECT_SLOTS.map((slot) => (
                                    <option key={slot.id} value={slot.id}>
                                      {slot.title} {assignedSlots[slot.id] ? '✓' : ''}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 2: PROJECT SLOTS OVERVIEW */}
              {activeTab === 'slots' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-neutral-600">
                      Current status of all {PROJECT_SLOTS.length} portfolio image slots.
                    </p>
                    <span className="text-xs font-mono text-neutral-500">
                      {assignedCount} replaced with custom Figma images
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {PROJECT_SLOTS.map((slot) => {
                      const hasCustom = Boolean(assignedSlots[slot.id]);
                      const currentImage = assignedSlots[slot.id];

                      return (
                        <div
                          key={slot.id}
                          className={`p-4 rounded-xl border transition-all flex items-start gap-4 ${
                            hasCustom
                              ? 'bg-neutral-50/80 border-emerald-300'
                              : 'bg-white border-neutral-200'
                          }`}
                        >
                          {/* Mini visual indicator */}
                          <div className="w-20 h-16 rounded-lg overflow-hidden bg-neutral-100 border border-neutral-200 shrink-0 relative">
                            {hasCustom ? (
                              <img
                                src={currentImage}
                                alt={slot.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex flex-col items-center justify-center p-2 text-center bg-neutral-100 text-neutral-400">
                                <ImageIcon className="w-4 h-4 mb-0.5" />
                                <span className="text-[8px] font-mono">Default Mockup</span>
                              </div>
                            )}
                          </div>

                          {/* Slot Meta & Actions */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-mono uppercase bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded">
                                {slot.type}
                              </span>
                              {hasCustom && (
                                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                                  <Check className="w-2.5 h-2.5" /> Custom Active
                                </span>
                              )}
                            </div>

                            <h4 className="text-xs font-bold text-neutral-900 mt-1 truncate">
                              {slot.title}
                            </h4>
                            <p className="text-[11px] font-mono text-neutral-400 truncate mt-0.5">
                              {slot.folderPath}{slot.recommendedFilename}
                            </p>

                            <div className="flex flex-wrap items-center gap-2 mt-3">
                              {/* Direct file input for this slot */}
                              <input
                                id={`slot-file-input-${slot.id}`}
                                type="file"
                                accept="image/png,image/jpeg,image/webp,image/svg+xml"
                                className="hidden"
                                onChange={async (e) => {
                                  if (e.target.files && e.target.files.length > 0) {
                                    const newAssets = await uploadFiles(e.target.files);
                                    if (newAssets.length > 0) {
                                      assignAssetToSlot(slot.id, newAssets[0].dataUrl);
                                    }
                                  }
                                }}
                              />

                              <button
                                type="button"
                                onClick={() => {
                                  document.getElementById(`slot-file-input-${slot.id}`)?.click();
                                }}
                                className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-800 hover:text-neutral-950 bg-white border border-neutral-300 px-2.5 py-1 rounded-md shadow-2xs hover:bg-neutral-50 transition-colors cursor-pointer"
                              >
                                <UploadCloud className="w-3 h-3 text-emerald-600" />
                                <span>{hasCustom ? 'Replace Image' : 'Upload Image'}</span>
                              </button>

                              {hasCustom && (
                                <>
                                  <button
                                    type="button"
                                    onClick={() => downloadAssetForFolder(slot, currentImage)}
                                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-700 hover:text-neutral-900 bg-white border border-neutral-200 px-2.5 py-1 rounded-md shadow-2xs hover:bg-neutral-50 transition-colors"
                                    title="Download image formatted for folder"
                                  >
                                    <Download className="w-3 h-3" />
                                    <span>Download</span>
                                  </button>

                                  <button
                                    type="button"
                                    onClick={() => removeAssignedAsset(slot.id)}
                                    className="text-[11px] text-red-600 hover:text-red-700 hover:underline px-1 py-1"
                                  >
                                    Reset
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 3: PHYSICAL FOLDER GUIDE */}
              {activeTab === 'guide' && (
                <div className="space-y-5 text-xs text-neutral-600">
                  <div className="p-4 rounded-xl bg-neutral-900 text-white space-y-2">
                    <div className="flex items-center gap-2">
                      <FolderOpen className="w-4 h-4 text-emerald-400" />
                      <h4 className="text-sm font-bold text-white">
                        Folder Structure Created in `/public/images/`
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      We created dedicated folders for each project in your workspace. You can directly place your exported Figma images into these folders, or use the drag & drop shelf above!
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-bold text-neutral-900 text-xs uppercase tracking-wider font-mono">
                      Project Folder Reference:
                    </h5>

                    <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-white">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-neutral-50 border-b border-neutral-200 font-mono text-neutral-500 uppercase text-[10px]">
                          <tr>
                            <th className="p-3">Project</th>
                            <th className="p-3">Folder Path</th>
                            <th className="p-3">Primary Filename</th>
                            <th className="p-3">Recommended Aspect</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100 font-mono text-[11px]">
                          {PROJECT_SLOTS.map((s) => (
                            <tr key={s.id} className="hover:bg-neutral-50/50">
                              <td className="p-3 font-sans font-bold text-neutral-900">{s.title}</td>
                              <td className="p-3 text-neutral-600">{s.folderPath}</td>
                              <td className="p-3 text-emerald-600 font-bold">{s.recommendedFilename}</td>
                              <td className="p-3 text-neutral-500">{s.type === 'profile' ? '4:5 (Portrait)' : '16:9 (Landscape)'}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAFAFA] border border-neutral-200 space-y-2">
                    <h5 className="font-bold text-neutral-900">Figma Export Recommendation:</h5>
                    <ol className="list-decimal list-inside space-y-1 text-neutral-600">
                      <li>In Figma, select the frame containing your mockups or screens.</li>
                      <li>In the right sidebar, scroll to <strong>Export</strong> and select <strong>PNG</strong> at <strong>2x</strong>.</li>
                      <li>Save directly into the corresponding project folder above, OR simply drop it into the upload zone!</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>

            {/* Drawer Footer Notice */}
            <div className="px-5 py-3 border-t border-neutral-200 bg-neutral-50/50 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-2">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-neutral-700" />
                <span>Uploaded images automatically persist across page navigations in your browser.</span>
              </div>
              <button
                type="button"
                onClick={() => setTrayOpen(false)}
                className="px-3 py-1 rounded-md bg-neutral-900 text-white font-medium text-xs hover:bg-neutral-800 transition-colors"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
