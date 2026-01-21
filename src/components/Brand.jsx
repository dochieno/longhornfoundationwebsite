// src/components/Brand.jsx
import { C, SHADOW, SHADOW_SOFT, cn } from "../styles/brand";

export function BrandedPage({ children, tone = "mix" }) {
  const bg =
    tone === "brand"
      ? `linear-gradient(180deg, color-mix(in srgb, ${C.brand50} 95%, white) 0%, white 70%)`
      : tone === "wine"
      ? `linear-gradient(180deg, color-mix(in srgb, ${C.wine50} 90%, white) 0%, white 70%)`
      : `linear-gradient(180deg,
          color-mix(in srgb, ${C.brand50} 95%, white) 0%,
          color-mix(in srgb, ${C.wine50} 75%, white) 35%,
          white 75%)`;

  return <div style={{ background: bg }}>{children}</div>;
}

export function BrandedShell({ children, tone = "mix", className = "" }) {
  const bg =
    tone === "brand"
      ? `linear-gradient(180deg, ${C.brand50} 0%, white 55%)`
      : tone === "wine"
      ? `linear-gradient(180deg, ${C.wine50} 0%, white 55%)`
      : `linear-gradient(180deg, ${C.brand50} 0%, ${C.wine50} 30%, white 70%)`;

  return (
    <div className={cn("rounded-[30px] p-[1.5px]", className)} style={{ background: bg }}>
      <div className="rounded-[28px] bg-white">{children}</div>
    </div>
  );
}

export function AccentBar({ height = 14 }) {
  return (
    <div
      className="absolute left-0 top-0 w-full"
      style={{
        height,
        background: `linear-gradient(90deg, ${C.brand500} 0%, ${C.brand200} 40%, ${C.wine500} 100%)`,
      }}
    />
  );
}

export function ButtonLink({ as: Comp = "a", tone = "brand", className = "", ...props }) {
  const isNeutral = tone === "neutral";
  const base =
    tone === "brand"
      ? { from: C.brand500, to: C.brand600, hoverFrom: C.brand600, hoverTo: C.brand800 }
      : tone === "wine"
      ? { from: C.wine500, to: C.wine800, hoverFrom: C.wine700, hoverTo: C.wine800 }
      : { from: "rgba(15,23,42,.06)", to: "rgba(15,23,42,.02)", hoverFrom: "rgba(15,23,42,.10)", hoverTo: "rgba(15,23,42,.04)" };

  return (
    <Comp
      {...props}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold px-4 py-2 transition",
        isNeutral ? "border bg-white" : "text-white",
        className
      )}
      style={
        isNeutral
          ? {
              borderColor: "rgba(15,23,42,.10)",
              color: "rgba(15,23,42,.85)",
              boxShadow: SHADOW_SOFT,
              background: "rgba(15,23,42,.04)",
            }
          : {
              background: `linear-gradient(135deg, ${base.from} 0%, ${base.to} 100%)`,
              boxShadow: SHADOW_SOFT,
              color: "white",
            }
      }
      onMouseEnter={(e) => {
        if (!isNeutral) e.currentTarget.style.background = `linear-gradient(135deg, ${base.hoverFrom} 0%, ${base.hoverTo} 100%)`;
        else e.currentTarget.style.background = "rgba(15,23,42,.08)";
      }}
      onMouseLeave={(e) => {
        if (!isNeutral) e.currentTarget.style.background = `linear-gradient(135deg, ${base.from} 0%, ${base.to} 100%)`;
        else e.currentTarget.style.background = "rgba(15,23,42,.04)";
      }}
    />
  );
}

export function BrandedCard({ title, desc, tone = "brand", tag }) {
  const isWine = tone === "wine";
  const accent = isWine ? C.wine500 : C.brand500;
  const tint = isWine ? C.wine50 : C.brand50;

  return (
    <div
      className="rounded-2xl border border-black/5 p-7 relative overflow-hidden bg-white"
      style={{
        boxShadow: SHADOW,
        background: `linear-gradient(180deg, ${tint} 0%, white 55%)`,
      }}
    >
      <div className="absolute left-0 top-0 h-full" style={{ width: 14, background: accent }} />

      {tag ? (
        <div
          className="absolute right-5 top-5 text-xs font-semibold rounded-full px-3 py-1 border"
          style={{
            background: isWine ? C.wine100 : C.brand100,
            color: isWine ? C.wine800 : C.brand800,
            borderColor: isWine ? C.wine200 : C.brand200,
          }}
        >
          {tag}
        </div>
      ) : null}

      <div className="text-lg font-semibold" style={{ color: C.ink }}>
        {title}
      </div>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(15,23,42,.72)" }}>
        {desc}
      </p>
    </div>
  );
}
