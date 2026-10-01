export const analyticsMetrics = [
  {
    id: 'responses',
    label: 'Total Responses',
    value: '184,920',
    change: '+24.5%',
    isPositive: true,
    timeframe: 'vs last month',
    accentColor: '#6366F1'
  },
  {
    id: 'completion',
    label: 'Completion Rate',
    value: '84.6%',
    change: '+12.8%',
    isPositive: true,
    timeframe: 'industry avg 54%',
    accentColor: '#10B981'
  },
  {
    id: 'conversion',
    label: 'Conversion Rate',
    value: '31.2%',
    change: '+8.4%',
    isPositive: true,
    timeframe: 'organic traffic',
    accentColor: '#EC4899'
  },
  {
    id: 'avg-time',
    label: 'Avg Completion Time',
    value: '1m 24s',
    change: '-32s',
    isPositive: true,
    timeframe: 'faster checkout',
    accentColor: '#F59E0B'
  }
];

export const responsesTimeline = {
  '7d': [
    { label: 'Mon', responses: 2420, completion: 82 },
    { label: 'Tue', responses: 3100, completion: 85 },
    { label: 'Wed', responses: 3890, completion: 86 },
    { label: 'Thu', responses: 4250, completion: 88 },
    { label: 'Fri', responses: 4980, completion: 87 },
    { label: 'Sat', responses: 2980, completion: 83 },
    { label: 'Sun', responses: 3450, completion: 84 }
  ],
  '30d': [
    { label: 'Week 1', responses: 18400, completion: 83 },
    { label: 'Week 2', responses: 24600, completion: 85 },
    { label: 'Week 3', responses: 31200, completion: 87 },
    { label: 'Week 4', responses: 38900, completion: 89 }
  ],
  '90d': [
    { label: 'Jan', responses: 52000, completion: 81 },
    { label: 'Feb', responses: 68400, completion: 84 },
    { label: 'Mar', responses: 89500, completion: 88 }
  ]
};

export const deviceBreakdown = [
  { device: 'Mobile', share: 58, count: '107,253', color: '#6366F1' },
  { device: 'Desktop', share: 36, count: '66,571', color: '#0EA5E9' },
  { device: 'Tablet', share: 6, count: '11,096', color: '#10B981' }
];

export const dropOffStages = [
  { step: '01. Welcome Screen', label: 'Started Form', percentage: 100, count: '10,000 users', drop: '0%' },
  { step: '02. Team & Company Info', label: 'Company Size Question', percentage: 94, count: '9,400 users', drop: '-6%' },
  { step: '03. Feature Requirements', label: 'Multi-select Modules', percentage: 89, count: '8,900 users', drop: '-5%' },
  { step: '04. Work Email & Contact', label: 'Lead Verification', percentage: 85, count: '8,500 users', drop: '-4%' },
  { step: '05. Form Submitted', label: 'Thank You Screen', percentage: 84.6, count: '8,460 completed', drop: 'Completed!' }
];
