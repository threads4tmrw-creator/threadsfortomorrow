import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div
      className={`relative ${isCenter ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      <div
        aria-hidden
        className={`absolute -z-10 blur-2xl opacity-60 w-56 h-56 rounded-full bg-butter/40 ${
          isCenter ? "left-1/2 -translate-x-1/2 -top-10" : "-left-8 -top-8"
        }`}
      />
      {eyebrow && (
        <p className="font-body text-xs sm:text-sm uppercase tracking-[0.25em] text-sage font-semibold mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-forest-dark text-balance leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p
          className={`font-body text-base sm:text-lg text-forest-dark/70 mt-5 leading-relaxed ${
            isCenter ? "max-w-2xl mx-auto" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
