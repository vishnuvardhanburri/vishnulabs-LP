"use client"

import { useState, useMemo } from "react"
import { ArrowUpRight, Bot, Workflow, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

const projects = [
  {
    icon: Bot,
    title: "Autonomous Lead Qualification Engine",
    client: "Series-B SaaS Company",
    summary:
      "Built a multi-agent AI system that autonomously qualifies, scores, and routes 2,000+ inbound leads per day with zero manual intervention. The system integrates with HubSpot, Slack, and a custom scoring model trained on 12 months of sales data.",
    results: [
      { metric: "94%", label: "Qualification Accuracy" },
      { metric: "12s", label: "Avg Response Time" },
      { metric: "3.2x", label: "SQL Conversion Lift" },
    ],
    stack: ["Python", "FastAPI", "OpenAI", "LangChain", "Redis", "HubSpot API", "Slack SDK", "PostgreSQL"],
    codeRaw: {
      pipeline: "lead_qualification_v3",
      version: "3.2.1",
      agents: {
        intake_agent: {
          model: "gpt-4-turbo",
          temperature: 0.1,
          system_prompt: "Classify inbound lead data...",
          input_schema: {
            name: "string",
            company: "string",
            email: "string",
            message: "string",
            source: "enum:organic|paid|referral|event"
          },
          guardrails: {
            max_tokens: 500,
            required_fields: ["company", "email"],
            pii_filter: true,
            hallucination_check: true
          }
        },
        scoring_agent: {
          model: "custom_xgboost_v2",
          features: [
            "company_size", "industry_match",
            "budget_signal", "urgency_keywords",
            "historical_conversion_rate"
          ],
          threshold: {
            hot_lead: 0.85,
            warm_lead: 0.60,
            cold_lead: 0.30
          },
          fallback: "manual_review_queue"
        },
        routing_agent: {
          rules: [
            { condition: "score >= 0.85", action: "assign_to_ae", notify: "slack:#hot-leads" },
            { condition: "score >= 0.60", action: "add_to_nurture_sequence", notify: "email" },
            { condition: "score < 0.30", action: "archive", notify: "none" }
          ],
          deduplication: {
            strategy: "email_fingerprint",
            window: "30d"
          }
        }
      },
      orchestration: {
        retry_policy: {
          max_attempts: 3,
          backoff: "exponential",
          base_delay_ms: 1000
        },
        dead_letter_queue: "sqs://lead-dlq-prod",
        circuit_breaker: {
          failure_threshold: 5,
          recovery_timeout_ms: 30000
        },
        monitoring: {
          metrics_endpoint: "/metrics/prometheus",
          alert_on: ["error_rate > 2%", "latency_p99 > 5s"],
          dashboard: "grafana://lead-pipeline"
        }
      },
      integrations: {
        crm: {
          provider: "hubspot",
          sync: "bidirectional",
          webhook_events: ["deal.created", "contact.updated"]
        },
        notifications: {
          provider: "slack",
          channels: {
            hot_leads: "#sales-hot-leads",
            errors: "#eng-alerts"
          }
        },
        analytics: {
          provider: "mixpanel",
          events: ["lead_qualified", "lead_scored", "lead_routed"]
        }
      }
    },
  },
  {
    icon: Workflow,
    title: "Enterprise Operations Workflow Engine",
    client: "E-Commerce Platform (50K+ orders/month)",
    summary:
      "Designed and deployed a distributed workflow engine that automates order processing, inventory sync, vendor communications, and financial reconciliation across 6 systems. Replaced 14 manual processes and 3 full-time ops roles.",
    results: [
      { metric: "87%", label: "Ops Cost Reduction" },
      { metric: "0", label: "Data Sync Errors/Month" },
      { metric: "4.1s", label: "End-to-End Processing" },
    ],
    stack: ["Node.js", "Temporal.io", "PostgreSQL", "Redis", "Shopify API", "Xero API", "AWS Lambda", "Docker"],
    codeRaw: {
      workflow: "order_lifecycle_v4",
      version: "4.0.3",
      runtime: "temporal",
      config: {
        max_concurrent_workflows: 500,
        task_queue: "order-processing-prod",
        namespace: "production"
      },
      steps: [
        {
          id: "order_ingestion",
          type: "webhook_trigger",
          source: "shopify",
          events: ["orders/create", "orders/updated"],
          validation: {
            schema: "order_schema_v2",
            reject_on_fail: false,
            quarantine_queue: "invalid_orders"
          }
        },
        {
          id: "inventory_check",
          type: "parallel_task",
          tasks: [
            {
              name: "warehouse_stock_check",
              service: "inventory-api",
              timeout_ms: 3000,
              retry: { attempts: 2, backoff: "linear" }
            },
            {
              name: "vendor_availability",
              service: "vendor-gateway",
              timeout_ms: 5000,
              fallback: "cached_availability"
            }
          ],
          merge_strategy: "all_settled"
        },
        {
          id: "fulfillment_routing",
          type: "decision_node",
          rules: [
            { condition: "stock.warehouse > 0", action: "route_to_warehouse", priority: 1 },
            { condition: "stock.vendor_available == true", action: "route_to_dropship", priority: 2 },
            { condition: "default", action: "backorder_with_notification", priority: 3 }
          ]
        },
        {
          id: "shipping_label",
          type: "async_task",
          service: "shipping-gateway",
          providers: ["fedex", "ups", "dhl"],
          selection: "cheapest_within_sla"
        },
        {
          id: "financial_reconciliation",
          type: "async_task",
          service: "xero-sync",
          schedule: "on_completion",
          payload: {
            invoice_create: true,
            payment_match: true,
            tax_calculation: "auto",
            currency_conversion: "realtime"
          }
        }
      ],
      observability: {
        tracing: "opentelemetry",
        logging: {
          level: "info",
          structured: true,
          sink: "datadog"
        },
        alerts: [
          { name: "fulfillment_delay", condition: "step_duration > 30s", channel: "pagerduty" },
          { name: "error_spike", condition: "error_rate_5m > 1%", channel: "slack:#ops-critical" },
          { name: "order_stuck", condition: "workflow_age > 1h", channel: "pagerduty" }
        ],
        sla: {
          target_p50: "2s",
          target_p99: "15s",
          breach_notification: "slack:#sla-alerts"
        }
      }
    },
  },
]

function syntaxHighlight(json: string): string {
  return json
    .replace(/("(?:\\.|[^"\\])*"\s*:)/g, '<span class="json-key">$1</span>')
    .replace(
      /:\s*("(?:\\.|[^"\\])*")/g,
      (match, p1) => `: <span class="json-string">${p1}</span>`
    )
    .replace(/:\s*(\d+\.?\d*)/g, ': <span class="json-number">$1</span>')
    .replace(/:\s*(true|false)/g, ': <span class="json-boolean">$1</span>')
    .replace(/:\s*(null)/g, ': <span class="json-null">$1</span>')
}

function CodeBlock({ codeRaw }: { codeRaw: object }) {
  const [expanded, setExpanded] = useState(false)
  const fullCode = JSON.stringify(codeRaw, null, 2)
  const lines = fullCode.split("\n")
  const previewLines = lines.slice(0, 28).join("\n")
  const hasMore = lines.length > 28

  const highlightedFull = useMemo(() => syntaxHighlight(fullCode), [fullCode])
  const highlightedPreview = useMemo(
    () => syntaxHighlight(previewLines + (hasMore && !expanded ? "\n  ..." : "")),
    [previewLines, hasMore, expanded]
  )

  return (
    <div className="relative overflow-hidden rounded-xl border border-border/30 bg-[hsl(222,27%,3.5%)]">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-border/20 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-accent/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-chart-3/60" />
        </div>
        <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground/50">
          architecture.json
        </span>
      </div>

      {/* Line numbers + code */}
      <div className="overflow-x-auto">
        <div className="flex">
          {/* Line numbers */}
          <div className="hidden flex-shrink-0 select-none border-r border-border/10 py-4 pl-4 pr-3 text-right sm:block">
            {(expanded ? lines : lines.slice(0, 28)).map((_, i) => (
              <div
                key={i}
                className="text-[11px] leading-[1.7] text-muted-foreground/25"
              >
                {i + 1}
              </div>
            ))}
            {!expanded && hasMore && (
              <div className="text-[11px] leading-[1.7] text-muted-foreground/25">
                ...
              </div>
            )}
          </div>

          {/* Code content */}
          <pre className="flex-1 px-4 py-4 text-[12px] leading-[1.7] text-foreground/80 sm:text-[12.5px]">
            <code
              dangerouslySetInnerHTML={{
                __html: expanded ? highlightedFull : highlightedPreview,
              }}
            />
          </pre>
        </div>
      </div>

      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex w-full items-center justify-center gap-1.5 border-t border-border/20 py-2.5 text-xs font-medium text-primary/70 transition-colors hover:bg-secondary/30 hover:text-primary"
        >
          {expanded ? (
            <>
              Collapse
              <ChevronUp className="h-3.5 w-3.5" />
            </>
          ) : (
            <>
              Expand Full Architecture ({lines.length} lines)
              <ChevronDown className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      )}
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section className="relative py-28 md:py-36" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent/80">
              Case Studies
            </p>
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
              Production Systems I Built
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Real architectures running in production right now. Each system includes
              the actual configuration structure I use to deliver reliable, scalable automation.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/vishnuvardhanburri/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-shrink-0 items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            View more on LinkedIn
            <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-border/30 bg-card/50 transition-all duration-300 hover:border-primary/15"
            >
              {/* Project header */}
              <div className="border-b border-border/20 p-7 md:p-9">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/8 transition-colors group-hover:bg-primary/12">
                      <project.icon className="h-5 w-5 text-primary/80" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-muted-foreground">
                        {project.client}
                      </p>
                    </div>
                  </div>
                  {/* Results badges */}
                  <div className="flex flex-wrap gap-3">
                    {project.results.map((r) => (
                      <div
                        key={r.label}
                        className="flex items-baseline gap-1.5 rounded-lg border border-border/20 bg-secondary/80 px-3.5 py-2"
                      >
                        <span className="text-lg font-bold text-primary">
                          {r.metric}
                        </span>
                        <span className="text-[11px] text-muted-foreground">
                          {r.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border/20 bg-secondary/40 px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code block */}
              <div className="p-5 md:p-7">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/50">
                  System Architecture Config
                </p>
                <CodeBlock codeRaw={project.codeRaw} />
              </div>
            </div>
          ))}
        </div>

        {/* View more CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://calendly.com/vishnuvardhanburri19/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Want to see more? Start a project discussion and I will walk you through live systems
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
