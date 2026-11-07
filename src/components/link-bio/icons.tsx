type IconProps = {
  className?: string;
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M12.04 3.2A8.7 8.7 0 0 0 4.5 16.55L3.4 20.6l4.16-1.09A8.7 8.7 0 1 0 12.04 3.2Zm4.86 12.28c-.2.57-1.18 1.09-1.64 1.16-.42.06-.96.09-1.55-.1-.36-.11-.82-.27-1.41-.52-2.48-1.07-4.1-3.57-4.22-3.74-.12-.17-1.01-1.34-1.01-2.56s.64-1.82.87-2.07c.22-.25.49-.31.65-.31h.47c.15 0 .35-.06.55.42.2.49.69 1.7.75 1.82.06.13.1.27.02.44-.08.17-.12.27-.24.42-.12.14-.25.32-.36.43-.12.12-.24.25-.1.48.13.23.59.97 1.27 1.57.87.78 1.6 1.02 1.83 1.14.23.11.36.1.5-.06.13-.17.57-.66.72-.89.15-.23.3-.19.5-.11.2.08 1.28.6 1.5.71.22.11.37.17.42.26.06.1.06.55-.14 1.12Z"
      />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M5 8.5h14M5 15.5h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M7 7l10 10M17 7 7 17"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M9 6.5 15.5 12 9 17.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TagIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M4.8 12.2 12 4.9h6.2V11l-7.3 7.3a1.6 1.6 0 0 1-2.3 0l-3.8-3.8a1.6 1.6 0 0 1 0-2.3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="15.2" cy="8.2" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="12"
        cy="11"
        r="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}
