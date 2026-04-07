"use client";

import { Monitor, TrendingUp, Backpack, Briefcase, Heart } from "lucide-react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { Card } from "./ui/Card";
import { siteContent } from "@/content/site-content";

const iconMap = {
  monitor: Monitor,
  "trending-up": TrendingUp,
  backpack: Backpack,
  briefcase: Briefcase,
  heart: Heart,
} as const;

export function Audience() {
  const { audience } = siteContent;

  return (
    <SectionWrapper id="para-quem" className="bg-white">
      <h2 className="text-center text-3xl font-bold md:text-4xl">
        {audience.title}
      </h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {audience.segments.map((segment) => {
          const Icon = iconMap[segment.icon];
          return (
            <Card key={segment.title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/5">
                <Icon className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{segment.title}</h3>
              <p className="mt-2 text-sm text-brand-blue/60">
                {segment.description}
              </p>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
