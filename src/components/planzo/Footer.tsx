import { Instagram, Linkedin, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 pb-12 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-3xl font-extrabold italic">
              <span className="text-gradient-brand">Planzo.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Jij kiest de vibe, wij regelen de rest. Groepsuitjes voor vrienden, scholen en bedrijven.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Navigatie</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#top" className="hover:text-lime">Home</a></li>
              <li><a href="#activiteiten" className="hover:text-lime">Activiteiten</a></li>
              <li><a href="#plan" className="hover:text-lime">Plan jouw uitje</a></li>
              <li><a href="#bedrijven" className="hover:text-lime">Voor bedrijven</a></li>
              <li><a href="#contact" className="hover:text-lime">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Volg ons</p>
            <div className="flex gap-3">
              <a aria-label="Instagram" href="#" className="grid size-10 place-items-center rounded-xl glass hover:bg-white/10">
                <Instagram className="size-4" />
              </a>
              <a aria-label="LinkedIn" href="#" className="grid size-10 place-items-center rounded-xl glass hover:bg-white/10">
                <Linkedin className="size-4" />
              </a>
              <a aria-label="TikTok" href="#" className="grid size-10 place-items-center rounded-xl glass hover:bg-white/10">
                <Music2 className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 Planzo. Alle rechten voorbehouden.</p>
          <p>
            Mede mogelijk gemaakt door{" "}
            <a
              href="http://vanappiah.com"
              target="_blank"
              rel="noreferrer"
              className="font-bold underline decoration-lime decoration-2 underline-offset-4 hover:text-foreground"
            >
              Van Appiah VA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
