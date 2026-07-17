"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/data";
import { InstagramIcon, TikTokIcon } from "@/components/ui/SocialIcons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className={`w-full max-w-4xl flex items-center justify-between gap-4 rounded-full border border-forest/10 px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-500 ${
          scrolled
            ? "bg-warm-white/55 backdrop-blur-md shadow-soft"
            : "bg-warm-white/90 backdrop-blur-md shadow-soft-lg"
        }`}
      >
        <Link
          href="#home"
          className="font-heading text-lg sm:text-xl text-forest-dark tracking-wide shrink-0"
        >
          Threads For Tomorrow
        </Link>

        <ul className="hidden lg:flex items-center gap-6 font-body text-sm text-forest-dark/80">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative transition-colors hover:text-forest-dark after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-sage after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3 text-forest-dark/70 shrink-0">
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-terracotta transition-colors hover:scale-110 inline-block"
          >
            <InstagramIcon />
          </a>
          <a
            href={SOCIAL_LINKS.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-terracotta transition-colors hover:scale-110 inline-block"
          >
            <TikTokIcon />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden text-forest-dark p-1.5 rounded-full hover:bg-sage/10 transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-[calc(100%+0.5rem)] left-4 right-4 lg:hidden rounded-3xl bg-warm-white/95 backdrop-blur-md shadow-soft-lg border border-forest/10 p-6"
          >
            <ul className="flex flex-col gap-4 font-body text-base text-forest-dark/85">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 mt-6 pt-5 border-t border-forest/10 text-forest-dark/70">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
