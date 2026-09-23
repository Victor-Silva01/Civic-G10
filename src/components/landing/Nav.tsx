import { motion } from "motion/react";
import { useTestDrive } from "./test-drive-context";

const links = [
  { label: "Experiência", href: "#experience" },
  { label: "Specs", href: "#specs" },
  { label: "Interior", href: "#interior" },
  { label: "Design", href: "#design" },
];

export function Nav() {
  const { open } = useTestDrive();
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/40 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="w-2 h-2 rounded-full bg-primary glow-primary" />
          <span className="text-sm uppercase tracking-[0.25em]">Civic G10</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <button
          onClick={open}
          className="text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
        >
          Test Drive
        </button>
      </div>
    </motion.header>
  );
}