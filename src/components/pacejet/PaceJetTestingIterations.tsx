import React, { useState } from 'react';
import { Edit2 } from 'lucide-react';
import { CaseStudyImageArea } from '../casestudy/CaseStudyImageArea';

export const PaceJetTestingIterations: React.FC = () => {
  // Local editable design observations with localStorage persistence
  const defaultDesignObservations = [
    'Breaking complex booking information into focused steps makes the journey easier to scan and reduces the amount of information users need to process at once.',
    'Separating base pricing from additional fees creates a clearer view of the total booking cost before payment.',
    'Aircraft cards were refined to prioritize decision-making information such as cabin configuration, passenger capacity, range, and flight duration.',
    'Persistent navigation was simplified around the product\'s primary destinations: Book, Deals, Trips, and Profile.',
  ];

  const [testingInsights, setTestingInsights] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pacejet_design_observations');
      if (saved) return JSON.parse(saved);
    } catch {}
    return defaultDesignObservations;
  });

  const [editingInsightIdx, setEditingInsightIdx] = useState<number | null>(null);
  const [tempInsightText, setTempInsightText] = useState('');

  const handleSaveInsight = (idx: number) => {
    const updated = [...testingInsights];
    updated[idx] = tempInsightText.trim() || defaultDesignObservations[idx];
    setTestingInsights(updated);
    setEditingInsightIdx(null);
    try {
      localStorage.setItem('pacejet_design_observations', JSON.stringify(updated));
    } catch {}
  };

  return (
    <div className="space-y-28 lg:space-y-36">
      {/* ========================================================================= */}
      {/* 23. DESIGN REVIEW & ITERATION                                             */}
      {/* ========================================================================= */}
      <section id="testing" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>22 / Review &amp; Evaluation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            Design Review &amp; Iteration
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            I reviewed the redesigned experience across key booking scenarios, focusing on navigation clarity, booking progression, pricing transparency, aircraft comparison, itinerary comprehension, payment confidence, and system-wide consistency.
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
              { label: 'Aircraft Selection', desc: 'Cabin and aircraft comparison ease' },
              { label: 'Pricing Comprehension', desc: 'Itemized fee scanning' },
              { label: 'Itinerary Comprehension', desc: 'FBO terminal readability' },
              { label: 'Payment Flow', desc: 'Confidence before authorization' },
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

        {/* Editable Design Observations Subsection */}
        <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/40 border border-emerald-200/60 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#1E7B21] font-bold">
              Key Design Observations
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
                        Save Observation
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
                      title="Edit this design observation"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
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
            The experience evolved through design review and iteration, with each pass focused on improving hierarchy, spacing, component consistency, typography, and the presentation of important booking information.
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
              Transitioned from an endless scrolling form into focused, chunked steps with clear progression and persistent validation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
            <span className="text-[10px] font-mono font-bold text-[#1E7B21]">ITERATION 02</span>
            <h3 className="text-sm font-bold text-neutral-900">Pricing Transparency</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Separated airport fees, fuel surcharges, and other additional costs into clearer line items so the total price could be understood before payment.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
            <span className="text-[10px] font-mono font-bold text-[#1E7B21]">ITERATION 03</span>
            <h3 className="text-sm font-bold text-neutral-900">Aircraft Card Density</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Prioritized decision-making information such as cabin configuration, passenger capacity, and flight duration while reducing unnecessary technical detail.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
            <span className="text-[10px] font-mono font-bold text-[#1E7B21]">ITERATION 04</span>
            <h3 className="text-sm font-bold text-neutral-900">Navigation Alignment</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Simplified the app structure around four persistent destinations: Book, Deals, Trips, and Profile.
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
            The final PaceJet experience brings the major parts of the private aviation journey into one consistent mobile product, connecting aircraft discovery, booking, quotes, payment, deals, and trip management through a unified interface.
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
            PaceJet was a large-scale mobile product design project spanning more than 150 screens and states across multiple user journeys, booking scenarios, authentication states, edge cases, and operational product states.
          </p>
        </div>

        {/* Project Scale Multi-Screen Showcase */}
        <div className="space-y-2 max-w-5xl mx-auto">
          <CaseStudyImageArea
            storageKey="pacejet_scale_showcase"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD SCREENS — Product scale showcase (150+ Screens)"
            description="A curated gallery or multi-screen showcase demonstrating the scale of the product across core journeys, edge cases, and states."
            aspectRatio="16/9"
            defaultFit="contain"
            allowMultiple={true}
          />
        </div>
      </section>
    </div>
  );
};
