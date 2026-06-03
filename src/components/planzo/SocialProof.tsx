import { motion } from "framer-motion";
import { Zap, Heart, Users, Clock, MessageCircle } from "lucide-react";

const trust = [
  { icon: Zap, t: "Snel geregeld" },
  { icon: Heart, t: "Persoonlijke service" },
  { icon: Users, t: "Vrienden én bedrijven" },
  { icon: Clock, t: "Binnen 24u opties" },
  { icon: MessageCircle, t: "Geen groepsapp-discussies" },
];

const reviews = [
  {
    q: "“Binnen één dag hadden we drie goede opties voor ons teamuitje. Top!”",
    a: "Sanne · Marketing lead",
  },
  {
    q: "“Eindelijk hoefde niemand in de groepsapp alles te regelen.”",
    a: "Daan · Vriendengroep",
  },
];

export function SocialProof() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {trust.map((t) => (
            <div
              key={t.t}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold"
            >
              <t.icon className="size-3.5 text-lime" />
              {t.t}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {reviews.map((r, i) => (
            <motion.div
              key={r.a}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl glass p-7"
            >
              <p className="text-lg font-semibold leading-snug md:text-xl">{r.q}</p>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{r.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
