import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  Share2,
  Smartphone,
  X,
  ExternalLink,
  Check,
  Edit2,
  Sparkles,
} from 'lucide-react';
import { MagicPayHero } from '../components/magicpay/MagicPayHero';
import { MagicPayOverviewSolution } from '../components/magicpay/MagicPayOverviewSolution';
import { MagicPayProcessCompetitors } from '../components/magicpay/MagicPayProcessCompetitors';
import { MagicPayResearchPersona } from '../components/magicpay/MagicPayResearchPersona';
import { MagicPayFlowsWireframes } from '../components/magicpay/MagicPayFlowsWireframes';
import { MagicPayHighFidelityUI } from '../components/magicpay/MagicPayHighFidelityUI';
import { MagicPayDesignSystem } from '../components/magicpay/MagicPayDesignSystem';
import { MagicPayTestingResults } from '../components/magicpay/MagicPayTestingResults';
import { MagicPayPrototypeCTA } from '../components/magicpay/MagicPayPrototypeCTA';

export const MagicPayCaseStudyPage: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [isPrototypeModalOpen, setIsPrototypeModalOpen] = useState(false);

  // Custom user prototype URL with localStorage persistence
  const [prototypeUrl, setPrototypeUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('magicpay_prototype_url');
      if (saved) return saved;
    } catch {}
    return 'https://figma.com';
  });
  const [isEditingProtoUrl, setIsEditingProtoUrl] = useState(false);
  const [tempProtoUrl, setTempProtoUrl] = useState('');

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleSaveProtoUrl = () => {
    const formatted = tempProtoUrl.trim() || 'https://figma.com';
    setPrototypeUrl(formatted);
    setIsEditingProtoUrl(false);
    try {
      localStorage.setItem('magicpay_prototype_url', formatted);
    } catch {}
  };

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'Process', href: '#process' },
    { label: 'Competitors', href: '#competitive-analysis' },
    { label: 'Persona', href: '#persona' },
    { label: 'Research', href: '#research' },
    { label: 'Flows', href: '#user-flows' },
    { label: 'Wireframes', href: '#wireframes' },
    { label: 'UI Design', href: '#high-fidelity-ui' },
    { label: 'System', href: '#design-system' },
    { label: 'Testing', href: '#testing' },
    { label: 'Results', href: '#results' },
    { label: 'Prototype', href: '#prototype' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0F172A] selection:bg-indigo-600 selection:text-white pt-24 pb-24 font-sans">
      {/* Top sticky sub-nav */}
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
            <span className="text-xs font-mono font-semibold text-indigo-600 uppercase tracking-wider">
              MagicPay Case Study
            </span>
          </div>

          <div className="hidden xl:flex items-center gap-3.5 text-xs font-mono text-neutral-500">
            {navItems.map((item) => (
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider border border-neutral-200 hover:border-neutral-900 rounded-md bg-white text-neutral-700 transition-colors shadow-2xs cursor-pointer"
              title="Copy case study link"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Copied' : 'Share'}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsPrototypeModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors shadow-2xs font-semibold cursor-pointer"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Prototype</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Container assembling all 18 sections */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 lg:space-y-36 mt-10">
        {/* Section 1: Hero */}
        <MagicPayHero
          prototypeUrl={prototypeUrl}
          onOpenPrototype={() => setIsPrototypeModalOpen(true)}
        />

        {/* Sections 2, 3, 4: Overview, Problem, Solution */}
        <MagicPayOverviewSolution />

        {/* Sections 5, 6: Process, Competitive Analysis */}
        <MagicPayProcessCompetitors />

        {/* Sections 7, 8, 9: Persona, Research, User Journey */}
        <MagicPayResearchPersona />

        {/* Sections 10, 11: User Flows, Wireframes */}
        <MagicPayFlowsWireframes />

        {/* Section 12: High-Fidelity UI Screens & Showcase */}
        <MagicPayHighFidelityUI />

        {/* Section 13: Design System & Visual Foundation */}
        <MagicPayDesignSystem />

        {/* Sections 14, 15, 16: Usability Testing, Results, Key Learnings */}
        <MagicPayTestingResults />

        {/* Sections 17, 18: Prototype Viewer & Recruiter CTA */}
        <MagicPayPrototypeCTA
          prototypeUrl={prototypeUrl}
          onUpdatePrototypeUrl={(newUrl) => {
            setPrototypeUrl(newUrl);
            try {
              localStorage.setItem('magicpay_prototype_url', newUrl);
            } catch {}
          }}
        />
      </main>

      {/* Prototype Launch Modal */}
      {isPrototypeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-neutral-200 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-900">MagicPay Prototype</h3>
                  <p className="text-xs text-neutral-500">Interactive Figma Mobile Flow</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsPrototypeModalOpen(false)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono uppercase text-neutral-500">Figma Prototype Link</span>
                {!isEditingProtoUrl && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditingProtoUrl(true);
                      setTempProtoUrl(prototypeUrl);
                    }}
                    className="text-indigo-600 hover:underline font-mono text-[11px] flex items-center gap-1 cursor-pointer"
                  >
                    <Edit2 className="w-3 h-3" />
                    <span>Edit link</span>
                  </button>
                )}
              </div>

              {isEditingProtoUrl ? (
                <div className="space-y-2">
                  <input
                    type="url"
                    value={tempProtoUrl}
                    onChange={(e) => setTempProtoUrl(e.target.value)}
                    placeholder="https://figma.com/proto/..."
                    className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    autoFocus
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsEditingProtoUrl(false)}
                      className="px-2.5 py-1 text-xs text-neutral-500 hover:text-neutral-900"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleSaveProtoUrl}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-neutral-900 text-white text-xs font-semibold rounded-md"
                    >
                      <Check className="w-3 h-3" />
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-neutral-700 font-mono break-all truncate">
                  {prototypeUrl}
                </p>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsPrototypeModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-neutral-950 transition-colors"
              >
                Close
              </button>
              <a
                href={prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors shadow-xs"
              >
                <span>Launch in Figma</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
