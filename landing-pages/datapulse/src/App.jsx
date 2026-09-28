import React, { useEffect, useMemo, useState } from 'react';
import {
  Activity, ArrowRight, BarChart3, BrainCircuit, Check, ChevronRight,
  Database, FileText, Gauge, GitBranch, Globe2, Menu, Play,
  PlugZap, RefreshCw, ShieldCheck, Sparkles, TrendingUp, X, Zap
} from 'lucide-react';

const Kpis = [
  { label: 'Revenue', value: '$2.84M', change: '+18.6%', note: 'vs. previous period' },
  { label: 'Gross margin', value: '68.4%', change: '+4.2%', note: 'healthy trajectory' },
  { label: 'Active accounts', value: '18.4K', change: '+12.9%', note: 'in 24 hours' },
  { label: 'Retention', value: '94.6%', change: '+2.1%', note: 'rolling 30 days' }
];

const Regions = [
  { label: 'North America', value: 82, delta: '+14.8%' },
  { label: 'Europe', value: 61, delta: '+9.6%' },
  { label: 'APAC', value: 48, delta: '+6.2%' }
];

const navItems = ['Product', 'Signals', 'Integrations', 'Reports'];

function MiniChart({ height = 120 }) {
  const bars = [28, 43, 36, 57, 49, 64, 55, 78, 69, 88, 75, 96];
  return (
    <div className="chart" style={{ height }}>
      <div className="chart-grid" />
      <div className="bar-row">{bars.map((h, i) => <span key={i} style={{ height: h + '%', animationDelay: (i * 70) + 'ms' }} />)}</div>
      <svg className="line-chart" viewBox="0 0 600 180" preserveAspectRatio="none" aria-hidden="true">
        <defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#57F6D2" stopOpacity=".32" /><stop offset="100%" stopColor="#57F6D2" stopOpacity="0" /></linearGradient></defs>
        <path d="M0 150 C55 120,75 134,112 103 S175 115,219 82 S280 90,322 72 S380 97,425 55 S488 74,530 35 S572 50,600 19 L600 180 L0 180 Z" fill="url(#area)" />
        <path d="M0 150 C55 120,75 134,112 103 S175 115,219 82 S280 90,322 72 S380 97,425 55 S488 74,530 35 S572 50,600 19" fill="none" stroke="#57F6D2" strokeWidth="3" />
      </svg>
    </div>
  );
}

function Dashboard() {
  const [range, setRange] = useState('30D');
  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPulse((p) => (p + 1) % 3), 1400);
    return () => clearInterval(id);
  }, []);
  const sideIcons = [Activity, TrendingUp, Globe2, Gauge, FileText];
  const streamIcons = [Database, TrendingUp, Sparkles, GitBranch];
  return (
    <div className="dashboard-shell">
      <div className="dashboard-glow" />
      <div className="dash-topline">
        <div className="window-dots"><i/><i/><i/></div>
        <span className="mono muted">datapulse://command-center</span>
        <div className="live-chip"><span className="live-dot"/> LIVE DATA</div>
      </div>
      <div className="dash-body">
        <aside className="dash-sidebar">
          <div className="side-brand"><div className="mark">D</div><strong>DataPulse</strong></div>
          {['Overview','Revenue','Acquisition','Retention','Reports'].map((item, i) => {
            const Icon = sideIcons[i];
            return <div key={item} className={'side-item ' + (i === 0 ? 'active' : '')}><Icon size={15}/>{item}</div>;
          })}
          <div className="side-bottom"><ShieldCheck size={15}/> Workspace secure</div>
        </aside>
        <main className="dash-main">
          <div className="dash-head">
            <div><span className="eyebrow">EXECUTIVE OVERVIEW</span><h3>Monday, September 28</h3></div>
            <div className="range"><RefreshCw size={14}/>{['7D','30D','90D'].map((r) => <button key={r} className={range === r ? 'selected' : ''} onClick={() => setRange(r)}>{r}</button>)}</div>
          </div>
          <div className="kpi-grid">{Kpis.map((k) => <div className="kpi-card" key={k.label}><span>{k.label}</span><strong>{k.value}</strong><em>{k.change}</em><small>{k.note}</small></div>)}</div>
          <div className="dash-grid">
            <div className="panel large">
              <div className="panel-title"><div><span className="eyebrow">REVENUE SIGNAL</span><h4>Revenue momentum</h4></div><span className="trend"><TrendingUp size={14}/> +18.6%</span></div>
              <MiniChart height={190}/>
              <div className="axis"><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span></div>
            </div>
            <div className="panel">
              <div className="panel-title"><div><span className="eyebrow">AI INSIGHT</span><h4>Signal detected</h4></div><Sparkles size={16}/></div>
              <div className="insight"><div className="insight-icon"><BrainCircuit size={18}/></div><p>Enterprise expansion is accelerating in North America. Pipeline velocity is <b>23% above baseline</b>.</p></div>
              <button className="text-btn">Open insight <ArrowRight size={14}/></button>
            </div>
          </div>
          <div className="dash-grid lower">
            <div className="panel">
              <div className="panel-title"><div><span className="eyebrow">ACQUISITION</span><h4>Source performance</h4></div><BarChart3 size={16}/></div>
              <div className="metric-list">{Regions.map((m) => <div className="metric" key={m.label}><div><span>{m.label}</span><b>{m.value}%</b></div><div className="progress"><i style={{width:m.value+'%'}}/></div><small>{m.delta}</small></div>)}</div>
            </div>
            <div className="panel activity-panel">
              <div className="panel-title"><div><span className="eyebrow">LIVE STREAM</span><h4>Business activity</h4></div><span className="stream-dot">{pulse + 1}</span></div>
              {['Stripe sync completed','North America ARR +$42K','AI report generated','Salesforce pipeline updated'].map((x, i) => {
                const Icon = streamIcons[i];
                return <div className="stream" key={x}><span className="stream-icon"><Icon size={14}/></span><div><b>{x}</b><small>{i + 1} min ago • production</small></div></div>;
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [demo, setDemo] = useState(false);
  useEffect(() => { const fn = () => setShowTop(window.scrollY > 500); window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn); }, []);
  const logos = useMemo(() => ['Northstar', 'Linear', 'Vercel', 'Stripe', 'Notion', 'Ramp'], []);
  return (
    <div className="site">
      <div className="noise"/>
      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="#top"><span className="brand-mark">D</span><span>DataPulse</span></a>
          <nav className="nav-links">{navItems.map((x) => <a key={x} href={'#' + x.toLowerCase()}>{x}</a>)}</nav>
          <div className="nav-actions"><a className="login" href="#pricing">Sign in</a><a className="nav-cta" href="#demo">Start free <ArrowRight size={15}/></a><button className="menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X/> : <Menu/>}</button></div>
        </div>
        {mobileOpen && <div className="mobile-menu">{navItems.map((x) => <a key={x} href={'#' + x.toLowerCase()} onClick={() => setMobileOpen(false)}>{x}</a>)}<a className="nav-cta" href="#demo">Start free <ArrowRight size={15}/></a></div>}
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-orb orb-a"/><div className="hero-orb orb-b"/>
          <div className="eyebrow-pill"><span className="live-dot"/> REAL-TIME BUSINESS INTELLIGENCE</div>
          <h1>See the signal.<br/><span>Move before the market.</span></h1>
          <p className="hero-copy">DataPulse turns scattered business data into one living command center — with real-time KPIs, AI insights, custom reports, and every critical signal in view.</p>
          <div className="hero-actions"><a className="primary-btn" href="#demo">Explore the command center <ArrowRight size={16}/></a><button className="ghost-btn" onClick={() => setDemo(true)}><Play size={15}/> Watch 60-second demo</button></div>
          <div className="hero-note"><Check size={14}/> No credit card required <span/> SOC 2-ready architecture <span/> 14-day free trial</div>
          <Dashboard/>
        </section>

        <section className="logos section-pad"><p>Powering signal-driven teams at every stage</p><div className="logo-row">{logos.map((x) => <span key={x}>{x}</span>)}</div></section>

        <section id="signals" className="section-pad feature-split">
          <div className="feature-copy"><span className="eyebrow-pill slim">01 / REAL-TIME</span><h2>One view for every number that matters.</h2><p>Stop stitching together spreadsheets and dashboards. DataPulse unifies operational signals into a live, decision-ready layer.</p><div className="feature-points">{['Live KPI thresholds','Drill-down by segment, channel, or region','Automatic anomaly detection'].map((x) => <div key={x}><Check size={15}/>{x}</div>)}</div></div>
          <div className="orbital-card"><div className="orbit o1"/><div className="orbit o2"/><div className="orbit-core"><Activity size={28}/><strong>99.98%</strong><small>signal uptime</small></div>{['Revenue','MRR','CAC','LTV'].map((x, i) => <div className={'orbit-tag t' + i} key={x}><span>{x}</span><b>{['$2.84M','$412K','$62','$1.8K'][i]}</b></div>)}</div>
        </section>

        <section id="product" className="section-pad center-section">
          <span className="eyebrow-pill slim">02 / AI INSIGHTS</span><h2>Analytics that tell you<br/><span>what changed — and why.</span></h2><p className="section-copy">Ask questions in plain language. DataPulse traces the underlying signals, surfaces the drivers, and gives your team context without digging through reports.</p>
          <div className="ai-card"><div className="ai-head"><div><Sparkles size={16}/><span>AI ANALYST</span></div><span className="mono">LIVE CONTEXT • 16 SOURCES</span></div><div className="prompt">“Why did conversion dip in EMEA this week?”</div><div className="ai-answer"><div className="answer-bullet">01</div><div><b>Conversion fell 6.8% week over week.</b><p>73% of the change is explained by a drop in paid search traffic after the new bidding policy launched Monday.</p><div className="chips"><span>Paid Search <b>−12.4%</b></span><span>EMEA <b>−6.8%</b></span><span>Confidence <b>94%</b></span></div></div></div></div>
        </section>

        <section id="integrations" className="section-pad integrations"><div className="section-heading"><div><span className="eyebrow-pill slim">03 / DATA FABRIC</span><h2>Your stack, finally speaking one language.</h2></div><p>Connect your warehouse, revenue, product, and go-to-market systems in minutes.</p></div><div className="integration-grid">{[['Salesforce','SF','crm'],['Stripe','S','billing'],['Postgres','PG','warehouse'],['HubSpot','H','marketing'],['Snowflake','SN','warehouse'],['Google Ads','G','acquisition'],['Segment','SE','product'],['Shopify','SH','commerce']].map(([n,m,c]) => <div className="integration" key={n}><div className="integration-icon">{m}</div><div><b>{n}</b><small>{c}</small></div><PlugZap size={15}/></div>)}</div></section>

        <section id="reports" className="section-pad report-showcase"><div className="section-heading"><div><span className="eyebrow-pill slim">04 / REPORTS</span><h2>Make your reporting<br/>feel automatic.</h2></div><p>Build reusable executive views, schedule delivery, and keep every stakeholder aligned with the same source of truth.</p></div><div className="report-card"><div className="report-sidebar"><span className="mono muted">REPORT BUILDER</span>{['Executive weekly','Revenue pulse','Board snapshot','Growth funnel'].map((x, i) => <div className={'report-nav ' + (i === 0 ? 'selected' : '')} key={x}><FileText size={14}/>{x}</div>)}</div><div className="report-main"><div className="report-toolbar"><span>Executive weekly</span><span className="mono muted">MON • 09:00</span><span className="export-chip"><FileText size={13}/> PDF</span></div><div className="report-hero"><div><span className="eyebrow">WEEK 39 • 2026</span><h3>Business pulse</h3><p>Growth remains healthy with expansion revenue offsetting slower SMB acquisition.</p></div><div className="report-score"><strong>+18.6%</strong><span>Revenue growth</span></div></div><div className="report-bars">{[62,78,55,91,71,86].map((x, i) => <div key={i}><span style={{height:x+'%'}}/></div>)}</div></div></div></section>

        <section className="section-pad security-strip"><div><ShieldCheck size={18}/><b>Built for sensitive business data</b><span>Role-based access • SSO • Audit logs • Encryption in transit</span></div><a href="#demo">View security overview <ChevronRight size={15}/></a></section>

        <section id="pricing" className="section-pad pricing"><div className="center-section"><span className="eyebrow-pill slim">05 / SIMPLE PRICING</span><h2>Start with the signals.<br/><span>Scale with the business.</span></h2></div><div className="pricing-grid"><div className="price-card"><span>Starter</span><strong>$29<small>/ seat / month</small></strong><p>For teams building their first shared analytics layer.</p>{['5 data sources','Live KPI dashboards','AI insights','Weekly reports'].map((x) => <div key={x}><Check size={14}/>{x}</div>)}<a href="#demo" className="secondary-btn">Start free <ArrowRight size={14}/></a></div><div className="price-card featured"><div className="price-ribbon">MOST FLEXIBLE</div><span>Scale</span><strong>$79<small>/ seat / month</small></strong><p>For teams running the business from one source of truth.</p>{['Unlimited sources','Advanced anomaly detection','Custom reports & schedules','Priority support'].map((x) => <div key={x}><Check size={14}/>{x}</div>)}<a href="#demo" className="primary-btn">Start 14-day trial <ArrowRight size={14}/></a></div><div className="price-card"><span>Enterprise</span><strong>Let’s talk</strong><p>For security, governance, and analytics at scale.</p>{['Warehouse-native architecture','SSO & granular roles','Custom data retention','Dedicated success'].map((x) => <div key={x}><Check size={14}/>{x}</div>)}<a href="#demo" className="secondary-btn">Talk to sales <ArrowRight size={14}/></a></div></div></section>

        <section id="demo" className="section-pad final-cta"><div className="cta-grid"><div><span className="eyebrow-pill slim">DATA, WITHOUT THE DRAG.</span><h2>Bring every signal<br/>into focus.</h2><p>Give your team a living view of the business — without waiting for the next spreadsheet.</p></div><div className="cta-box"><div className="cta-spark"><Zap size={20}/></div><b>Get your command center running.</b><span>Connect your first source in under 5 minutes.</span><a className="primary-btn" href="#top">Launch DataPulse <ArrowRight size={16}/></a><small>Free for 14 days. Cancel anytime.</small></div></div></section>
      </main>

      <footer className="footer"><div className="footer-brand"><div className="brand"><span className="brand-mark">D</span><span>DataPulse</span></div><p>Your business. Every signal. One place.</p></div><div className="footer-cols"><div><b>Product</b><a href="#product">AI insights</a><a href="#signals">Real-time</a><a href="#reports">Reports</a></div><div><b>Company</b><a href="#top">About</a><a href="#demo">Contact</a><a href="#top">Careers</a></div><div><b>Resources</b><a href="#integrations">Integrations</a><a href="#demo">Security</a><a href="#top">Docs</a></div></div><div className="footer-bottom"><span>© 2026 DataPulse. Concept landing page.</span><span className="mono">ALL SIGNALS CLEAR • v1.0</span></div></footer>
      {showTop && <button className="to-top" onClick={() => window.scrollTo({top:0,behavior:'smooth'})}><ArrowRight size={15} style={{transform:'rotate(-90deg)'}}/></button>}
      {demo && <div className="modal-backdrop" onClick={() => setDemo(false)}><div className="demo-modal" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setDemo(false)}><X size={18}/></button><div className="demo-screen"><div className="demo-play"><Play size={22}/></div><span className="mono">DATAPULSE / 01:00 DEMO</span><strong>From noise to signal.</strong><p>Interactive demo placeholder — the landing page keeps this conversion path lightweight and self-contained.</p></div></div></div>}
    </div>
  );
}
export default App;
