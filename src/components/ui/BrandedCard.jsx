// src/components/ui/BrandedCard.jsx
import React from "react";
import Badge from "./Badge";
import { C, cn, SHADOW_SOFT } from "./brand";

export default function BrandedCard({
  title,
  tag,
  tone = "brand",     // brand | wine
  accent = "left",     // left | top | none
  className,
  children,
}) {
  const isWine = tone === "wine";
  const accentColor = isWine ? C.wine500 : C.brand500;

  return (
    <div
      className={cn(
        "rounded-2xl bg-white border border-black/5 p-7 relative overflow-hidden",
        className
      )}
      style={{ boxShadow: SHADOW_SOFT }}
    >
      {accent !== "none" ? (
        accent === "left" ? (
          <div
            className="absolute left-0 top-0 h-full"
            style={{ width: 5, background: accentColor }}
          />
        ) : (
          <div
            className="absolute left-0 top-0 w-full"
            style={{
              height: 6,
              background: `linear-gradient(90deg, ${C.brand500} 0%, ${C.brand200} 45%, ${C.wine500} 100%)`,
            }}
          />
        )
      ) : null}

      <div className="flex items-center justify-between gap-3">
        <div className="text-lg font-semibold" style={{ color: C.ink }}>
          {title}
        </div>
        {tag ? <Badge tone={tone}>{tag}</Badge> : null}
      </div>

      <div className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(15,23,42,.75)" }}>
        {children}
      </div>
    </div>
  );
}
