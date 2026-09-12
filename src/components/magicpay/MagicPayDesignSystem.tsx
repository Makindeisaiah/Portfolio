import React from 'react';
import { 
  Palette, 
  Type, 
  Layers, 
  Grid, 
  CheckCircle2, 
  Eye, 
  CreditCard, 
  Send, 
  Lock,
  Sparkles
} from 'lucide-react';
import { CaseStudyImageArea } from '../casestudy/CaseStudyImageArea';

export const MagicPayDesignSystem: React.FC = () => {
  const colorTokens = [
    {
      name: 'Magic Indigo',
      hex: '#4F46E5',
      role: 'Primary Brand Anchor & Key Interactive CTAs',
      textColor: 'text-white',
      bgClass: 'bg-[#4F46E5]',
    },
    {
      name: 'Electric Violet',
      hex: '#7C3AED',
      role: 'Secondary Accents, Gradients & Feature Badges',
      textColor: 'text-white',
      bgClass: 'bg-[#7C3AED]',
    },
    {
      name: 'Financial Emerald',
      hex: '#10B981',
      role: 'Positive Inflows, Verified Badges & Success States',
      textColor: 'text-white',
      bgClass: 'bg-[#10B981]',
    },
    {
      name: 'Alert Coral',
      hex: '#EF4444',
      role: 'Debits, Warnings & Error Validation Badges',
      textColor: 'text-white',
      bgClass: 'bg-[#EF4444]',
    },
    {
      name: 'Slate Obsidian',
      hex: '#0F172A',
      role: 'High-Contrast Typography & Core Headings',
      textColor: 'text-white',
      bgClass: 'bg-[#0F172A]',
    },
    {
      name: 'Cloud Canvas',
      hex: '#F8FAFC',
      role: 'Background Canvas & Elevated Card Surfaces',
      textColor: 'text-neutral-800',
      bgClass: 'bg-[#F8FAFC] border border-neutral-200',
    },
  ];

  const atomicComponents = [
    {
      name: 'Balance Privacy Pill',
      desc: 'Interactive pill toggle with eye icon that masks numerical balances into smooth security dots.',
      category: 'Atoms',
    },
    {
      name: 'Bank Switch Resolver Input',
      desc: 'Form input field with live asynchronous debounce that renders verified recipient name and bank logo.',
      category: 'Molecules',
    },
    {
      name: 'Beneficiary Avatar Ribbon',
      desc: 'Horizontal scrollable row of frequent payees with bank logo badges and 1-tap transfer trigger.',
      category: 'Organisms',
    },
    {
      name: 'Virtual Debit Card Canvas',
      desc: 'Interactive 3D-styled card with tap-to-reveal PAN/CVV toggles, monthly limit bar, and freeze state.',
      category: 'Organisms',
    },
    {
      name: 'Tactile Numeric Keypad',
      desc: 'Custom one-hand keypad with tactile spring feedback for rapid PIN authorization and amount entry.',
      category: 'Molecules',
    },
    {
      name: 'Verified Payment Receipt Card',
      desc: 'Structured transaction certificate with official bank switch session reference and 1-tap WhatsApp share.',
      category: 'Organisms',
    },
  ];

  return (
    <section id="design-system" className="space-y-12 scroll-mt-28">
      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-wider text-purple-600 font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-600" />
          12 / Systematic Foundation
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-display">
          The Design System: Engineered for Consistency & Trust
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
          Fintech applications require rigorous visual governance. I constructed a comprehensive Figma design system based on atomic design principles, ensuring mathematical spacing, accessible color contrast, and cohesive component variants across iOS and Android.
        </p>
      </div>

      {/* Color Palette Tokens */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-xs space-y-6">
        <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 font-display">
          <Palette className="w-4 h-4 text-indigo-600" />
          <span>Color Tokens & Contrast Governance</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {colorTokens.map((color) => (
            <div 
              key={color.name}
              className="p-4 rounded-2xl border border-neutral-200/80 space-y-3 flex flex-col justify-between"
            >
              <div className={`w-full h-14 rounded-xl ${color.bgClass} flex items-center justify-center shadow-xs`}>
                <span className={`text-[10px] font-mono font-bold ${color.textColor}`}>
                  {color.hex}
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-semibold text-neutral-900 block truncate">
                  {color.name}
                </span>
                <span className="text-[11px] text-neutral-500 block leading-tight">
                  {color.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Typography Hierarchy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 font-display">
            <Type className="w-4 h-4 text-purple-600" />
            <span>Typography System: Legibility First</span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Paired modern geometric sans typography with monospaced tabular numbers for all currency and balance strings. This ensures decimals and commas never cause layout shifts during live balance updates.
          </p>
          <div className="space-y-3 pt-2">
            <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 flex items-baseline justify-between">
              <span className="text-xs font-mono text-neutral-400">Display Hero</span>
              <span className="text-2xl font-bold text-neutral-900 font-display">$24,580.00</span>
            </div>
            <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 flex items-baseline justify-between">
              <span className="text-xs font-mono text-neutral-400">Section Title</span>
              <span className="text-base font-semibold text-neutral-900">Transfer Confirmation</span>
            </div>
            <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100 flex items-baseline justify-between">
              <span className="text-xs font-mono text-neutral-400">Tabular Mono Figures</span>
              <span className="text-sm font-mono text-neutral-700 font-medium">TXN_ID: #MP-8492019-902</span>
            </div>
          </div>
        </div>

        {/* 8pt Grid & Spacing */}
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 font-display">
            <Grid className="w-4 h-4 text-indigo-600" />
            <span>Spacing, Elevation & Touch Targets</span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            All elements snap to an 8pt spatial rhythm (8px, 16px, 24px, 32px). Interactive buttons have a minimum touch target of 48px to prevent accidental mis-taps on mobile touchscreens.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
              <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-1">
                Touch Targets
              </span>
              <span className="text-sm font-bold text-neutral-900">≥ 48px × 48px</span>
              <p className="text-[11px] text-neutral-500 mt-0.5">Zero mis-tap zone</p>
            </div>
            <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-100">
              <span className="text-[11px] font-mono uppercase text-neutral-400 block mb-1">
                Card Radii
              </span>
              <span className="text-sm font-bold text-neutral-900">16px – 24px</span>
              <p className="text-[11px] text-neutral-500 mt-0.5">Modern, soft curves</p>
            </div>
          </div>
        </div>
      </div>

      {/* Component Library Grid */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-xs space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-bold text-neutral-900 font-display">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>Figma Component Library Tokens</span>
          </div>
          <span className="text-xs font-mono text-neutral-400">
            Auto-Layout 5.0 & Variants
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {atomicComponents.map((comp) => (
            <div 
              key={comp.name} 
              className="p-4 bg-neutral-50/70 rounded-2xl border border-neutral-200/60 space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-neutral-900 font-sans">
                  {comp.name}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-neutral-500 border border-neutral-200">
                  {comp.category}
                </span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {comp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Design System Image Slot */}
      <div className="pt-2">
        <CaseStudyImageArea
          storageKey="design_system_tokens_artboard"
          storagePrefix="magicpay"
          placeholderLabel="UPLOAD: Design System Artboard (Colors, Typography, UI Components)"
          description="High-resolution presentation of the Figma design system file showing component variants, buttons, inputs, pills, and typography scale."
          aspectRatio="16/9"
        />
      </div>
    </section>
  );
};
