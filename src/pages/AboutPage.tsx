import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES } from '../data/portfolioData';
import { ProfilePortraitPlaceholder } from '../components/ProjectMockupPreview';
import { ContactSection } from '../components/ContactSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3 block">
            BIOGRAPHY &amp; PHILOSOPHY
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
            About Isaiah Oluwatoyin
          </h1>
          <p className="mt-4 text-xl text-neutral-600 leading-relaxed font-medium">
            {PERSONAL_INFO.positioning}
          </p>
        </div>

        {/* Top Grid: Portrait + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-5">
            <ProfilePortraitPlaceholder className="w-full aspect-4/5" />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              I design digital products that turn complex ideas into clear, useful experiences.
            </h2>

            <div className="space-y-4 text-base text-neutral-600 leading-relaxed">
              <p>
                I’m Isaiah, a product designer and digital product builder focused on turning complex ideas into simple, useful digital experiences.
              </p>
              <p>
                I work across product strategy, UX/UI design, interaction design, design systems, prototyping, and development. This allows me to understand a product from both the user experience and implementation perspectives.
              </p>
              <p>
                I care about the details that make products work in the real world — clear user flows, thoughtful interactions, responsive layouts, accessibility, reusable components, and practical technical constraints.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 transition-colors shadow-xs"
              >
                <span>START A PROJECT</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-neutral-700 bg-white border border-neutral-300 hover:bg-neutral-100 transition-colors shadow-2xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Isaiah</span>
              </a>
            </div>
          </div>
        </div>

        {/* Core Workflow */}
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-neutral-200/90 mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              CORE WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mt-1">
              From Idea to Product
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              How I move from understanding the problem to designing, prototyping, and refining a usable digital product.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {PERSONAL_INFO.conceptToDeployment.map((step, idx) => (
              <div
                key={step.label}
                className="p-5 rounded-xl bg-[#FAFAFA] border border-neutral-200/80 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-neutral-400 font-bold">0{idx + 1}</span>
                  <h3 className="text-base font-bold text-neutral-900 mt-1">{step.label}</h3>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guiding Principles */}
        <div className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              PHILOSOPHY &amp; STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mt-1">
              Guiding Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/90 space-y-3">
              <h3 className="text-base font-bold text-neutral-900">1. CLARITY OVER COMPLEXITY</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                I aim to make complex products easier to understand by creating clear information structures, intuitive flows, and focused interfaces.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/90 space-y-3">
              <h3 className="text-base font-bold text-neutral-900">2. DESIGN WITH PURPOSE</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Every interface decision should support a real user need, product requirement, or business objective rather than decoration for its own sake.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/90 space-y-3">
              <h3 className="text-base font-bold text-neutral-900">3. DESIGN FOR REAL-WORLD USE</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                I consider responsiveness, accessibility, technical constraints, edge cases, and implementation realities throughout the design process.
              </p>
            </div>
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              TECHNICAL REPERTOIRE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mt-1">
              Areas of Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={cat.title} className="p-6 rounded-2xl bg-white border border-neutral-200/90 space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                    <h3 className="text-xs font-bold text-neutral-900 tracking-wider uppercase font-mono">{cat.title}</h3>
                    <span className="text-xs font-mono text-neutral-400">0{idx + 1}</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-2 mb-4 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium text-neutral-700 bg-neutral-100 rounded-md border border-neutral-200/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  );
};
