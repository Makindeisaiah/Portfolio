import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-200/80 bg-[#FAFAFA] text-neutral-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-200/70">
          {/* Brand & Positioning */}
          <div className="md:col-span-6 space-y-3">
            <Link to="/" className="inline-block text-xl font-black tracking-tight text-neutral-900">
              {PERSONAL_INFO.shortName.toUpperCase()}
            </Link>
            <p className="text-sm font-semibold text-neutral-800">
              {PERSONAL_INFO.positioning}
            </p>
            <p className="text-xs text-neutral-500 max-w-md leading-relaxed">
              {PERSONAL_INFO.supportingStatement}
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 hover:text-neutral-950 transition-colors bg-neutral-100 hover:bg-neutral-200/70 px-3 py-1.5 rounded-full"
              >
                <Mail className="w-3.5 h-3.5 text-neutral-500" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/websites" className="text-neutral-600 hover:text-neutral-950 transition-colors">
                  Websites
                </Link>
              </li>
              <li>
                <Link to="/ui-ux" className="text-neutral-600 hover:text-neutral-950 transition-colors">
                  UI/UX Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-600 hover:text-neutral-950 transition-colors">
                  About Isaiah
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-600 hover:text-neutral-950 transition-colors">
                  Contact & Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={PERSONAL_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-neutral-600 hover:text-neutral-950 transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.socialLinks.behance}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-neutral-600 hover:text-neutral-950 transition-colors"
                >
                  <span>Behance</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-neutral-600 hover:text-neutral-950 transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Isaiah. All rights reserved.</p>
          <p className="font-mono text-[11px] text-neutral-400">
            Concept → UX → UI → Development → Database → Deployment
          </p>
        </div>
      </div>
    </footer>
  );
};
