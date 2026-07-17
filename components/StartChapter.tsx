import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { Floating } from "@/components/decorative/Scattered";
import { Sparkle } from "@/components/decorative/Creatures";
import Sticker from "@/components/decorative/Sticker";
import { GOOGLE_FORM_LINK } from "@/lib/data";

export default function StartChapter() {
  return (
    <section id="start-a-chapter" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="relative rounded-[2.5rem] sm:rounded-[3.5rem] bg-forest text-warm-white px-8 sm:px-16 py-20 sm:py-28 text-center overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-sage/30 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-28 -right-16 w-80 h-80 rounded-full bg-dusty-pink/20 blur-3xl"
            />

            <Floating
              className="absolute right-[20%] top-[22%] w-6"
              duration={4}
              delay={0.2}
            >
              <Sparkle className="w-full h-auto" color="#F3D576" />
            </Floating>
            <Floating
              className="absolute left-[12%] bottom-[14%] w-16 hidden md:block"
              duration={9}
              delay={0.8}
              rotate={-6}
            >
              <Sticker
                src="/stickers/koi.png"
                alt="Shimmering koi fish"
                className="w-full h-auto"
              />
            </Floating>

            <p className="relative font-body text-xs sm:text-sm uppercase tracking-[0.25em] text-sage-light font-semibold mb-5">
              Take The Lead
            </p>
            <h2 className="relative font-heading text-4xl sm:text-5xl md:text-6xl text-balance leading-[1.1] max-w-3xl mx-auto">
              Bring Threads For Tomorrow to your school or community.
            </h2>
            <div className="relative mt-10">
              <Button href={GOOGLE_FORM_LINK} variant="outline-light" external>
                Start a Chapter
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
