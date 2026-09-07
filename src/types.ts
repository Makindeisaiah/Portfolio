export type ProjectCategory = 'website' | 'uiux';

export interface WebsiteProject {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  year: string;
  role: string;
  tools: string[];
  client: string;
  liveUrl?: string;
  thumbnailUrl?: string;
  heroImage?: string;
  // Detail page specific sections
  challenge: string;
  goals: string[];
  designDirection: {
    typography: string;
    colorPalette: { name: string; hex: string; role: string }[];
    editorialApproach: string;
  };
  keyScreens: {
    title: string;
    description: string;
    type: 'desktop' | 'tablet' | 'mobile';
  }[];
  responsiveFeatures: string[];
  developmentHighlights: string[];
  finalWebsiteOverview: string;
  technologies: string[];
  accentColor: string;
}

export interface UIUXProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  role: string;
  timeline: string;
  platforms: string[];
  clientOrContext: string;
  accentColor: string;
  heroImage?: string;
  thumbnailUrl?: string;
  // 18 Case study sections data
  problem: string;
  research: {
    summary: string;
    keyFindings: string[];
    userPainPoints: string[];
  };
  userPersona: {
    name: string;
    role: string;
    quote: string;
    goals: string[];
    frustrations: string[];
  };
  userJourney: {
    phase: string;
    userAction: string;
    emotionalState: string;
    opportunity: string;
  }[];
  userFlow: {
    step: string;
    action: string;
    systemResponse: string;
  }[];
  wireframes: {
    title: string;
    notes: string;
  }[];
  uiDesign: {
    description: string;
    screens: {
      name: string;
      description: string;
      deviceType: 'mobile' | 'web' | 'tablet' | 'dashboard';
    }[];
  };
  designSystem: {
    colors: { name: string; hex: string; role?: string; usage?: string }[];
    typography: string;
    components: string[];
  };
  usabilityTesting: {
    method: string;
    participants: string;
    testFindings: string[];
  };
  iterations: {
    before: string;
    after: string;
    reasoning: string;
  }[];
  finalExperience: string;
  outcome: {
    businessImpact: string;
    userFeedback: string;
  };
  keyLearnings: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
}
