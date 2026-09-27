"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Search,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

import SearchBar from "@/components/SearchBar";
import SafeImage from "@/components/SafeImage";

export default function Hero({ games = [], catalogCount = 0 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const game = games[index] || null;

  useEffect(() => {
    if (paused || games.length < 2) return;
    const timer = setInterval(() => setIndex((current) => (current + 1) % games.length), 6500);
    return () => clearInterval(timer);
  }, [paused, games.length]);

  if (!game) {
    return (
      <section className="hero-shell hero-empty">
        <div className="hero-noise" />
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow-pill"><span className="live-dot" /> GAMING PULSE / LIVE CATALOG</span>
            <h1>Find the game<br /><em>worth your time.</em></h1>
            <p className="hero-description">Search the live game catalog, compare ratings and discover your next obsession.</p>
            <SearchBar large />
          </div>
        </div>
      </section>
    );
  }

  const genres = (game.genres || []).slice(0, 3).map((genre) => genre.name);
  const previousGame = () => setIndex((current) => (current - 1 + games.length) % games.length);
  const nextGame = () => setIndex((current) => (current + 1) % games.length);

  return (
    <section className="hero-shell" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="hero-bg">
        <AnimatePresence mode="wait">
          <motion.div key={game.id} className="hero-bg-image" initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: 0.9 }}>
            <SafeImage src={game.background_image} alt="" fill priority={index === 0} sizes="100vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>
        <div className="hero-vignette" />
        <div className="hero-grid" />
        <div className="hero-red-glow" />
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow-pill"><span className="live-dot" /> LIVE SPOTLIGHT · {String(index + 1).padStart(2, "0")}/{String(games.length).padStart(2, "0")}</span>

          <AnimatePresence mode="wait">
            <motion.div key={game.id} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.45 }}>
              <div className="hero-overline"><Zap size={13} /> TRENDING NOW</div>
              <Link href={`/games/${game.id}`} className="hero-title-link"><h1>{game.name}</h1></Link>

              <div className="hero-meta">
                {game.rating ? <span className="hero-rating"><Star size={14} fill="currentColor" /> {Number(game.rating).toFixed(1)} / 5</span> : null}
                {game.released ? <span>{new Date(game.released).getFullYear()}</span> : null}
                {game.metacritic ? <span>MC {game.metacritic}</span> : null}
              </div>

              <div className="hero-tags">{genres.map((genre) => <span key={genre}>{genre}</span>)}</div>

              <p className="hero-description">A live catalog pick with ratings, platforms, release information and screenshots — ready for your next session.</p>

              <div className="hero-actions">
                <Link href={`/games/${game.id}`} className="primary-button"><Play size={15} fill="currentColor" /> View game</Link>
                <Link href="/games" className="secondary-button">Browse library <ArrowRight size={16} /></Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="hero-search">
            <div className="hero-search-label"><Search size={13} /> SEARCH THE CATALOG</div>
            <SearchBar large />
          </div>
        </div>

        <div className="hero-side">
          <motion.div className="hero-poster-wrap" animate={{ y: [0, -7, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
            <div className="poster-accent"><Sparkles size={14} /> FEATURED</div>
            <div className="hero-poster">
              <AnimatePresence mode="wait">
                <motion.div key={game.id} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.5 }}>
                  <Link href={`/games/${game.id}`} aria-label={`Open ${game.name}`}>
                    <SafeImage src={game.background_image} alt={game.name} fill sizes="(max-width: 800px) 88vw, 40vw" className="object-cover" />
                  </Link>
                </motion.div>
              </AnimatePresence>
              <div className="poster-overlay" />
              <div className="poster-caption">
                <span>NOW PLAYING</span>
                <strong>{game.name}</strong>
                <small><Star size={12} fill="currentColor" /> {game.rating ? Number(game.rating).toFixed(1) : "—"} community rating</small>
              </div>
            </div>
            <div className="poster-glow" />
          </motion.div>
        </div>
      </div>

      <div className="hero-controls">
        <button type="button" onClick={previousGame} aria-label="Previous game"><ChevronLeft size={18} /></button>
        <div className="hero-progress">{games.map((currentGame, gameIndex) => <button type="button" key={currentGame.id} className={gameIndex === index ? "active" : ""} onClick={() => setIndex(gameIndex)} aria-label={`Show ${currentGame.name}`}><span /></button>)}</div>
        <button type="button" onClick={nextGame} aria-label="Next game"><ChevronRight size={18} /></button>
      </div>

      <div className="hero-catalog"><strong>{Number(catalogCount).toLocaleString()}+</strong><span>games in the live catalog</span></div>
    </section>
  );
}
