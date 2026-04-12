import Image from "next/image";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { siteContent } from "@/content/site-content";
import {
  WHATSAPP_URL,
  WHATSAPP_SECONDARY_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "@/lib/constants";

export function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-brand-blue-dark px-6 py-12 text-white/70">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:items-start">
          <div className="text-center md:text-left">
            <Image
              src="/images/logo.svg"
              alt="AR English"
              width={120}
              height={34}
              className="h-8 w-auto mx-auto md:mx-0 brightness-0 invert"
            />
            <p className="mt-3 max-w-xs text-sm">{footer.description}</p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contato
            </h4>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4" />
                (13) 99149-7394
              </a>
              <a
                href={WHATSAPP_SECONDARY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4" />
                (11) 98941-6231
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Redes
            </h4>
            <div className="mt-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
                {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
