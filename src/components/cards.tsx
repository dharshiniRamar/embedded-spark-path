import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ComponentItem, Tool, Topic } from "@/data/electronics";
import type { Project } from "@/data/projects";
import { Badge, Button } from "@/components/ui-kit";

export function TopicCard({ topic }: { topic: Topic }) {
  return (
    <article className="glass-card group flex h-full flex-col p-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 font-mono text-sm text-cyan">
        {topic.visual}
      </div>
      <h3 className="mt-5 text-lg font-semibold">{topic.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{topic.short}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground/80">{topic.detail}</p>
      <div className="mt-5 pt-1">
        <Button variant="ghost" size="sm" className="px-0">
          Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </article>
  );
}

export function ComponentCard({ item }: { item: ComponentItem }) {
  return (
    <article className="glass-card group flex h-full flex-col p-6">
      <div className="flex h-24 items-center justify-center rounded-lg border border-border bg-background/60 text-3xl text-cyan">
        {item.symbol}
      </div>
      <h3 className="mt-5 text-lg font-semibold">{item.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
      <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground/70">Purpose</p>
      <p className="text-sm text-foreground/90">{item.purpose}</p>
      <div className="mt-auto pt-5">
        <Button variant="outline" size="sm">
          Learn More <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </article>
  );
}

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <article className="glass-card flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan/25 bg-cyan/10 font-mono text-sm text-cyan">
          {tool.name.slice(0, 2).toUpperCase()}
        </span>
        <Badge tone={tool.category === "Hardware" ? "primary" : "neon"}>{tool.tag}</Badge>
      </div>
      <h3 className="mt-5 text-lg font-semibold">{tool.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tool.description}</p>
    </article>
  );
}

const levelTone: Record<Project["level"], string> = {
  Beginner: "neon",
  Intermediate: "cyan",
  Advanced: "primary",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-card group flex h-full flex-col overflow-hidden">
      <div className="relative h-36 overflow-hidden border-b border-border bg-background/60">
        <div className="absolute inset-0 grid-circuit opacity-70" aria-hidden />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-2xl font-bold text-gradient">
            {project.name
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 3)}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Badge tone={levelTone[project.level]}>{project.level}</Badge>
        <h3 className="mt-3 text-lg font-semibold">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground/70">Components</p>
        <p className="text-sm text-foreground/90">{project.components.slice(0, 3).join(", ")}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-background/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-5">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-transform hover:translate-x-1"
          >
            View Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
