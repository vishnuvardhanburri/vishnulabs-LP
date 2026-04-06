export const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "System Flow", href: "#flow" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#cases" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
]

export const trustMetrics = [
  { value: 40, prefix: "+", suffix: "%", label: "Lift in qualified intake conversion" },
  { value: 60, prefix: "-", suffix: "%", label: "Reduction in no-shows after follow-up repair" },
  { value: 3.2, prefix: "", suffix: "x", label: "Faster lead response routing for ops teams" },
  { value: 99.2, prefix: "", suffix: "%", label: "Workflow completion reliability after rebuild" },
]

export const problemTimeline = [
  {
    title: "Leads arrive with no structure",
    detail: "Forms, calls, and ads feed different systems, so contact data lands incomplete from the first touch.",
  },
  {
    title: "Validation breaks silently",
    detail: "Duplicate records, bad fields, and missing ownership create gaps that nobody sees until follow-up slips.",
  },
  {
    title: "Follow-up never fires correctly",
    detail: "Reminders, routing, and SMS flows drift out of sync, leaving high-intent leads sitting untouched.",
  },
  {
    title: "Revenue leaks compound",
    detail: "Teams start patching manually, reporting gets noisy, and growth stalls because the intake path is unreliable.",
  },
]

export const systemFlow = [
  {
    title: "Lead",
    caption: "Capture from ads, forms, calls, and referrals",
    tooltip: "Every source is normalized so one broken input does not poison the rest of the pipeline.",
  },
  {
    title: "Validate",
    caption: "Check data quality, intent, and fit before routing",
    tooltip: "Validation rules stop duplicates, incomplete records, and bad enrichment before they trigger downstream work.",
  },
  {
    title: "Route",
    caption: "Assign by market, urgency, or team capacity",
    tooltip: "Routing logic keeps handoffs deterministic so leads reach the right owner without manual sorting.",
  },
  {
    title: "Follow-up",
    caption: "Trigger reminders, outreach, and escalation paths",
    tooltip: "Follow-up is sequenced around response windows so no lead depends on one person remembering the next step.",
  },
  {
    title: "Booked",
    caption: "Push clean conversions into calendars and CRM",
    tooltip: "Booked outcomes are logged with auditability so the team can trust reporting and attribution.",
  },
]

export const services = [
  {
    title: "Intake System Rebuilds",
    result: "Repair broken lead capture, qualification, and routing flows so demand turns into booked conversations.",
  },
  {
    title: "Automation Recovery",
    result: "Replace brittle follow-up sequences with production-ready workflows that keep running without babysitting.",
  },
  {
    title: "Revenue Ops Engineering",
    result: "Connect CRM, scheduling, messaging, and reporting systems into one reliable operating loop.",
  },
  {
    title: "Embedded Delivery",
    result: "Partner from idea to deployment when your team needs senior execution without building an internal platform group.",
  },
]

export const caseStudies = [
  {
    title: "Legal intake team",
    problem: "Inbound leads were split across forms and calls, creating duplicate records and long response gaps.",
    fix: "Unified intake capture, added validation gates, and rebuilt routing with automated reminders.",
    result: "+42% qualified consult bookings in 8 weeks",
    value: 42,
  },
  {
    title: "Home services operator",
    problem: "Sales reps were manually chasing missed appointments because confirmation flows kept failing.",
    fix: "Introduced reliable sequencing across booking, reminder, and reschedule logic with fallback alerts.",
    result: "-58% no-shows after system relaunch",
    value: 58,
  },
  {
    title: "B2B SaaS growth team",
    problem: "High-intent demos were leaking due to poor lead scoring and inconsistent handoff rules.",
    fix: "Added source-aware scoring, assignment rules, and clear CRM lifecycle states.",
    result: "3.1x faster first-response execution",
    value: 3.1,
  },
]

export const reviews = Array.from({ length: 15 }, (_, index) => ({
  name: `Placeholder Client ${String(index + 1).padStart(2, "0")}`,
  company: [
    "Series A SaaS",
    "Legal Services Group",
    "Healthcare Intake Team",
    "Marketplace Operator",
    "Home Services Brand",
  ][index % 5],
  quote: [
    "The intake path finally behaves predictably, and our team is not rescuing leads by hand anymore.",
    "We now have one clear system for routing and follow-up instead of several brittle automations glued together.",
    "The biggest change was trust. Reporting is cleaner, handoffs are faster, and the workflow no longer drifts.",
  ][index % 3],
}))

export const pricingTiers = [
  {
    name: "Starter",
    price: "$4,000/mo",
    hours: "40 hours",
    audience: "For teams fixing one unstable funnel, follow-up path, or intake workflow.",
    outcome: "Stabilize the highest-leverage bottleneck and get a reliable operating baseline fast.",
  },
  {
    name: "Growth",
    price: "$8,000/mo",
    hours: "80 hours",
    audience: "For companies rebuilding full automation pipelines across lead capture, routing, and booking.",
    outcome: "Connect the full conversion path so marketing demand turns into clean, trackable pipeline.",
  },
  {
    name: "Scale",
    price: "$12,000/mo",
    hours: "120 hours",
    audience: "For operators who need ongoing system ownership, rollout support, and deeper implementation capacity.",
    outcome: "Ship and maintain production systems from idea to deployment without relying on fragile patchwork.",
  },
]
