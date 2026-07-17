"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { UPCOMING_EVENTS } from "@/lib/data";
import { Floating } from "@/components/decorative/Scattered";
import Sticker from "@/components/decorative/Sticker";

export default function Events() {
  return (
    <section id="events" className="relative py-28 sm:py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="relative">
          <Floating
            className="absolute right-[6%] -top-4 w-16 hidden md:block"
            duration={7}
            rotate={-8}
          >
            <Sticker src="/stickers/turtle.png" alt="Watercolor sea turtle" className="w-full h-auto" />
          </Floating>
          <SectionHeading
            eyebrow="Join Us"
            title="Upcoming Events"
            description="Come as you are — every event is a chance to meet your community and get your hands a little dirty for a good cause."
          />
        </FadeIn>

        <Floating
          className="absolute left-[6%] bottom-[8%] w-14 hidden md:block"
          duration={6.5}
          delay={0.5}
          rotate={8}
        >
          <Sticker src="/stickers/hedgehog.png" alt="Watercolor hedgehog" className="w-full h-auto" />
        </Floating>

        <div className="max-w-2xl mx-auto mt-16">
          {UPCOMING_EVENTS.map((event) => (
            <FadeIn key={event.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col rounded-[2rem] bg-warm-white border border-forest/8 shadow-soft hover:shadow-soft-lg overflow-hidden"
              >
                <div className="relative h-36 bg-gradient-to-br from-sage/25 via-butter/20 to-dusty-pink/25" />
                <div className="p-8 sm:p-10 flex flex-col gap-4">
                  <h3 className="font-heading text-3xl sm:text-4xl text-forest-dark">
                    {event.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-6 text-sm sm:text-base text-forest-dark/65 font-body">
                    <span className="flex items-center gap-2">
                      <Calendar size={16} className="text-sage shrink-0" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={16} className="text-sage shrink-0" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={16} className="text-sage shrink-0" />
                      {event.location}
                    </span>
                  </div>
                  <a
                    href={event.learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-sm font-semibold text-forest-dark inline-flex items-center gap-1.5 group w-fit"
                  >
                    Learn More
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
