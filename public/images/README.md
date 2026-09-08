# Portfolio Image Assets Directory

This directory is organized for Isaiah Oluwatoyin's portfolio projects and personal profile assets. You can place exported images from Figma directly into each project's folder, OR you can use the live **Figma Asset Manager** inside the web app to drag and drop images directly onto any project card.

---

## 📁 Directory Structure

```
public/
└── images/
    ├── profile/
    │   └── portrait.jpg (or portrait.png) — Isaiah's profile photo for About page & Hero
    └── projects/
        ├── omony-atelier-studios/
        │   ├── hero.png (or hero.jpg) — Main showcase image (16:9 or 16:10 aspect ratio)
        │   └── screens/ — Optional secondary screens (screen-1.png, etc.)
        ├── validreams-property-management/
        │   ├── hero.png (or hero.jpg) — Main showcase image (16:9 aspect ratio)
        │   └── screens/
        ├── koikimedia-international-news/
        │   ├── hero.png (or hero.jpg) — Main showcase image (16:9 aspect ratio)
        │   └── screens/
        ├── pacejet/
        │   ├── hero.png (or hero.jpg) — Avionics booking app / platform hero
        │   └── screens/
        ├── ticketa/
        │   ├── hero.png (or hero.jpg) — Event ticketing interface hero
        │   └── screens/
        ├── magicpay/
        │   ├── hero.png (or hero.jpg) — Fintech mobile app hero (e.g. mobile frame 9:16 or wide mockup)
        │   └── screens/
        └── zibapay/
            ├── hero.png (or hero.jpg) — Payment platform hero
            └── screens/
```

---

## 🚀 How to Insert Images: Two Methods

### Method 1: In-App Drag & Drop (Fastest & Live)
1. Open the portfolio in your browser.
2. Click the floating **"Figma Assets"** button at the bottom-right corner of the screen.
3. Drag and drop your exported Figma frames or design files directly into the upload box.
4. Drag any image from the shelf and **drop it directly onto the project card or mockup** you want to update!
5. Your image immediately renders across the homepage, showcase catalogs, and detail pages. The app automatically saves it to browser storage.

### Method 2: Insert into Folders (Permanent Git/File Storage)
1. In Figma, select your desired frame or mockup.
2. In the right panel, go to **Export** -> choose **PNG** (or **JPG**), set scale to **@2x**.
3. Save the exported image into the respective project folder:
   - For example: `public/images/projects/omony-atelier-studios/hero.png`
4. The application checks for `/images/projects/<project-id>/hero.png`. If present, it will automatically display instead of the default vector mockup!

---

## 📐 Recommended Export Specifications

| Asset Type | Recommended Dimensions | Format | Aspect Ratio |
|---|---|---|---|
| **Website Hero Showcase** | 1920 × 1080px or 2560 × 1440px | PNG / WebP | 16:9 |
| **Mobile App Mockup (MagicPay)** | 1170 × 2532px or 1242 × 2688px | PNG (transparent) | 9:19.5 (iPhone) |
| **Platform Dashboard (Ticketa/ZibaPay)** | 1920 × 1200px or 2880 × 1800px | PNG / WebP | 16:10 |
| **Profile Portrait** | 1200 × 1500px | JPG / PNG | 4:5 |
