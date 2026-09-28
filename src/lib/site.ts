export const SITE = {
  name: "$HOODOWEEN",
  ticker: "$Hoodoween",
  tagline: "Scary good potential",
  telegram: "https://t.me/hoodoween",
  telegramHandle: "t.me/hoodoween",
  x: "https://x.com/Hoodoween_RBH",
  xHandle: "x.com/Hoodoween_RBH",
  launchIso: "2026-10-12T00:00:00-07:00",
  launchLabel: "12 October",
  caStatus: "CA: COMING SOON",
  caWhen: "BY 12 OCTOBER",
} as const;

export const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#tokenomics", label: "Tokenomics" },
  { href: "#fees", label: "Fees" },
  { href: "#community", label: "Community" },
  { href: "#roadmap", label: "Roadmap" },
] as const;

export const FEES = [
  {
    pct: "30%",
    title: "Holder airdrop",
    copy: "30% of fees goes to airdrops for holders.",
    tone: "orange",
  },
  {
    pct: "20%",
    title: "Buybacks",
    copy: "20% of fees goes toward buybacks.",
    tone: "green",
  },
  {
    pct: "20%",
    title: "Donations",
    copy: "20% of fees goes to donations.",
    tone: "ice",
  },
  {
    pct: "30%",
    title: "Marketing",
    copy: "30% of fees supports marketing. No token dumps.",
    tone: "orange",
  },
] as const;
