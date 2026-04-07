export function GlobalBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050505_0%,#070912_44%,#050505_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(96,165,250,0.14),transparent_20%),radial-gradient(circle_at_82%_16%,rgba(217,70,239,0.12),transparent_22%),radial-gradient(circle_at_50%_78%,rgba(168,85,247,0.1),transparent_24%)]" />

      <div className="absolute inset-0">
        <div className="absolute left-[-10rem] top-[-8rem] h-[26rem] w-[26rem] rounded-full bg-sky-500/10 blur-[140px] mix-blend-screen" />
        <div className="absolute right-[-12rem] top-[10rem] h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-[160px] mix-blend-screen" />
        <div className="absolute bottom-[-10rem] left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[170px] mix-blend-screen" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_12%,transparent_88%,rgba(255,255,255,0.02))]" />
    </div>
  )
}
