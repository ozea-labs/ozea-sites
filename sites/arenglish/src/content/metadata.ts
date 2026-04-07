import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const siteMetadata: Metadata = {
  title: `${SITE_NAME} | Fale com Confiança — Escola de Inglês e Espanhol Online`,
  description:
    "Aprenda inglês e espanhol com professores que viveram o idioma. Aulas 100% online com foco em conversação prática. Agende sua aula experimental gratuita.",
  keywords: [
    "escola de inglês online",
    "aulas de inglês",
    "aulas de espanhol",
    "inglês para executivos",
    "inglês conversação",
    "professor nativo inglês",
    "AR English",
    "aula experimental inglês",
  ],
  authors: [{ name: SITE_NAME }],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: `${SITE_NAME} | Fale com Confiança`,
    description:
      "Aprenda inglês e espanhol com quem viveu o idioma de verdade. Aulas online, práticas e focadas em conversação.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Fale com Confiança`,
    description:
      "Aprenda inglês e espanhol com quem viveu o idioma de verdade.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Escola de idiomas 100% online focada em conversação prática com professores que viveram nos EUA.",
  founder: [
    { "@type": "Person", name: "Rick" },
    { "@type": "Person", name: "Alex" },
  ],
  areaServed: "BR",
  availableLanguage: ["Portuguese", "English", "Spanish"],
};
