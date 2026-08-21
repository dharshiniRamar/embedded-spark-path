import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CircuitBoard, Menu, X } from "lucide-react";
import { navItems } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg [background-image:var(--gradient-primary)] text-primary-foreground">
            <CircuitBoard className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Embed<span className="text-gradient">Lab</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary bg-primary/10" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border p-2 text-foreground transition-colors hover:border-primary/60 hover:text-primary lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-[32rem] border-t opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto grid max-w-6xl gap-1 px-4 py-3">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-primary"
              activeProps={{ className: "text-primary bg-primary/10" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
