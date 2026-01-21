// src/pages/Policies.jsx
import Section from "../components/Section.jsx";
import PolicyCard from "../components/PolicyCard.jsx";
import ImageFrame from "../components/ImageFrame.jsx";
import { Link } from "react-router-dom";

/** CSS var + fallback so colors show even if tokens fail */
const C = {
  ink: "var(--color-ink, #0F172A)",

  brand50: "var(--color-brand-50, #F6FAE8)",
  brand100: "var(--color-brand-100, #ECF5C8)",
  brand200: "var(--color-brand-200, #D9EB8B)",
  brand500: "var(--color-brand-500, #88B800)",
  brand600: "var(--color-brand-600, #6F9400)",
  brand800: "var(--color-brand-800, #3D5200)",

  wine50: "var(--color-wine-50, #FBF4F6)",
  wine100: "var(--color-wine-100, #F5E0E6)",
  wine200: "var(--color-wine-200, #E8B8C6)",
  wine500: "var(--color-wine-500, #702840)",
  wine700: "var(--color-wine-700, #451927)",
  wine800: "var(--color-wine-800, #31111C)",
};

const docs = [
  {
    title: "Safeguarding Policy",
    desc: "Commitment to child protection, safe programming, and reporting procedures.",
    href: null, // file not present yet
    tag: "Safeguarding",
  },
  {
    title: "Data Protection & Privacy",
    desc: "How we handle data responsibly and protect personal information.",
    href: "/policies/data-protection-privacy.pdf", // ✅ exists
    tag: "Compliance",
  },
  {
    title: "Financial Management Policy",
    desc: "Controls and processes for responsible financial stewardship.",
    href: "/policies/financial-management-policy.pdf", // ✅ exists
    tag: "Finance",
  },
  {
    title: "Code of Conduct",
    desc: "Expected behavior, ethics, and accountability for staff, volunteers, and partners.",
    href: null, // file not present yet
    tag: "Ethics",
  },
];

export default function Policies() {
  return (
    <div>
      <Section
        eyebrow="Policies"
        title="Policies & public documents"
        accent="wine"
        subtitle="Transparency matters. Below are key governance and safeguarding documents available to partners and the public."
      >
        {/* equal-height hero columns */}
        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          {/* Left hero card */}
          <div
            className="h-full rounded-[28px] bg-white border border-black/5 p-8 md:p-10 relative overflow-hidden flex flex-col"
            style={{ boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
          >
            {/* top accent bar */}
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
              These policies guide ethical practice, safeguarding, responsible partnerships, and
              sound stewardship. If you need a document not listed here, please contact us.
            </p>

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

          {/* Right hero image card */}
          <div
            className="h-full rounded-[28px] bg-white border border-black/5 overflow-hidden flex flex-col"
            style={{ boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
          >
            {/* top accent bar */}
            <div
              className="h-2"
              style={{
                background: `linear-gradient(90deg, ${C.wine500} 0%, ${C.wine200} 50%, ${C.brand500} 110%)`,
              }}
            />
            <div className="flex-1">
              <ImageFrame
                src={null}
                alt="Policies"
                caption="Optional: add a policies/handbook image."
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
            <PolicyCard key={d.title} title={d.title} desc={d.desc} href={d.href} tag={d.tag} />
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
            For due diligence or partnerships, we can share additional documentation on request.
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
