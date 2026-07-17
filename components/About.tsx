import FadeIn from "@/components/ui/FadeIn";
import { Floating } from "@/components/decorative/Scattered";
import { Butterfly } from "@/components/decorative/Butterfly";
import Sticker from "@/components/decorative/Sticker";

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeIn className="relative order-2 lg:order-1">
          <div className="relative aspect-[3/4] max-w-sm mx-auto">
            <div className="absolute inset-6 rounded-[3rem] bg-sage/15 rotate-3" />
            <div className="absolute inset-6 rounded-[3rem] bg-warm-white shadow-soft-lg -rotate-2 paper-texture border border-forest/5 flex items-center justify-center p-8 overflow-hidden">
              <Sticker
                src="/stickers/blossom-branch.png"
                alt="Watercolor cherry blossom branch with pine and narcissus"
                className="w-full h-full"
              />
            </div>

            <Floating
              className="absolute top-1/3 -right-8 w-14"
              duration={6}
              delay={0.3}
            >
              <Butterfly className="w-full h-auto" color="#A8A66A" />
            </Floating>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="order-1 lg:order-2">
          <p className="font-body text-xs sm:text-sm uppercase tracking-[0.25em] text-sage font-semibold mb-4">
            Our Story
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-forest-dark leading-[1.1] text-balance">
            We&rsquo;re building a generation that turns small actions into
            lasting impact.
          </h2>
          <p className="font-body text-base sm:text-lg text-forest-dark/70 leading-relaxed max-w-xl mt-8">
            Threads For Tomorrow empowers young people through sustainability
            projects, environmental education, community events, and local
            leadership.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
