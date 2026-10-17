import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SafeImg(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { className, ...rest } = props;
  return (
    <img
      {...rest}
      className={className}
      onError={(e) => {
        const t = e.currentTarget;
        t.style.visibility = "hidden";
        t.parentElement?.classList.add("bg-muted");
      }}
    />
  );
}
