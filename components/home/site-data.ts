export const navItems = [
  { label: "Case Studies", href: "#case-studies" },
  { label: "System Flow", href: "#system-flow" },
  { label: "Systems", href: "#systems-built" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
]

export const homepageCaseStudies = [
  {
    slug: "legal-intake-bookings",
    eyebrow: "B2B SaaS (Lead Gen Funnel)",
    title: "How we increased booked calls by 42%",
    result: "+42% booked calls",
    timeframe: "in 14 days",
    problem: "Demo requests cooled off while reps waited to reply.",
    fix: "Added instant response and automated follow-ups.",
    microProof: "System rebuilt in 7 days",
    summary: "Leads stopped sitting between teams, and booked consultations rose within eight weeks.",
    before: ["Slow replies after form fills", "Duplicate records across tools", "Manual lead sorting"],
    after: ["Immediate lead checks", "Clear owner assignment", "Follow-up that runs on time"],
    flow: ["Lead captured", "Lead checked", "Assigned fast", "Follow-up sent", "Call booked"],
    metrics: [
      { value: "+42%", label: "Booked calls" },
      { value: "-60%", label: "Missed follow-ups" },
    ],
  },
  {
    slug: "home-services-no-show-recovery",
    eyebrow: "Home Services (Inbound Leads)",
    title: "How we cut no-shows by 60%",
    result: "-60% no-shows",
    timeframe: "within 2 weeks",
    problem: "Booked jobs slipped when reminders stopped going out.",
    fix: "Set up reminder automation and tighter confirmations.",
    microProof: "Fully automated pipeline",
    summary: "Sales reps stopped rescuing appointments by hand, and more booked jobs actually showed up.",
    before: ["Reminder sequence failed silently", "Last-minute cancellations", "Manual rescue work for staff"],
    after: ["Reliable reminders", "Clear confirmation steps", "Escalation before a no-show happens"],
    flow: ["Appointment created", "Reminder sequence", "Confirmation check", "Fallback alert", "Visit kept"],
    metrics: [
      { value: "-60%", label: "No-shows" },
      { value: "+31%", label: "Kept appointments" },
    ],
  },
  {
    slug: "saas-response-speed",
    eyebrow: "B2B Sales Team (Inbound Routing)",
    title: "How we made follow-up 3.1x faster",
    result: "3.1x faster response",
    timeframe: "after system rebuild",
    problem: "Good inbound leads stalled in a messy handoff queue.",
    fix: "Introduced instant routing with one clear next step.",
    microProof: "Deployed in 1 week",
    summary: "The team responded faster, trusted the pipeline again, and stopped losing good leads in the gaps.",
    before: ["Different handoffs by channel", "Unclear owner for new demos", "Slow first response times"],
    after: ["One clear path for every source", "Instant owner assignment", "Consistent speed to first reply"],
    flow: ["Lead captured", "Intent checked", "Owner assigned", "Follow-up sent", "Demo booked"],
    metrics: [
      { value: "3.1x", label: "Faster first response" },
      { value: "+24%", label: "Qualified demos" },
    ],
  },
]

export const reviews = [
  { name: "Jordan M.", role: "Founder, B2B SaaS", rating: 5, text: "We stopped losing qualified leads in the gaps between form fills and follow-up." },
  { name: "Elena R.", role: "Operations Lead, Legal Intake Team", rating: 5, text: "The system became easier to trust, and our response times improved almost immediately." },
  { name: "Marcus T.", role: "Growth Director, Service Business", rating: 5, text: "More leads reached the right rep faster, and bookings became much more consistent." },
  { name: "Priya S.", role: "Founder, Health Services Platform", rating: 5, text: "We finally had a clean path from inquiry to appointment without manual patching." },
  { name: "Nina K.", role: "COO, Marketplace Startup", rating: 5, text: "The handoff issues were fixed, and our team stopped spending hours sorting broken entries." },
  { name: "David L.", role: "Head of Growth, SaaS Company", rating: 5, text: "The flow feels stable now. We can scale campaigns without worrying the backend will break." },
  { name: "Rachel P.", role: "Operations Manager, Home Services", rating: 5, text: "No-shows dropped because reminders and confirmations finally worked the way they should." },
  { name: "Aman V.", role: "Founder, Booking Platform", rating: 5, text: "We went from messy handoffs to a system that feels organized and dependable." },
  { name: "Sarah D.", role: "Revenue Lead, Agency", rating: 5, text: "The biggest improvement was clarity. Everyone knew where leads were and what happened next." },
  { name: "Lucas B.", role: "Product Lead, SaaS Team", rating: 5, text: "We saw a visible lift in conversions after cleaning up the intake and follow-up process." },
  { name: "Megan H.", role: "Director, Clinic Operations", rating: 5, text: "Our staff no longer had to chase avoidable issues because the system handled them upfront." },
  { name: "Omar F.", role: "Founder, Local Services Brand", rating: 5, text: "The difference was immediate: cleaner lead quality, faster handoffs, and more booked calls." },
  { name: "Sophia W.", role: "COO, Startup Studio", rating: 5, text: "It feels like an established system now, not a stack of fragile follow-up tools." },
  { name: "Kevin J.", role: "Sales Ops Lead, B2B Platform", rating: 5, text: "The team regained confidence because the path from lead to meeting finally became predictable." },
  { name: "Anika C.", role: "Founder, Professional Services Firm", rating: 5, text: "We needed consistency more than new tools, and that is exactly what got delivered." },
]

export const pricingTiers = [
  {
    name: "Starter",
    price: "$4,000",
    term: "/ month",
    hours: "40 hours",
    audience: "For small systems, fixes, and early-stage setups.",
    outcome: "Get the core system stable fast so leads stop leaking through broken handoffs.",
  },
  {
    name: "Growth",
    price: "$8,000",
    term: "/ month",
    hours: "80 hours",
    audience: "For full lead pipelines and growing systems.",
    outcome: "Build the full path from first contact to booked call with faster follow-up and fewer missed leads.",
    featured: true,
  },
  {
    name: "Scale",
    price: "$12,000",
    term: "/ month",
    hours: "120 hours",
    audience: "For ongoing system ownership and complex workflows.",
    outcome: "Move faster with senior implementation support across the systems your revenue depends on most.",
  },
]

export const systemsWeBuild = [
  {
    title: "Lead Intake System",
    description: "Capture every inquiry cleanly so the right leads are ready to act on immediately.",
  },
  {
    title: "Automated Follow-up System",
    description: "Keep leads warm with timely outreach that does not depend on manual chasing.",
  },
  {
    title: "Scheduling & Reminder System",
    description: "Turn interest into attended calls with reminders and confirmations that hold up.",
  },
  {
    title: "CRM Sync & Routing System",
    description: "Send each lead to the right person with one clear source of truth.",
  },
  {
    title: "Conversion Tracking System",
    description: "Show where leads convert, where they stall, and what needs attention next.",
  },
]

export const howWeWorkSteps = [
  {
    step: "01",
    title: "Audit",
    description: "We review where leads enter, where they stall, and what is costing you booked calls.",
  },
  {
    step: "02",
    title: "Identify failure points",
    description: "We isolate the gaps that break follow-up, handoffs, and conversion visibility.",
  },
  {
    step: "03",
    title: "Build system",
    description: "We rebuild the path so every lead moves cleanly from inquiry to booked call.",
  },
  {
    step: "04",
    title: "Optimize performance",
    description: "We keep improving the flow until the system is easier to trust and easier to scale.",
  },
]

export const visualProofLayers = [
  { label: "Lead sources", state: "Forms, calls, ads" },
  { label: "Lead checks", state: "Usable details only" },
  { label: "Routing", state: "Right person fast" },
  { label: "Follow-up", state: "Reminders on time" },
  { label: "Booked call", state: "Tracked outcome" },
]
