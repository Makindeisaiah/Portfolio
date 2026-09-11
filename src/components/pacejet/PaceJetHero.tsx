import React from 'react';
import { ArrowDown, Plane, Smartphone, CheckCircle, Clock, ShieldCheck, Compass } from 'lucide-react';
import { CaseStudyImageArea } from '../casestudy/CaseStudyImageArea';

interface PaceJetHeroProps {
  onOpenPrototype: () => void;
}

export const PaceJetHero: React.FC<PaceJetHeroProps> = ({ onOpenPrototype }) => {
  return (
    <div className="space-y-28 lg:space-y-36">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section id="hero" className="space-y-12">
        <div className="space-y-6 max-w-4xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-[#2EB732]/10 text-[#1E7B21] border border-[#2EB732]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2EB732] animate-pulse" />
            <span>PRODUCT DESIGN · UI/UX · DESIGN SYSTEM</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-[#1E1E1E]">
              PaceJet
            </h1>
            <p className="text-xl sm:text-2xl font-serif text-neutral-600">
              Redesigning the Private Aviation Booking Experience
            </p>
          </div>

          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl">
            PaceJet is a private aviation booking mobile application designed to simplify the process of discovering private jets, comparing flight options, reviewing quotes, making payments, and managing trips.
          </p>

          {/* Project Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4 border-y border-neutral-200/80 py-5">
            <div>
              <span className="text-[10px] font-mono uppercase text-neutral-600 tracking-wider block">Role</span>
              <span className="text-xs font-semibold text-neutral-900 block mt-0.5">Product Designer</span>
              <span className="text-[11px] text-neutral-700">UI/UX Designer</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-neutral-600 tracking-wider block">Platform</span>
              <span className="text-xs font-semibold text-neutral-900 block mt-0.5">Mobile App</span>
              <span className="text-[11px] text-neutral-700">iOS &amp; Android</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-neutral-600 tracking-wider block">Scope</span>
              <span className="text-xs font-semibold text-neutral-900 block mt-0.5">End-to-End</span>
              <span className="text-[11px] text-neutral-700">Product Design</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-neutral-600 tracking-wider block">Screens</span>
              <span className="text-xs font-semibold text-[#1E7B21] block mt-0.5">150+ Mobile</span>
              <span className="text-[11px] text-neutral-700">Screen States</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-neutral-600 tracking-wider block">Project</span>
              <span className="text-xs font-semibold text-neutral-900 block mt-0.5">PaceJet</span>
              <span className="text-[11px] text-neutral-700">Private Aviation</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-neutral-600 tracking-wider block">Status</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2EB732]" />
                Completed
              </span>
              <span className="text-[11px] text-neutral-700 block">Production Ready</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#overview"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>View Case Study</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={onOpenPrototype}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-300 hover:border-neutral-900 bg-white hover:bg-neutral-50 text-neutral-900 text-xs font-mono uppercase tracking-wider transition-colors shadow-2xs"
            >
              <Smartphone className="w-3.5 h-3.5 text-[#2EB732]" />
              <span>View Prototype</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Container */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="hero_mockup"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — PaceJet hero/mockup showing the strongest mobile screens"
            description="Display this image large and visually prominent. The hero should immediately communicate that PaceJet is a premium private aviation product."
            aspectRatio="16/9"
            defaultFit="cover"
            allowMultiple={false}
          />
          <p className="text-xs text-neutral-600 font-mono text-center">
            PaceJet Mobile Experience — Core navigation, aircraft charter discovery, transparent pricing quote, and biometric booking.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PROJECT OVERVIEW                                                       */}
      {/* ========================================================================= */}
      <section id="overview" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>01 / Context &amp; Objectives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            Project Overview
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed">
            <p>
              PaceJet is a private aviation booking experience designed to help users discover, compare, book, and manage private jet travel from a mobile application.
            </p>
            <p>
              The project involved restructuring the product experience across a large number of mobile screens, improving information hierarchy, refining the booking journey, and establishing a scalable design system.
            </p>
            <p>
              The redesign focused on making a complex booking process easier to understand while maintaining the premium feeling expected from a private aviation service.
            </p>
          </div>
        </div>

        {/* Project Overview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-neutral-600">Role</span>
            <p className="text-sm font-semibold text-neutral-900">Product Designer / UI/UX Designer</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-neutral-600">Platform</span>
            <p className="text-sm font-semibold text-neutral-900">Mobile (iOS &amp; Android)</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-neutral-600">Industry</span>
            <p className="text-sm font-semibold text-neutral-900">Private Aviation</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-neutral-600">Scope</span>
            <p className="text-sm font-semibold text-neutral-900">UX + UI + Design System</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-neutral-600">Screens</span>
            <p className="text-sm font-semibold text-[#1E7B21]">150+ screens</p>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-neutral-600">Status</span>
            <p className="text-sm font-semibold text-neutral-900">Completed</p>
          </div>
        </div>

        {/* Overview Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="overview_screens"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — PaceJet app overview / collection of screens"
            description="High-level overview showing multi-screen visual harmony across charter, deals, quotes, and trip states."
            aspectRatio="16/9"
            defaultFit="cover"
            allowMultiple={true}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE CHALLENGE                                                          */}
      {/* ========================================================================= */}
      <section id="challenge" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>02 / Problem Definition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            The Challenge
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            Private aviation booking involves an immense amount of variable operational information that must be evaluated quickly by discerning travelers.
          </p>
        </div>

        {/* Multi-variable checklist */}
        <div className="p-6 sm:p-8 rounded-2xl bg-neutral-100/60 border border-neutral-200/80 space-y-6">
          <div className="space-y-1">
            <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-500">
              Information Density &amp; Decision Factors
            </h3>
            <p className="text-base text-neutral-800 font-medium">
              Users need to understand and evaluate simultaneously:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm">
            {[
              'Aircraft options & categories',
              'Aircraft capacity & cabin layout',
              'Flight duration & range limits',
              'Departure and arrival terminals (FBOs)',
              'Booking type (Charter vs. Seat)',
              'Passenger manifest requirements',
              'Transparent pricing breakdowns',
              'Airport taxes, landing fees & surcharges',
              'Payment information & card security',
              'Live trip details & updates',
              'Booking references & clearances',
              'Baggage allowances & restrictions',
            ].map((factor, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-3 rounded-lg bg-white border border-neutral-200/70 text-neutral-800 text-xs font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2EB732] shrink-0" />
                <span>{factor}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 text-sm text-neutral-600 leading-relaxed border-t border-neutral-200/80">
            <p>
              When this information is presented without a clear hierarchy, the booking experience can become difficult to understand, leading to hesitation, customer support overhead, and abandoned reservations.
            </p>
            <p className="mt-2">
              The design challenge was therefore not simply to make the interface look better. The challenge was to create a clearer, more structured, and more consistent experience across a large, multifaceted product.
            </p>
          </div>
        </div>

        {/* Highlight Callout Statement */}
        <div className="relative p-8 sm:p-10 rounded-2xl bg-neutral-900 text-white overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2EB732]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative space-y-4 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FCD53F] block">
              Core Design Question
            </span>
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif leading-snug tracking-tight text-neutral-100">
              “How might we make private aviation booking feel simple, premium, and trustworthy without hiding the complexity users need to make informed decisions?”
            </blockquote>
            <p className="text-xs font-mono text-neutral-400">
              Guiding design principle for the 150+ screen restructure
            </p>
          </div>
        </div>

        {/* Challenge Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="challenge_restructuring"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — BEFORE/AFTER screens or screenshots showing areas that required restructuring"
            description="Highlight specific areas such as the legacy flight selection, crowded aircraft specifications, or disjointed checkout progression."
            aspectRatio="16/9"
            defaultFit="contain"
            allowMultiple={false}
          />
        </div>
      </section>
    </div>
  );
};
