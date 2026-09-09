import React, { useState, useEffect } from 'react';
import { 
  Plane, 
  Ticket, 
  CreditCard, 
  Building2, 
  Globe, 
  Newspaper, 
  ShieldCheck, 
  ArrowUpRight, 
  Compass, 
  QrCode, 
  CheckCircle2, 
  Sparkles,
  Smartphone,
  Laptop,
  Image as ImageIcon
} from 'lucide-react';

interface ProjectMockupPreviewProps {
  projectId: string;
  type: 'website' | 'uiux';
  imageUrl?: string;
  aspect?: 'wide' | 'tall' | 'square' | 'auto';
  showDetails?: boolean;
  className?: string;
  altText?: string;
}

export const ProjectMockupPreview: React.FC<ProjectMockupPreviewProps> = ({
  projectId,
  type,
  imageUrl,
  aspect = 'wide',
  showDetails = true,
  className = '',
  altText = 'Project preview',
}) => {
  const defaultImage = imageUrl || `/images/projects/${projectId}/hero.jpg`;
  const [currentSrc, setCurrentSrc] = useState<string>(defaultImage);
  const [imgError, setImgError] = useState<boolean>(false);

  useEffect(() => {
    setCurrentSrc(imageUrl || `/images/projects/${projectId}/hero.jpg`);
    setImgError(false);
  }, [imageUrl, projectId]);

  const handleImageError = () => {
    if (currentSrc.endsWith('.jpg')) {
      setCurrentSrc(currentSrc.replace(/\.jpg$/, '.png'));
    } else if (currentSrc.endsWith('.png')) {
      setCurrentSrc(currentSrc.replace(/\.png$/, '.webp'));
    } else {
      setImgError(true);
    }
  };

  const getAspectClass = () => {
    switch (aspect) {
      case 'tall':
        return 'aspect-[4/5] sm:aspect-[3/4]';
      case 'square':
        return 'aspect-square';
      case 'auto':
        return 'aspect-auto';
      case 'wide':
      default:
        return 'aspect-[16/10] sm:aspect-[16/9]';
    }
  };

  // If a real image exists and has not failed to load, render it cleanly
  if (!imgError && currentSrc && currentSrc.trim().length > 0) {
    return (
      <div 
        className={`group relative overflow-hidden rounded-xl border border-neutral-200/90 bg-neutral-100 ${getAspectClass()} ${className}`}
      >
        <img
          src={currentSrc}
          alt={altText}
          loading="lazy"
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  // Otherwise, render a high-craft, brand-specific UI mockup frame
  const getMockupContent = () => {
    switch (projectId) {
      case 'pacejet':
        return (
          <div className="w-full h-full bg-[#0B0F17] text-white p-5 flex flex-col justify-between select-none relative overflow-hidden">
            {/* Ambient avionics glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
            
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3 z-10">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-md bg-blue-600/20 border border-blue-500/40 flex items-center justify-center">
                  <Plane className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-neutral-300">PACEJET AVIONICS</span>
              </div>
              <span className="text-[10px] font-mono bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded border border-neutral-700/60">
                EMPTY-LEG VERIFIED
              </span>
            </div>

            {/* Flight Route Visualizer */}
            <div className="my-auto py-3 space-y-3 z-10">
              <div className="bg-neutral-900/90 border border-neutral-800 p-3.5 rounded-lg space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <div className="text-left">
                    <p className="text-[10px] text-neutral-500 font-mono">ORIGIN FBO</p>
                    <p className="text-sm font-bold text-white tracking-wide">EGGW / LTN</p>
                    <p className="text-[11px] text-neutral-400">London Luton</p>
                  </div>
                  <div className="flex flex-col items-center px-3">
                    <span className="text-[10px] text-blue-400 font-mono">1h 35m</span>
                    <div className="w-16 h-[1px] bg-neutral-700 relative my-1">
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500" />
                    </div>
                    <span className="text-[9px] text-neutral-500">Non-stop</span>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-neutral-500 font-mono">DESTINATION</p>
                    <p className="text-sm font-bold text-white tracking-wide">LSGG / GVA</p>
                    <p className="text-[11px] text-neutral-400">Geneva Cointrin</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-neutral-400">Aircraft: <strong className="text-neutral-200">Citation CJ3+</strong></span>
                  <span className="text-amber-400 font-medium">Guaranteed €8,450</span>
                </div>
              </div>

              {/* Passenger manifest chip */}
              <div className="flex items-center justify-between text-[11px] text-neutral-400 bg-neutral-900/60 p-2 rounded-md border border-neutral-800">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>VIP FBO Lounge Access Confirmed</span>
                </div>
                <span className="text-[10px] text-blue-400 font-mono">4 Seats</span>
              </div>
            </div>

            {/* Bottom action */}
            <div className="pt-2 z-10 flex items-center justify-between text-[10px] text-neutral-500">
              <span>Tail: N742PJ • ARG/US Platinum</span>
              <span className="text-neutral-400">Tap to view case study</span>
            </div>
          </div>
        );

      case 'ticketa':
        return (
          <div className="w-full h-full bg-[#111322] text-white p-5 flex flex-col justify-between select-none relative overflow-hidden">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-indigo-950 pb-3 z-10">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-md bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center">
                  <Ticket className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-neutral-200">TICKETA PLATFORM</span>
              </div>
              <span className="text-[10px] font-mono bg-indigo-950/80 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800/40">
                ROTATING TOKEN
              </span>
            </div>

            <div className="my-auto py-2 grid grid-cols-5 gap-3 items-center z-10">
              {/* Dynamic QR Ticket */}
              <div className="col-span-3 bg-gradient-to-br from-neutral-900 to-indigo-950/50 border border-indigo-800/40 p-3 rounded-lg space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-indigo-400 font-semibold">VIP PASS</span>
                    <h4 className="text-xs font-bold text-white">Echoes Live Arena</h4>
                  </div>
                  <QrCode className="w-6 h-6 text-indigo-300" />
                </div>
                <div className="p-2 bg-neutral-950/80 rounded border border-neutral-800 flex items-center justify-between text-[10px]">
                  <span className="text-neutral-400 font-mono">SEC A • ROW 04</span>
                  <span className="text-emerald-400 flex items-center gap-1 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE HASH
                  </span>
                </div>
              </div>

              {/* Gate throughput gauge */}
              <div className="col-span-2 bg-neutral-900/80 border border-neutral-800 p-3 rounded-lg flex flex-col justify-center text-center space-y-1">
                <span className="text-[10px] text-neutral-400 font-mono">GATE THROUGHPUT</span>
                <span className="text-lg font-extrabold text-white">480<span className="text-xs text-neutral-500 font-normal">/min</span></span>
                <span className="text-[9px] text-emerald-400 font-medium">99.98% valid</span>
              </div>
            </div>

            <div className="pt-2 z-10 flex items-center justify-between text-[10px] text-neutral-400 border-t border-neutral-900">
              <span>Multi-Platform Attendee & Organizer Portal</span>
              <span className="text-indigo-300 font-mono">ticketa2-1.vercel.app</span>
            </div>
          </div>
        );

      case 'magicpay':
        return (
          <div className="w-full h-full bg-[#081C15] text-white p-5 flex flex-col justify-between select-none relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-emerald-950 pb-3 z-10">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-md bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                  <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-emerald-200">MAGICPAY FINTECH</span>
              </div>
              <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800/40">
                ZERO TRANSFER FEE
              </span>
            </div>

            <div className="my-auto py-2 space-y-2.5 z-10">
              {/* Balance card */}
              <div className="bg-gradient-to-r from-emerald-900/70 to-emerald-950/90 border border-emerald-800/50 p-3.5 rounded-lg">
                <div className="flex justify-between items-center text-[10px] text-emerald-300">
                  <span>Available Balance</span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-900/60 px-1.5 py-0.5 rounded">Tier 3 Verified</span>
                </div>
                <p className="text-xl font-bold text-white tracking-tight mt-0.5">
                  $14,850<span className="text-xs text-neutral-400 font-normal">.60</span>
                </p>
                <div className="mt-2 pt-2 border-t border-emerald-900/60 flex items-center justify-between text-[10px]">
                  <span className="text-emerald-200/70">Virtual Card •••• 8291</span>
                  <span className="text-emerald-400 font-mono">Active</span>
                </div>
              </div>

              {/* Verified Beneficiary */}
              <div className="bg-neutral-900/90 border border-neutral-800 p-2.5 rounded-lg flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2.5">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-[11px]">
                    KO
                  </div>
                  <div>
                    <p className="font-semibold text-white text-[11px] leading-tight">Kelechi Okafor</p>
                    <p className="text-[9px] text-neutral-400 font-mono">GTBank • 0192837461</p>
                  </div>
                </div>
                <div className="flex items-center text-[10px] text-emerald-400 space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>

            <div className="pt-2 z-10 flex items-center justify-between text-[10px] text-neutral-400 border-t border-emerald-950">
              <span>Instant Transfer • Bills • Airtime • Cards</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>
        );

      case 'zibapay':
      case 'ziba-innovation':
        return (
          <div className="w-full h-full bg-[#0C1527] text-white p-5 flex flex-col justify-between select-none relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-blue-950 pb-3 z-10">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-md bg-blue-600/30 border border-blue-500/40 flex items-center justify-center">
                  <CreditCard className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-blue-200">ZIBA INNOVATION</span>
              </div>
              <span className="text-[10px] font-mono bg-blue-950 text-blue-300 px-2 py-0.5 rounded border border-blue-800/40">
                LIVE PLATFORM
              </span>
            </div>

            <div className="my-auto py-2 space-y-2.5 z-10">
              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="bg-neutral-900/90 border border-neutral-800 p-2.5 rounded-lg">
                  <span className="text-[9px] text-neutral-400 font-mono">GROSS VOLUME</span>
                  <p className="text-base font-bold text-white mt-0.5">$384,210</p>
                  <span className="text-[9px] text-emerald-400 font-medium">+24.6% this month</span>
                </div>
                <div className="bg-neutral-900/90 border border-neutral-800 p-2.5 rounded-lg">
                  <span className="text-[9px] text-neutral-400 font-mono">SUCCESS RATE</span>
                  <p className="text-base font-bold text-white mt-0.5">99.4%</p>
                  <span className="text-[9px] text-blue-400 font-medium">&lt;1.8s latency</span>
                </div>
              </div>

              {/* Multi-channel checkout preview */}
              <div className="bg-neutral-900/90 border border-neutral-800 p-2.5 rounded-lg flex items-center justify-between text-[11px]">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-neutral-300">Checkout Modal SDK</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-400">Cards • Wire • USSD</span>
              </div>
            </div>

            <div className="pt-2 z-10 flex items-center justify-between text-[10px] text-neutral-400 border-t border-blue-950">
              <span>Merchant Back-Office & Consumer Checkout</span>
              <span className="text-blue-300 font-mono">zibainnovative.vercel.app</span>
            </div>
          </div>
        );

      case 'omony-atelier-studios':
        return (
          <div className="w-full h-full bg-[#181615] text-[#ECE8E1] p-5 flex flex-col justify-between select-none relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-stone-800/80 pb-3 z-10">
              <div className="flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-[#C2B29F]" />
                <span className="text-xs font-serif tracking-[0.25em] uppercase text-[#E5DFD7]">OMONY ATELIER</span>
              </div>
              <span className="text-[10px] font-mono tracking-widest text-[#B5A593] uppercase">
                LAGOS • RESIDENCES
              </span>
            </div>

            <div className="my-auto py-3 space-y-2.5 z-10 text-left">
              <div className="border-l-2 border-[#8C7862] pl-3 py-1">
                <p className="text-[10px] text-[#A3927E] uppercase tracking-widest font-mono">ARCHITECTURAL STUDIO</p>
                <h4 className="text-sm font-serif text-white tracking-wide mt-0.5">
                  Ikoyi Waterfront Residence Commission
                </h4>
                <p className="text-[11px] text-stone-400 line-clamp-2 mt-1 font-light">
                  Monolithic limestone walls, internal rain courtyards, and bespoke brushed brass accents.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="bg-stone-900/80 border border-stone-800 p-2 rounded text-center">
                  <span className="text-[9px] text-stone-400 font-mono">SURFACE</span>
                  <p className="text-xs font-bold text-stone-200">Travertine</p>
                </div>
                <div className="bg-stone-900/80 border border-stone-800 p-2 rounded text-center">
                  <span className="text-[9px] text-stone-400 font-mono">LIGHTING</span>
                  <p className="text-xs font-bold text-stone-200">Diffused 2700K</p>
                </div>
                <div className="bg-stone-900/80 border border-stone-800 p-2 rounded text-center">
                  <span className="text-[9px] text-stone-400 font-mono">COMPLETION</span>
                  <p className="text-xs font-bold text-stone-200">Q3 2025</p>
                </div>
              </div>
            </div>

            <div className="pt-2 z-10 flex items-center justify-between text-[10px] text-stone-500 border-t border-stone-800/80">
              <span>Editorial Web Experience • Sub-second load</span>
              <span className="text-[#C2B29F] font-mono">omonyatelierstudios.vercel.app</span>
            </div>
          </div>
        );

      case 'validreams-property-management':
        return (
          <div className="w-full h-full bg-[#0D222A] text-white p-5 flex flex-col justify-between select-none relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-teal-950 pb-3 z-10">
              <div className="flex items-center space-x-2">
                <Building2 className="w-4 h-4 text-teal-400" />
                <span className="text-xs font-bold tracking-wider uppercase text-teal-100">VALIDREAMS PROPERTY</span>
              </div>
              <span className="text-[10px] font-mono bg-teal-950 text-teal-300 px-2 py-0.5 rounded border border-teal-800/40">
                LANDLORD PORTAL
              </span>
            </div>

            <div className="my-auto py-2 space-y-2.5 z-10 text-left">
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-teal-950/60 border border-teal-800/50 p-2.5 rounded-lg text-center">
                  <span className="text-[9px] text-teal-300/80 font-mono">ASSETS MANAGED</span>
                  <p className="text-sm font-bold text-white mt-0.5">140+ Units</p>
                </div>
                <div className="bg-teal-950/60 border border-teal-800/50 p-2.5 rounded-lg text-center">
                  <span className="text-[9px] text-teal-300/80 font-mono">OCCUPANCY RATE</span>
                  <p className="text-sm font-bold text-teal-300 mt-0.5">98.2%</p>
                </div>
                <div className="bg-teal-950/60 border border-teal-800/50 p-2.5 rounded-lg text-center">
                  <span className="text-[9px] text-teal-300/80 font-mono">RENT TIMELINESS</span>
                  <p className="text-sm font-bold text-white mt-0.5">100% Guaranteed</p>
                </div>
              </div>

              <div className="bg-neutral-900/90 border border-neutral-800 p-2.5 rounded-lg flex items-center justify-between text-[11px]">
                <div>
                  <p className="font-semibold text-white text-[11px]">Interactive Rental Yield Calculator</p>
                  <p className="text-[9px] text-neutral-400">Instant gross & net yield projections for investors</p>
                </div>
                <span className="text-teal-400 font-mono text-xs">Live Tool</span>
              </div>
            </div>

            <div className="pt-2 z-10 flex items-center justify-between text-[10px] text-neutral-400 border-t border-teal-950">
              <span>Conversion-focused corporate website</span>
              <span className="text-teal-300 font-mono">validreams-enterprise-limited.vercel.app</span>
            </div>
          </div>
        );

      case 'koikimedia-international-news':
        return (
          <div className="w-full h-full bg-[#121214] text-white p-5 flex flex-col justify-between select-none relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5 z-10">
              <div className="flex items-center space-x-2">
                <Newspaper className="w-4 h-4 text-red-500" />
                <span className="text-xs font-black tracking-wider uppercase text-white">KOIKIMEDIA INTERNATIONAL</span>
              </div>
              <span className="text-[9px] font-mono bg-red-600/90 text-white font-bold px-2 py-0.5 rounded animate-pulse">
                BREAKING
              </span>
            </div>

            <div className="my-auto py-2 space-y-2 z-10 text-left">
              <div className="border-l-2 border-red-600 pl-3 py-0.5">
                <span className="text-[9px] text-red-400 font-mono uppercase">GLOBAL HEADLINE</span>
                <h4 className="text-xs font-bold text-white leading-snug mt-0.5">
                  Economic & Diplomatic Summit: Key Resolutions for Diaspora Trade Corridors
                </h4>
                <p className="text-[10px] text-neutral-400 line-clamp-2 mt-1">
                  High-speed publishing infrastructure delivering live video broadcasts and investigative coverage.
                </p>
              </div>

              <div className="bg-neutral-900/90 border border-neutral-800 p-2 rounded flex items-center justify-between text-[10px]">
                <span className="text-neutral-400">Monthly Readership: <strong className="text-neutral-200">1.2M+ Views</strong></span>
                <span className="text-neutral-400">CDN Latency: <strong className="text-emerald-400">180ms</strong></span>
              </div>
            </div>

            <div className="pt-2 z-10 flex items-center justify-between text-[10px] text-neutral-400 border-t border-neutral-800">
              <span>WordPress Engine • Custom Theme • Cloudflare CDN</span>
              <span className="text-red-400 font-mono">koikimedia.com</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-neutral-900 text-neutral-200 p-5 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
              <span className="text-xs font-mono uppercase tracking-wider">{projectId}</span>
              <span className="text-[10px] font-mono text-neutral-400">{type}</span>
            </div>
            <div className="my-auto text-center">
              <p className="text-sm font-semibold text-white">{altText}</p>
              <p className="text-xs text-neutral-400 mt-1">High-fidelity design specification</p>
            </div>
            <div className="text-[10px] text-neutral-500 flex justify-between">
              <span>Product & UX Engineering</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        );
    }
  };

  return (
    <div
      className={`group relative w-full overflow-hidden rounded-xl border border-neutral-200/90 shadow-sm transition-all duration-300 hover:shadow-md hover:border-neutral-300 ${getAspectClass()} ${className}`}
    >
      {/* Visual Mockup Surface */}
      <div className="w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-[1.02]">
        {getMockupContent()}
      </div>
    </div>
  );
};

export const ProfilePortraitPlaceholder: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [portraitSrc, setPortraitSrc] = useState<string>('/images/profile/portrait.jpg');
  const [portraitError, setPortraitError] = useState<boolean>(false);

  useEffect(() => {
    setPortraitSrc('/images/profile/portrait.jpg');
    setPortraitError(false);
  }, []);

  const handlePortraitError = () => {
    if (portraitSrc.endsWith('.jpg')) {
      setPortraitSrc(portraitSrc.replace(/\.jpg$/, '.png'));
    } else if (portraitSrc.endsWith('.png')) {
      setPortraitSrc(portraitSrc.replace(/\.png$/, '.webp'));
    } else {
      setPortraitError(true);
    }
  };

  if (!portraitError && portraitSrc && portraitSrc.trim().length > 0) {
    return (
      <div
        className={`group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-sm ${className}`}
      >
        <img
          src={portraitSrc}
          alt="Isaiah Oluwatoyin"
          onError={handlePortraitError}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-b from-[#F7F7F6] to-[#ECECEB] flex flex-col items-center justify-center p-8 text-center shadow-sm ${className}`}
    >
      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 pointer-events-none" />

      {/* Monogram emblem */}
      <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-neutral-900 text-white flex flex-col items-center justify-center shadow-lg mb-6 border border-neutral-800">
        <span className="text-3xl sm:text-4xl font-extrabold tracking-tighter">IO</span>
        <span className="text-[9px] font-mono text-neutral-400 tracking-widest uppercase mt-0.5">DESIGNER</span>
      </div>

      <div className="relative z-10 max-w-xs">
        <h4 className="text-base font-bold text-neutral-900 tracking-tight">Isaiah Oluwatoyin</h4>
        <p className="text-xs text-neutral-500 mt-0.5">Product Designer & Digital Product Builder</p>
      </div>
    </div>
  );
};
