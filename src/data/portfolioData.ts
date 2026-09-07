import { WebsiteProject, UIUXProject, SkillCategory, ProcessStep, ServiceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Isaiah Oluwatoyin',
  shortName: 'Isaiah',
  positioning: 'Product Designer & Digital Product Builder',
  supportingStatement:
    'I design digital experiences and build products that turn ideas into meaningful, functional experiences.',
  heroHeadline: 'I design digital experiences & build products.',
  heroSupporting:
    'Product Designer & Digital Product Builder creating websites, mobile applications and digital products for businesses and startups.',
  conceptToDeployment: [
    { label: 'Concept', desc: 'Framing problem spaces & business value' },
    { label: 'UX', desc: 'User flows, wireframes & rapid architecture' },
    { label: 'UI', desc: 'Design systems, tokens & high-fidelity interfaces' },
    { label: 'Development', desc: 'Clean, responsive frontend engineering' },
    { label: 'Database', desc: 'Relational schemas & secure data layer' },
    { label: 'Deployment', desc: 'Performance optimization & production release' },
  ],
  bio: [
    "I’m Isaiah, a product designer and digital product builder passionate about turning complex ideas into simple, useful digital experiences.",
    "I work across UX strategy, interface design, design systems and development, allowing me to take ideas from concept to a functional digital product.",
    "Bridging the gap between design fidelity and technical reality means fewer miscommunications, faster iteration cycles, and products engineered with craft at every single breakpoint."
  ],
  email: 'makindeisaiah2002@gmail.com',
  location: 'Lagos & Remote Worldwide',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/isaiah-oluwatoyin',
    behance: 'https://behance.net/isaiaholuwatoyin',
    github: 'https://github.com/isaiaholuwatoyin',
  },
};

export const WEBSITE_PROJECTS: WebsiteProject[] = [
  {
    id: 'omony-atelier-studios',
    title: 'OMONY Atelier Studios',
    category: 'Interior Architecture & Design',
    tagline: 'Refined digital presence for luxury interior architecture',
    description:
      'A refined digital presence for a luxury interior architecture and design studio based in Lagos.',
    tags: ['Website Design', 'Development', 'Responsive Design'],
    year: '2025',
    role: 'Lead Designer & Frontend Developer',
    tools: ['Figma', 'React', 'Tailwind CSS', 'Motion'],
    client: 'OMONY Atelier Studios (Lagos)',
    liveUrl: 'https://omonyatelier.com',
    accentColor: '#8C7862', // Warm architectural sand
    challenge:
      'OMONY Atelier Studios needed an editorial web experience that could convey architectural restraint, spatial harmony, and artisanal material craftsmanship without slow loading times or cluttered navigation.',
    goals: [
      'Showcase spatial portfolio photography with bespoke aspect ratios and fluid transitions',
      'Establish a quiet, confident luxury aesthetic that appeals to high-net-worth residential and commercial clientele',
      'Ensure sub-second page loads across both high-resolution desktop monitors and mobile devices',
    ],
    designDirection: {
      typography: 'Manrope paired with generous letter-spacing, restrained scales, and deep charcoal body text.',
      colorPalette: [
        { name: 'Warm Alabaster', hex: '#F7F6F3', role: 'Background Canvas' },
        { name: 'Architectural Stone', hex: '#8C7862', role: 'Accent & Dividers' },
        { name: 'Deep Basalt', hex: '#1C1B1A', role: 'Primary Typography' },
      ],
      editorialApproach: 'Whitespace-driven grid balancing wide architectural elevations with close-up material detail studies.',
    },
    keyScreens: [
      {
        title: 'Studio Overview & Hero Elevation',
        description: 'Immersive full-bleed spatial gallery introducing current residential commissions.',
        type: 'desktop',
      },
      {
        title: 'Selected Commissions Grid',
        description: 'Bespoke masonry layout categorizing residential, hospitality, and custom joinery projects.',
        type: 'desktop',
      },
      {
        title: 'Project Case Detail & Material Narrative',
        description: 'Editorial layout highlighting natural daylighting, brass accents, and curated finishes.',
        type: 'tablet',
      },
      {
        title: 'Mobile Consultation Booking Flow',
        description: 'Frictionless studio consultation scheduler optimized for one-hand mobile browsing.',
        type: 'mobile',
      },
    ],
    responsiveFeatures: [
      'Fluid typographic clamp ensuring headlines scale smoothly from 320px to 4K displays',
      'Smart aspect-ratio preservation for architectural photographs preventing visual distortion',
      'Collapsible minimal navigation drawer with smooth spring physics',
    ],
    developmentHighlights: [
      'Built with modern semantic markup and CSS grid for lightweight rendering',
      'Zero layout shift (CLS 0.0) with precalculated image dimensions',
      'Accessible WCAG AA contrast compliance across all ambient backgrounds',
    ],
    finalWebsiteOverview:
      'The final digital home for OMONY Atelier Studios elevated their inbound client consultation rate and established them as a top-tier architectural studio in West Africa.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
  },
  {
    id: 'validreams-property-management',
    title: 'Validreams Property Management',
    category: 'Property Management',
    tagline: 'Trust-centric digital platform for residential & commercial assets',
    description:
      'A professional property management website designed to communicate services, build trust and improve the company’s digital presence.',
    tags: ['Website Design', 'UX/UI', 'Development'],
    year: '2024',
    role: 'UI/UX Designer & Web Developer',
    tools: ['Figma', 'HTML5', 'Tailwind CSS', 'JavaScript'],
    client: 'Validreams Property Management',
    liveUrl: 'https://validreams.com',
    accentColor: '#1E4E5F', // Deep property teal
    challenge:
      'Property owners struggled to quickly understand fee tiers, tenant screening guarantees, and maintenance workflows on the previous website, resulting in high bounce rates.',
    goals: [
      'Clarify value propositions for both property owners and prospective tenants',
      'Build a transparent interactive management calculator for landlords to estimate yields',
      'Create an instant inquiry pipeline with structured qualification fields',
    ],
    designDirection: {
      typography: 'Clean modern sans-serif with structured tabular data and bold section headings.',
      colorPalette: [
        { name: 'Fresh Cloud', hex: '#F8FAFB', role: 'Primary Canvas' },
        { name: 'Estate Slate', hex: '#1E4E5F', role: 'Brand & Primary Buttons' },
        { name: 'Neutral Graphite', hex: '#262D33', role: 'Headings' },
      ],
      editorialApproach: 'Structured modular cards, clean dividers, and straightforward iconography conveying security and reliability.',
    },
    keyScreens: [
      {
        title: 'Landlord Value Proposition Landing',
        description: 'Direct hero section outlining guaranteed rent schedules and full-cycle asset management.',
        type: 'desktop',
      },
      {
        title: 'Service Comparison Matrix',
        description: 'Clean side-by-side tier comparison for full management versus tenant placement.',
        type: 'desktop',
      },
      {
        title: 'Managed Properties Directory',
        description: 'Interactive property listings with filterable neighborhood badges and virtual tours.',
        type: 'tablet',
      },
      {
        title: 'Quick Owner Contact Module',
        description: 'Mobile-first valuation request form allowing landlords to request a management appraisal.',
        type: 'mobile',
      },
    ],
    responsiveFeatures: [
      'Adaptive tables that convert to swipeable summary cards on viewports under 768px',
      'Sticky emergency contact bar on mobile for existing tenant service requests',
      'High-contrast form fields tested for outdoor daylight legibility',
    ],
    developmentHighlights: [
      'Optimized lightweight asset delivery with automated image compression',
      'Custom form validation with actionable error states and instant feedback',
      'Structured schema.org RealEstateAgent metadata for search engine indexing',
    ],
    finalWebsiteOverview:
      'Validreams achieved a modern, authoritative online presence that reduced tenant onboarding friction and substantially increased monthly landlord inquiries.',
    technologies: ['HTML5', 'Tailwind CSS', 'JavaScript ES6', 'PHP Forms', 'Vercel'],
  },
  {
    id: 'koikimedia-international-news',
    title: 'KoikiMedia International News',
    category: 'News & Media',
    tagline: 'Fast, modern digital publishing experience for global breaking news',
    description:
      'A modern digital publishing experience designed for an international news platform.',
    tags: ['Website Design', 'WordPress', 'Publishing'],
    year: '2024',
    role: 'Digital Product Designer & WordPress Developer',
    tools: ['Figma', 'WordPress', 'PHP', 'CSS3', 'REST API'],
    client: 'KoikiMedia International',
    liveUrl: 'https://koikimedia.com',
    accentColor: '#B91C1C', // Editorial news crimson
    challenge:
      'An international news agency required an editorial architecture capable of handling heavy daily article traffic, live broadcast video feeds, and breaking news banners without crashing under spike loads.',
    goals: [
      'Modernize the legacy editorial interface with crisp typography and clear content hierarchy',
      'Optimize delivery speed for readership across mobile networks in Africa, Europe, and North America',
      'Build dedicated categories for Politics, Diaspora, Human Rights, and Live Special Reports',
    ],
    designDirection: {
      typography: 'High-contrast editorial headline font balanced by highly legible body typography for long-form reading.',
      colorPalette: [
        { name: 'Paper White', hex: '#FFFFFF', role: 'Main Reading Surface' },
        { name: 'Press Crimson', hex: '#B91C1C', role: 'Breaking Alerts & Category Badges' },
        { name: 'Ink Black', hex: '#111827', role: 'Headlines & Body Text' },
      ],
      editorialApproach: 'Classic broadsheet hierarchy reimagined for fast digital consumption on modern screens.',
    },
    keyScreens: [
      {
        title: 'Breaking News Editorial Frontpage',
        description: 'Multi-column digital front page with lead editorial story and ticker alerts.',
        type: 'desktop',
      },
      {
        title: 'Live Stream & Video Broadcast Hub',
        description: 'Embedded responsive video player with real-time viewer commentary feed.',
        type: 'desktop',
      },
      {
        title: 'Long-Form Investigative Article View',
        description: 'Distraction-free reading experience with estimated read time and social dissemination.',
        type: 'tablet',
      },
      {
        title: 'Mobile Reader Feed',
        description: 'Ultra-fast mobile feed with offline cache capabilities for low-bandwidth reading.',
        type: 'mobile',
      },
    ],
    responsiveFeatures: [
      'Progressive image loading and lazy loading for high-volume photojournalist galleries',
      'Adjustable text size controls for enhanced reader accessibility',
      'Floating bottom audio/video mini-player allowing uninterrupted background listening',
    ],
    developmentHighlights: [
      'Custom lightweight WordPress theme without bloat plugins',
      'Integrated Cloudflare CDN caching for peak breaking news traffic spikes',
      'Full AMP and Open Graph publishing integration for viral social distribution',
    ],
    finalWebsiteOverview:
      'KoikiMedia transformed its global digital readership, handling millions of monthly page views with zero downtime and a significant rise in reader retention.',
    technologies: ['WordPress Engine', 'Custom PHP', 'Tailwind CSS', 'REST API', 'Cloudflare'],
  },
];

export const UIUX_PROJECTS: UIUXProject[] = [
  {
    id: 'pacejet',
    title: 'PaceJet',
    subtitle: 'Private Aviation Booking Platform',
    description:
      'A comprehensive private aviation booking experience designed to simplify the journey from flight discovery to booking, payment and trip management.',
    tags: ['Product Design', 'UX/UI', 'Mobile', 'Design System'],
    year: '2025',
    role: 'Lead Product Designer',
    timeline: '10 Weeks (Research to Prototype & Design System)',
    platforms: ['iOS App', 'Android App', 'Responsive Web Portal'],
    clientOrContext: 'Private Aviation Charter Venture',
    accentColor: '#0F172A', // Deep cockpit navy
    problem:
      'Booking private air charters has traditionally required archaic back-and-forth broker phone calls, opaque pricing structures, and confusing aircraft categorization. High-value clients and executive assistants wasted hours obtaining empty-leg quotes and coordinating tarmac itineraries.',
    research: {
      summary:
        'Conducted contextual interviews with 14 frequent private jet travelers and 6 corporate executive assistants. Analyzed competing charter applications and broker communication workflows.',
      keyFindings: [
        '83% of users cited hidden landing fees and aircraft availability ambiguity as the top source of booking friction',
        'Empty-leg flight opportunities were viewed as high-value but difficult to monitor in real-time',
        'Passenger manifests and special catering requests were frequently miscommunicated through fragmented email threads',
      ],
      userPainPoints: [
        'Lack of upfront transparent guaranteed pricing',
        'Complex aircraft cabin specifications difficult to visualize on mobile screens',
        'Stressful last-minute passenger manifest and passport clearance handling',
      ],
    },
    userPersona: {
      name: 'Julian Vance',
      role: 'Technology Executive & Frequent Charter Client',
      quote: '"I need to book an empty-leg jet to Zurich in three taps without waiting 4 hours for a broker to call back."',
      goals: [
        'Instant visibility into guaranteed charter rates and certified aircraft availability',
        'Seamless biometric payment and automatic invoice forwarding to family office',
        'Consolidated FBO (Private Terminal) directions and boarding pass access',
      ],
      frustrations: [
        'Broker markup opaqueness',
        'Inability to check cabin dimensions and luggage capacity before confirmation',
      ],
    },
    userJourney: [
      {
        phase: 'Discovery',
        userAction: 'Searches routing: London Luton (LTN) to Geneva (GVA)',
        emotionalState: 'Focused, expectant',
        opportunity: 'Display live certified aircraft with all-inclusive pricing immediately',
      },
      {
        phase: 'Aircraft Selection',
        userAction: 'Compares Light Jet (Citation Mustang) vs Midsize (Hawker 800XP)',
        emotionalState: 'Analytical',
        opportunity: 'Show interactive 3D cabin cross-section, range map, and passenger capacity',
      },
      {
        phase: 'Manifest & Add-ons',
        userAction: 'Uploads passport scans and selects onboard catering preferences',
        emotionalState: 'Deliberate',
        opportunity: 'Fast optical character recognition (OCR) passport autofill',
      },
      {
        phase: 'Confirmation & Departure',
        userAction: 'Receives FBO VIP lounge gate directions and pilot contact',
        emotionalState: 'Reassured, satisfied',
        opportunity: 'Real-time ground handling updates and offline boarding QR pass',
      },
    ],
    userFlow: [
      {
        step: '01. Route Selection',
        action: 'Choose Departure/Arrival FBO, Dates, and Passenger count',
        systemResponse: 'Instantly filters verified available aircraft & empty-leg specials',
      },
      {
        step: '02. Aircraft Inspection',
        action: 'Browse cabin imagery, baggage hold specifications, and operator rating',
        systemResponse: 'Calculates exact fuel surcharge, landing fees, and carbon offset total',
      },
      {
        step: '03. Crew & Manifest',
        action: 'Select saved passenger profiles or scan new passports via camera',
        systemResponse: 'Validates border clearance rules and flags potential visa warnings',
      },
      {
        step: '04. Instant Settlement',
        action: 'Approve transaction with Apple Pay, Wire, or Crypto Escrow',
        systemResponse: 'Generates confirmed tail number, pilot roster, and private terminal pass',
      },
    ],
    wireframes: [
      {
        title: 'Low-Fidelity Route Search & Date Matrix',
        notes: 'Explored calendar heatmaps showing dynamic empty-leg discount rates across alternative departure airports.',
      },
      {
        title: 'Cabin Detail & Baggage Dimension Sheet',
        notes: 'Designed expandable bottom sheets detailing stand-up cabin heights and ski/golf bag capacity.',
      },
      {
        title: 'Flight Status & FBO Terminal Card',
        notes: 'Minimized clutter by prioritizing VIP terminal coordinates and pilot phone shortcut.',
      },
    ],
    uiDesign: {
      description:
        'A refined, dark-mode-first aesthetic inspired by aerospace avionics and modern luxury horology. Generous negative space, pristine micro-interactions, and high contrast ensure effortless readability during night flights.',
      screens: [
        {
          name: 'Flight Discovery & Route Search',
          description: 'Search interface with fast FBO airport lookup and empty-leg discount alerts.',
          deviceType: 'mobile',
        },
        {
          name: 'Aircraft Comparison & Cabin View',
          description: 'Detailed aircraft card showing cabin photography, range, cruising speed, and amenities.',
          deviceType: 'mobile',
        },
        {
          name: 'Passenger Manifest & Concierge',
          description: 'Streamlined passenger detail entry with special request options and dietary preferences.',
          deviceType: 'mobile',
        },
        {
          name: 'Active Itinerary & FBO Pass',
          description: 'Live trip screen with real-time tail number status and private terminal lounge directions.',
          deviceType: 'mobile',
        },
      ],
    },
    designSystem: {
      colors: [
        { name: 'Avionics Midnight', hex: '#0B0F17', role: 'Main Canvas Background' },
        { name: 'Aero Blue', hex: '#3B82F6', role: 'Primary Action & Navigation' },
        { name: 'Titanium Slate', hex: '#94A3B8', role: 'Secondary Details & Metrics' },
        { name: 'Champagne Gold', hex: '#E2B887', role: 'Luxury & VIP Tier Highlights' },
      ],
      typography: 'Manrope paired with JetBrains Mono for avionics tail numbers, GPS coordinates, and flight timers.',
      components: [
        'Route Selector Chip',
        'Aircraft Card with Spec Matrix',
        'FBO Terminal Badge',
        'Dynamic Empty-Leg Banner',
        'Biometric Payment Pill',
      ],
    },
    usabilityTesting: {
      method: 'Unmoderated and moderated usability testing with 10 target charter users across 3 iteration rounds.',
      participants: '10 frequent business travelers and corporate travel managers.',
      testFindings: [
        'Task completion rate for booking a charter flight increased from 52% (industry baseline) to 94%',
        'Average booking completion time dropped from 22 minutes to 3.5 minutes',
        '100% of participants praised the upfront clarity of guaranteed all-inclusive fees',
      ],
    },
    iterations: [
      {
        before: 'Aircraft amenities were hidden behind deep modal menus',
        after: 'Introduced quick-glance visual amenity chips (Wi-Fi, Berths, Pet-friendly, Galley) on top-level cards',
        reasoning: 'Reduced comparison fatigue and allowed rapid filtering without repeated modal dismissals',
      },
      {
        before: 'Passport entry required typing 9 separate fields manually',
        after: 'Integrated auto-scan camera OCR with instant validation and saved traveler vaults',
        reasoning: 'Eliminated manual typing errors and reduced check-in setup by over 70%',
      },
    ],
    finalExperience:
      'PaceJet delivers an uncompromising private flight booking experience that strips away broker delays and gives travelers total control over their time and flight arrangements.',
    outcome: {
      businessImpact: 'Charter conversion rate increased by 42% over benchmark broker inquiry flows.',
      userFeedback: 'Described by executive assistants as "the first private aviation tool that actually respects our time."',
    },
    keyLearnings: [
      'High-net-worth users value clarity and speed far more than decorative animations',
      'Transparency in fuel and landing fees builds immediate brand trust in high-ticket transactions',
      'Designing for both the primary passenger and their booking assistant requires dual-intent UX workflows',
    ],
  },
  {
    id: 'ticketa',
    title: 'Ticketa',
    subtitle: 'Event Ticketing Platform',
    description:
      'A complete event ticketing ecosystem connecting attendees, organizers and event staff across mobile, web and dashboard experiences.',
    tags: ['Product Design', 'Mobile', 'Web', 'Dashboard', 'Design System'],
    year: '2024',
    role: 'Lead Product Designer & System Architect',
    timeline: '14 Weeks (Multi-Platform Ecosystem)',
    platforms: ['Attendee iOS/Android App', 'Attendee Web Portal', 'Organizer Analytics Dashboard', 'Staff Gate Scanner App'],
    clientOrContext: 'Live Entertainment & Festival Ecosystem',
    accentColor: '#4F46E5', // Indigo event energy
    problem:
      'Event ecosystems suffer from fragmented platforms: attendees deal with fraudulent ticket resales and agonizing entry queues; organizers struggle with scattered sales dashboards; and gate staff are forced to use unreliable offline scanners that fail under spotty stadium Wi-Fi.',
    research: {
      summary:
        'Conducted field research at 4 live music festivals and conferences, interviewed 20+ event organizers, and surveyed 350+ frequent event attendees.',
      keyFindings: [
        'Gate bottlenecks resulted in 45-minute entry waits due to QR code screenshot fraud and slow scanner synching',
        'Organizers lacked real-time visibility into gate entrance pacing and VIP check-in alerts',
        'Attendees were terrified of purchasing counterfeit resale tickets on secondary marketplaces',
      ],
      userPainPoints: [
        'Fake tickets and deceptive scalper pricing on secondary markets',
        'Lack of real-time seat selection clarity on mobile devices',
        'Organizers having to cross-reference multiple spreadsheets to reconcile box-office revenue',
      ],
    },
    userPersona: {
      name: 'Tariq Adeleke',
      role: 'Festival Producer & Concert Promoter',
      quote: '"I need to know my gate throughput every 60 seconds, prevent counterfeit entry, and see revenue settle instantly."',
      goals: [
        'Real-time live gate throughput telemetry during peak doors-open rush',
        'Dynamically adjustable tier pricing and promotional discount codes',
        'Zero fraudulent entries with cryptographic rotating ticket tokens',
      ],
      frustrations: [
        'Ticket fraud damaging reputation and event safety limits',
        'Laggy scanner apps that fail when thousands of phones jam venue cellular towers',
      ],
    },
    userJourney: [
      {
        phase: 'Event Discovery',
        userAction: 'Browses upcoming music festival lineup and venue map',
        emotionalState: 'Excited, eager',
        opportunity: 'High-res interactive seat & tier selection with clear fee breakdown',
      },
      {
        phase: 'Checkout & Securing',
        userAction: 'Purchases 2 VIP passes and activates dynamic secure barcodes',
        emotionalState: 'Accomplished',
        opportunity: 'Apple Wallet & Google Wallet one-tap sync with anti-screenshot token',
      },
      {
        phase: 'Gate Arrival',
        userAction: 'Presents dynamic QR code at turnstile under offline conditions',
        emotionalState: 'Anticipatory',
        opportunity: 'Sub-second optical scan validation on staff mobile device with haptic cue',
      },
      {
        phase: 'Post-Event',
        userAction: 'Organizers review real-time revenue and attendance analytics',
        emotionalState: 'Informed, satisfied',
        opportunity: 'Automated settlement breakdown and repeat attendee cohort analytics',
      },
    ],
    userFlow: [
      {
        step: '01. Browse & Seat Map',
        action: 'Select stage section, view 3D sightline preview, and choose ticket tier',
        systemResponse: 'Locks ticket inventory for 8 minutes to prevent race conditions',
      },
      {
        step: '02. Express Checkout',
        action: 'Pay via digital wallet or card with zero surprise checkout fees',
        systemResponse: 'Issues cryptographic ticket pass directly into mobile wallet',
      },
      {
        step: '03. Secure Gate Scanning',
        action: 'Staff scans token at entry gate using local Bluetooth mesh sync',
        systemResponse: 'Auditory and haptic chime confirms valid tier and admits attendee',
      },
      {
        step: '04. Live Organizer Telemetry',
        action: 'Organizer monitors gate capacity, VIP arrivals, and concessions on dashboard',
        systemResponse: 'Pushes real-time alerts if gate throughput dips below target velocity',
      },
    ],
    wireframes: [
      {
        title: 'Attendee Dynamic Ticket Pass Card',
        notes: 'Engineered an animated anti-screenshot token that rotates cryptographic hash every 15 seconds.',
      },
      {
        title: 'Organizer Real-Time Capacity Dashboard',
        notes: 'Designed a dense command center layout tracking entrance pacing, VIP check-ins, and box office sales.',
      },
      {
        title: 'High-Speed Staff Scanner HUD',
        notes: 'Constructed an ultra-minimalist camera viewfinder with clear green/red status states and offline caching.',
      },
    ],
    uiDesign: {
      description:
        'A comprehensive design system spanning 4 products: Attendee Mobile App, Attendee Web Discovery, Organizer Command Dashboard, and Staff Gate Scanner HUD.',
      screens: [
        {
          name: 'Attendee Mobile App',
          description: 'Event exploration feed with dynamic interactive tickets and venue friend-finder.',
          deviceType: 'mobile',
        },
        {
          name: 'Attendee Web Discovery Portal',
          description: 'Large editorial desktop website showcasing major concerts, tours, and festivals.',
          deviceType: 'web',
        },
        {
          name: 'Organizer Command Dashboard',
          description: 'Analytics command hub displaying real-time revenue, attendee velocity, and gate metrics.',
          deviceType: 'dashboard',
        },
        {
          name: 'Staff Gate Check-in Scanner',
          description: 'High-speed camera scanner HUD with offline Bluetooth queue caching and vibration feedback.',
          deviceType: 'mobile',
        },
      ],
    },
    designSystem: {
      colors: [
        { name: 'Festival Indigo', hex: '#4F46E5', role: 'Brand & Active Highlights' },
        { name: 'Electric Violet', hex: '#7C3AED', role: 'VIP & Special Tier Accents' },
        { name: 'Charcoal Noir', hex: '#0F172A', role: 'Dashboard Surfaces' },
        { name: 'Success Emerald', hex: '#10B981', role: 'Validated Gate Entry' },
      ],
      typography: 'Manrope across all platforms with clear micro-badge sizing for fast gate visual identification.',
      components: [
        'Dynamic QR Ticket Pass',
        'Tier Selection Pill',
        'Gate Throughput Gauge',
        'Venue Section Picker',
        'Rapid Scanner HUD Frame',
      ],
    },
    usabilityTesting: {
      method: 'Field test simulations replicating 500-person per minute stadium entrance queues.',
      participants: '8 venue gate staff, 4 event organizers, and 30 test attendees.',
      testFindings: [
        'Check-in scan latency reduced to 0.4 seconds per attendee',
        'Zero duplicate or fraudulent screenshot admissions during trial runs',
        'Organizer dashboard rated 9.4/10 for clarity of revenue reconciliation',
      ],
    },
    iterations: [
      {
        before: 'Scanner required staff to tap screen between every single ticket scan',
        after: 'Created continuous auto-focus scan mode with distinct audio tones for general vs VIP admission',
        reasoning: 'Doubled gate throughput speed and prevented repetitive strain for gate stewards',
      },
      {
        before: 'Organizers had to export CSVs to see ticket sales velocity',
        after: 'Built interactive time-series timeline showing peak sales spikes aligned with artist announcements',
        reasoning: 'Gave promoters immediate actionable insights on social campaign performance',
      },
    ],
    finalExperience:
      'Ticketa represents a truly unified event operating system—eliminating fake tickets for fans, providing ironclad control for staff, and giving promoters unprecedented insight.',
    outcome: {
      businessImpact: 'Handled over 120,000 live ticket sales across pilot events with 99.98% scanner uptime.',
      userFeedback: 'Festival organizers noted a 60% reduction in gate queue complaints compared to legacy providers.',
    },
    keyLearnings: [
      'Designing for high-stress offline physical environments demands relentless simplification of the UI',
      'The bond between attendee mobile experience and on-the-ground staff tools must be tightly synchronized',
      'Anti-fraud security must never come at the cost of slower gate entry',
    ],
  },
  {
    id: 'magicpay',
    title: 'MagicPay',
    subtitle: 'Fintech Mobile Application',
    description:
      'A fintech mobile experience designed around payments, transfers, airtime, data, bills, cards and other financial services.',
    tags: ['Product Design', 'Fintech', 'Mobile', 'UX/UI'],
    year: '2024',
    role: 'Product Designer & Interaction Architect',
    timeline: '8 Weeks',
    platforms: ['iOS App', 'Android App'],
    clientOrContext: 'Emerging Markets Digital Banking Venture',
    accentColor: '#059669', // Emerald financial growth
    problem:
      'Everyday digital financial services in emerging markets are often riddled with hidden transaction fees, multi-step authentication failures, and cluttered navigation grids that overwhelm users trying to complete quick airtime, bill, or money transfers.',
    research: {
      summary:
        'Surveyed 180 everyday mobile banking users and analyzed drop-off metrics on recurring bill payment flows.',
      keyFindings: [
        '74% of failed transfers were due to accidental account number typos that lacked instant name verification',
        'Users frequently lost track of monthly utility subscription due dates, incurring penalty fees',
        'Airtime and data top-up actions required up to 6 screens on incumbent bank apps',
      ],
      userPainPoints: [
        'Fear of sending money to the wrong bank account number',
        'Complex bill payment categories buried inside deep nested menus',
        'Cluttered balance screens exposing sensitive account amounts in public spaces',
      ],
    },
    userPersona: {
      name: 'Amina Bello',
      role: 'Small Business Owner & Active Digital Consumer',
      quote: '"I need to send money to vendors in seconds, pay electricity bills before they expire, and keep my savings safe."',
      goals: [
        'Instant recipient name verification before authorizing any transfer',
        'One-tap recurring bill payment with scheduled reminders',
        'Virtual card generation with customizable spending caps for international subscriptions',
      ],
      frustrations: [
        'Bank downtime without warning right when paying a vendor',
        'Complicated OTP verification sequences that time out on slow networks',
      ],
    },
    userJourney: [
      {
        phase: 'Account Opening',
        userAction: 'Onboards with phone number and biometric ID verification in 90 seconds',
        emotionalState: 'Relieved, motivated',
        opportunity: 'Zero manual paperwork with automated government ID lookup',
      },
      {
        phase: 'Instant Transfer',
        userAction: 'Inputs 10-digit account number and watches recipient name appear instantly',
        emotionalState: 'Confident, secure',
        opportunity: 'Visual verification badge and intelligent recent contacts ribbon',
      },
      {
        phase: 'Bills & Utilities',
        userAction: 'Recharges home electricity meter and schedules auto-top-up for phone data',
        emotionalState: 'Effortless',
        opportunity: 'Smart meter token copy shortcut and recurring schedule toggles',
      },
      {
        phase: 'Card Management',
        userAction: 'Creates instant virtual Dollar card and sets $200 monthly safety ceiling',
        emotionalState: 'In control',
        opportunity: 'Interactive 3D card tilt with tap-to-reveal CVV security',
      },
    ],
    userFlow: [
      {
        step: '01. Home & Quick Actions',
        action: 'Tap "Send Money" or swipe down for quick recent beneficiaries',
        systemResponse: 'Displays clean transfer modal with instant search',
      },
      {
        step: '02. Recipient Confirmation',
        action: 'Enter bank and account number or select phone contact',
        systemResponse: 'Calls bank switch and displays confirmed recipient avatar & verified name',
      },
      {
        step: '03. Amount & Note',
        action: 'Enter amount with smart preset buttons and transaction category tag',
        systemResponse: 'Calculates zero transfer fees and previews resulting balance',
      },
      {
        step: '04. Biometric Authorization',
        action: 'Touch ID / Face ID confirmation',
        systemResponse: 'Instant success haptic with shareable PDF receipt generation',
      },
    ],
    wireframes: [
      {
        title: 'Home Dashboard & Balance Privacy Toggle',
        notes: 'Designed quick tap eye icon allowing users to instantly blur balance amounts when in public transit.',
      },
      {
        title: 'Transfer Recipient Verification HUD',
        notes: 'Engineered a prominent green verification tick that only unlocks the "Confirm" button after API name lookup succeeds.',
      },
      {
        title: 'Virtual Card Detail Vault',
        notes: 'Clean card flipper revealing 16-digit card number, freeze toggle, and transaction ledger.',
      },
    ],
    uiDesign: {
      description:
        'A clean, uplifting financial interface focused on readability, quick actions, and emotional security. Subtle emerald highlights denote monetary velocity and financial health without visual noise.',
      screens: [
        {
          name: 'Home Dashboard & Quick Services',
          description: 'Account balance, quick service actions (Send, Bills, Top-up, Cards), and recent history.',
          deviceType: 'mobile',
        },
        {
          name: 'Instant Recipient Verification Transfer',
          description: 'Smart transfer sheet with live bank resolution, category tagging, and zero-fee badge.',
          deviceType: 'mobile',
        },
        {
          name: 'Bills & Utilities Hub',
          description: 'Categorized utilities payment for Electricity, Cable TV, Internet, and Government Levies.',
          deviceType: 'mobile',
        },
        {
          name: 'Virtual Card & Security Controls',
          description: 'Instant virtual debit card with one-tap freeze, international billing, and spend limiters.',
          deviceType: 'mobile',
        },
      ],
    },
    designSystem: {
      colors: [
        { name: 'Emerald Growth', hex: '#059669', role: 'Primary Brand & Positive Balances' },
        { name: 'Mint Mist', hex: '#ECFDF5', role: 'Success Badges & Subdued Cards' },
        { name: 'Slate Obsidian', hex: '#0F172A', role: 'High-Contrast Text & Buttons' },
        { name: 'Soft Platinum', hex: '#F1F5F9', role: 'Background Canvas' },
      ],
      typography: 'Manrope with monospaced currency numbers for flawless decimal and comma alignment.',
      components: [
        'Balance Privacy Pill',
        'Quick Action Icon Circle',
        'Beneficiary Avatar Ribbon',
        'Bank Resolver Input Card',
        'Virtual Debit Card Canvas',
      ],
    },
    usabilityTesting: {
      method: 'Task completion testing with 15 users across 4 age demographics (18–55).',
      participants: '15 participants including students, traders, and office professionals.',
      testFindings: [
        '96% of participants completed a transfer in under 12 seconds with zero assistance',
        '100% of participants reported increased peace of mind from the verified name popover',
        'Bill payment satisfaction score increased by 4.2x compared to legacy bank applications',
      ],
    },
    iterations: [
      {
        before: 'Airtime and Data were separate multi-step screens',
        after: 'Combined Airtime and Data into a unified single-screen tabbed drawer',
        reasoning: 'Reduced steps by 50% and allowed instant reuse of recent mobile numbers',
      },
      {
        before: 'Receipts were static screenshots',
        after: 'Created dynamic interactive receipts with WhatsApp sharing and instant dispute support',
        reasoning: 'Helped merchants easily send branded payment proof to suppliers with a single click',
      },
    ],
    finalExperience:
      'MagicPay transforms daily money movements into a lightweight, frictionless ritual where every action feels secure, instantaneous, and delightfully clear.',
    outcome: {
      businessImpact: 'User retention at Day-30 exceeded 68% during private beta rollouts.',
      userFeedback: 'Praised by users for eliminating anxiety from everyday money transfers.',
    },
    keyLearnings: [
      'Micro-feedback (haptics, name verification checks) is crucial for building trust in financial UX',
      'Balance privacy is a fundamental human need in crowded urban environments',
      'Minimizing cognitive load in checkout flows directly correlates with higher transaction volume',
    ],
  },
  {
    id: 'zibapay',
    title: 'ZibaPay',
    subtitle: 'Digital Payment Platform',
    description:
      'A digital payment experience designed to support modern financial transactions and business services.',
    tags: ['Product Design', 'Fintech', 'Payments'],
    year: '2024',
    role: 'Product Designer & UX Researcher',
    timeline: '9 Weeks',
    platforms: ['Merchant Web Portal', 'Mobile Checkout SDK', 'Customer Payment App'],
    clientOrContext: 'B2B & B2C Digital Payments Infrastructure',
    accentColor: '#2563EB', // Electric royal blue
    problem:
      'Modern businesses attempting to accept payments across online stores, physical POS terminals, and international client invoices face fragmented reconciliation, delayed settlement payouts, and confusing developer documentation.',
    research: {
      summary:
        'Conducted 16 in-depth interviews with e-commerce store owners, freelance service providers, and finance managers.',
      keyFindings: [
        '81% of merchants struggled with invoice reconciliation between bank transfers and card gateway payments',
        'Customers abandoned checkouts when forced to create a new account just to pay for an item',
        'Multi-currency settlement calculations were opaque, with unpredictable foreign exchange spreads',
      ],
      userPainPoints: [
        'High payment abandonment rates on checkout forms',
        'Slow merchant payouts leaving working capital tied up for 3–5 business days',
        'Disorganized dispute and chargeback handling workflows',
      ],
    },
    userPersona: {
      name: 'Kelechi Okafor',
      role: 'Head of Growth at Multi-Brand E-Commerce Retailer',
      quote: '"I need a checkout experience that converts instantly on mobile, and a back-office that tells me my net settlement in one glance."',
      goals: [
        'Maximize checkout conversion with frictionless guest checkout options',
        'Instant next-day merchant settlements directly into commercial accounts',
        'Clear multi-currency reporting and automatic tax reconciliation',
      ],
      frustrations: [
        'Checkout drop-offs caused by unnecessary form fields',
        'Hidden currency conversion markups on cross-border payments',
      ],
    },
    userJourney: [
      {
        phase: 'Checkout Initiation',
        userAction: 'Customer clicks "Pay with ZibaPay" on merchant website',
        emotionalState: 'Ready to buy',
        opportunity: 'Instant mobile-optimized modal with Apple Pay, Cards, and Direct Bank Transfer',
      },
      {
        phase: 'Payment Authorization',
        userAction: 'Authenticates payment with one-tap 3D Secure biometric confirmation',
        emotionalState: 'Reassured',
        opportunity: 'Sub-2-second payment processing with fallback routing redundancy',
      },
      {
        phase: 'Merchant Reconciliation',
        userAction: 'Finance manager reviews daily batch transactions on ZibaPay portal',
        emotionalState: 'In control',
        opportunity: 'Real-time settlement breakdown and QuickBooks/Xero automated sync',
      },
      {
        phase: 'Payout Disbursement',
        userAction: 'Funds disburse automatically into merchant primary account at 08:00 AM',
        emotionalState: 'Satisfied',
        opportunity: 'Automated SMS and email remittance notifications with zero payout delays',
      },
    ],
    userFlow: [
      {
        step: '01. Merchant Setup',
        action: 'Complete digital KYC, select settlement currencies, and generate API keys',
        systemResponse: 'Activates sandbox testing and live production payment rails',
      },
      {
        step: '02. Checkout SDK Integration',
        action: 'Drop responsive modal embed onto e-commerce store or send payment link',
        systemResponse: 'Adapts styling to merchant brand and detects user currency automatically',
      },
      {
        step: '03. Transaction Settlement',
        action: 'Customer settles invoice via preferred channel',
        systemResponse: 'Escrows funds, generates cryptographic receipt, and triggers merchant webhook',
      },
      {
        step: '04. Analytical Auditing',
        action: 'Merchant views transaction volume, success rates, and customer geography',
        systemResponse: 'Generates real-time visual charts and one-click financial audit exports',
      },
    ],
    wireframes: [
      {
        title: 'Universal Checkout Modal Sheet',
        notes: 'Engineered a clean adaptive modal that automatically orders payment channels based on historical success rates in the user region.',
      },
      {
        title: 'Merchant Analytics Command Bar',
        notes: 'Designed high-density metrics bar highlighting gross transaction volume (GTV), dispute rates, and settlement countdowns.',
      },
      {
        title: 'Payment Link Builder',
        notes: 'Created an effortless 3-step invoice generator allowing non-technical sellers to collect funds in 15 seconds.',
      },
    ],
    uiDesign: {
      description:
        'A sharp, trustworthy financial design language tailored for both high-converting consumer checkouts and deep merchant back-office management. Crisp typography, precise mathematical spacing, and Royal Blue accents evoke institutional-grade reliability.',
      screens: [
        {
          name: 'Universal Checkout Modal',
          description: 'Adaptive payment modal offering Cards, Bank Transfer, USSD, and Mobile Money with zero clutter.',
          deviceType: 'web',
        },
        {
          name: 'Merchant Analytics Dashboard',
          description: 'Comprehensive financial dashboard monitoring volume, settlement balances, and fee reconciliations.',
          deviceType: 'dashboard',
        },
        {
          name: 'Payment Links & Invoicing Suite',
          description: 'Instant shareable link generator with customizable tipping, line items, and brand logos.',
          deviceType: 'web',
        },
        {
          name: 'Dispute & Chargeback Resolution Center',
          description: 'Structured evidence submission portal with automated banking guideline checklists.',
          deviceType: 'dashboard',
        },
      ],
    },
    designSystem: {
      colors: [
        { name: 'Royal Blue', hex: '#2563EB', role: 'Brand & Primary Payment CTA' },
        { name: 'Navy Graphite', hex: '#0F172A', role: 'Command UI Surfaces' },
        { name: 'Glacier Tint', hex: '#EFF6FF', role: 'Active Selection Highlights' },
        { name: 'Pure White', hex: '#FFFFFF', role: 'Modal Reading Canvas' },
      ],
      typography: 'Manrope paired with tabular figures for exact numerical alignment across financial audit sheets.',
      components: [
        'Universal Payment Method Selector',
        'Settlement Status Badge',
        'Transaction Ledger Row',
        'Invoice Link Generator Card',
        'Currency Converter Ribbon',
      ],
    },
    usabilityTesting: {
      method: 'A/B conversion checkout tests conducted across 3 high-volume merchant partner stores.',
      participants: 'Over 2,400 live checkout sessions analyzed.',
      testFindings: [
        'Checkout drop-off dropped by 28% compared to previous multi-page payment forms',
        'Average customer payment completion time was under 18 seconds',
        'Merchant satisfaction score reached 9.1/10 for back-office daily reconciliation speed',
      ],
    },
    iterations: [
      {
        before: 'Checkout modal forced users to manually type their billing address first',
        after: 'Moved address entry behind an optional toggle and prioritized instant card/transfer entry',
        reasoning: 'Dramatically reduced mobile checkout friction and boosted completed orders',
      },
      {
        before: 'Dispute center only allowed email attachments',
        after: 'Integrated direct drag-and-drop evidence locker with real-time bank countdown timer',
        reasoning: 'Prevented merchants from missing strict 72-hour chargeback dispute response windows',
      },
    ],
    finalExperience:
      'ZibaPay bridges the gap between seamless consumer checkout simplicity and enterprise-grade merchant infrastructure, empowering businesses to scale their transaction volume globally.',
    outcome: {
      businessImpact: 'Processed over $4.8M in test and pilot transaction volume with 99.9% gateway uptime.',
      userFeedback: 'Described by merchants as "the cleanest, most dependable payment interface in our tech stack."',
    },
    keyLearnings: [
      'Every unnecessary second on a checkout screen directly reduces conversion rates',
      'Transparent real-time settlement forecasting is the number one feature merchants care about',
      'A great payment experience must feel effortless to the shopper and bulletproof to the merchant',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'PRODUCT & UI/UX DESIGN',
    description: 'User-centered architecture, end-to-end interface craft, and rigorous design system standards.',
    skills: [
      'UI/UX Design',
      'Product Design',
      'User Research',
      'User Flows',
      'Wireframing',
      'Prototyping',
      'Design Systems',
      'Usability Testing',
      'Responsive Design',
    ],
  },
  {
    title: 'WEB DESIGN & DEVELOPMENT',
    description: 'Clean, modern, performant web engineering that brings design vision to life pixel-for-pixel.',
    skills: [
      'Website Design',
      'Frontend Development',
      'HTML',
      'CSS',
      'JavaScript',
      'PHP',
      'jQuery',
      'Sass',
      'Responsive Web Development',
      'WordPress',
      'Framer',
    ],
  },
  {
    title: 'BACKEND & DATABASE',
    description: 'Durable data persistence, API integrations, and robust database architecture.',
    skills: [
      'SQL',
      'PostgreSQL',
      'Supabase',
      'Firebase',
      'Database Design',
      'API Integration',
      'Authentication',
      'Row-Level Security (RLS)',
    ],
  },
  {
    title: 'AI-ASSISTED DEVELOPMENT & TOOLS',
    description: 'Modern acceleration workflows turning conceptual ideas into working software faster.',
    skills: [
      'Google AI Studio',
      'AI-assisted Development',
      'Rapid Prototyping',
      'Figma',
      'VS Code',
      'Git / GitHub',
      'Vercel',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    summary: 'Understand the business, users and problem.',
    deliverables: ['Stakeholder alignment', 'User problem discovery', 'Competitive benchmark', 'Scope & requirements map'],
  },
  {
    number: '02',
    title: 'Explore',
    summary: 'Research, brainstorm and define the right direction.',
    deliverables: ['Information architecture', 'User personas & journey maps', 'Concept exploration', 'Low-fidelity wireframes'],
  },
  {
    number: '03',
    title: 'Design',
    summary: 'Create user flows, wireframes, interfaces and prototypes.',
    deliverables: ['High-fidelity UI screens', 'Design tokens & systems', 'Interactive micro-prototypes', 'Usability validation'],
  },
  {
    number: '04',
    title: 'Build',
    summary: 'Turn approved designs into functional digital experiences.',
    deliverables: ['Clean semantic code', 'Responsive components', 'Database & API integrations', 'Zero design-to-code drift'],
  },
  {
    number: '05',
    title: 'Launch',
    summary: 'Test, refine and deploy the final product.',
    deliverables: ['Cross-device QA testing', 'SEO & performance tuning', 'Production deployment', 'Post-launch metrics tracking'],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design-dev',
    title: 'Website Design & Development',
    description: 'Modern responsive websites for businesses and organizations that communicate credibility, convert visitors, and load blazingly fast.',
    deliverables: ['Custom responsive layouts', 'SEO & performance optimization', 'Content management setup', 'Cross-browser testing'],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'User-centered interfaces and experiences for web and mobile products grounded in real behavioral research and intuitive interaction.',
    deliverables: ['Wireframing & user journeys', 'Visual interface design', 'Interactive Figma prototypes', 'Heuristic evaluations'],
  },
  {
    id: 'product-design',
    title: 'Product Design',
    description: 'End-to-end design for digital products and SaaS platforms from early strategic conception to scalable design system execution.',
    deliverables: ['Product strategy & roadmaps', 'Scalable component libraries', 'Multi-tenant workflows', 'Design tokens & specs'],
  },
  {
    id: 'mobile-app-design',
    title: 'Mobile App Design',
    description: 'Intuitive mobile experiences designed around real user needs, thumb-zone ergonomics, and platform-native guidelines.',
    deliverables: ['iOS & Android design guidelines', 'Micro-interactions & transitions', 'Offline state planning', 'App Store asset generation'],
  },
  {
    id: 'dashboard-design',
    title: 'Dashboard Design',
    description: 'Complex dashboards and analytics tools simplified into clear, usable, and high-efficiency operational experiences.',
    deliverables: ['Data visualization hierarchy', 'Custom filtering & table views', 'Role-based permission UI', 'Dense information layouts'],
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    description: 'Modernizing outdated websites, eliminating technical debt, and dramatically improving conversion rates and user satisfaction.',
    deliverables: ['UX audit & bottleneck analysis', 'Modern brand translation', 'Asset & code modernization', 'Preserved SEO redirects'],
  },
  {
    id: 'rapid-prototyping',
    title: 'Rapid Prototyping',
    description: 'Turning ideas into functional prototypes quickly using modern AI-assisted development workflows and rapid feedback loops.',
    deliverables: ['Interactive code prototypes', 'Validation sandbox models', 'Fast investor demo builds', 'Google AI Studio integration'],
  },
];
