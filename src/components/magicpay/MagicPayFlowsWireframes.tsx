import React from 'react';
import { 
  GitBranch, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone, 
  Layers, 
  ShieldCheck, 
  CreditCard, 
  Zap, 
  Lock,
  Compass,
  FileCode,
  Layout
} from 'lucide-react';
import { CaseStudyImageArea } from '../casestudy/CaseStudyImageArea';

export const MagicPayFlowsWireframes: React.FC = () => {
  const flows = [
    {
      title: 'Flow 1: Instant Peer-to-Peer Transfer & Verification',
      badge: 'Core Primary Workflow',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      description: 'Streamlined flow engineered to eliminate the fear of typing wrong bank details through asynchronous live resolution.',
      steps: [
        { label: '01. Trigger', detail: 'User taps "Send Money" or selects a recent avatar from the quick drawer.' },
        { label: '02. Bank Switch Query', detail: 'User enters 10-digit number; app queries interbank switch on digit 10.' },
        { label: '03. Identity Resolved', detail: 'Confirmed legal recipient name, bank badge, and avatar render with a green trust check.' },
        { label: '04. Amount & Note', detail: 'User enters amount with preset buttons; zero-fee policy displayed prominently.' },
        { label: '05. Biometric Auth', detail: 'Sub-second Face ID / Touch ID validation without cumbersome SMS OTP delays.' },
        { label: '06. Receipt & Sharing', detail: 'Dynamic confirmation screen with instant WhatsApp PDF share and transaction ledger record.' },
      ],
    },
    {
      title: 'Flow 2: 2-Tap Airtime & Prepaid Utility Bill Recharge',
      badge: 'High-Frequency Routine',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      description: 'Consolidated bottom-sheet workflow designed to eliminate multi-screen category hunting when buying electricity or cellular data.',
      steps: [
        { label: '01. Open Drawer', detail: 'Tap "Pay Bills" quick action pill directly on the home dashboard.' },
        { label: '02. Category Selection', detail: 'Electricity, Airtime, Internet, Cable TV tabs presented side-by-side.' },
        { label: '03. Saved Meter/Phone', detail: 'Recent meters and phones appear as 1-tap chips; new meter IDs validate customer name instantly.' },
        { label: '04. One-Tap Authorization', detail: 'Quick select denomination ($10, $25, $50) and authorize payment.' },
        { label: '05. Instant Token Copy', detail: '20-digit prepaid electricity token renders in large typography with a 1-tap copy button.' },
      ],
    },
    {
      title: 'Flow 3: Virtual Card Creation & Spend Limit Configuration',
      badge: 'Self-Serve Security',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'Zero-paperwork virtual card provisioning allowing users to shop globally while safeguarding their primary account balance.',
      steps: [
        { label: '01. Cards Hub', detail: 'Navigate to "Cards" tab from bottom navigation bar.' },
        { label: '02. Card Specification', detail: 'Choose USD Virtual Card or Local Currency Card with customizable card color theme.' },
        { label: '03. Funding & Limit', detail: 'Allocate starting balance and define strict monthly spending ceiling.' },
        { label: '04. Biometric Issuance', detail: 'Instant provisioning with tap-to-reveal 16-digit PAN, CVV, and expiry date.' },
        { label: '05. Security Controls', detail: 'Instant one-tap freeze toggle and online transaction toggle.' },
      ],
    },
  ];

  return (
    <div className="space-y-24">
      {/* ============================================================ */}
      {/* SECTION 10: USER FLOWS */}
      {/* ============================================================ */}
      <section id="user-flows" className="space-y-8 scroll-mt-28">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            09 / Logic & Navigation
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-display">
            User Flows: Engineering Frictionless Decision Trees
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
            Every step in a financial application either builds trust or introduces hesitation. I engineered structured task logic flows that reduce cognitive friction, validate data asynchronously, and eliminate dead-end states.
          </p>
        </div>

        {/* Structured Task Flows */}
        <div className="space-y-6">
          {flows.map((flow, i) => (
            <div 
              key={i}
              className="p-6 sm:p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-xs space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-100">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 font-display">
                    {flow.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                    {flow.description}
                  </p>
                </div>
                <span className={`text-[11px] font-mono font-medium px-3 py-1 rounded-full border self-start sm:self-auto ${flow.badgeColor}`}>
                  {flow.badge}
                </span>
              </div>

              {/* Steps progression */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {flow.steps.map((step, sIdx) => (
                  <div 
                    key={sIdx}
                    className="p-4 bg-neutral-50/70 rounded-2xl border border-neutral-200/60 space-y-1.5"
                  >
                    <span className="text-xs font-mono font-bold text-indigo-600 block">
                      {step.label}
                    </span>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* User Flows Image Slot */}
        <div className="pt-2">
          <CaseStudyImageArea
            storageKey="user_flows_diagram_canvas"
            storagePrefix="magicpay"
            placeholderLabel="UPLOAD: Detailed User Flow Diagrams (Figma Architecture Export)"
            description="High-resolution architecture diagram showing screen decision trees, conditional error states, and biometric authorization pathways."
            aspectRatio="16/9"
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 11: WIREFRAMES (LOW-TO-MID FIDELITY) */}
      {/* ============================================================ */}
      <section id="wireframes" className="space-y-8 scroll-mt-28">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-purple-600 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            10 / Structural Exploration
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-display">
            Wireframes: Establishing Spatial Ergonomics Before Styling
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
            Before applying visual finishes, I created comprehensive low-to-mid fidelity grayscale wireframes. This deliberate constraint allowed me to test layout density, one-hand thumb reachability, and information hierarchy without being distracted by color or illustration.
          </p>
        </div>

        {/* Wireframing Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center font-mono text-sm font-bold">
              01
            </div>
            <h3 className="text-base font-semibold text-neutral-900">
              One-Hand Ergonomic Zone
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Positioning primary action triggers (Send, Bills, Top-Up) and the numeric keypad strictly within the natural thumb sweep radius of standard 6.1" to 6.7" smartphones.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center font-mono text-sm font-bold">
              02
            </div>
            <h3 className="text-base font-semibold text-neutral-900">
              Inline Error Containment
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Replacing modal alert dialogs with inline helper hints beneath input fields, preventing disruptive context switching when a user inputs an invalid meter number.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-xs space-y-3">
            <div className="w-9 h-9 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center font-mono text-sm font-bold">
              03
            </div>
            <h3 className="text-base font-semibold text-neutral-900">
              Bottom-Sheet Modality
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Utilizing fluid bottom sheets for contextual sub-tasks so the user never loses psychological awareness of the underlying dashboard state.
            </p>
          </div>
        </div>

        {/* Wireframes Image Slot */}
        <div className="pt-2">
          <CaseStudyImageArea
            storageKey="wireframes_artboard_collection"
            storagePrefix="magicpay"
            placeholderLabel="UPLOAD: Low-to-Mid Fidelity Wireframes (Multi-Screen Artboard)"
            description="Grayscale wireframe artboards showing the Home screen, Send Money steps, Utility hub, and Virtual Card drawer before visual styling."
            aspectRatio="16/9"
          />
        </div>
      </section>
    </div>
  );
};
