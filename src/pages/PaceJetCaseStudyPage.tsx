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
} from 'lucide-react';
import { PaceJetHero } from '../components/pacejet/PaceJetHero';
import { PaceJetStrategy } from '../components/pacejet/PaceJetStrategy';
import { PaceJetDiscovery } from '../components/pacejet/PaceJetDiscovery';
import { PaceJetDesignSystem } from '../components/pacejet/PaceJetDesignSystem';
import { PaceJetCoreFeatures } from '../components/pacejet/PaceJetCoreFeatures';
import { PaceJetTestingIterations } from '../components/pacejet/PaceJetTestingIterations';
import { PaceJetTakeawaysConclusion } from '../components/pacejet/PaceJetTakeawaysConclusion';

export const PaceJetCaseStudyPage: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [isPrototypeModalOpen, setIsPrototypeModalOpen] = useState(false);
  
  // Custom user prototype URL with localStorage persistence
  const [prototypeUrl, setPrototypeUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('pacejet_prototype_url');
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
      localStorage.setItem('pacejet_prototype_url', formatted);
    } catch {}
  };

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Challenge', href: '#challenge' },
    { label: 'Goals', href: '#goals' },
    { label: 'Scope', href: '#scope' },
    { label: 'IA & Flow', href: '#ia' },
    { label: 'Research', href: '#research' },
    { label: 'Design System', href: '#direction' },
    { label: 'Core Features', href: '#discovery' },
    { label: 'Testing', href: '#testing' },
    { label: '150+ Screens', href: '#showcase-screens' },
    { label: 'Takeaways', href: '#takeaways' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1E1E1E] selection:bg-[#2EB732] selection:text-white pt-24 pb-24 font-sans">
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
            <span className="text-xs font-mono font-semibold text-[#1E7B21] uppercase tracking-wider">
              PaceJet Case Study
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-4 text-xs font-mono text-neutral-500">
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
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider border border-neutral-200 hover:border-neutral-900 rounded-md bg-white text-neutral-700 transition-colors shadow-2xs"
              title="Copy page link"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Copied' : 'Share'}</span>
            </button>
            <button
              type="button"
              onClick={() => setIsPrototypeModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider bg-[#2EB732] hover:bg-[#279e2b] text-white rounded-md transition-colors shadow-2xs font-semibold"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Prototype</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Container assembling all 31 sections */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 lg:space-y-36 mt-10">
        {/* Sections 1 - 3 */}
        <PaceJetHero onOpenPrototype={() => setIsPrototypeModalOpen(true)} />

        {/* Sections 4 - 8 */}
        <PaceJetStrategy />

        {/* Sections 9 - 13 */}
        <PaceJetDiscovery />

        {/* Sections 14 - 18 */}
        <PaceJetDesignSystem />

        {/* Sections 19 - 22 */}
        <PaceJetCoreFeatures />

        {/* Sections 23 - 26 */}
        <PaceJetTestingIterations />

        {/* Sections 27 - 31 */}
        <PaceJetTakeawaysConclusion onOpenPrototype={() => setIsPrototypeModalOpen(true)} />
      </main>

      {/* Prototype Modal / Link Drawer */}
      {isPrototypeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-neutral-200 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#2EB732]/10 flex items-center justify-center text-[#1E7B21]">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-900">PaceJet Prototype</h3>
                  <p className="text-xs text-neutral-500">Interactive Mobile Experience</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsPrototypeModalOpen(false)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono uppercase text-neutral-500">Target Prototype Link</span>
                {!isEditingProtoUrl && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditingProtoUrl(true);
                      setTempProtoUrl(prototypeUrl);
                    }}
                    className="text-[#1E7B21] hover:underline font-mono text-[11px] flex items-center gap-1"
                  >
                    <Edit2 className="w-3 h-3" />
                    <span>Edit URL</span>
                  </button>
                )}
              </div>

              {isEditingProtoUrl ? (
                <div className="space-y-2">
                  <input
                    type="url"
                    value={tempProtoUrl}
                    onChange={(e) => setTempProtoUrl(e.target.value)}
                    placeholder="https://www.figma.com/proto/..."
                    className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 focus:border-[#2EB732] outline-none font-mono"
                  />
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleSaveProtoUrl}
                      className="px-3 py-1 rounded bg-[#2EB732] text-white text-xs font-mono"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditingProtoUrl(false)}
                      className="px-3 py-1 rounded border border-neutral-300 text-neutral-600 text-xs font-mono"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <p className="font-mono text-xs text-neutral-800 break-all bg-white p-2 rounded border border-neutral-200">
                  {prototypeUrl}
                </p>
              )}
            </div>

            <div className="space-y-2 pt-1">
              <a
                href={prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#2EB732] hover:bg-[#279e2b] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-colors shadow-sm"
              >
                <span>Launch Figma Prototype</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => setIsPrototypeModalOpen(false)}
                className="w-full py-2.5 text-xs font-mono text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
