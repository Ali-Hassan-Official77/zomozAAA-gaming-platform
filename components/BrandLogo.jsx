import Image from "next/image";import Link from "next/link";
export default function BrandLogo(){return <Link href="/" className="brand-mark" aria-label="ZoMoZAAA home"><Image src="/logo.svg" alt="ZoMoZAAA" width={220} height={56} priority unoptimized/></Link>}
