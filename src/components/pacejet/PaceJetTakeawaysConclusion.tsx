import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Smartphone,
  Send,
  Layers,
  Repeat,
  Gem,
} from 'lucide-react';
import { CaseStudyImageArea } from '../casestudy/CaseStudyImageArea';

interface PaceJetTakeawaysConclusionProps {
  onOpenPrototype: () => void;
}

export const PaceJetTakeawaysConclusion: React.FC<PaceJetTakeawaysConclusionProps> = ({
  onOpenPrototype,
}) => {
  return (
    <div className="space-y-28 lg:space-y-36">
      {/* ========================================================================= */}
      {/* 27. DESIGN SYSTEM SHOWCASE                                                */}
      {/* ========================================================================= */}
      <section id="system-showcase" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>26 / Reusable Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            Built for Scale
          </h2>
          <div className="space-y-3 text-base sm:text-lg text-neutral-700 leading-relaxed">
            <p>
              With 150+ screens, the product needed a system that could support consistency as the experience grew.
            </p>
            <p>
              The design system codified reusable rules for Typography, Colors, Buttons, Inputs, Cards, Navigation, Icons, Controls, and Interactive States.
            </p>
          </div>
        </div>

        {/* 9 System Token Categories */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 text-center text-xs">
          {[
            'Typography',
            'Colors',
            'Buttons',
            'Inputs',
            'Cards',
            'Navigation',
            'Icons',
            'Controls',
            'States',
          ].map((rule, i) => (
            <div key={i} className="p-3 rounded-xl bg-white border border-neutral-200/90 shadow-2xs space-y-1">
              <span className="text-[10px] font-mono font-bold text-[#1E7B21]">0{i + 1}</span>
              <p className="font-semibold text-neutral-900 text-xs">{rule}</p>
            </div>
          ))}
        </div>

        {/* Final Design System Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="final_design_system_showcase"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — Final design system"
            description="Large visual of the comprehensive PaceJet UI library, variable states, and responsive token sheet in Figma."
            aspectRatio="21/9"
            defaultFit="cover"
            allowMultiple={false}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 28. KEY TAKEAWAYS                                                         */}
      {/* ========================================================================= */}
      <section id="takeaways" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>27 / Reflection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            What I Learned
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            Leading the end-to-end design for an intricate aviation booking product yielded critical insights into product thinking and interface craft.
          </p>
        </div>

        {/* 4 Takeaway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#1E7B21]">TAKEAWAY 01</span>
              <Layers className="w-4 h-4 text-neutral-400" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">Designing Complex Products</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Complex products become easier to use when information is structured around the user's decisions, rather than dumping all aviation parameters onto a single screen.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#1E7B21]">TAKEAWAY 02</span>
              <Repeat className="w-4 h-4 text-neutral-400" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">Consistency at Scale</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              A design system becomes essential when working across a large number of screens. Strict tokens eliminate subjective guesswork and maintain quality across edge cases.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#1E7B21]">TAKEAWAY 03</span>
              <ShieldCheck className="w-4 h-4 text-neutral-400" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">Clarity Builds Trust</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Clear pricing, itinerary, aircraft information, and payment states help users feel more confident, directly lowering abandonment in high-value private charter transactions.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-[#1E7B21]">TAKEAWAY 04</span>
              <Gem className="w-4 h-4 text-amber-600" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900">Premium Does Not Mean Complicated</h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              A premium interface can remain simple, focused, and easy to navigate. Craft comes from refined typography, balanced whitespace, and dependable functionality.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 29. CONCLUSION                                                            */}
      {/* ========================================================================= */}
      <section id="conclusion" className="space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E7B21]">
            <span className="w-2 h-0.5 bg-[#2EB732]" />
            <span>28 / Synthesis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-[#1E1E1E]">
            Conclusion
          </h2>
        </div>

        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-6 text-base sm:text-lg text-neutral-700 leading-relaxed max-w-4xl">
          <p>
            PaceJet challenged me to think beyond individual screens and focus on the experience as a complete product.
          </p>
          <p>
            The project involved restructuring a large mobile application, organizing complex booking information, designing reusable components, and creating a consistent visual language across more than 150 screens.
          </p>
          <p>
            The final experience brings together aircraft discovery, charter and seat booking, quotes, payment, deals, and trip management within a more structured and premium mobile experience.
          </p>
          <p>
            More importantly, the project strengthened my approach to product design by showing me that strong UI is not only about visual polish. It is about creating systems that help users understand information, make decisions, and complete important tasks with confidence.
          </p>
        </div>

        {/* Conclusion Hero Screen Image */}
        <div className="space-y-2">
          <CaseStudyImageArea
            storageKey="conclusion_hero_final"
            storagePrefix="pacejet"
            placeholderLabel="UPLOAD IMAGE — Final PaceJet hero / strongest final screen"
            description="The most striking visual presentation of PaceJet in a high-fidelity mobile frame."
            aspectRatio="16/9"
            defaultFit="cover"
            allowMultiple={false}
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 30. PROJECT SUMMARY                                                       */}
      {/* ========================================================================= */}
      <section id="summary" className="space-y-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-neutral-900 text-white shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-800 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FCD53F] block">
                Project Summary
              </span>
              <h3 className="text-3xl font-bold text-white mt-1">PaceJet</h3>
              <p className="text-sm font-serif text-neutral-400 mt-0.5">Private Aviation Booking Experience</p>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2EB732]/20 border border-[#2EB732]/40 text-[#2EB732] text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2EB732]" />
              <span>Status: Completed</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="space-y-1">
              <span className="text-neutral-400 font-mono uppercase tracking-wider block">Role</span>
              <p className="text-sm font-semibold text-white">Product Designer / UI/UX Designer</p>
            </div>

            <div className="space-y-1">
              <span className="text-neutral-400 font-mono uppercase tracking-wider block">Platform</span>
              <p className="text-sm font-semibold text-white">Mobile (iOS &amp; Android)</p>
            </div>

            <div className="space-y-1">
              <span className="text-neutral-400 font-mono uppercase tracking-wider block">Scope</span>
              <p className="text-sm font-semibold text-white">End-to-End Product Design</p>
            </div>

            <div className="space-y-1">
              <span className="text-neutral-400 font-mono uppercase tracking-wider block">Screens</span>
              <p className="text-sm font-semibold text-[#2EB732]">150+ Screens &amp; States</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-neutral-800 text-xs">
            <div className="space-y-2">
              <span className="text-neutral-400 font-mono uppercase tracking-wider block">Core Product Areas</span>
              <div className="flex flex-wrap gap-2">
                {['Charter', 'Seat Booking', 'Jet Deals', 'Quotes', 'Payments', 'Trips', 'Profile'].map((area) => (
                  <span key={area} className="px-2.5 py-1 rounded bg-neutral-800 text-neutral-200 font-mono text-[11px]">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-neutral-400 font-mono uppercase tracking-wider block">Design System Scope</span>
              <div className="flex flex-wrap gap-2">
                {['Typography', 'Color Tokens', 'Components', 'Navigation', 'States'].map((token) => (
                  <span key={token} className="px-2.5 py-1 rounded bg-neutral-800 text-neutral-200 font-mono text-[11px]">
                    {token}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 31. FINAL CTA                                                             */}
      {/* ========================================================================= */}
      <section id="cta" className="p-8 sm:p-12 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs text-center space-y-6">
        <div className="space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1E7B21]">Next Steps</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
            Interested in the process?
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Explore the interactive Figma prototype, browse other product case studies, or reach out to discuss collaboration.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={onOpenPrototype}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2EB732] hover:bg-[#279e2b] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-colors shadow-sm"
          >
            <Smartphone className="w-4 h-4" />
            <span>View Prototype</span>
          </button>

          <Link
            to="/ui-ux"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-300 hover:border-neutral-900 bg-white hover:bg-neutral-50 text-neutral-900 text-xs font-mono uppercase tracking-wider transition-colors shadow-2xs"
          >
            <span>View More Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-mono uppercase tracking-wider transition-colors shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Contact Me</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
