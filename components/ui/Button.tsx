import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "outline-light";
  className?: string;
  external?: boolean;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-body text-sm sm:text-base font-medium tracking-wide transition-all duration-300 ease-out hover:scale-[1.04] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

const variants = {
  solid:
    "bg-forest text-warm-white shadow-soft hover:bg-forest-dark hover:shadow-soft-lg",
  outline:
    "border-[1.5px] border-forest/70 text-forest bg-warm-white/60 backdrop-blur-sm hover:bg-forest hover:text-warm-white",
  "outline-light":
    "border-[1.5px] border-warm-white/60 text-warm-white bg-transparent hover:bg-warm-white hover:text-forest-dark",
};

export default function Button({
  href,
  children,
  variant = "solid",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external || href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
