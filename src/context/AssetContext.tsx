import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UploadedAsset {
  id: string;
  name: string;
  dataUrl: string;
  sizeFormatted: string;
  type: string;
  timestamp: number;
}

export interface ProjectSlot {
  id: string;
  title: string;
  category: string;
  type: 'website' | 'uiux' | 'profile';
  folderPath: string;
  recommendedFilename: string;
}

export const PROJECT_SLOTS: ProjectSlot[] = [
  {
    id: 'omony-atelier-studios',
    title: 'OMONY Atelier Studios',
    category: 'Interior Architecture & Design',
    type: 'website',
    folderPath: '/public/images/projects/omony-atelier-studios/',
    recommendedFilename: 'hero.png',
  },
  {
    id: 'validreams-property-management',
    title: 'Validreams Property Management',
    category: 'Property Management',
    type: 'website',
    folderPath: '/public/images/projects/validreams-property-management/',
    recommendedFilename: 'hero.png',
  },
  {
    id: 'koikimedia-international-news',
    title: 'KoikiMedia International News',
    category: 'News & Media',
    type: 'website',
    folderPath: '/public/images/projects/koikimedia-international-news/',
    recommendedFilename: 'hero.png',
  },
  {
    id: 'pacejet',
    title: 'PaceJet Private Aviation',
    category: 'Avionics Booking Platform',
    type: 'uiux',
    folderPath: '/public/images/projects/pacejet/',
    recommendedFilename: 'hero.png',
  },
  {
    id: 'ticketa',
    title: 'Ticketa Event Platform',
    category: 'Event Discovery & Passes',
    type: 'uiux',
    folderPath: '/public/images/projects/ticketa/',
    recommendedFilename: 'hero.png',
  },
  {
    id: 'magicpay',
    title: 'MagicPay Fintech App',
    category: 'Fintech Mobile Application',
    type: 'uiux',
    folderPath: '/public/images/projects/magicpay/',
    recommendedFilename: 'hero.png',
  },
  {
    id: 'zibapay',
    title: 'ZibaPay Payment Platform',
    category: 'Payment Gateway & Portal',
    type: 'uiux',
    folderPath: '/public/images/projects/zibapay/',
    recommendedFilename: 'hero.png',
  },
  {
    id: 'profile-portrait',
    title: 'Isaiah Oluwatoyin Portrait',
    category: 'About Page & Bio Portrait',
    type: 'profile',
    folderPath: '/public/images/profile/',
    recommendedFilename: 'portrait.jpg',
  },
];

interface AssetContextType {
  uploadedAssets: UploadedAsset[];
  assignedSlots: Record<string, string>;
  isTrayOpen: boolean;
  setTrayOpen: (open: boolean) => void;
  draggedAsset: UploadedAsset | null;
  setDraggedAsset: (asset: UploadedAsset | null) => void;
  dragOverSlot: string | null;
  setDragOverSlot: (slotId: string | null) => void;
  uploadFiles: (files: FileList | File[]) => Promise<UploadedAsset[]>;
  assignAssetToSlot: (slotId: string, assetDataUrl: string) => void;
  removeAssignedAsset: (slotId: string) => void;
  deleteUploadedAsset: (assetId: string) => void;
  resetAll: () => void;
  getSlotImage: (slotId: string) => string | undefined;
  downloadAssetForFolder: (slot: ProjectSlot, dataUrl: string) => void;
}

const LOCAL_STORAGE_ASSIGNMENTS_KEY = 'isaiah_portfolio_assigned_images_v1';
const LOCAL_STORAGE_UPLOADS_KEY = 'isaiah_portfolio_uploaded_assets_v1';

const AssetContext = createContext<AssetContextType | undefined>(undefined);

// Helper to scale down oversized images before storing in localStorage
const optimizeImage = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const maxDim = 1920;
        let { width, height } = img;

        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(event.target?.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        // Use high-quality jpeg if not svg/transparent png
        const isPng = file.type === 'image/png';
        const dataUrl = canvas.toDataURL(isPng ? 'image/png' : 'image/jpeg', 0.88);
        resolve(dataUrl);
      };
      img.onerror = () => resolve(event.target?.result as string);
      img.src = event.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const AssetProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [uploadedAssets, setUploadedAssets] = useState<UploadedAsset[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_UPLOADS_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [assignedSlots, setAssignedSlots] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_ASSIGNMENTS_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [isTrayOpen, setTrayOpen] = useState<boolean>(false);
  const [draggedAsset, setDraggedAsset] = useState<UploadedAsset | null>(null);
  const [dragOverSlot, setDragOverSlot] = useState<string | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_ASSIGNMENTS_KEY, JSON.stringify(assignedSlots));
    } catch (e) {
      console.warn('LocalStorage quota limit reached for images:', e);
    }
  }, [assignedSlots]);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_UPLOADS_KEY, JSON.stringify(uploadedAssets));
    } catch (e) {
      console.warn('LocalStorage quota limit reached for uploaded assets:', e);
    }
  }, [uploadedAssets]);

  const uploadFiles = async (files: FileList | File[]): Promise<UploadedAsset[]> => {
    const fileArray = Array.from(files);
    const newAssets: UploadedAsset[] = [];

    for (const file of fileArray) {
      if (!file.type.startsWith('image/')) continue;

      try {
        const dataUrl = await optimizeImage(file);
        const formattedSize = file.size > 1024 * 1024
          ? `${(file.size / (1024 * 1024)).toFixed(1)} MB`
          : `${Math.round(file.size / 1024)} KB`;

        const asset: UploadedAsset = {
          id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
          name: file.name,
          dataUrl,
          sizeFormatted: formattedSize,
          type: file.type,
          timestamp: Date.now(),
        };

        newAssets.push(asset);
      } catch (err) {
        console.error('Failed to read image file:', err);
      }
    }

    if (newAssets.length > 0) {
      setUploadedAssets((prev) => [...newAssets, ...prev]);
      // Open tray automatically so the user sees their uploaded Figma designs ready to drag!
      setTrayOpen(true);
    }

    return newAssets;
  };

  const assignAssetToSlot = (slotId: string, assetDataUrl: string) => {
    setAssignedSlots((prev) => ({
      ...prev,
      [slotId]: assetDataUrl,
    }));
  };

  const removeAssignedAsset = (slotId: string) => {
    setAssignedSlots((prev) => {
      const next = { ...prev };
      delete next[slotId];
      return next;
    });
  };

  const deleteUploadedAsset = (assetId: string) => {
    setUploadedAssets((prev) => prev.filter((a) => a.id !== assetId));
  };

  const resetAll = () => {
    if (window.confirm('Reset all custom images back to default vector mockups?')) {
      setAssignedSlots({});
      setUploadedAssets([]);
      localStorage.removeItem(LOCAL_STORAGE_ASSIGNMENTS_KEY);
      localStorage.removeItem(LOCAL_STORAGE_UPLOADS_KEY);
    }
  };

  const getSlotImage = (slotId: string): string | undefined => {
    if (assignedSlots[slotId]) {
      return assignedSlots[slotId];
    }
    return undefined;
  };

  const downloadAssetForFolder = (slot: ProjectSlot, dataUrl: string) => {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = slot.recommendedFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AssetContext.Provider
      value={{
        uploadedAssets,
        assignedSlots,
        isTrayOpen,
        setTrayOpen,
        draggedAsset,
        setDraggedAsset,
        dragOverSlot,
        setDragOverSlot,
        uploadFiles,
        assignAssetToSlot,
        removeAssignedAsset,
        deleteUploadedAsset,
        resetAll,
        getSlotImage,
        downloadAssetForFolder,
      }}
    >
      {children}
    </AssetContext.Provider>
  );
};

export const useAssets = () => {
  const context = useContext(AssetContext);
  if (!context) {
    throw new Error('useAssets must be used within an AssetProvider');
  }
  return context;
};
