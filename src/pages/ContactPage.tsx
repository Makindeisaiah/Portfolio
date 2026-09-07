import React from 'react';
import { Mail, Clock, MapPin, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactSection } from '../components/ContactSection';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3 block">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
            Let’s collaborate.
          </h1>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            Have a project in mind, need a consultation on your digital product architecture, or looking to commission a high-end website? Let’s connect.
          </p>
        </div>

        {/* Quick Contact Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          <div className="p-5 rounded-xl bg-white border border-neutral-200/90 space-y-1">
            <div className="flex items-center gap-2 text-neutral-500 text-xs font-mono uppercase">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Email</span>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-sm font-bold text-neutral-900 hover:text-neutral-600 transition-colors block truncate"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

          <div className="p-5 rounded-xl bg-white border border-neutral-200/90 space-y-1">
            <div className="flex items-center gap-2 text-neutral-500 text-xs font-mono uppercase">
              <Clock className="w-3.5 h-3.5" />
              <span>Response Time</span>
            </div>
            <p className="text-sm font-bold text-neutral-900">
              Within 24–48 Hours
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-neutral-200/90 space-y-1">
            <div className="flex items-center gap-2 text-neutral-500 text-xs font-mono uppercase">
              <MapPin className="w-3.5 h-3.5" />
              <span>Location & Availability</span>
            </div>
            <p className="text-sm font-bold text-neutral-900">
              Lagos & Remote Worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Embedded Full Contact Form Section */}
      <ContactSection />
    </div>
  );
};
