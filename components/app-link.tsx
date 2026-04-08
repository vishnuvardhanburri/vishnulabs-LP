"use client"

import Link, { type LinkProps } from "next/link"
import { forwardRef, type AnchorHTMLAttributes } from "react"

type AppLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    prefetch?: boolean
  }

export const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(function AppLink({ prefetch, ...props }, ref) {
  const { href, ...rest } = props
  const isExternal = typeof href === "string" && href.startsWith("http")

  if (isExternal) {
    return (
      <a
        ref={ref}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {rest.children}
      </a>
    )
  }

  return <Link ref={ref} href={href} prefetch={prefetch} {...rest} />
})
