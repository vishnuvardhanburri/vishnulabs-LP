type RateLimitConfig = {
  key: string
  windowMs: number
  maxRequests: number
}

type RateLimitResult = {
  allowed: boolean
  remaining: number
  retryAfterSeconds: number
}

type Bucket = {
  count: number
  resetAt: number
}

type GlobalWithRateLimitStore = typeof globalThis & {
  __vishnulabsRateLimitStore?: Map<string, Bucket>
}

function getStore() {
  const g = globalThis as GlobalWithRateLimitStore
  if (!g.__vishnulabsRateLimitStore) {
    g.__vishnulabsRateLimitStore = new Map<string, Bucket>()
  }

  return g.__vishnulabsRateLimitStore
}

export function checkRateLimit(config: RateLimitConfig): RateLimitResult {
  const now = Date.now()
  const store = getStore()
  const existing = store.get(config.key)

  if (!existing || existing.resetAt <= now) {
    const resetAt = now + config.windowMs
    store.set(config.key, {
      count: 1,
      resetAt,
    })

    return {
      allowed: true,
      remaining: Math.max(config.maxRequests - 1, 0),
      retryAfterSeconds: Math.ceil(config.windowMs / 1000),
    }
  }

  if (existing.count >= config.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(Math.ceil((existing.resetAt - now) / 1000), 1),
    }
  }

  existing.count += 1
  store.set(config.key, existing)

  return {
    allowed: true,
    remaining: Math.max(config.maxRequests - existing.count, 0),
    retryAfterSeconds: Math.max(Math.ceil((existing.resetAt - now) / 1000), 1),
  }
}
