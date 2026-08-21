import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal, Section, SectionTitle } from "@/components/ui-kit";
import { ToolCard } from "@/components/cards";
import { tools } from "@/data/electronics";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "Embedded Systems Tools — Arduino, ESP32, IDEs & Simulators | EmbedLab" },
      {
        name: "description",
        content:
          "The hardware and software tools every embedded beginner needs: Arduino, ESP32, STM32, Raspberry Pi, multimeters, Arduino IDE, PlatformIO, KiCad and Proteus.",
      },
      { property: "og:title", content: "Embedded Systems Tools & Technologies | EmbedLab" },
      {
        property: "og:description",
        content: "Boards, instruments and IDEs explained for complete beginners.",
      },
    ],
  }),
  component: ToolsPage,
});

function ToolsPage() {
  const hardware = tools.filter((t) => t.category === "Hardware");
  const software = tools.filter((t) => t.category === "Software");

  return (
    <div>
      <PageHero
        eyebrow="Track 04"
        title="Tools & Technologies"
        subtitle="You do not need an expensive lab. A board, a breadboard, a multimeter and a free IDE will take you a long way."
      />

      <Section>
        <SectionTitle
          align="left"
          eyebrow="Hardware"
          title="Hardware tools"
          subtitle="What sits on your desk."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {hardware.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 50}>
              <ToolCard tool={tool} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle
          align="left"
          eyebrow="Software"
          title="Software tools"
          subtitle="What runs on your computer."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {software.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 50}>
              <ToolCard tool={tool} />
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
