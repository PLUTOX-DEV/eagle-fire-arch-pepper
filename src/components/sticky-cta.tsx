import { SITE } from "@/lib/site";
import { TelegramIcon, XIcon } from "@/components/icons";

export function StickyCta() {
  return (
    <div className="sticky-cta">
      <a href={SITE.telegram} target="_blank" rel="noreferrer" className="cta-link">
        <TelegramIcon />
        <span>Telegram</span>
      </a>
      <a href={SITE.x} target="_blank" rel="noreferrer" className="cta-link">
        <XIcon />
        <span>Follow X</span>
      </a>
      <a href="#tokenomics" className="cta-ca">
        CA · Oct 12
      </a>
    </div>
  );
}
