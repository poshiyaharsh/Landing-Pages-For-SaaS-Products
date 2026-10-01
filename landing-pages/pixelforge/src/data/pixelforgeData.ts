export interface NavLink {
  label: string;
  href: string;
}

export interface ClientLogo {
  name: string;
  descriptor: string;
}

export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
  badge: string;
  accent: string;
  iconName: string;
}

export interface ShowcaseProject {
  id: string;
  title: string;
  category: string;
  client: string;
  aspect: string;
  palette: string[];
  tags: string[];
  highlight: string;
  gradient: string;
}

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  details: string;
  badge: string;
}

export interface CopilotDirection {
  id: string;
  name: string;
  mood: string;
  colors: string[];
  typography: string;
  composition: string;
}

export interface UseCaseItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  gradient: string;
  iconName: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarInitials: string;
  metric: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  isPopular?: boolean;
  ctaText: string;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Canvas', href: '#canvas' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' }
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'NOVA', descriptor: 'Design Studio' },
  { name: 'ARC', descriptor: 'Future Labs' },
  { name: 'FRAME', descriptor: 'Motion Works' },
  { name: 'KINETIC', descriptor: 'Digital Ventures' },
  { name: 'MONO', descriptor: 'Creative Editorial' },
  { name: 'ORBIT', descriptor: 'Brand Systems' }
];

export const PROBLEM_SOLUTION_DATA = {
  heading: "Great ideas shouldn't get stuck in production.",
  subheading: "Traditional creative pipelines suffer from fragmented tools, tedious asset resizing, and lost context. PixelForge unifies the entire lifecycle.",
  problems: [
    { title: 'Too many disconnected tools', description: 'Switching between Figma, Midjourney, Photoshop, Illustrator, and Slack shreds creative focus.' },
    { title: 'Repetitive production work', description: 'Re-exporting 40 aspect ratios and manual resizing drains creative engineering energy.' },
    { title: 'Slow feedback cycles', description: 'Static screenshots pasted into chats lead to conflicting, out-of-context revisions.' },
    { title: 'Inconsistent brand assets', description: 'Disconnected team members produce off-palette colors and misaligned typography.' },
    { title: 'Endless design revisions', description: 'Version sprawl like Final_v2_final_FINAL.png breaks asset handoffs.' }
  ],
  solutionHeadline: 'PixelForge connects ideation, design, iteration, and production in one intelligent creative workspace.',
  solutionPoints: [
    'One unified canvas for prompts, vectors, tokens, and multi-format exports.',
    'Dynamic AI copilot that respects your brand tokens and guidelines.',
    'Instant generative variations rendered side by side in real time.',
    'One-click multi-format production bundles for web, print, and social.'
  ]
};

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'f-1',
    number: '01',
    title: 'AI Creative Generation',
    description: 'Turn rough prompts, references, and concepts into polished visual directions with deep contextual understanding.',
    badge: 'Generative Engine',
    accent: '#8B5CF6',
    iconName: 'Sparkles'
  },
  {
    id: 'f-2',
    number: '02',
    title: 'Smart Design Systems',
    description: 'Build reusable colors, typography hierarchies, layout tokens, and strict brand rules that propagate across every asset.',
    badge: 'Token Architecture',
    accent: '#06B6D4',
    iconName: 'Layers'
  },
  {
    id: 'f-3',
    number: '03',
    title: 'Production Workspace',
    description: 'Move seamlessly from raw concept to final deliverables without ever switching tools or exporting intermediate lossy files.',
    badge: 'All-in-One Studio',
    accent: '#F43F5E',
    iconName: 'LayoutGrid'
  },
  {
    id: 'f-4',
    number: '04',
    title: 'Creative Variations',
    description: 'Explore dozens of visual directions instantly and compare typography pairings, color moods, and compositions side by side.',
    badge: 'Multi-Direction Matrix',
    accent: '#A78BFA',
    iconName: 'Copy'
  },
  {
    id: 'f-5',
    number: '05',
    title: 'Team Collaboration',
    description: 'Share concepts, collect pinpoint feedback on specific layers, and keep every creative decision strictly in context.',
    badge: 'Real-time Multiplayer',
    accent: '#22D3EE',
    iconName: 'Users'
  }
];

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'orbit',
    title: 'ORBIT',
    category: 'Brand Identity',
    client: 'Orbit Aerospace',
    aspect: 'Editorial Poster & Guidelines',
    palette: ['#0B0B14', '#8B5CF6', '#22D3EE', '#FFFFFF'],
    tags: ['Identity', 'Token Library', '3D Glyph'],
    highlight: 'Unified visual system generated from 3 core prompts in 14 minutes.',
    gradient: 'from-violet-900/60 via-slate-900 to-black'
  },
  {
    id: 'nexus',
    title: 'NEXUS',
    category: 'Product Launch',
    client: 'Nexus Hardware',
    aspect: 'Web Experience & 3D Packaging',
    palette: ['#08080C', '#06B6D4', '#F43F5E', '#EDEDF0'],
    tags: ['3D Mockup', 'Hero Canvas', 'Motion'],
    highlight: 'Complete web launch assets across 16 responsive dimensions.',
    gradient: 'from-cyan-950/70 via-slate-900 to-black'
  },
  {
    id: 'void',
    title: 'VOID',
    category: 'Editorial Campaign',
    client: 'Void Magazine',
    aspect: 'Magazine Cover & Digital Spreads',
    palette: ['#000000', '#F43F5E', '#7C3AED', '#FAFAFC'],
    tags: ['Typography', 'Editorial Grid', 'Glitch Art'],
    highlight: 'Experimental high-contrast layout with kinetic headline typography.',
    gradient: 'from-pink-950/60 via-purple-950/40 to-black'
  },
  {
    id: 'aura',
    title: 'AURA',
    category: 'Digital Experience',
    client: 'Aura Sound Labs',
    aspect: 'Interactive Spatial Audio App',
    palette: ['#07070F', '#8B5CF6', '#38BDF8', '#E2E8F0'],
    tags: ['Product UI', 'Sound Waves', 'Spatial Grid'],
    highlight: 'Design token hierarchy integrated with production React codebase.',
    gradient: 'from-indigo-950/70 via-slate-900 to-black'
  },
  {
    id: 'mono',
    title: 'MONO',
    category: 'Fashion System',
    client: 'Mono Atelier',
    aspect: 'Lookbook & Seasonal Campaign',
    palette: ['#0A0A0E', '#E5E5EB', '#71717A', '#F43F5E'],
    tags: ['Minimalist', 'Black & White', 'Lookbook'],
    highlight: 'Refined editorial lookbook with asymmetrical photography placements.',
    gradient: 'from-slate-900/90 via-zinc-950 to-black'
  },
  {
    id: 'pulse',
    title: 'PULSE',
    category: 'Music Campaign',
    client: 'Pulse Festival 2026',
    aspect: 'Stage Visuals & Social Matrix',
    palette: ['#05050A', '#F43F5E', '#06B6D4', '#FFFFFF'],
    tags: ['Social Kit', 'Motion Poster', 'Festival'],
    highlight: 'Over 120 dynamic social asset cuts exported in under 90 seconds.',
    gradient: 'from-fuchsia-950/60 via-cyan-950/30 to-black'
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    number: '01',
    title: 'IDEA',
    description: 'Describe your concept.',
    details: 'Input a natural language creative brief, paste visual moodboard links, or drop rough wireframes into the generative intake engine.',
    badge: 'Prompt to Seed'
  },
  {
    number: '02',
    title: 'EXPLORE',
    description: 'Generate and refine creative directions.',
    details: 'PixelForge presents multi-directional moodboards, palette options, and spatial compositions tailored to your creative vision.',
    badge: 'AI Direction Engine'
  },
  {
    number: '03',
    title: 'BUILD',
    description: 'Turn the selected direction into a complete design system.',
    details: 'Extract reusable typography scales, color tokens, responsive layout artboards, and component libraries with a single click.',
    badge: 'Tokenized Systems'
  },
  {
    number: '04',
    title: 'SHIP',
    description: 'Export production-ready assets.',
    details: 'Generate print-ready PDFs, production SVGs, responsive web code snippets, and automated social packages in every aspect ratio.',
    badge: 'Zero-Loss Output'
  }
];

export const COPILOT_DIRECTIONS: CopilotDirection[] = [
  {
    id: 'c-1',
    name: 'Direction A: Cyber Roast',
    mood: 'Futuristic Neon & Deep Obsidian',
    colors: ['#09090E', '#8B5CF6', '#22D3EE', '#FFFFFF'],
    typography: 'Syne Bold + JetBrains Mono',
    composition: 'Asymmetric grid with holographic packaging mockup.'
  },
  {
    id: 'c-2',
    name: 'Direction B: Solar Flare',
    mood: 'Warm Amber & Prismatic Copper',
    colors: ['#0B0806', '#F59E0B', '#F43F5E', '#FDF8F0'],
    typography: 'Plus Jakarta Sans 800 + Inter Medium',
    composition: 'Clean modernist layout with minimalist can renders.'
  },
  {
    id: 'c-3',
    name: 'Direction C: Minimalist Ether',
    mood: 'Monochrome Silver & Electric Violet',
    colors: ['#050508', '#71717A', '#A78BFA', '#F4F4F6'],
    typography: 'Space Grotesk + Geist Mono',
    composition: 'Editorial typography poster with negative whitespace.'
  },
  {
    id: 'c-4',
    name: 'Direction D: Hyper Botanical',
    mood: 'Bio-luminescent Emerald & Deep Plum',
    colors: ['#040907', '#10B981', '#C084FC', '#FFFFFF'],
    typography: 'Editorial Serif + Clean Sans',
    composition: 'Organic liquid curves overlaid on technical typography.'
  }
];

export const USE_CASES: UseCaseItem[] = [
  {
    id: 'brand',
    title: 'Brand Design',
    description: 'Complete visual identities, vector logos, token systems, and interactive brand guidelines.',
    deliverables: ['Logo Glyphs', 'Color Systems', 'Type Scales', 'Brand Manuals'],
    gradient: 'from-violet-500/20 to-purple-500/5',
    iconName: 'Palette'
  },
  {
    id: 'campaigns',
    title: 'Campaigns',
    description: 'Integrated creative campaigns across outdoor billboards, high-impact digital ads, and web heroes.',
    deliverables: ['Key Visuals', 'Campaign Slogans', 'Banner Packs', 'OOH Billboards'],
    gradient: 'from-pink-500/20 to-rose-500/5',
    iconName: 'Megaphone'
  },
  {
    id: 'product',
    title: 'Product Design',
    description: 'High-fidelity UI mockups, responsive design tokens, interactive components, and handoff specs.',
    deliverables: ['Mobile Screens', 'Web Apps', 'Design Tokens', 'Handoff Specs'],
    gradient: 'from-cyan-500/20 to-blue-500/5',
    iconName: 'Layout'
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'High-converting landing page visuals, email newsletters, product launch graphics, and decks.',
    deliverables: ['Landing Heroes', 'Pitch Decks', 'Email Headers', 'Display Ads'],
    gradient: 'from-emerald-500/20 to-teal-500/5',
    iconName: 'TrendingUp'
  },
  {
    id: 'social',
    title: 'Social Content',
    description: 'Automated 1:1, 9:16, and 16:9 social kits rendered across Instagram, LinkedIn, TikTok, and X.',
    deliverables: ['Reels / TikToks', 'Carousel Cards', 'Post Grids', 'Thumbnails'],
    gradient: 'from-fuchsia-500/20 to-violet-500/5',
    iconName: 'Share2'
  },
  {
    id: 'editorial',
    title: 'Editorial',
    description: 'Magazine covers, book designs, cultural lookbooks, and high-fashion spreads with experimental grids.',
    deliverables: ['Print Spreads', 'Cover Concepts', 'Type Posters', 'Lookbooks'],
    gradient: 'from-amber-500/20 to-orange-500/5',
    iconName: 'BookOpen'
  },
  {
    id: 'startups',
    title: 'Startup Launches',
    description: 'From day zero concept to YC demo day: instant MVP visuals, pitch deck assets, and landing page kits.',
    deliverables: ['Launch Hero', 'Pitch Graphics', 'Product Shots', 'Waitlist Assets'],
    gradient: 'from-blue-500/20 to-indigo-500/5',
    iconName: 'Rocket'
  },
  {
    id: 'agencies',
    title: 'Creative Agencies',
    description: 'Multi-client workspace architecture, white-label client presentation decks, and rapid client pitching.',
    deliverables: ['Client Workspaces', 'Pitch Decks', 'Multi-variant Demos', 'Export Kits'],
    gradient: 'from-purple-500/20 to-cyan-500/5',
    iconName: 'Briefcase'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: 'PixelForge cut our creative production time dramatically. We can explore ten times more visual ideas without sacrificing an ounce of typography or layout polish.',
    name: 'Maya Chen',
    role: 'Creative Director',
    company: 'Nova Studio',
    avatarInitials: 'MC',
    metric: '4x faster campaign rollouts'
  },
  {
    quote: 'Instead of jumping between five different tools, our entire creative workflow now lives in one place. Moving from raw brief to exportable vector systems is surreal.',
    name: 'Alex Morgan',
    role: 'Lead Brand Designer',
    company: 'Arc Labs',
    avatarInitials: 'AM',
    metric: 'Unified 12-client design system'
  },
  {
    quote: 'The biggest difference is speed and precision. Ideas move from concept to polished execution incredibly fast, and our design team feels empowered rather than replaced.',
    name: 'Jordan Lee',
    role: 'Founder & Design Lead',
    company: 'Kinetic',
    avatarInitials: 'JL',
    metric: '85% production overhead reduction'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    price: '$0',
    period: '/ month',
    description: 'For independent creators exploring AI-assisted design production.',
    isPopular: false,
    ctaText: 'Start Creating — Free',
    features: [
      '3 active creative projects',
      'Basic AI generation engine',
      'Essential typography & palette tokens',
      'Standard web & social exports (PNG/JPEG)',
      'Community template gallery',
      'Personal workspace'
    ]
  },
  {
    id: 'creative',
    name: 'CREATIVE',
    price: '$19',
    period: '/ month',
    description: 'For professional designers and high-output brand creators.',
    isPopular: true,
    ctaText: 'Unlock Creative Workspace',
    features: [
      'Unlimited creative projects',
      'Advanced AI generation with style locks',
      'Complete dynamic brand systems & token sets',
      'Real-time team multiplayer collaboration',
      'Premium editorial templates & layouts',
      'High-res vector (SVG), print-ready PDF & code exports',
      'Unlimited creative variation matrices',
      'Priority GPU generation queue'
    ]
  },
  {
    id: 'studio',
    name: 'STUDIO',
    price: '$49',
    period: '/ month',
    description: 'For growing creative agencies and cross-functional product teams.',
    isPopular: false,
    ctaText: 'Deploy Studio Suite',
    features: [
      'Everything included in Creative',
      'Multi-team workspaces & granular roles',
      'Custom fine-tuned AI style models',
      'Advanced version branching & design history',
      'White-label client presentation links',
      'Custom webhook triggers & Figma sync',
      'Dedicated creative technologist support',
      'Custom SLA & uptime guarantee'
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is PixelForge?',
    answer: 'PixelForge is an all-in-one AI design and creative production platform. It unites early ideation, generative direction exploration, design system tokenization, and multi-format production asset delivery on a single boundless canvas.'
  },
  {
    question: 'Can I use my existing brand assets?',
    answer: 'Yes. You can import existing brand books, SVG logos, custom typography files, and hex/OKLCH color palettes. PixelForge’s Smart Design System maps your brand guidelines as strict parameters for all AI generation.'
  },
  {
    question: 'Does PixelForge support teams?',
    answer: 'Absolutely. PixelForge features real-time multiplayer cursors, inline layer commenting, role-based workspace permissions, and shareable client review portals.'
  },
  {
    question: 'Can I export production-ready assets?',
    answer: 'Yes. PixelForge outputs clean vector SVGs, 300 DPI print-ready CMYK PDFs, responsive CSS/Tailwind tokens, and pre-cut social packages across all aspect ratios (1:1, 9:16, 16:9, 4:5).'
  },
  {
    question: 'Does PixelForge replace traditional design tools?',
    answer: 'PixelForge is built to supercharge and streamline your creative pipeline rather than replace your taste. It eliminates repetitive resizing and tedious setup, allowing creators to focus on high-level art direction, composition, and brand strategy.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes. Subscriptions can be upgraded, downgraded, or canceled at any time from your workspace settings with zero cancellation penalties or hidden fees.'
  },
  {
    question: 'Is there a free plan?',
    answer: 'Yes! The Starter plan is 100% free with no credit card required. You can create up to 3 projects, experiment with the AI generative assistant, and export your first designs in minutes.'
  }
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Templates', href: '#showcase' },
      { label: 'AI Tools', href: '#ai-assistant' },
      { label: 'Integrations', href: '#product' },
      { label: 'Pricing', href: '#pricing' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Design Resources', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Help Center', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Changelog', href: '#' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Security', href: '#' }
    ]
  }
];
