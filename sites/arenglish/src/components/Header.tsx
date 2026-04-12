"use client";

import Image from "next/image";
import { Button } from "./ui/Button";
import { siteContent } from "@/content/site-content";
import { WHATSAPP_URL } from "@/lib/constants";
import { useState, useEffect } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="AR English"
            width={140}
            height={40}
            className={`h-10 w-auto transition-[filter] duration-300 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </a>
        <Button
          href={WHATSAPP_URL}
          variant="yellow"
          size="md"
          withWhatsappIcon
        >
          {siteContent.header.ctaText}
        </Button>
      </div>
    </header>
  );
}
