import Image from "next/image";
import Link from "next/link";

export default function BrandLogo() {
  return (
    <Link href="/" className="brand-mark" aria-label="Gaming Pulse home">
      <Image
        src="/gaming-pulse-logo.png"
        alt="Gaming Pulse"
        width={430}
        height={142}
        priority
        className="brand-logo-image"
      />
    </Link>
  );
}
