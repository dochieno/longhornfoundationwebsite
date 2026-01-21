// src/components/ui/Badge.jsx
import React from "react";
import { C, cn } from "./brand";

export default function Badge({ children, tone = "brand", className }) {
  const isWine = tone === "wine";

  return (
    <span
      className={cn("text-xs font-semibold rounded-full px-3 py-1 border", className)}
      style={{
        background: isWine ? C.wine50 : C.brand100,
        color: isWine ? C.wine700 : C.brand800,
        borderColor: isWine ? C.wine200 : C.brand200,
      }}
    >
      {children}
    </span>
  );
}
