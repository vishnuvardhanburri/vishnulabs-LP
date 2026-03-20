"use client"

import Link, { type LinkProps } from "next/link"
import { forwardRef, type AnchorHTMLAttributes } from "react"

type AppLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    prefetch?: boolean
  }

export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(function AppLink({ prefetch, ...props }, ref) {
  return <Link ref={ref} prefetch={prefetch} {...props} />
})
