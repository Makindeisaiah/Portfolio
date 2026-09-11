import React from 'react';
import {
  Sparkles,
  Layers,
  ShieldCheck,
  Repeat,
  Gem,
  Compass,
  CheckCircle2,
  Calendar,
  CreditCard,
  User,
  ArrowRight,
  Plane,
  Tag,
  FileText,
} from 'lucide-react';
import { CaseStudyImageArea } from '../casestudy/CaseStudyImageArea';

export const PaceJetStrategy: React.FC = () => {
  return (
    <div className="space-y-28 lg:space-y-36">
      {/* ========================================================================= */}
      {/* 4. DESIGN GOALS                                                           */}
      {/* ========================================================================= */}
      <section id="goals" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>03 / Strategic Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            Design Goals
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            Five core objectives guided every UX architectural decision, wireframe revision, and component specification across the 150+ screens.
          </p>
        </div>

        {/* 5 Visual Goal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-4 hover:border-neutral-400 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#1E7B21] uppercase tracking-wider">
                01 — Simplify
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#2EB732]/10 flex items-center justify-center text-[#1E7B21]">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-neutral-900">
              Simplify Complex Information
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Make complex booking information easier to understand through progressive disclosure, clear typography, and concise technical data formatting.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-4 hover:border-neutral-400 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#1E7B21] uppercase tracking-wider">
                02 — Structure
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#2EB732]/10 flex items-center justify-center text-[#1E7B21]">
                <Layers className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-neutral-900">
              Structure the Journey
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Create a clear hierarchy across the booking journey so users never feel overwhelmed by simultaneous aviation technicalities and legal clearances.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-4 hover:border-neutral-400 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#1E7B21] uppercase tracking-wider">
                03 — Build Trust
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#2EB732]/10 flex items-center justify-center text-[#1E7B21]">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-neutral-900">
              Build Uncompromising Trust
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Present pricing, itinerary, aircraft specifications, taxes, and payment confirmation clearly, eliminating hidden fees and ambiguous charter quotes.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-4 hover:border-neutral-400 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#1E7B21] uppercase tracking-wider">
                04 — Create Consistency
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#2EB732]/10 flex items-center justify-center text-[#1E7B21]">
                <Repeat className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-neutral-900">
              Create Scalable Consistency
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Use reusable components and a structured design system across all 150+ screens to ensure predictability, rapid development, and cohesive interaction.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-4 hover:border-neutral-400 transition-colors md:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#1E7B21] uppercase tracking-wider">
                05 — Elevate
              </span>
              <div className="w-8 h-8 rounded-lg bg-[#FCD53F]/20 flex items-center justify-center text-amber-700">
                <Gem className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-neutral-900">
              Elevate the Experience
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Create a premium visual language appropriate for private aviation, pairing generous whitespace and confident typography with functional restraint.
            </p>
          </div>
        </div>

        {/* Goals Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="design_goals_direction"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — Design goals / early design direction"
            description="Concept explorations, design pillars board, or mood study establishing the early visual benchmark."
            aspectRatio="16/9"
            defaultFit="cover"
            allowMultiple={false}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. MY ROLE & RESPONSIBILITIES                                             */}
      {/* ========================================================================= */}
      <section id="role" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>04 / Execution &amp; Ownership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            My Role
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            As the Product Designer, I worked across the experience from UX structure through high-fidelity interface design and design-system development.
          </p>
        </div>

        {/* Responsibilities Breakdown */}
        <div className="p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-6">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
            End-to-End Scope of Responsibilities
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { label: 'UX Restructuring', desc: 'Audit and reorganizing legacy flows across 150+ screens' },
              { label: 'Information Architecture', desc: '4-pillar navigation taxonomy and view hierarchies' },
              { label: 'User Flows', desc: 'Mapping progressive disclosure for charter and seat bookings' },
              { label: 'Wireframing', desc: 'Low and mid-fidelity screen layouts prioritizing scannability' },
              { label: 'High-Fidelity UI Design', desc: 'Pixel-perfect mobile interfaces in Figma' },
              { label: 'Component Design', desc: 'Atomic inputs, flight cards, itinerary blocks, and buttons' },
              { label: 'Design System', desc: 'Scalable token library (colors, typography, spacing, states)' },
              { label: 'Navigation Design', desc: 'Bottom navigation, modal sheets, and contextual headers' },
              { label: 'Booking-Flow Design', desc: 'One-way, return, and multi-leg configuration pathways' },
              { label: 'Payment-Flow Design', desc: 'Transparent flight quotes, card handling, and receipt review' },
              { label: 'Usability Testing', desc: 'Validating flight selection clarity and pricing transparency' },
              { label: 'Design Iteration', desc: 'Refining spacing, typography scales, and state feedbacks' },
              { label: 'Case Study Development', desc: 'Documenting design decisions and architectural learnings' },
            ].map((resp, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-neutral-50/70 border border-neutral-200/60 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#2EB732] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-neutral-900">{resp.label}</h4>
                  <p className="text-[11px] text-neutral-500 leading-tight">{resp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Figma Workspace Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="figma_workspace"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — Figma workspace / design process"
            description="Overview of the 150+ screens in Figma, design system master components, and user flow documentation."
            aspectRatio="16/9"
            defaultFit="cover"
            allowMultiple={false}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. PRODUCT SCOPE                                                          */}
      {/* ========================================================================= */}
      <section id="scope" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>05 / Functional Breadth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            Product Scope
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            The PaceJet ecosystem unifies seven dedicated functional modules into a seamless mobile travel companion.
          </p>
        </div>

        {/* Visual Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#1E7B21]">01</span>
              <Plane className="w-4 h-4 text-neutral-400" />
            </div>
            <h3 className="text-base font-bold text-neutral-900">Charter Booking</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Users can explore private jet charter options and select:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-[11px] font-mono text-neutral-700">One-way</span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-[11px] font-mono text-neutral-700">Return</span>
              <span className="px-2.5 py-1 rounded-md bg-neutral-100 text-[11px] font-mono text-neutral-700">Multi-leg</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#1E7B21]">02</span>
              <Compass className="w-4 h-4 text-neutral-400" />
            </div>
            <h3 className="text-base font-bold text-neutral-900">Seat Booking</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Users can explore seat-based travel options on shared private flights and manage the seat reservation process.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#1E7B21]">03</span>
              <Tag className="w-4 h-4 text-neutral-400" />
            </div>
            <h3 className="text-base font-bold text-neutral-900">Jet Deals</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Users can discover available empty-leg opportunities, repositioning flights, and promotional aviation deals in real-time.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#1E7B21]">04</span>
              <FileText className="w-4 h-4 text-neutral-400" />
            </div>
            <h3 className="text-base font-bold text-neutral-900">Quotes &amp; Pricing</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Transparent itemized breakdown allowing travelers to inspect:
            </p>
            <ul className="text-xs text-neutral-700 space-y-1 pt-1 font-mono">
              <li>• Basic charter price</li>
              <li>• Airport landing taxes &amp; fees</li>
              <li>• Guaranteed total cost</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#1E7B21]">05</span>
              <CreditCard className="w-4 h-4 text-neutral-400" />
            </div>
            <h3 className="text-base font-bold text-neutral-900">Payments</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Users can securely add and manage credit/debit cards, verify biometric authorization, and complete instant flight payment.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#1E7B21]">06</span>
              <Calendar className="w-4 h-4 text-neutral-400" />
            </div>
            <h3 className="text-base font-bold text-neutral-900">Trips Management</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Users can access comprehensive itineraries, private FBO terminal gate maps, aircraft details, and past flight histories.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3 md:col-span-2 lg:col-span-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#1E7B21]">07</span>
              <User className="w-4 h-4 text-neutral-400" />
            </div>
            <h3 className="text-base font-bold text-neutral-900">Profile &amp; Preferences</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Users can manage passenger passport credentials, dietary and catering preferences, saved companions, and notification settings.
            </p>
          </div>
        </div>

        {/* Scope Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="scope_feature_screens"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — Multiple PaceJet feature screens"
            description="Collage showing the key feature screens: Charter, Seat, Deals, Quotes, Payments, Trips, and Profile."
            aspectRatio="16/9"
            defaultFit="contain"
            allowMultiple={true}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. INFORMATION ARCHITECTURE                                               */}
      {/* ========================================================================= */}
      <section id="ia" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>06 / Structural Organization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            Structuring the Experience
          </h2>
          <div className="space-y-3 text-base sm:text-lg text-neutral-700 leading-relaxed">
            <p>
              Because PaceJet contains a large number of screens and multiple booking scenarios, creating a clear structure was important.
            </p>
            <p>
              The mobile navigation was organized around the main areas users need to access regularly, avoiding deep nested menus and ensuring primary tasks are never more than a single tap away.
            </p>
          </div>
        </div>

        {/* 4 Pillars of Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
            <div className="inline-flex p-2 rounded-lg bg-[#2EB732]/10 text-[#1E7B21] mb-2">
              <Plane className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-neutral-900">Book</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              The primary entry point for discovering and booking travel. Hosts route configuration, date selection, passenger count, aircraft comparison, and quote review.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
            <div className="inline-flex p-2 rounded-lg bg-[#FCD53F]/20 text-amber-800 mb-2">
              <Tag className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-neutral-900">Jet Deals</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Access to available aviation deals. Live listing of empty-leg relocations and last-minute discounted routes with instant checkout.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
            <div className="inline-flex p-2 rounded-lg bg-neutral-100 text-neutral-800 mb-2">
              <Calendar className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-neutral-900">Trips</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Upcoming and past travel. Provides digital boarding credentials, terminal lounge coordinates, captain contact, and flight updates.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
            <div className="inline-flex p-2 rounded-lg bg-neutral-100 text-neutral-800 mb-2">
              <User className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-neutral-900">Profile</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Personal and account management. Stores saved payment cards, passport manifest archives, preferences, and concierge support.
            </p>
          </div>
        </div>

        {/* IA Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="ia_diagram"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — PaceJet navigation / information architecture / user flow"
            description="Diagram illustrating the complete information architecture and screen relationship across all 4 top-level sections."
            aspectRatio="16/9"
            defaultFit="contain"
            allowMultiple={false}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. USER FLOW                                                              */}
      {/* ========================================================================= */}
      <section id="flow" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>07 / Progressive Disclosure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            Booking Flow
          </h2>
          <div className="space-y-3 text-base sm:text-lg text-neutral-700 leading-relaxed">
            <p>
              The flow was structured so users could progressively review important information before completing their booking.
            </p>
            <p>
              The interface avoids presenting every piece of information at once. Instead, information is introduced at the point where it becomes relevant, keeping cognitive load low during high-value financial decisions.
            </p>
          </div>
        </div>

        {/* Progressive Flow Pipeline */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-6">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 block">
            End-to-End Progressive Booking Progression
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {[
              { step: '01', title: 'Discover', desc: 'Route & dates' },
              { step: '02', title: 'Select Aircraft', desc: 'Category & cabin' },
              { step: '03', title: 'Review Details', desc: 'Times & passengers' },
              { step: '04', title: 'Review Quote', desc: 'Taxes & total' },
              { step: '05', title: 'Confirm Itinerary', desc: 'FBO & terminal' },
              { step: '06', title: 'Payment Method', desc: 'Card selection' },
              { step: '07', title: 'Complete Booking', desc: 'Biometric authorization' },
              { step: '08', title: 'Manage Trip', desc: 'Live pass & tracking' },
            ].map((f, idx) => (
              <div
                key={idx}
                className="relative p-3 rounded-xl bg-neutral-50 border border-neutral-200/70 flex flex-col justify-between space-y-2 text-center sm:text-left"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#1E7B21]">{f.step}</span>
                  {idx < 7 && (
                    <ArrowRight className="hidden lg:block w-3 h-3 text-neutral-300 absolute -right-2 top-4 z-10" />
                  )}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900">{f.title}</h4>
                  <p className="text-[10px] text-neutral-500 mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flow Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="user_flow_diagram"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — User flow diagram"
            description="Full branching user flow diagram depicting edge-cases, return flight toggles, and seat confirmation pathways."
            aspectRatio="16/9"
            defaultFit="contain"
            allowMultiple={false}
          />
        </div>
      </section>
    </div>
  );
};
