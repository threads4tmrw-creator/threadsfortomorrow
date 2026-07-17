type Props = { className?: string; color?: string };

export function Butterfly({ className = "", color = "#E8B4B8" }: Props) {
  return (
    <svg viewBox="0 0 100 80" fill="none" className={className} aria-hidden="true">
      <g opacity="0.75">
        <path
          d="M48 40 C 30 10, 5 15, 8 35 C 10 50, 30 48, 48 40 Z"
          fill={color}
          opacity="0.6"
        />
        <path
          d="M48 40 C 30 70, 8 65, 10 48 C 12 38, 30 38, 48 40 Z"
          fill={color}
          opacity="0.45"
        />
        <path
          d="M52 40 C 70 10, 95 15, 92 35 C 90 50, 70 48, 52 40 Z"
          fill={color}
          opacity="0.6"
        />
        <path
          d="M52 40 C 70 70, 92 65, 90 48 C 88 38, 70 38, 52 40 Z"
          fill={color}
          opacity="0.45"
        />
        <ellipse cx="50" cy="40" rx="2.5" ry="12" fill="#4F6B56" opacity="0.6" />
      </g>
    </svg>
  );
}
