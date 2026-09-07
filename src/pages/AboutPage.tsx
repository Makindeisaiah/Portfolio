import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  Code2, 
  Database, 
  Rocket, 
  CheckCircle2, 
  FileText,
  Mail,
  Compass
} from 'lucide-react';
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
            BIOGRAPHY & PHILOSOPHY
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
            About Isaiah Oluwatoyin
          </h1>
          <p className="mt-4 text-xl text-neutral-600 leading-relaxed font-medium">
            {PERSONAL_INFO.positioning}
          </p>
        </div>

        {/* Top Grid: Portrait Placeholder + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-5">
            <ProfilePortraitPlaceholder className="w-full aspect-4/5" />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              I design digital experiences and build products that turn ideas into meaningful, functional experiences.
            </h2>

            <div className="space-y-4 text-base text-neutral-600 leading-relaxed">
              <p>
                I’m Isaiah, a product designer and digital product builder passionate about turning complex ideas into simple, useful digital experiences.
              </p>
              <p>
                I work across UX strategy, interface design, design systems and development, allowing me to take ideas from concept to a functional digital product.
              </p>
              <p>
                Most teams suffer from friction between design mockups and actual code execution. Because I actively design and build, I eliminate that divide: every interaction I design accounts for technical constraints, state transitions, responsive edge cases, and accessibility from day one.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 transition-colors shadow-xs"
              >
                <span>Start a Project</span>
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

        {/* Concept to Deployment Lifecycle */}
        <div className="p-8 sm:p-12 rounded-2xl bg-white border border-neutral-200/90 mb-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              CORE WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mt-1">
              From Concept to Deployment
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              How I shepherd an idea through the entire product creation pipeline with zero loss of fidelity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERSONAL_INFO.conceptToDeployment.map((step, idx) => (
              <div
                key={step.label}
                className="p-5 rounded-xl bg-[#FAFAFA] border border-neutral-200/80 space-y-2"
              >
                <span className="text-xs font-mono text-neutral-400 font-bold">0{idx + 1}</span>
                <h3 className="text-base font-bold text-neutral-900">{step.label}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Design Philosophy Principles */}
        <div className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              PHILOSOPHY & STANDARDS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mt-1">
              Guiding Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 space-y-3">
              <h3 className="text-base font-bold text-neutral-900">1. Substance Over Noise</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Rejection of generic clichés, excessive neon gradients, and superficial decoration. Craft comes from typographic proportion, comfortable whitespace, and visual hierarchy.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 space-y-3">
              <h3 className="text-base font-bold text-neutral-900">2. Real User Proof</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Interfaces grounded in actual behavioral workflows and measurable business goals, not hypothetical dribbble concepts that fall apart in production.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 space-y-3">
              <h3 className="text-base font-bold text-neutral-900">3. Engineering Rigor</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Design systems tied directly to production code tokens, responsive across every screen width, and optimized for sub-second loading.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              TECHNICAL REPERTOIRE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mt-1">
              Areas of Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={cat.title} className="p-6 rounded-2xl bg-white border border-neutral-200/90 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                  <h3 className="text-sm font-bold text-neutral-900">{cat.title}</h3>
                  <span className="text-xs font-mono text-neutral-400">0{idx + 1}</span>
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
