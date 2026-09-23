export function Footer() {
  return (
    <footer className="relative border-t border-border py-10 px-6 text-sm text-muted-foreground">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="uppercase tracking-[0.25em] text-xs">Civic G10</span>
        </div>
        <div className="text-xs">
          © {new Date().getFullYear()} · Página conceito não oficial.
        </div>
      </div>
    </footer>
  );
}