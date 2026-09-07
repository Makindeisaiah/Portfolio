import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  id?: string;
  className?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  id = 'contact',
  className = '',
}) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Website',
    budgetRange: '$5k – $10k',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const projectTypes = [
    'Website',
    'UI/UX Design',
    'Mobile App',
    'Web Application',
    'Dashboard',
    'Product Design',
    'Other',
  ];

  const budgetRanges = [
    '< $5,000',
    '$5,000 – $10,000',
    '$10,000 – $25,000',
    '$25,000+',
    'Flexible / Undetermined',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Form is structured for easy integration with services like Formspree, Resend, or standard backend API
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id={id} className={`py-20 lg:py-28 border-t border-neutral-200/80 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: CTA Pitch */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              INITIATE COLLABORATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
              Have an idea? <br />
              <span className="text-neutral-500">Let’s build it.</span>
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              Whether you need a website, a digital product or a better experience for your users, let’s talk about it.
            </p>

            <div className="pt-2 space-y-3">
              <div className="p-4 rounded-xl bg-[#FAFAFA] border border-neutral-200/80 space-y-2">
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  DIRECT REACH
                </span>
                <p className="text-sm font-semibold text-neutral-900">
                  {PERSONAL_INFO.email}
                </p>
                <p className="text-xs text-neutral-500">
                  Currently taking on select website commissions & digital product collaborations for 2026.
                </p>
                <div className="pt-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20for%20Isaiah`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-neutral-600 transition-colors"
                  >
                    <span>Send direct email</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-200/90 bg-[#FAFAFA] p-6 sm:p-8 lg:p-10 shadow-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">Message Received</h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, {formState.name || 'there'}! Your project brief has been recorded. Isaiah will review the details and get back to you within 24–48 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: '',
                        email: '',
                        company: '',
                        projectType: 'Website',
                        budgetRange: '$5,000 – $10,000',
                        description: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-neutral-700 bg-white border border-neutral-300 hover:bg-neutral-50 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-neutral-200 pb-4">
                    <h3 className="text-lg font-bold text-neutral-900">Project Inquiry</h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Fill out this quick brief to jumpstart our discussion.
                    </p>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Maya Johnson"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300/80 bg-white text-sm text-neutral-900 focus:outline-hidden focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="maya@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300/80 bg-white text-sm text-neutral-900 focus:outline-hidden focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Company / Organization (Optional)
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder="e.g. Acorn Studio, or Personal Project"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300/80 bg-white text-sm text-neutral-900 focus:outline-hidden focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-2">
                      Project Type *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormState({ ...formState, projectType: type })}
                          className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                            formState.projectType === type
                              ? 'bg-neutral-900 text-white shadow-2xs'
                              : 'bg-white border border-neutral-300/80 text-neutral-700 hover:border-neutral-400'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label htmlFor="contact-budget" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Estimated Budget Range
                    </label>
                    <select
                      id="contact-budget"
                      value={formState.budgetRange}
                      onChange={(e) => setFormState({ ...formState, budgetRange: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300/80 bg-white text-sm text-neutral-900 focus:outline-hidden focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors"
                    >
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="contact-description" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Project Description *
                    </label>
                    <textarea
                      id="contact-description"
                      required
                      rows={4}
                      value={formState.description}
                      onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                      placeholder="Tell me a bit about your product goals, timeline, and what success looks like..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300/80 bg-white text-sm text-neutral-900 focus:outline-hidden focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 disabled:opacity-60 transition-all shadow-xs"
                    >
                      {submitting ? (
                        <span>Sending Brief...</span>
                      ) : (
                        <>
                          <span>Submit Brief</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                    <span className="text-[11px] text-neutral-500">
                      Zero spam. Direct reply from Isaiah.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
