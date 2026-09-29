// Mock data for HireFlow

export const candidates = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Senior Product Designer',
    matchScore: 94,
    skills: ['Figma', 'UX Research', 'Product Design'],
    status: 'Interview Ready',
    experience: '7 years',
    location: 'New York',
    availability: '2 weeks'
  },
  {
    id: 2,
    name: 'Alex Morgan',
    role: 'Frontend Engineer',
    matchScore: 91,
    skills: ['React', 'TypeScript', 'Next.js'],
    status: 'Recommended',
    experience: '5 years',
    location: 'San Francisco',
    availability: '3 weeks'
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Product Manager',
    matchScore: 87,
    skills: ['Strategy', 'Analytics', 'Roadmapping'],
    status: 'Screening',
    experience: '6 years',
    location: 'Austin',
    availability: '4 weeks'
  }
];

export const metrics = {
  screening: '4.8×',
  screeningLabel: 'Faster candidate screening',
  review: '72%',
  reviewLabel: 'Less manual resume review',
  hiring: '38%',
  hiringLabel: 'Shorter hiring cycles',
  accuracy: '94%',
  accuracyLabel: 'Candidate matching accuracy'
};

export const pipelineStages = [
  { name: 'Applied', count: 142, color: '#e2e8f0' },
  { name: 'AI Screening', count: 89, color: '#ddd6fe' },
  { name: 'Shortlisted', count: 34, color: '#c4b5fd' },
  { name: 'Interview', count: 18, color: '#a78bfa' },
  { name: 'Offer', count: 5, color: '#8b5cf6' }
];

export const testimonials = [
  {
    quote: 'HireFlow helped us turn a chaotic recruiting workflow into something our entire team could actually understand.',
    name: 'Maya Patel',
    role: 'Head of Talent',
    company: 'TechFlow',
    avatar: 'MP'
  },
  {
    quote: 'The candidate matching experience gives our recruiters a much clearer starting point.',
    name: 'Daniel Carter',
    role: 'VP People',
    company: 'InnovateCo',
    avatar: 'DC'
  },
  {
    quote: 'Instead of spending hours searching through resumes, our team can focus on conversations with candidates.',
    name: 'Emily Rodriguez',
    role: 'Recruiting Lead',
    company: 'GrowthLabs',
    avatar: 'ER'
  }
];

export const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    period: '/ user / month',
    description: 'For small recruiting teams',
    features: [
      'AI resume screening',
      'Candidate pipeline',
      'Basic analytics',
      'Interview scheduling',
      'Email support'
    ],
    cta: 'Start Free',
    highlighted: false
  },
  {
    name: 'Growth',
    price: '$79',
    period: '/ user / month',
    description: 'For growing hiring teams',
    features: [
      'Everything in Starter',
      'Candidate matching',
      'AI interview insights',
      'Advanced analytics',
      'Integrations',
      'Priority support'
    ],
    cta: 'Start Hiring',
    highlighted: true,
    badge: 'MOST POPULAR'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Everything in Growth',
      'Custom workflows',
      'Advanced permissions',
      'Enterprise integrations',
      'Dedicated support',
      'SLA guarantee'
    ],
    cta: 'Talk to Sales',
    highlighted: false
  }
];

export const faqs = [
  {
    question: 'What is HireFlow?',
    answer: 'HireFlow is an AI-powered recruitment platform that helps hiring teams screen resumes, match candidates to roles, schedule interviews, manage pipelines, and gain insights from interview conversations.'
  },
  {
    question: 'How does AI resume screening work?',
    answer: 'HireFlow analyzes resumes against your job requirements, extracting skills, experience, and qualifications. It surfaces the most relevant candidates based on role alignment rather than simple keyword matching.'
  },
  {
    question: 'Can I customize candidate matching?',
    answer: 'Yes. You can define specific skills, experience levels, and role requirements for each position. HireFlow uses these criteria to generate match scores and rankings.'
  },
  {
    question: 'Does HireFlow integrate with calendars?',
    answer: 'HireFlow integrates with Google Calendar, Microsoft Outlook, and other scheduling tools to streamline interview coordination between candidates and hiring teams.'
  },
  {
    question: 'Can multiple recruiters collaborate?',
    answer: 'Absolutely. HireFlow supports team collaboration with shared candidate pipelines, comments, interview feedback, and role-based permissions.'
  },
  {
    question: 'How does HireFlow handle candidate data?',
    answer: 'HireFlow uses encryption for data in transit and at rest, maintains SOC 2 Type II compliance, and follows strict data protection standards to keep candidate information secure.'
  },
  {
    question: 'Can I use HireFlow with my existing ATS?',
    answer: 'Yes. HireFlow integrates with popular ATS platforms like Greenhouse and Workday, allowing you to keep your existing workflows while adding AI-powered capabilities.'
  },
  {
    question: 'Does AI make the hiring decision?',
    answer: 'No. HireFlow provides AI-assisted insights and recommendations, but all hiring decisions remain with human recruiters and hiring managers. AI supports your judgment, it doesn\'t replace it.'
  }
];

export const integrations = [
  'LinkedIn',
  'Slack',
  'Google Calendar',
  'Microsoft Teams',
  'Gmail',
  'Outlook',
  'Greenhouse',
  'Workday'
];

export const trustedCompanies = ['NOVA', 'Vercel', 'Linear', 'Loom', 'Notion'];

export const analytics = {
  openRoles: 24,
  activeCandidates: 1284,
  interviewsThisWeek: 86,
  avgTimeToHire: 18
};
