import React from 'react';
import { 
  TestTube, 
  RefreshCw, 
  CheckCircle2, 
  TrendingUp, 
  Lightbulb, 
  Compass, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Award
} from 'lucide-react';
import { CaseStudyImageArea } from '../casestudy/CaseStudyImageArea';

export const MagicPayTestingResults: React.FC = () => {
  const iterations = [
    {
      title: 'Iteration 1: Recipient Verification Timing',
      before: 'Recipient account name was only queried on the final confirmation screen, right before PIN entry.',
      after: 'Engineered inline asynchronous resolution that renders the verified recipient name as soon as the 10th digit is typed.',
      rationale: 'During testing, users reported high anxiety when typing 10 digits blindly. Validating early prevents misdirected funds before the user invests effort in typing an amount.',
    },
    {
      title: 'Iteration 2: Unifying Airtime & Mobile Data',
      before: 'Airtime recharge and Data bundles were two separate navigational categories requiring individual flows.',
      after: 'Combined both into a single quick drawer with a segmented toggle and instant one-tap contact picker.',
      rationale: 'Testing revealed that users frequently buy both airtime and data consecutively. Unifying the workflow cut the interaction steps from 6 screens down to 2 taps.',
    },
    {
      title: 'Iteration 3: Balance Privacy Accessibility',
      before: 'Balance masking was hidden inside Profile > Security > Privacy Settings.',
      after: 'Moved the eye privacy toggle directly into the main balance card with one-tap toggle feedback.',
      rationale: 'Privacy is situational; commuters boarding a crowded bus need to mask numbers in less than one second, not dig through deep settings menus.',
    },
  ];

  const futureRoadmap = [
    {
      title: 'Multi-Currency Smart Wallets',
      desc: 'Seamless multi-currency balances (USD, EUR, GBP, NGN) with real-time interbank FX rates and instant auto-conversion.',
    },
    {
      title: 'Automated Group Savings Pots',
      desc: 'Collaborative goal-oriented savings vaults with automated lock periods, shared ledger rules, and milestone badges.',
    },
    {
      title: 'Offline Merchant QR Payments',
      desc: 'Dynamic offline QR code generator and Bluetooth beacon protocol for seamless payments in zero-network environments.',
    },
  ];

  return (
    <div className="space-y-24">
      {/* ============================================================ */}
      {/* SECTION 14: USABILITY TESTING & ITERATIONS */}
      {/* ============================================================ */}
      <section id="testing" className="space-y-8 scroll-mt-28">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            13 / Validation & Evolution
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-display">
            Usability Testing: Validating Interactions Under Pressure
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
            I conducted task-based usability sessions with real everyday mobile banking users to evaluate completion speed, cognitive friction, and emotional confidence across core workflows.
          </p>
        </div>

        {/* Usability Testing Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 bg-white rounded-2xl border border-neutral-200/80 shadow-xs space-y-1.5">
            <span className="text-[11px] font-mono uppercase text-neutral-400 font-semibold block">
              Methodology
            </span>
            <h3 className="text-sm font-bold text-neutral-900">
              Moderated Task Walkthroughs
            </h3>
            <p className="text-xs text-neutral-500">
              Observed users completing high-frequency tasks in simulated noisy environments.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-neutral-200/80 shadow-xs space-y-1.5">
            <span className="text-[11px] font-mono uppercase text-neutral-400 font-semibold block">
              Tested Scenarios
            </span>
            <h3 className="text-sm font-bold text-neutral-900">
              3 High-Stakes Financial Tasks
            </h3>
            <p className="text-xs text-neutral-500">
              P2P transfer, emergency electricity meter top-up, and virtual card limit lock.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-neutral-200/80 shadow-xs space-y-1.5">
            <span className="text-[11px] font-mono uppercase text-neutral-400 font-semibold block">
              Key Metric Focus
            </span>
            <h3 className="text-sm font-bold text-neutral-900">
              Confidence & Hesitation Pauses
            </h3>
            <p className="text-xs text-neutral-500">
              Measured where users stopped to re-read instructions or experienced uncertainty.
            </p>
          </div>
        </div>

        {/* Before & After Iteration Cards */}
        <div className="space-y-5">
          <h3 className="text-lg font-bold text-neutral-900 font-display">
            Key Design Iterations: Before vs. After
          </h3>

          <div className="grid grid-cols-1 gap-5">
            {iterations.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 bg-white rounded-3xl border border-neutral-200/80 shadow-xs space-y-4"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-indigo-600 px-2 py-0.5 bg-indigo-50 rounded">
                    0{idx + 1}
                  </span>
                  <h4 className="text-base font-bold text-neutral-900">
                    {item.title}
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-rose-50/50 rounded-2xl border border-rose-100 space-y-1">
                    <span className="text-[11px] font-mono uppercase text-rose-700 font-bold block">
                      Initial Approach (Before)
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                      {item.before}
                    </p>
                  </div>

                  <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 space-y-1">
                    <span className="text-[11px] font-mono uppercase text-emerald-700 font-bold block">
                      Refined Solution (After)
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-800 font-medium leading-relaxed">
                      {item.after}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-100 text-xs text-neutral-600 leading-relaxed">
                  <strong className="text-neutral-900 font-semibold">Design Rationale: </strong>
                  {item.rationale}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Usability Testing Image Slot */}
        <div className="pt-2">
          <CaseStudyImageArea
            storageKey="usability_testing_comparison"
            storagePrefix="magicpay"
            placeholderLabel="UPLOAD: Usability Testing Iteration Diagrams (Before vs. After Screens)"
            description="Side-by-side visual comparison showing how the transfer sheet and airtime drawer evolved through user testing feedback."
            aspectRatio="16/9"
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 15: RESULTS & IMPACT */}
      {/* ============================================================ */}
      <section id="results" className="space-y-8 scroll-mt-28">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            14 / Outcomes & Value
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-display">
            Results: Elevating the Standard for Everyday Banking
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
            By grounding the product in behavioral clarity rather than decorative fluff, MagicPay established a dependable benchmark for mobile financial interaction.
          </p>
        </div>

        {/* Qualitative Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-neutral-900">
              Zero Transfer Hesitation
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Participants completed peer-to-peer transfers with zero hesitation pauses thanks to prominent recipient identity badges and live switch confirmation.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-neutral-900">
              Rapid Utility Recharging
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Saved meter memory and unified airtime/data drawers eliminated the multi-screen navigation fatigue observed in legacy banking applications.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-neutral-900">
              Scalable Design System
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Constructed 60+ modular Figma component tokens ready for immediate developer handoff across React Native, Swift, and Kotlin codebases.
            </p>
          </div>
        </div>

        {/* Results Showcase Image Slot */}
        <div className="pt-2">
          <CaseStudyImageArea
            storageKey="results_showcase_canvas"
            storagePrefix="magicpay"
            placeholderLabel="UPLOAD: Results & Product Milestones Presentation"
            description="Visual summary highlighting user satisfaction touchpoints, design system coverage, and high-fidelity mockups."
            aspectRatio="16/9"
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 16: KEY LEARNINGS & CONCLUSION */}
      {/* ============================================================ */}
      <section id="conclusion" className="space-y-8 scroll-mt-28">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            15 / Retrospective & Roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-display">
            Key Learnings & Future Product Vision
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
            Designing MagicPay reinforced critical lessons about building high-stakes consumer financial tools where trust is fragile and every micro-second matters.
          </p>
        </div>

        {/* 3 Core Learnings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-xs space-y-3">
            <h3 className="text-base font-bold text-neutral-900 flex items-center gap-2">
              <span className="text-indigo-600 font-mono">01.</span>
              Trust is Micro-Engineered
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              In fintech, trust isn't created by polished marketing slogans; it is built through micro-feedback: an instant name resolution, a clear zero-fee breakdown, and a transparent confirmation receipt.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-xs space-y-3">
            <h3 className="text-base font-bold text-neutral-900 flex items-center gap-2">
              <span className="text-indigo-600 font-mono">02.</span>
              Design for Worst-Case Contexts
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Users don't always bank in quiet, well-lit rooms with 5G WiFi. They bank while standing on crowded buses, in noisy marketplaces, with low battery and spotty 3G data. Good UX must thrive under stress.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-xs space-y-3">
            <h3 className="text-base font-bold text-neutral-900 flex items-center gap-2">
              <span className="text-indigo-600 font-mono">03.</span>
              Restraint is a Feature
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Resisting the urge to fill the screen with promotional banners, scratch cards, and loan cross-sells was the most impactful decision made. Visual calm communicates financial security.
            </p>
          </div>
        </div>

        {/* Future Product Roadmap */}
        <div className="p-6 sm:p-8 bg-neutral-900 text-white rounded-3xl space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
              Future Iterations
            </span>
            <h3 className="text-xl font-bold font-display text-white">
              What I Would Design Next for MagicPay
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {futureRoadmap.map((item, rIdx) => (
              <div 
                key={rIdx}
                className="p-5 bg-neutral-800/80 rounded-2xl border border-neutral-700/80 space-y-2"
              >
                <h4 className="text-sm font-bold text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
