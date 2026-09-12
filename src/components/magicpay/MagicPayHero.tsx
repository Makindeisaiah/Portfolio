import React from 'react';
import { 
  Smartphone, 
  Layers, 
  Figma, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  ArrowUpRight, 
  Eye, 
  CheckCircle2 
} from 'lucide-react';
import { CaseStudyImageArea } from '../casestudy/CaseStudyImageArea';
import magicPayHeroImg from '../../assets/images/magicpay_hero_1788882195463.jpg';

interface MagicPayHeroProps {
  onOpenPrototype: () => void;
  prototypeUrl: string;
}

export const MagicPayHero: React.FC<MagicPayHeroProps> = ({ onOpenPrototype, prototypeUrl }) => {
  return (
    <header className="space-y-10" id="hero">
      {/* Category and Badges */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-50 text-indigo-700 border border-indigo-200/80">
          <Smartphone className="w-3.5 h-3.5" />
          Fintech / Mobile Banking
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-50 text-purple-700 border border-purple-200/80">
          <Layers className="w-3.5 h-3.5" />
          End-to-End Product Design
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-100 text-neutral-700 border border-neutral-200">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          Zero-Friction Financial UX
        </span>
      </div>

      {/* Main Case Study Headline */}
      <div className="space-y-4 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 font-display leading-[1.08]">
          MagicPay: Designing a Frictionless, Human-Centered Digital Banking Experience
        </h1>
        <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed font-sans max-w-3xl">
          An end-to-end product design case study exploring how reducing cognitive load, providing real-time recipient verification, and designing for transactional confidence transforms everyday money transfers, utility payments, and card management into a secure, effortless ritual.
        </p>
      </div>

      {/* Structured Project Metadata Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-xs">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
            My Role
          </span>
          <p className="text-sm font-semibold text-neutral-900">
            Product Designer
          </p>
          <span className="text-xs text-neutral-500">
            UX Research, Flows, UI & Systems
          </span>
        </div>

        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
            Primary Tool
          </span>
          <p className="text-sm font-semibold text-neutral-900 flex items-center gap-1.5">
            Figma
          </p>
          <span className="text-xs text-neutral-500">
            Components, Tokens & Prototyping
          </span>
        </div>

        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
            Project Scope
          </span>
          <p className="text-sm font-semibold text-neutral-900">
            Full Product Lifecycle
          </p>
          <span className="text-xs text-neutral-500">
            Discovery to High-Fidelity Design
          </span>
        </div>

        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
            Target Platform
          </span>
          <p className="text-sm font-semibold text-neutral-900">
            iOS & Android
          </p>
          <span className="text-xs text-neutral-500">
            Native Mobile Banking Experience
          </span>
        </div>
      </div>

      {/* Quick Action CTAs */}
      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button
          onClick={onOpenPrototype}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-all shadow-sm hover:shadow-md cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span>Launch Interactive Prototype</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <a
          href="#high-fidelity-ui"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-neutral-50 text-neutral-800 font-medium text-sm border border-neutral-200 transition-colors"
        >
          <Eye className="w-4 h-4 text-neutral-500" />
          <span>Jump to High-Fidelity UI</span>
        </a>

        <a
          href="#competitive-analysis"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200/80 text-neutral-700 font-medium text-sm transition-colors"
        >
          <span>View Competitor Matrix</span>
        </a>
      </div>

      {/* High-Impact Hero Showcase Image Slot */}
      <div className="pt-2">
        <CaseStudyImageArea
          storageKey="hero_overview_banner"
          storagePrefix="magicpay"
          placeholderLabel="UPLOAD: MagicPay High-Fidelity Hero Showcase (Multi-Screen Display)"
          description="High-resolution hero presentation showcasing MagicPay's primary dashboard, instant send money sheet, and virtual card interface on modern smartphone frames."
          aspectRatio="16/9"
          defaultImages={[
            {
              id: 'magicpay-hero-main',
              src: magicPayHeroImg,
              caption: 'MagicPay Mobile Banking Design System & Primary App Screens',
              label: 'MagicPay Core Screens Overview',
            },
          ]}
        />
      </div>
    </header>
  );
};
