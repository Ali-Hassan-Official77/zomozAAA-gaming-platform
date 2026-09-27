import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <BrandLogo />

            <p className="footer-copy">
              Discover remarkable games, explore new releases, and find your
              next favorite experience through a curated gaming discovery
              platform.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-links">
            <div className="footer-column">
              <span className="footer-heading">Explore</span>

              <Link href="/">Home</Link>
              <Link href="/games">Discover Games</Link>
            </div>

            <div className="footer-column">
              <span className="footer-heading">Platform</span>

              <Link href="/games">Game Library</Link>
              <Link href="/games">Popular Games</Link>
            </div>

            <div className="footer-column">
              <span className="footer-heading">Information</span>

              <a
                href="https://rawg.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Data Source
              </a>

              <a
                href="https://rawg.io/apidocs"
                target="_blank"
                rel="noopener noreferrer"
              >
                API Documentation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Gaming Pulse. All rights reserved.
          </span>

          <div className="footer-meta">
            <span>Gaming discovery platform</span>

            <a
              href="https://silverloft.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit"
            >
              Built by SilverLoft
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}