import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal, Section, SectionTitle } from "@/components/ui-kit";
import { TopicCard } from "@/components/cards";
import { electronicsTopics } from "@/data/electronics";

export const Route = createFileRoute("/electronics")({
  head: () => ({
    meta: [
      { title: "Basic Electronics for Beginners — Voltage, Current, Ohm's Law | EmbedLab" },
      {
        name: "description",
        content:
          "Learn basic electronics simply: voltage, current, resistance, Ohm's law, power, AC vs DC, series and parallel circuits and breadboard basics.",
      },
      { property: "og:title", content: "Basic Electronics for Beginners | EmbedLab" },
      {
        property: "og:description",
        content: "Nine core electronics topics explained in plain language with simple visuals.",
      },
    ],
  }),
  component: ElectronicsPage,
});

function ElectronicsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Track 02"
        title="Basic Electronics"
        subtitle="Nine fundamentals that every circuit you ever build will depend on. No maths beyond multiplication required."
      />
      <Section>
        <SectionTitle
          eyebrow="Fundamentals"
          title="Core topics"
          subtitle="Read them in order — each one builds on the previous."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {electronicsTopics.map((topic, i) => (
            <Reveal key={topic.name} delay={i * 60}>
              <TopicCard topic={topic} />
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
