import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor } from 'lucide-react';
import { WEBSITE_PROJECTS } from '../data/portfolioData';
import { ProjectCard } from '../components/ProjectCard';
import { ContactSection } from '../components/ContactSection';

export const WebsitesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Business', 'Platforms', 'Fintech', 'Media', 'Property'];

  // Map website projects to concise category filters
  const PROJECT_FILTER_MAP: Record<string, string[]> = {
    'omony-atelier-studios': ['Business'],
    'validreams-property-management': ['Business', 'Property'],
    'koikimedia-international-news': ['Media'],
    'ziba-innovation': ['Business', 'Fintech'],
  };

  // Ticketa is primarily a Product Design project; separated from main websites grid
  const websiteProjects = WEBSITE_PROJECTS.filter((p) => p.id !== 'ticketa');

  const filteredProjects = selectedCategory === 'All'
    ? websiteProjects
    : websiteProjects.filter((p) => PROJECT_FILTER_MAP[p.id]?.includes(selectedCategory));

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">
            <Monitor className="w-3.5 h-3.5" />
            <span>DISCIPLINE 02 • WEB DESIGN & DEVELOPMENT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
            Websites
          </h1>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            I design and build modern websites that help businesses communicate their value, build credibility, and create effective digital experiences. Each project combines thoughtful visual design, responsive development, and practical implementation.
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
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} type="website" />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-neutral-200 bg-white p-10 sm:p-14 text-center max-w-2xl mx-auto my-6">
            <h3 className="text-base font-bold text-neutral-900">
              Web Platforms &amp; Applications
            </h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Multi-platform ecosystems and complex web applications (including Ticketa and PaceJet) are featured under Product Design.
            </p>
            <div className="mt-6">
              <Link
                to="/ui-ux"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 transition-colors shadow-xs"
              >
                <span>View Product Design Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Informational Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-white border border-neutral-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-lg font-bold text-neutral-900">Have a web project in mind?</h3>
            <p className="text-sm text-neutral-600 mt-1 leading-relaxed">
              I design and build responsive web experiences that combine strong visual design with practical implementation.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 transition-colors shadow-xs shrink-0"
          >
            <span>START A WEB PROJECT →</span>
          </Link>
        </div>
      </div>

      <div className="mt-20">
        <ContactSection />
      </div>
    </div>
  );
};
