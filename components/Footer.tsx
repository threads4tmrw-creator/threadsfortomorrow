import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/data";
import { InstagramIcon, TikTokIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="relative bg-forest-dark text-warm-white/90 pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <p className="font-heading text-2xl sm:text-3xl text-warm-white">
              Threads For Tomorrow
            </p>
            <div className="flex items-center gap-4 mt-6 text-warm-white/80">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-butter transition-colors hover:scale-110 inline-block"
              >
                <InstagramIcon />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:text-butter transition-colors hover:scale-110 inline-block"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-warm-white/50 font-semibold mb-4">
              Get Involved
            </p>
            <ul className="flex flex-col gap-2.5 font-body text-sm text-warm-white/75">
              <li>
                <Link href="#start-a-chapter" className="hover:text-butter transition-colors">
                  Start a Chapter
                </Link>
              </li>
              <li>
                <Link href="#donate" className="hover:text-butter transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="#newsletter" className="hover:text-butter transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="#events" className="hover:text-butter transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#volunteer" className="hover:text-butter transition-colors">
                  Volunteer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-warm-white/50 font-semibold mb-4">
              Stay Connected
            </p>
            <a
              href="mailto:threads4tmrw@gmail.com"
              className="block font-body text-sm text-warm-white/60 mb-1 hover:text-butter transition-colors"
            >
              threads4tmrw@gmail.com
            </a>
            <p className="font-body text-sm text-warm-white/60">
              @threads4tmrw
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-warm-white/10">
          <p className="text-center font-body text-sm text-warm-white/55">
            Made with love
          </p>
        </div>
      </div>
    </footer>
  );
}
