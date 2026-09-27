import Link from "next/link";

export default function BrandLogo() {
  return (
    <Link href="/" className="brand-mark" aria-label="GamingPulse home">
      <span className="brand-icon" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none">
          <rect x="2" y="2" width="36" height="36" rx="11" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 21h6l3.2-8 5.2 15 3.2-9H32" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="29.5" cy="10.5" r="2" fill="currentColor" />
        </svg>
      </span>
      <span className="brand-word">Gaming<span>Pulse</span></span>
    </Link>
  );
}
