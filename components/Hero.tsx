"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import HeroBackdrop from "@/components/decorative/HeroBackdrop";
import { Floating } from "@/components/decorative/Scattered";
import { Bird, Sparkle } from "@/components/decorative/Creatures";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <HeroBackdrop />

      <Floating
        className="absolute left-[14%] bottom-[24%] w-14 hidden md:block"
        duration={10}
        delay={0.5}
      >
        <Bird className="w-full h-auto" color="#4F6B56" />
      </Floating>
      <Floating
        className="absolute right-[18%] bottom-[30%] w-6"
        duration={5}
        delay={0.2}
      >
        <Sparkle className="w-full h-auto" color="#F3D576" />
      </Floating>
      <Floating
        className="absolute left-[30%] top-[14%] w-5"
        duration={4.5}
        delay={1.2}
      >
        <Sparkle className="w-full h-auto" color="#7A9A7E" />
      </Floating>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-forest-dark leading-[1.05] text-balance"
        >
          Threads For Tomorrow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-body text-lg sm:text-xl md:text-2xl text-forest-dark/75 mt-6 max-w-xl leading-relaxed"
        >
          TFT aspires to provide to communities in need while reducing
          textile waste and supporting climate action.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <Button href="#about" variant="solid">
            Explore
          </Button>
          <Button href="#start-a-chapter" variant="outline">
            Get Involved
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-forest-dark/50"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={26} />
        </motion.div>
      </motion.div>
    </section>
  );
}
