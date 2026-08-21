import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal, Section, SectionTitle } from "@/components/ui-kit";
import { ComponentCard } from "@/components/cards";
import { componentItems } from "@/data/electronics";

export const Route = createFileRoute("/components")({
  head: () => ({
    meta: [
      { title: "Electronic Components Guide — Resistors to Motors | EmbedLab" },
      {
        name: "description",
        content:
          "A beginner's reference for ten essential electronic components: what each one does, what it looks like and why you would use it in a project.",
      },
      { property: "og:title", content: "Electronic Components Guide | EmbedLab" },
      {
        property: "og:description",
        content: "Resistors, capacitors, LEDs, transistors, relays, sensors and more, explained simply.",
      },
    ],
  }),
  component: ComponentsPage,
});

function ComponentsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Track 03"
        title="Electronic Components"
        subtitle="The parts in your starter kit, decoded — what they do, and when to reach for them."
      />
      <Section>
        <SectionTitle
          eyebrow="Reference"
          title="Ten components you will use constantly"
          subtitle="Hover a card to inspect it. Every project on this site is built from these parts."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {componentItems.map((item, i) => (
            <Reveal key={item.name} delay={i * 50}>
              <ComponentCard item={item} />
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
