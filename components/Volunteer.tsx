"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { VOLUNTEER_OPPORTUNITIES } from "@/lib/data";

export default function Volunteer() {
  return (
    <section id="volunteer" className="relative py-28 sm:py-32 px-6 bg-sage/[0.06]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionHeading eyebrow="Get Involved" title="Volunteer" />
        </FadeIn>

        <div className="max-w-2xl mx-auto mt-16">
          {VOLUNTEER_OPPORTUNITIES.length === 0 ? (
            <FadeIn>
              <div className="rounded-[2rem] bg-warm-white border border-forest/8 shadow-soft px-8 py-14 text-center">
                <p className="font-body text-base sm:text-lg text-forest-dark/65">
                  No volunteer opportunities posted just yet — check back
                  soon!
                </p>
              </div>
            </FadeIn>
          ) : (
            <div className="flex flex-col gap-6">
              {VOLUNTEER_OPPORTUNITIES.map((opportunity) => (
                <FadeIn key={opportunity.title}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-[2rem] bg-warm-white border border-forest/8 shadow-soft hover:shadow-soft-lg p-8 sm:p-10 flex flex-col gap-4"
                  >
                    <h3 className="font-heading text-3xl sm:text-4xl text-forest-dark">
                      {opportunity.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-6 text-sm sm:text-base text-forest-dark/65 font-body">
                      <span className="flex items-center gap-2">
                        <Calendar size={16} className="text-sage shrink-0" />
                        {opportunity.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock size={16} className="text-sage shrink-0" />
                        {opportunity.time}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin size={16} className="text-sage shrink-0" />
                        {opportunity.location}
                      </span>
                    </div>
                    <a
                      href={opportunity.learnMoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-sm font-semibold text-forest-dark inline-flex items-center gap-1.5 group w-fit"
                    >
                      Learn More
                      <span className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
