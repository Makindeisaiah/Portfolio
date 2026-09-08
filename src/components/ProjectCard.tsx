import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { WebsiteProject, UIUXProject } from '../types';
import { ProjectMockupPreview } from './ProjectMockupPreview';

interface ProjectCardProps {
  project: WebsiteProject | UIUXProject;
  type: 'website' | 'uiux';
  priority?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, type }) => {
  const isWebsite = type === 'website';
  const website = isWebsite ? (project as WebsiteProject) : null;
  const uiux = !isWebsite ? (project as UIUXProject) : null;

  const detailUrl = isWebsite ? `/websites/${project.id}` : `/ui-ux/${project.id}`;
  const ctaText = isWebsite ? 'View Project' : 'View Case Study';

  return (
    <div className="group flex flex-col justify-between rounded-2xl bg-white border border-neutral-200/90 p-5 sm:p-6 transition-all duration-300 hover:shadow-md hover:border-neutral-300">
      <div>
        {/* Visual Mockup Preview */}
        <Link to={detailUrl} className="block overflow-hidden rounded-xl focus:outline-hidden">
          <ProjectMockupPreview
            projectId={project.id}
            type={type}
            imageUrl={project.thumbnailUrl || project.heroImage}
            aspect="wide"
            altText={`${project.title} preview`}
          />
        </Link>

        {/* Project Header Meta */}
        <div className="mt-6 flex items-baseline justify-between gap-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
            {isWebsite ? website?.category : uiux?.subtitle}
          </span>
          <span className="text-xs font-mono text-neutral-400">
            {project.year}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="mt-1.5 text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 group-hover:text-neutral-700 transition-colors">
          <Link to={detailUrl} className="focus:outline-hidden">
            {project.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center text-[11px] font-medium text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between">
        <Link
          to={detailUrl}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-900 group-hover:text-neutral-600 transition-colors focus:outline-hidden"
        >
          <span>{ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>

        {/* External live link if available */}
        {(isWebsite ? website?.liveUrl : uiux?.liveUrl) && (
          <a
            href={isWebsite ? website?.liveUrl : uiux?.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] font-mono text-neutral-500 hover:text-neutral-900 transition-colors inline-flex items-center gap-1 font-medium bg-neutral-100 hover:bg-neutral-200/80 px-2.5 py-1 rounded-full border border-neutral-200/80"
            title="Visit live website"
          >
            <span>Live site</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
};
