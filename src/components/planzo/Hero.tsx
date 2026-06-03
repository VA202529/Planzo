import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative px-5 pt-12 pb-20 md:pt-24 md:pb-28">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/80"
        >
          <Sparkles className="size-3.5 text-lime" />
          Jouw planning, onze zorg
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-balance text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl"
        >
          Groepsuitjes regelen <span className="text-gradient-brand">zonder stress.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-6 max-w-xl text-pretty text-base text-muted-foreground md:text-lg"
        >
          Van restaurant tot activiteit: Planzo helpt vrienden, scholen en bedrijven met het plannen, boeken en
          organiseren van leuke momenten. <span className="text-foreground/90">Jij kiest de vibe, wij regelen de rest.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 md:flex-row"
        >
          <motion.a
            href="#plan"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 400, damping: 14 }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-base font-bold text-primary-foreground shadow-2xl shadow-brand/30 md:w-auto"
          >
            Plan een uitje <ArrowRight className="size-4" />
          </motion.a>
          <motion.a
            href="#activiteiten"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 400, damping: 14 }}
            className="inline-flex w-full items-center justify-center rounded-2xl glass px-6 py-4 text-base font-bold md:w-auto"
          >
            Bekijk activiteiten
          </motion.a>
          <motion.a
            href="#bedrijven"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 400, damping: 14 }}
            className="inline-flex w-full items-center justify-center rounded-2xl bg-lime px-6 py-4 text-base font-bold text-accent-foreground shadow-xl shadow-lime/20 md:w-auto"
          >
            Voor bedrijven
          </motion.a>
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <span>✓ Binnen 24u opties</span>
          <span>✓ Persoonlijke service</span>
          <span className="hidden md:inline">✓ Geen groepsapp-chaos</span>
        </div>
      </div>
    </section>
  );
}
