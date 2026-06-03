import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  naam: z.string().trim().min(2, "Vul je naam in").max(80),
  email: z.string().trim().email("Geldig e-mailadres invullen").max(160),
  bericht: z.string().trim().min(5, "Schrijf een bericht").max(1000),
});

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      naam: fd.get("naam"),
      email: fd.get("email"),
      bericht: fd.get("bericht"),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) errs[i.path[0] as string] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    // TODO: stuur naar mail/Sheets/Cloud
    console.log("[Planzo] contactbericht:", parsed.data);
    setSent(true);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contact" className="px-5 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-5xl gap-10 rounded-[2.5rem] glass-strong p-8 md:grid-cols-2 md:p-14"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">Contact</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Vraag of samenwerking?</h2>
          <p className="mt-4 text-muted-foreground">
            Heb je een vraag of wil je samenwerken met Planzo? Stuur een berichtje, we reageren snel.
          </p>
        </div>

        {sent ? (
          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-lime/10 p-8 text-center ring-1 ring-lime/30">
            <CheckCircle2 className="size-10 text-lime" />
            <p className="font-bold">Bericht verzonden!</p>
            <p className="text-sm text-muted-foreground">We nemen zo snel mogelijk contact op.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4" noValidate>
            <input
              name="naam"
              placeholder="Naam"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.naam && <p className="text-xs text-pink">{errors.naam}</p>}
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.email && <p className="text-xs text-pink">{errors.email}</p>}
            <textarea
              name="bericht"
              rows={5}
              placeholder="Bericht"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.bericht && <p className="text-xs text-pink">{errors.bericht}</p>}
            <motion.button
              type="submit"
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              className="w-full rounded-2xl bg-primary py-3.5 text-sm font-extrabold text-primary-foreground shadow-xl shadow-brand/30"
            >
              Verstuur bericht
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
