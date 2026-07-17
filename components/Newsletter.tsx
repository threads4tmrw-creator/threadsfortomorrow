"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { Floating } from "@/components/decorative/Scattered";
import Sticker from "@/components/decorative/Sticker";

type Status = "idle" | "loading" | "submitted" | "error";

export default function Newsletter() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("submitted");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="newsletter" className="relative py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="relative rounded-[2.5rem] bg-butter/25 border border-forest/8 shadow-soft px-8 sm:px-14 py-16 sm:py-20 text-center overflow-hidden">
            <Floating
              className="absolute left-4 top-4 w-14 hidden sm:block"
              duration={6}
              rotate={-8}
            >
              <Sticker src="/stickers/seal.png" alt="Watercolor seal" className="w-full h-auto" />
            </Floating>
            <Floating
              className="absolute right-8 bottom-8 w-14 hidden sm:block"
              duration={7}
              delay={0.4}
              rotate={8}
            >
              <Sticker
                src="/stickers/hibiscus-blue.png"
                alt="Blue jeweled hibiscus flower"
                className="w-full h-auto"
              />
            </Floating>

            <h2 className="relative font-heading text-4xl sm:text-5xl text-forest-dark">
              Stay in the Loop
            </h2>
            <p className="relative font-body text-forest-dark/65 mt-4 max-w-md mx-auto">
              Our monthly newsletter — climate awareness, sustainability
              tips, upcoming events, and chapter news, straight to your
              inbox.
            </p>

            {status !== "submitted" ? (
              <form
                onSubmit={handleSubmit}
                className="relative mt-9 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  disabled={status === "loading"}
                  placeholder="Email"
                  className="w-full flex-1 rounded-full bg-warm-white border border-forest/15 px-6 py-3.5 font-body text-sm sm:text-base text-forest-dark placeholder:text-forest-dark/40 outline-none focus-visible:ring-2 focus-visible:ring-sage transition-shadow disabled:opacity-60"
                />
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto rounded-full bg-forest text-warm-white px-7 py-3.5 font-body text-sm sm:text-base font-medium shadow-soft hover:bg-forest-dark transition-colors disabled:opacity-60"
                >
                  {status === "loading" ? "Subscribing…" : "Subscribe"}
                </motion.button>
              </form>
            ) : (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative mt-9 font-body text-forest-dark font-medium"
              >
                Thank you for joining us!
              </motion.p>
            )}

            {status === "error" && (
              <p className="relative mt-3 font-body text-sm text-terracotta">
                {errorMessage}
              </p>
            )}

            <p className="relative font-body text-sm text-forest-dark/50 mt-4 italic">
              Newsletters start going out in August — sign up now so you
              don&rsquo;t miss the first one!
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
