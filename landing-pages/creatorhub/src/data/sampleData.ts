import {
  ContentItem,
  CreatorProfile,
  BrandCampaign,
  AudienceGrowthPoint,
  CreatorCategory,
  FeatureItem,
  PricingPlan,
  FAQItem,
} from '../types';

export const sampleCreatorProfile: CreatorProfile = {
  name: 'Maya Lin',
  handle: '@mayacreates',
  avatarText: 'ML',
  niche: 'Creative Tech & Design Systems',
  totalFollowers: '482.5K',
  monthlyRevenue: '$18,450',
  monthlyGrowth: '+14.2%',
  avgEngagement: '6.8%',
};

export const initialContentItems: ContentItem[] = [
  {
    id: 'c1',
    title: 'How I Built My Entire 6-Figure Studio Setup in 2026',
    platform: 'youtube',
    status: 'scheduled',
    scheduledDate: 'Tomorrow at 10:00 AM',
    thumbnailGradient: 'from-pink-600 via-rose-500 to-amber-500',
    viewsEstimate: '74,000 views',
    sponsorName: 'Lumina Studio Audio',
    sponsorPayout: '$3,200',
    caption: 'Full breakdown of the cameras, acoustic baffling, and software tools running my production workflow this year. Links + discounts below! 🎙️✨',
    tags: ['#StudioTour', '#CreatorEconomy', '#TechSetup'],
  },
  {
    id: 'c2',
    title: '3 Micro-Interactions Every UI Designer Overlooks',
    platform: 'tiktok',
    status: 'published',
    scheduledDate: 'Published yesterday',
    thumbnailGradient: 'from-violet-600 via-purple-600 to-indigo-600',
    viewsEstimate: '210,000 views',
    caption: 'Stop using generic easing curves! Here is the exact spring bezier curve I use in production prototypes. Try this today!',
    tags: ['#UIUX', '#DesignTips', '#FigmaHacks'],
  },
  {
    id: 'c3',
    title: 'Issue #48: The Death of Boring Portfolios',
    platform: 'newsletter',
    status: 'published',
    scheduledDate: 'Sent Thursday',
    thumbnailGradient: 'from-amber-500 via-orange-500 to-rose-600',
    viewsEstimate: '18,400 opens (54.2% rate)',
    sponsorName: 'Figma Community',
    sponsorPayout: '$1,500',
    caption: 'Why hiring managers are skipping case study essays and reviewing interactive interactive Figma prototypes instead.',
    tags: ['#CareerGrowth', '#DesignNewsletter', '#Substack'],
  },
  {
    id: 'c4',
    title: 'Ep. 34: Negotiating $10k+ Brand Deals Without an Agent',
    platform: 'podcast',
    status: 'draft',
    scheduledDate: 'Drafting (Target: Next Tuesday)',
    thumbnailGradient: 'from-fuchsia-600 via-pink-600 to-rose-500',
    viewsEstimate: '32,000 downloads',
    sponsorName: 'Stripe for Creators',
    sponsorPayout: '$2,800',
    caption: 'Interview with senior talent manager Sarah Ross on usage rights, whitelisting fees, and net-30 payment terms.',
    tags: ['#Podcast', '#BrandDeals', '#CreatorIncome'],
  },
  {
    id: 'c5',
    title: 'Behind the Scenes: 48-Hour Hackathon VLOG',
    platform: 'youtube',
    status: 'draft',
    scheduledDate: 'Rough Cut in Review',
    thumbnailGradient: 'from-cyan-600 via-blue-600 to-violet-600',
    viewsEstimate: '52,000 views',
    caption: 'Can a solo designer build an AI landing page generator in a weekend? Watch the full chaos unfold.',
    tags: ['#Devlog', '#BuildInPublic', '#DesignChallenge'],
  },
  {
    id: 'c6',
    title: 'Color Palettes Inspired by Cyberpunk Tokyo',
    platform: 'instagram',
    status: 'scheduled',
    scheduledDate: 'Friday at 6:30 PM',
    thumbnailGradient: 'from-purple-600 via-pink-500 to-rose-400',
    viewsEstimate: '45,000 reach',
    caption: 'Swipe right for 5 hex color harmonies extracted from neon street photography in Shinjuku. Save this for your next moodboard! 🎨',
    tags: ['#ColorInspiration', '#VisualDesign', '#DesignInspo'],
  },
];

export const sampleCampaigns: BrandCampaign[] = [
  {
    id: 'camp-1',
    brand: 'Lumina Studio Audio',
    deliverable: '60s Dedicated YouTube Segment + Short',
    payout: '$3,200',
    status: 'Scheduled',
    dueDate: 'Nov 24',
    tasks: [
      { id: 't1', title: 'Product unboxing & acoustic audio test', completed: true },
      { id: 't2', title: 'Script talking points & submit for brand sign-off', completed: true },
      { id: 't3', title: 'Embed tracking affiliate link in description', completed: true },
      { id: 't4', title: 'Verify 30-day analytics report submission', completed: false },
    ],
  },
  {
    id: 'camp-2',
    brand: 'Figma Community',
    deliverable: 'Newsletter Banner + Twitter/X Thread',
    payout: '$1,500',
    status: 'Drafting',
    dueDate: 'Dec 02',
    tasks: [
      { id: 't5', title: 'Curate 4 community plugin spotlights', completed: true },
      { id: 't6', title: 'Draft newsletter copy & custom mockup banner', completed: false },
      { id: 't7', title: 'Schedule Twitter preview thread', completed: false },
    ],
  },
  {
    id: 'camp-3',
    brand: 'Stripe for Creators',
    deliverable: 'Podcast Pre-Roll & Host Read',
    payout: '$2,800',
    status: 'In Review',
    dueDate: 'Dec 10',
    tasks: [
      { id: 't8', title: 'Record host endorsement audio take', completed: true },
      { id: 't9', title: 'Upload WAV file to podcast ad injection server', completed: false },
    ],
  },
];

export const audienceGrowthData: AudienceGrowthPoint[] = [
  { month: 'Jun', youtube: 180, tiktok: 120, newsletter: 8.4 },
  { month: 'Jul', youtube: 215, tiktok: 155, newsletter: 10.2 },
  { month: 'Aug', youtube: 260, tiktok: 195, newsletter: 12.8 },
  { month: 'Sep', youtube: 310, tiktok: 250, newsletter: 14.9 },
  { month: 'Oct', youtube: 380, tiktok: 330, newsletter: 16.5 },
  { month: 'Nov', youtube: 482, tiktok: 410, newsletter: 18.4 },
];

export const featuresList: FeatureItem[] = [
  {
    icon: 'Calendar',
    title: 'Unified Content Calendar',
    description: 'Schedule YouTube videos, TikTok clips, newsletters, and podcasts from one synchronized drag-and-drop workspace.',
    highlight: 'Multi-platform scheduling matrix',
  },
  {
    icon: 'BarChart2',
    title: 'Real Audience Intelligence',
    description: 'Track aggregate reach, true watch-time retention, and cross-platform follower growth without juggling 6 separate analytics apps.',
    highlight: 'Cross-channel engagement score',
  },
  {
    icon: 'Briefcase',
    title: 'Brand Partnership CRM',
    description: 'Manage sponsor pipelines, contracts, deliverables, rate cards, and invoice payment statuses in one organized hub.',
    highlight: 'Deliverables & invoice tracking',
  },
  {
    icon: 'DollarSign',
    title: 'Multi-Stream Monetization',
    description: 'Consolidate YouTube AdSense, brand sponsorships, digital product sales, and newsletter subscriptions into one net revenue dashboard.',
    highlight: 'Unified income telemetry',
  },
  {
    icon: 'Sparkles',
    title: 'Idea-to-Publish Workflow',
    description: 'Capture voice memos, draft captions, plan B-roll shots, and assign tasks to editors with automated status transitions.',
    highlight: 'Editor collaboration pipeline',
  },
  {
    icon: 'FolderHeart',
    title: 'Creator Asset Vault',
    description: 'Store high-res logo lockups, media kits, sound effects, brand guidelines, and affiliate link codes accessible anywhere.',
    highlight: 'One-click media kit sharing',
  },
];

export const createToGrowSteps = [
  {
    step: '01',
    title: 'Plan & Ideate',
    description: 'Log creative sparks, organize content pillars, and balance platform formats across your monthly calendar.',
    tag: 'Idea Board & Moodboards',
  },
  {
    step: '02',
    title: 'Produce & Script',
    description: 'Draft video outlines, teleprompter scripts, and sponsor talking points with built-in timing markers.',
    tag: 'Scripting Workspace',
  },
  {
    step: '03',
    title: 'Distribute & Publish',
    description: 'Generate platform-optimized aspect ratios, custom captions, hashtags, and schedule releases at peak follower hours.',
    tag: 'Auto-timing Dispatch',
  },
  {
    step: '04',
    title: 'Measure & Understand',
    description: 'Pinpoint which hooks hooked viewers, which topics exploded, and where audience retention dropped off.',
    tag: 'Hook Drop-off Telemetry',
  },
  {
    step: '05',
    title: 'Monetize & Scale',
    description: 'Turn viral impressions into brand deal proposals, recurring memberships, and long-term creative equity.',
    tag: 'Automated Rate Card Calculator',
  },
];

export const creatorCategories: CreatorCategory[] = [
  {
    category: 'Video Creators & YouTubers',
    headline: 'From thumbnail A/B tests to brand deal delivery.',
    description: 'Designed for high-output video storytellers who need tight editing deadlines, sponsor approval workflows, and YouTube analytics.',
    channels: ['YouTube Longform', 'YouTube Shorts', 'Instagram Reels'],
    primaryMonetization: 'AdSense + Integrated Brand Sponsorships',
    sampleWorkflow: 'Idea → Rough Cut → Brand Sponsor Approval → Scheduled Premiere',
  },
  {
    category: 'Writers & Newsletter Authors',
    headline: 'Build an owned audience that nobody can deplatform.',
    description: 'Manage weekly edition drafts, open-rate metrics, subscriber tier segmentation, and native sponsorship insertions.',
    channels: ['Substack / Beehiiv', 'Twitter / X Threads', 'LinkedIn Longform'],
    primaryMonetization: 'Paid Subscriptions + Newsletter Advertisements',
    sampleWorkflow: 'Research → Deep-Dive Draft → Peer Review → Subscriber Send',
  },
  {
    category: 'Podcasters & Audio Hosts',
    headline: 'Sync guest booking, episode notes, and audio sponsors.',
    description: 'Track download numbers across Apple Podcasts and Spotify, organize host-read scripts, and package video snippets for social.',
    channels: ['Spotify', 'Apple Podcasts', 'YouTube Video Podcast'],
    primaryMonetization: 'Dynamic Pre-Rolls + Live Event Sponsorships',
    sampleWorkflow: 'Guest Booking → Recording → Show Notes → Audio RSS Release',
  },
  {
    category: 'Educators & Course Creators',
    headline: 'Transform your professional expertise into scalable assets.',
    description: 'Plan educational curriculum, coordinate student cohorts, collect testimonials, and manage workshop launches.',
    channels: ['Cohorts', 'Discord Community', 'YouTube Tutorials'],
    primaryMonetization: 'Course Enrollments + Digital Downloadable Kits',
    sampleWorkflow: 'Curriculum Roadmap → Video Modules → Community Cohort Onboarding',
  },
  {
    category: 'Streamers & Live Broadcasters',
    headline: 'Real-time schedule broadcasts and clip distribution.',
    description: 'Never miss a stream schedule. Auto-transcribe live moments, convert highlight clips into TikToks, and showcase gaming sponsors.',
    channels: ['Twitch', 'Kick', 'TikTok Live'],
    primaryMonetization: 'Channel Subscriptions + Bits / Superchats + Hardware Sponsors',
    sampleWorkflow: 'Broadcast Schedule → Live Stream → Highlight Reel Slicing → Viral Shorts',
  },
  {
    category: 'Multi-Platform Hybrid Creators',
    headline: 'The all-in-one studio OS for full-time creative businesses.',
    description: 'Coordinate editors, thumbnail designers, managers, and sponsor agents across multiple active channels in one shared view.',
    channels: ['Omni-Channel Matrix (5+ Networks)'],
    primaryMonetization: 'Diversified Ecosystem: Products + Ads + Partnerships',
    sampleWorkflow: 'Master Campaign Board → Cross-Platform Content Cascade',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Solo Creator',
    priceMonthly: '$19',
    period: '/ month',
    description: 'Everything a rising independent creator needs to organize their weekly content schedule and track audience growth.',
    features: [
      'Connect up to 3 social accounts',
      'Unified drag-and-drop content calendar',
      'Basic audience growth charts',
      'Idea board & script scratchpad',
      'Standard video thumbnail previewer',
      'Mobile web progressive app access',
    ],
    cta: 'Start 14-Day Free Trial',
    popular: false,
  },
  {
    name: 'Creator Pro',
    priceMonthly: '$49',
    period: '/ month',
    description: 'Our most popular plan for full-time creators managing multiple channels, sponsor contracts, and active monetization.',
    features: [
      'Connect unlimited social platforms',
      'Full brand sponsorship CRM & rate cards',
      'Cross-platform audience retention analytics',
      'Automated media kit generation with live stats',
      'Up to 3 team members (Editor + Manager seats)',
      'Deliverables checklist & invoice tracker',
      'Priority creator support',
    ],
    cta: 'Build Your Creator Hub',
    popular: true,
  },
  {
    name: 'Studio & Agency',
    priceMonthly: '$129',
    period: '/ month',
    description: 'Built for high-volume production studios, podcast networks, and creator agencies managing talent rosters.',
    features: [
      'Manage up to 10 distinct creator profiles',
      'Multi-creator calendar federation',
      'Advanced agency permission & approval roles',
      'Custom branded client review portals',
      'Automated sponsor contract generation',
      'Dedicated account manager & Slack sync',
      'Custom API data ingestion',
    ],
    cta: 'Explore Studio Edition',
    popular: false,
  },
];

export const faqItems: FAQItem[] = [
  {
    question: 'How does CreatorHub connect to YouTube, TikTok, and social platforms?',
    answer: 'CreatorHub connects via official platform APIs using read-only analytics permissions and verified OAuth tokens. We never ask for your account password or unauthorized administrative access.',
  },
  {
    question: 'Can I draft and edit content collaboratively with my video editor?',
    answer: 'Yes! Creator Pro and Studio plans include dedicated team seats for video editors, thumbnail artists, and talent managers. You can leave timestamped comments on rough cuts and assign caption revisions.',
  },
  {
    question: 'How does the Brand Partnership CRM help me earn more on sponsorships?',
    answer: 'CreatorHub includes a built-in Rate Card Calculator based on your verified average 30-day views, platform CPMs, and engagement rate. It generates a live, password-protected Media Kit link you can email directly to brand marketing managers.',
  },
  {
    question: 'Can I schedule and auto-publish content directly from CreatorHub?',
    answer: 'Yes, for supported platforms with open publishing APIs (YouTube, Substack, Twitter, LinkedIn). For platforms requiring mobile push notifications (like TikTok and Instagram Collabs), CreatorHub dispatches a synchronized reminder directly to your phone.',
  },
  {
    question: 'How is monetization tracked across AdSense, brand deals, and products?',
    answer: 'CreatorHub consolidates your monthly income streams into one reconciled financial overview. You can log brand deal contracts, connect your Stripe account, and see your exact net monthly earnings without spreadsheet errors.',
  },
  {
    question: 'Is the data in the interactive Creator Studio demo real?',
    answer: 'No. The interactive studio uses an illustrative demonstration creator persona (Maya Lin) to showcase scheduling workflows, status transitions, and campaign checklists safely in your browser.',
  },
];
