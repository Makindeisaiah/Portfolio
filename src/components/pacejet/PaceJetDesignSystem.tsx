import React from 'react';
import {
  Type,
  Palette,
  Layers,
  Component,
  MousePointer,
  ToggleLeft,
  Loader,
  CreditCard,
  Plane,
  FileText,
  Calendar,
  Check,
} from 'lucide-react';
import { CaseStudyImageArea } from '../casestudy/CaseStudyImageArea';

export const PaceJetDesignSystem: React.FC = () => {
  return (
    <div className="space-y-28 lg:space-y-36">
      {/* ========================================================================= */}
      {/* 14. DESIGN DIRECTION                                                      */}
      {/* ========================================================================= */}
      <section id="direction" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>13 / Visual Identity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            Creating a Premium Aviation Experience
          </h2>
          <div className="space-y-3 text-base sm:text-lg text-neutral-700 leading-relaxed">
            <p>
              The visual direction was designed around clarity, trust, and premium aviation.
            </p>
            <p>
              The goal was to avoid unnecessary decoration and allow important booking information to remain easy to scan, ensuring a balance between high-end aesthetics and effortless utility.
            </p>
          </div>
        </div>

        {/* 7 Visual Design Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 text-xs">
          {[
            { title: 'Clean Layouts', desc: 'Uncluttered card structures' },
            { title: 'Strong Typography', desc: 'Poppins with strict hierarchy' },
            { title: 'Aviation Imagery', desc: 'High-res certified aircraft' },
            { title: 'Controlled Color', desc: 'Green & yellow functional accents' },
            { title: 'Clear Spacing', desc: 'Generous negative padding' },
            { title: 'Structured Cards', desc: 'Itemized flight containers' },
            { title: 'Visual Hierarchy', desc: 'Instant price & route scanning' },
          ].map((pillar, i) => (
            <div key={i} className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-2xs space-y-1 text-center sm:text-left">
              <span className="text-[10px] font-mono font-bold text-[#1E7B21]">0{i + 1}</span>
              <h4 className="font-bold text-neutral-900">{pillar.title}</h4>
              <p className="text-[11px] text-neutral-500 leading-tight">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Design Direction Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="visual_direction_moodboard"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — Visual exploration / moodboard"
            description="Moodboard and visual benchmarks establishing the premium private aviation identity."
            aspectRatio="16/9"
            defaultFit="cover"
            allowMultiple={false}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 15. TYPOGRAPHY                                                            */}
      {/* ========================================================================= */}
      <section id="typography" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>14 / Type Scale</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            Typography
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            The typography system was intentionally kept compact to prevent unnecessary visual complexity and maintain a consistent hierarchy across the product.
          </p>
        </div>

        {/* Poppins Spec Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-200 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">Primary Typeface</span>
              <h3 className="text-3xl font-bold text-neutral-900 mt-1">Poppins</h3>
              <p className="text-xs text-neutral-500 mt-0.5">Geometric sans-serif optimized for mobile scannability</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded bg-neutral-100 font-normal">Regular (400)</span>
              <span className="px-3 py-1 rounded bg-neutral-100 font-medium">Medium (500)</span>
              <span className="px-3 py-1 rounded bg-neutral-100 font-semibold">SemiBold (600)</span>
              <span className="px-3 py-1 rounded bg-neutral-100 font-bold">Bold (700)</span>
            </div>
          </div>

          {/* Scale breakdown */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
              Standardized Modular Type Hierarchy
            </span>
            <div className="divide-y divide-neutral-100 border-y border-neutral-100">
              {[
                { size: '28px', level: 'H1', weight: 'Bold (700)', sample: 'Private Jet Charter Options', usage: 'Major view headers & quotes' },
                { size: '20px', level: 'H2', weight: 'SemiBold (600)', sample: 'Citation XLS+ Midsize Cabin', usage: 'Aircraft names & section titles' },
                { size: '18px', level: 'H3', weight: 'SemiBold (600)', sample: '$297,000 Total Charter Cost', usage: 'Key price anchors & modal titles' },
                { size: '16px', level: 'Body (Large)', weight: 'Medium (500)', sample: 'London Luton (LTN) → Geneva Cointrin (GVA)', usage: 'Form inputs, primary itinerary legs' },
                { size: '14px', level: 'Body (Default)', weight: 'Regular (400)', sample: 'Aircraft capacity: 8 passengers · Luggage: 6 large cases', usage: 'General specifications & descriptions' },
                { size: '12px', level: 'Caption', weight: 'Regular / Medium', sample: 'All-inclusive guaranteed charter quote with taxes & fees', usage: 'Metadata tags, legal disclaimers, timestamps' },
              ].map((item, i) => (
                <div key={i} className="py-3 flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div className="flex items-center gap-3 w-48 shrink-0">
                    <span className="text-xs font-mono font-bold text-[#1E7B21]">{item.size}</span>
                    <span className="text-xs font-mono text-neutral-500">{item.level}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-neutral-900" style={{ fontSize: item.size, lineHeight: '1.3' }}>
                      {item.sample}
                    </p>
                  </div>
                  <div className="text-right text-[11px] font-mono text-neutral-600 hidden lg:block w-56 shrink-0">
                    {item.usage}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Typography Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="typography_system"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — PaceJet typography design-system section"
            description="Figma typography specifications showing font hierarchy, letter-spacing, and line-height tokens."
            aspectRatio="16/9"
            defaultFit="contain"
            allowMultiple={false}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 16. COLOR SYSTEM                                                          */}
      {/* ========================================================================= */}
      <section id="colors" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>15 / Color Palette</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            Color System
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            The color system was intentionally simplified around a primary green and yellow accent while using neutral colors to maintain clarity and accessibility.
          </p>
        </div>

        {/* Swatches Grid */}
        <div className="space-y-8">
          {/* Primary & Accent */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-xl shadow-inner shrink-0 border border-neutral-300"
                style={{ backgroundColor: '#2EB732' }}
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase font-bold text-neutral-500">Primary</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-50 text-[#1E7B21] font-semibold">
                    #2EB732
                  </span>
                </div>
                <h4 className="text-sm font-bold text-neutral-900">PaceJet Green</h4>
                <p className="text-xs text-neutral-500 leading-tight">
                  Action buttons, active nav states, verified badges, and confirmation indicators.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-xl shadow-inner shrink-0 border border-neutral-300"
                style={{ backgroundColor: '#FCD53F' }}
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase font-bold text-neutral-500">Accent</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-semibold">
                    #FCD53F
                  </span>
                </div>
                <h4 className="text-sm font-bold text-neutral-900">Aviation Yellow</h4>
                <p className="text-xs text-neutral-500 leading-tight">
                  Jet Deals tags, promotional highlights, urgency chips, and selected controls.
                </p>
              </div>
            </div>
          </div>

          {/* Primary Text & Neutral Colors */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
              Neutrals &amp; Text Foundation
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { hex: '#1E1E1E', name: 'Primary Text', role: 'Headlines & data' },
                { hex: '#6B7280', name: 'Secondary Text', role: 'Subtitles & labels' },
                { hex: '#9CA3AF', name: 'Muted Gray', role: 'Placeholders & icons' },
                { hex: '#F1F5F9', name: 'Slate Canvas', role: 'Screen backgrounds' },
                { hex: '#FFFFFF', name: 'Pure White', role: 'Card surface' },
              ].map((c, i) => (
                <div key={i} className="space-y-2">
                  <div
                    className="h-12 rounded-lg border border-neutral-200 shadow-2xs"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div>
                    <span className="text-xs font-mono font-bold text-neutral-900 block">{c.hex}</span>
                    <span className="text-[11px] font-medium text-neutral-700 block">{c.name}</span>
                    <span className="text-[10px] text-neutral-600 block">{c.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Supporting Colors */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
              Supporting UI &amp; State Tones
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { hex: '#E5E7EB', name: 'Border Light', role: 'Dividers & containers' },
                { hex: '#E8F5E9', name: 'Light Green', role: 'Success pill backgrounds' },
                { hex: '#F9FAFB', name: 'Surface Subtle', role: 'Alternating list rows' },
                { hex: '#FFF3CD', name: 'Soft Amber', role: 'Empty-leg deal chips' },
                { hex: '#D1D5DB', name: 'Input Border', role: 'Text field strokes' },
              ].map((c, i) => (
                <div key={i} className="space-y-2">
                  <div
                    className="h-10 rounded-lg border border-neutral-200 shadow-2xs"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div>
                    <span className="text-xs font-mono font-bold text-neutral-900 block">{c.hex}</span>
                    <span className="text-[11px] font-medium text-neutral-700 block">{c.name}</span>
                    <span className="text-[10px] text-neutral-600 block">{c.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Color Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="color_palette_system"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — PaceJet color system"
            description="Color palette sheet from Figma demonstrating contrast compliance (WCAG AA), token names, and dark/light usages."
            aspectRatio="16/9"
            defaultFit="contain"
            allowMultiple={false}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 17. DESIGN SYSTEM                                                         */}
      {/* ========================================================================= */}
      <section id="system" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>16 / Scalable Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            Design System
          </h2>
          <div className="space-y-3 text-base sm:text-lg text-neutral-700 leading-relaxed">
            <p>
              Because the product contains 150+ screens, consistency was essential.
            </p>
            <p>
              I created a reusable design system covering the core elements required throughout the experience, ensuring engineering velocity and seamless interaction parity.
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          {[
            { name: 'Inputs', desc: 'Text fields, passenger counters, date pickers' },
            { name: 'Cards', desc: 'Aircraft previews, quotes, itinerary, payments' },
            { name: 'Icons', desc: 'Aviation wayfinding, cabin features, alerts' },
            { name: 'Buttons', desc: 'Primary #2EB732, secondary, disabled, light' },
            { name: 'Navigation', desc: 'Fixed bottom bar, modal headers, tabs' },
            { name: 'Tabs', desc: 'One-way, return, multi-leg segment switchers' },
            { name: 'Toggles', desc: 'Empty-leg alerts, saved card toggles' },
            { name: 'Loading States', desc: 'Skeleton shimmers, quote calculating indicators' },
          ].map((cat, i) => (
            <div key={i} className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-2xs space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#1E7B21]">0{i + 1}</span>
              <h4 className="font-bold text-neutral-900">{cat.name}</h4>
              <p className="text-[11px] text-neutral-500 leading-tight">{cat.desc}</p>
            </div>
          ))}
        </div>

        {/* Large Design System Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="full_design_system_board"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — Full PaceJet Design System"
            description="A comprehensive view of the master component library, variants, autolayout rules, and state matrix in Figma."
            aspectRatio="21/9"
            defaultFit="cover"
            allowMultiple={false}
          />
          <p className="text-xs text-neutral-600 font-mono text-center">
            A reusable component system helped maintain consistency across the product.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 18. COMPONENTS                                                            */}
      {/* ========================================================================= */}
      <section id="components" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>17 / Component Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            Reusable Components
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            Every interactive touchpoint was codified with standardized spacing, padding math, and responsive state variants.
          </p>
        </div>

        {/* Visual Component Breakout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Inputs */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <span className="text-xs font-mono uppercase font-bold text-[#1E7B21]">Category 01</span>
            <h3 className="text-base font-bold text-neutral-900">Input Fields</h3>
            <p className="text-xs text-neutral-600">Standardized form fields across authentication, booking &amp; checkout:</p>
            <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px] font-mono text-neutral-700">
              <span className="p-1.5 rounded bg-neutral-50 border border-neutral-200/60">• Full name</span>
              <span className="p-1.5 rounded bg-neutral-50 border border-neutral-200/60">• Phone number</span>
              <span className="p-1.5 rounded bg-neutral-50 border border-neutral-200/60">• Password</span>
              <span className="p-1.5 rounded bg-neutral-50 border border-neutral-200/60">• Verification code</span>
              <span className="p-1.5 rounded bg-neutral-50 border border-neutral-200/60">• Card number</span>
              <span className="p-1.5 rounded bg-neutral-50 border border-neutral-200/60">• Expiry date</span>
              <span className="p-1.5 rounded bg-neutral-50 border border-neutral-200/60">• CVV</span>
              <span className="p-1.5 rounded bg-neutral-50 border border-neutral-200/60">• Card holder</span>
            </div>
          </div>

          {/* Cards */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <span className="text-xs font-mono uppercase font-bold text-[#1E7B21]">Category 02</span>
            <h3 className="text-base font-bold text-neutral-900">Information Cards</h3>
            <p className="text-xs text-neutral-600">Structured modular cards presenting dense aviation details:</p>
            <div className="space-y-1.5 pt-1 text-[11px] font-mono text-neutral-700">
              <div className="p-1.5 rounded bg-neutral-50 border border-neutral-200/60">• Jet cards (specs, capacity, pricing)</div>
              <div className="p-1.5 rounded bg-neutral-50 border border-neutral-200/60">• Flight quote (itemized breakdown)</div>
              <div className="p-1.5 rounded bg-neutral-50 border border-neutral-200/60">• Itinerary (FBO terminals &amp; timings)</div>
              <div className="p-1.5 rounded bg-neutral-50 border border-neutral-200/60">• Payment card &amp; saved wallet</div>
              <div className="p-1.5 rounded bg-neutral-50 border border-neutral-200/60">• Trip information &amp; boarding status</div>
            </div>
          </div>

          {/* Controls */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <span className="text-xs font-mono uppercase font-bold text-[#1E7B21]">Category 03</span>
            <h3 className="text-base font-bold text-neutral-900">Interactive Controls</h3>
            <p className="text-xs text-neutral-600">Segmented selectors and parameter adjustments:</p>
            <div className="grid grid-cols-2 gap-1.5 pt-1 text-[11px] font-mono text-neutral-700">
              <span className="p-1.5 rounded bg-neutral-50 border border-neutral-200/60">• One-way</span>
              <span className="p-1.5 rounded bg-neutral-50 border border-neutral-200/60">• Return</span>
              <span className="p-1.5 rounded bg-neutral-50 border border-neutral-200/60">• Multi-leg</span>
              <span className="p-1.5 rounded bg-neutral-50 border border-neutral-200/60">• Quantity counter</span>
              <span className="p-1.5 rounded bg-neutral-50 border border-neutral-200/60">• Switch toggles</span>
              <span className="p-1.5 rounded bg-neutral-50 border border-neutral-200/60">• Loading shimmers</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <span className="text-xs font-mono uppercase font-bold text-[#1E7B21]">Category 04</span>
            <h3 className="text-base font-bold text-neutral-900">Button Styles</h3>
            <p className="text-xs text-neutral-600">Strictly mapped call-to-action hierarchy:</p>
            <div className="space-y-1.5 pt-1 text-xs">
              <div className="px-3 py-1.5 rounded-md bg-[#2EB732] text-white font-mono text-[11px] flex justify-between">
                <span>Primary</span>
                <span>#2EB732</span>
              </div>
              <div className="px-3 py-1.5 rounded-md bg-neutral-900 text-white font-mono text-[11px] flex justify-between">
                <span>Secondary</span>
                <span>#1E1E1E</span>
              </div>
              <div className="px-3 py-1.5 rounded-md bg-[#FCD53F] text-neutral-900 font-mono text-[11px] flex justify-between">
                <span>Accent</span>
                <span>#FCD53F</span>
              </div>
              <div className="px-3 py-1.5 rounded-md bg-neutral-200 text-neutral-400 font-mono text-[11px] flex justify-between">
                <span>Disabled</span>
                <span>#D1D5DB</span>
              </div>
              <div className="px-3 py-1.5 rounded-md bg-[#E8F5E9] text-[#1E7B21] font-mono text-[11px] flex justify-between">
                <span>Light Green</span>
                <span>#E8F5E9</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3 md:col-span-2 lg:col-span-2">
            <span className="text-xs font-mono uppercase font-bold text-[#1E7B21]">Category 05</span>
            <h3 className="text-base font-bold text-neutral-900">Navigation Matrix</h3>
            <p className="text-xs text-neutral-600">Fixed persistent tab bar with clear visual indicators:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs">
              <div className="p-3 rounded-lg bg-neutral-50 border border-[#2EB732]/40 text-center space-y-1">
                <Plane className="w-4 h-4 text-[#2EB732] mx-auto" />
                <span className="font-bold text-neutral-900 block">Book</span>
                <span className="text-[10px] text-neutral-500 block">Primary Search</span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-center space-y-1">
                <span className="text-[11px] font-bold text-amber-700 block">Deals</span>
                <span className="font-bold text-neutral-900 block">Jet Deals</span>
                <span className="text-[10px] text-neutral-500 block">Empty Legs</span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-center space-y-1">
                <Calendar className="w-4 h-4 text-neutral-400 mx-auto" />
                <span className="font-bold text-neutral-900 block">Trips</span>
                <span className="text-[10px] text-neutral-500 block">Itineraries</span>
              </div>
              <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-center space-y-1">
                <span className="text-[11px] font-bold text-neutral-500 block">Profile</span>
                <span className="font-bold text-neutral-900 block">Account</span>
                <span className="text-[10px] text-neutral-500 block">Preferences</span>
              </div>
            </div>
          </div>
        </div>

        {/* Components Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="component_library_showcase"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — Component library"
            description="Figma component sheet showing input states, card variants, buttons, toggles, and modals."
            aspectRatio="16/9"
            defaultFit="contain"
            allowMultiple={false}
          />
        </div>
      </section>
    </div>
  );
};
