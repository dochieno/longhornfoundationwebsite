// src/pages/GetInvolved.jsx
import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";

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

function BrandedCard({ title, desc, bullets, ctaLabel, ctaTo, tone = "brand" }) {
  const isWine = tone === "wine";
  const accent = isWine ? C.wine500 : C.brand500;

  return (
    <div
      className="rounded-2xl bg-white border border-black/5 p-7 flex flex-col relative overflow-hidden"
      style={{ boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
    >
      {/* top accent bar */}
      <div
        className="absolute left-0 top-0 w-full"
        style={{
          height: 6,
          background: `linear-gradient(90deg, ${accent} 0%, ${
            isWine ? C.wine200 : C.brand200
          } 70%, ${C.brand200} 110%)`,
        }}
      />

      <div className="flex items-center justify-between gap-3">
        <div className="text-lg font-semibold" style={{ color: C.ink }}>
          {title}
        </div>
        <Badge tone={tone}>{isWine ? "Community" : "Partnership"}</Badge>
      </div>

      <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(15,23,42,.72)" }}>
        {desc}
      </p>

      {bullets?.length ? (
        <div className="mt-5 grid gap-2 text-sm" style={{ color: "rgba(15,23,42,.85)" }}>
          {bullets.map((b, i) => (
            <div key={i} className="flex gap-2">
              <span className="mt-2 inline-block h-2 w-2 rounded-full" style={{ background: accent }} />
              <span>{b}</span>
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-auto pt-6">
        <Link
          to={ctaTo}
          className="inline-flex rounded-xl text-white font-semibold px-4 py-2 transition"
          style={{ background: accent, boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = isWine ? C.wine700 : C.brand600;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = accent;
          }}
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}

function Step({ n, title, desc, tone = "brand" }) {
  const isWine = tone === "wine";
  const accent = isWine ? C.wine500 : C.brand500;

  return (
    <div
      className="rounded-2xl bg-white border border-black/5 p-7 relative overflow-hidden"
      style={{ boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
    >
      <div className="absolute left-0 top-0 h-full" style={{ width: 5, background: accent }} />

      <div className="flex items-start gap-3">
        <div
          className="h-10 w-10 rounded-2xl border flex items-center justify-center font-bold"
          style={{
            background: isWine ? C.wine50 : C.brand50,
            borderColor: isWine ? C.wine200 : C.brand200,
            color: isWine ? C.wine700 : C.brand800,
          }}
        >
          {n}
        </div>
        <div>
          <div className="text-base font-semibold" style={{ color: C.ink }}>
            {title}
          </div>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(15,23,42,.72)" }}>
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function GetInvolved() {
  return (
    <div>
      {/* HERO */}
      <Section
        eyebrow="Get involved"
        title="Partner, support, or volunteer"
        accent="wine"
        subtitle="There are several ways to support stronger literacy and numeracy foundations. Choose what fits you or your organization."
      >
        <div
          className="rounded-[28px] bg-white border border-black/5 p-8 md:p-10 relative overflow-hidden"
          style={{ boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
        >
          {/* hero top accent */}
          <div
            className="absolute left-0 top-0 w-full"
            style={{
              height: 8,
              background: `linear-gradient(90deg, ${C.brand500} 0%, ${C.brand200} 45%, ${C.wine500} 100%)`,
            }}
          />

          <div className="grid gap-6 md:grid-cols-2 items-stretch">
            {/* Left */}
            <div className="flex flex-col">
              <div className="text-sm font-semibold" style={{ color: C.wine700 }}>
                What we’re looking for
              </div>
              <p className="mt-3 leading-relaxed" style={{ color: "rgba(15,23,42,.72)" }}>
                We collaborate with schools, communities, donors, and institutions to strengthen learning
                outcomes through practical support, resources, and teacher development.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex rounded-xl text-white font-semibold px-5 py-3 transition"
                  style={{ background: C.brand500, boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = C.brand600)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = C.brand500)}
                >
                  Contact us
                </Link>

                <Link
                  to="/programs"
                  className="inline-flex rounded-xl font-semibold px-5 py-3 transition border bg-white"
                  style={{
                    borderColor: "rgba(15,23,42,.10)",
                    color: "rgba(15,23,42,.85)",
                    boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
                  }}
                >
                  View programs
                </Link>
              </div>

              <div className="mt-6 text-sm grid gap-2" style={{ color: "rgba(15,23,42,.72)" }}>
                <div className="flex gap-2">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full" style={{ background: C.brand500 }} />
                  <span>School partnerships and community initiatives</span>
                </div>
                <div className="flex gap-2">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full" style={{ background: C.brand500 }} />
                  <span>Support for learning resources and hubs</span>
                </div>
                <div className="flex gap-2">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full" style={{ background: C.brand500 }} />
                  <span>Teacher support and capacity building</span>
                </div>
              </div>
            </div>

            {/* Right: Quick start */}
            <div
              className="rounded-2xl border p-7 flex flex-col"
              style={{
                background: `linear-gradient(135deg,
                  color-mix(in srgb, ${C.brand50} 85%, white) 0%,
                  color-mix(in srgb, ${C.wine50} 70%, white) 100%)`,
                borderColor: "rgba(15,23,42,.08)",
              }}
            >
              <div className="text-sm font-semibold" style={{ color: C.brand800 }}>
                Quick start
              </div>
              <div className="mt-2 text-xl font-semibold" style={{ color: C.ink }}>
                Tell us what you want to support
              </div>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(15,23,42,.72)" }}>
                Share your interest (donation, partnership, volunteering, or a school request). We’ll
                respond with the next steps and the right contact person.
              </p>

              <Link
                to="/contact"
                className="mt-auto inline-flex w-full justify-center rounded-xl text-white font-semibold px-4 py-2 transition"
                style={{ background: C.wine800, boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = C.wine700)}
                onMouseLeave={(e) => (e.currentTarget.style.background = C.wine800)}
              >
                Start a conversation
              </Link>

              <div className="mt-3 text-xs text-center" style={{ color: "rgba(15,23,42,.55)" }}>
                We typically reply within normal business hours.
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* OPTIONS */}
      <Section
        eyebrow="Ways to support"
        title="Choose how you’d like to engage"
        accent="brand"
        headingLevel={2}
      >
        <div className="grid gap-5 md:grid-cols-3">
          <BrandedCard
            title="Partner with us"
            desc="Collaborate on school or community initiatives that strengthen foundational skills."
            bullets={[
              "Schools, NGOs, community groups, and institutions",
              "Co-design initiatives based on local needs",
              "Clear governance and measurable outcomes",
            ]}
            ctaLabel="Discuss partnership"
            ctaTo="/contact"
            tone="brand"
          />

          <BrandedCard
            title="Support resources"
            desc="Help expand access to learning materials and strengthen learning environments."
            bullets={[
              "Readers, textbooks, numeracy kits",
              "Community learning hubs and safe spaces",
              "Targeted support for underserved areas",
            ]}
            ctaLabel="Support a program"
            ctaTo="/contact"
            tone="wine"
          />

          <BrandedCard
            title="Volunteer"
            desc="Contribute time and skills to support learning activities and community engagement."
            bullets={[
              "Reading sessions and mentorship",
              "Community outreach and events",
              "Skills-based support (design, ops, MEL)",
            ]}
            ctaLabel="Volunteer interest"
            ctaTo="/contact"
            tone="brand"
          />
        </div>

        {/* Contact note like Policies */}
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
            Not sure where you fit, or want to support a specific school/community?
            <span className="font-semibold"> Contact us and we’ll guide you.</span>
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

      {/* PROCESS */}
      <Section
        eyebrow="How it works"
        title="A simple engagement process"
        accent="wine"
        headingLevel={2}
        subtitle="We keep it clear and practical—from first contact to implementation."
      >
        <div className="grid gap-5 md:grid-cols-3">
          <Step n="1" title="Reach out" desc="Tell us what you’d like to support and where you are based." tone="brand" />
          <Step n="2" title="Align on scope" desc="We clarify needs, timelines, and the most suitable program approach." tone="wine" />
          <Step n="3" title="Deliver & learn" desc="We implement with partners and track results to improve outcomes." tone="brand" />
        </div>

        <div
          className="mt-6 rounded-2xl p-7 shadow-soft flex flex-wrap items-center justify-between gap-3 text-white"
          style={{
            background: `linear-gradient(135deg, ${C.brand500} 0%, ${C.brand600} 55%, ${C.wine500} 120%)`,
            boxShadow: "0 10px 25px rgba(15, 23, 42, 0.12)",
          }}
        >
          <div>
            <div className="text-sm font-semibold" style={{ color: "rgba(255,255,255,.9)" }}>
              Ready to begin?
            </div>
            <div className="mt-1 text-xl md:text-2xl font-bold">
              Let’s work together to strengthen learning outcomes.
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex rounded-xl font-semibold px-4 py-2 transition bg-white border"
            style={{ color: C.brand800, borderColor: "rgba(255,255,255,.25)" }}
          >
            Contact us
          </Link>
        </div>
      </Section>
    </div>
  );
}
