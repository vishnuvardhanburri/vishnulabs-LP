export const LEAD_STATUSES = ["NEW", "REPLIED", "CALL_BOOKED", "CLOSED"] as const
export type LeadStatus = (typeof LEAD_STATUSES)[number]

export const LEAD_TAGS = ["HIGH_INTENT", "NORMAL"] as const
export type LeadTag = (typeof LEAD_TAGS)[number]

export type LeadRecord = {
  name: string
  email: string
  website: string
  problem: string
  tag: LeadTag
  status: LeadStatus
  createdAt: string
  source: string
  page: string
}

export function getLeadIntentTag(problem: string): LeadTag {
  const normalized = problem.toLowerCase()

  if (
    normalized.includes("no leads") ||
    normalized.includes("conversion") ||
    normalized.includes("clients")
  ) {
    return "HIGH_INTENT"
  }

  return "NORMAL"
}
