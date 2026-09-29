import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
export const runtime = 'edge';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ToastProvider from "@/components/ToastProvider";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Gaming Pulse — Discover Your Next Obsession",
    template: "%s | Gaming Pulse",
  },

  description:
    "Gaming Pulse is a premium game discovery platform powered by real RAWG game data, ratings, platforms and screenshots.",

  icons: {
    icon: "/gaming-pulse-icon.png",
    shortcut: "/gaming-pulse-icon.png",
    apple: "/gaming-pulse-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable}`}
    >
      <body>
        <ThemeProvider>
          <ToastProvider>
            <div className="site-shell">
              <Navbar />

              <main>{children}</main>

              <Footer />
            </div>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}