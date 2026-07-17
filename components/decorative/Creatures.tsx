type Props = { className?: string; color?: string };

export function Bird({ className = "", color = "#4F6B56" }: Props) {
  return (
    <svg viewBox="0 0 100 60" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 35 C 25 15, 40 15, 50 30 C 60 15, 75 15, 95 35 C 78 28, 62 32, 50 42 C 38 32, 22 28, 5 35 Z"
        fill={color}
        opacity="0.55"
      />
    </svg>
  );
}

export function Star({ className = "", color = "#F3D576" }: Props) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path
        d="M20 2 L23 17 L38 20 L23 23 L20 38 L17 23 L2 20 L17 17 Z"
        fill={color}
        opacity="0.8"
      />
    </svg>
  );
}

export function Sparkle({ className = "", color = "#F3D576" }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 1 L13.8 9.2 L22 11 L13.8 12.8 L12 21 L10.2 12.8 L2 11 L10.2 9.2 Z"
        fill={color}
        opacity="0.85"
      />
    </svg>
  );
}
