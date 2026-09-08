import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, UploadCloud } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAssets } from '../context/AssetContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { setTrayOpen, assignedSlots } = useAssets();
  const assignedCount = Object.keys(assignedSlots).length;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Websites', path: '/websites' },
    { label: 'UI/UX', path: '/ui-ux' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAFAFA]/90 backdrop-blur-md border-b border-neutral-200/80 py-3.5 shadow-2xs'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2 focus:outline-hidden"
            aria-label="Isaiah Oluwatoyin Portfolio Home"
          >
            <span className="text-lg font-black tracking-tight text-neutral-900 group-hover:text-neutral-700 transition-colors">
              ISAIAH
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-neutral-900 transition-colors" />
            <span className="hidden sm:inline-block text-xs text-neutral-500 font-medium tracking-wide">
              Product & Builder
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 text-sm font-medium transition-colors rounded-full ${
                  isActive(link.path)
                    ? 'text-neutral-950 font-semibold bg-neutral-200/70'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              type="button"
              onClick={() => setTrayOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200/80 transition-colors border border-neutral-200/60"
              title="Figma design file & asset manager"
            >
              <UploadCloud className="w-3.5 h-3.5 text-neutral-600" />
              <span>Figma Assets</span>
              {assignedCount > 0 && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              )}
            </button>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide text-white bg-neutral-900 hover:bg-neutral-800 transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-[0.98]"
            >
              <span>Let’s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-hidden"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#FAFAFA] border-b border-neutral-200 px-4 pt-3 pb-6 shadow-lg"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'text-neutral-950 bg-neutral-100 font-semibold'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-neutral-200/80 space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setTrayOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 transition-colors border border-neutral-200/80"
                >
                  <UploadCloud className="w-4 h-4 text-neutral-600" />
                  <span>Figma Assets & Image Upload</span>
                  {assignedCount > 0 && (
                    <span className="bg-emerald-500 text-white text-[10px] px-1.5 py-0.2 rounded-full font-mono">
                      {assignedCount} active
                    </span>
                  )}
                </button>

                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-white bg-neutral-900 active:bg-neutral-800 transition-colors shadow-xs"
                >
                  <span>Let’s Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
