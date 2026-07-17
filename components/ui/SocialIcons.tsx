type IconProps = { className?: string };

export function InstagramIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M16.6 3c.4 2.2 1.8 3.6 4 3.9v2.7c-1.4.1-2.7-.3-4-1.1v6.2c0 3.1-2.5 5.3-5.3 5.3-2.9 0-5.3-2.3-5.3-5.3 0-2.9 2.4-5.3 5.3-5.3.3 0 .6 0 .9.1v2.8a2.6 2.6 0 0 0-.9-.2 2.6 2.6 0 1 0 2.6 2.6V3h2.7Z"
        fill="currentColor"
      />
    </svg>
  );
}
