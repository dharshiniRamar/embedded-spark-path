import { Link } from "@tanstack/react-router";
import { CircuitBoard, Github, Linkedin, Mail, Youtube } from "lucide-react";
import { navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/40">
      <div className="absolute inset-0 grid-circuit opacity-40" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg [background-image:var(--gradient-primary)] text-primary-foreground">
              <CircuitBoard className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold">
              Embed<span className="text-gradient">Lab</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A beginner-first learning platform for Embedded Systems and Electronics — clear theory,
            real components and hands-on mini projects.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Explore</h3>
          <ul className="mt-4 space-y-2">
            {navItems.slice(1, 6).map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Connect</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>hello@embedlab.dev</li>
            <li>+91 98765 43210</li>
            <li>Coimbatore, India</li>
          </ul>
          <div className="mt-4 flex gap-3">
            {[Github, Linkedin, Youtube, Mail].map((Icon, i) => (
              <span
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="relative border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} EmbedLab. Built for learners. Demo content only.
      </div>
    </footer>
  );
}
