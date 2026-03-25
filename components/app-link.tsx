"use client"

import Link, { type LinkProps } from "next/link"
import { forwardRef, type AnchorHTMLAttributes } from "react"

type AppLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    prefetch?: boolean
  }

export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(function AppLink({ prefetch, ...props }, ref) {
  const href = typeof props.href === "string" ? props.href : ""
  const isExternal = href.startsWith("http")

  if (isExternal) {
    return (
      <a ref={ref} href={href} rel="noopener noreferrer" target="_blank" {...props}>
        {props.children}
      </a>
    )
  }

  return <Link ref={ref} prefetch={prefetch} {...props} />
})
