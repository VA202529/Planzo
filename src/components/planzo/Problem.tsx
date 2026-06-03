import { motion } from "framer-motion";
import { MessageSquareX, CalendarX, Utensils, Receipt, Map } from "lucide-react";

const pains = [
  { icon: MessageSquareX, text: "Wie regelt het deze keer?" },
  { icon: CalendarX, text: "Welke datum kan iedereen?" },
  { icon: Utensils, text: "Waar gaan we eten?" },
  { icon: Map, text: "En wat doen we daarna?" },
  { icon: Receipt, text: "Wie betaalt wat?" },
];

export function Problem() {
  return (
    <section className="px-5 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-5xl rounded-[2.5rem] glass-strong p-8 md:p-14"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">Het probleem</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
          Groepen lopen altijd vast op dezelfde dingen.
        </h2>

        <ul className="mt-10 grid gap-3 md:grid-cols-2">
          {pains.map((p) => (
            <li
              key={p.text}
              className="flex items-center gap-4 rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/5"
            >
              <span className="grid size-9 place-items-center rounded-xl bg-pink/15 text-pink">
                <p.icon className="size-4" />
              </span>
              <span className="text-sm md:text-base">{p.text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start gap-3 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-2xl font-extrabold tracking-tight md:text-3xl">
            <span className="text-gradient-brand">→ Planzo</span> neemt het regelwerk uit handen.
          </p>
          <a
            href="#plan"
            className="rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-accent-foreground"
          >
            Start je aanvraag
          </a>
        </div>
      </motion.div>
    </section>
  );
}
