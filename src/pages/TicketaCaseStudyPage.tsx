import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Smartphone,
  Globe,
  LayoutDashboard,
  ScanLine,
  CheckCircle2,
  Layers,
  Sparkles,
  ShieldCheck,
  Zap,
  Ticket,
  Users,
  Compass,
  CreditCard,
  Building2,
  Calendar,
  Eye,
  GitMerge,
  Server,
  Database,
  Lock,
  Workflow,
  ArrowRight,
  Check,
  Share2,
} from 'lucide-react';
import { motion } from 'motion/react';
import { CaseStudyImageArea } from '../components/casestudy/CaseStudyImageArea';

export const TicketaCaseStudyPage: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'The Problem', href: '#problem' },
    { label: 'The Opportunity', href: '#opportunity' },
    { label: '4 Platforms', href: '#platforms' },
    { label: 'User Journeys', href: '#journeys' },
    { label: 'Architecture', href: '#ia' },
    { label: 'Process', href: '#process' },
    { label: 'Design System', href: '#design-system' },
    { label: 'Development', href: '#development' },
    { label: 'Showcase', href: '#showcase' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 selection:bg-emerald-900 selection:text-emerald-100 pt-24 pb-24">
      {/* Top sticky sub-nav for easy reading */}
      <div className="sticky top-16 z-30 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-neutral-200/80 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/ui-ux"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-neutral-950 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Back to Portfolio</span>
              <span className="sm:hidden">Back</span>
            </Link>
            <span className="text-neutral-300">/</span>
            <span className="text-xs font-mono font-semibold text-emerald-700 uppercase tracking-wider">
              Ticketa Case Study
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-5 text-xs font-mono text-neutral-500">
            {navItems.slice(0, 6).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-neutral-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider border border-neutral-200 hover:border-neutral-900 rounded-md bg-white text-neutral-700 transition-colors shadow-2xs"
              title="Copy page link"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Copied' : 'Share'}</span>
            </button>
            <a
              href="https://ticketa2-1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 text-white rounded-md transition-colors shadow-2xs"
            >
              <span>Live Web</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 lg:space-y-36 mt-10">
        {/* ========================================================================= */}
        {/* 1. CASE STUDY HERO                                                        */}
        {/* ========================================================================= */}
        <section id="hero" className="space-y-10">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-emerald-100/80 text-emerald-900 border border-emerald-300/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>PRODUCT DESIGN &amp; DEVELOPMENT</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-neutral-950">
                Ticketa
              </h1>
              <p className="text-xl sm:text-2xl font-serif text-neutral-600">
                Event Ticketing &amp; Management Platform
              </p>
            </div>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl">
              Ticketa is an end-to-end event ticketing and management platform designed to simplify how people discover events, purchase tickets, organize events and manage event entry.
            </p>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl">
              The platform connects attendees, event organizers and event staff through a unified digital ecosystem.
            </p>
          </div>

          {/* Project Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-6 pb-8 border-y border-neutral-200 text-xs font-mono">
            <div>
              <span className="text-neutral-400 block uppercase tracking-wider mb-1">Role</span>
              <p className="text-neutral-900 font-medium">Founder · Product Designer · Developer</p>
            </div>
            <div>
              <span className="text-neutral-400 block uppercase tracking-wider mb-1">Category</span>
              <p className="text-neutral-900 font-medium">Event Technology / Ticketing</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="text-neutral-400 block uppercase tracking-wider mb-1">Platforms</span>
              <p className="text-neutral-900 font-medium">Web · Mobile · Organizer · Staff</p>
            </div>
            <div>
              <span className="text-neutral-400 block uppercase tracking-wider mb-1">Status</span>
              <p className="text-neutral-900 font-medium inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                Product in Development
              </p>
            </div>
            <div>
              <span className="text-neutral-400 block uppercase tracking-wider mb-1">Market</span>
              <p className="text-neutral-900 font-medium">West Africa</p>
            </div>
          </div>

          {/* Hero Image Container */}
          <div className="space-y-2">
            <CaseStudyImageArea
              storageKey="hero"
              placeholderLabel="HERO PRODUCT VISUAL"
              description="Upload a high-resolution product mockup or composite screen collection showing Ticketa's multi-platform ecosystem."
              aspectRatio="16/9"
              allowMultiple={false}
            />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. PROJECT OVERVIEW                                                       */}
        {/* ========================================================================= */}
        <section id="overview" className="space-y-10 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
                Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-neutral-950 tracking-tight">
                From Event Discovery to Check-in
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-neutral-700 leading-relaxed text-base sm:text-lg">
              <p>
                Ticketa brings the major stages of the event-ticketing journey into one connected ecosystem. Attendees can discover events and purchase tickets, organizers can create and manage events, and event staff can securely validate tickets at the venue.
              </p>
              <p>
                The goal is to reduce friction across the entire ticketing lifecycle — from event discovery and ticket purchase to event management, sales tracking and on-site check-in.
              </p>
            </div>
          </div>

          {/* Overview Image Placeholder */}
          <div className="pt-2">
            <CaseStudyImageArea
              storageKey="ecosystem_overview"
              placeholderLabel="UPLOAD: TICKETA ECOSYSTEM OVERVIEW"
              description="Upload an overview graphic or diagram illustrating how attendees, organizers, and staff interact across the Ticketa ecosystem."
              aspectRatio="16/9"
            />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. THE PROBLEM                                                            */}
        {/* ========================================================================= */}
        <section id="problem" className="space-y-10 scroll-mt-28">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              Background &amp; Context
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-neutral-950 tracking-tight">
              The Problem
            </h2>
            <div className="space-y-4 text-neutral-700 leading-relaxed text-base sm:text-lg">
              <p>
                Event ticketing can become fragmented when discovery, ticket purchasing, event management and venue check-in are handled through disconnected tools.
              </p>
              <p>
                For attendees, the experience can involve difficulty finding relevant events, unclear ticket information, complicated purchasing processes and poor access to purchased tickets.
              </p>
              <p>
                For organizers, managing events, ticket types, sales, attendees and revenue can require multiple tools or manual processes.
              </p>
              <p>
                For event staff, verifying tickets and controlling venue access needs to be fast, reliable and easy to operate during busy events.
              </p>
            </div>
          </div>

          {/* 4 Problem Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
            <div className="p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-3">
              <span className="font-mono text-xs text-neutral-400 font-bold">01</span>
              <h3 className="text-lg font-sans font-bold text-neutral-900">
                Fragmented Event Discovery
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Attendees need a simple way to discover relevant events and understand what each event offers.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-3">
              <span className="font-mono text-xs text-neutral-400 font-bold">02</span>
              <h3 className="text-lg font-sans font-bold text-neutral-900">
                Complicated Ticket Management
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Organizers need tools to create events, configure ticket types, publish events and manage ticket sales.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-3">
              <span className="font-mono text-xs text-neutral-400 font-bold">03</span>
              <h3 className="text-lg font-sans font-bold text-neutral-900">
                Limited Operational Visibility
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Organizers need clear visibility into ticket sales, revenue, attendees and event performance.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-3">
              <span className="font-mono text-xs text-neutral-400 font-bold">04</span>
              <h3 className="text-lg font-sans font-bold text-neutral-900">
                Difficult Event Check-in
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Venue staff need a fast and reliable way to verify tickets and manage attendee entry.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. THE OPPORTUNITY                                                        */}
        {/* ========================================================================= */}
        <section id="opportunity" className="space-y-10 scroll-mt-28">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              Product Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-neutral-950 tracking-tight">
              One Ecosystem. Four Connected Experiences.
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              Instead of designing Ticketa as a single product, I approached it as a connected ecosystem where each user group receives an experience tailored to their specific responsibilities.
            </p>
          </div>

          {/* 4 Connected Cards Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative">
            {/* Attendee */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200 relative overflow-hidden shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>ATTENDEE</span>
                </div>
                <span className="text-[11px] font-mono text-neutral-400">Mobile Native Experience</span>
              </div>
              <p className="text-xs text-neutral-500 font-mono">
                Discover events → View event details → Purchase tickets → Access tickets → Attend event
              </p>
              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                {['Discover events', 'View details', 'Purchase', 'Access tickets', 'Attend event'].map(
                  (step, idx) => (
                    <span
                      key={step}
                      className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-neutral-50 text-neutral-700 border border-neutral-200 rounded"
                    >
                      <span className="font-mono text-[10px] text-neutral-400">{idx + 1}</span>
                      {step}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Organizer */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200 relative overflow-hidden shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span>ORGANIZER</span>
                </div>
                <span className="text-[11px] font-mono text-neutral-400">Operations Command</span>
              </div>
              <p className="text-xs text-neutral-500 font-mono">
                Create event → Configure tickets → Publish → Monitor sales → Manage attendees
              </p>
              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                {['Create event', 'Configure tickets', 'Publish', 'Monitor sales', 'Manage attendees'].map(
                  (step, idx) => (
                    <span
                      key={step}
                      className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-neutral-50 text-neutral-700 border border-neutral-200 rounded"
                    >
                      <span className="font-mono text-[10px] text-neutral-400">{idx + 1}</span>
                      {step}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Staff */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200 relative overflow-hidden shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <ScanLine className="w-3.5 h-3.5" />
                  <span>STAFF</span>
                </div>
                <span className="text-[11px] font-mono text-neutral-400">Event-Day Gate Operations</span>
              </div>
              <p className="text-xs text-neutral-500 font-mono">
                Staff login → Assigned event/gate → Scan ticket → Verify attendee → Record check-in
              </p>
              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                {['Staff login', 'Assigned gate', 'Scan ticket', 'Verify attendee', 'Record check-in'].map(
                  (step, idx) => (
                    <span
                      key={step}
                      className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-neutral-50 text-neutral-700 border border-neutral-200 rounded"
                    >
                      <span className="font-mono text-[10px] text-neutral-400">{idx + 1}</span>
                      {step}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Marketplace */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200 relative overflow-hidden shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-violet-800 bg-violet-50 px-3 py-1 rounded-full border border-violet-200">
                  <Globe className="w-3.5 h-3.5" />
                  <span>MARKETPLACE</span>
                </div>
                <span className="text-[11px] font-mono text-neutral-400">Public Web Discovery</span>
              </div>
              <p className="text-xs text-neutral-500 font-mono">
                Browse events → Search/discover → Event details → Ticket purchase
              </p>
              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                {['Browse events', 'Search & discover', 'Event details', 'Ticket purchase'].map(
                  (step, idx) => (
                    <span
                      key={step}
                      className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-neutral-50 text-neutral-700 border border-neutral-200 rounded"
                    >
                      <span className="font-mono text-[10px] text-neutral-400">{idx + 1}</span>
                      {step}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5, 6, 7, 8. THE FOUR PLATFORMS                                            */}
        {/* ========================================================================= */}
        <section id="platforms" className="space-y-24 scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              Core Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-neutral-950 tracking-tight">
              Four Platforms, One Event Ecosystem
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Ticketa provides tailored interfaces engineered specifically for the distinct operational goals of attendees, organizers, and field staff.
            </p>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* PLATFORM 01: ATTENDEE MOBILE APP                                        */}
          {/* ----------------------------------------------------------------------- */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200/90 shadow-xs space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold">
                  Platform 01
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-neutral-950">
                  Ticketa Attendee App
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-neutral-100 text-neutral-700 border border-neutral-200">
                <Smartphone className="w-3.5 h-3.5 text-neutral-500" />
                <span>Mobile iOS &amp; Android Experience</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-6">
                <p className="text-neutral-700 leading-relaxed text-base sm:text-lg">
                  The mobile experience is designed around the attendee’s complete journey.
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                    Core Experience
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-neutral-700">
                    {[
                      'Discover events',
                      'Browse events',
                      'View event details',
                      'Select tickets',
                      'Purchase tickets',
                      'Access purchased tickets',
                      'Manage upcoming events',
                      'View past events',
                      'Manage account information',
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200/70 space-y-1.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 font-bold">
                    Design Goal
                  </span>
                  <p className="text-sm text-emerald-950 leading-relaxed">
                    Make discovering and purchasing event tickets feel simple, trustworthy and fast.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <CaseStudyImageArea
                  storageKey="mobile_app_screens"
                  placeholderLabel="UPLOAD ATTENDEE MOBILE APP SCREENS"
                  description="Upload primary feature image + smaller supporting mobile screens showing event discovery, ticket selection, wallet and offline passes."
                  allowMultiple={true}
                  aspectRatio="16/9"
                />
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* PLATFORM 02: ATTENDEE WEBSITE / MARKETPLACE                             */}
          {/* ----------------------------------------------------------------------- */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200/90 shadow-xs space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-violet-600 font-bold">
                  Platform 02
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-neutral-950">
                  Ticketa Event Marketplace
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-neutral-100 text-neutral-700 border border-neutral-200">
                <Globe className="w-3.5 h-3.5 text-neutral-500" />
                <span>Web Marketplace &amp; Discovery</span>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-neutral-700 leading-relaxed text-base sm:text-lg max-w-4xl">
                The public-facing website extends the attendee experience to the web. The marketplace is designed around event discovery and ticket conversion.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200/80 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
                    Key Sections
                  </h4>
                  <ul className="text-sm text-neutral-700 space-y-1.5">
                    {[
                      'Hero / event discovery',
                      'Featured events',
                      'Trending events',
                      'Event categories',
                      'Event browsing',
                      'Event details',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200/80 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
                    Conversion &amp; Booking
                  </h4>
                  <ul className="text-sm text-neutral-700 space-y-1.5">
                    {[
                      'Ticket information',
                      'Event location',
                      'Date and time',
                      'Ticket purchasing',
                      'Attendee account access',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-violet-50/60 border border-violet-200/80 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-violet-800 font-bold">
                      Core Journey
                    </h4>
                    <p className="text-xs font-mono text-violet-900 font-semibold">
                      Discover → Explore → View Event → Select Ticket → Purchase
                    </p>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    The marketplace serves as the public discovery layer of Ticketa, allowing attendees to find events and move naturally from discovery to ticket purchase.
                  </p>
                </div>
              </div>

              {/* Wide desktop image placeholder */}
              <div className="pt-4">
                <CaseStudyImageArea
                  storageKey="marketplace_screens"
                  placeholderLabel="UPLOAD TICKETA MARKETPLACE / WEBSITE SCREENS"
                  description="Upload wide desktop screenshots of the Ticketa marketplace homepage, search filters, category views, and ticket checkout drawer."
                  allowMultiple={true}
                  aspectRatio="16/9"
                />
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* PLATFORM 03: ORGANIZER DASHBOARD                                        */}
          {/* ----------------------------------------------------------------------- */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200/90 shadow-xs space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 font-bold">
                  Platform 03
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-neutral-950">
                  Ticketa Organizer Dashboard
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-neutral-100 text-neutral-700 border border-neutral-200">
                <LayoutDashboard className="w-3.5 h-3.5 text-neutral-500" />
                <span>Event Operations Workspace</span>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-neutral-700 leading-relaxed text-base sm:text-lg max-w-4xl">
                The organizer dashboard is designed for event creators and businesses responsible for running events. Instead of treating event management as a single form, the dashboard provides an operational workspace for managing the event lifecycle.
              </p>

              {/* Core Capabilities */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  Core Capabilities
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      title: 'Dashboard Overview',
                      desc: 'Provide a high-level view of current event performance.',
                    },
                    {
                      title: 'Event Management',
                      desc: 'Organizers can create, edit, publish and manage events.',
                    },
                    {
                      title: 'Ticket Management',
                      desc: 'Configure ticket types, pricing and ticket availability.',
                    },
                    {
                      title: 'Sales Management',
                      desc: 'Monitor ticket sales and transaction activity.',
                    },
                    {
                      title: 'Analytics',
                      desc: 'Understand event performance through sales and attendance information.',
                    },
                    {
                      title: 'Revenue Tracking',
                      desc: 'Monitor revenue generated from ticket sales.',
                    },
                    {
                      title: 'Attendee Management',
                      desc: 'Manage and review attendee information.',
                    },
                    {
                      title: 'Event Operations',
                      desc: 'Coordinate event information and operational requirements.',
                    },
                  ].map((cap) => (
                    <div
                      key={cap.title}
                      className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 space-y-1.5"
                    >
                      <h5 className="text-sm font-bold text-neutral-900">{cap.title}</h5>
                      <p className="text-xs text-neutral-600 leading-relaxed">{cap.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Event creation workflow */}
              <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-800 font-bold">
                    Event Creation Workflow
                  </span>
                  <p className="text-xs font-mono text-blue-900 font-semibold">
                    Create Event → Add Event Details → Add Venue → Configure Tickets → Schedule Event → Publish
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-blue-200/60 text-xs text-neutral-700">
                  {[
                    'Event banner',
                    'Event title',
                    'Event description',
                    'Venue details',
                    'Date and time',
                    'Ticket types',
                    'Ticket pricing',
                    'Ticket availability',
                    'Event publishing',
                  ].map((info) => (
                    <span
                      key={info}
                      className="px-2.5 py-1 bg-white rounded border border-blue-200 text-neutral-800 font-mono text-[11px]"
                    >
                      {info}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dashboard Gallery Image Placeholder */}
              <div className="pt-2">
                <CaseStudyImageArea
                  storageKey="organizer_dashboard_screens"
                  placeholderLabel="UPLOAD ORGANIZER DASHBOARD SCREENS"
                  description="Upload dashboard screens across: Dashboard Overview, Event Management, Ticket Sales, Analytics, Revenue, Event Creation."
                  allowMultiple={true}
                  aspectRatio="16/9"
                />
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* PLATFORM 04: STAFF CHECK-IN DASHBOARD                                   */}
          {/* ----------------------------------------------------------------------- */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200/90 shadow-xs space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-100">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-600 font-bold">
                  Platform 04
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-neutral-950">
                  Ticketa Staff Check-in
                </h3>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-neutral-100 text-neutral-700 border border-neutral-200">
                <ScanLine className="w-3.5 h-3.5 text-neutral-500" />
                <span>On-Site Venue Access Control</span>
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-neutral-700 leading-relaxed text-base sm:text-lg max-w-4xl">
                The staff platform focuses specifically on event-day operations. Staff members do not need access to the complete organizer dashboard. Instead, they receive controlled access to the event and gate they have been assigned to.
              </p>

              {/* Staff Flow */}
              <div className="p-5 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold">
                  Staff Flow
                </span>
                <p className="text-xs font-mono text-amber-950 font-semibold">
                  Staff Login → Assigned Event → Assigned Gate → Scan Ticket → Verify → Check In
                </p>
              </div>

              {/* Core capabilities & Permission model */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                    Core Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-neutral-700">
                    {[
                      'Staff authentication',
                      'Assigned event access',
                      'Gate assignment',
                      'QR ticket scanning',
                      'Manual ticket verification',
                      'Ticket validation',
                      'Successful check-in',
                      'Invalid ticket detection',
                      'Already-used ticket detection',
                      'Check-in records',
                    ].map((cap) => (
                      <div key={cap} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-900 text-neutral-200 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Permission Model</span>
                  </div>
                  <p className="text-xs leading-relaxed text-neutral-300">
                    Staff access is intentionally limited. Staff should only have access to the information and functionality required to perform event check-in.
                  </p>
                  <p className="text-xs leading-relaxed text-neutral-400">
                    They should not have access to organizer financial information or unrelated event-management functionality.
                  </p>
                </div>
              </div>

              {/* Staff Screens Image Placeholder */}
              <div className="pt-2">
                <CaseStudyImageArea
                  storageKey="staff_checkin_screens"
                  placeholderLabel="UPLOAD STAFF CHECK-IN SCREENS"
                  description="Upload staff check-in screens including camera QR viewfinder, validation status feedback, attendee search, and gate stats."
                  allowMultiple={true}
                  aspectRatio="16/9"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. END-TO-END USER FLOWS                                                  */}
        {/* ========================================================================= */}
        <section id="journeys" className="space-y-10 scroll-mt-28">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              Service Design
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-neutral-950 tracking-tight">
              Designing the Complete Event Journey
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              Mapping out the interconnected user paths ensures seamless handoffs between discovery, purchase, organization, and gate entry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Attendee Journey */}
            <div className="p-7 rounded-2xl bg-white border border-neutral-200 space-y-5 shadow-2xs">
              <div className="border-b border-neutral-100 pb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">
                  ATTENDEE JOURNEY
                </span>
              </div>
              <div className="space-y-2">
                {[
                  'Discover event',
                  'View event',
                  'Select ticket',
                  'Purchase',
                  'Receive ticket',
                  'Arrive at venue',
                  'Ticket verification',
                  'Check-in',
                ].map((step, idx, arr) => (
                  <div key={step} className="flex flex-col">
                    <div className="flex items-center gap-3 py-1 text-sm text-neutral-800 font-medium">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-mono flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="ml-2.5 h-3 w-px bg-neutral-200 my-0.5" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Organizer Journey */}
            <div className="p-7 rounded-2xl bg-white border border-neutral-200 space-y-5 shadow-2xs">
              <div className="border-b border-neutral-100 pb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold">
                  ORGANIZER JOURNEY
                </span>
              </div>
              <div className="space-y-2">
                {[
                  'Create event',
                  'Configure event',
                  'Create ticket types',
                  'Publish event',
                  'Sell tickets',
                  'Monitor sales',
                  'Manage attendees',
                  'Track event performance',
                ].map((step, idx, arr) => (
                  <div key={step} className="flex flex-col">
                    <div className="flex items-center gap-3 py-1 text-sm text-neutral-800 font-medium">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 text-[11px] font-mono flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="ml-2.5 h-3 w-px bg-neutral-200 my-0.5" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Staff Journey */}
            <div className="p-7 rounded-2xl bg-white border border-neutral-200 space-y-5 shadow-2xs">
              <div className="border-b border-neutral-100 pb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-bold">
                  STAFF JOURNEY
                </span>
              </div>
              <div className="space-y-2">
                {[
                  'Receive staff access',
                  'Login',
                  'Select assigned event/gate',
                  'Scan ticket',
                  'Validate ticket',
                  'Check in attendee',
                ].map((step, idx, arr) => (
                  <div key={step} className="flex flex-col">
                    <div className="flex items-center gap-3 py-1 text-sm text-neutral-800 font-medium">
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 text-[11px] font-mono flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="ml-2.5 h-3 w-px bg-neutral-200 my-0.5" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. INFORMATION ARCHITECTURE                                              */}
        {/* ========================================================================= */}
        <section id="ia" className="space-y-10 scroll-mt-28">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              Structural Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-neutral-950 tracking-tight">
              Information Architecture
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              Each platform has its own information architecture because the users have different goals and responsibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Attendee IA */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 space-y-4 shadow-2xs">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-emerald-600" />
                <h3 className="text-base font-bold text-neutral-900">Attendee</h3>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 font-mono text-xs space-y-2 text-neutral-700">
                <div className="font-semibold text-neutral-900 pb-1 border-b border-neutral-200">
                  Main Navigation
                </div>
                <div>├─ Discovery</div>
                <div>├─ Events</div>
                <div>├─ Event Details</div>
                <div>├─ Tickets</div>
                <div>├─ Bookings</div>
                <div>└─ Profile</div>
              </div>
            </div>

            {/* Organizer IA */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 space-y-4 shadow-2xs">
              <div className="flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4 text-blue-600" />
                <h3 className="text-base font-bold text-neutral-900">Organizer</h3>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 font-mono text-xs space-y-2 text-neutral-700">
                <div className="font-semibold text-neutral-900 pb-1 border-b border-neutral-200">
                  Command Menu
                </div>
                <div>├─ Dashboard</div>
                <div>├─ Events</div>
                <div>├─ Ticket Sales</div>
                <div>├─ Analytics</div>
                <div>├─ Check-ins</div>
                <div>└─ Settings</div>
              </div>
            </div>

            {/* Staff IA */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 space-y-4 shadow-2xs">
              <div className="flex items-center gap-2">
                <ScanLine className="w-4 h-4 text-amber-600" />
                <h3 className="text-base font-bold text-neutral-900">Staff</h3>
              </div>
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100 font-mono text-xs space-y-2 text-neutral-700">
                <div className="font-semibold text-neutral-900 pb-1 border-b border-neutral-200">
                  Gate Console
                </div>
                <div>├─ Login</div>
                <div>├─ Assigned Events</div>
                <div>├─ Gate</div>
                <div>├─ Scanner</div>
                <div>├─ Manual Verification</div>
                <div>└─ Check-ins</div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 11. DESIGN PROCESS                                                        */}
        {/* ========================================================================= */}
        <section id="process" className="space-y-10 scroll-mt-28">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-neutral-950 tracking-tight">
              Design Process
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              A systematic 7-stage design and development framework connecting exploratory research to production execution.
            </p>
          </div>

          {/* Horizontal / Step Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 pt-4">
            {[
              {
                step: '01',
                title: 'Discover',
                desc: 'Understanding the event-ticketing ecosystem and identifying the needs of attendees, organizers and event staff.',
              },
              {
                step: '02',
                title: 'Define',
                desc: 'Mapping user journeys, product requirements, platform responsibilities and key functionality.',
              },
              {
                step: '03',
                title: 'Structure',
                desc: 'Creating information architecture, user flows and wireframes across the four platforms.',
              },
              {
                step: '04',
                title: 'Design',
                desc: 'Developing the visual system, reusable components and high-fidelity interfaces.',
              },
              {
                step: '05',
                title: 'Prototype',
                desc: 'Connecting screens into realistic user flows and testing interactions.',
              },
              {
                step: '06',
                title: 'Build',
                desc: 'Translating the approved designs into functional digital experiences.',
              },
              {
                step: '07',
                title: 'Test & Iterate',
                desc: 'Testing functionality, identifying issues and refining the product.',
              },
            ].map((phase) => (
              <div
                key={phase.step}
                className="p-5 rounded-2xl bg-white border border-neutral-200 flex flex-col justify-between space-y-3 shadow-2xs"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-emerald-600 block mb-1">
                    {phase.step}
                  </span>
                  <h3 className="text-base font-bold text-neutral-900">{phase.title}</h3>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 12. USER FLOWS                                                            */}
        {/* ========================================================================= */}
        <section id="user-flows" className="space-y-10 scroll-mt-28">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              Interaction Details
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-neutral-950 tracking-tight">
              User Flows
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              Step-by-step state progressions for key user operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 space-y-3 shadow-2xs">
              <h3 className="text-sm font-bold text-neutral-900 uppercase font-mono tracking-wider">
                Attendee Ticket Purchase
              </h3>
              <p className="text-xs font-mono text-neutral-600 leading-relaxed">
                Event discovery → Event details → Ticket selection → Checkout → Payment → Ticket confirmation
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200 space-y-3 shadow-2xs">
              <h3 className="text-sm font-bold text-neutral-900 uppercase font-mono tracking-wider">
                Organizer Event Creation
              </h3>
              <p className="text-xs font-mono text-neutral-600 leading-relaxed">
                Dashboard → Create event → Event details → Venue → Ticket configuration → Schedule → Publish
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200 space-y-3 shadow-2xs">
              <h3 className="text-sm font-bold text-neutral-900 uppercase font-mono tracking-wider">
                Staff Check-in
              </h3>
              <p className="text-xs font-mono text-neutral-600 leading-relaxed">
                Login → Assigned event → Gate → Scan → Verify → Check-in
              </p>
            </div>
          </div>

          {/* User Flow Diagram Image Placeholder */}
          <div className="pt-2">
            <CaseStudyImageArea
              storageKey="user_flow"
              placeholderLabel="UPLOAD USER FLOW / FLOWCHART"
              description="Upload high-res flowchart or system sequence diagram mapping the multi-platform user pathways."
              aspectRatio="16/9"
            />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 13. WIREFRAMES                                                            */}
        {/* ========================================================================= */}
        <section id="wireframes" className="space-y-10 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
                Low-Fidelity Exploration
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-neutral-950 tracking-tight">
                From Structure to Interface
              </h2>
            </div>
            <div className="lg:col-span-7 text-neutral-700 leading-relaxed text-base sm:text-lg">
              <p>
                Before developing the final interface, the product structure was explored through wireframes and early layouts. This helped validate hierarchy, navigation and user flows before moving into high-fidelity UI.
              </p>
            </div>
          </div>

          {/* Wireframes Image Placeholder */}
          <div className="pt-2">
            <CaseStudyImageArea
              storageKey="wireframes"
              placeholderLabel="UPLOAD WIREFRAMES"
              description="Upload early wireframe explorations, whiteboard flows, and greyscale structural drafts across mobile and web."
              allowMultiple={true}
              aspectRatio="16/9"
            />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 14. VISUAL DESIGN SYSTEM                                                  */}
        {/* ========================================================================= */}
        <section id="design-system" className="space-y-10 scroll-mt-28">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              Visual Language
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-neutral-950 tracking-tight">
              Visual Design System
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              A cohesive design token library ensuring unified aesthetic harmony across attendee, organizer, and staff touchpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Typography Card */}
            <div className="p-7 rounded-2xl bg-white border border-neutral-200 space-y-5 shadow-2xs">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">
                Typography
              </span>
              <p className="text-sm text-neutral-600">
                Primary Ticketa typography system pairing geometric modern sans with tabular numbers for ticketing data.
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200/80">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">Headings</span>
                  <p className="text-xl font-bold font-sans text-neutral-900">Plus Jakarta Sans</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200/80">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">Body &amp; UI</span>
                  <p className="text-sm font-sans text-neutral-800">Inter / Neutral Sans</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200/80">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">Data &amp; Codes</span>
                  <p className="text-xs font-mono text-neutral-800">JetBrains Mono (QR / Codes)</p>
                </div>
              </div>
            </div>

            {/* Colors Card */}
            <div className="p-7 rounded-2xl bg-white border border-neutral-200 space-y-5 shadow-2xs">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">
                Colors
              </span>
              <p className="text-sm text-neutral-600">
                Ticketa primary brand green with deep slate neutrals, ensuring high contrast and outdoor venue legibility.
              </p>
              <div className="space-y-2 pt-2">
                {[
                  { name: 'Ticketa Primary', hex: '#10B981', bg: 'bg-[#10B981]', text: 'text-white' },
                  { name: 'Forest Dark', hex: '#064E3B', bg: 'bg-[#064E3B]', text: 'text-white' },
                  { name: 'Slate Charcoal', hex: '#0F172A', bg: 'bg-[#0F172A]', text: 'text-white' },
                  { name: 'Canvas Surface', hex: '#FAFAFA', bg: 'bg-[#FAFAFA]', text: 'text-neutral-900 border border-neutral-200' },
                  { name: 'Muted Slate', hex: '#64748B', bg: 'bg-[#64748B]', text: 'text-white' },
                ].map((c) => (
                  <div
                    key={c.hex}
                    className="flex items-center justify-between p-2 rounded-lg border border-neutral-100 text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-5 h-5 rounded-md ${c.bg}`} />
                      <span className="font-medium text-neutral-800">{c.name}</span>
                    </div>
                    <span className="font-mono text-neutral-400 text-[11px]">{c.hex}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Components Card */}
            <div className="p-7 rounded-2xl bg-white border border-neutral-200 space-y-5 shadow-2xs">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">
                Components
              </span>
              <p className="text-sm text-neutral-600">
                Engineered component hierarchy supporting rapid multi-platform interface consistency.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                {[
                  'Buttons',
                  'Event cards',
                  'Ticket cards',
                  'Input fields',
                  'Navigation',
                  'Status indicators',
                  'Dashboard cards',
                  'Tables',
                  'Modals',
                  'Scanner HUD',
                ].map((comp) => (
                  <div
                    key={comp}
                    className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/80 text-neutral-700 font-medium flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-600" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Design System Image Placeholder */}
          <div className="pt-2">
            <CaseStudyImageArea
              storageKey="design_system"
              placeholderLabel="UPLOAD TICKETA DESIGN SYSTEM / COMPONENTS"
              description="Upload design system sheets, atomic UI tokens, component variants, and card states."
              aspectRatio="16/9"
            />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 15. RESPONSIVE DESIGN                                                     */}
        {/* ========================================================================= */}
        <section id="responsive" className="space-y-10 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
                Multi-Device Experience
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-bold text-neutral-950 tracking-tight">
                Responsive Design
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-neutral-700 leading-relaxed text-base sm:text-lg">
              <p>
                Ticketa was designed across different screen sizes and product contexts.
              </p>
              <p>
                The interface adapts according to the platform and device rather than simply shrinking the desktop interface.
              </p>
              <div className="flex items-center gap-3 pt-2 text-xs font-mono font-bold text-emerald-800">
                <span className="px-3 py-1 bg-emerald-50 rounded border border-emerald-200">Mobile</span>
                <span>→</span>
                <span className="px-3 py-1 bg-emerald-50 rounded border border-emerald-200">Tablet</span>
                <span>→</span>
                <span className="px-3 py-1 bg-emerald-50 rounded border border-emerald-200">Desktop</span>
              </div>
            </div>
          </div>

          {/* Responsive Screens Image Placeholder */}
          <div className="pt-2">
            <CaseStudyImageArea
              storageKey="responsive_screens"
              placeholderLabel="UPLOAD RESPONSIVE SCREENS"
              description="Upload side-by-side comparisons of mobile, tablet, and desktop breakpoints."
              aspectRatio="16/9"
            />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 16. DEVELOPMENT                                                           */}
        {/* ========================================================================= */}
        <section id="development" className="space-y-10 scroll-mt-28">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              Engineering Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-neutral-950 tracking-tight">
              Bringing Ticketa to Life
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              Ticketa moved beyond static design screens into functional development.
            </p>
          </div>

          {/* Development Progression */}
          <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-2xs space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-500">
              <span className="font-bold text-neutral-900">Design</span>
              <span>→</span>
              <span className="font-bold text-neutral-900">Development</span>
              <span>→</span>
              <span className="font-bold text-neutral-900">Testing</span>
              <span>→</span>
              <span className="font-bold text-neutral-900">Deployment</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 pt-3 border-t border-neutral-100 text-xs">
              {[
                { title: 'Frontend', desc: 'React, TypeScript & Tailwind UI' },
                { title: 'Backend', desc: 'Node.js REST API Architecture' },
                { title: 'Database', desc: 'Structured Event & Order Schema' },
                { title: 'Auth', desc: 'Role-Based Access Control' },
                { title: 'API', desc: 'Integrations & Webhook Handlers' },
                { title: 'Payments', desc: 'Checkout Integration Rails' },
                { title: 'Deploy', desc: 'Continuous Deployment Vercel' },
              ].map((item) => (
                <div key={item.title} className="p-3 bg-neutral-50 rounded-lg border border-neutral-200/80">
                  <span className="font-mono text-[10px] uppercase text-neutral-400 block mb-1">
                    {item.title}
                  </span>
                  <p className="font-medium text-neutral-800 text-[11px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Development Image Placeholder */}
          <div className="pt-2">
            <CaseStudyImageArea
              storageKey="dev_screens"
              placeholderLabel="UPLOAD DEVELOPMENT / LIVE PRODUCT SCREENSHOTS"
              description="Upload live code, terminal outputs, IDE components, or live production previews."
              allowMultiple={true}
              aspectRatio="16/9"
            />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 17. PRODUCT ARCHITECTURE                                                  */}
        {/* ========================================================================= */}
        <section id="architecture" className="space-y-10 scroll-mt-28">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              System Topology
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-neutral-950 tracking-tight">
              Product Architecture
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              A clean architectural model showing how user touchpoints connect into the central platform core.
            </p>
          </div>

          {/* Visual Architecture Diagram */}
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950 text-white space-y-8">
            {/* Attendee Tier */}
            <div className="text-center max-w-md mx-auto space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                Layer 01: Client Endpoints
              </span>
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 font-mono text-sm font-semibold text-emerald-400">
                ATTENDEE
                <div className="text-xs font-normal text-neutral-300 mt-1">Mobile App + Website</div>
              </div>
            </div>

            {/* Down Connector */}
            <div className="flex justify-center">
              <div className="w-px h-8 bg-neutral-800 relative">
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-r border-neutral-600 rotate-45" />
              </div>
            </div>

            {/* Central Platform Core */}
            <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-neutral-900/90 border border-emerald-500/30 text-center space-y-4 shadow-lg">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                Layer 02: Platform Engine
              </span>
              <h3 className="text-lg font-bold text-white font-mono">TICKETA PLATFORM</h3>
              <div className="flex flex-wrap justify-center gap-2 text-xs font-mono">
                {[
                  'Authentication',
                  'Events',
                  'Tickets',
                  'Orders',
                  'Payments',
                  'Attendees',
                  'Organizations',
                ].map((mod) => (
                  <span
                    key={mod}
                    className="px-2.5 py-1 bg-neutral-800/90 rounded border border-neutral-700 text-neutral-200"
                  >
                    {mod}
                  </span>
                ))}
              </div>
            </div>

            {/* Down Connectors */}
            <div className="flex justify-center gap-24">
              <div className="w-px h-8 bg-neutral-800 relative">
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-r border-neutral-600 rotate-45" />
              </div>
              <div className="w-px h-8 bg-neutral-800 relative">
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-r border-neutral-600 rotate-45" />
              </div>
            </div>

            {/* Operator Tier */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-center space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">
                  Layer 03: Organizer
                </span>
                <p className="font-mono text-sm font-semibold text-white">Organizer Dashboard</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-center space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                  Layer 04: Operations
                </span>
                <p className="font-mono text-sm font-semibold text-white">Check-in Dashboard</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 18. KEY PRODUCT DECISIONS                                                 */}
        {/* ========================================================================= */}
        <section id="decisions" className="space-y-10 scroll-mt-28">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              Rationale
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-neutral-950 tracking-tight">
              Key Product Decisions
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              Core architectural choices made to protect data integrity, prevent clutter, and support live operational velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-neutral-200 space-y-3 shadow-2xs">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 font-bold uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Role-based experiences</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Different users receive different interfaces and permissions based on their responsibilities.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-neutral-200 space-y-3 shadow-2xs">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-700 font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Separate staff access</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Staff check-in functionality is separated from organizer management to reduce unnecessary access.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-neutral-200 space-y-3 shadow-2xs">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-700 font-bold uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>Event-centric architecture</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Events sit at the center of the platform, connecting tickets, attendees, sales, organizers and check-ins.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-neutral-200 space-y-3 shadow-2xs">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-violet-700 font-bold uppercase tracking-wider">
                <GitMerge className="w-4 h-4" />
                <span>Scalable project structure</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                The system is designed so additional events, organizers and staff members can operate within the same ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 19. CHALLENGES & SOLUTIONS                                                */}
        {/* ========================================================================= */}
        <section id="challenges" className="space-y-10 scroll-mt-28">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              Problem Solving
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-neutral-950 tracking-tight">
              Challenges &amp; Solutions
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              Addressing real-world product and engineering constraints with deliberate design interventions.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                challenge:
                  'Building multiple connected experiences without making the product feel fragmented.',
                solution:
                  'Create a shared visual language and consistent interaction patterns across all four platforms.',
              },
              {
                challenge: 'Different users require different levels of access.',
                solution:
                  'Create role-specific experiences for attendees, organizers and staff.',
              },
              {
                challenge: 'Event-day check-in needs to be fast.',
                solution:
                  'Create a focused staff experience centered around ticket scanning and verification.',
              },
              {
                challenge: 'Event organizers need more than ticket sales.',
                solution:
                  'Create an organizer workspace covering event creation, ticket management, sales, analytics and revenue tracking.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 rounded-2xl bg-white border border-neutral-200 shadow-2xs"
              >
                <div className="md:col-span-5 space-y-1 border-b md:border-b-0 md:border-r border-neutral-100 pb-3 md:pb-0 md:pr-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-red-600 font-bold">
                    Challenge
                  </span>
                  <p className="text-sm font-medium text-neutral-900 leading-relaxed">
                    {item.challenge}
                  </p>
                </div>
                <div className="md:col-span-7 space-y-1 md:pl-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-700 font-bold">
                    Solution
                  </span>
                  <p className="text-sm text-neutral-700 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 20. CURRENT PRODUCT STATUS                                                */}
        {/* ========================================================================= */}
        <section id="status" className="space-y-6 scroll-mt-28">
          <div className="p-8 sm:p-12 rounded-3xl bg-neutral-900 text-white space-y-6 shadow-md">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>CURRENT PRODUCT STATUS</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-sans font-bold text-white tracking-tight">
              Where Ticketa Is Today
            </h2>

            <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed max-w-3xl">
              <p>
                Ticketa has progressed from product concept and interface design into active product development.
              </p>
              <p>
                The product continues to be refined across its attendee, organizer, marketplace and staff experiences.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 21. WHAT I LEARNED                                                        */}
        {/* ========================================================================= */}
        <section id="learned" className="space-y-10 scroll-mt-28">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              Retrospective
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-neutral-950 tracking-tight">
              What I Learned
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              Key takeaways gained from architecting, designing, and building an interconnected multi-surface product.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-neutral-200 space-y-2 shadow-2xs">
              <h3 className="text-base font-bold text-neutral-900">
                Designing ecosystems is different from designing screens
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                A multi-platform product requires understanding how different interfaces communicate with one another.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-neutral-200 space-y-2 shadow-2xs">
              <h3 className="text-base font-bold text-neutral-900">
                Roles shape product architecture
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Attendees, organizers and staff have fundamentally different goals, so their experiences should not be forced into the same interface.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-neutral-200 space-y-2 shadow-2xs">
              <h3 className="text-base font-bold text-neutral-900">
                Operational experiences matter
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                The event doesn’t end when someone buys a ticket. Check-in and event-day operations are equally important parts of the product.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-neutral-200 space-y-2 shadow-2xs">
              <h3 className="text-base font-bold text-neutral-900">
                Design and development must work together
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Moving Ticketa from Figma into a functional product helped identify implementation considerations that are difficult to see in static designs.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 22. FINAL PRODUCT SHOWCASE                                                */}
        {/* ========================================================================= */}
        <section id="showcase" className="space-y-12 scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              Final Artifacts
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-neutral-950 tracking-tight">
              One Platform. Four Experiences. One Connected Event Journey.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Explore the four touchpoints that power the Ticketa event ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Attendee App */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col justify-between space-y-4 shadow-2xs">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 uppercase">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Platform 01</span>
                </div>
                <h3 className="text-base font-bold text-neutral-900">Attendee App</h3>
              </div>
              <CaseStudyImageArea
                storageKey="final_showcase_mobile"
                placeholderLabel="UPLOAD FINAL PRODUCT SHOWCASE"
                description="Upload final Attendee App mockup."
                aspectRatio="phone"
                allowMultiple={true}
              />
            </div>

            {/* Event Marketplace */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col justify-between space-y-4 shadow-2xs">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-violet-700 uppercase">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Platform 02</span>
                </div>
                <h3 className="text-base font-bold text-neutral-900">Event Marketplace</h3>
              </div>
              <CaseStudyImageArea
                storageKey="final_showcase_marketplace"
                placeholderLabel="UPLOAD FINAL PRODUCT SHOWCASE"
                description="Upload final Marketplace mockup."
                aspectRatio="16/9"
                allowMultiple={true}
              />
            </div>

            {/* Organizer Dashboard */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col justify-between space-y-4 shadow-2xs">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-blue-700 uppercase">
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span>Platform 03</span>
                </div>
                <h3 className="text-base font-bold text-neutral-900">Organizer Dashboard</h3>
              </div>
              <CaseStudyImageArea
                storageKey="final_showcase_organizer"
                placeholderLabel="UPLOAD FINAL PRODUCT SHOWCASE"
                description="Upload final Organizer screen."
                aspectRatio="16/9"
                allowMultiple={true}
              />
            </div>

            {/* Staff Check-in */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 flex flex-col justify-between space-y-4 shadow-2xs">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-700 uppercase">
                  <ScanLine className="w-3.5 h-3.5" />
                  <span>Platform 04</span>
                </div>
                <h3 className="text-base font-bold text-neutral-900">Staff Check-in</h3>
              </div>
              <CaseStudyImageArea
                storageKey="final_showcase_staff"
                placeholderLabel="UPLOAD FINAL PRODUCT SHOWCASE"
                description="Upload final Staff Check-in screen."
                aspectRatio="phone"
                allowMultiple={true}
              />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 23. FINAL CTA                                                             */}
        {/* ========================================================================= */}
        <section id="cta" className="pt-8 pb-4">
          <div className="p-10 sm:p-16 rounded-3xl bg-neutral-950 text-white text-center space-y-6 max-w-4xl mx-auto shadow-xl">
            <h2 className="text-3xl sm:text-5xl font-sans font-bold text-white tracking-tight">
              Building Better Digital Experiences
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Ticketa represents an ongoing exploration of how thoughtful product design and development can simplify complex real-world experiences.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="https://ticketa2-1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-mono text-xs uppercase tracking-wider font-bold rounded-xl transition-all shadow-md hover:shadow-emerald-500/20"
              >
                <span>View Live Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                to="/ui-ux"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 font-mono text-xs uppercase tracking-wider rounded-xl transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Portfolio</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
