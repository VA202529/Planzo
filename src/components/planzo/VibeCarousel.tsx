import { motion } from "framer-motion";
import sushi from "@/assets/vibe-sushi-bowlen.jpg";
import pizza from "@/assets/vibe-pizza-arcade.jpg";
import dinner from "@/assets/vibe-dinner-escape.jpg";
import karaoke from "@/assets/vibe-karaoke-cocktails.jpg";
import boat from "@/assets/vibe-boat-bbq.jpg";

const vibes = [
  { img: sushi, title: "Sushi + Bowlen", from: "€45 p.p.", tag: "Vrienden" },
  { img: pizza, title: "Pizza + Arcade", from: "€32 p.p.", tag: "Casual" },
  { img: dinner, title: "Dinner + Escape Room", from: "€59 p.p.", tag: "Team" },
  { img: karaoke, title: "Karaoke + Cocktails", from: "€38 p.p.", tag: "Wild" },
  { img: boat, title: "Boottocht + BBQ", from: "€55 p.p.", tag: "Premium" },
];

export function VibeCarousel() {
  return (
    <section className="py-10 md:py-16">
      <div className="mx-auto mb-6 max-w-6xl px-5">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Voorbeelden</h2>
        <p className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">Welke vibe past bij jullie?</p>
      </div>
      <div className="flex gap-4 overflow-x-auto px-5 pb-4 md:mx-auto md:max-w-6xl md:px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {vibes.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="group min-w-[78%] sm:min-w-[44%] md:min-w-[26%] glass rounded-3xl p-3"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={v.img}
                alt={v.title}
                loading="lazy"
                width={768}
                height={768}
                className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-3 flex items-center justify-between px-1.5 pb-1">
              <div>
                <p className="font-bold">{v.title}</p>
                <p className="text-xs text-muted-foreground">vanaf {v.from}</p>
              </div>
              <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground">
                {v.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
