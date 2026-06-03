import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  naam: z.string().trim().min(2, "Vul je naam in").max(80),
  email: z.string().trim().email("Geldig e-mailadres invullen").max(160),
  telefoon: z.string().trim().min(6, "Telefoonnummer invullen").max(20),
  personen: z.coerce.number().min(2, "Minimaal 2 personen").max(500),
  stad: z.string().trim().min(2, "Vul een stad/regio in").max(80),
  budget: z.string().trim().min(1, "Vul een budget in").max(40),
  datum: z.string().trim().min(1, "Kies een datum"),
  type: z.enum(["eten", "activiteit", "combi", "onbekend"]),
  voor: z.enum(["vrienden", "bedrijf", "school", "familie", "date"]),
  wensen: z.string().trim().max(500).optional(),
});

const typeOpts = [
  { v: "combi", l: "Eten + activiteit" },
  { v: "eten", l: "Alleen eten" },
  { v: "activiteit", l: "Alleen activiteit" },
  { v: "onbekend", l: "Weet ik nog niet" },
] as const;

const voorOpts = [
  { v: "vrienden", l: "Vrienden" },
  { v: "bedrijf", l: "Bedrijf" },
  { v: "school", l: "School" },
  { v: "familie", l: "Familie" },
  { v: "date", l: "Date night" },
] as const;

const inputCls =
  "w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary transition";

const labelCls = "block text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-2";

export function PlanForm() {
  const [type, setType] = useState<(typeof typeOpts)[number]["v"]>("combi");
  const [voor, setVoor] = useState<(typeof voorOpts)[number]["v"]>("vrienden");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      naam: fd.get("naam"),
      email: fd.get("email"),
      telefoon: fd.get("telefoon"),
      personen: fd.get("personen"),
      stad: fd.get("stad"),
      budget: fd.get("budget"),
      datum: fd.get("datum"),
      type,
      voor,
      wensen: fd.get("wensen") || undefined,
    };
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    // TODO: integreer met Google Sheets / WhatsApp Business / Lovable Cloud
    // door deze payload te POSTen naar een server function of webhook.
    console.log("[Planzo] aanvraag ontvangen:", parsed.data);
    setSent(true);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="plan" className="px-5 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl rounded-[2.5rem] glass-strong p-7 md:p-12"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime">Plan jouw uitje</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">Klaar voor de start?</h2>
        <p className="mt-3 text-sm text-muted-foreground md:text-base">
          Vul je details in en ontvang binnen 24 uur 2 tot 3 passende opties.
        </p>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-10 flex flex-col items-center gap-4 rounded-3xl bg-lime/10 p-10 text-center ring-1 ring-lime/30"
          >
            <CheckCircle2 className="size-12 text-lime" />
            <h3 className="text-xl font-extrabold">Aanvraag binnen!</h3>
            <p className="max-w-md text-sm text-muted-foreground">
              Binnen 24 uur ontvang je 2 tot 3 passende opties in je inbox. Tot snel!
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-2 text-sm font-semibold text-lime underline-offset-4 hover:underline"
            >
              Nieuwe aanvraag
            </button>
          </motion.div>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 space-y-6" noValidate>
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Naam" name="naam" placeholder="Je volledige naam" error={errors.naam} />
              <Field label="E-mail" name="email" type="email" placeholder="je@email.com" error={errors.email} />
              <Field label="Telefoon" name="telefoon" placeholder="06 12 34 56 78" error={errors.telefoon} />
              <Field label="Aantal personen" name="personen" type="number" placeholder="8" error={errors.personen} />
              <Field label="Stad / regio" name="stad" placeholder="Utrecht" error={errors.stad} />
              <Field label="Budget p.p." name="budget" placeholder="€ 40" error={errors.budget} />
              <Field label="Voorkeursdatum" name="datum" type="date" error={errors.datum} />
            </div>

            <div>
              <label className={labelCls}>Type uitje</label>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {typeOpts.map((o) => (
                  <button
                    key={o.v}
                    type="button"
                    onClick={() => setType(o.v)}
                    className={`rounded-xl border px-3 py-3 text-xs font-semibold transition ${
                      type === o.v
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    {o.l}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className={labelCls}>Voor wie?</label>
              <div className="flex flex-wrap gap-2">
                {voorOpts.map((o) => (
                  <button
                    key={o.v}
                    type="button"
                    onClick={() => setVoor(o.v)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                      voor === o.v
                        ? "border-lime bg-lime text-accent-foreground"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    {o.l}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className={labelCls}>Speciale wensen</label>
              <textarea
                name="wensen"
                rows={4}
                placeholder="Dieetwensen, allergieën, sfeer..."
                className={inputCls}
              />
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 14 }}
              className="w-full rounded-2xl bg-primary py-4 text-base font-extrabold text-primary-foreground shadow-xl shadow-brand/30"
            >
              Verstuur aanvraag
            </motion.button>
            <p className="text-center text-[11px] italic text-muted-foreground">
              Binnen 24 uur ontvang je 2 tot 3 passende opties.
            </p>
          </form>
        )}
      </motion.div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelCls}>
        {label}
      </label>
      <input id={name} name={name} type={type} placeholder={placeholder} className={inputCls} />
      {error && <p className="mt-1.5 text-xs text-pink">{error}</p>}
    </div>
  );
}
