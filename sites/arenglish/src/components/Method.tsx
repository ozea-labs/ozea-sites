import { SectionWrapper } from "./ui/SectionWrapper";
import { Button } from "./ui/Button";
import { siteContent } from "@/content/site-content";
import { WHATSAPP_URL } from "@/lib/constants";

export function Method() {
  const { method } = siteContent;

  return (
    <SectionWrapper id="metodo" className="bg-brand-teal text-white">
      <h2 className="text-center text-3xl font-bold md:text-4xl">
        {method.title}
      </h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {method.steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-2xl font-bold font-heading">
              {step.number}
            </div>
            <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-white/80">{step.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button href={WHATSAPP_URL} variant="yellow" size="lg" withWhatsappIcon>
          Começar agora
        </Button>
      </div>
    </SectionWrapper>
  );
}
