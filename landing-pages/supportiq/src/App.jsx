import { useEffect, useState, useRef } from 'react';
import { Activity, ArrowDown, ArrowRight, AudioLines, Check, ChevronDown, ChevronRight, Headphones, Inbox, LockKeyhole, Menu, MessageCircle, MessageSquare, MessagesSquare, Search, ShieldCheck, Sparkles, Ticket, X, Mail, Globe, MessageSquareText, Zap, TrendingUp, Users, Clock } from 'lucide-react';

const faqs = [
  ['What is SupportIQ?', 'SupportIQ is an AI-powered customer support platform that helps teams handle conversations across every channel. It understands customer intent, finds relevant knowledge, and helps your team resolve issues faster.'],
  ['Can SupportIQ work with our existing knowledge base?', 'Yes. SupportIQ connects to your existing help center, product documentation, and internal knowledge sources. The AI uses these approved sources to generate grounded responses.'],
  ['Can agents take over conversations?', 'Absolutely. Agents can take over any conversation at any time. The AI provides drafts and suggestions, but your team always has full control over what gets sent to customers.'],
  ['Which channels are supported?', 'SupportIQ brings together email, live chat, WhatsApp, social media, and other channels into one unified inbox. The channels shown are representative of the platform\'s capabilities.'],
  ['How does AI generate responses?', 'The AI analyzes the customer\'s message to understand intent and sentiment, searches your knowledge base for relevant information, then generates a contextual response grounded in your approved sources.'],
  ['Can we review AI-generated responses?', 'Yes. You can set automation rules to require human review before responses are sent, or allow the AI to handle routine questions automatically based on confidence levels you define.'],
];

function Logo({ light = false }) {
  return (
    <a className={`brand ${light ? 'brand-light' : ''}`} href="#top" aria-label="SupportIQ home">
      <span className="brand-mark">
        <AudioLines size={19} strokeWidth={2.5} />
      </span>
      <span>Support<span className="brand-iq">IQ</span></span>
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const listener = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', listener, { passive: true });
    return () => window.removeEventListener('scroll', listener);
  }, []);

  const links = [
    ['Product', '#product'],
    ['Solutions', '#solutions'],
    ['AI Features', '#intelligence'],
    ['Resources', '#resources'],
    ['Pricing', '#pricing']
  ];

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-wrap">
        <Logo />
        <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {links.map(([name, href]) => (
            <a key={name} href={href} onClick={() => setOpen(false)}>{name}</a>
          ))}
          <a className="mobile-login" href="#pricing">Log in</a>
          <a className="button button-primary mobile-cta" href="#pricing">
            Start free <ArrowRight size={15} />
          </a>
        </nav>
        <div className="nav-actions">
          <a className="login-link" href="#pricing">Log in</a>
          <a className="button button-primary nav-cta" href="#pricing">
            Start free <ArrowRight size={15} />
          </a>
          <button
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}

function CheckCircle() {
  return (
    <span className="check-circle">
      <Check size={11} />
    </span>
  );
}

function ConversationDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const steps = [0, 1, 2, 3, 4];
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep = (currentStep + 1) % steps.length;
      setStep(currentStep);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="visual-stage" aria-label="AI resolving a billing support conversation">
      <div className="stage-orbit orbit-one" />
      <div className="stage-orbit orbit-two" />

      <div className={`floating-label label-top ${step >= 1 ? 'visible' : ''}`}>
        <i className="live-dot" /> AI is on it <span className="label-time">00:02</span>
      </div>

      <div className="conversation-card">
        <div className="conversation-head">
          <div className="inbox-title">
            <span className="mini-brand">
              <AudioLines size={15} />
            </span>
            <span>
              <b>Support inbox</b>
              <small>Billing · Live conversation</small>
            </span>
          </div>
          <span className="avatar avatar-purple">JD</span>
        </div>

        <div className="conversation-body">
          <div className={`message customer-message ${step >= 0 ? 'visible' : ''}`}>
            <span className="message-avatar">JD</span>
            <div>
              <div className="message-meta">Jamie D. <span>just now</span></div>
              <p>Hey, I was charged twice for my subscription. Can you help?</p>
            </div>
          </div>

          <div className={`intent-panel ${step >= 1 ? 'visible' : ''}`}>
            <div className="intent-heading">
              <span className="ai-spark">
                <Sparkles size={13} />
              </span>
              <b>SupportIQ AI</b>
              <span className="confidence">98% match</span>
            </div>
            <div className="intent-chips">
              <span><Check size={11} /> Billing issue</span>
              <span><Check size={11} /> Duplicate charge</span>
            </div>
            <div className={`knowledge-match ${step >= 2 ? 'visible' : ''}`}>
              <Search size={14} />
              <span>
                <b>Knowledge matched</b>
                <small>Duplicate billing & refund policy</small>
              </span>
              <ChevronRight size={14} />
            </div>
          </div>

          <div className={`message ai-message ${step >= 3 ? 'visible' : ''}`}>
            <span className="ai-avatar">
              <Sparkles size={13} />
            </span>
            <div>
              <div className="message-meta">
                Suggested reply <span className="draft-pill">AI draft</span>
              </div>
              <p>I'm sorry about that! I found the duplicate charge on your account. I've flagged it for review and our billing team will take care of the refund.</p>
              <div className="reply-actions">
                <button type="button">
                  <Check size={12} /> Send reply
                </button>
                <span>⌘ ↵</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`conversation-foot ${step >= 4 ? 'visible' : ''}`}>
          <span>
            <CheckCircle /> Resolved by AI
          </span>
          <span>First reply <b>2 sec</b></span>
        </div>
      </div>

      <div className={`floating-label label-bottom ${step >= 4 ? 'visible' : ''}`}>
        <span className="happy-icon">✳</span>
        <span>
          <b>Customer happy</b>
          <small>Conversation resolved</small>
        </span>
        <span className="sentiment-score">+94</span>
      </div>

      <div className="stage-caption">
        <i className="caption-line" />
        From first message to resolution, in seconds
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-icon">
              <Sparkles size={12} />
            </span>
            AI-POWERED CUSTOMER SUPPORT
          </div>
          <h1>
            Your support team,<br />
            <span className="headline-accent">supercharged</span> by AI<span className="period">.</span>
          </h1>
          <p className="hero-description">
            SupportIQ understands every customer conversation, finds the right answer, and helps your team resolve issues faster — across every channel.
          </p>
          <div className="hero-actions">
            <a className="button button-primary button-large" href="#pricing">
              Start free <ArrowRight size={17} />
            </a>
            <a className="button button-secondary button-large" href="#product">
              <span className="play-icon">▶</span> See how it works
            </a>
          </div>
          <div className="no-card">
            <Check size={14} /> No credit card required <i className="mini-divider" /> Set up in minutes
          </div>
          <div className="hero-proof">
            <div className="proof-avatars">
              <span>JD</span>
              <span>MK</span>
              <span>AL</span>
              <span>+</span>
            </div>
            <p>
              <b>Support that feels human.</b><br />
              Powered by intelligence.
            </p>
          </div>
        </div>
        <ConversationDemo />
      </div>
      <a className="scroll-cue" href="#trusted">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={13} />
      </a>
    </section>
  );
}

function SectionIntro({ eyebrow, title, copy, centered = true }) {
  return (
    <div className={`section-intro ${centered ? 'centered' : ''}`}>
      <div className="eyebrow">
        <span className="eyebrow-icon">
          <Sparkles size={12} />
        </span>
        {eyebrow}
      </div>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function TrustBar() {
  return (
    <section className="trust-section" id="trusted">
      <div className="trust-inner">
        <p>TRUSTED BY TEAMS WHO PUT CUSTOMERS FIRST</p>
        <div className="logo-row">
          <span className="wordmark northstar">✳ northstar</span>
          <span className="wordmark vertex">◈ vertex</span>
          <span className="wordmark lumio">lumio<span className="lumio-dot">.</span></span>
          <span className="wordmark orbit">◎ orbit</span>
          <span className="wordmark nova">nova ✦</span>
          <span className="wordmark acme">acme ↗</span>
        </div>
        <small>Illustrative brand marks for presentation purposes</small>
      </div>
    </section>
  );
}

function Problems() {
  const items = [
    [<MessagesSquare />, 'Too many conversations', 'Your team spends hours answering the same questions again and again.'],
    [<Inbox />, 'Too many channels', 'Customers expect fast support everywhere. Your team is left jumping between tabs.'],
    [<Search />, 'Too little context', 'Agents waste time searching for information before they can reply.']
  ];

  return (
    <>
      <section className="section problem-section" id="solutions">
        <div className="container">
          <SectionIntro
            eyebrow="THE SUPPORT CYCLE"
            title={<>Support shouldn't feel like<br /><span className="text-muted">firefighting.</span></>}
            copy="Great support gets harder as you grow. The answer isn't asking your team to do more."
          />
          <div className="problem-grid">
            {items.map(([icon, title, text], i) => (
              <article className="problem-card" key={title}>
                <div className={`problem-icon problem-icon-${i}`}>{icon}</div>
                <span className="problem-index">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="card-rule" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-band" id="product">
        <div className="container solution-layout">
          <div className="solution-copy">
            <div className="eyebrow eyebrow-light">MEET YOUR NEW SUPPORT ENGINE</div>
            <h2>
              One intelligent layer.<br />
              <span>Every conversation.</span>
            </h2>
            <p>
              SupportIQ connects your channels, knowledge, and team in one thoughtful system. AI takes care of repeatable work; people bring the empathy.
            </p>
            <a className="text-link" href="#features">
              Explore the platform <ArrowRight size={16} />
            </a>
          </div>
          <div className="flow-visual">
            <div className="flow-line" />
            {[
              ['01 / LISTEN', 'Customer message', 'Every channel, one inbox', <MessageCircle />],
              ['02 / UNDERSTAND', 'AI finds the intent', 'Context, sentiment, urgency', <Sparkles />],
              ['03 / RESOLVE', 'The right answer, fast', 'Grounded in your knowledge', <Search />],
              ['04 / FOLLOW THROUGH', 'A customer who feels heard', 'Humans step in when it matters', <Check />]
            ].map(([num, title, sub, icon]) => (
              <div className="flow-step" key={num}>
                <span className="flow-icon flow-ai">{icon}</span>
                <div>
                  <small>{num}</small>
                  <b>{title}</b>
                  <span>{sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const features = [
  ['01', 'AI CHATBOT', 'Answers customers before tickets become tickets.', 'Give customers instant help at any hour. SupportIQ uses your approved knowledge to resolve common questions and hands off the rest with full context.', ['Grounded in your knowledge base', 'Confident handoffs to your team', 'Always-on, consistent responses'], <MessageSquare />, 'chat'],
  ['02', 'OMNICHANNEL INBOX', 'Every conversation. One intelligent inbox.', 'Bring conversations together in a shared inbox. Give your team one clear view of what\'s happening and who is taking care of it.', ['One shared team inbox', 'Clear ownership and assignment', 'Full conversation history'], <Inbox />, 'channels'],
  ['03', 'INTELLIGENT TICKETS', 'Turn conversations into organized action.', 'Turn incoming requests into organized work. Prioritize what needs attention and route each issue to the teammate best equipped to solve it.', ['Automatic topic and priority signals', 'Flexible routing rules', 'Easy-to-scan team queues'], <Ticket />, 'tickets'],
  ['04', 'CONNECTED KNOWLEDGE', 'Give AI the knowledge it needs.', 'Make your help center and internal documentation useful at the exact moment a question comes in, with a clear source behind each suggestion.', ['Connect existing documentation', 'Relevant sources surfaced in context', 'Knowledge gaps made visible'], <Search />, 'knowledge'],
  ['05', 'SENTIMENT INTELLIGENCE', 'Know how customers feel before they tell you.', 'Spot frustration and urgency sooner. Sentiment signals help your team decide what needs a human touch and where to follow up first.', ['Emotion and urgency signals', 'Trends across conversations', 'Thoughtful, human escalations'], <Activity />, 'sentiment']
];

function MiniVisual({ type }) {
  if (type === 'chat') {
    return (
      <div className="feature-mini chat-mini">
        <div className="mini-top">
          <span className="mini-brand">
            <AudioLines size={14} />
          </span>
          <b>Support assistant</b>
          <span className="online-pill">● online</span>
        </div>
        <div className="mini-bubble">
          How do I update my billing details?
          <small>Customer · just now</small>
        </div>
        <div className="mini-answer">
          <span>
            <Sparkles size={12} /> AI RESPONSE
          </span>
          <p>You can update your payment method under <b>Settings → Billing</b>. Want me to take you there?</p>
          <div className="source-chip">
            <Check size={11} /> Billing & payments guide
          </div>
        </div>
        <div className="mini-composer">
          Ask anything… <span>↑</span>
        </div>
      </div>
    );
  }

  const data = {
    channels: {
      title: 'All conversations',
      count: '24',
      items: [
        ['E', 'Email', 'Plan question · 2m'],
        ['◉', 'Live chat', 'Refund request · 5m'],
        ['◎', 'Instagram', 'Order update · 8m']
      ]
    },
    tickets: {
      title: 'Priority queue',
      count: '3',
      items: [
        ['#1048', 'Double charge on annual plan', 'High'],
        ['#1047', 'Can\'t access my workspace', 'Normal'],
        ['#1046', 'Update account email', 'Low']
      ]
    },
    knowledge: {
      title: 'Knowledge sources',
      count: '12 connected',
      items: [
        ['▤', 'Help center', '48 articles'],
        ['▧', 'Product docs', '26 documents'],
        ['▣', 'Team handbook', '14 documents']
      ]
    },
    sentiment: {
      title: 'Conversation sentiment',
      count: 'This week',
      items: [
        ['68%', 'Positive conversations', '↗ 12%'],
        ['24%', 'Neutral', 'This week'],
        ['8%', 'Needs attention', 'Follow up']
      ]
    }
  };

  const config = data[type];

  return (
    <div className={`feature-mini ${type}-mini`}>
      <div className="mini-top">
        <b>{config.title}</b>
        <span className="count-pill">{config.count}</span>
      </div>
      {config.items.map(([icon, title, sub]) => (
        <div className="channel-row" key={title}>
          <span className="channel-avatar purple">{icon}</span>
          <span>
            <b>{title}</b>
            <small>{sub}</small>
          </span>
          <i className="channel-dot" />
        </div>
      ))}
    </div>
  );
}

function Features() {
  return (
    <section className="section features-section" id="features">
      <div className="container">
        <SectionIntro
          eyebrow="BUILT FOR BETTER SUPPORT"
          title={<>The whole support picture,<br /><span className="text-muted">finally connected.</span></>}
          copy="Useful intelligence at each step of a customer conversation. Your team stays in control."
        />
        <div className="features-list">
          {features.map(([num, tag, title, body, bullets, icon, id], i) => (
            <article className={`feature-row ${i % 2 ? 'feature-reverse' : ''}`} id={id} key={id}>
              <div className="feature-copy">
                <div className="feature-icon">{icon}</div>
                <div className="feature-tag">
                  {num} <span /> {tag}
                </div>
                <h3>{title}</h3>
                <p>{body}</p>
                <ul>
                  {bullets.map(x => (
                    <li key={x}>
                      <Check size={14} />{x}
                    </li>
                  ))}
                </ul>
                <a className="text-link" href="#pricing">
                  Discover {tag.toLowerCase()} <ArrowRight size={15} />
                </a>
              </div>
              <div className={`feature-visual fv-${id}`}>
                <MiniVisual type={id} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Intelligence() {
  const [active, setActive] = useState(0);

  const items = [
    ['Intent', 'Billing question', 'Customer needs help with a duplicate charge.', <MessageCircle />],
    ['Sentiment', 'Concerned, calm', 'Acknowledge the issue and offer reassurance.', <Activity />],
    ['Knowledge', 'Refund policy · § 2.1', 'Use the verified billing guide as the source.', <Search />],
    ['Next best action', 'Draft a helpful reply', 'Resolve simply, or pass to billing with context.', <Sparkles />]
  ];

  return (
    <section className="section intelligence-section" id="intelligence">
      <div className="container intelligence-layout">
        <div className="intelligence-copy">
          <SectionIntro
            centered={false}
            eyebrow="AI THAT GETS THE FULL PICTURE"
            title={<>It doesn't just read words.<br /><span className="text-muted">It reads the room.</span></>}
            copy="Good support is about understanding what someone needs and how they feel. SupportIQ gives your team the context to respond like they know the customer."
          />
          <a className="text-link" href="#assistant">
            Meet your AI copilot <ArrowRight size={15} />
          </a>
        </div>
        <div className="understanding-card">
          <div className="understanding-head">
            HOW SUPPORTIQ UNDERSTANDS
            <span className="live-label">
              <i /> LIVE ANALYSIS
            </span>
          </div>
          <div className="customer-quote">
            <span className="quote-avatar">JD</span>
            <div>
              <small>JAMIE · CUSTOMER MESSAGE</small>
              <p>"I've been charged twice this month and I'm worried my subscription's broken."</p>
            </div>
          </div>
          <div className="analysis-steps">
            {items.map(([title, value, detail, icon], i) => (
              <button
                className={`analysis-step ${active === i ? 'active' : ''}`}
                key={title}
                onClick={() => setActive(i)}
              >
                <span className="step-number">0{i + 1}</span>
                <span className="analysis-icon">{icon}</span>
                <span className="analysis-content">
                  <small>{title}</small>
                  <b>{value}</b>
                  {active === i && <span className="step-detail">{detail}</span>}
                </span>
                <ChevronRight size={16} />
              </button>
            ))}
          </div>
          <div className="understanding-footer">
            <span>
              <CheckCircle /> Understanding complete
            </span>
            <span>Grounded in 2 sources</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="before-section">
      <div className="container">
        <SectionIntro
          eyebrow="A MORE THOUGHTFUL WORKFLOW"
          title="Less tab-switching. More helping."
          copy="A calmer day for agents means a better experience for customers."
        />
        <div className="comparison">
          {[
            ['×', 'Before SupportIQ', 'Disconnected and reactive', ['Search through scattered conversations', 'Repeat the same answer all day', 'Guess which issue needs attention', 'Copy context between tools'], '"Let me find that and get back to you."'],
            ['✦', 'With SupportIQ', 'Connected and considered', ['Find the right context in one place', 'Let AI resolve repeatable questions', 'See urgency and sentiment at a glance', 'Hand off with the full story attached'], '"I\'ve got the context. Let\'s solve this."']
          ].map(([symbol, title, sub, bullets, quote], i) => (
            <div className={`compare-card ${i ? 'after' : 'before'}`} key={title}>
              <div className="compare-heading">
                <span className="compare-symbol">{symbol}</span>
                <span>
                  <b>{title}</b>
                  <small>{sub}</small>
                </span>
              </div>
              <ul>
                {bullets.map(x => (
                  <li key={x}>
                    {i ? <Check /> : <X />}
                    {x}
                  </li>
                ))}
              </ul>
              <div className="compare-bottom">{quote}</div>
            </div>
          ))}
          <div className="compare-arrow">
            <ArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
}

function Analytics() {
  return (
    <section className="section analytics-section" id="analytics">
      <div className="container analytics-layout">
        <div className="analytics-copy">
          <div className="eyebrow">
            <Activity size={12} /> CLARITY BEHIND EVERY CONVERSATION
          </div>
          <h2>
            Know what's working.<br />
            <span className="text-muted">See what needs you.</span>
          </h2>
          <p>
            Turn day-to-day support into a clearer picture of customer needs, team capacity, and the issues worth fixing upstream.
          </p>
          <ul className="analytics-points">
            <li><CheckCircle />Spot recurring questions before they become a backlog</li>
            <li><CheckCircle />Understand resolution trends across channels</li>
            <li><CheckCircle />Make room for conversations that need a person</li>
          </ul>
          <a className="text-link" href="#pricing">
            Explore support analytics <ArrowRight size={15} />
          </a>
        </div>
        <div className="analytics-card">
          <div className="analytics-card-head">
            <div>
              <small>SUPPORT OVERVIEW</small>
              <b>Conversations, understood.</b>
            </div>
            <button type="button">
              Last 7 days <ChevronDown size={13} />
            </button>
          </div>
          <div className="metric-grid">
            {[
              ['Conversations', '2,840', '↗ 18.4%'],
              ['AI resolution', '64%', '↗ 8.2%'],
              ['First response', '1m 42s', '↘ 32 sec']
            ].map(([label, value, change]) => (
              <div key={label}>
                <small>{label}</small>
                <b>{value}</b>
                <span>{change} <i>vs. prior week</i></span>
              </div>
            ))}
          </div>
          <div className="chart-head">
            <b>Conversation volume</b>
            <span>● Resolved　● Needs team</span>
          </div>
          <div className="chart-area">
            <div className="chart-y">
              <span>800</span>
              <span>600</span>
              <span>400</span>
              <span>200</span>
              <span>0</span>
            </div>
            <div className="chart-plot">
              <div className="chart-gridlines">
                <i /><i /><i /><i /><i />
              </div>
              <svg viewBox="0 0 580 155" preserveAspectRatio="none" role="img" aria-label="Illustrative weekly support volume graph">
                <path d="M0 126 C32 119 37 99 72 103 S115 123 145 92 S194 101 218 75 S260 81 290 66 S330 77 363 53 S407 77 436 43 S484 54 508 31 S551 51 580 15 L580 155 L0 155Z" fill="#536ff122" />
                <path d="M0 126 C32 119 37 99 72 103 S115 123 145 92 S194 101 218 75 S260 81 290 66 S330 77 363 53 S407 77 436 43 S484 54 508 31 S551 51 580 15" fill="none" stroke="#536ff1" strokeWidth="2.5" />
              </svg>
              <div className="chart-x">
                <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
              </div>
            </div>
          </div>
          <div className="analytics-note">
            <Sparkles size={13} /> Billing questions are up 12% this week <ArrowRight size={13} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Copilot() {
  return (
    <section className="section copilot-section" id="assistant">
      <div className="container copilot-layout">
        <div className="copilot-visual">
          <div className="copilot-window">
            <div className="copilot-window-head">
              <span className="ai-avatar">
                <Sparkles size={14} />
              </span>
              <span>
                <b>SupportIQ Copilot</b>
                <small>Here when your team needs a hand</small>
              </span>
              <span className="copilot-status">READY</span>
            </div>
            <div className="copilot-thread">
              <div className="thread-question">
                <span>AGENT ASKS</span>
                <p>How should I respond to Jamie about the duplicate charge?</p>
              </div>
              <div className="thread-answer">
                <div className="answer-label">
                  <Sparkles size={12} /> A THOUGHTFUL REPLY
                </div>
                <p>"I'm sorry you've had to deal with that, Jamie. I checked your account and can see the duplicate charge. I've flagged it with billing, and they'll follow up about your refund."</p>
                <div className="answer-source">
                  <span>
                    <Check size={11} /> Refund policy · Section 2.1
                  </span>
                  <span>Used 2 sources</span>
                </div>
                <div className="answer-buttons">
                  <button type="button">
                    <Check size={12} /> Insert reply
                  </button>
                  <button type="button">
                    <AudioLines size={12} /> Try another tone
                  </button>
                </div>
              </div>
            </div>
            <div className="copilot-prompt">
              Ask about this conversation… <span><ArrowRight size={14} /></span>
            </div>
          </div>
        </div>
        <div className="copilot-copy">
          <div className="eyebrow">A SECOND BRAIN, NOT A REPLACEMENT</div>
          <h2>
            Helpful to the customer.<br />
            <span className="text-muted">And your team.</span>
          </h2>
          <p>
            Give agents a quiet advantage: useful summaries, grounded reply suggestions, and relevant knowledge beside the conversation.
          </p>
          <div className="copilot-benefits">
            {[
              ['Find the useful detail', 'Surface account context and related history.', <Search />],
              ['Write with care', 'Start from a grounded, editable suggestion.', <MessageSquare />],
              ['Hand off with confidence', 'Keep the whole story attached.', <ArrowRight />]
            ].map(([title, detail, icon]) => (
              <div key={title}>
                <span>{icon}</span>
                <p>
                  <b>{title}</b>
                  <small>{detail}</small>
                </p>
              </div>
            ))}
          </div>
          <a className="text-link" href="#pricing">
            See the AI copilot in action <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="journey-section" id="journey">
      <div className="container">
        <SectionIntro
          eyebrow="FROM HELLO TO HELPED"
          title={<>A better conversation,<br />at every step.</>}
        />
        <div className="journey-track">
          {[
            ['01', 'A message arrives', 'Chat, email, and social conversations find their way into one place.'],
            ['02', 'AI finds the context', 'Intent, sentiment, and relevant knowledge come together.'],
            ['03', 'The right next step', 'An instant resolution, a useful draft, or a clear handoff.'],
            ['04', 'Everyone moves forward', 'Customers feel heard. Your team sees what matters next.']
          ].map(([n, title, body]) => (
            <article className="journey-step" key={n}>
              <div className="journey-node">
                <span>{n}</span>
                <i />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section className="security-section" id="security">
      <div className="container security-inner">
        <div className="security-icon">
          <ShieldCheck size={25} />
        </div>
        <div>
          <div className="eyebrow">BUILT FOR TRUST</div>
          <h2>Thoughtful AI starts with thoughtful safeguards.</h2>
          <p>
            Your knowledge stays under your control. SupportIQ is designed with access controls and AI grounded in sources you choose.
          </p>
        </div>
        <div className="security-points">
          <span><LockKeyhole size={14} /> Role-based access</span>
          <span><ShieldCheck size={14} /> Controlled knowledge sources</span>
          <span><CheckCircle /> Human-led handoffs</span>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonial-section" id="resources">
      <div className="container">
        <SectionIntro
          eyebrow="A DIFFERENT KIND OF SUPPORT"
          title={<>More time for moments<br />that make customers stay.</>}
        />
        <div className="testimonial-card">
          <div className="quote-mark">"</div>
          <blockquote>
            SupportIQ gave us back the time to make every interaction feel personal. Now our team spends less time searching for answers and more time actually helping people.
          </blockquote>
          <div className="testimonial-person">
            <span className="person-avatar">MC</span>
            <span>
              <b>Morgan Chen</b>
              <small>VP of Customer Experience · Northstar</small>
            </span>
          </div>
          <div className="testimonial-disclaimer">
            Illustrative testimonial for product concept presentation
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [annual, setAnnual] = useState(true);
  const prices = annual ? ['$0', '$39', '$99'] : ['$0', '$49', '$119'];

  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <SectionIntro
          eyebrow="SIMPLE, CLEAR PRICING"
          title="Room to grow, from day one."
          copy="Start with the essentials. Add more automation as your team grows."
        />
        <div className="billing-toggle">
          <span className={!annual ? 'selected' : ''}>Monthly</span>
          <button
            aria-label="Toggle annual billing"
            aria-pressed={annual}
            className={annual ? 'toggle-on' : ''}
            onClick={() => setAnnual(!annual)}
          >
            <i />
          </button>
          <span className={annual ? 'selected' : ''}>Yearly</span>
          <small>Save 20%</small>
        </div>
        <div className="pricing-grid">
          {[
            ['Starter', 'For small teams finding their rhythm.', 'Shared inbox', 'Basic automation', 'Help center'],
            ['Growth', 'For teams ready to scale support.', 'AI-assisted replies', 'Omnichannel support', 'Team analytics'],
            ['Scale', 'For high-volume, growing teams.', 'Advanced AI workflows', 'Custom roles & permissions', 'Dedicated support']
          ].map(([name, desc, a, b, c], i) => (
            <article className={`price-card ${i === 1 ? 'price-featured' : ''}`} key={name}>
              {i === 1 && <span className="popular-label">MOST POPULAR</span>}
              <span className="plan-name">{name}</span>
              <p>{desc}</p>
              <div className="price">
                {prices[i]}<small> / agent / mo</small>
              </div>
              <span className="price-billing">
                {i === 0 ? 'Always free' : annual ? 'Billed annually' : 'Billed monthly'}
              </span>
              <a
                className={`button ${i === 1 ? 'button-primary' : 'button-secondary'} price-button`}
                href="mailto:hello@supportiq.example?subject=SupportIQ%20demo"
              >
                {i === 2 ? 'Talk to our team' : 'Start with ' + name}
                <ArrowRight size={15} />
              </a>
              <div className="plan-divider" />
              <small className="included-label">Included:</small>
              <ul>
                {[a, b, c].map(x => (
                  <li key={x}>
                    <Check size={14} />{x}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="pricing-note">
          Illustrative pricing for concept presentation. <a href="mailto:hello@supportiq.example">Ask about your team <ArrowRight size={13} /></a>
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-layout">
        <div className="faq-intro">
          <div className="eyebrow">
            <span className="eyebrow-icon">?</span> A FEW GOOD QUESTIONS
          </div>
          <h2>
            Good to know<br />
            <span className="text-muted">before you start.</span>
          </h2>
          <p>
            Still curious? We're happy to help you work out if SupportIQ is right for your team.
          </p>
          <a className="text-link" href="mailto:hello@supportiq.example">
            Talk to a real person <ArrowRight size={15} />
          </a>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a], i) => (
            <div className={`faq-item ${active === i ? 'faq-open' : ''}`} key={q}>
              <button
                aria-expanded={active === i}
                onClick={() => setActive(active === i ? -1 : i)}
              >
                <span>{q}</span>
                <ChevronDown size={18} />
              </button>
              <div className="faq-answer">
                <p>{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="cta-glow" />
      <div className="container final-cta-inner">
        <div className="cta-icon">
          <Headphones size={21} />
        </div>
        <div className="eyebrow eyebrow-light">MAKE ROOM FOR BETTER SUPPORT</div>
        <h2>
          Let your team be<br />
          there when it matters.
        </h2>
        <p>
          Bring every conversation together. Let AI take care of the repeatable work.
        </p>
        <div className="cta-actions">
          <a className="button button-white" href="#pricing">
            Start free <ArrowRight size={16} />
          </a>
          <a className="button button-ghost" href="mailto:hello@supportiq.example?subject=Book%20a%20SupportIQ%20demo">
            Book a demo
          </a>
        </div>
        <small>No credit card required <span>·</span> Set up in minutes</small>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Logo light />
            <p>
              Thoughtful AI for the people<br />
              behind every support conversation.
            </p>
            <a className="footer-email" href="mailto:hello@supportiq.example">
              Say hello <ArrowRight size={14} />
            </a>
          </div>
          {[
            ['Platform', ['AI chatbot', '#chat'], ['Omnichannel inbox', '#channels'], ['Ticket management', '#tickets'], ['Analytics', '#analytics']],
            ['Explore', ['AI intelligence', '#intelligence'], ['AI copilot', '#assistant'], ['How it works', '#journey'], ['Pricing', '#pricing']],
            ['Resources', ['Help center', '#faq'], ['Customer stories', '#resources'], ['Trust & security', '#security'], ['Contact', 'mailto:hello@supportiq.example']]
          ].map(([title, ...links]) => (
            <div className="footer-column" key={title}>
              <b>{title}</b>
              {links.map(([name, href]) => (
                <a href={href} key={name}>{name}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 SupportIQ, Inc.</span>
          <span>Illustrative product concept · Representative brand marks</span>
          <div>
            <a href="#security">Privacy</a>
            <a href="#security">Terms</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Problems />
        <Features />
        <Intelligence />
        <Comparison />
        <Analytics />
        <Copilot />
        <Journey />
        <Security />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
