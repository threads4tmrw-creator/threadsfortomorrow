"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import { Floating } from "@/components/decorative/Scattered";
import Sticker from "@/components/decorative/Sticker";
import { IMPACT_AREAS } from "@/lib/data";

export default function Impact() {
  return (
    <section className="relative py-28 sm:py-32 px-6 bg-sage/[0.06] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="relative">
          <Floating
            className="absolute left-[4%] -top-6 w-16 hidden md:block"
            duration={8}
            rotate={10}
          >
            <Sticker
              src="/stickers/hammerhead-shark.png"
              alt="Watercolor hammerhead shark"
              className="w-full h-auto"
            />
          </Floating>
          <p className="font-body text-xs sm:text-sm uppercase tracking-[0.25em] text-sage font-semibold text-center">
            What We Do
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mt-16">
          {IMPACT_AREAS.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-[2rem] bg-gradient-to-br from-dusty-pink/30 via-terracotta/15 to-butter/25 border border-dusty-pink/20 shadow-soft hover:shadow-soft-lg px-7 py-10 flex items-center justify-center text-center transition-shadow duration-300"
              >
                <h3 className="font-heading text-2xl sm:text-3xl text-forest-dark">
                  {item.title}
                </h3>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
