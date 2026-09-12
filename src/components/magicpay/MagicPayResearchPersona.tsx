import React from 'react';
import { 
  User, 
  Target, 
  AlertCircle, 
  HeartHandshake, 
  Compass, 
  Lightbulb, 
  Smile, 
  Frown, 
  Meh, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock
} from 'lucide-react';
import { CaseStudyImageArea } from '../casestudy/CaseStudyImageArea';

export const MagicPayResearchPersona: React.FC = () => {
  const journeyPhases = [
    {
      phase: '01. Launch & Access',
      action: 'Opens app while walking through a busy subway or market street.',
      emotion: 'Cautious / Anxious',
      emotionIcon: Meh,
      emotionColor: 'text-amber-500 bg-amber-50',
      friction: 'Fear that bystanders will view full account balances over their shoulder.',
      opportunity: 'Instant biometric login with default-masked balance mode until explicit user tap.',
    },
    {
      phase: '02. Recipient Entry',
      action: 'Copies vendor 10-digit account number from WhatsApp and selects destination bank.',
      emotion: 'Hesitant / Stressed',
      emotionIcon: Frown,
      emotionColor: 'text-rose-500 bg-rose-50',
      friction: 'Anxiety that a mistyped digit will send funds to an unknown stranger.',
      opportunity: 'Asynchronous switch lookup displaying verified account name & bank badge immediately.',
    },
    {
      phase: '03. Authorizing Transfer',
      action: 'Inputs amount, reviews zero-fee confirmation preview, and authenticates with Face ID.',
      emotion: 'Reassured / Focused',
      emotionIcon: Smile,
      emotionColor: 'text-indigo-500 bg-indigo-50',
      friction: 'Hidden charges or confusing OTP delays that cause anxiety over double-charging.',
      opportunity: 'Transparent fee breakdown ($0.00) with sub-second local settlement confirmation.',
    },
    {
      phase: '04. Utility Bill Payment',
      action: 'Needs electricity meter recharge before prepaid unit power cuts out.',
      emotion: 'Rushed / Urgent',
      emotionIcon: Meh,
      emotionColor: 'text-amber-500 bg-amber-50',
      friction: 'Searching through multi-layered categories and re-typing long 11-digit meter IDs.',
      opportunity: 'Unified quick bills sheet with saved meter cards and one-tap 20-digit token copying.',
    },
    {
      phase: '05. Sharing Proof of Payment',
      action: 'Sends official receipt to vendor via messaging app to release goods.',
      emotion: 'Relieved / Satisfied',
      emotionIcon: Smile,
      emotionColor: 'text-emerald-500 bg-emerald-50',
      friction: 'Cluttered screenshot or low-resolution image that vendor refuses to accept.',
      opportunity: 'Clean, formatted PDF/image receipt with official bank switch transaction reference.',
    },
  ];

  return (
    <div className="space-y-24">
      {/* ============================================================ */}
      {/* SECTION 7: USER PERSONA */}
      {/* ============================================================ */}
      <section id="persona" className="space-y-8 scroll-mt-28">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            06 / Target Archetype
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-display">
            User Persona: Understanding the Daily Financial Operator
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
            To ground product decisions in authentic human behavior, I developed an archetype representing an active digital consumer and entrepreneur whose livelihood hinges on prompt, dependable money transfers.
          </p>
        </div>

        {/* Persona Profile Card */}
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-xs space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-neutral-100">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-display text-2xl font-bold shadow-md">
                AB
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-950 font-display">
                  Amina Bello
                </h3>
                <p className="text-sm text-neutral-500">
                  28 Years Old • E-Commerce Brand Owner & Urban Professional
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                    High Daily Transaction Frequency
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                    Mobile-First Banking
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-100 max-w-sm">
              <p className="text-xs sm:text-sm italic text-neutral-700 font-sans leading-relaxed">
                “When I pay a vendor or supplier in the market, I need 100% certainty the money goes to the right person before I authorize it. I don't have time for failed apps or confusing fees.”
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Habits & Behaviors */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-indigo-600" />
                Habits & Behaviors
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>Executes 10–25 transfers daily to raw material suppliers and courier drivers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>Pays electricity meters, internet bills, and airtime top-ups from mobile on-the-go.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>Frequently uses public transit where shoulder-surfing is an active concern.</span>
                </li>
              </ul>
            </div>

            {/* Core Goals */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-emerald-600" />
                Core Goals
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Verify recipient names instantly before tapping confirm to avoid catastrophic mistakes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Generate instant, high-trust payment receipts that vendors accept immediately.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>Create virtual cards with strict spending limits for international software tools.</span>
                </li>
              </ul>
            </div>

            {/* Frustrations */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                Key Frustrations
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Unpredictable bank network downtime right when finalizing an urgent vendor payment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Tedious OTP codes that expire due to cellular network delays in congested areas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Inability to hide total balance figures when opening the app around colleagues or transit passengers.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Persona Image Slot */}
        <div className="pt-2">
          <CaseStudyImageArea
            storageKey="persona_empathy_canvas"
            storagePrefix="magicpay"
            placeholderLabel="UPLOAD: User Persona & Empathy Map Canvas"
            description="Detailed persona canvas showing behavioral traits, needs, pain points, and quote callouts."
            aspectRatio="16/9"
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 8: RESEARCH & INSIGHTS */}
      {/* ============================================================ */}
      <section id="research" className="space-y-8 scroll-mt-28">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-purple-600 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            07 / Qualitative Discovery
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-display">
            Research Insights: Uncovering the Psychological Realities of Money
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
            Rather than relying on assumptions, I conducted observational studies and contextual inquiries exploring how people interact with mobile banking during everyday high-frequency moments. Four foundational behavioral patterns emerged:
          </p>
        </div>

        {/* 4 Core Research Findings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 space-y-3">
            <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Insight 1: Real-Time Confirmation Precedes Trust</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Users universally hesitate at the final payment step. They repeatedly double-check 10-digit numbers on paper or WhatsApp chats. Providing instant, inline bank resolution with the beneficiary's registered name eliminates this cognitive stall entirely.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 space-y-3">
            <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm">
              <Zap className="w-4 h-4" />
              <span>Insight 2: Airtime & Data Are Urgent, Not Exploratory</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              When a user runs out of cellular data, they are operating in an impaired state. Navigating deep hierarchical menus to top up is deeply frustrating. A rapid bottom drawer with preset quick amounts ($5, $10, $20) and saved numbers cuts execution time dramatically.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 space-y-3">
            <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
              <Lock className="w-4 h-4" />
              <span>Insight 3: Privacy is a Physical Safety Issue</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              In dense metropolitan settings, banking in public is perceived as a physical risk. Users frequently tilt their screens or shield them with their hands. A tactile, persistent balance toggle gives users immediate psychological ownership of their visual perimeter.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 space-y-3">
            <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>Insight 4: Receipts are Commercial Contracts</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              A transaction is not complete when the balance deducts; it is complete when the vendor receives proof. Designing receipts as elegant, official cards with verified switch session IDs and direct WhatsApp sharing creates immediate closure for both parties.
            </p>
          </div>
        </div>

        {/* Research Artifacts Image Slot */}
        <div className="pt-2">
          <CaseStudyImageArea
            storageKey="research_interview_notes"
            storagePrefix="magicpay"
            placeholderLabel="UPLOAD: Qualitative Research Notes & Affinity Diagram"
            description="Synthesis board clustering user statements, observed friction points, and behavioral quotes from exploratory interviews."
            aspectRatio="16/9"
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 9: USER JOURNEY MAP */}
      {/* ============================================================ */}
      <section id="user-journey" className="space-y-8 scroll-mt-28">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            08 / Experience Mapping
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-display">
            User Journey Map: Tracking the Emotional Curve of Money Movement
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
            By mapping the end-to-end journey from app launch to receipt sharing, I pinpointed the moments of highest friction and translated them directly into deliberate UX safeguards.
          </p>
        </div>

        {/* Structured Journey Steps */}
        <div className="space-y-4">
          {journeyPhases.map((phase, idx) => {
            const Icon = phase.emotionIcon;
            return (
              <div 
                key={idx} 
                className="p-5 sm:p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-xs hover:border-indigo-200 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-neutral-100">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-indigo-600 px-2 py-0.5 bg-indigo-50 rounded">
                      {phase.phase}
                    </span>
                    <h3 className="text-sm font-semibold text-neutral-900">
                      {phase.action}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${phase.emotionColor}`}>
                      <Icon className="w-3.5 h-3.5" />
                      {phase.emotion}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase text-rose-500 font-semibold block">
                      Observed Friction & Anxiety
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {phase.friction}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase text-emerald-600 font-semibold block">
                      MagicPay Design Opportunity
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                      {phase.opportunity}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Journey Map Image Slot */}
        <div className="pt-2">
          <CaseStudyImageArea
            storageKey="journey_map_detailed_canvas"
            storagePrefix="magicpay"
            placeholderLabel="UPLOAD: Comprehensive User Journey Map Diagram"
            description="End-to-end journey canvas visualizing touchpoints, user mental states, friction barriers, and design interventions across desktop and mobile."
            aspectRatio="16/9"
          />
        </div>
      </section>
    </div>
  );
};
