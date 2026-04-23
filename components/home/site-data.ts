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
    slug: "law-firm-intake",
    eyebrow: "Law Firm (Client Intake)",
    title: "+47% More Case Consultations in 21 Days",
    result: "+47% case consultations",
    timeframe: "within 21 days",
    problem: "Case inquiries were missed during slow intake and follow-up.",
    fix: "Added instant replies, qualification, routing, and reminders.",
    microProof: "System rebuilt in 7 days",
    summary: "The intake path tightened up fast, and more good-fit cases turned into consultations.",
    before: ["Slow intake replies", "Missed follow-up windows", "Too many unworked inquiries"],
    after: ["Instant first response", "Clear qualification path", "Consistent reminders"],
    flow: ["Inquiry captured", "Lead qualified", "Right team assigned", "Follow-up sent", "Consult booked"],
    metrics: [
      { value: "+47%", label: "Booked consultations" },
      { value: "-58%", label: "Missed leads" },
    ],
  },
  {
    slug: "clinic-scheduling",
    eyebrow: "Clinic (Appointment System)",
    title: "-52% No-Shows in 14 Days",
    result: "-52% no-shows",
    timeframe: "within 14 days",
    problem: "Appointments slipped through because scheduling stayed manual.",
    fix: "Set up automated booking, reminders, forms, and follow-up.",
    microProof: "Automated scheduling pipeline",
    summary: "The clinic spent less time chasing appointments, and more patients actually showed up.",
    before: ["Manual scheduling steps", "Missed reminders", "Frequent empty slots"],
    after: ["Automated booking", "Timely reminders", "Cleaner intake before visits"],
    flow: ["Patient books", "Form completed", "Reminder sent", "Follow-up triggered", "Visit kept"],
    metrics: [
      { value: "-52%", label: "No-shows" },
      { value: "+35%", label: "Appointment completion" },
    ],
  },
  {
    slug: "real-estate-conversion",
    eyebrow: "Real Estate (Lead Conversion)",
    title: "+39% Lead-to-Deal Conversion in 18 Days",
    result: "+39% lead-to-deal conversion",
    timeframe: "within 18 days",
    problem: "Property leads went cold when response times slipped.",
    fix: "Connected instant response, CRM sync, and follow-up tracking.",
    microProof: "Fully automated pipeline",
    summary: "More inbound demand moved from first inquiry to active conversations without leaking out.",
    before: ["Slow first replies", "Follow-up gaps", "Unclear conversion visibility"],
    after: ["Instant lead response", "Tracked follow-up", "CRM always up to date"],
    flow: ["Lead captured", "Reply sent", "CRM updated", "Follow-up triggered", "Deal progressed"],
    metrics: [
      { value: "+39%", label: "Conversions" },
      { value: "3x", label: "Faster response" },
    ],
  },
]

export const flagshipCaseStudies = [
  {
    slug: "law-firm-intake",
    context: "Law Firm (Client Intake System)",
    title: "+47% More Case Consultations in 21 Days",
    problem: "Leads were missed due to slow intake and follow-ups.",
    system: [
      "Automated intake capture",
      "Instant SMS and email response",
      "Qualification and routing",
      "Reminders",
    ],
    results: [
      "+47% booked consultations",
      "-58% missed leads",
      "3x faster response time",
    ],
    timeframe: "within 21 days",
    microProof: "System deployed in 7 days",
  },
  {
    slug: "clinic-scheduling",
    context: "Clinic (Appointment System)",
    title: "-52% No-Shows in 14 Days",
    problem: "Missed appointments and manual scheduling slowed everything down.",
    system: [
      "Automated booking",
      "Reminders",
      "Intake forms",
      "Follow-ups",
    ],
    results: [
      "-52% no-shows",
      "+35% appointment completion",
      "2x scheduling efficiency",
    ],
    timeframe: "within 14 days",
    microProof: "Automated scheduling pipeline",
  },
  {
    slug: "real-estate-conversion",
    context: "Real Estate (Lead Conversion System)",
    title: "+39% Lead-to-Deal Conversion in 18 Days",
    problem: "Leads went cold because the first response kept arriving too late.",
    system: [
      "Instant lead response",
      "Follow-up automation",
      "CRM sync",
      "Tracking",
    ],
    results: [
      "+39% conversions",
      "3x faster response",
      "-45% lead drop-off",
    ],
    timeframe: "within 18 days",
    microProof: "Fully automated pipeline",
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
  { name: "Sarah D.", role: "Revenue Lead", rating: 5, text: "The biggest improvement was clarity. Everyone knew where leads were and what happened next." },
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
    title: "Lead Capture Systems",
    description: "Capture every inquiry cleanly so the next step starts right away.",
  },
  {
    title: "Automated Follow-ups",
    description: "Keep demand warm with email and SMS follow-up that runs on time.",
  },
  {
    title: "Intake & Qualification Systems",
    description: "Sort good-fit inquiries fast so teams act on the right demand first.",
  },
  {
    title: "Backend Workflow Systems",
    description: "Keep handoffs moving so no inquiry or task disappears between teams.",
  },
  {
    title: "Dashboards & Internal Tools",
    description: "Make pipeline visibility clear so teams know what needs attention next.",
  },
]

export const howWeWorkSteps = [
  {
    step: "01",
    title: "Audit system",
    description: "We review how demand enters, where it stalls, and what is hurting conversions.",
  },
  {
    step: "02",
    title: "Identify failures",
    description: "We isolate the gaps that break follow-up, handoffs, and visibility.",
  },
  {
    step: "03",
    title: "Build system",
    description: "We rebuild the path so every inquiry moves cleanly from first touch to outcome.",
  },
  {
    step: "04",
    title: "Optimize",
    description: "We keep refining the flow until the system is easier to trust and scale.",
  },
]

export const visualProofLayers = [
  { label: "Lead sources", state: "Forms, calls, ads" },
  { label: "Lead checks", state: "Usable details only" },
  { label: "Routing", state: "Right person fast" },
  { label: "Follow-up", state: "Reminders on time" },
  { label: "Booked call", state: "Tracked outcome" },
]

export const sentinelFeatures = [
  "Stops AI data exposure",
  "Creates audit visibility",
  "Enforces control before output",
  "Supports compliance workflows",
]
