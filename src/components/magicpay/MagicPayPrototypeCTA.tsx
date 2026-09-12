import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ExternalLink, 
  Edit2, 
  Check, 
  ArrowRight, 
  Mail, 
  Layers, 
  Smartphone, 
  Calendar,
  Send,
  Plane
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface MagicPayPrototypeCTAProps {
  prototypeUrl: string;
  onUpdatePrototypeUrl: (newUrl: string) => void;
}

export const MagicPayPrototypeCTA: React.FC<MagicPayPrototypeCTAProps> = ({
  prototypeUrl,
  onUpdatePrototypeUrl,
}) => {
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [draftUrl, setDraftUrl] = useState(prototypeUrl);

  const handleSaveUrl = () => {
    onUpdatePrototypeUrl(draftUrl.trim() || 'https://figma.com');
    setIsEditingUrl(false);
  };

  return (
    <div className="space-y-24">
      {/* ============================================================ */}
      {/* SECTION 17: INTERACTIVE PROTOTYPE */}
      {/* ============================================================ */}
      <section id="prototype" className="space-y-8 scroll-mt-28">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-purple-600 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-600" />
            16 / Live Interaction
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 font-display">
            Interactive Prototype: Test the MagicPay Experience
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
            Experience the micro-interactions, live recipient verification, and fluid bottom-sheet transitions firsthand in the Figma prototype.
          </p>
        </div>

        {/* Prototype Card */}
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-neutral-200/80 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-100">
            <div>
              <h3 className="text-base font-bold text-neutral-900 font-display">
                Figma Mobile Prototype Viewer
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Target device: iPhone 15 Pro • Optimized for touch & cursor exploration
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsEditingUrl(!isEditingUrl)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-600 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200/70 transition-colors cursor-pointer"
                title="Edit prototype link"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>{isEditingUrl ? 'Cancel' : 'Change Prototype URL'}</span>
              </button>

              <a
                href={prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-xs"
              >
                <span>Open in Figma</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Edit URL box */}
          {isEditingUrl && (
            <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200 space-y-3">
              <label className="text-xs font-mono font-semibold text-neutral-700 block">
                Paste your Figma Prototype or Embed URL:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={draftUrl}
                  onChange={(e) => setDraftUrl(e.target.value)}
                  placeholder="https://www.figma.com/proto/..."
                  className="flex-1 px-3 py-2 text-xs rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                />
                <button
                  onClick={handleSaveUrl}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 text-white text-xs font-semibold rounded-xl hover:bg-neutral-800 transition-colors"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save URL</span>
                </button>
              </div>
            </div>
          )}

          {/* Prototype Display Box / Frame */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800 flex flex-col items-center justify-center p-6 text-center text-white">
            <div className="max-w-md space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/30 border border-indigo-500/50 flex items-center justify-center mx-auto text-indigo-400">
                <Sparkles className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold font-display text-white">
                  MagicPay Interactive Click-Through
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Walk through the onboarding flow, initiate a live bank transfer, mask sensitive balance numbers, and customize virtual card spending ceilings.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-indigo-500/25"
                >
                  <span>Launch Figma Prototype</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 18: FINAL CTA & CASE STUDY NAVIGATION */}
      {/* ============================================================ */}
      <section id="cta" className="space-y-12 scroll-mt-28">
        {/* Recruiter-Focused Contact Banner */}
        <div className="p-8 sm:p-12 bg-gradient-to-br from-neutral-950 via-neutral-900 to-indigo-950 text-white rounded-3xl shadow-xl space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Open to Product Design Roles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
              Looking for a Product Designer who turns complex problem spaces into simple, lovable experiences?
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
              I specialize in end-to-end product design — spanning generative user research, user flows, atomic design systems, and rapid interactive prototyping. Let’s talk about how I can bring craft, velocity, and user-centered rigor to your product team.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Product%20Design%20Inquiry%20-%20MagicPay%20Case%20Study`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all shadow-md hover:shadow-indigo-500/25 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/15 transition-colors"
            >
              <span>Learn More About Isaiah</span>
            </Link>
          </div>
        </div>

        {/* Explore Other Flagship Projects */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-neutral-900 font-display">
              Explore More Case Studies
            </h3>
            <Link
              to="/ui-ux"
              className="text-xs font-mono uppercase text-indigo-600 hover:text-indigo-800 transition-colors font-medium flex items-center gap-1"
            >
              <span>All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* PaceJet Card */}
            <Link
              to="/case-study/pacejet"
              className="group p-6 bg-white rounded-3xl border border-neutral-200/80 shadow-xs hover:border-neutral-300 hover:shadow-md transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-neutral-400 font-medium flex items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-[#1E7B21]" />
                  Aviation / UX Overhaul
                </span>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors font-display">
                  PaceJet: Private Aviation Booking Experience
                </h4>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1 line-clamp-2">
                  150+ screens UX restructuring, empty leg discovery, and luxury charter booking design system.
                </p>
              </div>
            </Link>

            {/* Ticketa Card */}
            <Link
              to="/case-study/ticketa"
              className="group p-6 bg-white rounded-3xl border border-neutral-200/80 shadow-xs hover:border-neutral-300 hover:shadow-md transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-neutral-400 font-medium flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-600" />
                  Event Ticketing Ecosystem
                </span>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors font-display">
                  Ticketa: End-to-End Event Management
                </h4>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1 line-clamp-2">
                  4 connected platforms: Attendee Mobile App, Web Marketplace, Organizer Console, and Staff Check-in.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
