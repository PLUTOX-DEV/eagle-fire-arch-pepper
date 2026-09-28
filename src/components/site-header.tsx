"use client";

import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/cn";
import { CloseIcon, MenuIcon, TelegramIcon, XIcon } from "@/components/icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((item) => item.href.slice(1));
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.body.classList.toggle("menu-open", open);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header className={cn("site-header", scrolled && "is-scrolled")}>
      <a href="#home" className="logo" onClick={() => setOpen(false)}>
        <img src="/images/pumpkin.webp" alt="" width={40} height={40} className="logo-mark" />
        <span>Hoodoween</span>
      </a>

      <nav className="desk-nav" aria-label="Primary">
        {NAV.map((item) => (
          <a key={item.href} href={item.href} className={cn(active === item.href && "active")}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="head-right">
        <a className="circle" href={SITE.telegram} target="_blank" rel="noreferrer" aria-label="Telegram">
          <TelegramIcon />
        </a>
        <a className="circle" href={SITE.x} target="_blank" rel="noreferrer" aria-label="X">
          <XIcon />
        </a>
        <div className="ca-chip">
          <img src="/images/pumpkin.webp" alt="" width={28} height={28} />
          <div>
            <small>{SITE.caStatus}</small>
            <b>{SITE.caWhen}</b>
          </div>
        </div>
        <button
          type="button"
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        className={cn("mobile-sheet", open && "open")}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!open}
        inert={!open}
      >
        <nav>
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(active === item.href && "active")}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="sheet-socials">
          <a className="circle" href={SITE.telegram} target="_blank" rel="noreferrer">
            <TelegramIcon /> Telegram
          </a>
          <a className="circle" href={SITE.x} target="_blank" rel="noreferrer">
            <XIcon /> X
          </a>
        </div>
        <div className="ca-chip sheet-ca">
          <img src="/images/pumpkin.webp" alt="" width={32} height={32} />
          <div>
            <small>{SITE.caStatus}</small>
            <b>{SITE.caWhen}</b>
          </div>
        </div>
      </div>
    </header>
  );
}
