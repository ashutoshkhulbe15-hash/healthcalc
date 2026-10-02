"use client";
export function trackToolEvent(name:"calculator_start"|"calculator_complete") {
  if (typeof window === "undefined") return;
  const gtag=(window as Window & {gtag?: (...args:unknown[])=>void}).gtag;
  // Strict allowlist: no input, score, result, error text or query-string values.
  gtag?.("event",name,{tool_id:window.location.pathname.split("/").filter(Boolean).pop()});
}
