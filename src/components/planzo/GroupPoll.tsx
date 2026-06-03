import { motion } from "framer-motion";

const polls = [
  { l: "Sushi + Karaoke", v: 85, c: "bg-lime" },
  { l: "Pizza + Arcade", v: 62, c: "bg-pink" },
  { l: "Escape Room", v: 31, c: "bg-sky" },
];

export function GroupPoll() {
  return (
    <section className="px-5 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-primary p-8 text-primary-foreground md:p-14"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-pink/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 size-72 rounded-full bg-lime/30 blur-3xl" />

        <div className="relative grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest backdrop-blur">
              Binnenkort
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Van groepsapp-chaos naar één duidelijk plan.
            </h2>
            <p className="mt-4 max-w-md text-primary-foreground/80">
              Stuur een Planzo-link naar je groep. Iedereen vult beschikbaarheid, budget en voorkeuren in. Daarna maakt
              Planzo een passend voorstel.
            </p>
          </div>

          <div className="rounded-3xl bg-background/30 p-5 backdrop-blur-xl ring-1 ring-white/20">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary-foreground/70">
              Vrijdagavond — welke vibe?
            </p>
            <div className="space-y-3">
              {polls.map((p, i) => (
                <div key={p.l}>
                  <div className="mb-1.5 flex justify-between text-sm font-semibold">
                    <span>{p.l}</span>
                    <span>{p.v}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/15">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.v}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: "easeOut" }}
                      className={`h-full ${p.c}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex -space-x-2">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="size-7 rounded-full bg-gradient-to-br from-pink to-brand ring-2 ring-primary" />
              ))}
              <div className="grid size-7 place-items-center rounded-full bg-lime text-[10px] font-extrabold text-accent-foreground ring-2 ring-primary">
                +9
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
