import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { Floating } from "@/components/decorative/Scattered";
import { Star, Sparkle } from "@/components/decorative/Creatures";
import Sticker from "@/components/decorative/Sticker";
import { DONATE_LINK } from "@/lib/data";

export default function Donate() {
  return (
    <section id="donate" className="relative py-28 sm:py-32 px-6 overflow-hidden">
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 top-8 w-72 h-72 rounded-full bg-dusty-pink/20 blur-3xl -z-10"
      />

      <Floating
        className="absolute left-[12%] top-1/4 w-8 hidden md:block"
        duration={5}
      >
        <Star className="w-full h-auto" color="#F3D576" />
      </Floating>
      <Floating
        className="absolute right-[14%] bottom-1/4 w-6 hidden md:block"
        duration={4.5}
        delay={0.6}
      >
        <Sparkle className="w-full h-auto" color="#C97B5F" />
      </Floating>
      <Floating
        className="absolute right-[10%] top-[12%] w-12 hidden md:block"
        duration={7}
        delay={0.3}
        rotate={-6}
      >
        <Sticker src="/stickers/coconut.png" alt="Watercolor coconut" className="w-full h-auto" />
      </Floating>

      <div className="max-w-2xl mx-auto text-center relative">
        <FadeIn>
          <Sticker
            src="/stickers/lotus.png"
            alt="Watercolor lotus flowers with lily pads"
            className="w-28 h-28 mx-auto mb-4"
          />
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-forest-dark">
            Support Our Mission
          </h2>
          <p className="font-body text-base sm:text-lg text-forest-dark/70 mt-6 leading-relaxed max-w-lg mx-auto">
            Every gift helps young people plant trees, host cleanups, and lead
            their communities toward a greener tomorrow. Your generosity keeps
            our chapters growing.
          </p>
          <div className="mt-10">
            <Button href={DONATE_LINK} variant="solid" external>
              Donate
            </Button>
          </div>
          <p className="font-body text-sm text-forest-dark/50 mt-4 italic">
            Our donation account is currently being set up — check back soon!
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
