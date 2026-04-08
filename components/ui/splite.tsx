"use client"

import React, { lazy, Suspense } from "react"

const Spline = lazy(() => import("@splinetool/react-spline"))

interface SplineSceneProps {
  scene: string
  className?: string
}

class SplineErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: unknown) {
    // Never let 3D bring the whole page down in production.
    console.warn("[SplineScene] render failed", error)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null
    }

    return this.props.children
  }
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const fallback = (
    <div className="flex h-full w-full items-center justify-center">
      <span className="loader" aria-label="Loading 3D scene" />
    </div>
  )

  return (
    <SplineErrorBoundary fallback={null}>
      <Suspense fallback={fallback}>
        <Spline scene={scene} className={className} />
      </Suspense>
    </SplineErrorBoundary>
  )
}
