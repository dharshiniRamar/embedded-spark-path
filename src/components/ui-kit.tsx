import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------- Button ---------- */

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md";
  className?: string;
  to?: string;
  params?: Record<string, string>;
  type?: "button" | "submit";
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]";

const variants = {
  primary:
    "text-primary-foreground [background-image:var(--gradient-primary)] hover:brightness-110 hover:-translate-y-0.5 glow-ring",
  outline:
    "border border-border bg-surface/40 text-foreground hover:border-primary/60 hover:text-primary hover:-translate-y-0.5",
  ghost: "text-muted-foreground hover:text-primary",
};

const sizes = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-sm sm:text-base" };

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  to,
  params,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (to) {
    return (
      <Link to={to} params={params} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

/* ---------- Reveal on scroll ---------- */

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  );
}

/* ---------- Section title ---------- */

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow && (
        <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-base leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

/* ---------- Page hero ---------- */

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-circuit opacity-60" aria-hidden />
      <div
        className="absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:py-24">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">{eyebrow}</span>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      </div>
    </header>
  );
}

/* ---------- Badge ---------- */

export function Badge({ children, tone = "primary" }: { children: ReactNode; tone?: string }) {
  const tones: Record<string, string> = {
    primary: "border-primary/40 bg-primary/10 text-primary",
    cyan: "border-cyan/40 bg-cyan/10 text-cyan",
    neon: "border-neon/40 bg-neon/10 text-neon",
    muted: "border-border bg-surface text-muted-foreground",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider",
        tones[tone] ?? tones.primary,
      )}
    >
      {children}
    </span>
  );
}

export function Section({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <section className={cn("mx-auto max-w-6xl px-4 py-16 sm:py-20", className)}>{children}</section>
  );
}
