export const templateCategories = [
  'All Templates',
  'Feedback',
  'Events',
  'Lead Gen',
  'Hiring',
  'Surveys'
];

export const templatesData = [
  {
    id: 'customer-feedback',
    title: 'Customer Feedback',
    category: 'Feedback',
    responses: '48.2k',
    rating: '4.9',
    description: 'Measure Net Promoter Score (NPS), sentiment, and feature satisfaction with intelligent skip logic.',
    accentColor: '#6366F1',
    accentBg: '#F5F3FF',
    tag: 'Popular',
    fields: [
      { label: 'Overall Experience', type: 'rating', placeholder: '★★★★★ 5-Star Rating' },
      { label: 'What could we improve?', type: 'textarea', placeholder: 'Be as candid as you want...' },
      { label: 'Would you recommend us?', type: 'nps', placeholder: 'Scale 0 to 10' }
    ]
  },
  {
    id: 'event-registration',
    title: 'Event Registration',
    category: 'Events',
    responses: '29.4k',
    rating: '4.8',
    description: 'Collect attendee RSVP, workshop selections, dietary requirements, and custom ticket tiers.',
    accentColor: '#EC4899',
    accentBg: '#FDF2F8',
    tag: 'Trending',
    fields: [
      { label: 'Full Name & Company', type: 'text', placeholder: 'Alex Johnson • Acme Corp' },
      { label: 'Work Email', type: 'email', placeholder: 'alex@company.com' },
      { label: 'Breakout Session', type: 'select', placeholder: 'AI Workflows & Automation' },
      { label: 'Dietary Preferences', type: 'radio', placeholder: 'Vegetarian / Gluten-Free' }
    ]
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    category: 'Lead Gen',
    responses: '64.1k',
    rating: '5.0',
    description: 'High-converting interactive lead capture with multi-step progressive profiling and budget routing.',
    accentColor: '#0EA5E9',
    accentBg: '#EFF6FF',
    tag: 'High Conversion',
    fields: [
      { label: 'Monthly Form Volume', type: 'select', placeholder: '10,000 - 50,000 responses' },
      { label: 'Primary Use Case', type: 'radio', placeholder: 'Customer Onboarding' },
      { label: 'Team Size', type: 'chips', placeholder: '10-50 • 50-250 • 250+' },
      { label: 'Work Email', type: 'email', placeholder: 'sarah@hypergrowth.io' }
    ]
  },
  {
    id: 'job-application',
    title: 'Job Application',
    category: 'Hiring',
    responses: '18.7k',
    rating: '4.9',
    description: 'Candidate intake with resume drag-and-drop, portfolio links, salary expectations, and skills tags.',
    accentColor: '#10B981',
    accentBg: '#ECFDF5',
    tag: 'HR & People',
    fields: [
      { label: 'Portfolio or GitHub URL', type: 'text', placeholder: 'https://github.com/username' },
      { label: 'Resume / CV', type: 'file', placeholder: 'Drop PDF, DOCX (Max 25MB)' },
      { label: 'Years of Experience', type: 'slider', placeholder: '4 - 7 Years' }
    ]
  },
  {
    id: 'product-survey',
    title: 'Product Survey',
    category: 'Surveys',
    responses: '35.6k',
    rating: '4.8',
    description: 'Deep dive into feature validation, price sensitivity (Van Westendorp), and product discovery.',
    accentColor: '#F59E0B',
    accentBg: '#FEF3C7',
    tag: 'Product Discovery',
    fields: [
      { label: 'Most Used Feature', type: 'select', placeholder: 'Conditional Logic Engine' },
      { label: 'Pain Point Severity', type: 'slider', placeholder: 'Low — Critical' },
      { label: 'Preferred Pricing Model', type: 'radio', placeholder: 'Per Seat / Usage Tier' }
    ]
  },
  {
    id: 'contact-form',
    title: 'Contact Form',
    category: 'Lead Gen',
    responses: '92.0k',
    rating: '4.9',
    description: 'Modern sleek contact widget with spam protection, urgent priority routing, and calendar booking.',
    accentColor: '#8B5CF6',
    accentBg: '#F3E8FF',
    tag: 'Essential',
    fields: [
      { label: 'How can we help?', type: 'select', placeholder: 'Sales Inquiry / Enterprise Demo' },
      { label: 'Your Message', type: 'textarea', placeholder: 'Tell us about your team and goals...' },
      { label: 'Preferred Response Channel', type: 'radio', placeholder: 'Email / Slack Connect' }
    ]
  }
];
