# Section Redesign Brief
## AI Native Bootcamp Website - Post "Why Now" Sections

> [!NOTE]
> **Target Audience**: Final year college students actively searching for jobs
> 
> **Design DNA**: Premium dark theme with vibrant gradients (#0fa9ff to #9340ff), glassmorphic cards, micro-animations, and proof-driven copy that speaks to job anxiety and career urgency.

---

## Design Language Analysis (First 3 Sections)

### Copy Voice & Tone
- **Direct & Urgent**: "Stand out in Placements" not "Learn AI Skills"
- **Proof-Focused**: Concrete outcomes over vague promises
- **Student Pain Points**: Addresses resume anxiety, interview fears, job scarcity
- **Action-Oriented**: Every section ends with a CTA
- **Conversational Authority**: "We built this to hire from it ourselves"

### Visual Patterns
- **Glassmorphic Cards**: `rgba(255, 255, 255, 0.03-0.05)` backgrounds with `backdrop-filter: blur(18px)`
- **Gradient Accents**: Linear gradients `120deg, #0fa9ff → #9340ff` for emphasis
- **Animated Elements**: Framer Motion with stagger delays (0.2s, 0.4s, 0.6s)
- **Pulsing Indicators**: Keyframe animations for timeline nodes
- **Hover States**: `translateY(-4px)` with colored shadows
- **Typography Hierarchy**: 
  - Eyebrow: `0.75rem`, `letter-spacing: 0.2em`, uppercase, muted
  - H2: `clamp(2rem, 4vw, 3rem)`, gradient on key phrases
  - Body: `1.15rem` lead text, `#a3adc2` muted color

### Layout Structure
- **Container**: `min(1200px, 90vw)` centered
- **Card Spacing**: `padding: 2.5rem`, `border-radius: 24-28px`
- **Grid Systems**: `repeat(auto-fit, minmax(220-260px, 1fr))`
- **Section Padding**: `80px 0`

---

## Section 1: Journey Section (How It Works)

### Current Issues
❌ Plain text list with no visual hierarchy  
❌ No animations or engagement elements  
❌ Doesn't leverage the timeline/progression visual pattern  
❌ Copy is functional but not emotionally compelling  
❌ Missing "what you'll feel" alongside "what you'll do"

### Redesign Brief

#### Layout & Structure
**Visual Treatment**: Animated vertical timeline with expanding cards

```
┌─────────────────────────────────────┐
│  Eyebrow: "How it works"            │
│  H2: Plan • Build • Demo • Repeat   │
│  Lead paragraph (current copy OK)   │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  ┃  Week 0                          │
│  ● ─────────────────────────────    │
│     [Expanding Card]                │
│     Research, Plan & Prepare        │
│     + What you build                │
│     + What you learn                │
│     + Demo outcome                  │
└─────────────────────────────────────┘
```

#### Design Specifications

**Timeline Component**:
- Vertical gradient line (4px width) connecting all nodes
- Animated pulsing dots at each week marker (using existing pulse animations)
- Color progression: Blue (#0fa9ff) → Purple (#7b5eff) → Pink (#ff7abd) → repeat
- Framer Motion: Stagger animation as user scrolls into view

**Week Cards**:
- Glassmorphic background: `rgba(14, 16, 25, 0.85)`
- Border: `1px solid rgba(255, 255, 255, 0.08)`
- Hover: Expand slightly + glow effect matching week color
- Each card contains:
  - Week number badge (gradient pill)
  - Project title (bold, white)
  - 2-3 bullet points: What you build, What you learn, Demo outcome
  - Small "Tools used" tag strip at bottom

**Animation Sequence**:
```javascript
// Framer Motion variants
initial: { opacity: 0, x: -40 }
whileInView: { opacity: 1, x: 0 }
transition: { duration: 0.5, delay: index * 0.15 }
```

#### Copy Rewrite

**Section Header**:
```
Eyebrow: "12 weeks to job-ready"
H2: Ship weekly. Demo publicly. Build proof recruiters can't ignore.
Lead: Fully online. Squad of 4 builders. Dedicated mentor. Two team calls weekly + office hours whenever you're stuck.
```

**Week 0 — Onboarding & First Ship**
- **What you build**: Research a real business problem, plan your first automation, ship a working prototype
- **What you learn**: How to scope projects, pick the right tools, and demo your work
- **Demo outcome**: Your first public LinkedIn post with a working demo link

**Weeks 1–2 — LLM Workflow Builder**
- **What you build**: End-to-end automation that pulls data from 3+ sources and delivers insights
- **What you learn**: Prompt engineering, API integrations, error handling in production
- **Demo outcome**: Live tool + walkthrough video recruiters can test

**Weeks 3–4 — Conversational AI Agent**
- **What you build**: Text-based agent that handles real user queries with context memory
- **What you learn**: Agent architecture, edge case handling, user experience design
- **Demo outcome**: Deployed chatbot with usage analytics

**Weeks 5–6 — Voice AI Interface**
- **What you build**: Voice-in, voice-out AI agent for a specific use case
- **What you learn**: Speech recognition, natural conversation flow, latency optimization
- **Demo outcome**: Recorded demo of a real conversation with your agent

**Weeks 7–8 — AI-Powered Web Experience**
- **What you build**: Full website for a small business with AI-generated content
- **What you learn**: Web design, copywriting, SEO, deployment pipelines
- **Demo outcome**: Live website + case study of your design process

**Weeks 9–10 — Choose Your Track**
- **Option A - Micro Product**: Build and launch a small SaaS tool people can pay for
- **Option B - AI Video**: Create AI-generated video content with custom workflows
- **Demo outcome**: Product launch post + early user feedback

**Weeks 11–12 — Team Capstone**
- **What you build**: Production-grade product with your squad, like real teams ship
- **What you learn**: Collaboration, code review, project management, stakeholder demos
- **Demo outcome**: The story you tell in every interview

**Closing CTA**:
```
"By Week 12, you'll have 6 projects recruiters can test, not just read about."
[CTA Button] → See what past builders shipped
```

---

## Section 2: Outcomes Section (Proof of Work)

### Current Issues
❌ Bullet list with typos ("showacsing", "live projects live URLs")  
❌ No visual differentiation between outcome types  
❌ Missing the "so what?" — why each outcome matters for job search  
❌ No social proof or examples  

### Redesign Brief

#### Layout & Structure
**Visual Treatment**: Icon-based grid with metric cards

```
┌──────────────────────────────────────────┐
│  Eyebrow: "What you walk away with"      │
│  H2: Your portfolio builds itself        │
│  Lead: By Week 12, you have proof...     │
└──────────────────────────────────────────┘

┌─────────┐  ┌─────────┐  ┌─────────┐
│ [Icon]  │  │ [Icon]  │  │ [Icon]  │
│ 5-6     │  │ Team    │  │ Weekly  │
│ Projects│  │ Capstone│  │ Posts   │
└─────────┘  └─────────┘  └─────────┘
```

#### Design Specifications

**Outcome Cards** (3x2 grid on desktop, stack on mobile):
- Card style: Same as metric-card from hero section
- Background: `linear-gradient(140deg, rgba(15, 169, 255, 0.15), rgba(147, 64, 255, 0.08))`
- Icon: Custom SVG icons (code, team, megaphone, profile, notes, network)
- Hover: Lift + glow effect

**Each Card Contains**:
- Icon (24px, gradient stroke)
- Metric number (large, gradient text)
- Outcome title (bold)
- "Why it matters" subtext (muted)

#### Copy Rewrite

**Section Header**:
```
Eyebrow: "Proof of work"
H2: Your portfolio builds itself while you learn
Lead: Every week adds something real to show recruiters. No fluff, no theory—just shipped work.
```

**Outcome Cards**:

**Card 1: Live Projects**
- **Metric**: 5–6 projects
- **Title**: Live URLs, not just GitHub repos
- **Why it matters**: Recruiters can click and test your work in 30 seconds

**Card 2: Team Capstone**
- **Metric**: 1 production app
- **Title**: Built like real teams ship
- **Why it matters**: The story you tell when they ask "Tell me about a time you collaborated"

**Card 3: Public Build Log**
- **Metric**: 12+ LinkedIn posts
- **Title**: Weekly progress updates
- **Why it matters**: Your profile shows you're a builder before the interview even starts

**Card 4: Personal Brand**
- **Metric**: Optimized profile
- **Title**: LinkedIn that tells your story
- **Why it matters**: Recruiters find you, not the other way around

**Card 5: Interview Prep**
- **Metric**: 6 project walkthroughs
- **Title**: Notes on how you built everything
- **Why it matters**: You speak confidently because you actually built it

**Card 6: Builder Network**
- **Metric**: 40+ connections
- **Title**: Mentors, peers, and partner teams
- **Why it matters**: Referrals happen when people know your work

**Closing Statement**:
```
So when someone asks "What have you built?" you share a link, not a promise.

[Visual Element: Screenshot carousel of sample project demos]
```

---

## Section 3: Stack Section (Tools & Tech)

### Current Issues
❌ Logo strip is plain text, not actual logos  
❌ No context for why each tool matters  
❌ Overwhelming list without categorization  
❌ Missing the "you'll learn as you go" reassurance  

### Redesign Brief

#### Layout & Structure
**Visual Treatment**: Categorized tool cards with animated logo reveals

```
┌─────────────────────────────────────┐
│  Eyebrow: "Tools & stack"            │
│  H2: Build with what top teams use   │
│  Lead: (reassurance copy)            │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  AI & LLMs                           │
│  [OpenAI] [Anthropic] [Groq]        │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│  Automation & Agents                 │
│  [n8n] [LangChain] [LlamaIndex]     │
└─────────────────────────────────────┘
```

#### Design Specifications

**Category Sections**:
- Each category in a glassmorphic container
- Category title: Small gradient underline
- Tools: Actual logo images (40x40px) with hover scale effect
- Tooltip on hover: "You'll use this in Week X"

**Tool Cards**:
- Size: 80px x 80px
- Background: `rgba(255, 255, 255, 0.04)`
- Border: `1px solid rgba(255, 255, 255, 0.08)`
- Border-radius: `16px`
- Hover: Scale(1.05) + colored shadow matching tool brand
- Logo: Centered, 40x40px, grayscale default → color on hover

**Animation**:
- Stagger reveal as user scrolls
- Logos fade in with slight rotation (5deg)

#### Copy Rewrite

**Section Header**:
```
Eyebrow: "Production-ready stack"
H2: Build with the same tools top companies trust
Lead: Every tool is taught when you need it. Start with ChatGPT? Perfect. We'll guide you through the rest as you build.
```

**Tool Categories**:

**AI Models & APIs**
- OpenAI (GPT-4, DALL-E)
- Anthropic (Claude)
- Groq (Fast inference)
- Google Gemini

**Automation & Workflows**
- n8n (Visual automation)
- LangChain (Agent frameworks)
- LlamaIndex (Data connectors)

**Voice & Media**
- ElevenLabs (Voice synthesis)
- Retell AI (Voice agents)
- Runway/Pika (AI video)

**Development & Deployment**
- Cursor (AI coding)
- Next.js (Web apps)
- Supabase (Backend)
- Vercel (Hosting)

**Design & Content**
- Figma (Design)
- Canva (Graphics)
- Framer (Prototyping)

**Reassurance Panel** (below categories):
```
┌─────────────────────────────────────────────┐
│ "Never used these before? Neither have most │
│  students. We teach each tool exactly when  │
│  you need it for your project."             │
│                                             │
│  — Kartik Sahu, GenAI Engineer, IIT Bombay │
└─────────────────────────────────────────────┘
```

**Closing CTA**:
```
[Download Icon] Download the full curriculum & tool guide
```

---

## Section 4: Founders Section (Leadership)

### Current Issues
✅ Structure is good  
⚠️ Could use more visual interest  
⚠️ Missing "why you should trust us" proof points  

### Redesign Brief

#### Layout & Structure
**Keep current 3-column grid, enhance with**:

**Visual Additions**:
- Animated gradient border on hover
- Small badge icons for credentials (IIT, company logos)
- LinkedIn profile links as subtle icons

**Founder Cards Enhanced**:
- Add "Built X products" or "Trained X people" metric above bio
- Small icon strip of tools they're expert in
- Hover state: Card lifts, gradient border animates

#### Copy Enhancements

**Add Proof Metrics** (above each bio):

**Sarath Ramesh**
- 🎯 Trained 70+ professionals into AI Natives
- 🚀 Built 5+ enterprise automation systems

**Kartik Sahu**
- 🎯 Shipped 10+ AI products in production
- 🚀 3 years teaching AI development

**Kshitiz Agarwal**
- 🎯 Scaled venture team with AI workflows
- 🚀 Mentored 15+ IIT Bombay grads

**Enhanced Quote Card**:
```
"We built this program to hire from it ourselves. 
Every project, every demo, every tool—it's what we'd 
want to see in a candidate we're interviewing."

— Sarath Ramesh, Founder
```

---

## Section 5: Who Section (Ideal Candidate)

### Current Issues
❌ Feels like a requirements doc, not an invitation  
❌ Missing emotional connection to student fears  
❌ No differentiation between "nice to have" and "must have"  
❌ Doesn't address common objections ("I'm not technical enough")  

### Redesign Brief

#### Layout & Structure
**Visual Treatment**: Split panel design with "You might be..." scenarios

```
┌─────────────────────────────────────┐
│  Left Panel: Student Scenarios       │
│  Right Panel: What We Provide        │
└─────────────────────────────────────┘
```

#### Design Specifications

**Scenario Cards** (left side):
- 3 persona cards with icons
- Each card: Photo placeholder → illustration of student type
- Hover: Highlight matching "What we provide" on right

**What We Provide** (right side):
- Checklist with animated checkmarks
- Each item appears as corresponding scenario is hovered

#### Copy Rewrite

**Section Header**:
```
Eyebrow: "Is this for you?"
H2: If you're tired of theory and ready to build, you're in the right place
Lead: We've trained final-year students with zero coding experience and working professionals switching careers. The common thread? They showed up, asked questions, and shipped every week.
```

**Student Scenarios**:

**Scenario 1: The Anxious Finalist**
```
You're in final year, placements are starting, and your resume looks like everyone else's. You know theory but have nothing to show. You're worried companies will pick someone with "real experience."

→ We give you: 6 projects to demo, weekly mentor feedback, and interview prep that's based on what you actually built.
```

**Scenario 2: The Curious Non-Coder**
```
You don't have a CS degree. Maybe you've only used ChatGPT. You're interested in AI but don't know where to start, and you're afraid "technical" programs will leave you behind.

→ We give you: Step-by-step guidance, low-code tools, and a squad that learns together. If you can follow instructions and ask for help, you'll ship.
```

**Scenario 3: The Motivated Self-Learner**
```
You've done online courses, watched YouTube tutorials, maybe even started a project. But you never finished, you have no one to review your work, and you don't know if what you're building even matters.

→ We give you: Structure, deadlines, mentor code reviews, and projects designed around real business problems.
```

**Requirements Section** (redesigned):

**What You Need**:
✅ 10–12 hours per week (2 calls + building time)  
✅ Willingness to share your work publicly (LinkedIn, GitHub)  
✅ Commitment to ship every week, even if it's messy  
✅ Curiosity to ask questions when you're stuck  

**What You DON'T Need**:
❌ Coding experience (we teach as you build)  
❌ Expensive tools (we provide API credits)  
❌ Perfect English (demos can be in Hindi/English)  
❌ Prior AI knowledge (ChatGPT familiarity is enough)  

**Closing CTA**:
```
Still unsure if you're ready?

[Button] Schedule a 10-min call with a mentor
[Link] Read FAQs from students like you →
```

---

## Section 6: Apply Section (Final CTA)

### Current Issues
❌ Generic "Apply Now" without urgency  
❌ Missing scholarship details  
❌ No pricing information (creates friction)  
❌ Process steps are too vague  

### Redesign Brief

#### Layout & Structure
**Visual Treatment**: Urgency-driven CTA with countdown + social proof

```
┌─────────────────────────────────────┐
│  Countdown Timer: X seats left       │
│  Pricing Card (transparent)          │
│  Application Process (detailed)      │
│  Scholarship Info (highlighted)      │
│  Final CTA Button (pulsing)          │
└─────────────────────────────────────┘
```

#### Design Specifications

**Urgency Indicator**:
- Animated counter: "14 of 20 seats filled"
- Progress bar with gradient fill
- Pulsing glow effect

**Pricing Card**:
- Glassmorphic panel
- Strike-through "regular" price
- Founding cohort discount highlighted
- Payment plan options
- Scholarship badge

**Application Process**:
- Horizontal stepper (not just arrows)
- Each step expandable with details
- Estimated time for each step

#### Copy Rewrite

**Section Header**:
```
Eyebrow: "Founding Cohort • Jan 2025"
H2: 14 of 20 seats filled. Applications close Dec 15th.
Lead: We're keeping the first cohort small so every builder gets close mentor time and real feedback. If you want proof you can show in interviews, this is where you build it.
```

**Pricing Panel**:
```
┌─────────────────────────────────────────┐
│  Founding Cohort Pricing                 │
│                                          │
│  ₹29,999  ₹19,999                        │
│  (Early bird discount ends Dec 5)        │
│                                          │
│  What's included:                        │
│  ✓ 12 weeks of mentorship                │
│  ✓ API credits for all tools (~₹5k value)│
│  ✓ 2 team calls/week + office hours      │
│  ✓ Portfolio review & interview prep     │
│  ✓ Access to partner network             │
│                                          │
│  💰 Scholarships available for:          │
│  • Women in tech                         │
│  • First-generation college students     │
│  • Tier 2/3 college students             │
│                                          │
│  [Apply for scholarship] →               │
└─────────────────────────────────────────┘
```

**Application Process** (detailed stepper):

**Step 1: Submit Application (5 min)**
- Basic info + "Why do you want to join?"
- No resume required
- Response within 48 hours

**Step 2: Intro Call (15 min)**
- Meet a mentor
- Discuss your goals
- See if it's a fit (both ways)

**Step 3: Start Week 0 (Jan 6, 2025)**
- Meet your squad
- Set up tools
- Ship your first demo by Jan 10

**Scholarship Application**:
```
┌─────────────────────────────────────────┐
│  🎓 Scholarship Program                  │
│                                          │
│  We reserve 5 seats for underrepresented │
│  builders who can't afford full price.   │
│                                          │
│  Criteria:                               │
│  • Demonstrated financial need           │
│  • Commitment to complete the program    │
│  • Willingness to share your journey     │
│                                          │
│  Scholarship covers: 50-100% of fees     │
│                                          │
│  [Apply for scholarship] →               │
└─────────────────────────────────────────┘
```

**Final CTA**:
```
[Large Pulsing Button with gradient]
Apply for Founding Cohort

[Small text below]
Questions? Email contact@pftf.in or schedule a call
[WhatsApp icon] Quick questions? WhatsApp us
```

---

## Section 7: FAQ Section (Trust Building)

### Current Issues
✅ Good questions  
⚠️ Some typos ("rpeititive")  
⚠️ Could group by concern type  
⚠️ Missing expandable/collapsible UI  

### Redesign Brief

#### Layout & Structure
**Visual Treatment**: Categorized accordion with search

```
┌─────────────────────────────────────┐
│  [Search FAQs...]                    │
│                                      │
│  📚 About the Program                │
│  💼 Job Outcomes                     │
│  💰 Pricing & Scholarships           │
│  👨‍👩‍👧‍👦 For Parents                      │
└─────────────────────────────────────┘
```

#### Design Specifications

**FAQ Accordion**:
- Category headers with icons
- Expandable questions (click to reveal)
- Smooth height animation
- Gradient indicator when expanded
- Search highlights matching text

**Interaction**:
- Click question → expand with slide-down
- Auto-scroll to expanded question
- "Was this helpful?" feedback buttons

#### Copy Rewrite & Organization

**Category 1: 📚 About the Program**

**Q: Is what you're teaching really needed by companies hiring now?**
A: Yes. Companies want builders who can automate repetitive tasks, solve complex problems with AI, and ship consistently. That's exactly what you practice here. Check our curriculum—it's based on real job descriptions from 2024-25 hiring cycles.

**Q: Will I learn programming languages like Python or Java?**
A: We focus on building AI systems, not memorizing syntax. You'll touch code when it helps, but most tools are low-code/no-code. If you've never coded, we guide you through the parts you need. If you have coded, you'll level up fast.

**Q: I don't know how to code and don't want an IT job. Does this still help?**
A: Absolutely. Every function—marketing, sales, operations, HR—needs people who can automate workflows and build with AI tools. You'll learn those skills even if you're not aiming for a developer title.

**Category 2: 💼 Job Outcomes & Placements**

**Q: Is there placement assurance or help after the program?**
A: No guarantees, but we review your work weekly, help you package it for interviews, and give you the skillset, confidence, and profile to stand out. We also introduce top performers to our partner network.

**Q: How soon will I get a job after this program?**
A: Most builders start interviewing right after Demo Day (Week 12). Realistic timeline: 1-3 months post-program, depending on your effort, interview prep, and market timing.

**Q: Can you show examples of AI-native job roles?**
A: Think: AI Product Specialist, Automation Engineer, Workflow Designer, Agent Operator, AI Implementation Consultant. We share live job postings inside the cohort so you can target the right roles.

**Q: How many students have been placed after learning from you?**
A: This is our founding cohort, so you'll be the first group. What you get is the exact format we've used inside our own companies to transform 70+ working professionals into AI Natives.

**Category 3: 💰 Pricing, Scholarships & Logistics**

**Q: How much does the program cost?**
A: Founding cohort price: ₹19,999 (regular ₹29,999). Includes 12 weeks of mentorship, API credits (~₹5k value), portfolio review, and interview prep. Payment plans available.

**Q: Are scholarships available?**
A: Yes. We reserve 5 seats for underrepresented builders (women in tech, first-gen students, Tier 2/3 colleges). Scholarships cover 50-100% of fees based on need. Apply separately.

**Q: What if I can't attend live sessions?**
A: All sessions are recorded. But live attendance is strongly encouraged—real-time feedback is where the magic happens. If you miss a call, catch up async and join office hours.

**Category 4: 👨‍👩‍👧‍👦 For Parents**

**Q: Can my parents talk to someone before I apply?**
A: Of course. Email contact@pftf.in and we'll set up a call to walk them through the program, outcomes, and what makes this different from traditional training.

**Q: Why choose this over other IT training institutes?**
A: They teach theory and give certificates. We make you ship, share work publicly, and talk through it like a teammate. Recruiters care about proof, not certificates. Ask to see our students' LinkedIn posts—that's the difference.

**Q: Are there reviews from existing students?**
A: This is Cohort 01, so no student reviews yet. But you can check LinkedIn posts from the 70+ professionals we've trained into AI Natives at our companies. We'll share Cohort 01 build logs in real-time.

**Still have questions?**
```
[Button] Schedule a call with the team
[Link] Email us: contact@pftf.in
```

---

## Implementation Checklist

### Phase 1: Journey Section
- [ ] Create animated timeline component with Framer Motion
- [ ] Design week cards with glassmorphic styling
- [ ] Implement pulsing dot indicators
- [ ] Rewrite copy for all 7 project phases
- [ ] Add "Tools used" tag strips

### Phase 2: Outcomes Section
- [ ] Design 6 outcome metric cards
- [ ] Create custom SVG icons for each outcome
- [ ] Implement hover animations
- [ ] Add screenshot carousel component
- [ ] Rewrite copy with "why it matters" context

### Phase 3: Stack Section
- [ ] Source actual tool logos (40x40px)
- [ ] Create categorized tool grid
- [ ] Implement stagger reveal animation
- [ ] Add hover tooltips with "Week X" context
- [ ] Design reassurance quote panel

### Phase 4: Founders Section
- [ ] Add proof metrics above each bio
- [ ] Create tool expertise icon strips
- [ ] Implement animated gradient borders
- [ ] Add LinkedIn profile links
- [ ] Enhance quote card styling

### Phase 5: Who Section
- [ ] Design 3 student scenario cards
- [ ] Create split-panel layout
- [ ] Implement hover interactions
- [ ] Rewrite copy for emotional connection
- [ ] Add "What you DON'T need" section

### Phase 6: Apply Section
- [ ] Build countdown/urgency indicator
- [ ] Design pricing card with scholarship info
- [ ] Create detailed application stepper
- [ ] Add WhatsApp CTA option
- [ ] Implement pulsing CTA button

### Phase 7: FAQ Section
- [ ] Build accordion component
- [ ] Add search functionality
- [ ] Categorize questions (4 groups)
- [ ] Implement smooth expand/collapse
- [ ] Add "Was this helpful?" feedback

---

## Design System Additions Needed

### New Components
```css
/* Animated Timeline Dot */
.timeline-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--primary);
  animation: pulse-blue 2s ease-in-out infinite;
}

/* Metric Card (enhanced) */
.metric-card-enhanced {
  background: linear-gradient(140deg, rgba(15, 169, 255, 0.15), rgba(147, 64, 255, 0.08));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.metric-card-enhanced:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(15, 169, 255, 0.3);
}

/* Tool Logo Card */
.tool-card {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  display: grid;
  place-items: center;
  transition: all 0.3s ease;
}

.tool-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(15, 169, 255, 0.4);
}

/* Urgency Indicator */
.urgency-bar {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  overflow: hidden;
}

.urgency-fill {
  height: 100%;
  background: linear-gradient(90deg, #ff7abd, #ff4757);
  animation: pulse-fill 2s ease-in-out infinite;
}

/* Accordion Item */
.faq-accordion-item {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-accordion-item.expanded {
  border-color: rgba(15, 169, 255, 0.4);
  box-shadow: 0 10px 30px rgba(15, 169, 255, 0.2);
}
```

### Animation Keyframes
```css
@keyframes pulse-fill {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

@keyframes slide-down {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px;
  }
}
```

---

## Final Notes

> [!IMPORTANT]
> **Consistency is Key**: Every section should feel like part of the same premium experience. Use the established gradient colors, glassmorphic cards, and animation patterns.

> [!TIP]
> **Mobile-First**: All new components must work beautifully on mobile. Stack cards vertically, ensure touch targets are 44px+, and test scroll animations on actual devices.

> [!WARNING]
> **Performance**: Framer Motion animations can be heavy. Use `viewport={{ once: true }}` to prevent re-triggering, and lazy-load images/logos.

**Brand Voice Reminder**: You're speaking to anxious final-year students who are terrified of graduating without job prospects. Every word should either:
1. Acknowledge their fear
2. Provide concrete proof
3. Make the next step crystal clear

Avoid: Corporate jargon, vague promises, passive voice
Use: Direct language, specific outcomes, active voice
