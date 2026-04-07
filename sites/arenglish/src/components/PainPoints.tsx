"use client";

import { MicOff, BookOpen, Briefcase, Globe } from "lucide-react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { Card } from "./ui/Card";
import { siteContent } from "@/content/site-content";

const iconMap = {
  "mic-off": MicOff,
  "book-open": BookOpen,
  briefcase: Briefcase,
  globe: Globe,
} as const;

export function PainPoints() {
  const { painPoints } = siteContent;

  return (
    <SectionWrapper id="dores" className="bg-brand-grey/40">
      <h2 className="text-center text-3xl font-bold md:text-4xl">
        {painPoints.title}
      </h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {painPoints.items.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <Card key={item.text} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal/10">
                <Icon className="h-7 w-7 text-brand-teal" />
              </div>
              <p className="mt-4 font-medium text-brand-blue">{item.text}</p>
            </Card>
          );
        })}
      </div>
      <p className="mt-12 text-center text-lg font-semibold text-brand-teal">
        {painPoints.transition}
      </p>
    </SectionWrapper>
  );
}
