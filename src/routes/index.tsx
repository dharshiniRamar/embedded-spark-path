import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cpu,
  Zap,
  CircuitBoard,
  Wrench,
  Rocket,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import heroImage from "@/assets/hero-embedded.jpg";
import { Badge, Button, Reveal, Section, SectionTitle } from "@/components/ui-kit";
import { ProjectCard } from "@/components/cards";
import { benefits, categories } from "@/data/site";
import { roadmapSteps } from "@/data/electronics";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EmbedLab — Learn Embedded Systems & Electronics from Zero" },
      {
        name: "description",
        content:
          "Beginner-friendly embedded systems and electronics learning platform: basics, components, tools, a step-by-step roadmap and hands-on mini projects.",
      },
      { property: "og:title", content: "EmbedLab — Start Your Embedded Systems Journey" },
      {
        property: "og:description",
        content:
          "Learn electronics fundamentals, explore components and tools, follow a clear roadmap and build real mini projects.",
      },
    ],
  }),
  component: Index,
});

const icons: Record<string, LucideIcon> = { Cpu, Zap, CircuitBoard, Wrench, Rocket };

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-circuit opacity-70" aria-hidden />
        <div
          className="absolute -top-40 -left-24 h-96 w-96 rounded-full bg-primary/25 blur-[130px]"
          aria-hidden
        />
        <div
          className="absolute top-24 right-0 h-80 w-80 rounded-full bg-cyan/15 blur-[130px]"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <Badge tone="cyan">Beginner friendly · 100% practical</Badge>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
              Start Your <span className="text-gradient">Embedded Systems</span> Journey
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Learn the fundamentals of Embedded Systems, explore Electronics, discover essential
              tools, and build practical projects step by step.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/basics">
                Start Learning <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/projects" variant="outline">
                Explore Projects
              </Button>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                ["9", "Roadmap steps"],
                ["10", "Core components"],
                ["8", "Mini projects"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl font-bold text-cyan">{value}</dt>
                  <dd className="text-xs text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" aria-hidden />
            <img
              src={heroImage}
              alt="Glowing microcontroller on a printed circuit board with blue circuit traces"
              width={1408}
              height={1008}
              className="relative w-full rounded-2xl border border-border object-cover glow-ring"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section className="py-12 sm:py-16">
        <Reveal>
          <div className="glass-card grid gap-6 p-8 sm:p-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                One place to go from curious to confident
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                EmbedLab breaks embedded systems into small, visual lessons. No prior background is
                assumed — you start with what voltage is, and finish by wiring sensors to a
                microcontroller and writing the firmware that makes them useful.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Plain-language theory with visuals",
                "Component-by-component reference",
                "Guided 9-step learning roadmap",
                "Project walkthroughs with parts lists",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-neon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* Categories */}
      <Section>
        <SectionTitle
          eyebrow="Learn"
          title="Learning categories"
          subtitle="Five focused tracks that build on each other. Start anywhere, but the order below works best."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => {
            const Icon = icons[cat.icon] ?? Cpu;
            return (
              <Reveal key={cat.title} delay={i * 70}>
                <Link to={cat.to} className="glass-card group flex h-full flex-col p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{cat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                  <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm text-primary">
                    Open track
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Why */}
      <Section>
        <SectionTitle
          eyebrow="Why"
          title="Why learn Embedded Systems?"
          subtitle="Because the code you write ends up inside physical products people use every day."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 70}>
              <div className="glass-card h-full p-6">
                <h3 className="text-lg font-semibold text-cyan">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Roadmap preview */}
      <Section>
        <SectionTitle
          eyebrow="Path"
          title="Featured learning path"
          subtitle="From beginner to project builder in nine connected steps."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roadmapSteps.slice(0, 6).map((s, i) => (
            <Reveal key={s.step} delay={i * 60}>
              <div className="glass-card flex h-full gap-4 p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg [background-image:var(--gradient-primary)] font-mono text-sm font-bold text-primary-foreground">
                  {s.step}
                </span>
                <div>
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/roadmap" variant="outline">
            See the full roadmap <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Section>

      {/* Projects */}
      <Section>
        <SectionTitle
          eyebrow="Build"
          title="Featured mini projects"
          subtitle="Every project lists its components, technologies and working principle."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-border p-10 text-center sm:p-14">
            <div className="absolute inset-0 grid-circuit opacity-60" aria-hidden />
            <div
              className="absolute inset-x-0 -bottom-24 mx-auto h-56 w-3/4 rounded-full bg-primary/25 blur-[110px]"
              aria-hidden
            />
            <div className="relative">
              <h2 className="text-3xl font-bold sm:text-4xl">Your first circuit is one click away</h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Follow the roadmap, learn the components, and build something that actually blinks,
                senses and connects.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button to="/roadmap">Start the roadmap</Button>
                <Button to="/components" variant="outline">
                  Browse components
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
