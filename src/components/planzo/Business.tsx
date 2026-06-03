import { motion } from "framer-motion";
import { Briefcase, PartyPopper, Utensils, Wand2 } from "lucide-react";

const pakketten = [
  { icon: Utensils, name: "Team Dinner", desc: "Een avond uit eten, geregeld." },
  { icon: PartyPopper, name: "Activity Night", desc: "Bowlen, karten of escape." },
  { icon: Briefcase, name: "Full Experience", desc: "Eten + activiteit + drinks." },
  { icon: Wand2, name: "Custom Event", desc: "Volledig op maat gemaakt." },
];

export function Business() {
  return (
    <section id="bedrijven" className="px-5 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">Voor bedrijven</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            Laat ons jullie <span className="text-gradient-brand">teamuitje</span> regelen.
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Bedrijfsdiner of vrijdagmiddagactiviteit? Wij zoeken passende locaties, checken beschikbaarheid en nemen het
            regelwerk uit handen.
          </p>
          <motion.a
            href="#plan"
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 400, damping: 14 }}
            className="mt-7 inline-flex rounded-full bg-lime px-6 py-3 text-sm font-bold text-accent-foreground shadow-xl shadow-lime/20"
          >
            Vraag een voorstel aan
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {pakketten.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl p-5"
            >
              <span className="inline-grid size-10 place-items-center rounded-xl bg-brand-soft text-foreground">
                <p.icon className="size-4" />
              </span>
              <h3 className="mt-4 font-bold">{p.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
