import { motion } from "framer-motion";

const links = [
  { href: "#hoe", label: "Hoe werkt het" },
  { href: "#activiteiten", label: "Activiteiten" },
  { href: "#plan", label: "Plan uitje" },
  { href: "#bedrijven", label: "Bedrijven" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:py-4">
        <a href="#top" className="text-2xl font-extrabold italic tracking-tight">
          <span className="text-gradient-brand">Planzo.</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition hover:text-foreground">
              {l.label}
            </a>
          ))}
        </div>
        <motion.a
          href="#plan"
          whileTap={{ scale: 0.94 }}
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 400, damping: 14 }}
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background shadow-lg shadow-brand/20"
        >
          Start nu
        </motion.a>
      </div>
    </nav>
  );
}
