import { Check } from "lucide-react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { siteContent } from "@/content/site-content";

export function About() {
  const { about } = siteContent;

  return (
    <SectionWrapper id="sobre" className="bg-white">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl bg-brand-grey md:h-96 md:w-96">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-blue/40">
              <div className="text-6xl font-heading font-bold">AR</div>
              <p className="mt-2 text-sm">Foto em breve</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold md:text-4xl">{about.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-blue/70">
            {about.description}
          </p>
          <ul className="mt-8 space-y-3">
            {about.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                <span className="text-brand-blue/80">{item}</span>
              </li>
            ))}
          </ul>
          <blockquote className="mt-8 border-l-4 border-brand-teal pl-4 text-lg font-semibold italic text-brand-blue">
            &ldquo;{about.quote}&rdquo;
          </blockquote>
        </div>
      </div>
    </SectionWrapper>
  );
}
