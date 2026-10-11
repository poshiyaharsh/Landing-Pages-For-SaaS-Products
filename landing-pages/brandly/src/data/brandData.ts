import { 
  BrandKitIdentity, 
  BrandAsset, 
  BrandGuidelineSection, 
  TemplateItem, 
  TeamMember, 
  ActivityEvent, 
  PricingPlan, 
  Testimonial, 
  FAQItem 
} from '../types';

export const TRUST_BRANDS = [
  { name: 'ATELIER', descriptor: 'Creative Direction' },
  { name: 'FORMA', descriptor: 'Spatial Studio' },
  { name: 'MONOGRAPH', descriptor: 'Editorial Press' },
  { name: 'STUDIO NOIR', descriptor: 'High Fashion' },
  { name: 'OBJECTS', descriptor: 'Industrial Design' },
  { name: 'COMMON FORM', descriptor: 'Contemporary Goods' }
];

export const BRAND_IDENTITIES: BrandKitIdentity[] = [
  {
    id: 'maison-form',
    name: 'Maison Form',
    category: 'Contemporary Lifestyle',
    tagline: 'Quietly expressive objects for considered living.',
    description: 'A contemporary homeware studio celebrating ceramic craft, organic silhouettes, and muted architectural tones.',
    featuredVisual: '/images/maison-form.jpg',
    visualDirection: 'Warm neutrals, sculptural objects, understated serif typography, premium packaging.',
    palette: [
      { name: 'Porcelain', hex: '#F9F8F5', role: 'Base Canvas' },
      { name: 'Warm Charcoal', hex: '#2A2927', role: 'Display Ink' },
      { name: 'Dune Sand', hex: '#DED5C6', role: 'Surface Secondary' },
      { name: 'Muted Olive', hex: '#777B65', role: 'Seasonal Accent' }
    ],
    typography: [
      { role: 'Display Serif', family: 'Playfair Display', sample: 'Quiet Expression' },
      { role: 'Body Sans', family: 'Plus Jakarta Sans', sample: 'Considered form and tactile living' }
    ],
    assetsCount: 142,
    guidelinesCount: 18,
    templatesCount: 26
  },
  {
    id: 'solenne',
    name: 'Solenne',
    category: 'Clean Beauty & Skin',
    tagline: 'Pure botanicals distilled into essential daily rituals.',
    description: 'An organic botanical skincare atelier focused on cold-pressed serums, frosted glass packaging, and morning radiance.',
    featuredVisual: '/images/solenne.jpg',
    visualDirection: 'Soft cream, muted rose, refined packaging, elegant typography.',
    palette: [
      { name: 'Soft Cream', hex: '#FAF6F0', role: 'Primary Tint' },
      { name: 'Muted Rose', hex: '#D6A99A', role: 'Brand Core' },
      { name: 'Clay Taupe', hex: '#B59F8E', role: 'Packaging Paper' },
      { name: 'Deep Espresso', hex: '#241E1A', role: 'Typography' }
    ],
    typography: [
      { role: 'Display Serif', family: 'Cormorant Garamond', sample: 'Botanical Radiance' },
      { role: 'Clean Sans', family: 'Inter', sample: 'Minimalist formulation standards' }
    ],
    assetsCount: 88,
    guidelinesCount: 12,
    templatesCount: 19
  },
  {
    id: 'common-ground',
    name: 'Common Ground',
    category: 'Specialty Coffee Roasters',
    tagline: 'Single origin harvests roasted with quiet discipline.',
    description: 'A third-wave micro-roastery championing direct farmer partnerships, tactile unbleached paper packaging, and slow pour-overs.',
    featuredVisual: '/images/hero-workspace.jpg',
    visualDirection: 'Earthy tones, contemporary typography, textured paper, minimal packaging.',
    palette: [
      { name: 'Oatmeal Paper', hex: '#EBE4D5', role: 'Substrate' },
      { name: 'Roasted Umber', hex: '#443429', role: 'Primary Mark' },
      { name: 'Warm Terracotta', hex: '#B86F52', role: 'Roast Tag' },
      { name: 'Forest Moss', hex: '#58634D', role: 'Origin Accent' }
    ],
    typography: [
      { role: 'Modern Serif', family: 'Playfair Display', sample: 'Origin Notes' },
      { role: 'Technical Mono', family: 'JetBrains Mono', sample: 'Elevation 1,950m · Natural' }
    ],
    assetsCount: 116,
    guidelinesCount: 15,
    templatesCount: 24
  },
  {
    id: 'studio-forma',
    name: 'Studio Forma',
    category: 'Architecture & Spatial Design',
    tagline: 'Monumental spaces defined by silence and daylight.',
    description: 'A minimalist architectural practice focused on cast-in-place concrete residences, brutalist proportions, and natural light wells.',
    featuredVisual: '/images/hero-workspace.jpg',
    visualDirection: 'Monochrome layouts, architectural photography, strict grids.',
    palette: [
      { name: 'Raw Concrete', hex: '#D3CECA', role: 'Spatial Base' },
      { name: 'Charcoal Shadow', hex: '#1C1B1A', role: 'Structural Lines' },
      { name: 'Lapis Accent', hex: '#4A5B6C', role: 'Technical Plan' },
      { name: 'Pure White', hex: '#FFFFFF', role: 'Negative Space' }
    ],
    typography: [
      { role: 'Architectural Sans', family: 'Plus Jakarta Sans', sample: 'AXIS & PROPORTION' },
      { role: 'Editorial Display', family: 'Playfair Display', sample: 'Brutalist Harmony' }
    ],
    assetsCount: 95,
    guidelinesCount: 20,
    templatesCount: 18
  },
  {
    id: 'sunday-objects',
    name: 'Sunday Objects',
    category: 'Home Goods & Furniture',
    tagline: 'Tactile heirloom goods for unhurried weekends.',
    description: 'Solid walnut joinery, hand-spun linen textiles, and cast bronze hardware made by independent European workshops.',
    featuredVisual: '/images/maison-form.jpg',
    visualDirection: 'Warm natural lighting, tactile materials, muted colors.',
    palette: [
      { name: 'Linen Weave', hex: '#ECE6DC', role: 'Surface' },
      { name: 'Oiled Walnut', hex: '#3B2F27', role: 'Hero Mark' },
      { name: 'Aged Brass', hex: '#C29F62', role: 'Hardware Foil' },
      { name: 'Chalk Beige', hex: '#F5F2EC', role: 'Background' }
    ],
    typography: [
      { role: 'Editorial Serif', family: 'Playfair Display', sample: 'Handcrafted Heritage' },
      { role: 'Modern Sans', family: 'Plus Jakarta Sans', sample: 'Solid timber joinery and woven flax' }
    ],
    assetsCount: 134,
    guidelinesCount: 16,
    templatesCount: 22
  },
  {
    id: 'noire-atelier',
    name: 'Noire Atelier',
    category: 'Haute Horlogerie & Fashion',
    tagline: 'Precision tailoring meeting high-contrast silhouettes.',
    description: 'Parisian fashion atelier combining sharp architectural tailoring, wool gabardine fabrics, and cinematic monochrome aesthetics.',
    featuredVisual: '/images/hero-workspace.jpg',
    visualDirection: 'High-contrast black and white, cinematic photography, elegant typography.',
    palette: [
      { name: 'Obsidian Black', hex: '#111111', role: 'Primary Ground' },
      { name: 'Stark White', hex: '#FAF9F6', role: 'Contrast Display' },
      { name: 'Silver Foil', hex: '#C4C2BE', role: 'Emboss Finish' },
      { name: 'Smoked Quartz', hex: '#48443F', role: 'Detail Tone' }
    ],
    typography: [
      { role: 'Haute Serif', family: 'Playfair Display', sample: 'COLLECTION AUTOMNE' },
      { role: 'Restrained Sans', family: 'Plus Jakarta Sans', sample: 'Architectural silhouette cuts' }
    ],
    assetsCount: 168,
    guidelinesCount: 24,
    templatesCount: 35
  }
];

export const INITIAL_ASSETS: BrandAsset[] = [
  {
    id: 'ast-01',
    name: 'Maison Form Primary Wordmark',
    category: 'Logos',
    format: 'SVG',
    size: '18 KB',
    updatedDate: 'Oct 8, 2026',
    isFavorite: true,
    version: 'v2.4 (Approved)',
    dimensions: 'Vector · Infinite Scalability',
    colorHex: '#191919',
    description: 'Master typographic vector wordmark with custom kerning for primary digital and print header applications.'
  },
  {
    id: 'ast-02',
    name: 'Editorial Ceramic Vessel Still Life',
    category: 'Photography',
    format: 'JPG',
    size: '14.2 MB',
    updatedDate: 'Oct 6, 2026',
    isFavorite: true,
    version: 'v1.1 (High-Res)',
    dimensions: '5840 × 3893 px',
    previewImage: '/images/maison-form.jpg',
    description: 'Primary hero photography featuring sculptural vessel on travertine pedestal under diffused daylight.'
  },
  {
    id: 'ast-03',
    name: 'Instagram Editorial Story Carousel Kit',
    category: 'Templates',
    format: 'FIG',
    size: '2.8 MB',
    updatedDate: 'Oct 4, 2026',
    isFavorite: false,
    version: 'v3.0',
    dimensions: '1080 × 1920 px (9:16)',
    colorHex: '#E8DFD2',
    description: '6-slide sequential narrative template for weekly product drops and design studio vignettes.'
  },
  {
    id: 'ast-04',
    name: 'Brand Identity Standards & Guidelines',
    category: 'Documents',
    format: 'PDF',
    size: '8.4 MB',
    updatedDate: 'Sep 29, 2026',
    isFavorite: true,
    version: 'v4.0 (Final Sign-off)',
    dimensions: 'A4 Landscape · 48 Pages',
    colorHex: '#33312E',
    description: 'Comprehensive brand manual covering logo clear space, grid scales, color matrices, and editorial tone.'
  },
  {
    id: 'ast-05',
    name: 'Minimal Monogram Emblem Icon',
    category: 'Icons',
    format: 'SVG',
    size: '12 KB',
    updatedDate: 'Sep 22, 2026',
    isFavorite: false,
    version: 'v1.2',
    dimensions: 'Vector · 24 × 24 px baseline',
    colorHex: '#777B65',
    description: 'Geometric interlocking B emblem optimized for 16px to 64px micro-touchpoints and app favicons.'
  },
  {
    id: 'ast-06',
    name: 'Solenne Botanical Serum Macro Bottle',
    category: 'Photography',
    format: 'JPG',
    size: '18.6 MB',
    updatedDate: 'Sep 18, 2026',
    isFavorite: true,
    version: 'v2.0',
    dimensions: '6000 × 4000 px',
    previewImage: '/images/solenne.jpg',
    description: 'Clean beauty product bottle hero photography with gentle sunlight refractions and linen textiles.'
  },
  {
    id: 'ast-07',
    name: 'Keynote Presentation Investor Deck',
    category: 'Templates',
    format: 'PDF',
    size: '11.5 MB',
    updatedDate: 'Sep 14, 2026',
    isFavorite: false,
    version: 'v2.1',
    dimensions: '1920 × 1080 px (16:9)',
    colorHex: '#B8ADA0',
    description: '32-slide editorial presentation system featuring financial statement layouts and typography grids.'
  },
  {
    id: 'ast-08',
    name: 'Embossed Stationery & Business Card Spec',
    category: 'Documents',
    format: 'PDF',
    size: '3.1 MB',
    updatedDate: 'Sep 10, 2026',
    isFavorite: false,
    version: 'v1.0 (Print-Ready)',
    dimensions: '85 × 55 mm · CMYK + Spot UV',
    colorHex: '#E8DFD2',
    description: 'Die-cut specifications, foil stamp tolerances, and paper stock weights for tactile brand stationery.'
  },
  {
    id: 'ast-09',
    name: 'Secondary Stacked Seal Lockup',
    category: 'Logos',
    format: 'SVG',
    size: '22 KB',
    updatedDate: 'Aug 28, 2026',
    isFavorite: false,
    version: 'v1.4',
    dimensions: 'Vector · Square lockup',
    colorHex: '#191919',
    description: 'Circular heritage seal with established date stamp for wax stamps, garment tags, and packaging tape.'
  },
  {
    id: 'ast-10',
    name: 'Studio Workspace Flatlay & Fabric Swatch',
    category: 'Photography',
    format: 'JPG',
    size: '21.0 MB',
    updatedDate: 'Aug 20, 2026',
    isFavorite: true,
    version: 'v1.0',
    dimensions: '6240 × 4160 px',
    previewImage: '/images/hero-workspace.jpg',
    description: 'Curated creative director flatlay showcasing stationery cards, brass clips, and woven linen fabrics.'
  },
  {
    id: 'ast-11',
    name: 'Editorial Campaign Billboard Asset',
    category: 'Templates',
    format: 'FIG',
    size: '4.6 MB',
    updatedDate: 'Aug 14, 2026',
    isFavorite: false,
    version: 'v1.8',
    dimensions: '1920 × 1080 px / 1200 × 628 px',
    colorHex: '#777B65',
    description: 'Digital display billboard and press announcement banner with modular typographic layout.'
  },
  {
    id: 'ast-12',
    name: 'Custom Editorial Iconography Suite (48 Icons)',
    category: 'Icons',
    format: 'SVG',
    size: '145 KB',
    updatedDate: 'Aug 05, 2026',
    isFavorite: true,
    version: 'v2.0 Complete',
    dimensions: '24 × 24 px stroke 1.25px',
    colorHex: '#33312E',
    description: 'Handcrafted hairline stroke icons for e-commerce, material care, dimensions, and sustainability badges.'
  }
];

export const BRAND_GUIDELINES: BrandGuidelineSection[] = [
  {
    id: '01',
    number: '01',
    title: 'Logo & Clear Space',
    subtitle: 'Preserving optical balance across applications',
    summary: 'The Brandly and Maison Form wordmarks rely on deliberate negative space. The exclusion zone ensures no competing typography or graphic elements crowd the mark.',
    keyRule: 'Exclusion boundary equals 1.5× the height of the capital letter "M" on all four bounding borders.',
    specs: [
      { label: 'Minimum Digital Size', value: '110px width' },
      { label: 'Minimum Print Size', value: '24mm width' },
      { label: 'Clear Space Margin', value: '1.5× "M" Cap Height' },
      { label: 'Aspect Lock', value: 'Fixed 4.2:1 Ratio' }
    ],
    dos: [
      'Maintain adequate breathing room against full-bleed imagery',
      'Use the monochrome soft-white mark on dark charcoal backgrounds',
      'Align wordmark with the primary grid column edge'
    ],
    donts: [
      'Never stretch, slant, or distort letter proportions',
      'Never apply drop shadows, glows, or bevel filters',
      'Never place low-contrast ink on mid-tone photography'
    ]
  },
  {
    id: '02',
    number: '02',
    title: 'Color Palette & Hierarchy',
    subtitle: 'Calibrated editorial tones and tactile neutrals',
    summary: 'Our color system is built on warm ivory paper bases, ink black typography, and subtle champagne beige accents. It rejects artificial neon or generic SaaS blues in favor of museum-grade materials.',
    keyRule: '60% Warm Ivory Canvas, 30% Ink Black Typography, 10% Champagne & Olive Accents.',
    specs: [
      { label: 'Warm Ivory Base', value: '#F8F6F0 (Canvas)' },
      { label: 'Soft White Card', value: '#FFFEFC (Containers)' },
      { label: 'Ink Black', value: '#191919 (Headings & Logos)' },
      { label: 'Champagne Beige', value: '#E8DFD2 (Subtle Accents)' }
    ],
    dos: [
      'Use Warm Ivory as default background to reduce optical fatigue',
      'Limit dark charcoal backgrounds to curated focus sections',
      'Verify 4.5:1 minimum contrast ratio for all body copy'
    ],
    donts: [
      'Never introduce synthetic saturated gradients',
      'Never use pure pure digital blue (#0000FF) or purple',
      'Never invert palette colors arbitrarily across sub-brands'
    ]
  },
  {
    id: '03',
    number: '03',
    title: 'Typography System',
    subtitle: 'Editorial serifs paired with restrained geometric sans',
    summary: 'High contrast display serifs evoke classic European magazine publishing, while the geometric sans ensures effortless legibility on digital screens from smartwatch to 4K monitor.',
    keyRule: 'Headlines strictly set in Playfair Display. Interface controls and metadata strictly set in Plus Jakarta Sans.',
    specs: [
      { label: 'Primary Display', value: 'Playfair Display (Serif)' },
      { label: 'Body & Controls', value: 'Plus Jakarta Sans' },
      { label: 'Metadata & Codes', value: 'JetBrains Mono / Tracking 0.15em' },
      { label: 'Headline Scale', value: '48px - 84px / Tight -0.02em' }
    ],
    dos: [
      'Set editorial quotes and accent words in italic serif',
      'Keep body paragraph line length between 55 and 75 characters',
      'Use uppercase with 0.15em tracking for category badges'
    ],
    donts: [
      'Never set long-form paragraphs in display serif',
      'Never underline headlines with thick lines',
      'Never mix more than two distinct font families on one canvas'
    ]
  },
  {
    id: '04',
    number: '04',
    title: 'Image Direction & Mood',
    subtitle: 'Natural diffused daylight and tactile authenticity',
    summary: 'Visuals must reflect real materials: natural stone, tactile unbleached paper, linen textiles, and authentic workshop craftsmanship. Avoid glossy staged 3D renders or generic smiling corporate stock.',
    keyRule: 'Images must prioritize soft morning/afternoon side-lighting, authentic shadows, and calm composure.',
    specs: [
      { label: 'Lighting Style', value: 'Natural side-window diffusion' },
      { label: 'Color Grading', value: 'Warm organic neutrals (-5% saturation)' },
      { label: 'Composition', value: 'Asymmetrical rule of thirds' },
      { label: 'Depth of Field', value: 'f/2.8 - f/4.0 soft falloff' }
    ],
    dos: [
      'Celebrate organic textures, paper grain, and pottery imperfections',
      'Incorporate subtle negative space around hero objects',
      'Ensure human hands, when shown, convey deliberate craft'
    ],
    donts: [
      'Never use over-saturated studio flash photography',
      'Never feature generic corporate office settings or handshakes',
      'Never apply harsh high-contrast HDR filters'
    ]
  },
  {
    id: '05',
    number: '05',
    title: 'Layout & Spacing Rhythm',
    subtitle: 'Generous whitespace with strict 8pt modular grid',
    summary: 'Whitespace is not empty space—it is the luxury margin that gives ideas room to breathe. Every card, button padding, and margin adheres to an 8-point baseline mathematical rhythm.',
    keyRule: 'All spacing values must be multiples of 8px (8, 16, 24, 32, 48, 64, 96, 128).',
    specs: [
      { label: 'Base Unit', value: '8px increment system' },
      { label: 'Section Gaps', value: '96px - 144px vertical padding' },
      { label: 'Container Max', value: '1360px centered constraint' },
      { label: 'Card Radius', value: '2px - 6px subtle architectural edge' }
    ],
    dos: [
      'Provide generous padding inside cards (32px - 48px)',
      'Align text baselines across adjacent columns',
      'Group related UI elements with 16px - 24px micro-gaps'
    ],
    donts: [
      'Never crowd elements to artificially fill the screen',
      'Never use random non-standard margins like 13px or 37px',
      'Never use bulbous cartoonish border-radii over 12px'
    ]
  },
  {
    id: '06',
    number: '06',
    title: 'Voice & Editorial Tone',
    subtitle: 'Understated confidence, quiet clarity, refined precision',
    summary: 'Brandly speaks with the calm assurance of a master artisan. We avoid breathless tech hype, buzzwords, and exclamation points. Every word is chosen for clarity, elegance, and utility.',
    keyRule: 'Speak with quiet confidence. State facts directly. Respect the user intelligence.',
    specs: [
      { label: 'Tone Profile', value: 'Artisan, Precise, Unhurried' },
      { label: 'Vocabulary', value: 'Considered, Timeless, Architecture' },
      { label: 'Grammar Style', value: 'Oxford comma, active voice' },
      { label: 'Punctuation', value: 'Restrained, never multiple exclamation marks' }
    ],
    dos: [
      'Use short, poetic headlines with evocative cadence',
      'Provide actionable, clear instructions for technical guidance',
      'Emphasize permanence, quality, and craftsmanship'
    ],
    donts: [
      'Never use buzzwords like "supercharge", "10x", or "synergy"',
      'Never use aggressive urgency tactics like "Hurry, expires now!"',
      'Never make unsubstantiated claims about AI or magic automation'
    ]
  }
];

export const TEMPLATES_DATA: TemplateItem[] = [
  {
    id: 'tpl-01',
    title: 'Editorial Instagram Drop Grid',
    category: 'Social Media',
    format: 'Figma & InDesign',
    dimensions: '1080 × 1350 px (4:5)',
    aspectRatio: '4:5',
    description: 'High-fashion editorial layout showcasing product details, material notes, and subtle typography.',
    colorAccent: '#E8DFD2'
  },
  {
    id: 'tpl-02',
    title: 'Studio Pitch & Brand Deck',
    category: 'Presentations',
    format: 'Keynote & Figma',
    dimensions: '1920 × 1080 px (16:9)',
    aspectRatio: '16:9',
    description: '36 carefully balanced slides for client identity presentations, rationale, and rollout budgets.',
    colorAccent: '#777B65'
  },
  {
    id: 'tpl-03',
    title: 'Boutique Press Announcement Banner',
    category: 'Marketing',
    format: 'SVG & Illustrator',
    dimensions: '1200 × 630 px (OG Ratio)',
    aspectRatio: '1.91:1',
    description: 'Distinguished header card for press releases, journal articles, and editorial announcements.',
    colorAccent: '#B8ADA0'
  },
  {
    id: 'tpl-04',
    title: 'Tactile Business Card & Foil Spec',
    category: 'Business Documents',
    format: 'PDF / CMYK Print',
    dimensions: '85 × 55 mm Landscape',
    aspectRatio: '1.54:1',
    description: 'Minimalist double-sided business card layout with spot UV and blind deboss guidelines.',
    colorAccent: '#191919'
  },
  {
    id: 'tpl-05',
    title: 'Seasonal Capsule Campaign Poster',
    category: 'Campaigns',
    format: 'Illustrator & PDF',
    dimensions: 'A1 Exhibition (594 × 841 mm)',
    aspectRatio: '1:1.41',
    description: 'Typographic exhibition poster with stark architectural grid and photography frames.',
    colorAccent: '#33312E'
  },
  {
    id: 'tpl-06',
    title: 'Digital Display Billboard & Ad Unit',
    category: 'Digital Advertising',
    format: 'Figma Component',
    dimensions: '300 × 600 px Half-Page',
    aspectRatio: '1:2',
    description: 'High-conversion aesthetic display banner for luxury consumer goods and premium apps.',
    colorAccent: '#DED5C6'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'usr-01',
    name: 'Helena Lindqvist',
    role: 'Brand Director',
    avatarInitials: 'HL',
    email: 'helena@maisonform.com',
    accessLevel: 'Full Admin',
    activeStatus: 'Active Now'
  },
  {
    id: 'usr-02',
    name: 'Julian Vance',
    role: 'Lead Designer',
    avatarInitials: 'JV',
    email: 'julian@maisonform.com',
    accessLevel: 'Brand Editor',
    activeStatus: 'Active 2h ago'
  },
  {
    id: 'usr-03',
    name: 'Camille Dupuis',
    role: 'Marketing Lead',
    avatarInitials: 'CD',
    email: 'camille@maisonform.com',
    accessLevel: 'Reviewer',
    activeStatus: 'Active Now'
  },
  {
    id: 'usr-04',
    name: 'Studio Noir Partner',
    role: 'External Agency',
    avatarInitials: 'SN',
    email: 'agency@studionoir.fr',
    accessLevel: 'View Only',
    activeStatus: 'Active yesterday'
  }
];

export const ACTIVITY_FEED: ActivityEvent[] = [
  {
    id: 'act-01',
    type: 'update',
    text: 'Primary wordmark updated',
    detail: 'v2.4 pushed with refreshed optical kerning for hero navigation display.',
    user: 'Julian Vance',
    timestamp: '14 minutes ago',
    tag: 'Wordmark'
  },
  {
    id: 'act-02',
    type: 'approval',
    text: 'Autumn Campaign Template approved',
    detail: 'Passed brand compliance check with 100% color contrast adherence.',
    user: 'Helena Lindqvist',
    timestamp: '1 hour ago',
    tag: 'Approval'
  },
  {
    id: 'act-03',
    type: 'update',
    text: 'Brand guidelines revised',
    detail: 'Section 04 (Image Direction) updated with daylight shadow tolerances.',
    user: 'Helena Lindqvist',
    timestamp: '3 hours ago',
    tag: 'Guidelines'
  },
  {
    id: 'act-04',
    type: 'member',
    text: 'Marketing team invited',
    detail: '4 members granted Reviewer access for Q4 catalog asset downloads.',
    user: 'Camille Dupuis',
    timestamp: 'Yesterday at 4:20 PM',
    tag: 'Access'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    tagline: 'For individuals getting organized.',
    priceMonthly: 0,
    priceAnnual: 0,
    description: 'Essential organization for solo creators, freelance art directors, and emerging ventures.',
    features: [
      '1 brand workspace',
      'Basic asset library (up to 500 assets)',
      'Essential brand guidelines document',
      'Limited template collections (12 templates)',
      'Personal workspace with private link sharing',
      'Standard vector & raster file exports'
    ],
    cta: 'Start for Free',
    highlight: false
  },
  {
    id: 'professional',
    name: 'PROFESSIONAL',
    tagline: 'For designers and growing brands.',
    priceMonthly: 19,
    priceAnnual: 15,
    description: 'Full creative control and structured asset workflows for studios and design teams.',
    features: [
      'Multiple brand kits (up to 5 independent brands)',
      'Expanded asset library (unlimited assets)',
      'Advanced organization with custom tags & collections',
      'Complete template collections (all formats)',
      'Team collaboration with 5 active editor seats',
      'Version history and restore points (90 days)',
      'Custom subdomain & client presentation links'
    ],
    cta: 'Choose Professional',
    highlight: true
  },
  {
    id: 'studio',
    name: 'STUDIO',
    tagline: 'For agencies and collaborative teams.',
    priceMonthly: 49,
    priceAnnual: 39,
    description: 'Enterprise-grade governance, client permissions, and multi-brand workspaces.',
    features: [
      'Unlimited brand workspaces & client portals',
      'Shared asset libraries across teams',
      'Granular team permissions & external guest access',
      'Approval workflows & audit logs',
      'Advanced organization with automated color extraction',
      'Priority dedicated studio concierge support',
      'White-label client presentation mode'
    ],
    cta: 'Choose Studio',
    highlight: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-01',
    quote: 'Brandly gives our team one place to find the right assets and stay consistent across every campaign. Our creative velocity doubled the first week.',
    author: 'Helena Lindqvist',
    role: 'Creative Director',
    brand: 'Maison Form',
    avatarSeed: 'HL'
  },
  {
    id: 'test-02',
    quote: 'We finally have a brand workspace that feels as considered as the identities we create. It has completely eliminated lost vectors and outdated decks.',
    author: 'Marco Castelli',
    role: 'Founder & Principal',
    brand: 'Studio Forma',
    avatarSeed: 'MC'
  },
  {
    id: 'test-03',
    quote: 'Everything is easier to find, share, and maintain. Our brand resources finally feel organized, and our retail partners always get the correct assets.',
    author: 'Evelyn Ross',
    role: 'Marketing Lead',
    brand: 'Common Ground',
    avatarSeed: 'ER'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-01',
    question: 'What is Brandly?',
    answer: 'Brandly is a luxury digital brand workspace engineered for creative studios, premium consumer brands, and design teams. It consolidates logos, color palettes, typography, guidelines, and reusable campaign templates into one beautifully curated, easily navigable environment.'
  },
  {
    id: 'faq-02',
    question: 'Who is Brandly designed for?',
    answer: 'Brandly is tailored for creative directors, brand agencies, startups, marketing teams, and freelance designers who care deeply about aesthetic execution, precision typography, and brand consistency across diverse channels.'
  },
  {
    id: 'faq-03',
    question: 'Can I organize multiple brands?',
    answer: 'Yes. With the Professional and Studio plans, you can host separate, isolated workspaces for each client or internal sub-brand. Each workspace maintains its own unique guidelines, assets, access controls, and custom color palettes.'
  },
  {
    id: 'faq-04',
    question: 'Which file types can I store?',
    answer: 'Brandly natively previews and stores vector files (SVG, EPS, AI), high-resolution imagery (JPG, PNG, TIFF, WebP), design prototypes (Figma links, Sketch packages), print standards (PDF), and font files (OTF, TTF, WOFF2).'
  },
  {
    id: 'faq-05',
    question: 'Can my team access shared assets?',
    answer: 'Yes. You can invite team members with granular role-based permissions (Owner, Editor, Reviewer, or View-Only). External agency partners or press contacts can also be granted password-protected or view-only access to specific brand kits.'
  },
  {
    id: 'faq-06',
    question: 'Can I customize brand guidelines?',
    answer: 'Brandly includes an interactive digital brand book builder where you define logo exclusion zones, typography hierarchies, photographic direction, and editorial do/don’t examples without writing custom code.'
  },
  {
    id: 'faq-07',
    question: 'Does Brandly include ready-made templates?',
    answer: 'Yes. Brandly offers an expansive gallery of curated editorial templates—ranging from social media carousel grids and presentation decks to packaging specs and campaign banners—ready for immediate download and brand kit integration.'
  },
  {
    id: 'faq-08',
    question: 'Can I change or cancel my plan anytime?',
    answer: 'Yes. You can upgrade, downgrade, or cancel your subscription at any point from your workspace settings. Billed amounts will adjust automatically with no lock-in contracts or cancellation penalties.'
  },
  {
    id: 'faq-09',
    question: 'Is my brand content private?',
    answer: 'Every workspace is private by default. Assets, guidelines, and internal notes are strictly encrypted and restricted to your authenticated team members until you explicitly choose to generate a public share link.'
  }
];

export const USE_CASES = [
  {
    title: 'Creative Agencies',
    subtitle: 'Client Governance',
    description: 'Manage multiple client identities in isolated workspaces, keeping approved files clean and preventing accidental brand cross-contamination.',
    badge: 'Multi-Tenant',
    metrics: 'Up to 50 client brand kits under 1 dashboard'
  },
  {
    title: 'Marketing Teams',
    subtitle: 'Rapid Campaigns',
    description: 'Instantly access approved campaign photography, color hex codes, and reusable templates without repeatedly pinging design for assets.',
    badge: 'Velocity',
    metrics: 'Zero bottleneck on daily asset requests'
  },
  {
    title: 'Startups & Scaleups',
    subtitle: 'Unified Foundation',
    description: 'Build a coherent, cohesive brand foundation from day one as your engineering and sales teams scale across multiple countries.',
    badge: 'Consistency',
    metrics: 'Single source of truth for all teams'
  },
  {
    title: 'E-commerce Brands',
    subtitle: 'Product & Packaging',
    description: 'Keep high-res packaging specs, seasonal lookbook photography, and typography rules in one accessible cloud destination.',
    badge: 'Lookbooks',
    metrics: 'Direct export of print-ready CMYK assets'
  },
  {
    title: 'Freelance Designers',
    subtitle: 'Client Hand-Off',
    description: 'Deliver stunning, museum-quality interactive brand books to clients instead of messy shared folders with loose ZIP files.',
    badge: 'Client Delight',
    metrics: 'Interactive web handoff link in seconds'
  },
  {
    title: 'Growing Businesses',
    subtitle: 'Cross-Department Alignment',
    description: 'Ensure sales decks, customer support emails, and social media announcements always use the approved font and color standards.',
    badge: 'Governance',
    metrics: 'Self-serve assets with role-based guardrails'
  }
];
