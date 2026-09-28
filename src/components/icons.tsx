import type { SVGProps } from "react";
import { cn } from "@/lib/cn";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

function Svg({ className, children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("size-[1.15em] shrink-0", className)}
      {...props}
    >
      {children}
    </svg>
  );
}

export function TelegramIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill="currentColor"
        d="M21.7 3.3 18.4 20c-.25 1.18-.93 1.47-1.88.92l-5.2-3.83-2.51 2.42c-.28.28-.51.51-1.05.51l.37-5.3 9.65-8.72c.42-.37-.09-.58-.65-.21L5.2 13.04.08 11.43c-1.11-.35-1.13-1.11.23-1.64L20.32 2.1c.93-.34 1.74.21 1.38 1.2Z"
      />
    </Svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill="currentColor"
        d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.88-6.38L6.5 22H3.4l7.24-8.28L2.8 2h6.4l4.41 5.83L18.9 2Zm-1.09 17.9h1.72L8.29 4.02H6.44L17.81 19.9Z"
      />
    </Svg>
  );
}

export function FeatherIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill="currentColor"
        d="M20.7 3.3C15.4 2.4 9.2 4.5 6.2 7.5 3.9 9.8 3 13.2 3.7 16.1l-2 4.1 4.1-2c2.9.7 6.3-.2 8.6-2.5 3-3 5.1-9.2 4.3-14.4Zm-2.2 3.1-8.1 8.1-3.4.7.7-3.4 8.1-8.1c1-.6 1.9-.8 2.7-.7Z"
      />
    </Svg>
  );
}

export function GhostIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill="currentColor"
        d="M12 2c4.6 0 8 3.6 8 8.4V20l-2.2-1.6L15.6 20 12 17.8 8.4 20l-2.2-1.6L4 20v-9.6C4 5.6 7.4 2 12 2Zm-2.3 7.2a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Zm4.6 0a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Z"
      />
    </Svg>
  );
}

export function RocketIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        fill="currentColor"
        d="M12.8 2.1c3.6.9 6.6 3.9 7.5 7.5.2.9-.4 2.2-1.7 3.5l-1.6 1.6-2.3 5.3-2.4-2.4-3.1 3.1-1.4-1.4 3.1-3.1-2.4-2.4 5.3-2.3 1.4-1.4c1.3-1.3 2.6-1.9 3.5-1.7ZM7.2 16.4l-2.8.9.9-2.8 1.9 1.9Zm5.4-9.2a1.6 1.6 0 1 0 2.2 2.2 1.6 1.6 0 0 0-2.2-2.2Z"
      />
    </Svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Svg>
  );
}

export function PumpkinMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn("shrink-0", className)} aria-hidden="true">
      <path d="M30 10c0-3 2.4-6 5.4-6 1.6 3.2.4 6.4-1.6 8.2" fill="#3f7a12" />
      <path d="M32 16c-8.5 0-14 4.4-17.2 9.2C11.4 30 10 36.2 12 42.4c2.2 6.8 8.4 11.6 20 11.6s17.8-4.8 20-11.6c2-6.2.6-12.4-2.8-17.2C46 20.4 40.5 16 32 16Z" fill="#ff7a12" />
      <path d="M32 16c-3.4 0-6.4.8-8.8 2.2 4.2 2 8.8 2.4 8.8 2.4s4.6-.4 8.8-2.4C38.4 16.8 35.4 16 32 16Z" fill="#ff9a22" />
      <path d="M22 34c2.4-3.4 5-4.4 7-3.2 1.2.8.8 2.6-.4 3.4-2 1.4-3.6-.2-6.6-.2Zm13 0c-2.4-3.4-5-4.4-7-3.2-1.2.8-.8 2.6.4 3.4 2 1.4 3.6-.2 6.6-.2Z" fill="#1a0a02" />
      <path d="M20 44c4.2 4 8 5.4 12 5.4s7.8-1.4 12-5.4c-3.2 1.4-7.2 2.2-12 2.2s-8.8-.8-12-2.2Z" fill="#1a0a02" />
      <path d="M32 18c-1.4 8-1.4 20 0 28" stroke="#d45a00" strokeWidth="1.4" fill="none" />
    </svg>
  );
}
