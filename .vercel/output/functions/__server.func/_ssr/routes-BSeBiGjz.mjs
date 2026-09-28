import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BSeBiGjz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SITE = {
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
	caWhen: "BY 12 OCTOBER"
};
var NAV = [
	{
		href: "#home",
		label: "Home"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#tokenomics",
		label: "Tokenomics"
	},
	{
		href: "#fees",
		label: "Fees"
	},
	{
		href: "#community",
		label: "Community"
	},
	{
		href: "#roadmap",
		label: "Roadmap"
	}
];
var FEES = [
	{
		pct: "30%",
		title: "Holder airdrop",
		copy: "30% of fees goes to airdrops for holders.",
		tone: "orange"
	},
	{
		pct: "20%",
		title: "Buybacks",
		copy: "20% of fees goes toward buybacks.",
		tone: "green"
	},
	{
		pct: "20%",
		title: "Donations",
		copy: "20% of fees goes to donations.",
		tone: "ice"
	},
	{
		pct: "30%",
		title: "Marketing",
		copy: "30% of fees supports marketing. No token dumps.",
		tone: "orange"
	}
];
var TARGET = new Date(SITE.launchIso).getTime();
function pad(n) {
	return String(n).padStart(2, "0");
}
function CountdownTimer() {
	const [t, setT] = (0, import_react.useState)({
		d: 0,
		h: 0,
		m: 0,
		s: 0
	});
	(0, import_react.useEffect)(() => {
		const tick = () => {
			const n = Math.max(0, Math.floor((TARGET - Date.now()) / 1e3));
			setT({
				d: Math.floor(n / 86400),
				h: Math.floor(n % 86400 / 3600),
				m: Math.floor(n % 3600 / 60),
				s: n % 60
			});
		};
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, []);
	const cells = [
		["DAYS", t.d],
		["HOURS", t.h],
		["MINUTES", t.m],
		["SECONDS", t.s]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "timer",
		"aria-live": "polite",
		children: cells.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "timer-cell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
				className: "tabular-nums",
				children: pad(value)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
		}, label))
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Svg({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		"aria-hidden": "true",
		className: cn("size-[1.15em] shrink-0", className),
		...props,
		children
	});
}
function TelegramIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M21.7 3.3 18.4 20c-.25 1.18-.93 1.47-1.88.92l-5.2-3.83-2.51 2.42c-.28.28-.51.51-1.05.51l.37-5.3 9.65-8.72c.42-.37-.09-.58-.65-.21L5.2 13.04.08 11.43c-1.11-.35-1.13-1.11.23-1.64L20.32 2.1c.93-.34 1.74.21 1.38 1.2Z"
		})
	});
}
function XIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.88-6.38L6.5 22H3.4l7.24-8.28L2.8 2h6.4l4.41 5.83L18.9 2Zm-1.09 17.9h1.72L8.29 4.02H6.44L17.81 19.9Z"
		})
	});
}
function FeatherIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M20.7 3.3C15.4 2.4 9.2 4.5 6.2 7.5 3.9 9.8 3 13.2 3.7 16.1l-2 4.1 4.1-2c2.9.7 6.3-.2 8.6-2.5 3-3 5.1-9.2 4.3-14.4Zm-2.2 3.1-8.1 8.1-3.4.7.7-3.4 8.1-8.1c1-.6 1.9-.8 2.7-.7Z"
		})
	});
}
function GhostIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M12 2c4.6 0 8 3.6 8 8.4V20l-2.2-1.6L15.6 20 12 17.8 8.4 20l-2.2-1.6L4 20v-9.6C4 5.6 7.4 2 12 2Zm-2.3 7.2a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Zm4.6 0a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Z"
		})
	});
}
function RocketIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M12.8 2.1c3.6.9 6.6 3.9 7.5 7.5.2.9-.4 2.2-1.7 3.5l-1.6 1.6-2.3 5.3-2.4-2.4-3.1 3.1-1.4-1.4 3.1-3.1-2.4-2.4 5.3-2.3 1.4-1.4c1.3-1.3 2.6-1.9 3.5-1.7ZM7.2 16.4l-2.8.9.9-2.8 1.9 1.9Zm5.4-9.2a1.6 1.6 0 1 0 2.2 2.2 1.6 1.6 0 0 0-2.2-2.2Z"
		})
	});
}
function CalendarIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "3",
			y: "5",
			width: "18",
			height: "16",
			rx: "2",
			stroke: "currentColor",
			strokeWidth: "1.8"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8 3v4M16 3v4M3 10h18",
			stroke: "currentColor",
			strokeWidth: "1.8",
			strokeLinecap: "round"
		})]
	});
}
function MenuIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M4 7h16M4 12h16M4 17h16",
			stroke: "currentColor",
			strokeWidth: "1.8",
			strokeLinecap: "round"
		})
	});
}
function CloseIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M6 6l12 12M18 6 6 18",
			stroke: "currentColor",
			strokeWidth: "1.8",
			strokeLinecap: "round"
		})
	});
}
function PumpkinMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		className: cn("shrink-0", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M30 10c0-3 2.4-6 5.4-6 1.6 3.2.4 6.4-1.6 8.2",
				fill: "#3f7a12"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M32 16c-8.5 0-14 4.4-17.2 9.2C11.4 30 10 36.2 12 42.4c2.2 6.8 8.4 11.6 20 11.6s17.8-4.8 20-11.6c2-6.2.6-12.4-2.8-17.2C46 20.4 40.5 16 32 16Z",
				fill: "#ff7a12"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M32 16c-3.4 0-6.4.8-8.8 2.2 4.2 2 8.8 2.4 8.8 2.4s4.6-.4 8.8-2.4C38.4 16.8 35.4 16 32 16Z",
				fill: "#ff9a22"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M22 34c2.4-3.4 5-4.4 7-3.2 1.2.8.8 2.6-.4 3.4-2 1.4-3.6-.2-6.6-.2Zm13 0c-2.4-3.4-5-4.4-7-3.2-1.2.8-.8 2.6.4 3.4 2 1.4 3.6-.2 6.6-.2Z",
				fill: "#1a0a02"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20 44c4.2 4 8 5.4 12 5.4s7.8-1.4 12-5.4c-3.2 1.4-7.2 2.2-12 2.2s-8.8-.8-12-2.2Z",
				fill: "#1a0a02"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M32 18c-1.4 8-1.4 20 0 28",
				stroke: "#d45a00",
				strokeWidth: "1.4",
				fill: "none"
			})
		]
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("#home");
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const nodes = NAV.map((item) => item.href.slice(1)).map((id) => document.getElementById(id)).filter((el) => Boolean(el));
		if (!nodes.length) return;
		const io = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(`#${visible.target.id}`);
		}, {
			rootMargin: "-28% 0px -58% 0px",
			threshold: [
				.1,
				.25,
				.5
			]
		});
		nodes.forEach((n) => io.observe(n));
		return () => io.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		document.body.classList.toggle("menu-open", open);
		return () => {
			document.body.style.overflow = "";
			document.body.classList.remove("menu-open");
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("site-header", scrolled && "is-scrolled"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#home",
				className: "logo",
				onClick: () => setOpen(false),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/pumpkin.webp",
					alt: "",
					width: 40,
					height: 40,
					className: "logo-mark"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hoodoween" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "desk-nav",
				"aria-label": "Primary",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.href,
					className: cn(active === item.href && "active"),
					children: item.label
				}, item.href))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "head-right",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "circle",
						href: SITE.telegram,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "Telegram",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TelegramIcon, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "circle",
						href: SITE.x,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "X",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XIcon, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ca-chip",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/pumpkin.webp",
							alt: "",
							width: 28,
							height: 28
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: SITE.caStatus }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: SITE.caWhen })] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "menu-btn",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuIcon, {})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("mobile-sheet", open && "open"),
				role: "dialog",
				"aria-modal": "true",
				"aria-label": "Menu",
				"aria-hidden": !open,
				inert: !open,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: cn(active === item.href && "active"),
						onClick: () => setOpen(false),
						children: item.label
					}, item.href)) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sheet-socials",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "circle",
							href: SITE.telegram,
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TelegramIcon, {}), " Telegram"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "circle",
							href: SITE.x,
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XIcon, {}), " X"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ca-chip sheet-ca",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/pumpkin.webp",
							alt: "",
							width: 32,
							height: 32
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: SITE.caStatus }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: SITE.caWhen })] })]
					})
				]
			})
		]
	});
}
function StickyCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sticky-cta",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: SITE.telegram,
				target: "_blank",
				rel: "noreferrer",
				className: "cta-link",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TelegramIcon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Telegram" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: SITE.x,
				target: "_blank",
				rel: "noreferrer",
				className: "cta-link",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XIcon, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Follow X" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#tokenomics",
				className: "cta-ca",
				children: "CA · Oct 12"
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "hero wrap",
					id: "home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "kicker",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), " Halloween has entered the hood"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "welcome",
								children: "Welcome to"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "hero-title",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
										className: "dollar",
										children: "$"
									}),
									"HOOD",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										className: "pump",
										src: "/images/pumpkin.webp",
										alt: "",
										width: 72,
										height: 72
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ween",
										children: "WEEN"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Hoodoween:" }), " Robinhood first ever Halloween celebration and memecoin."] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rule" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "intro",
								children: [
									"This is Robinhood first Halloween ever. Hoodoween is the name of its first Halloween celebration and token ever. The ticker is ",
									SITE.ticker,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "signal",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "signal-icon",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XIcon, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										"There is a 60% chance of Robinhood tweeting ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "“Happy Hoodoween”" }),
										" on Halloween."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "gauge",
										"aria-label": "60 percent",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "60%" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "scare",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/images/pumpkin.webp",
										alt: "",
										width: 28,
										height: 28
									}),
									"Don't get scared of the potential of Hoodoween",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostIcon, { className: "size-6 text-fog" })
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-art",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "scene",
							src: "/images/hoodoween-hero.webp",
							alt: "Hoodoween pumpkin-headed character in a hoodie under a full moon",
							width: 1100,
							height: 1173,
							fetchPriority: "high"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "countdown-band",
					id: "launch",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "bg",
							src: "/images/cityscape.webp",
							alt: "",
							width: 1600,
							height: 900
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "veil" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "countdown-inner wrap",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "count-label",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "The countdown" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "count-sub",
										children: "— CA launch"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountdownTimer, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "launch-chip",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/images/pumpkin.webp",
										alt: "",
										width: 28,
										height: 28
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: SITE.caStatus }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: SITE.caWhen })] })]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "feature-grid wrap",
					"aria-label": "Highlights",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "feature-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PumpkinMark, { className: "size-9" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "The first" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Robinhood's first ever Halloween celebration and memecoin." })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "green",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "feature-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatherIcon, { className: "size-8" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Community" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Built by the people. For the people. Hoodoween." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "feature-icon",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RocketIcon, { className: "size-8" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Big potential" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A memecoin with real culture, real energy, real community." })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "green",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "feature-icon",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostIcon, { className: "size-8" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "04" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "CA exchange" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Coming soon by 12 October." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "feature-date",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarIcon, {}), " 12 October"]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "story-layout wrap",
					id: "about",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "story-image",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/story.webp",
								alt: "Cloaked Hoodoween figure facing a blood moon over the city",
								width: 1400,
								height: 787,
								loading: "lazy"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "story-copy",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "kicker",
									children: "The story"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "The hood is ready for Halloween." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Robinhood is known for breaking the rules. This Halloween, they're not just watching from the sidelines... they're celebrating." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Hoodoween is more than a memecoin. It's a movement — a celebration of freedom, culture, and the community that makes it all possible." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "script",
									children: [
										"Same Robinhood.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"New kind of holiday."
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "token-box",
							id: "tokenomics",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "kicker",
									children: "Tokenomics"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "$HOODOWEEN" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "ticker-badge",
									children: SITE.ticker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "token-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Holder airdrops" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "30% fees" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "token-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Buybacks" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "20% fees" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "token-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Donations" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "20% fees" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "token-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Marketing" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "30% fees" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "token-row",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dev holdings" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "2.5% supply" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "no-sell",
									children: "No token sales for marketing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "token-ca",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/images/pumpkin.webp",
										alt: "",
										width: 28,
										height: 28
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [SITE.caStatus, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: SITE.caWhen })] })]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "fees-section wrap",
					id: "fees",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "fees-head",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "kicker center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), " Fees breakdown"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Every fee has a purpose." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "$HOODOWEEN routes fees across holders, buybacks, donations and marketing." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "fee-grid",
							children: FEES.map((fee) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: `fee-card ${fee.tone}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: fee.pct }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: fee.title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: fee.copy })
								]
							}, fee.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "dev-note",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dev holdings" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "2.5%" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "of total token supply" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "So there are no dev token sales for marketing and related expenses." })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "roadmap wrap",
					id: "roadmap",
					"aria-labelledby": "roadmap-title",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "kicker",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}), " Launch path"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "roadmap-title",
							children: "Roadmap"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "steps",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "step",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "01" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "CA launch · 12 October" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Contract address drops. Liquidity locked. The hood goes live." })] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "step",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "02" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Halloween watch" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "60% chance Robinhood tweets “Happy Hoodoween.” Holders eat first." })] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "step",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "03" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Fees that work" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Airdrops, buybacks, donations, marketing — without selling the 2.5% dev bag." })] })]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "community",
					id: "community",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "bg",
						src: "/images/cityscape.webp",
						alt: "",
						width: 1600,
						height: 900
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "community-inner wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "big-logo",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/pumpkin.webp",
									alt: "",
									width: 42,
									height: 42
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "$" }),
									"HOODO",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ween",
										children: "WEEN"
									})
								] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "tagline",
								children: "— SCARY GOOD POTENTIAL —"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "join",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "social-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "circle wide",
											href: SITE.telegram,
											target: "_blank",
											rel: "noreferrer",
											"aria-label": "Telegram",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TelegramIcon, {})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											className: "circle wide",
											href: SITE.x,
											target: "_blank",
											rel: "noreferrer",
											"aria-label": "X",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(XIcon, {})
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Join the community" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "handles",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: SITE.telegram,
											target: "_blank",
											rel: "noreferrer",
											children: SITE.telegramHandle
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: SITE.x,
											target: "_blank",
											rel: "noreferrer",
											children: SITE.xHandle
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "community-art",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/hoodoween-character.webp",
									alt: "Hooded Hoodoween figure with a glowing green feather",
									width: 900,
									height: 900,
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "miss-it",
									children: "Don't miss it... Hoodoween is coming."
								})]
							})
						]
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "site-footer wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "$HOODOWEEN" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Robinhood first ever Halloween celebration and memecoin." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Not affiliated with Robinhood Markets, Inc. This is a community memecoin project." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyCta, {})
		]
	});
}
//#endregion
export { Home as component };
