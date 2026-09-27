import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, ArrowRight } from 'lucide-react';
import { UIUX_PROJECTS } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { ContactSection } from '../components/ContactSection';

export const UIUXPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filters = ['All', 'Mobile', 'Web', 'Dashboards', 'Fintech', 'Platforms'];

  const UIUX_FILTER_MAP: Record<string, string[]> = {
    pacejet: ['Mobile', 'Platforms'],
    ticketa: ['Mobile', 'Web', 'Dashboards', 'Platforms'],
    magicpay: ['Mobile', 'Fintech'],
    zibapay: ['Fintech', 'Platforms', 'Web', 'Dashboards', 'Mobile'],
  };

  const filteredProjects = selectedFilter === 'All'
    ? UIUX_PROJECTS
    : UIUX_PROJECTS.filter((p) => UIUX_FILTER_MAP[p.id]?.includes(selectedFilter));

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>DISCIPLINE 01 • DIGITAL PRODUCT DESIGN</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
            Product Design Case Studies
          </h1>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            I design digital products across mobile, web, and complex dashboards, turning product requirements and user needs into clear, scalable experiences. My work spans UX strategy, interaction design, interface systems, prototyping, and product thinking.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-neutral-200">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedFilter === filter
                  ? 'bg-neutral-900 text-white shadow-2xs'
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:text-neutral-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} type="uiux" />
          ))}
        </div>

        {/* Scalable Digital Products Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-white border border-neutral-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-lg font-bold text-neutral-900">Designing scalable digital products</h3>
            <p className="text-sm text-neutral-600 mt-1 leading-relaxed">
              I build clear interface systems that help products stay consistent across mobile, web, and complex operational workflows.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 transition-colors shadow-xs shrink-0"
          >
            <span>DISCUSS A DIGITAL PRODUCT →</span>
          </Link>
        </div>
      </div>

      <div className="mt-20">
        <ContactSection />
      </div>
    </div>
  );
};
