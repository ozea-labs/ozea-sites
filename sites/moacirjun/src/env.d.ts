/// <reference types="astro/client" />

interface Window {
  trackWhatsAppClick: (source: string) => void;
  zaraz?: {
    track: (event: string, data?: Record<string, unknown>) => void;
  };
}

interface ImportMetaEnv {
  readonly PUBLIC_CF_BEACON_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
