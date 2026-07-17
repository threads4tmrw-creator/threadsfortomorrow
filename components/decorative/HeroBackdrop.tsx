export default function HeroBackdrop() {
  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sky" cx="50%" cy="10%" r="90%">
          <stop offset="0%" stopColor="#FDFCF9" />
          <stop offset="55%" stopColor="#F3EFE2" />
          <stop offset="100%" stopColor="#E4E9DA" />
        </radialGradient>
        <radialGradient id="sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F3D576" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#F3D576" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hillFar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A8C2AB" />
          <stop offset="100%" stopColor="#8FB093" />
        </linearGradient>
        <linearGradient id="hillNear" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7A9A7E" />
          <stop offset="100%" stopColor="#4F6B56" />
        </linearGradient>
        <filter id="soft-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      <rect width="1440" height="900" fill="url(#sky)" />

      <circle cx="1150" cy="160" r="220" fill="url(#sun)" filter="url(#soft-blur)" />
      <circle cx="1150" cy="160" r="70" fill="#FDFCF9" opacity="0.9" />

      <circle cx="180" cy="130" r="130" fill="#E8B4B8" opacity="0.18" filter="url(#soft-blur)" />
      <circle cx="480" cy="70" r="90" fill="#C97B5F" opacity="0.12" filter="url(#soft-blur)" />

      <path
        d="M0 620 C 220 560, 380 660, 620 600 C 860 545, 1050 630, 1440 560 L1440 900 L0 900 Z"
        fill="url(#hillFar)"
        opacity="0.65"
      />
      <path
        d="M0 720 C 260 650, 480 760, 760 700 C 1020 645, 1220 730, 1440 680 L1440 900 L0 900 Z"
        fill="url(#hillNear)"
        opacity="0.85"
      />
    </svg>
  );
}
