import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, ArrowRight, Layers, ShieldCheck } from 'lucide-react';
import { UIUX_PROJECTS } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { ContactSection } from '../components/ContactSection';

export const UIUXPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filters = ['All', 'Mobile Apps', 'Dashboards', 'Fintech', 'Design Systems'];

  const filteredProjects = selectedFilter === 'All'
    ? UIUX_PROJECTS
    : UIUX_PROJECTS.filter((p) => {
        if (selectedFilter === 'Mobile Apps') return p.tags.includes('Mobile');
        if (selectedFilter === 'Dashboards') return p.tags.includes('Dashboard');
        if (selectedFilter === 'Fintech') return p.tags.includes('Fintech');
        if (selectedFilter === 'Design Systems') return p.tags.includes('Design System');
        return true;
      });

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>DISCIPLINE 02 • DIGITAL PRODUCT INTERFACES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
            UI/UX Case Studies
          </h1>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            Digital products designed to solve real user friction, optimize business workflows, and deliver intuitive interactions. Each case study documents the complete lifecycle from discovery research to validated design system tokens.
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

        {/* Engineering Rigor Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-white border border-neutral-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-lg font-bold text-neutral-900">Designing complex products with atomic design systems</h3>
            <p className="text-xs text-neutral-600 mt-1">
              Every interface is built around reusable design tokens, strict accessibility standards (WCAG AA), and ergonomic touch targets for mobile and desktop screens.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 transition-colors shadow-xs"
          >
            <span>Discuss a Digital Product</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <div className="mt-20">
        <ContactSection />
      </div>
    </div>
  );
};
