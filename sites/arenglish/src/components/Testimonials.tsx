import { Quote } from "lucide-react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { siteContent } from "@/content/site-content";

export function Testimonials() {
  const { testimonials } = siteContent;

  return (
    <SectionWrapper id="depoimentos" className="bg-brand-grey/40">
      <h2 className="text-center text-3xl font-bold md:text-4xl">
        {testimonials.title}
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.items.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl bg-white p-6 shadow-sm border border-brand-grey/50"
          >
            <Quote className="h-8 w-8 text-brand-teal/30" />
            <p className="mt-4 text-brand-blue/80 italic leading-relaxed">
              &ldquo;{item.quote}&rdquo;
            </p>
            <div className="mt-6 border-t border-brand-grey pt-4">
              <p className="font-semibold text-brand-blue">{item.name}</p>
              <p className="text-sm text-brand-blue/50">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
