import { createFileRoute } from "@tanstack/react-router";
import { Blobs } from "@/components/planzo/Blobs";
import { Nav } from "@/components/planzo/Nav";
import { Hero } from "@/components/planzo/Hero";
import { VibeCarousel } from "@/components/planzo/VibeCarousel";
import { Problem } from "@/components/planzo/Problem";
import { Steps } from "@/components/planzo/Steps";
import { Categories } from "@/components/planzo/Categories";
import { PlanForm } from "@/components/planzo/PlanForm";
import { Business } from "@/components/planzo/Business";
import { Pricing } from "@/components/planzo/Pricing";
import { GroupPoll } from "@/components/planzo/GroupPoll";
import { SocialProof } from "@/components/planzo/SocialProof";
import { Contact } from "@/components/planzo/Contact";
import { Footer } from "@/components/planzo/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Planzo — Groepsuitjes regelen zonder stress" },
      {
        name: "description",
        content:
          "Planzo regelt groepsuitjes voor vrienden, scholen en bedrijven. Jij kiest de vibe, wij regelen de rest.",
      },
      { property: "og:title", content: "Planzo — Groepsuitjes regelen zonder stress" },
      {
        property: "og:description",
        content: "Van restaurant tot activiteit: Planzo plant, boekt en organiseert.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      <Blobs />
      <Nav />
      <main>
        <Hero />
        <VibeCarousel />
        <Problem />
        <Steps />
        <Categories />
        <PlanForm />
        <Business />
        <Pricing />
        <GroupPoll />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
