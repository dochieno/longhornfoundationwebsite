// src/components/Navbar.jsx
import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

/** CSS var + fallback so colors show even if tokens fail */
const C = {
  ink: "var(--color-ink, #0F172A)",

  brand50: "var(--color-brand-50, #F6FAE8)",
  brand100: "var(--color-brand-100, #ECF5C8)",
  brand200: "var(--color-brand-200, #D9EB8B)",
  brand500: "var(--color-brand-500, #88B800)",
  brand600: "var(--color-brand-600, #6F9400)",
  brand700: "var(--color-brand-700, #567200)",
  brand800: "var(--color-brand-800, #3D5200)",

  wine50: "var(--color-wine-50, #FBF4F6)",
  wine100: "var(--color-wine-100, #F5E0E6)",
  wine200: "var(--color-wine-200, #E8B8C6)",
  wine500: "var(--color-wine-500, #702840)",
  wine700: "var(--color-wine-700, #451927)",
  wine800: "var(--color-wine-800, #31111C)",
};

const nav = [
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/governance", label: "Governance" },
  { to: "/policies", label: "Policies" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "px-3 py-2 rounded-xl text-sm font-medium transition border",
          isActive ? "bg-white" : "bg-transparent"
        )
      }
      style={({ isActive }) => ({
        color: isActive ? C.ink : "rgba(15,23,42,.78)",
        background: isActive
          ? `linear-gradient(135deg,
              color-mix(in srgb, ${C.brand50} 85%, white) 0%,
              color-mix(in srgb, ${C.wine50} 70%, white) 100%)`
          : "transparent",
        borderColor: isActive ? "rgba(15,23,42,.10)" : "transparent",
      })}
      onMouseEnter={(e) => {
        if (e.currentTarget.getAttribute("aria-current") !== "page") {
          e.currentTarget.style.background = "rgba(15,23,42,.04)";
          e.currentTarget.style.borderColor = "rgba(15,23,42,.08)";
        }
      }}
      onMouseLeave={(e) => {
        if (e.currentTarget.getAttribute("aria-current") !== "page") {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.borderColor = "transparent";
        }
      }}
    >
      {label}
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close with ESC
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const band = `linear-gradient(90deg, ${C.brand500} 0%, ${C.brand200} 45%, ${C.wine500} 100%)`;

  return (
    <header className="sticky top-0 z-50">
      <div
        className="border-b"
        style={{
          background: "rgba(255,255,255,.82)",
          backdropFilter: "blur(10px)",
          borderColor: "rgba(15,23,42,.06)",
        }}
      >
        {/* TOP brand band */}
        <div style={{ height: 6, background: band }} />

        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
          {/* Brand (make name bold + centered under itself) */}
          <Link to="/" className="flex items-center gap-3 min-w-0">
            <div
              className="rounded-2xl border bg-white overflow-hidden"
              style={{
                borderColor: "rgba(15,23,42,.08)",
                boxShadow: "0 10px 25px rgba(15, 23, 42, 0.06)",
              }}
            >
              <img
                src={logo}
                alt="Longhorn Foundation"
                className="h-12 w-12 md:h-14 md:w-14 object-contain p-1"
              />
            </div>

            {/* ✅ center text + bolder foundation name */}
            <div className="leading-tight min-w-0 text-center">
              <div
                className="text-base md:text-lg font-extrabold tracking-tight truncate"
                style={{ color: C.ink }}
              >
                Longhorn Foundation
              </div>
              <div
                className="text-xs truncate"
                style={{ color: "rgba(15,23,42,.55)" }}
              >
                Community • Literacy • Impact
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <NavItem key={item.to} to={item.to} label={item.label} />
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden sm:inline-flex rounded-xl px-4 py-2 text-sm font-semibold text-white transition"
              style={{
                background: C.brand500,
                boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = C.brand600)}
              onMouseLeave={(e) => (e.currentTarget.style.background = C.brand500)}
            >
              Contact Us
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-xl p-2 transition border"
              style={{
                background: open ? "rgba(15,23,42,.04)" : "transparent",
                borderColor: "rgba(15,23,42,.08)",
                color: C.ink,
              }}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className="text-2xl leading-none">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div
            className="md:hidden border-t"
            style={{
              borderColor: "rgba(15,23,42,.06)",
              background: "white",
            }}
          >
            <div className="mx-auto max-w-6xl px-4 py-3 grid gap-1">
              {nav.map((item) => (
                <NavItem key={item.to} to={item.to} label={item.label} />
              ))}

              <Link
                to="/contact"
                className="mt-2 inline-flex justify-center rounded-xl text-white font-semibold px-4 py-2 transition"
                style={{
                  background: `linear-gradient(135deg, ${C.brand600} 0%, ${C.brand500} 55%, ${C.wine500} 120%)`,
                  boxShadow: "0 10px 25px rgba(15, 23, 42, 0.10)",
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}

        {/* ✅ BOTTOM brand band (same as top) */}

      </div>
    </header>
  );
}
