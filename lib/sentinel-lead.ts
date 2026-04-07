import type { LeadStatus, LeadTag } from "@/lib/lead-capture"

export type SentinelInterestType = "ASSESSMENT" | "PILOT"

export type SentinelLeadRecord = {
  name: string
  email: string
  company: string
  website: string
  problem: string
  interestType: SentinelInterestType
  tag: LeadTag
  status: LeadStatus
  createdAt: string
  source: "sentinel"
  page: string
}

export function getSentinelLeadTag(problem: string, interestType: SentinelInterestType): LeadTag {
  if (interestType === "PILOT") {
    return "HIGH_INTENT"
  }

  const normalized = problem.toLowerCase()

  if (
    normalized.includes("data") ||
    normalized.includes("compliance") ||
    normalized.includes("leak") ||
    normalized.includes("client") ||
    normalized.includes("patient")
  ) {
    return "HIGH_INTENT"
  }

  return "NORMAL"
}
