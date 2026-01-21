// src/pages/Contact.jsx
import { useMemo, useState } from "react";
import Section from "../components/Section.jsx";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

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

function Badge({ children, tone = "brand" }) {
  const isWine = tone === "wine";
  return (
    <span
      className="text-xs font-semibold rounded-full px-3 py-1 border"
      style={{
        background: isWine ? C.wine50 : C.brand50,
        color: isWine ? C.wine700 : C.brand800,
        borderColor: isWine ? C.wine200 : C.brand200,
      }}
    >
      {children}
    </span>
  );
}

function Field({ label, hint, error, children }) {
  return (
    <label className="block">
      <div className="flex items-end justify-between gap-3">
        <span className="text-sm font-semibold" style={{ color: C.ink }}>
          {label}
        </span>
        {hint ? (
          <span className="text-xs" style={{ color: "rgba(15,23,42,.55)" }}>
            {hint}
          </span>
        ) : null}
      </div>

      <div
        className={cn("mt-2 rounded-2xl", error && "ring-2")}
        style={{
          // subtle wine ring when error
          ringColor: error ? "color-mix(in srgb, var(--color-wine-500, #702840) 30%, transparent)" : undefined,
        }}
      >
        {children}
      </div>

      {error ? (
        <div className="mt-2 text-xs font-semibold" style={{ color: C.wine500 }}>
          {error}
        </div>
      ) : null}
    </label>
  );
}

function BrandedPanel({ title, tone = "brand", children }) {
  const isWine = tone === "wine";
  const accent = isWine ? C.wine500 : C.brand500;

  return (
    <div
      className="rounded-[28px] bg-white border border-black/5 overflow-hidden relative"
      style={{ boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
    >
      {/* top accent bar */}
      <div
        className="absolute left-0 top-0 w-full"
        style={{
          height: 8,
          background: `linear-gradient(90deg, ${accent} 0%, ${
            isWine ? C.wine200 : C.brand200
          } 60%, ${C.brand200} 120%)`,
        }}
      />
      <div className="p-8 md:p-10">
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm font-semibold" style={{ color: isWine ? C.wine700 : C.brand800 }}>
            {title}
          </div>
          <Badge tone={tone}>{isWine ? "Support" : "Contact"}</Badge>
        </div>

        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" }); // idle | sending | ok | error
  const [touched, setTouched] = useState(false);

  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Please enter a valid email address.";
    if (!form.message.trim()) e.message = "Please tell us how we can help.";
    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;
  const isSending = status.type === "sending";
  const disableSubmit = isSending || !isValid;

  async function onSubmit(e) {
    e.preventDefault();
    setTouched(true);
    setStatus({ type: "idle", message: "" });

    if (!isValid) {
      setStatus({ type: "error", message: "Please fix the highlighted fields." });
      return;
    }

    try {
      setStatus({ type: "sending", message: "Sending..." });

      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) throw new Error(data?.message || "Failed to send message.");

      setStatus({ type: "ok", message: data.message || "Message sent." });
      setForm({ name: "", email: "", subject: "", message: "" });
      setTouched(false);
    } catch (err) {
      setStatus({
        type: "error",
        message: err?.message || "Something went wrong. Try again.",
      });
    }
  }

  const statusStyle =
    status.type === "ok"
      ? { background: C.brand100, color: C.brand800, borderColor: C.brand200 }
      : status.type === "sending"
      ? { background: "rgba(15,23,42,.04)", color: "rgba(15,23,42,.8)", borderColor: "rgba(15,23,42,.08)" }
      : status.type === "error"
      ? { background: `color-mix(in srgb, ${C.wine500} 12%, white)`, color: C.wine700, borderColor: `color-mix(in srgb, ${C.wine500} 20%, white)` }
      : null;

  return (
    <div>
      <Section
        eyebrow="Contact"
        title="Get in touch"
        accent="wine"
        subtitle="For partnerships, program support, or general enquiries—send us a message and we’ll respond."
      >
        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          {/* Left */}
          <BrandedPanel title="Contact details" tone="wine">
            <div className="grid gap-4 text-sm" style={{ color: "rgba(15,23,42,.82)" }}>
              <div>
                <div className="font-semibold" style={{ color: C.ink }}>
                  Email
                </div>
                <a
                  className="underline-offset-4 hover:underline"
                  style={{ color: "rgba(15,23,42,.7)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.wine700)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(15,23,42,.7)")}
                  href="mailto:longhornfoundation@longhornpublishers.com"
                >
                  longhornfoundation@longhornpublishers.com
                </a>
              </div>

              <div>
                <div className="font-semibold" style={{ color: C.ink }}>
                  Phone
                </div>
                <a
                  className="underline-offset-4 hover:underline"
                  style={{ color: "rgba(15,23,42,.7)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.wine700)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(15,23,42,.7)")}
                  href="tel:+254715377722"
                >
                  +254 715 377 722
                </a>
              </div>

              <div className="pt-1" style={{ color: "rgba(15,23,42,.6)" }}>
                Prefer partnerships or program support? Send a message and we’ll respond.
              </div>
            </div>

            {/* nice branded note (optional, but professional) */}
            <div
              className="mt-8 rounded-2xl border p-5"
              style={{
                background: `linear-gradient(135deg,
                  color-mix(in srgb, ${C.brand50} 85%, white) 0%,
                  color-mix(in srgb, ${C.wine50} 70%, white) 100%)`,
                borderColor: "rgba(15,23,42,.08)",
              }}
            >
              <div className="text-sm font-semibold" style={{ color: C.ink }}>
                What to include
              </div>
              <div className="mt-2 text-sm" style={{ color: "rgba(15,23,42,.72)" }}>
                Tell us your organization (if applicable), the location, and the kind of support you’re seeking.
              </div>
            </div>
          </BrandedPanel>

          {/* Right */}
          <div
            className="rounded-[28px] bg-white border border-black/5 overflow-hidden flex flex-col relative"
            style={{ boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
          >
            {/* top accent */}
            <div
              className="absolute left-0 top-0 w-full"
              style={{
                height: 8,
                background: `linear-gradient(90deg, ${C.brand500} 0%, ${C.brand200} 45%, ${C.wine500} 100%)`,
              }}
            />

            <div className="p-8 md:p-10 pb-6">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold" style={{ color: C.wine700 }}>
                  Send a message
                </div>
                <div className="text-xs" style={{ color: "rgba(15,23,42,.55)" }}>
                  Required: name, email, message
                </div>
              </div>

              {status.type !== "idle" ? (
                <div
                  className="mt-4 rounded-2xl px-4 py-3 text-sm font-semibold border"
                  style={statusStyle || undefined}
                >
                  {status.message}
                </div>
              ) : null}
            </div>

            <form onSubmit={onSubmit} noValidate className="flex flex-col flex-1">
              <div className="px-8 md:px-10 pb-6 grid gap-5">
                <Field label="Full name" error={touched ? errors.name : ""}>
                  <input
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none"
                    style={{
                      color: C.ink,
                      boxShadow: "inset 0 0 0 1px rgba(15,23,42,.06)",
                    }}
                    placeholder="Your name"
                    autoComplete="name"
                    onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 4px color-mix(in srgb, ${C.brand200} 45%, transparent)`)}
                    onBlur={(e) => (e.currentTarget.style.boxShadow = "inset 0 0 0 1px rgba(15,23,42,.06)")}
                  />
                </Field>

                <Field label="Email address" error={touched ? errors.email : ""}>
                  <input
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none"
                    style={{ color: C.ink, boxShadow: "inset 0 0 0 1px rgba(15,23,42,.06)" }}
                    placeholder="you@example.com"
                    autoComplete="email"
                    inputMode="email"
                    type="email"
                    onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 4px color-mix(in srgb, ${C.brand200} 45%, transparent)`)}
                    onBlur={(e) => (e.currentTarget.style.boxShadow = "inset 0 0 0 1px rgba(15,23,42,.06)")}
                  />
                </Field>

                <Field label="Subject" hint="Optional">
                  <input
                    value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none"
                    style={{ color: C.ink, boxShadow: "inset 0 0 0 1px rgba(15,23,42,.06)" }}
                    placeholder="How can we help?"
                    onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 4px color-mix(in srgb, ${C.brand200} 45%, transparent)`)}
                    onBlur={(e) => (e.currentTarget.style.boxShadow = "inset 0 0 0 1px rgba(15,23,42,.06)")}
                  />
                </Field>

                <Field label="Message" error={touched ? errors.message : ""}>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full min-h-[160px] resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none"
                    style={{ color: C.ink, boxShadow: "inset 0 0 0 1px rgba(15,23,42,.06)" }}
                    placeholder="Write your message..."
                    onFocus={(e) => (e.currentTarget.style.boxShadow = `0 0 0 4px color-mix(in srgb, ${C.brand200} 45%, transparent)`)}
                    onBlur={(e) => (e.currentTarget.style.boxShadow = "inset 0 0 0 1px rgba(15,23,42,.06)")}
                  />
                </Field>
              </div>

              {/* Button area pinned + branded */}
              <div className="mt-auto border-t border-black/5 px-8 md:px-10 py-6 bg-white">
                <button
                  type="submit"
                  disabled={disableSubmit}
                  className={cn(
                    "w-full sm:w-auto inline-flex justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition",
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                  )}
                  style={{
                    background: isSending ? "rgba(15,23,42,.08)" : C.brand600,
                    color: isSending ? "rgba(15,23,42,.75)" : "white",
                    boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
                  }}
                  onMouseEnter={(e) => {
                    if (!disableSubmit) e.currentTarget.style.background = C.brand700;
                  }}
                  onMouseLeave={(e) => {
                    if (!disableSubmit) e.currentTarget.style.background = C.brand600;
                  }}
                >
                  {isSending ? "Sending..." : "Send message"}
                </button>

                <div className="mt-3 text-xs" style={{ color: "rgba(15,23,42,.55)" }}>
                  We typically respond within 1–2 business days.
                </div>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
