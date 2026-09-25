import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <BrandLogo />

            <p className="footer-copy">
              ZoMoZAAA is a visual discovery platform for finding games
              worth your time, using real catalog data instead of invented
              content.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <span>Explore</span>

              <Link href="/">Home</Link>
              <Link href="/games">Discover</Link>
            </div>

            <div>
              <span>Data source</span>

              <a
                href="https://rawg.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                RAWG
              </a>

              <a
                href="https://rawg.io/apidocs"
                target="_blank"
                rel="noopener noreferrer"
              >
                API docs
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} ZoMoZAAA
          </span>

          <span>
            Game data &amp; images from RAWG.io
          </span>

          <a
            href="https://silverloft.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-credit"
          >
            Powered by @SilverLoft
          </a>
        </div>
      </div>
    </footer>
  );
}