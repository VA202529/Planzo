import { motion } from "framer-motion";
import { Utensils, Dumbbell, Sofa, Sparkles, GraduationCap, Building2 } from "lucide-react";

const cats = [
  { icon: Utensils, title: "Eten & drinken", items: "Restaurants · Sushi · Pizza · Tapas · Cafés", tint: "bg-pink/15 text-pink" },
  { icon: Dumbbell, title: "Actief", items: "Bowlen · Karten · Lasergamen · Trampoline", tint: "bg-lime/15 text-lime" },
  { icon: Sofa, title: "Chill", items: "Bioscoop · Poolen · Arcade · Karaoke", tint: "bg-sky/15 text-sky" },
  { icon: Sparkles, title: "Premium", items: "Escape rooms · Boottochten · Fine dining", tint: "bg-brand/20 text-foreground" },
  { icon: GraduationCap, title: "School & groepen", items: "Klassenuitjes · Studiereizen · Vereniging", tint: "bg-pink/15 text-pink" },
  { icon: Building2, title: "Bedrijfsuitjes", items: "Team dinners · Vrijmibo · Offsites", tint: "bg-lime/15 text-lime" },
];

export function Categories() {
  return (
    <section id="activiteiten" className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Categorieën</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">Voor elke groep een vibe.</h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {cats.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group glass rounded-3xl p-6 transition"
            >
              <span className={`mb-5 inline-grid size-12 place-items-center rounded-2xl ${c.tint}`}>
                <c.icon className="size-5" />
              </span>
              <h3 className="text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
