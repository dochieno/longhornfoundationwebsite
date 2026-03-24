// src/pages/Policies.jsx
import Section from "../components/Section.jsx";
import ImageFrame from "../components/ImageFrame.jsx";
import { Link } from "react-router-dom";
import policiesImage from "../assets/policies/Policies-Documents.png";

/** CSS var + fallback so colors show even if tokens fail */
const C = {
  ink: "var(--color-ink, #0F172A)",

  brand50: "var(--color-brand-50, #F6FAE8)",
  brand100: "var(--color-brand-100, #ECF5C8)",
  brand200: "var(--color-brand-200, #D9EB8B)",
  brand500: "var(--color-brand-500, #88B800)",
  brand600: "var(--color-brand-600, #6F9400)",
  brand700: "var(--color-brand-700, #567500)",
  brand800: "var(--color-brand-800, #3D5200)",

  wine50: "var(--color-wine-50, #FBF4F6)",
  wine100: "var(--color-wine-100, #F5E0E6)",
  wine200: "var(--color-wine-200, #E8B8C6)",
  wine500: "var(--color-wine-500, #702840)",
  wine700: "var(--color-wine-700, #451927)",
  wine800: "var(--color-wine-800, #31111C)",
};

function OpenIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M14 5h5v5" />
      <path d="M10 14L19 5" />
      <path d="M19 14v5H5V5h5" />
    </svg>
  );
}

function DownloadIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M12 3v12" />
      <path d="M7 10l5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function FileIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z" />
      <path d="M14 2v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </svg>
  );
}

function PolicyDocCard({ title, desc, href, tag = "Policy", tone = "brand" }) {
  const isWine = tone === "wine";
  const accent = isWine ? C.wine500 : C.brand500;
  const tint = isWine ? C.wine50 : C.brand50;

  return (
    <div
      className="rounded-[26px] bg-white border border-black/5 p-7 relative overflow-hidden"
      style={{
        boxShadow: "0 18px 45px rgba(15, 23, 42, 0.10)",
        background: `linear-gradient(180deg, ${tint} 0%, white 48%)`,
      }}
    >
      <div className="absolute left-0 top-0 h-full" style={{ width: 8, background: accent }} />

      <div
        className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl"
        style={{ background: `color-mix(in srgb, ${accent} 18%, transparent)` }}
      />

      <div className="flex items-start justify-between gap-3">
        <div className="pr-2">
          <h3 className="text-lg font-semibold leading-snug" style={{ color: C.ink }}>
            {title}
          </h3>
        </div>

        <span
          className="shrink-0 text-xs font-semibold rounded-full px-3 py-1 border"
          style={{
            background: isWine ? C.wine100 : C.brand100,
            color: isWine ? C.wine800 : C.brand800,
            borderColor: isWine ? C.wine200 : C.brand200,
          }}
        >
          {tag}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(15,23,42,.74)" }}>
        {desc}
      </p>

      <div
        className="mt-6 rounded-2xl border px-4 py-4 flex flex-wrap items-center justify-between gap-3"
        style={{
          borderColor: "rgba(15,23,42,.08)",
          background: "rgba(255,255,255,.72)",
        }}
      >
        <div className="inline-flex items-center gap-2 text-xs font-semibold" style={{ color: "rgba(15,23,42,.62)" }}>
          <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl"
            style={{
              background: isWine ? C.wine50 : C.brand50,
              color: isWine ? C.wine700 : C.brand700,
              border: `1px solid ${isWine ? C.wine200 : C.brand200}`,
            }}
          >
            <FileIcon />
          </span>
          PDF document
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold border transition"
            style={{
              borderColor: "rgba(15,23,42,.10)",
              color: "rgba(15,23,42,.82)",
              background: "white",
              boxShadow: "0 8px 20px rgba(15, 23, 42, 0.06)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(15,23,42,.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
            }}
          >
            <OpenIcon />
            <span>Open PDF</span>
          </a>

          <a
            href={href}
            download
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition"
            style={{
              background: `linear-gradient(135deg, ${C.brand500} 0%, ${C.brand600} 100%)`,
              color: "white",
              boxShadow: "0 8px 20px rgba(15, 23, 42, 0.08)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, ${C.brand600} 0%, ${C.brand800} 100%)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `linear-gradient(135deg, ${C.brand500} 0%, ${C.brand600} 100%)`;
            }}
          >
            <DownloadIcon />
            <span>Download</span>
          </a>
        </div>
      </div>
    </div>
  );
}

const docs = [
  {
    title: "Child Safeguarding Policy",
    desc:
      "Sets out the Foundation’s commitment to safe, inclusive, and respectful learning environments for children, including reporting channels, response procedures, staff and partner conduct, and oversight.",
    href: "/policies/Child-Safeguarding-Policy.pdf",
    tag: "Safeguarding",
    tone: "wine",
  },
  {
    title: "Financial Management Policy",
    desc:
      "Defines how the Foundation manages funds responsibly through budgeting, accounting, internal controls, transparent financial reporting, and compliance with statutory and donor requirements.",
    href: "/policies/financial-management-policy.pdf",
    tag: "Finance",
    tone: "brand",
  },
  {
    title: "Monitoring, Evaluation & Learning Policy",
    desc:
      "Explains the Foundation’s MEL approach, including data collection, evaluation, impact assessment, continuous learning, and accountability to partners and stakeholders.",
    href: "/policies/Monitoring-Policy.pdf",
    tag: "MEL",
    tone: "brand",
  },
  {
    title: "Strategic Partnership Policy",
    desc:
      "Guides how the Foundation develops and manages partnerships that align with education priorities, strengthen collaboration, build local ownership, and improve program sustainability.",
    href: "/policies/Strategic-Partnership-Policy.pdf",
    tag: "Partnerships",
    tone: "wine",
  },
];

export default function Policies() {
  return (
    <div>
      <Section
        eyebrow="Policies"
        title="Policies & public documents"
        accent="wine"
        subtitle="Transparency matters. Below are key governance, safeguarding, financial, MEL, and partnership documents available to partners and the public."
      >
        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          <div
            className="h-full rounded-[28px] bg-white border border-black/5 p-8 md:p-10 relative overflow-hidden flex flex-col"
            style={{ boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
          >
            <div
              className="absolute left-0 top-0 w-full"
              style={{
                height: 8,
                background: `linear-gradient(90deg, ${C.brand500} 0%, ${C.brand200} 45%, ${C.wine500} 100%)`,
              }}
            />

            <div className="text-sm font-semibold" style={{ color: C.wine700 }}>
              Transparency
            </div>

            <p className="mt-3 leading-relaxed" style={{ color: "rgba(15,23,42,.72)" }}>
              These policies guide safeguarding, responsible financial stewardship, monitoring and
              learning, and strategic collaboration. Each document can be opened in the browser or
              downloaded as a PDF.
            </p>

            <div className="mt-5 grid gap-2 text-sm" style={{ color: "rgba(15,23,42,.84)" }}>
              <div className="flex gap-2">
                <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full" style={{ background: C.brand500 }} />
                <span>Child safeguarding and safe learning environments</span>
              </div>
              <div className="flex gap-2">
                <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full" style={{ background: C.wine500 }} />
                <span>Strong internal controls and transparent financial management</span>
              </div>
              <div className="flex gap-2">
                <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full" style={{ background: C.brand500 }} />
                <span>Evidence-based monitoring, evaluation, and learning</span>
              </div>
              <div className="flex gap-2">
                <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full" style={{ background: C.wine500 }} />
                <span>Partnerships aligned to education priorities and local ownership</span>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex rounded-xl text-white font-semibold px-4 py-2 transition"
                style={{ background: C.brand500, boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = C.brand600)}
                onMouseLeave={(e) => (e.currentTarget.style.background = C.brand500)}
              >
                Request a document
              </Link>

              <Link
                to="/governance"
                className="inline-flex rounded-xl font-semibold px-4 py-2 transition border bg-white"
                style={{
                  borderColor: "rgba(15,23,42,.10)",
                  color: "rgba(15,23,42,.85)",
                  boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
                }}
              >
                View governance
              </Link>
            </div>

            <div className="mt-auto pt-5 text-xs leading-relaxed" style={{ color: "rgba(15,23,42,.55)" }}>
              Documents are provided in PDF format and may be updated periodically.
            </div>
          </div>

          <div
            className="h-full rounded-[28px] bg-white border border-black/5 overflow-hidden flex flex-col"
            style={{ boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
          >
            <div
              className="h-2"
              style={{
                background: `linear-gradient(90deg, ${C.wine500} 0%, ${C.wine200} 50%, ${C.brand500} 110%)`,
              }}
            />
            <div className="flex-1">
              <ImageFrame
                src={policiesImage}
                alt="Policies and documents"
                caption={undefined}
                ring="ring-black/5"
                aspect="aspect-[16/11]"
                className="h-full"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Documents" title="Policy library" accent="brand" headingLevel={2}>
        <div className="grid gap-5 md:grid-cols-2">
          {docs.map((d) => (
            <PolicyDocCard
              key={d.title}
              title={d.title}
              desc={d.desc}
              href={d.href}
              tag={d.tag}
              tone={d.tone}
            />
          ))}
        </div>

        <div
          className="mt-6 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-3 border"
          style={{
            background: `linear-gradient(90deg,
              color-mix(in srgb, ${C.brand50} 85%, white) 0%,
              color-mix(in srgb, ${C.wine50} 70%, white) 100%)`,
            borderColor: "rgba(15,23,42,.08)",
          }}
        >
          <div className="text-sm" style={{ color: "rgba(15,23,42,.8)" }}>
            For due diligence, partnerships, or governance review, we can share additional documentation on request.
          </div>

          <Link
            to="/contact"
            className="inline-flex rounded-xl font-semibold px-4 py-2 transition border bg-white"
            style={{
              borderColor: "rgba(15,23,42,.10)",
              color: "rgba(15,23,42,.85)",
              boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
            }}
          >
            Contact us
          </Link>
        </div>
      </Section>
    </div>
  );
}