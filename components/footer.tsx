export function Footer() {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-10">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
            <span className="text-[10px] font-bold text-primary-foreground">V</span>
          </div>
          <span className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Vishnu Labs
          </span>
        </div>
        <div className="flex flex-col items-center gap-3 md:items-end">
          <p className="text-xs text-muted-foreground/60">
            Backend-first architecture • Deterministic workflows • Production-grade
            reliability • Ownership delivery.
          </p>
          <div className="flex items-center gap-8">
            <a
              href="https://www.linkedin.com/in/vishnuvardhanburri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground/60 transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/vishnuvardhanburri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground/60 transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://x.com/burri_vishnu_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground/60 transition-colors hover:text-foreground"
            >
              X
            </a>
            <a
              href="https://threads.net/vishnuvardhanburri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground/60 transition-colors hover:text-foreground"
            >
              Threads
            </a>
            <a
              href="mailto:hello@vishnulabs.com"
              className="text-sm text-muted-foreground/60 transition-colors hover:text-foreground"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
