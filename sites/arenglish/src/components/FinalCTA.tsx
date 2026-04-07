import { SectionWrapper } from "./ui/SectionWrapper";
import { Button } from "./ui/Button";
import { siteContent } from "@/content/site-content";
import { WHATSAPP_URL } from "@/lib/constants";

export function FinalCTA() {
  const { finalCta } = siteContent;

  return (
    <SectionWrapper className="bg-brand-blue text-white text-center">
      <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
        {finalCta.headline}
      </h2>
      <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto">
        {finalCta.subtext}
      </p>
      <div className="mt-10">
        <Button href={WHATSAPP_URL} variant="yellow" size="lg" withWhatsappIcon>
          {finalCta.ctaText}
        </Button>
      </div>
    </SectionWrapper>
  );
}
