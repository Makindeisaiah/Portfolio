import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Globe, 
  CheckCircle2, 
  Layers, 
  Smartphone, 
  Code2, 
  ExternalLink,
  Laptop
} from 'lucide-react';
import { WEBSITE_PROJECTS } from '../data/portfolioData';
import { ProjectMockupPreview } from '../components/ProjectMockupPreview';
import { ContactSection } from '../components/ContactSection';

export const WebsiteDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const projectIndex = WEBSITE_PROJECTS.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    return <Navigate to="/websites" replace />;
  }

  const project = WEBSITE_PROJECTS[projectIndex];
  const prevProject = WEBSITE_PROJECTS[(projectIndex - 1 + WEBSITE_PROJECTS.length) % WEBSITE_PROJECTS.length];
  const nextProject = WEBSITE_PROJECTS[(projectIndex + 1) % WEBSITE_PROJECTS.length];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 pt-28 pb-20">
      {/* Back breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 space-y-4">
        <Link
          to="/websites"
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all websites</span>
        </Link>

        {id === 'ticketa' && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5">
              <span className="font-mono uppercase font-bold text-emerald-800 tracking-wider">
                Full 4-Platform Ecosystem Case Study Available
              </span>
              <p className="text-neutral-600">
                Ticketa connects Mobile App, Marketplace, Organizer Dashboard &amp; Staff Check-in.
              </p>
            </div>
            <Link
              to="/case-study/ticketa"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-neutral-900 text-white font-mono text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors shrink-0"
            >
              <span>View Product Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        {/* ============================================================ */}
        {/* 1. PROJECT HERO                                              */}
        {/* ============================================================ */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-wider">
            <span className="text-neutral-900 font-bold">{project.category}</span>
            <span>•</span>
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.client}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          {/* Prominent Live Website CTA */}
          {project.liveUrl && (
            <div className="pt-2 flex items-center gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 transition-all shadow-xs"
              >
                <span>Visit Live Website</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          )}

          {/* Hero Visual Showcase */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-neutral-200/90 shadow-md">
            <ProjectMockupPreview
              projectId={project.id}
              type="website"
              imageUrl={project.heroImage}
              aspect="wide"
              altText={`${project.title} hero showcase`}
            />
          </div>
        </header>

        {/* ============================================================ */}
        {/* 2. PROJECT OVERVIEW                                          */}
        {/* ============================================================ */}
        <section className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200/90 space-y-6">
          <div className="border-b border-neutral-100 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTION 02</span>
            <h2 className="text-2xl font-bold text-neutral-900 mt-1">Project Overview</h2>
          </div>

          <p className="text-base text-neutral-600 leading-relaxed">
            {project.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-neutral-100 text-xs">
            <div>
              <span className="text-neutral-400 font-mono uppercase block">Role</span>
              <span className="font-semibold text-neutral-800 mt-0.5 block">{project.role}</span>
            </div>
            <div>
              <span className="text-neutral-400 font-mono uppercase block">Timeline</span>
              <span className="font-semibold text-neutral-800 mt-0.5 block">{project.year}</span>
            </div>
            <div>
              <span className="text-neutral-400 font-mono uppercase block">Client</span>
              <span className="font-semibold text-neutral-800 mt-0.5 block">{project.client}</span>
            </div>
            <div>
              <span className="text-neutral-400 font-mono uppercase block">Discipline</span>
              <span className="font-semibold text-neutral-800 mt-0.5 block">Web Design & Code</span>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. CHALLENGE & 4. GOALS                                      */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 3. Challenge */}
          <section className="p-8 rounded-2xl bg-white border border-neutral-200/90 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTION 03</span>
            <h2 className="text-xl font-bold text-neutral-900">The Challenge</h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {project.challenge}
            </p>
          </section>

          {/* 4. Goals */}
          <section className="p-8 rounded-2xl bg-white border border-neutral-200/90 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTION 04</span>
            <h2 className="text-xl font-bold text-neutral-900">Project Goals</h2>
            <ul className="space-y-2.5">
              {project.goals.map((goal, idx) => (
                <li key={idx} className="text-xs text-neutral-600 flex items-start gap-2.5 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-neutral-800 shrink-0 mt-0.5" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* ============================================================ */}
        {/* 5. DESIGN DIRECTION                                          */}
        {/* ============================================================ */}
        <section className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200/90 space-y-6">
          <div className="border-b border-neutral-100 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTION 05</span>
            <h2 className="text-2xl font-bold text-neutral-900 mt-1">Design Direction</h2>
          </div>

          <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
            <p><strong>Editorial Approach:</strong> {project.designDirection.editorialApproach}</p>
            <p><strong>Typography:</strong> {project.designDirection.typography}</p>
          </div>

          {/* Color Swatches */}
          <div className="pt-4 border-t border-neutral-100">
            <span className="text-xs font-mono uppercase text-neutral-400 block mb-3">Color System</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.designDirection.colorPalette.map((col) => (
                <div key={col.name} className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-200/70">
                  <div
                    className="w-8 h-8 rounded-md border border-neutral-300 shadow-2xs shrink-0"
                    style={{ backgroundColor: col.hex }}
                  />
                  <div className="text-xs">
                    <p className="font-semibold text-neutral-900">{col.name}</p>
                    <p className="font-mono text-neutral-500 text-[10px]">{col.hex} • {col.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. KEY SCREENS / WEBSITE PREVIEW                             */}
        {/* ============================================================ */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTION 06</span>
            <h2 className="text-2xl font-bold text-neutral-900 mt-1">Key Screens & Architecture</h2>
            <p className="text-sm text-neutral-600 mt-1">
              Core layout viewports and interface interactions designed for the website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.keyScreens.map((screen, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-neutral-200/90 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400">0{idx + 1}</span>
                  <span className="text-[10px] font-mono uppercase bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded">
                    {screen.type}
                  </span>
                </div>
                <h3 className="text-base font-bold text-neutral-900">{screen.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{screen.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. RESPONSIVE DESIGN & 8. DEVELOPMENT                        */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 7. Responsive Design */}
          <section className="p-8 rounded-2xl bg-white border border-neutral-200/90 space-y-4">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-neutral-700" />
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTION 07</span>
            </div>
            <h2 className="text-xl font-bold text-neutral-900">Responsive Design</h2>
            <ul className="space-y-2.5">
              {project.responsiveFeatures.map((feat, idx) => (
                <li key={idx} className="text-xs text-neutral-600 flex items-start gap-2 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 8. Development */}
          <section className="p-8 rounded-2xl bg-white border border-neutral-200/90 space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-neutral-700" />
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTION 08</span>
            </div>
            <h2 className="text-xl font-bold text-neutral-900">Development Engineering</h2>
            <ul className="space-y-2.5">
              {project.developmentHighlights.map((high, idx) => (
                <li key={idx} className="text-xs text-neutral-600 flex items-start gap-2 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-1.5 shrink-0" />
                  <span>{high}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* ============================================================ */}
        {/* 9. FINAL WEBSITE & 10. TECHNOLOGIES USED                     */}
        {/* ============================================================ */}
        <section className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200/90 space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTION 09 & 10</span>
            <h2 className="text-2xl font-bold text-neutral-900 mt-1">Final Website & Stack</h2>
          </div>

          <p className="text-base text-neutral-600 leading-relaxed">
            {project.finalWebsiteOverview}
          </p>

          <div className="pt-4 border-t border-neutral-100">
            <span className="text-xs font-mono uppercase text-neutral-400 block mb-2">Technologies Used</span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono text-neutral-800 bg-neutral-100 border border-neutral-200/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 11. LIVE WEBSITE CTA                                         */}
        {/* ============================================================ */}
        {project.liveUrl && (
          <div className="p-8 rounded-2xl bg-neutral-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">SECTION 11</span>
              <h3 className="text-xl font-bold text-white mt-1">Experience the live production website</h3>
              <p className="text-xs text-neutral-400 mt-1">Test real interactions, responsive breakpoints, and speed.</p>
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-900 bg-white hover:bg-neutral-100 transition-colors shadow-xs"
            >
              <span>Visit Live Website</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}

        {/* ============================================================ */}
        {/* 12. NEXT PROJECT NAVIGATION                                  */}
        {/* ============================================================ */}
        <div className="pt-10 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to={`/websites/${prevProject.id}`}
            className="group inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-900"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Previous: <strong>{prevProject.title}</strong></span>
          </Link>

          <Link
            to={`/websites/${nextProject.id}`}
            className="group inline-flex items-center gap-2 text-xs font-mono text-neutral-900 hover:text-neutral-600 font-bold"
          >
            <span>Next Project: <strong>{nextProject.title}</strong></span>
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
