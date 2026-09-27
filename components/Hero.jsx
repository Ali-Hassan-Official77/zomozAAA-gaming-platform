"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

import SearchBar from "@/components/SearchBar";
import SafeImage from "@/components/SafeImage";

export default function Hero({ games = [], catalogCount = 0 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const game = games[index] || null;

  useEffect(() => {
    if (paused || games.length < 2) {
      return;
    }

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % games.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [paused, games.length]);

  if (!game) {
    return (
      <section className="hero-shell hero-empty">
        <div className="hero-inner">
          <div>
            <span className="eyebrow-pill">
              RAWG powered discovery
            </span>

            <h1>Enter your next world.</h1>

            <p>
              Add your RAWG key to bring the live catalog to GamingPulse.
            </p>

            <SearchBar large />
          </div>
        </div>
      </section>
    );
  }

  const genres = (game.genres || [])
    .slice(0, 3)
    .map((genre) => genre.name);

  const previousGame = () => {
    setIndex(
      (current) => (current - 1 + games.length) % games.length
    );
  };

  const nextGame = () => {
    setIndex((current) => (current + 1) % games.length);
  };

  return (
    <section
      className="hero-shell"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background */}
      <div className="hero-bg">
        <AnimatePresence mode="wait">
          <motion.div
            key={game.id}
            className="hero-bg-image"
            initial={{
              opacity: 0,
              scale: 1.05,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.02,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <SafeImage
              src={game.background_image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="hero-vignette" />
        <div className="hero-grid" />
      </div>

      {/* Main Content */}
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow-pill">
            <span className="live-dot" />

            LIVE DISCOVERY ·{" "}
            {String(index + 1).padStart(2, "0")}/
            {String(games.length).padStart(2, "0")}
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={game.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -18,
              }}
              transition={{
                duration: 0.45,
              }}
            >
              <p className="hero-overline">
                Trending now
              </p>

              <Link href={`/games/${game.id}`}>
                <h1>{game.name}</h1>
              </Link>

              <div className="hero-meta">
                {game.rating ? (
                  <span>
                    <Star
                      size={14}
                      fill="currentColor"
                    />

                    {Number(game.rating).toFixed(1)} rating
                  </span>
                ) : null}

                {game.released ? (
                  <span>
                    {new Date(game.released).getFullYear()}
                  </span>
                ) : null}

                {game.metacritic ? (
                  <span>
                    Metacritic {game.metacritic}
                  </span>
                ) : null}
              </div>

              <div className="hero-tags">
                {genres.map((genre) => (
                  <span key={genre}>
                    {genre}
                  </span>
                ))}
              </div>

              <p className="hero-description">
                Explore a real catalog entry with ratings,
                platforms, release information and visual
                screenshots.
              </p>

              <div className="hero-actions">
                <Link
                  href={`/games/${game.id}`}
                  className="primary-button"
                >
                  <Play
                    size={15}
                    fill="currentColor"
                  />

                  Open game
                </Link>

                <Link
                  href="/games"
                  className="secondary-button"
                >
                  Explore all

                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="hero-search">
            <SearchBar large />
          </div>
        </div>

        {/* Poster */}
        <div className="hero-side">
          <div className="hero-poster">
            <AnimatePresence mode="wait">
              <motion.div
                key={game.id}
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -25,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <Link href={`/games/${game.id}`}>
                  <SafeImage
                    src={game.background_image}
                    alt={game.name}
                    fill
                    sizes="(max-width: 800px) 92vw, 38vw"
                    className="object-cover"
                  />
                </Link>
              </motion.div>
            </AnimatePresence>

            <div className="poster-glow" />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="hero-controls">
        <button
          type="button"
          onClick={previousGame}
          aria-label="Previous game"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="hero-progress">
          {games.map((currentGame, gameIndex) => (
            <button
              type="button"
              key={currentGame.id}
              className={
                gameIndex === index ? "active" : ""
              }
              onClick={() => setIndex(gameIndex)}
              aria-label={`Show ${currentGame.name}`}
            >
              <span />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={nextGame}
          aria-label="Next game"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Catalog Count */}
      <div className="hero-catalog">
        <strong>
          {Number(catalogCount).toLocaleString()}
        </strong>

        <span>
          live catalog results
        </span>
      </div>
    </section>
  );
}