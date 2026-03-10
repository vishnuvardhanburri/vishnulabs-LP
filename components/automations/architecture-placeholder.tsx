type ArchitecturePlaceholderProps = {
  caption: string
  nodes: string[]
}

export function ArchitecturePlaceholder({ caption, nodes }: ArchitecturePlaceholderProps) {
  return (
    <figure className="rounded-[28px] border border-white/10 bg-black/35 p-5 halo-outline">
      <figcaption className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">{caption}</figcaption>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {nodes.map((node, index) => (
          <div key={node} className="relative rounded-[22px] border border-white/10 bg-white/5 p-4">
            <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/15 text-sm font-semibold text-orange-200">
              0{index + 1}
            </div>
            <p className="text-sm font-semibold text-white">{node}</p>
            {index < nodes.length - 1 ? (
              <div className="pointer-events-none absolute -bottom-2 left-1/2 hidden h-4 w-px -translate-x-1/2 bg-gradient-to-b from-orange-300/50 to-transparent sm:block" />
            ) : null}
          </div>
        ))}
      </div>
    </figure>
  )
}
