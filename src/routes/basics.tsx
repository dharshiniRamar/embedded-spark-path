import { createFileRoute } from "@tanstack/react-router";
import { Cpu, Code2, ArrowRightLeft, MemoryStick, Gauge, Home, Car, Stethoscope } from "lucide-react";
import { PageHero, Reveal, Section, SectionTitle, Badge } from "@/components/ui-kit";
import { applications } from "@/data/site";

export const Route = createFileRoute("/basics")({
  head: () => ({
    meta: [
      { title: "Embedded Systems Basics — What They Are & How They Work | EmbedLab" },
      {
        name: "description",
        content:
          "Understand embedded systems from scratch: definition, working, hardware and software parts, inputs and outputs, microcontroller vs microprocessor and real applications.",
      },
      { property: "og:title", content: "Embedded Systems Basics | EmbedLab" },
      {
        property: "og:description",
        content:
          "A beginner-friendly explanation of embedded systems, their parts, and where they are used in the real world.",
      },
    ],
  }),
  component: BasicsPage,
});

const parts = [
  {
    icon: Cpu,
    title: "Microcontroller",
    text: "The brain — CPU, memory and peripherals on a single chip.",
  },
  { icon: MemoryStick, title: "Memory", text: "Flash stores your program, RAM stores live data." },
  {
    icon: ArrowRightLeft,
    title: "Input / Output",
    text: "Sensors and buttons come in; LEDs, motors and displays go out.",
  },
  { icon: Gauge, title: "Power Supply", text: "A stable 5V or 3.3V rail keeps everything alive." },
  { icon: Code2, title: "Firmware", text: "The C program that decides what the hardware does." },
  {
    icon: ArrowRightLeft,
    title: "Communication",
    text: "UART, I2C and SPI connect chips and modules together.",
  },
];

const appIcons = [Home, Car, Stethoscope];

function BasicsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Track 01"
        title="Embedded Systems Basics"
        subtitle="A dedicated computer built into a larger product to do one job extremely well — here is how it works."
      />

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass-card h-full p-8">
              <Badge tone="cyan">Definition</Badge>
              <h2 className="mt-4 text-2xl font-bold">What is an Embedded System?</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                An embedded system is a combination of hardware and software designed to perform a
                specific task inside a bigger device. Unlike a laptop, it does not run any app you
                install — a washing machine controller only ever controls a washing machine.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                They are usually small, low power, low cost and often have real-time requirements:
                the airbag controller must react in milliseconds, every single time.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="glass-card h-full p-8">
              <Badge>Working</Badge>
              <h2 className="mt-4 text-2xl font-bold">How does it work?</h2>
              <ol className="mt-4 space-y-3">
                {[
                  "Sense — sensors or buttons produce an electrical signal.",
                  "Convert — the signal is digitised by an ADC or read as a digital pin.",
                  "Process — the firmware applies logic to decide what should happen.",
                  "Act — outputs drive LEDs, motors, relays or displays.",
                  "Repeat — the loop runs thousands of times per second, forever.",
                ].map((s, i) => (
                  <li key={s} className="flex gap-3 text-sm text-foreground/90">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-primary/30 bg-primary/10 font-mono text-xs text-primary">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle
          eyebrow="Anatomy"
          title="Main parts of an embedded system"
          subtitle="Six building blocks appear in almost every embedded product you will ever open up."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {parts.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="glass-card h-full p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan/25 bg-cyan/10 text-cyan">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass-card h-full p-8">
              <h2 className="text-2xl font-bold">Hardware vs Software</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-background/50 p-4">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-cyan">Hardware</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Board, MCU, sensors, resistors, power supply, connectors — the physical parts you
                    can touch and measure.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-background/50 p-4">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-neon">Software</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Firmware written in C/C++, drivers, libraries and sometimes a real-time operating
                    system.
                  </p>
                </div>
              </div>
              <h3 className="mt-6 text-lg font-semibold">Input and Output</h3>
              <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="rounded-md border border-border bg-background/60 px-3 py-2">
                  SENSOR
                </span>
                <span className="text-primary">→</span>
                <span className="rounded-md border border-primary/40 bg-primary/10 px-3 py-2 text-primary">
                  MCU
                </span>
                <span className="text-primary">→</span>
                <span className="rounded-md border border-border bg-background/60 px-3 py-2">
                  ACTUATOR
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="glass-card h-full p-8">
              <h2 className="text-2xl font-bold">Microcontroller vs Microprocessor</h2>
              <div className="mt-5 overflow-hidden rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <thead className="bg-surface/70 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    <tr>
                      <th className="p-3">Aspect</th>
                      <th className="p-3">Microcontroller</th>
                      <th className="p-3">Microprocessor</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    {[
                      ["Contains", "CPU + RAM + Flash + I/O", "CPU only"],
                      ["Example", "ATmega328P, ESP32", "ARM Cortex-A, Intel i5"],
                      ["Used in", "Dedicated devices", "Computers, phones"],
                      ["Power", "Very low", "High"],
                      ["Cost", "Low", "Higher"],
                    ].map((row) => (
                      <tr key={row[0]} className="border-t border-border">
                        <td className="p-3 text-foreground/90">{row[0]}</td>
                        <td className="p-3">{row[1]}</td>
                        <td className="p-3">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionTitle
          eyebrow="In the wild"
          title="Real-world applications"
          subtitle="Look around the room — you are probably within three metres of an embedded system."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {applications.map((app, i) => {
            const Icon = appIcons[i % appIcons.length]!;
            return (
              <span
                key={app}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
                {app}
              </span>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
