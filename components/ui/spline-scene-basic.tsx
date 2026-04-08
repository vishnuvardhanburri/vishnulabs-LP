"use client"

import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { SplineScene } from "@/components/ui/splite"

export function SplineSceneBasic() {
  return (
    <Card className="relative h-[520px] w-full overflow-hidden bg-black/[0.96]">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="flex h-full flex-col md:flex-row">
        <div className="relative z-10 flex flex-1 flex-col justify-center p-8">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
            Interactive 3D
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-300">
            A lightweight Spline scene that can sit behind the hero without
            blocking load. Desktop only.
          </p>
        </div>

        <div className="relative flex-1">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="h-full w-full"
          />
        </div>
      </div>
    </Card>
  )
}

