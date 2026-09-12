import React from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  EyeOff, 
  Send, 
  CreditCard, 
  Receipt, 
  Zap, 
  ShieldCheck, 
  HelpCircle,
  Clock,
  Fingerprint,
  ArrowRight
} from 'lucide-react';
import { CaseStudyImageArea } from '../casestudy/CaseStudyImageArea';

export const MagicPayOverviewSolution: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* ============================================================ */}
      {/* SECTION 2: PROJECT OVERVIEW */}
      {/* ============================================================ */}
      <section id="overview" className="space-y-8 scroll-mt-28">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600" />
            01 / Executive Context
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-display">
            Project Overview: Rethinking Daily Financial Management
          </h2>
        </div>

        <div className="prose prose-neutral max-w-none text-neutral-600 leading-relaxed space-y-4">
          <p className="text-base sm:text-lg text-neutral-700">
            <strong className="text-neutral-950 font-semibold">MagicPay</strong> is a comprehensive digital banking and mobile payment experience conceptualized to make daily financial operations — peer-to-peer transfers, bills and utility payments, airtime/data top-ups, virtual card provisioning, and spending intelligence — effortless, transparent, and anxiety-free.
          </p>
          <p>
            In emerging digital markets, mobile banking adoption has skyrocketed, yet users still battle significant friction: confusing nested menus, catastrophic fears of typing the wrong 10-digit account number, abrupt session timeouts, and lack of visual privacy when opening accounts in crowded public transport or workplaces.
          </p>
          <p>
            As the <strong className="text-neutral-900 font-medium">Product Designer</strong> on this project, my mandate was to design the complete product experience from ground up in Figma — conducting competitive audits, defining user flows, engineering interactive wireframes, establishing a scalable design system, and validating every interaction through focused usability testing.
          </p>
        </div>

        {/* Core Product Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-neutral-900">
              Transactional Velocity
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Reducing the steps required for recurring daily actions like airtime top-up and frequent vendor transfers from 6+ screens down to a 2-tap gesture.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-neutral-900">
              Transactional Confidence
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Introducing asynchronous live bank switch lookups to display the verified recipient name, avatar, and bank icon before any money leaves the user's account.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <EyeOff className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-neutral-900">
              Contextual Privacy
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Integrating quick-mask balance toggles and discreet transaction shields designed specifically for users commuting on crowded urban transit.
            </p>
          </div>
        </div>

        {/* Overview Image slot */}
        <div className="pt-2">
          <CaseStudyImageArea
            storageKey="overview_ecosystem_map"
            storagePrefix="magicpay"
            placeholderLabel="UPLOAD: MagicPay Feature Ecosystem Map or Product Architecture"
            description="Visual diagram showing the interconnected core product modules: Accounts, Transfers, Utility Payments Hub, Cards, and Security Settings."
            aspectRatio="16/9"
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: PROBLEM STATEMENT */}
      {/* ============================================================ */}
      <section id="problem" className="space-y-8 scroll-mt-28">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-rose-600 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            02 / Problem Framing
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-display">
            The Problem: Why Everyday Banking Induces High Cognitive Anxiety
          </h2>
        </div>

        <div className="p-6 sm:p-8 bg-rose-50/50 border border-rose-200/70 rounded-2xl space-y-4">
          <div className="flex items-center gap-2.5 text-rose-800 font-semibold text-sm">
            <AlertTriangle className="w-4 h-4 text-rose-600" />
            <span>The Core UX Dilemma</span>
          </div>
          <p className="text-sm sm:text-base text-rose-950 font-medium leading-relaxed">
            Everyday mobile banking applications often prioritize feature volume over clarity. Users are forced to navigate through multi-layered hierarchical menus just to complete basic transactions, constantly experiencing high anxiety over sending money to an unintended recipient, losing sight of service fees, and having sensitive personal balances exposed.
          </p>
        </div>

        {/* Detailed Breakdown of Friction Factors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 space-y-3">
            <div className="flex items-center gap-2 text-rose-600 font-medium text-sm">
              <Clock className="w-4 h-4" />
              <span>1. Transfer Apprehension & Error Vulnerability</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              In traditional apps, users must enter a 10-digit number and wait until the final confirmation page — or worse, after entering a PIN — before knowing whether the bank correctly resolved the account name. A single typo often triggers irreversible stress.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 space-y-3">
            <div className="flex items-center gap-2 text-rose-600 font-medium text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>2. Buried Everyday Utility Services</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Paying for electricity tokens, internet subscriptions, or mobile airtime frequently requires 5 to 7 sequential screens. Critical recurring actions are treated as secondary sub-items buried under generic "Bill Payments" folders.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 space-y-3">
            <div className="flex items-center gap-2 text-rose-600 font-medium text-sm">
              <EyeOff className="w-4 h-4" />
              <span>3. Public Vulnerability & Privacy Deficits</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Financial apps display large, bold total balance figures by default immediately upon launch. For users commuting in crowded public transit or open offices, this creates genuine physical insecurity and shoulder-surfing anxiety.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-neutral-200/80 space-y-3">
            <div className="flex items-center gap-2 text-rose-600 font-medium text-sm">
              <Receipt className="w-4 h-4" />
              <span>4. Cluttered, Low-Trust Transaction Proofs</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Transaction receipts are often generated as awkward, non-formatted text blocks or unoptimized raster images that lack official verification indicators, making merchant disputes and vendor verification tedious and contentious.
            </p>
          </div>
        </div>

        {/* Problem Image slot */}
        <div className="pt-2">
          <CaseStudyImageArea
            storageKey="problem_audit_visuals"
            storagePrefix="magicpay"
            placeholderLabel="UPLOAD: Visual Audit of Existing Mobile Banking Pain Points"
            description="Annotated screenshots or diagrams contrasting legacy banking friction against user anxiety points."
            aspectRatio="16/9"
          />
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4: THE SOLUTION */}
      {/* ============================================================ */}
      <section id="solution" className="space-y-8 scroll-mt-28">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            03 / Product Interventions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-display">
            The Solution: Designing with Human Confidence at the Core
          </h2>
        </div>

        <div className="prose prose-neutral max-w-none text-neutral-600 leading-relaxed space-y-4">
          <p className="text-base sm:text-lg text-neutral-700">
            MagicPay tackles financial anxiety by rethinking how information is revealed. Instead of treating money operations as rigid database forms, the UI acts as a calm, transparent financial companion that confirms intent early, provides instant feedback, and protects user privacy.
          </p>
        </div>

        {/* 4 Pillars of the MagicPay Design Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-br from-indigo-50/70 to-white rounded-2xl border border-indigo-100 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
              <Send className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-neutral-900">
              Live Inline Recipient Verification
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              As soon as the 10th digit of an account number is entered, the interface queries the banking switch in real-time, displaying a confirmed name badge and bank identifier before the user can input the transfer amount.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-purple-50/70 to-white rounded-2xl border border-purple-100 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-purple-600 text-white flex items-center justify-center">
              <EyeOff className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-neutral-900">
              One-Tap Balance Privacy Shield
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              A prominent yet unobtrusive eye toggle allows users to instantly obscure balances and transaction amounts into elegant security dots, with optional automatic masking when device motion detects walking or transit.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-50/70 to-white rounded-2xl border border-blue-100 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-neutral-900">
              Unified Quick Services Drawer
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Airtime, mobile data, electricity, and cable payments are consolidated into a rapid bottom-sheet workflow with smart suggestions based on previous recharge amounts and saved customer meters.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-br from-emerald-50/70 to-white rounded-2xl border border-emerald-100 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
              <CreditCard className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-neutral-900">
              Self-Serve Virtual Cards with Spending Caps
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Instant generation of dollar and local currency virtual cards for international subscriptions, accompanied by tap-to-freeze security toggles and customizable monthly billing limits.
            </p>
          </div>
        </div>

        {/* Solution Showcase Image Slot */}
        <div className="pt-2">
          <CaseStudyImageArea
            storageKey="solution_core_flow_overview"
            storagePrefix="magicpay"
            placeholderLabel="UPLOAD: MagicPay Solution Overview & Key Value Touchpoints"
            description="A cohesive presentation showcasing the unified dashboard, verified recipient state, and smart utility drawer side-by-side."
            aspectRatio="16/9"
          />
        </div>
      </section>
    </div>
  );
};
