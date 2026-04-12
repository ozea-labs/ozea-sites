import { Button } from "./ui/Button";
import { siteContent } from "@/content/site-content";
import { WHATSAPP_URL } from "@/lib/constants";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-blue px-6 pt-20">
      {/* Background photo — portrait crop on mobile, landscape on larger screens */}
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/images/hero-bg.webp"
          width={1920}
          height={1080}
        />
        <img
          src="/images/hero-bg-mobile.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          width={1024}
          height={1366}
        />
      </picture>

      {/* Brand-tinted overlay: keeps white text WCAG-legible over any region of the photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/90 via-brand-blue-dark/85 to-brand-blue/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(67,170,139,0.18),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h1 className="font-heading text-4xl font-bold leading-tight text-white drop-shadow-sm md:text-5xl lg:text-6xl">
          {hero.headline}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-white/85 md:text-xl">
          {hero.subheadline}
        </p>
        <div className="mt-10 flex flex-col items-center gap-3">
          <Button
            href={WHATSAPP_URL}
            variant="yellow"
            size="lg"
            withWhatsappIcon
          >
            {hero.ctaText}
          </Button>
          <span className="text-sm text-white/70">{hero.ctaSubtext}</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="h-6 w-4 rounded-full border-2 border-white/40 p-1">
          <div className="mx-auto h-1.5 w-1 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
