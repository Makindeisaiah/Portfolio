import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, ArrowUpRight } from 'lucide-react';
import { WEBSITE_PROJECTS } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { ContactSection } from '../components/ContactSection';

export const WebsitesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Interior Architecture & Design', 'Property Management', 'Digital Innovation & Fintech', 'Event Platform & Ticketing', 'News & Media'];

  const filteredProjects = selectedCategory === 'All'
    ? WEBSITE_PROJECTS
    : WEBSITE_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">
            <Monitor className="w-3.5 h-3.5" />
            <span>DISCIPLINE 01 • DIGITAL PRESENCE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
            Websites
          </h1>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            I design and build modern websites that help businesses communicate their value, build credibility, and grow online. Each project is engineered with bespoke typography, sub-second performance, and responsive precision.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-neutral-200">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'bg-neutral-900 text-white shadow-2xs'
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:text-neutral-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} type="website" />
          ))}
        </div>

        {/* Informational Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-white border border-neutral-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-lg font-bold text-neutral-900">Need a custom web presence for your brand?</h3>
            <p className="text-xs text-neutral-600 mt-1">
              From corporate brand sites to editorial publishing hubs, let’s collaborate on a bespoke web platform designed around your audience.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 transition-colors shadow-xs"
          >
            <span>Start Website Project</span>
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
