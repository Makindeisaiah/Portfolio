import React from 'react';
import { 
  Smartphone, 
  Eye, 
  Send, 
  Receipt, 
  CreditCard, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  ArrowUpRight, 
  FileText, 
  Clock 
} from 'lucide-react';
import { CaseStudyImageArea } from '../casestudy/CaseStudyImageArea';

export const MagicPayHighFidelityUI: React.FC = () => {
  const showcaseModules = [
    {
      id: 'dashboard',
      num: '01',
      title: 'Home Dashboard & Balance Privacy Mode',
      storageKey: 'hifi_dashboard_screen',
      tag: 'Primary Landing Experience',
      tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      description: 'The core nerve center of MagicPay. Combines account liquidity, rapid action shortcuts (Send, Pay Bills, Add Cash, Cards), recent transaction feeds, and an immediate balance privacy shield.',
      keyDecisions: [
        'Tactile Eye Toggle: Users can mask sensitive numbers into security dots with a single tap before boarding public transit.',
        'High-Frequency Ribbon: Recent contacts appear horizontally across the top of the transfer card for 1-tap re-use.',
        'Zero-Distraction Layout: Completely devoid of noisy banner ads, promotional popups, or confusing loan widgets.',
      ],
      placeholderLabel: 'UPLOAD: High-Fidelity Screen — Home Dashboard (Normal & Masked Balance States)',
      imageDesc: 'High-res mockup of the MagicPay Home Dashboard showing both revealed balance and privacy-masked state.',
    },
    {
      id: 'transfers',
      num: '02',
      title: 'Live Recipient Verification & Send Flow',
      storageKey: 'hifi_transfer_verification_screen',
      tag: 'Core Value Driver',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'Designed to eliminate transfer anxiety. As the 10-digit account number is typed, the app performs a real-time interbank query, revealing the registered account name and bank badge.',
      keyDecisions: [
        'Asynchronous Bank Switch Resolution: Confirms legal recipient identity before the user enters an amount.',
        'Prominent Verification Badge: A distinct green verified badge confirms successful identity match.',
        'Transparent Fee Breakdown: Explicit $0.00 fee indicator eliminates fear of unexpected debit deductions.',
      ],
      placeholderLabel: 'UPLOAD: High-Fidelity Screen — Instant Transfer & Verified Recipient State',
      imageDesc: 'Mockup showing the recipient lookup sheet with verified name badge, preset amount chips, and biometric authorization modal.',
    },
    {
      id: 'utilities',
      num: '03',
      title: 'Unified Quick Bills & Utility Services Hub',
      storageKey: 'hifi_bills_utilities_screen',
      tag: 'Speed & Habitual Routine',
      tagColor: 'bg-purple-50 text-purple-700 border-purple-200',
      description: 'Consolidates electricity meter tokens, mobile data, internet subscriptions, and cable TV into an intuitive, tabbed drawer with smart memory for customer meter numbers.',
      keyDecisions: [
        'Saved Meter Chips: Previous meter IDs and utility account numbers are saved as tap-ready cards.',
        'Instant Token Display: Generated 20-digit electricity prepaid tokens appear in large monospaced type with 1-tap copy.',
        'Direct Package Filter: Cable and Internet subscription plans are searchable by price or duration.',
      ],
      placeholderLabel: 'UPLOAD: High-Fidelity Screen — Bills, Electricity & Data Recharging Hub',
      imageDesc: 'Mockup of the utility bill payment drawer showing meter selection, plan selector, and generated token state.',
    },
    {
      id: 'cards',
      num: '04',
      title: 'Virtual Card Management & Granular Controls',
      storageKey: 'hifi_virtual_cards_screen',
      tag: 'Self-Serve Security',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'Empowers users to create instant virtual USD and local currency cards for cross-border subscriptions while shielding their primary bank balance from recurring auto-charges.',
      keyDecisions: [
        'Tap-to-Reveal Credentials: 16-digit card number, CVV, and expiration date remain hidden until biometric check.',
        'Monthly Spending Ceilings: Users set strict balance ceilings to prevent surprise subscription renewals.',
        'Instant Card Freeze: One-tap toggle to immediately lock or destroy compromised cards without calling a helpline.',
      ],
      placeholderLabel: 'UPLOAD: High-Fidelity Screen — Virtual Cards Hub & Security Toggles',
      imageDesc: 'Mockup showing the 3D virtual card canvas, reveal details sheet, spend limiter slider, and freeze toggle.',
    },
    {
      id: 'receipts',
      num: '05',
      title: 'Transaction Details, History & Shareable Proof',
      storageKey: 'hifi_receipts_history_screen',
      tag: 'Commercial Trust',
      tagColor: 'bg-amber-50 text-amber-700 border-amber-200',
      description: 'Transforming receipts from plain text screenshots into beautiful, verified commercial contracts complete with session IDs, bank switch timestamps, and 1-tap messaging share.',
      keyDecisions: [
        'Branded Digital Receipts: Clean card format with verified bank stamp that vendors accept with immediate trust.',
        'One-Tap WhatsApp & PDF Export: Eliminates manual screenshot cropping and low-res image compression.',
        'Direct Transaction Inquiry: Inline "Report Issue" button links directly to customer support with pre-filled session ID.',
      ],
      placeholderLabel: 'UPLOAD: High-Fidelity Screen — Transaction History & Official Shareable Receipt',
      imageDesc: 'Mockup showing the categorized transaction ledger, detailed activity drilldown, and official shareable receipt.',
    },
    {
      id: 'security',
      num: '06',
      title: 'Profile, Biometrics & Security Settings',
      storageKey: 'hifi_security_settings_screen',
      tag: 'Account Governance',
      tagColor: 'bg-neutral-100 text-neutral-800 border-neutral-200',
      description: 'A clear, transparent settings center where users manage biometric logins, 2FA devices, transaction notification preferences, and account tier limits.',
      keyDecisions: [
        'Face ID / Touch ID Priority: Replaces insecure SMS OTPs with cryptographic biometric device authentication.',
        'Tier Limit Transparency: Visual progress bars indicating daily and monthly remaining transfer allowances.',
        'Connected Devices Audit: View and terminate active login sessions on unrecognized mobile devices.',
      ],
      placeholderLabel: 'UPLOAD: High-Fidelity Screen — Security Vault & Profile Controls',
      imageDesc: 'Mockup showing biometric security toggles, tier limit progress indicators, and active device management.',
    },
  ];

  return (
    <section id="high-fidelity-ui" className="space-y-12 scroll-mt-28">
      <div className="space-y-3">
        <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-600" />
          11 / Visual & Interaction Polish
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-display">
          High-Fidelity Interface Design: Crafted for Trust & Velocity
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
          The high-fidelity interfaces were built in Figma utilizing an uncompromising design system. Every screen prioritizes legibility, confident spacing, clear visual hierarchy, and instant transactional feedback.
        </p>
      </div>

      {/* Showcase Modules Grid */}
      <div className="space-y-16">
        {showcaseModules.map((module) => (
          <div 
            key={module.id} 
            className="p-6 sm:p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-xs space-y-6"
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold text-indigo-600 px-2 py-0.5 bg-indigo-50 rounded">
                    SCREEN {module.num}
                  </span>
                  <span className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${module.tagColor}`}>
                    {module.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 font-display">
                  {module.title}
                </h3>
              </div>
            </div>

            {/* Description & Key Decisions */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-5 space-y-4 text-neutral-600">
                <p className="text-sm leading-relaxed">
                  {module.description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                    Key Product Decisions
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-600">
                    {module.keyDecisions.map((decision, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{decision}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Upload image slot for each screen */}
              <div className="lg:col-span-7">
                <CaseStudyImageArea
                  storageKey={module.storageKey}
                  storagePrefix="magicpay"
                  placeholderLabel={module.placeholderLabel}
                  description={module.imageDesc}
                  aspectRatio="16/9"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full App Showcase Artboard Slot */}
      <div className="p-6 sm:p-8 bg-neutral-950 text-white rounded-3xl space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
            Complete Screen Mosaic
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            End-to-End Mobile Banking Experience
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
            A comprehensive overview showing onboarding, dashboard, money transfer, bills, cards, security, notifications, and profile settings in unified alignment.
          </p>
        </div>

        <CaseStudyImageArea
          storageKey="hifi_complete_mosaic_grid"
          storagePrefix="magicpay"
          placeholderLabel="UPLOAD: MagicPay Complete Multi-Screen Showcase Grid (All Screens Mockup)"
          description="Panoramic presentation of 15+ connected MagicPay screens showing consistent typography, layout rhythm, and component states."
          aspectRatio="21/9"
        />
      </div>
    </section>
  );
};
