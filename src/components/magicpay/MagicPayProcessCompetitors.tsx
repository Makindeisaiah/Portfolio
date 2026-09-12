import React from 'react';
import { 
  GitCommit, 
  Search, 
  Layers, 
  Palette, 
  Smartphone, 
  TestTube, 
  CheckCircle2, 
  XCircle, 
  Building2, 
  Zap, 
  Award, 
  ArrowRight,
  TrendingUp,
  ShieldAlert
} from 'lucide-react';
import { CaseStudyImageArea } from '../casestudy/CaseStudyImageArea';

export const MagicPayProcessCompetitors: React.FC = () => {
  const processSteps = [
    {
      num: '01',
      title: 'Research & Discovery',
      desc: 'Conducted stakeholder discovery, evaluated user feedback patterns on modern banking apps, and audited everyday transaction habits across small business vendors and commuters.',
      tools: 'Desk Research, User Interviews',
    },
    {
      num: '02',
      title: 'Problem Framing & Persona',
      desc: 'Distilled insights into empathy maps and archetypes; prioritized friction points like transfer error anxiety, buried utilities, and lack of visual privacy in public spaces.',
      tools: 'Empathy Mapping, Journey Archetypes',
    },
    {
      num: '03',
      title: 'Information Architecture & Flows',
      desc: 'Mapped streamlined navigational hierarchy, flattening multi-level menus into primary bottom-tab destinations and rapid action sheets.',
      tools: 'IA Trees, User Logic Flows',
    },
    {
      num: '04',
      title: 'Low-Fidelity Wireframing',
      desc: 'Sketched and wireframed core screen wireframes to validate layout balance, content density, touch target sizing, and form validation micro-states.',
      tools: 'Figma Grayscale Wireframes',
    },
    {
      num: '05',
      title: 'Design System & Tokens',
      desc: 'Built atomic component tokens (colors, typography, spacing, inputs, buttons, sheets) with WCAG AA contrast compliance and crisp tactile feedback.',
      tools: 'Figma Variants, Auto-Layout 5.0',
    },
    {
      num: '06',
      title: 'High-Fidelity Interface Design',
      desc: 'Crafted production-ready UI screens for iOS and Android, focusing on modern fintech aesthetics with trustworthy purple/indigo gradients and legible numbers.',
      tools: 'Figma High-Fi Components',
    },
    {
      num: '07',
      title: 'Usability Testing & Iteration',
      desc: 'Tested task completion on high-stress workflows (instant transfer, utility token generation) and iterated based on real participant feedback.',
      tools: 'Figma Interactive Prototype',
    },
  ];

  const competitors = [
    {
      name: 'UBA (Incumbent Bank)',
      category: 'Tier-1 Legacy Commercial Bank',
      badge: 'Traditional Banking',
      color: 'border-red-200 bg-red-50/40 text-red-700',
      strengths: [
        'Established institutional trust and high liquidity',
        'Full spectrum of complex corporate banking services',
        'Widespread physical branch and ATM footprint',
      ],
      weaknesses: [
        'Overly cluttered multi-tier navigation with 20+ icons on home screen',
        'Slow recipient name resolution requiring manual validation popups',
        'Frequent session timeouts during OTP and multi-factor sequences',
      ],
      uxGap: 'High cognitive overload; everyday transfers feel bureaucratic rather than intuitive.',
    },
    {
      name: 'OPay',
      category: 'Agent Super-App & Rapid Payments',
      badge: 'Agent Network Leader',
      color: 'border-emerald-200 bg-emerald-50/40 text-emerald-700',
      strengths: [
        'High transaction success rates and rapid payment speed',
        'Strong offline agent network and cashback incentives',
        'Broad adoption across small-scale street merchants',
      ],
      weaknesses: [
        'Home screen is extremely dense with ads, loan promotions, and casino-like banners',
        'Visual hierarchy lacks restraint; difficult to locate personal account settings',
        'Aggressive push notifications and clutter create visual fatigue',
      ],
      uxGap: 'Sacrifices visual calm and aesthetic trust for aggressive cross-selling and banner ads.',
    },
    {
      name: 'Kuda',
      category: 'Digital-First Challenger Bank',
      badge: 'Digital Neo-bank',
      color: 'border-purple-200 bg-purple-50/40 text-purple-700',
      strengths: [
        'Clean modern aesthetic with recognizable purple brand identity',
        'Free monthly transfer quotas and smart budget sub-accounts',
        'Simple account opening with zero minimum balance requirement',
      ],
      weaknesses: [
        'Utility bill payment flows are tucked behind multiple nested screens',
        'International virtual cards frequently encounter transaction decline alerts',
        'Customer service ticketing is siloed with delayed resolution visibility',
      ],
      uxGap: 'Great minimalist branding, but core bill utility workflows require too many navigational clicks.',
    },
    {
      name: 'PalmPay',
      category: 'Fintech Rewards & Utility Platform',
      badge: 'Incentive-Driven Ecosystem',
      color: 'border-blue-200 bg-blue-50/40 text-blue-700',
      strengths: [
        'High discount coupons on airtime and electricity bills',
        'Gamified reward loops that drive daily app opens',
        'Fast contact-based peer-to-peer transfers',
      ],
      weaknesses: [
        'Heavy gamification (spin wheels, scratch cards) diminishes perception of bank-grade security',
        'Intrusive marketing popups disrupt critical transfer flows',
        'Confusing distinction between real wallet cash and promotional points',
      ],
      uxGap: 'Gamified features detract from professional financial security and trust.',
    },
  ];

  return (
    <div className="space-y-24">
      {/* ============================================================ */}
      {/* SECTION 5: DESIGN PROCESS */}
      {/* ============================================================ */}
      <section id="process" className="space-y-8 scroll-mt-28">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            04 / Methodology & Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-display">
            The Design Process: A Rigorous, Iterative Approach
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
            Crafting a dependable fintech experience requires balancing behavioral psychology with technical constraints. I followed a double-diamond inspired product design workflow to progress methodically from exploratory ambiguity to production fidelity.
          </p>
        </div>

        {/* 7-Step Timeline Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {processSteps.map((step, idx) => (
            <div 
              key={step.num}
              className={`p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-xs space-y-3 flex flex-col justify-between ${
                idx === 6 ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-r from-indigo-50/50 via-white to-purple-50/50 border-indigo-200/80' : ''
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-indigo-600 px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-100">
                    PHASE {step.num}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    {step.tools}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-neutral-900 pt-1">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Artifacts Image Slot */}
        <div className="pt-2">
          <CaseStudyImageArea
            storageKey="process_artifacts_overview"
            storagePrefix="magicpay"
            placeholderLabel="UPLOAD: Design Process Artifacts (Sketches, FigJam Workspace, Sticky Notes)"
            description="Collage showing the design evolution: early whiteboard sticky notes, user journey maps, and iterative Figma file organization."
            aspectRatio="16/9"
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6: COMPETITIVE ANALYSIS */}
      {/* ============================================================ */}
      <section id="competitive-analysis" className="space-y-8 scroll-mt-28">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-purple-600 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            05 / Market Landscape
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-display">
            Competitive Analysis: Auditing 4 Market Paradigms
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
            To identify white-space opportunities for MagicPay, I audited four major market players representing distinct product archetypes: traditional legacy banking (UBA), agent super-apps (OPay), digital challenger banks (Kuda), and reward-driven platforms (PalmPay).
          </p>
        </div>

        {/* 4 Competitor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competitors.map((comp) => (
            <div 
              key={comp.name} 
              className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-xs space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      {comp.name}
                    </h3>
                    <span className="text-xs text-neutral-500 font-sans">
                      {comp.category}
                    </span>
                  </div>
                  <span className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border ${comp.color}`}>
                    {comp.badge}
                  </span>
                </div>

                {/* Strengths */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase text-emerald-700 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Key Strengths
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-600">
                    {comp.strengths.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase text-rose-700 font-semibold flex items-center gap-1.5">
                    <XCircle className="w-3.5 h-3.5" />
                    Identified UX Weaknesses
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-600">
                    {comp.weaknesses.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-rose-400 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* UX Gap Insight */}
              <div className="pt-3 border-t border-neutral-100 bg-neutral-50/70 p-3 rounded-xl">
                <span className="text-[11px] font-mono font-bold uppercase text-neutral-700 block mb-0.5">
                  Critical Product Gap
                </span>
                <p className="text-xs text-neutral-600 leading-snug">
                  {comp.uxGap}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Market Opportunity Callout */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-indigo-900 to-purple-900 text-white rounded-2xl space-y-4">
          <div className="flex items-center gap-2 text-indigo-200 text-xs font-mono uppercase tracking-wider font-semibold">
            <TrendingUp className="w-4 h-4" />
            <span>MagicPay's Strategic Product Opportunity</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Positioning Between Bureaucratic Complexity and Ad Clutter
          </h3>
          <p className="text-sm sm:text-base text-neutral-200 leading-relaxed max-w-4xl">
            While legacy banks drown users in bureaucratic sub-menus and fintech super-apps overwhelm them with gambling promotions and ad banners, MagicPay carved out an uncompromising sweet spot: <strong className="text-white">a calm, transparent, high-speed banking experience</strong> with zero advertisements, instant recipient verification, and contextual privacy built directly into daily flows.
          </p>
        </div>

        {/* Competitor Matrix Diagram Image Slot */}
        <div className="pt-2">
          <CaseStudyImageArea
            storageKey="competitive_matrix_table"
            storagePrefix="magicpay"
            placeholderLabel="UPLOAD: Competitive Analysis Matrix Chart (Feature Comparison)"
            description="Detailed comparison table tracking UBA, OPay, Kuda, PalmPay, and MagicPay across Transfer Speed, Verification Clarity, Utility Accessibility, and UI Density."
            aspectRatio="16/9"
          />
        </div>
      </section>
    </div>
  );
};
