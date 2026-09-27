import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Monitor,
  Smartphone,
  Check,
  Layers,
  Sparkles,
  Compass
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  WEBSITE_PROJECTS, 
  UIUX_PROJECTS, 
  SKILL_CATEGORIES, 
  PROCESS_STEPS, 
  SERVICES 
} from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectMockupPreview, ProfilePortraitPlaceholder } from '../components/ProjectMockupPreview';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900">
      {/* ============================================================ */}
      {/* 1. HERO SECTION                                               */}
      {/* ============================================================ */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 overflow-hidden">
        {/* Subtle architectural background texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#F0F0EE_1px,transparent_1px),linear-gradient(to_bottom,#F0F0EE_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            {/* Top Micro-Label / Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs font-medium text-neutral-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open to Product Design opportunities</span>
            </div>

            {/* Large Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.08] text-balance">
              I design digital products that solve real problems.
            </h1>

            {/* Sub-headline positioning */}
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-neutral-800">
              Product Designer & Web Developer
            </p>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl text-balance">
              I design intuitive digital experiences across mobile and web, combining product thinking, UX/UI design, and technical understanding to turn ideas into functional digital products.
            </p>

            {/* Product Design Process Tagline */}
            <div className="pt-2 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-xs font-mono uppercase tracking-wider text-neutral-500">
              {['RESEARCH', 'UX', 'UI', 'PROTOTYPE', 'ITERATE'].map((step, idx, arr) => (
                <React.Fragment key={step}>
                  <span className="text-neutral-800 font-semibold">{step}</span>
                  {idx < arr.length - 1 && (
                    <span className="text-neutral-400">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <a
                href="#what-i-do"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold tracking-wide text-white bg-neutral-900 hover:bg-neutral-800 transition-all duration-200 shadow-xs active:scale-[0.98]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide text-neutral-800 bg-white border border-neutral-300 hover:bg-neutral-100 transition-all duration-200 shadow-2xs active:scale-[0.98]"
              >
                <span>Let’s Talk</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </Link>
            </div>
          </div>

          {/* Subtle Scroll Indicator */}
          <div className="mt-16 sm:mt-24 flex items-center gap-2 text-xs font-mono text-neutral-400">
            <div className="w-5 h-8 rounded-full border border-neutral-300 flex items-start justify-center p-1">
              <span className="w-1 h-2 rounded-full bg-neutral-500 animate-bounce" />
            </div>
            <span className="uppercase tracking-widest text-[11px]">Scroll to explore work</span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. TWO AREAS OF WORK (WHAT I DO)                             */}
      {/* ============================================================ */}
      <section id="what-i-do" className="py-20 lg:py-28 border-t border-neutral-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-2xl mb-12 lg:mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              WHAT I DO
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Product Design First. Technical Execution When It Matters.
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              I design digital products around user needs and business goals, with a strong understanding of how those experiences are built on the web.
            </p>
          </div>

          {/* Two Large Interactive Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* CARD 01 — PRODUCT DESIGN (PRIMARY) */}
            <div className="group flex flex-col justify-between rounded-2xl bg-[#FAFAFA] border border-neutral-200/90 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-lg hover:border-neutral-300">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    CARD 01
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-700 bg-neutral-200/70 px-2.5 py-1 rounded-full font-medium">
                    <Smartphone className="w-3 h-3 text-neutral-600" />
                    Digital Products & UI/UX
                  </span>
                </div>

                <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
                  Product Design
                </h3>

                <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
                  I design intuitive mobile applications, web platforms, and scalable design systems grounded in user research, clear flows, and thoughtful interaction design.
                </p>

                {/* Large Product/Mobile Preview Mockup */}
                <div className="mt-6 rounded-xl overflow-hidden border border-neutral-200/80 shadow-xs">
                  <ProjectMockupPreview
                    projectId="magicpay"
                    type="uiux"
                    aspect="wide"
                    altText="MagicPay product design case study preview"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between">
                <Link
                  to="/ui-ux"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-neutral-900 group-hover:text-neutral-600 transition-colors"
                >
                  <span>Explore Work</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <span className="text-xs text-neutral-400 font-mono">{UIUX_PROJECTS.length} Case Studies</span>
              </div>
            </div>

            {/* CARD 02 — WEBSITES (SECONDARY) */}
            <div className="group flex flex-col justify-between rounded-2xl bg-[#FAFAFA] border border-neutral-200/90 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-lg hover:border-neutral-300">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    CARD 02
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-600 bg-neutral-200/70 px-2.5 py-1 rounded-full">
                    <Monitor className="w-3 h-3 text-neutral-600" />
                    Web Design & Development
                  </span>
                </div>

                <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
                  Websites
                </h3>

                <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
                  I design and build modern websites that help businesses communicate their value, build credibility, and grow online with clean code and responsive layouts.
                </p>

                {/* Large Website Preview Mockup */}
                <div className="mt-6 rounded-xl overflow-hidden border border-neutral-200/80 shadow-xs">
                  <ProjectMockupPreview
                    projectId="omony-atelier-studios"
                    type="website"
                    aspect="wide"
                    altText="Modern website showcase preview"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between">
                <Link
                  to="/websites"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-neutral-900 group-hover:text-neutral-600 transition-colors"
                >
                  <span>Explore Websites</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <span className="text-xs text-neutral-400 font-mono">{WEBSITE_PROJECTS.length} Selected Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. SELECTED WORK (PRODUCT DESIGN — PRIMARY)                  */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 border-t border-neutral-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                PORTFOLIO • DISCIPLINE 01
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
                Selected Work
              </h2>
              <p className="mt-2 text-base text-neutral-600">
                Digital products designed to solve real problems and create simple, intuitive experiences.
              </p>
            </div>

            <Link
              to="/ui-ux"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              <span>Explore All Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 2x2 Case study grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {UIUX_PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} type="uiux" />
            ))}
          </div>

          {/* Bottom Link */}
          <div className="mt-14 text-center">
            <Link
              to="/ui-ux"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-900 bg-[#FAFAFA] border border-neutral-300 hover:bg-neutral-100 transition-all shadow-2xs"
            >
              <span>Explore All Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. SELECTED WEBSITES (SECONDARY CAPABILITY)                  */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 border-t border-neutral-200/80 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                PORTFOLIO • DISCIPLINE 02
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
                Selected Websites
              </h2>
              <p className="mt-2 text-base text-neutral-600">
                Business websites designed and built for real-world brands and organizations.
              </p>
            </div>

            <Link
              to="/websites"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              <span>View All Websites</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Premium 3-column website grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {WEBSITE_PROJECTS.filter((p) => p.id !== 'ticketa').map((project) => (
              <ProjectCard key={project.id} project={project} type="website" />
            ))}
          </div>

          {/* Bottom Link */}
          <div className="mt-12 text-center">
            <Link
              to="/websites"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-900 bg-white border border-neutral-300 hover:bg-neutral-100 transition-all shadow-2xs"
            >
              <span>View All Websites</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. EXPERTISE / SKILLS                                        */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 border-t border-neutral-200/80 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              CAPABILITIES
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Expertise
            </h2>
            <p className="mt-2 text-base text-neutral-600">
              A balanced discipline centered on Product Design, supported by responsive web development and technical understanding.
            </p>
          </div>

          {/* 3 Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={cat.title}
                className="rounded-2xl bg-white border border-neutral-200/90 p-6 sm:p-8 transition-all duration-200 hover:border-neutral-300 hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                    <h3 className="text-sm font-bold tracking-wider text-neutral-900">
                      {cat.title}
                    </h3>
                    <span className="text-[11px] font-mono text-neutral-400">0{idx + 1}</span>
                  </div>

                  <p className="mt-3 text-xs text-neutral-500 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center text-xs font-medium text-neutral-700 bg-neutral-100 px-3 py-1.5 rounded-lg border border-neutral-200/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. HOW I WORK (METHODOLOGY)                                  */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 border-t border-neutral-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              METHODOLOGY
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              How I Work
            </h2>
            <p className="mt-2 text-base text-neutral-600">
              A structured five-step product design methodology ensuring alignment from discovery through validation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="relative rounded-xl bg-[#FAFAFA] border border-neutral-200/80 p-5 flex flex-col justify-between hover:border-neutral-300 transition-colors"
              >
                <div>
                  <span className="text-2xl font-black font-mono text-neutral-300">
                    {step.number}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                    {step.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200/70 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">
                    Key Deliverables
                  </span>
                  <ul className="space-y-1">
                    {step.deliverables.slice(0, 2).map((item) => (
                      <li key={item} className="text-[11px] text-neutral-500 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-neutral-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. SERVICES (HOW I CAN HELP)                                 */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 border-t border-neutral-200/80 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              COMMISSIONS & SERVICES
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              How I Can Help
            </h2>
            <p className="mt-2 text-base text-neutral-600">
              Product design and web development capabilities tailored for design teams, funded startups, and growing businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="rounded-2xl bg-white border border-neutral-200/90 p-6 flex flex-col justify-between hover:border-neutral-300 transition-colors"
              >
                <div>
                  <h3 className="text-base font-bold text-neutral-900">
                    {srv.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-neutral-600 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">
                    Key Outcomes
                  </span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {srv.deliverables.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. ABOUT SECTION                                             */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 border-t border-neutral-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Portrait placeholder */}
            <div className="lg:col-span-5">
              <ProfilePortraitPlaceholder className="w-full max-w-md mx-auto aspect-4/5" />
            </div>

            {/* Content narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                ABOUT ISAIAH
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
                A little about me
              </h2>

              <div className="space-y-4 text-base text-neutral-600 leading-relaxed">
                {PERSONAL_INFO.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Product Design Process pill */}
              <div className="p-4 rounded-xl bg-[#FAFAFA] border border-neutral-200/80">
                <span className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider">
                  Product Design Focus with Technical Empathy
                </span>
                <p className="mt-1 text-xs text-neutral-800 font-semibold font-mono">
                  RESEARCH → UX → UI → PROTOTYPE → ITERATE
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-neutral-900 bg-neutral-100 hover:bg-neutral-200/80 transition-colors"
                >
                  <span>More About Me</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. CONTACT / CTA SECTION                                     */}
      {/* ============================================================ */}
      <ContactSection />
    </div>
  );
};
