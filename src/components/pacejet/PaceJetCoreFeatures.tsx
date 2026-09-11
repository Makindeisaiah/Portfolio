import React from 'react';
import {
  Plane,
  Clock,
  Users,
  ShieldCheck,
  CreditCard,
  Lock,
  ArrowRight,
  Info,
  Calendar,
  CheckCircle2,
  Receipt,
  FileText,
} from 'lucide-react';
import { CaseStudyImageArea } from '../casestudy/CaseStudyImageArea';

export const PaceJetCoreFeatures: React.FC = () => {
  return (
    <div className="space-y-28 lg:space-y-36">
      {/* ========================================================================= */}
      {/* 19. JET DISCOVERY                                                         */}
      {/* ========================================================================= */}
      <section id="discovery" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>18 / Aircraft Exploration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            Making Aircraft Information Easy to Scan
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            Aircraft cards were designed to surface the key technical specifications and availability status users need when comparing options, without forcing them into nested sub-pages.
          </p>
        </div>

        {/* Aircraft Card Anatomy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Information Breakout */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
              Core Aircraft Card Data Points
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {[
                { title: 'Aircraft Imagery', desc: 'Exterior and interior cabin visual confirmation' },
                { title: 'Aircraft Name & Category', desc: 'E.g., Cessna Citation XLS+ · Midsize Jet' },
                { title: 'Seat Capacity', desc: 'Exact passenger capacity with luggage allowance' },
                { title: 'Departure & Flight Date', desc: 'Direct schedule synchronization' },
                { title: 'Flight Duration', desc: 'Calculated non-stop or fuel stop flight time' },
                { title: 'Estimated / Guaranteed Cost', desc: 'Transparent rate without hidden landing fees' },
                { title: 'Charter Status', desc: 'Available for instant confirmation vs. request' },
                { title: 'Charter Information', desc: 'Tail number, safety audit rating (ARG/US / Wyvern)' },
              ].map((point, i) => (
                <div key={i} className="p-3 rounded-lg bg-neutral-50 border border-neutral-200/60 space-y-0.5">
                  <span className="text-[10px] font-mono font-bold text-[#1E7B21]">0{i + 1}</span>
                  <h4 className="font-bold text-neutral-900">{point.title}</h4>
                  <p className="text-[11px] text-neutral-500">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card Mock Representation */}
          <div className="p-6 rounded-2xl bg-[#F1F5F9] border border-neutral-200 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
              Aircraft Card Visual Model
            </span>
            <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#1E7B21] text-[11px] font-mono font-medium border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2EB732]" />
                  <span>Instant Confirmation</span>
                </div>
                <span className="text-xs font-mono text-neutral-600">Midsize Jet</span>
              </div>

              <div className="space-y-1">
                <h4 className="text-lg font-bold text-neutral-900">Citation XLS+</h4>
                <p className="text-xs text-neutral-500">Cessna Aircraft · Range: 2,100 nm · Cruise: 441 kts</p>
              </div>

              <div className="grid grid-cols-3 gap-2 py-3 border-y border-neutral-100 text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-600 block">Capacity</span>
                  <span className="font-semibold text-neutral-800">8 Passengers</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-600 block">Duration</span>
                  <span className="font-semibold text-neutral-800">1h 45m</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-600 block">Luggage</span>
                  <span className="font-semibold text-neutral-800">79 cu ft</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-600 block">Estimated Charter</span>
                  <span className="text-lg font-bold text-neutral-900 font-mono">$18,400</span>
                </div>
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-[#2EB732] hover:bg-[#279e2b] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
                >
                  Select Jet
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Discovery Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="jet_discovery_screens"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — Jet cards / aircraft browsing screens"
            description="Mobile screens showing jet listing, category filters (Light, Midsize, Heavy), and individual aircraft spec cards."
            aspectRatio="16/9"
            defaultFit="contain"
            allowMultiple={true}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 20. FLIGHT QUOTE                                                          */}
      {/* ========================================================================= */}
      <section id="quote" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>19 / Pricing Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            Making Pricing Transparent
          </h2>
          <div className="space-y-3 text-base sm:text-lg text-neutral-700 leading-relaxed">
            <p>
              Pricing is one of the most important and anxiety-inducing parts of the private aviation booking experience.
            </p>
            <p>
              The flight quote component completely separates the cost into discrete line items so high-net-worth travelers and corporate bookers know exactly what they are paying for without hidden surprise invoices.
            </p>
          </div>
        </div>

        {/* Quote Component Demonstration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase font-bold text-neutral-500">
                Itemized Cost Breakdown Component
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                Design Example
              </span>
            </div>

            <div className="divide-y divide-neutral-100 font-mono text-xs">
              <div className="py-3 flex justify-between items-center">
                <span className="text-neutral-600">Basic Charter Price</span>
                <span className="font-semibold text-neutral-900">$297,000</span>
              </div>
              <div className="py-3 flex justify-between items-center">
                <span className="text-neutral-600">Taxes and Airport Fees</span>
                <span className="font-semibold text-neutral-900">$5,434</span>
              </div>
              <div className="py-3.5 flex justify-between items-center text-sm pt-4">
                <span className="font-bold text-neutral-900">Total Guaranteed Quote</span>
                <span className="text-base font-bold text-[#1E7B21]">$302,434</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/70 text-[11px] text-neutral-600 flex items-start gap-2">
              <Info className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
              <p>
                *The prices shown above represent design example mockups illustrating layout hierarchy. All fees, fuel surcharges, and landing rights are bundled into the total quote before checkout.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-neutral-900">
              Why Transparent Itemization Built Immediate User Trust
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              <p>
                Legacy charter bookings often provide a broad estimate range, billing clients weeks later for repositioning fees, de-icing charges, and international landing permits.
              </p>
              <p>
                In PaceJet, by surfacing the exact tax calculation and guaranteeing the total price upfront, users complete payment with total peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* Flight Quote Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="flight_quote_screen"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — Flight quote screen"
            description="High-fidelity screen capture of the flight quote modal showing the itemized basic price, airport fees, and total."
            aspectRatio="16/9"
            defaultFit="contain"
            allowMultiple={false}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 21. ITINERARY                                                             */}
      {/* ========================================================================= */}
      <section id="itinerary" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>20 / Itinerary Precision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            Clarifying the Journey
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            The itinerary component organizes travel information into a compact, high-contrast structure that allows users to quickly understand flight milestones, private FBO terminals, and passenger manifests.
          </p>
        </div>

        {/* Itinerary Structure Model */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-6">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
            Itinerary Component Architecture
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-xs">
            {[
              { label: 'Departure', val: 'London Luton (LTN)', sub: 'Signature Flight Support FBO' },
              { label: 'Arrival', val: 'Geneva (GVA)', sub: 'Jet Aviation Private Terminal' },
              { label: 'Date', val: 'Thu, Oct 24', sub: '2025' },
              { label: 'Time', val: '09:30 AM', sub: 'Local Departure Time' },
              { label: 'Airport Code', val: 'LTN → GVA', sub: 'Direct Flight' },
              { label: 'Duration', val: '1h 45m', sub: 'Cruising: 42,000 ft' },
              { label: 'Passengers', val: '4 Guests', sub: 'Manifest Verified' },
            ].map((item, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#1E7B21] uppercase">{item.label}</span>
                <p className="font-bold text-neutral-900 text-xs">{item.val}</p>
                <p className="text-[10px] text-neutral-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Itinerary Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="itinerary_component_showcase"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — Itinerary component"
            description="Detailed screen showcasing the multi-leg route timeline, FBO private lounge maps, and passenger manifest cards."
            aspectRatio="16/9"
            defaultFit="contain"
            allowMultiple={false}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 22. PAYMENT EXPERIENCE                                                    */}
      {/* ========================================================================= */}
      <section id="payment" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>21 / Checkout &amp; Security</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            A Clearer Payment Experience
          </h2>
          <div className="space-y-3 text-base sm:text-lg text-neutral-700 leading-relaxed">
            <p>
              The payment experience was designed to make high-value aviation transactions easy to review, secure, and transparent before completing a booking.
            </p>
            <p>
              With corporate cards, family office accounts, and biometric confirmation, users feel completely in control of their authorization.
            </p>
          </div>
        </div>

        {/* Payment Components Grid */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-6">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
            Verified Payment Flow Elements
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
            {[
              { title: 'Card Number', desc: 'Auto-formatting & card type detection' },
              { title: 'Expiry Date', desc: 'Masked MM/YY input validation' },
              { title: 'CVV Security', desc: 'Secure entry with contextual tooltip' },
              { title: 'Card Holder', desc: 'Full legal name on passenger account' },
              { title: 'Saved Cards', desc: '1-tap biometric selection for repeat flyers' },
              { title: 'Verification State', desc: '3D-Secure modal & immediate booking receipt' },
            ].map((p, i) => (
              <div key={i} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/60 space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#1E7B21]">0{i + 1}</span>
                <h4 className="font-bold text-neutral-900">{p.title}</h4>
                <p className="text-[11px] text-neutral-500 leading-snug">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="payment_screens_showcase"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — Payment screens"
            description="Mobile screens showing saved card selector, card detail input form, payment processing state, and confirmed booking receipt."
            aspectRatio="16/9"
            defaultFit="contain"
            allowMultiple={true}
          />
        </div>
      </section>
    </div>
  );
};
