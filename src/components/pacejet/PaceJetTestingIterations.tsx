import React, { useState } from 'react';
import {
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Smartphone,
  Plus,
  Trash2,
  Edit2,
  Layers,
} from 'lucide-react';
import { CaseStudyImageArea } from '../casestudy/CaseStudyImageArea';

export const PaceJetTestingIterations: React.FC = () => {
  // Local editable testing insights with localStorage persistence
  const defaultTestingInsights = [
    'Participants identified flight quotes faster when taxes and fees were itemized directly beneath the basic charter price.',
    'Separating the booking flow into distinct, labeled phases reduced cognitive overwhelm during aircraft selection.',
    'Adding quick passenger manifest auto-fill significantly accelerated return-trip reservations.',
  ];

  const [testingInsights, setTestingInsights] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pacejet_testing_insights');
      if (saved) return JSON.parse(saved);
    } catch {}
    return defaultTestingInsights;
  });

  const [editingInsightIdx, setEditingInsightIdx] = useState<number | null>(null);
  const [tempInsightText, setTempInsightText] = useState('');

  const handleSaveInsight = (idx: number) => {
    const updated = [...testingInsights];
    updated[idx] = tempInsightText.trim() || defaultTestingInsights[idx];
    setTestingInsights(updated);
    setEditingInsightIdx(null);
    try {
      localStorage.setItem('pacejet_testing_insights', JSON.stringify(updated));
    } catch {}
  };

  // 150+ Screens Dynamic Grid
  const [extraScreens, setExtraScreens] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('pacejet_extra_screens_count');
      if (saved) {
        const count = parseInt(saved, 10);
        return Array.from({ length: count }, (_, i) => i + 11);
      }
    } catch {}
    return [];
  });

  const handleAddScreen = () => {
    const nextNum = (extraScreens.length > 0 ? extraScreens[extraScreens.length - 1] : 10) + 1;
    const updated = [...extraScreens, nextNum];
    setExtraScreens(updated);
    try {
      localStorage.setItem('pacejet_extra_screens_count', updated.length.toString());
    } catch {}
  };

  return (
    <div className="space-y-28 lg:space-y-36">
      {/* ========================================================================= */}
      {/* 23. TESTING                                                               */}
      {/* ========================================================================= */}
      <section id="testing" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>22 / Usability Validation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            Testing &amp; Iteration
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            Testing sessions were conducted to review the clarity, scannability, and operational usability of the restructured experience.
          </p>
        </div>

        {/* Reviewed Areas */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-6">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
            Qualitative Evaluation Criteria
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 text-xs">
            {[
              { label: 'Navigation', desc: 'Bottom tab accessibility' },
              { label: 'Booking Flow', desc: 'Step progression clarity' },
              { label: 'Aircraft Selection', desc: 'Cabin compare ease' },
              { label: 'Pricing Comprehension', desc: 'Itemized fee scanning' },
              { label: 'Itinerary Comprehension', desc: 'FBO terminal readability' },
              { label: 'Payment Flow', desc: 'Confidence at authorization' },
              { label: 'Consistency', desc: 'System-wide visual harmony' },
            ].map((area, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#1E7B21]">0{i + 1}</span>
                <h4 className="font-bold text-neutral-900">{area.label}</h4>
                <p className="text-[11px] text-neutral-500 leading-snug">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Editable Testing Insights Subsection */}
        <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/40 border border-emerald-200/60 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#1E7B21] font-bold">
              Key Testing Insights
            </h3>
            <span className="text-[11px] font-mono text-neutral-600">
              Interactive · Click pencil to edit
            </span>
          </div>

          <div className="space-y-3">
            {testingInsights.map((insight, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-emerald-200/80 shadow-2xs flex items-start justify-between gap-3 text-sm"
              >
                {editingInsightIdx === idx ? (
                  <div className="flex-1 space-y-2">
                    <textarea
                      value={tempInsightText}
                      onChange={(e) => setTempInsightText(e.target.value)}
                      className="w-full text-xs p-2 rounded border border-neutral-300 focus:border-[#2EB732] outline-none"
                      rows={2}
                    />
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleSaveInsight(idx)}
                        className="px-3 py-1 rounded bg-[#2EB732] text-white text-xs font-mono"
                      >
                        Save Insight
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingInsightIdx(null)}
                        className="px-3 py-1 rounded border border-neutral-200 text-neutral-600 text-xs font-mono"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#2EB732]/10 text-[#1E7B21] font-mono text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <p className="text-neutral-800 text-xs sm:text-sm leading-relaxed">{insight}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setEditingInsightIdx(idx);
                        setTempInsightText(insight);
                      }}
                      className="text-neutral-400 hover:text-neutral-900 p-1 transition-colors shrink-0"
                      title="Edit this testing insight"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testing Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="testing_artifacts_board"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — Testing screens / usability testing / iterations"
            description="Documentation of prototype testing sessions, user feedback notes, and design evolution."
            aspectRatio="16/9"
            defaultFit="cover"
            allowMultiple={false}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 24. ITERATIONS                                                            */}
      {/* ========================================================================= */}
      <section id="iterations" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>23 / Design Evolution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            From Feedback to Refinement
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            The design was refined by improving hierarchy, spacing, component consistency, typography, and the presentation of important booking information.
          </p>
        </div>

        {/* Before / After Equal Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-neutral-500">
                Before: Earlier Version
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-200 text-neutral-600">
                Unstructured
              </span>
            </div>
            <CaseStudyImageArea
              storageKey="iteration_before_screens"
              storagePrefix="pacejet"
              placeholderLabel="UPLOAD IMAGE — Earlier version"
              description="Upload screenshots of earlier concepts or initial layouts before restructuring."
              aspectRatio="4/3"
              defaultFit="contain"
              allowMultiple={false}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#1E7B21]">
                After: Final Redesign
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-[#1E7B21] font-bold">
                Refined &amp; Scaled
              </span>
            </div>
            <CaseStudyImageArea
              storageKey="iteration_after_screens"
              storagePrefix="pacejet"
              placeholderLabel="UPLOAD IMAGE — Final version"
              description="Upload screenshots of the finalized refined interfaces with consistent tokens and hierarchy."
              aspectRatio="4/3"
              defaultFit="contain"
              allowMultiple={false}
            />
          </div>
        </div>

        {/* 4 Iteration Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
            <span className="text-[10px] font-mono font-bold text-[#1E7B21]">ITERATION 01</span>
            <h3 className="text-sm font-bold text-neutral-900">Booking Progression</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Transitioned from an endless scrolling form into focused chunked steps with sticky bottom validation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
            <span className="text-[10px] font-mono font-bold text-[#1E7B21]">ITERATION 02</span>
            <h3 className="text-sm font-bold text-neutral-900">Pricing Transparency</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Isolated airport fees and fuel surcharges into dedicated line items, eliminating surprise costs at payment.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
            <span className="text-[10px] font-mono font-bold text-[#1E7B21]">ITERATION 03</span>
            <h3 className="text-sm font-bold text-neutral-900">Aircraft Card Density</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Prioritized cabin cross-sections, seat limits, and flight times over non-essential aviation technical jargon.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
            <span className="text-[10px] font-mono font-bold text-[#1E7B21]">ITERATION 04</span>
            <h3 className="text-sm font-bold text-neutral-900">Navigation Alignment</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Simplified the app shell to four persistent pillars (Book, Deals, Trips, Profile) for frictionless wayfinding.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 25. FINAL PRODUCT                                                         */}
      {/* ========================================================================= */}
      <section id="final-product" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>24 / Complete Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            The Final Experience
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            The final PaceJet experience brings together the major parts of the private aviation journey into one consistent, premium mobile product.
          </p>
        </div>

        {/* 9 Product Areas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2 text-center text-xs">
          {[
            'Booking',
            'Jet Discovery',
            'Jet Details',
            'Jet Deals',
            'Quotes',
            'Itinerary',
            'Payment',
            'Trips',
            'Profile',
          ].map((item, i) => (
            <div key={i} className="p-3 rounded-xl bg-white border border-neutral-200/90 shadow-2xs space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#1E7B21]">0{i + 1}</span>
              <p className="font-semibold text-neutral-900 text-xs">{item}</p>
            </div>
          ))}
        </div>

        {/* Large Final Screens Collection */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="final_product_collection"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — Large collection of final PaceJet screens"
            description="A horizontal gallery showcasing the finalized high-fidelity screens across all key travel stages."
            aspectRatio="16/9"
            defaultFit="cover"
            allowMultiple={true}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 26. FULL APP SHOWCASE (150+ Screens)                                      */}
      {/* ========================================================================= */}
      <section id="showcase-screens" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>25 / Project Scale</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            150+ Screens
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            PaceJet was a large-scale mobile product design project with more than 150 screens across different user journeys, edge cases, authentication states, and operational product states.
          </p>
        </div>

        {/* Editorial Collage / Grid */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
              const formattedNum = num < 10 ? `0${num}` : `${num}`;
              return (
                <div key={num} className="space-y-2">
                  <div className="flex items-center justify-between px-1">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase">
                      Screen {formattedNum}
                    </span>
                  </div>
                  <CaseStudyImageArea
                    storageKey={`showcase_screen_${formattedNum}`}
                    storagePrefix="pacejet"
                    placeholderLabel={`[UPLOAD SCREEN ${formattedNum}]`}
                    description={`High-fidelity screen ${formattedNum}`}
                    aspectRatio="phone"
                    defaultFit="contain"
                    allowMultiple={false}
                  />
                </div>
              );
            })}

            {/* Extra dynamically added screens */}
            {extraScreens.map((num) => (
              <div key={num} className="space-y-2">
                <div className="flex items-center justify-between px-1">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">
                    Screen {num}
                  </span>
                </div>
                <CaseStudyImageArea
                  storageKey={`showcase_screen_${num}`}
                  storagePrefix="pacejet"
                  placeholderLabel={`[UPLOAD SCREEN ${num}]`}
                  description={`High-fidelity screen ${num}`}
                  aspectRatio="phone"
                  defaultFit="contain"
                  allowMultiple={false}
                />
              </div>
            ))}
          </div>

          {/* Add more screens button */}
          <div className="flex justify-center pt-4">
            <button
              type="button"
              onClick={handleAddScreen}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-300 hover:border-neutral-900 bg-white text-neutral-800 text-xs font-mono uppercase tracking-wider transition-colors shadow-2xs"
            >
              <Plus className="w-3.5 h-3.5 text-[#2EB732]" />
              <span>Add More Screen Placeholders</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
