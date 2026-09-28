"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const TARGET = new Date(SITE.launchIso).getTime();

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function CountdownTimer() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const n = Math.max(0, Math.floor((TARGET - Date.now()) / 1000));
      setT({
        d: Math.floor(n / 86400),
        h: Math.floor((n % 86400) / 3600),
        m: Math.floor((n % 3600) / 60),
        s: n % 60,
      });
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const cells: [string, number][] = [
    ["DAYS", t.d],
    ["HOURS", t.h],
    ["MINUTES", t.m],
    ["SECONDS", t.s],
  ];

  return (
    <div className="timer" aria-live="polite">
      {cells.map(([label, value]) => (
        <div className="timer-cell" key={label}>
          <b className="tabular-nums">{pad(value)}</b>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
