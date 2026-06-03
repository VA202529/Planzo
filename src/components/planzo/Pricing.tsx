import { motion } from "framer-motion";
import { Check } from "lucide-react";

type Tier = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  highlight?: boolean;
};

const friends: Tier[] = [
  {
    name: "Easy Plan",
    price: "€9,99",
    desc: "3 ideeën op basis van locatie, budget en groep.",
    features: ["3 unieke voorstellen", "Directe boek-links", "Per e-mail"],
  },
  {
    name: "Book It",
    price: "€24,99",
    desc: "Wij zoeken opties én helpen met reserveren.",
    features: ["Alles uit Easy Plan", "Reserveringen geregeld", "Persoonlijke check-in"],
    highlight: true,
  },
  {
    name: "Full Night",
    price: "€39,99",
    desc: "Eten + activiteit + complete planning.",
    features: ["Eten + activiteit", "Planning & herinneringen", "Backup-opties"],
  },
];

const business: Tier[] = [
  {
    name: "Team Basic",
    price: "€75",
    desc: "Tot 10 personen, 2 tot 3 opties en reservering.",
    features: ["Tot 10 personen", "2-3 voorstellen", "Reservering"],
  },
  {
    name: "Team Plus",
    price: "€149",
    desc: "Eten + activiteit, planning en contact met locaties.",
    features: ["Eten + activiteit", "Volledige planning", "Contact met locaties"],
    highlight: true,
  },
  {
    name: "Custom Event",
    price: "vanaf €250",
    desc: "Grotere groepen, scholen of speciale wensen.",
    features: ["Maatwerk concept", "Onbeperkt personen", "Eigen contactpersoon"],
  },
];

export function Pricing() {
  return (
    <section id="prijzen" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Pakketten</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">Duidelijke prijzen.</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">Geen verborgen kosten, alleen puur gemak.</p>

        <TierGroup label="Voor vrienden" tiers={friends} />
        <TierGroup label="Voor bedrijven" tiers={business} />
      </div>
    </section>
  );
}

function TierGroup({ label, tiers }: { label: string; tiers: Tier[] }) {
  return (
    <div className="mt-12">
      <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-lime">{label}</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className={`rounded-3xl p-7 ring-1 transition ${
              t.highlight
                ? "bg-primary text-primary-foreground ring-primary shadow-2xl shadow-brand/40"
                : "glass ring-white/10"
            }`}
          >
            {t.highlight && (
              <span className="mb-4 inline-block rounded-full bg-lime px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-accent-foreground">
                Populair
              </span>
            )}
            <h4 className="text-xl font-extrabold">{t.name}</h4>
            <p className={`mt-1 text-xs ${t.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              {t.desc}
            </p>
            <p className="mt-5 text-3xl font-black tracking-tight">{t.price}</p>
            <ul className="mt-6 space-y-2.5">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className={`size-4 ${t.highlight ? "text-lime" : "text-lime"}`} />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#plan"
              className={`mt-7 block w-full rounded-xl py-3 text-center text-sm font-bold transition ${
                t.highlight ? "bg-lime text-accent-foreground" : "bg-white/10 hover:bg-white/15"
              }`}
            >
              Kies pakket
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
