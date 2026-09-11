import React, { useState, useEffect } from 'react';
import {
  Search,
  Users,
  Compass,
  FileSpreadsheet,
  AlertCircle,
  CheckCircle,
  HelpCircle,
  Edit2,
  Check,
  RotateCcw,
} from 'lucide-react';
import { CaseStudyImageArea } from '../casestudy/CaseStudyImageArea';

export const PaceJetDiscovery: React.FC = () => {
  // Local editable research findings with localStorage persistence
  const defaultFindings = [
    'Users experienced significant friction when landing fees and fuel surcharges were separated from base charter estimates.',
    'Cabin layout and luggage dimensions were critical decision factors that travelers previously could not evaluate on mobile.',
    'Booking confidence required upfront confirmation of FBO terminal location and guaranteed flight departure times.',
  ];

  const [findings, setFindings] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pacejet_research_findings');
      if (saved) return JSON.parse(saved);
    } catch {}
    return defaultFindings;
  });

  const [editingFindingIdx, setEditingFindingIdx] = useState<number | null>(null);
  const [tempFindingText, setTempFindingText] = useState('');

  const [compNote, setCompNote] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('pacejet_comp_note');
      if (saved) return saved;
    } catch {}
    return 'Replace this section with my actual competitor research and findings.';
  });
  const [isEditingCompNote, setIsEditingCompNote] = useState(false);
  const [tempCompNote, setTempCompNote] = useState('');

  const handleSaveFinding = (index: number) => {
    const updated = [...findings];
    updated[index] = tempFindingText.trim() || defaultFindings[index];
    setFindings(updated);
    setEditingFindingIdx(null);
    try {
      localStorage.setItem('pacejet_research_findings', JSON.stringify(updated));
    } catch {}
  };

  const handleSaveCompNote = () => {
    const text = tempCompNote.trim() || 'Replace this section with my actual competitor research and findings.';
    setCompNote(text);
    setIsEditingCompNote(false);
    try {
      localStorage.setItem('pacejet_comp_note', text);
    } catch {}
  };

  return (
    <div className="space-y-28 lg:space-y-36">
      {/* ========================================================================= */}
      {/* 9. RESEARCH & DISCOVERY                                                   */}
      {/* ========================================================================= */}
      <section id="research" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>08 / Qualitative Discovery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            Research &amp; Discovery
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            The discovery phase focused on understanding the complexity of private aviation booking and identifying opportunities to improve the experience.
          </p>
        </div>

        {/* Areas Considered */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-5">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
            Core Inquiry Areas Evaluated
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {[
              { title: 'Aircraft Discovery', desc: 'How users explore available jet categories, charter sizes, and range capabilities.' },
              { title: 'Aircraft Specifications', desc: 'How cabin dimensions, seat layouts, baggage space, and year-of-make are presented.' },
              { title: 'Pricing Communication', desc: 'How base hourly charter rates, taxes, and fees are communicated transparently.' },
              { title: 'Booking Type Selection', desc: 'How travelers switch between full charter, empty-leg deals, and individual seat options.' },
              { title: 'Itinerary Clarity', desc: 'How multi-leg routing, private FBO terminals, and flight times are understood.' },
              { title: 'Payment Presentation', desc: 'How high-value security, card authorizations, and invoice handling are presented.' },
              { title: 'Post-Booking Trips', desc: 'How passengers access itinerary updates, terminal directions, and manifests after booking.' },
            ].map((area, i) => (
              <div key={i} className="p-4 rounded-xl bg-neutral-50/70 border border-neutral-200/60 space-y-1">
                <h4 className="font-bold text-neutral-900">{area.title}</h4>
                <p className="text-neutral-600 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Editable Research Findings Subsection */}
        <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50/40 border border-emerald-200/60 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[#1E7B21] font-bold">
              Key Research Findings
            </h3>
            <span className="text-[11px] font-mono text-neutral-600">
              Interactive · Click pencil to edit
            </span>
          </div>

          <div className="space-y-3">
            {findings.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-emerald-200/80 shadow-2xs flex items-start justify-between gap-3 text-sm"
              >
                {editingFindingIdx === idx ? (
                  <div className="flex-1 space-y-2">
                    <textarea
                      value={tempFindingText}
                      onChange={(e) => setTempFindingText(e.target.value)}
                      className="w-full text-xs p-2 rounded border border-neutral-300 focus:border-[#2EB732] focus:ring-1 focus:ring-[#2EB732] outline-none"
                      rows={2}
                    />
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleSaveFinding(idx)}
                        className="px-3 py-1 rounded bg-[#2EB732] text-white text-xs font-mono"
                      >
                        Save Finding
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingFindingIdx(null)}
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
                      <p className="text-neutral-800 text-xs sm:text-sm leading-relaxed">{item}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setEditingFindingIdx(idx);
                        setTempFindingText(item);
                      }}
                      className="text-neutral-400 hover:text-neutral-900 p-1 transition-colors shrink-0"
                      title="Edit this research finding"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Research Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="research_discovery_board"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — Competitive analysis / research board / notes"
            description="Visual artifacts from affinity mapping, qualitative interviews, or synthesized discovery notes."
            aspectRatio="16/9"
            defaultFit="cover"
            allowMultiple={false}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. COMPETITIVE ANALYSIS                                                  */}
      {/* ========================================================================= */}
      <section id="competitive" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>09 / Market Context</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            Competitive Analysis
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            Competitive analysis was used to understand patterns, conventions, and friction points across leading travel, aviation, and on-demand charter booking platforms.
          </p>
        </div>

        {/* 8 Comparison Categories */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-6">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
            Evaluated Functional Benchmarks Across Aviation Apps
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {[
              { title: 'Discovery', note: 'How swiftly travelers can access available charter tiers and filters.' },
              { title: 'Search', note: 'Form flexibility across one-way, return, and multi-leg origin/destinations.' },
              { title: 'Aircraft Info', note: 'Visual representation of cabin amenities, baggage limits, and layout.' },
              { title: 'Pricing', note: 'Transparency of guaranteed quote vs. broker estimate disclosures.' },
              { title: 'Booking', note: 'Number of discrete steps from jet selection to passenger confirmation.' },
              { title: 'Payment', note: 'Handling multi-currency authorizations and corporate card storage.' },
              { title: 'Trip Management', note: 'FBO terminal directions, gate passes, and captain notifications.' },
              { title: 'Navigation', note: 'Ease of switching between booking, live deals, and active manifests.' },
            ].map((cat, i) => (
              <div key={i} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70 space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#1E7B21]">0{i + 1}</span>
                <h4 className="font-bold text-neutral-900 text-xs">{cat.title}</h4>
                <p className="text-[11px] text-neutral-500 leading-snug">{cat.note}</p>
              </div>
            ))}
          </div>

          {/* Editable Competitor Research Note */}
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 text-xs flex items-start justify-between gap-3">
            {isEditingCompNote ? (
              <div className="flex-1 space-y-2">
                <textarea
                  value={tempCompNote}
                  onChange={(e) => setTempCompNote(e.target.value)}
                  className="w-full text-xs p-2 rounded border border-neutral-300 focus:border-amber-600 outline-none"
                  rows={2}
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handleSaveCompNote}
                    className="px-3 py-1 rounded bg-amber-600 text-white text-xs font-mono"
                  >
                    Save Note
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditingCompNote(false)}
                    className="px-3 py-1 rounded border border-neutral-300 text-neutral-600 text-xs font-mono"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="space-y-1">
                  <span className="font-mono uppercase font-bold text-amber-900 tracking-wider text-[11px]">
                    Note to Reader
                  </span>
                  <p className="text-amber-950 font-serif italic text-sm">
                    "{compNote}"
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditingCompNote(true);
                    setTempCompNote(compNote);
                  }}
                  className="text-amber-800 hover:text-amber-950 p-1 shrink-0"
                  title="Edit note"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Comp Analysis Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="competitive_analysis_board"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — Competitive analysis board"
            description="Audit matrix comparing private charter booking platforms across discovery, pricing, and trip management."
            aspectRatio="16/9"
            defaultFit="contain"
            allowMultiple={false}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. PERSONA                                                               */}
      {/* ========================================================================= */}
      <section id="persona" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>10 / Target Audience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            Understanding the User
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            Rather than relying on fictional archetypes, the profile focuses on genuine operational requirements and behavioral friction.
          </p>
        </div>

        {/* Persona Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-200/80 gap-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#1E7B21]">
                Primary User Archetype
              </span>
              <h3 className="text-2xl font-bold text-neutral-900 mt-1">
                Private Aviation Traveler
              </h3>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-mono">
              <Users className="w-3.5 h-3.5 text-neutral-500" />
              <span>Executives · Business Leaders · Charter Guests</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Needs */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1E7B21]">
                <CheckCircle className="w-4 h-4 text-[#2EB732]" />
                <span>Core User Needs</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700">
                {[
                  'Fast access to relevant flight information without broker phone calls',
                  'Clear, upfront guaranteed pricing with itemized taxes and fees',
                  'Confidence in aircraft selection through clear cabin layouts and seat capacity',
                  'Simple, low-friction booking process completed in minutes on mobile',
                  'Easy, persistent access to trip information, FBO addresses, and boarding passes',
                ].map((need, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2EB732] shrink-0 mt-2" />
                    <span>{need}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pain Points */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-rose-700">
                <AlertCircle className="w-4 h-4 text-rose-600" />
                <span>Critical Pain Points</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700">
                {[
                  'Too much unstructured technical information presented at once',
                  'Unclear pricing and unexpected landing fees added at final step',
                  'Complicated, multi-step booking procedures prone to drop-off',
                  'Difficulty comparing aircraft capacity, luggage allowances, and flight duration',
                  'Poor information hierarchy forcing users to search for basic trip details',
                ].map((pain, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2" />
                    <span>{pain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Persona Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="persona_artifact"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — Actual PaceJet persona"
            description="Detailed persona documentation or synthesized behavioral profile."
            aspectRatio="16/9"
            defaultFit="contain"
            allowMultiple={false}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. USER JOURNEY                                                          */}
      {/* ========================================================================= */}
      <section id="journey" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>11 / Experience Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            User Journey
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            The end-to-end travel lifecycle moves smoothly from initial route inquiry through post-flight itinerary management.
          </p>
        </div>

        {/* 5 Journey Stages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { phase: 'DISCOVER', title: 'Route Search', desc: 'User begins exploring available travel options, dates, and charter types.' },
            { phase: 'COMPARE', title: 'Aircraft Review', desc: 'User reviews aircraft categories, seat capacity, timing, and estimated cost.' },
            { phase: 'DECIDE', title: 'Jet Selection', desc: 'User selects an appropriate jet option tailored to passenger count and range.' },
            { phase: 'BOOK', title: 'Quote & Payment', desc: 'User reviews the quote breakdown, confirms itinerary, and authorizes payment.' },
            { phase: 'TRAVEL', title: 'Trip Access', desc: 'User accesses digital boarding info, FBO terminal coordinates, and captain details.' },
          ].map((stage, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#1E7B21] block">
                STAGE 0{i + 1} · {stage.phase}
              </span>
              <h3 className="text-base font-bold text-neutral-900">{stage.title}</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>

        {/* Journey Map Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="journey_map_artifact"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — Actual PaceJet journey map"
            description="Complete journey map tracking user actions, touchpoints, and emotional states."
            aspectRatio="16/9"
            defaultFit="contain"
            allowMultiple={false}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 13. WIREFRAMES                                                            */}
      {/* ========================================================================= */}
      <section id="wireframes" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>12 / Structural Exploration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            From Structure to Interface
          </h2>
          <div className="space-y-3 text-base sm:text-lg text-neutral-700 leading-relaxed">
            <p>
              Before moving into final visual design, the experience was structured through low and mid-fidelity wireframes and early layout explorations.
            </p>
            <p>
              The focus was on content hierarchy, screen structure, navigation, booking progression, information grouping, and interaction patterns—resolving complexity early.
            </p>
          </div>
        </div>

        {/* Wireframes Focus Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
          {[
            { label: 'Content Hierarchy', desc: 'Prioritizing primary price & flight times' },
            { label: 'Screen Structure', desc: 'Consistent top bar & bottom actions' },
            { label: 'Navigation', desc: 'Frictionless switching across 4 tabs' },
            { label: 'Booking Progression', desc: 'Step-by-step breadcrumb tracking' },
            { label: 'Information Grouping', desc: 'Card containers for high scannability' },
            { label: 'Interaction Patterns', desc: 'Bottom sheets for date & seat filters' },
          ].map((item, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-neutral-100/70 border border-neutral-200/80 space-y-1">
              <span className="text-[10px] font-mono font-bold text-neutral-500">0{i + 1}</span>
              <h4 className="font-bold text-neutral-900">{item.label}</h4>
              <p className="text-[11px] text-neutral-600 leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Wireframes Image Gallery Side-by-Side */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="wireframes_gallery"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — PaceJet wireframes"
            description="Display several wireframes side-by-side highlighting early layout tests for search, aircraft cards, quote modal, and checkout."
            aspectRatio="16/9"
            defaultFit="contain"
            allowMultiple={true}
          />
          <p className="text-xs text-neutral-600 font-mono text-center">
            Early wireframes helped establish hierarchy and interaction before visual refinement.
          </p>
        </div>
      </section>
    </div>
  );
};
