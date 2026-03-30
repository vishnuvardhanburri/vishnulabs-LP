export type Testimonial = {
  name: string
  role: string
  country: string
  quote: string
}

export const testimonials = {
  daniel: {
    name: "Daniel Brooks",
    role: "CTO, SaaS Platform",
    country: "USA",
    quote:
      "Vishnu brings clarity to complex systems. He identified structural issues quickly and stabilized our backend without introducing unnecessary complexity. Consistent, reliable, and highly capable. 5/5.",
  },
  rachel: {
    name: "Rachel Kim",
    role: "CTO, AI SaaS",
    country: "USA",
    quote:
      "What stands out about Vishnu is his focus on system behavior, not just features. The platform is now predictable under load. Strong ownership and execution. 5/5.",
  },
  oliver: {
    name: "Oliver Grant",
    role: "Product Lead, Marketplace",
    country: "UK",
    quote:
      "Vishnu approached the problem at a systems level. Edge cases we struggled with are now handled cleanly. The improvement in reliability is measurable. 5/5.",
  },
  james: {
    name: "James Carter",
    role: "Founder, Automation Startup",
    country: "UK",
    quote:
      "He replaced fragile automations with a structured backend. The system now operates without constant intervention. Practical and consistent in execution. 5/5.",
  },
  lukas: {
    name: "Lukas Weber",
    role: "Head of Engineering, Logistics Tech",
    country: "Germany",
    quote:
      "Vishnu improved data consistency across services significantly. The system is now stable and easier to reason about. Strong technical judgment. 5/5.",
  },
  jonas: {
    name: "Jonas Fischer",
    role: "Tech Lead, B2B SaaS",
    country: "Germany",
    quote:
      "Handled scaling issues with a clean architectural approach. The system holds up under increased load without degradation. 5/5.",
  },
  ahmed: {
    name: "Ahmed Al-Farsi",
    role: "Operations Director, Service Platform",
    country: "UAE",
    quote:
      "Reduced operational overhead by stabilizing backend workflows. Vishnu was consistent and responsive throughout. 5/5.",
  },
  omar: {
    name: "Omar Hassan",
    role: "Product Lead, Booking Platform",
    country: "UAE",
    quote:
      "Focused on long-term reliability over quick fixes. The system continues to perform as usage grows. Dependable execution. 5/5.",
  },
  ananya: {
    name: "Ananya Mehta",
    role: "Founder, D2C Platform",
    country: "India",
    quote:
      "Vishnu simplified a complex backend and removed recurring failures. The system is now predictable and maintainable. 5/5.",
  },
  priya: {
    name: "Priya Nair",
    role: "Operations Head, HealthTech",
    country: "India",
    quote:
      "Significant reduction in manual intervention after backend restructuring. Clear thinking and consistent delivery. 5/5.",
  },
  michael: {
    name: "Michael Turner",
    role: "CTO, FinTech SaaS",
    country: "USA",
    quote:
      "Vishnu identified hidden failure modes in our workflows and resolved them systematically. The platform is far more robust now. 5/5.",
  },
  sophie: {
    name: "Sophie Laurent",
    role: "Product Manager, SaaS Platform",
    country: "France",
    quote:
      "He improved system reliability without overengineering. Communication was clear, and execution was steady. 5/5.",
  },
  carlos: {
    name: "Carlos Mendes",
    role: "Engineering Manager, Marketplace",
    country: "Brazil",
    quote:
      "Stabilized integrations that were previously unreliable. The system now behaves consistently across edge cases. 5/5.",
  },
  ethan: {
    name: "Ethan Walker",
    role: "Founder, B2B SaaS",
    country: "Canada",
    quote:
      "Vishnu brings a strong ownership mindset. The backend is now structured, reliable, and easier to scale. 5/5.",
  },
  noah: {
    name: "Noah Schmidt",
    role: "CTO, Automation Platform",
    country: "Germany",
    quote:
      "Approached the system with discipline and precision. Failures we accepted as ‘normal’ are no longer present. 5/5.",
  },
} as const satisfies Record<string, Testimonial>
