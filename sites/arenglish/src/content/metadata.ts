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
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AR English — Você falando inglês com confiança",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Fale com Confiança`,
    description:
      "Aprenda inglês e espanhol com quem viveu o idioma de verdade.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/images/favicon.svg", type: "image/svg+xml" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/images/favicon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
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
    { "@type": "Person", name: "Renato" },
    { "@type": "Person", name: "Alex" },
  ],
  areaServed: "BR",
  availableLanguage: ["Portuguese", "English", "Spanish"],
};
