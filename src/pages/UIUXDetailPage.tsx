import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  User, 
  CheckCircle2, 
  Compass, 
  Layers, 
  Palette, 
  Sparkles,
  Smartphone,
  Monitor,
  Activity,
  Lightbulb,
  Check
} from 'lucide-react';
import { UIUX_PROJECTS } from '../data/portfolioData';
import { ProjectMockupPreview } from '../components/ProjectMockupPreview';
import { ContactSection } from '../components/ContactSection';
import { TicketaCaseStudyPage } from './TicketaCaseStudyPage';
import { PaceJetCaseStudyPage } from './PaceJetCaseStudyPage';
import { MagicPayCaseStudyPage } from './MagicPayCaseStudyPage';

export const UIUXDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (id === 'ticketa') {
    return <TicketaCaseStudyPage />;
  }

  if (id === 'pacejet') {
    return <PaceJetCaseStudyPage />;
  }

  if (id === 'magicpay') {
    return <MagicPayCaseStudyPage />;
  }

  const projectIndex = UIUX_PROJECTS.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    return <Navigate to="/ui-ux" replace />;
  }

  const project = UIUX_PROJECTS[projectIndex];
  const prevProject = UIUX_PROJECTS[(projectIndex - 1 + UIUX_PROJECTS.length) % UIUX_PROJECTS.length];
  const nextProject = UIUX_PROJECTS[(projectIndex + 1) % UIUX_PROJECTS.length];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 pt-28 pb-20">
      {/* Back breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to="/ui-ux"
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all UI/UX case studies</span>
        </Link>
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        {/* ============================================================ */}
        {/* 1. HERO                                                      */}
        {/* ============================================================ */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-wider">
            <span className="text-neutral-900 font-bold">{project.subtitle}</span>
            <span>•</span>
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.timeline}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Tags & Live Link */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium text-neutral-700 bg-white border border-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 transition-all shadow-xs"
              >
                <span>Visit Live Website</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Hero Visual Mockup */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-neutral-200/90 shadow-md">
            <ProjectMockupPreview
              projectId={project.id}
              type="uiux"
              imageUrl={project.heroImage}
              aspect="wide"
              altText={`${project.title} case study hero`}
            />
          </div>
        </header>

        {/* ============================================================ */}
        {/* 2. PROJECT OVERVIEW, 3. MY ROLE, 4. TIMELINE                 */}
        {/* ============================================================ */}
        <section className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200/90 space-y-6">
          <div className="border-b border-neutral-100 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTIONS 02 – 04</span>
            <h2 className="text-2xl font-bold text-neutral-900 mt-1">Project Overview & Context</h2>
          </div>

          <p className="text-base text-neutral-600 leading-relaxed">
            {project.description} Engineered to bridge intuitive ergonomics with reliable backend states and instant transaction resolution.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-neutral-100 text-xs">
            <div>
              <span className="text-neutral-400 font-mono uppercase block">3. My Role</span>
              <span className="font-semibold text-neutral-800 mt-0.5 block">{project.role}</span>
            </div>
            <div>
              <span className="text-neutral-400 font-mono uppercase block">4. Timeline</span>
              <span className="font-semibold text-neutral-800 mt-0.5 block">{project.timeline}</span>
            </div>
            <div>
              <span className="text-neutral-400 font-mono uppercase block">Platforms</span>
              <span className="font-semibold text-neutral-800 mt-0.5 block">{project.platforms.join(', ')}</span>
            </div>
            <div>
              <span className="text-neutral-400 font-mono uppercase block">Sector</span>
              <span className="font-semibold text-neutral-800 mt-0.5 block">{project.clientOrContext}</span>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. PROBLEM                                                   */}
        {/* ============================================================ */}
        <section className="p-8 rounded-2xl bg-white border border-neutral-200/90 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTION 05</span>
          <h2 className="text-2xl font-bold text-neutral-900">The Problem Space</h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            {project.problem}
          </p>
        </section>

        {/* ============================================================ */}
        {/* 6. RESEARCH                                                  */}
        {/* ============================================================ */}
        <section className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200/90 space-y-6">
          <div className="border-b border-neutral-100 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTION 06</span>
            <h2 className="text-2xl font-bold text-neutral-900 mt-1">Discovery & Research Insights</h2>
          </div>

          <p className="text-sm text-neutral-600 leading-relaxed">
            {project.research.summary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-[#FAFAFA] border border-neutral-200/80 space-y-3">
              <span className="text-[11px] font-mono uppercase text-neutral-500 font-bold block">
                Key Empirical Findings
              </span>
              <ul className="space-y-2">
                {project.research.keyFindings.map((finding, idx) => (
                  <li key={idx} className="text-xs text-neutral-600 flex items-start gap-2 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 mt-1.5 shrink-0" />
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-[#FAFAFA] border border-neutral-200/80 space-y-3">
              <span className="text-[11px] font-mono uppercase text-neutral-500 font-bold block">
                Critical User Pain Points
              </span>
              <ul className="space-y-2">
                {project.research.userPainPoints.map((pain, idx) => (
                  <li key={idx} className="text-xs text-neutral-600 flex items-start gap-2 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                    <span>{pain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. USER PERSONA                                              */}
        {/* ============================================================ */}
        <section className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200/90 space-y-6">
          <div className="border-b border-neutral-100 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTION 07</span>
            <h2 className="text-2xl font-bold text-neutral-900 mt-1">User Persona</h2>
          </div>

          <div className="p-6 rounded-xl bg-[#FAFAFA] border border-neutral-200/80 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold text-sm">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-neutral-900">{project.userPersona.name}</h3>
                <p className="text-xs text-neutral-500 font-mono">{project.userPersona.role}</p>
              </div>
            </div>

            <blockquote className="border-l-2 border-neutral-400 pl-3 italic text-sm text-neutral-700">
              {project.userPersona.quote}
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <div>
                <span className="font-semibold text-neutral-800 block mb-1">Core Goals:</span>
                <ul className="space-y-1 text-neutral-600">
                  {project.userPersona.goals.map((g, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-emerald-500" />
                      <span>{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="font-semibold text-neutral-800 block mb-1">Key Frustrations:</span>
                <ul className="space-y-1 text-neutral-600">
                  {project.userPersona.frustrations.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-red-400" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 8. USER JOURNEY & 9. USER FLOW                               */}
        {/* ============================================================ */}
        <section className="space-y-8">
          {/* 8. User Journey */}
          <div className="p-8 rounded-2xl bg-white border border-neutral-200/90 space-y-6">
            <div className="border-b border-neutral-100 pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTION 08</span>
              <h2 className="text-2xl font-bold text-neutral-900 mt-1">User Journey Mapping</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.userJourney.map((j, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAFAFA] border border-neutral-200/80 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">Phase 0{idx + 1}</span>
                    <h4 className="text-sm font-bold text-neutral-900 mt-0.5">{j.phase}</h4>
                    <p className="text-xs text-neutral-600 mt-2 leading-relaxed">{j.userAction}</p>
                  </div>
                  <div className="pt-2 border-t border-neutral-200/70 text-[11px]">
                    <span className="text-neutral-400 block text-[9px] font-mono uppercase">Opportunity</span>
                    <span className="text-neutral-800 font-medium">{j.opportunity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 9. User Flow */}
          <div className="p-8 rounded-2xl bg-white border border-neutral-200/90 space-y-6">
            <div className="border-b border-neutral-100 pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTION 09</span>
              <h2 className="text-2xl font-bold text-neutral-900 mt-1">User Flow Architecture</h2>
            </div>

            <div className="space-y-3">
              {project.userFlow.map((flow, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAFAFA] border border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="sm:w-1/3">
                    <span className="font-mono text-neutral-400 text-[10px] uppercase block">{flow.step}</span>
                    <span className="font-bold text-neutral-900">{flow.action}</span>
                  </div>
                  <div className="sm:w-2/3 sm:border-l sm:border-neutral-200 sm:pl-4">
                    <span className="text-neutral-400 text-[10px] font-mono uppercase block">System Response</span>
                    <span className="text-neutral-600">{flow.systemResponse}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 10. WIREFRAMES & 11. UI DESIGN                               */}
        {/* ============================================================ */}
        <section className="space-y-8">
          {/* 10. Wireframes */}
          <div className="p-8 rounded-2xl bg-white border border-neutral-200/90 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTION 10</span>
            <h2 className="text-2xl font-bold text-neutral-900">Wireframes & Structural Prototyping</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {project.wireframes.map((wf, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAFAFA] border border-neutral-200/80 space-y-2">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase">Prototype 0{idx + 1}</span>
                  <h4 className="text-sm font-bold text-neutral-900">{wf.title}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">{wf.notes}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 11. UI Design */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200/90 space-y-6">
            <div className="border-b border-neutral-100 pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTION 11</span>
              <h2 className="text-2xl font-bold text-neutral-900 mt-1">High-Fidelity UI Design</h2>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed">
              {project.uiDesign.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {project.uiDesign.screens.map((screen, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-[#FAFAFA] border border-neutral-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral-900">{screen.name}</span>
                    <span className="text-[10px] font-mono uppercase text-neutral-500 bg-neutral-200/70 px-2 py-0.5 rounded">
                      {screen.deviceType}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">{screen.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 12. DESIGN SYSTEM                                            */}
        {/* ============================================================ */}
        <section className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200/90 space-y-6">
          <div className="border-b border-neutral-100 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTION 12</span>
            <h2 className="text-2xl font-bold text-neutral-900 mt-1">Design System & Token Architecture</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
            <div>
              <span className="font-mono uppercase text-neutral-400 block mb-2">Typography Hierarchy</span>
              <p className="p-3 rounded-lg bg-[#FAFAFA] border border-neutral-200/80 text-neutral-700 font-medium">
                {project.designSystem.typography}
              </p>
            </div>

            <div>
              <span className="font-mono uppercase text-neutral-400 block mb-2">Primary Components</span>
              <div className="flex flex-wrap gap-1.5">
                {project.designSystem.components.map((comp) => (
                  <span key={comp} className="px-2.5 py-1 rounded bg-neutral-100 text-neutral-700 font-mono text-[11px]">
                    {comp}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-100">
            <span className="text-xs font-mono uppercase text-neutral-400 block mb-3">Color Tokens</span>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {project.designSystem.colors.map((col) => (
                <div key={col.name} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/70">
                  <div
                    className="w-7 h-7 rounded-md border border-neutral-300 shrink-0"
                    style={{ backgroundColor: col.hex }}
                  />
                  <div className="text-xs">
                    <p className="font-semibold text-neutral-900 text-[11px]">{col.name}</p>
                    <p className="font-mono text-neutral-500 text-[10px]">{col.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 13. USABILITY TESTING & 14. ITERATIONS                       */}
        {/* ============================================================ */}
        <section className="space-y-8">
          {/* 13. Usability Testing */}
          <div className="p-8 rounded-2xl bg-white border border-neutral-200/90 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTION 13</span>
            <h2 className="text-2xl font-bold text-neutral-900">Usability Testing</h2>
            <p className="text-sm text-neutral-600">{project.usabilityTesting.method} ({project.usabilityTesting.participants})</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
              {project.usabilityTesting.testFindings.map((finding, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70 text-xs">
                  <span className="font-mono text-neutral-400 block text-[10px]">Finding 0{idx + 1}</span>
                  <p className="font-semibold text-neutral-800 mt-1">{finding}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 14. Iterations */}
          <div className="p-8 rounded-2xl bg-white border border-neutral-200/90 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTION 14</span>
            <h2 className="text-2xl font-bold text-neutral-900">Design Iterations & Refinements</h2>

            <div className="space-y-3">
              {project.iterations.map((iter, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FAFAFA] border border-neutral-200/80 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="font-mono text-red-500 text-[10px] uppercase block">Before</span>
                    <p className="text-neutral-600 mt-0.5">{iter.before}</p>
                  </div>
                  <div>
                    <span className="font-mono text-emerald-600 text-[10px] uppercase block">Refined Solution</span>
                    <p className="text-neutral-900 font-semibold mt-0.5">{iter.after}</p>
                  </div>
                  <div className="md:border-l md:border-neutral-200 md:pl-3">
                    <span className="font-mono text-neutral-400 text-[10px] uppercase block">Reasoning</span>
                    <p className="text-neutral-500 mt-0.5">{iter.reasoning}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 15. FINAL EXPERIENCE & 16. OUTCOME                           */}
        {/* ============================================================ */}
        <section className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200/90 space-y-6">
          <div className="border-b border-neutral-100 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTIONS 15 & 16</span>
            <h2 className="text-2xl font-bold text-neutral-900 mt-1">Final Experience & Measurable Outcomes</h2>
          </div>

          <p className="text-base text-neutral-600 leading-relaxed">
            {project.finalExperience}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-xl bg-neutral-900 text-white space-y-1">
              <span className="text-[10px] font-mono uppercase text-neutral-400">Business Impact</span>
              <p className="text-sm font-semibold text-neutral-100">{project.outcome.businessImpact}</p>
            </div>
            <div className="p-5 rounded-xl bg-neutral-100 text-neutral-900 space-y-1 border border-neutral-200">
              <span className="text-[10px] font-mono uppercase text-neutral-500">User Reception</span>
              <p className="text-sm font-semibold text-neutral-800">{project.outcome.userFeedback}</p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 17. KEY LEARNINGS                                            */}
        {/* ============================================================ */}
        <section className="p-8 rounded-2xl bg-white border border-neutral-200/90 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTION 17</span>
          <h2 className="text-2xl font-bold text-neutral-900">Key Learnings & Takeaways</h2>
          <ul className="space-y-2.5">
            {project.keyLearnings.map((learning, idx) => (
              <li key={idx} className="text-sm text-neutral-600 flex items-start gap-2.5 leading-relaxed">
                <Check className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ============================================================ */}
        {/* 18. NEXT PROJECT                                             */}
        {/* ============================================================ */}
        <div className="pt-10 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to={`/ui-ux/${prevProject.id}`}
            className="group inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Previous: <strong>{prevProject.title}</strong></span>
          </Link>

          <Link
            to={`/ui-ux/${nextProject.id}`}
            className="group inline-flex items-center gap-2 text-xs font-mono text-neutral-900 hover:text-neutral-600 font-bold"
          >
            <span>Next Case Study: <strong>{nextProject.title}</strong></span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </article>

      <div className="mt-20">
        <ContactSection />
      </div>
    </div>
  );
};
