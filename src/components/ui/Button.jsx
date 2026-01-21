// src/components/ui/Button.jsx
import React from "react";
import { C, cn, SHADOW_SOFT } from "./brand";

export default function Button({
  as: Comp = "button",
  variant = "primary", // primary | secondary | wine | ghost
  className,
  children,
  ...props
}) {
  const styles = getVariantStyles(variant);

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold transition",
        "px-4 py-2 text-sm",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      style={styles.base}
      onMouseEnter={(e) => styles.onEnter?.(e.currentTarget)}
      onMouseLeave={(e) => styles.onLeave?.(e.currentTarget)}
      {...props}
    >
      {children}
    </Comp>
  );
}

function getVariantStyles(variant) {
  if (variant === "wine") {
    return {
      base: { background: C.wine800, color: "white", boxShadow: SHADOW_SOFT },
      onEnter: (el) => (el.style.background = C.wine700),
      onLeave: (el) => (el.style.background = C.wine800),
    };
  }

  if (variant === "secondary") {
    return {
      base: {
        background: "white",
        border: "1px solid rgba(15,23,42,.10)",
        color: "rgba(15,23,42,.85)",
        boxShadow: SHADOW_SOFT,
      },
      onEnter: (el) => (el.style.background = C.brand50),
      onLeave: (el) => (el.style.background = "white"),
    };
  }

  if (variant === "ghost") {
    return {
      base: {
        background: "rgba(15,23,42,.04)",
        border: "1px solid rgba(15,23,42,.08)",
        color: "rgba(15,23,42,.85)",
      },
      onEnter: (el) => (el.style.background = "rgba(15,23,42,.08)"),
      onLeave: (el) => (el.style.background = "rgba(15,23,42,.04)"),
    };
  }

  // primary
  return {
    base: { background: C.brand500, color: "white", boxShadow: SHADOW_SOFT },
    onEnter: (el) => (el.style.background = C.brand600),
    onLeave: (el) => (el.style.background = C.brand500),
  };
}
