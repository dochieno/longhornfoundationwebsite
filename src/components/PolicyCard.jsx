// src/components/PolicyCard.jsx
import { Link } from "react-router-dom";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PolicyCard({ title, desc, href, tag = "Policy" }) {
  const hasHref = typeof href === "string" && href.trim().length > 0;

  return (
    <div className="rounded-2xl bg-white shadow-soft border border-black/5 overflow-hidden flex flex-col">
      {/* Body */}
      <div className="p-7 flex-1">
        <div className="text-lg font-semibold leading-snug">{title}</div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold rounded-full px-3 py-1 bg-brand-100 text-brand-800">
            {tag}
          </span>

          {hasHref ? (
            <span className="text-xs font-semibold rounded-full px-3 py-1 bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60">
              Available
            </span>
          ) : (
            <span className="text-xs font-semibold rounded-full px-3 py-1 bg-slate-50 text-slate-600 ring-1 ring-slate-200/60">
              On request
            </span>
          )}
        </div>

        <p className="mt-4 text-sm text-slate-600 leading-relaxed">{desc}</p>
      </div>

      {/* Footer */}
      <div className="border-t border-black/5 p-6">
        {hasHref ? (
          <div className="flex flex-wrap items-center gap-3">
            {/* Primary: Open */}
            <a
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-xl",
                "bg-wine-700 hover:bg-wine-800 text-white",
                "font-semibold px-4 py-2 shadow-soft transition",
                "focus:outline-none focus:ring-2 focus:ring-wine-200"
              )}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${title} PDF`}
              title="Open PDF"
            >
              <span className="text-base leading-none">↗</span>
              <span>Open PDF</span>
            </a>

            {/* Secondary: Download */}
            <a
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-xl",
                "bg-black/5 hover:bg-black/10 text-slate-800",
                "font-semibold px-4 py-2 transition",
                "focus:outline-none focus:ring-2 focus:ring-brand-200"
              )}
              href={href}
              download
              aria-label={`Download ${title} PDF`}
              title="Download PDF"
            >
              <span className="text-base leading-none">⬇</span>
              <span>Download</span>
            </a>

            <div className="ml-auto text-xs text-slate-500">
              PDF • opens in new tab
            </div>
          </div>
        ) : (
          <div className="grid gap-3">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center rounded-xl bg-black/5 hover:bg-black/10 text-slate-800 font-semibold px-4 py-2 transition"
            >
              Request document
            </Link>
            <div className="text-xs text-slate-500 text-center">
              We’ll respond with the document link
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
