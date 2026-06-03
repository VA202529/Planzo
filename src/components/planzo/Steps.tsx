import { motion } from "framer-motion";

const steps = [
  {
    n: "1",
    title: "Vul je wensen in",
    desc: "Aantal personen, stad, budget, datum en type uitje.",
  },
  {
    n: "2",
    title: "Wij zoeken opties",
    desc: "Planzo zoekt restaurants, activiteiten en combinaties die bij je groep passen.",
  },
  {
    n: "3",
    title: "Jij kiest de vibe",
    desc: "Je ontvangt 2 tot 3 passende voorstellen op maat.",
  },
  {
    n: "4",
    title: "Wij regelen de rest",
    desc: "Wij helpen met reservering, planning en herinneringen.",
  },
];

export function Steps() {
  return (
    <section id="hoe" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Het proces</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">Zo simpel is het.</h2>

        <div className="relative mt-12">
          <div className="absolute left-5 top-4 bottom-4 hidden w-px bg-white/10 md:left-1/2 md:block" />
          <div className="space-y-8 md:space-y-16">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className={`relative grid items-center gap-6 md:grid-cols-2 ${i % 2 ? "md:[direction:rtl]" : ""}`}
              >
                <div className="[direction:ltr] flex items-center gap-5">
                  <div
                    className={`grid size-14 shrink-0 place-items-center rounded-2xl text-xl font-extrabold ring-1 ring-white/10 ${
                      i === steps.length - 1
                        ? "bg-lime text-accent-foreground shadow-xl shadow-lime/20"
                        : i === 0
                          ? "bg-primary text-primary-foreground shadow-xl shadow-brand/30"
                          : "glass"
                    }`}
                  >
                    {s.n}
                  </div>
                  <div className="[direction:ltr]">
                    <h3 className="text-xl font-bold md:text-2xl">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground md:text-base">{s.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
