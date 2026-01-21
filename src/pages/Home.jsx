// src/pages/Home.jsx
import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";

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
  brand800: "var(--color-brand-800, #3D5200)",

  wine50: "var(--color-wine-50, #FBF4F6)",
  wine100: "var(--color-wine-100, #F5E0E6)",
  wine200: "var(--color-wine-200, #E8B8C6)",
  wine500: "var(--color-wine-500, #702840)",
  wine700: "var(--color-wine-700, #451927)",
  wine800: "var(--color-wine-800, #31111C)",
};

function Pill({ children, tone = "brand" }) {
  const isWine = tone === "wine";
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border"
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

function StatCard({ label, value, hint, tone = "brand" }) {
  const isWine = tone === "wine";
  const accent = isWine ? C.wine500 : C.brand500;

  return (
    <div
      className="rounded-2xl bg-white border border-black/5 p-6 relative overflow-hidden"
      style={{ boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
    >
      <div className="absolute left-0 top-0 h-full" style={{ width: 5, background: accent }} />

      <div className="text-3xl font-bold" style={{ color: C.ink }}>
        {value}
      </div>
      <div className="mt-1 text-sm font-semibold" style={{ color: "rgba(15,23,42,.85)" }}>
        {label}
      </div>
      {hint ? (
        <div className="mt-2 text-xs leading-relaxed" style={{ color: "rgba(15,23,42,.6)" }}>
          {hint}
        </div>
      ) : null}
    </div>
  );
}

function MiniCard({ label, title, desc, tone = "brand" }) {
  const isWine = tone === "wine";

  return (
    <div
      className="rounded-2xl border p-6 relative overflow-hidden bg-white"
      style={{
        borderColor: isWine ? C.wine200 : C.brand200,
        boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
      }}
    >
      {/* top accent bar */}
      <div
        className="absolute left-0 top-0 w-full"
        style={{
          height: 6,
          background: isWine
            ? `linear-gradient(90deg, ${C.wine500} 0%, ${C.wine200} 70%, ${C.brand200} 100%)`
            : `linear-gradient(90deg, ${C.brand500} 0%, ${C.brand200} 70%, ${C.wine200} 100%)`,
        }}
      />

      <div className="text-sm font-semibold" style={{ color: isWine ? C.wine700 : C.brand800 }}>
        {label}
      </div>
      <div className="mt-2 text-xl font-semibold" style={{ color: C.ink }}>
        {title}
      </div>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(15,23,42,.72)" }}>
        {desc}
      </p>
    </div>
  );
}

function ProgramTeaser({ title, tag, bullets, tone = "brand" }) {
  const isWine = tone === "wine";
  const dot = isWine ? C.wine500 : C.brand500;

  return (
    <div
      className="rounded-2xl bg-white border border-black/5 p-7 relative overflow-hidden"
      style={{ boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
    >
      {/* top accent bar */}
      <div
        className="absolute left-0 top-0 w-full"
        style={{
          height: 6,
          background: `linear-gradient(90deg, ${C.brand500} 0%, ${C.brand200} 45%, ${C.wine500} 100%)`,
        }}
      />

      <div className="flex items-center justify-between gap-3">
        <div className="text-lg font-semibold" style={{ color: C.ink }}>
          {title}
        </div>

        <span
          className="text-xs font-semibold rounded-full px-3 py-1 border"
          style={{
            background: isWine ? C.wine50 : C.brand100,
            color: isWine ? C.wine700 : C.brand800,
            borderColor: isWine ? C.wine200 : C.brand200,
          }}
        >
          {tag}
        </span>
      </div>

      <div className="mt-4 grid gap-2 text-sm" style={{ color: "rgba(15,23,42,.85)" }}>
        {bullets.map((b, i) => (
          <div key={i} className="flex gap-2">
            <span className="mt-2 inline-block h-2 w-2 rounded-full" style={{ background: dot }} />
            <span>{b}</span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <Link
          to="/programs"
          className="inline-flex rounded-xl font-semibold px-4 py-2 transition border"
          style={{
            background: "rgba(15,23,42,.04)",
            borderColor: "rgba(15,23,42,.08)",
            color: "rgba(15,23,42,.85)",
          }}
        >
          View programs
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-8">
        <div
          className="relative overflow-hidden rounded-[28px] bg-white border border-black/5"
          style={{ boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
        >
          {/* stronger branded top accent */}
          <div
            className="absolute left-0 top-0 w-full"
            style={{
              height: 8,
              background: `linear-gradient(90deg, ${C.brand500} 0%, ${C.brand200} 45%, ${C.wine500} 100%)`,
            }}
          />

          {/* soft background accents (branded) */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
            style={{ background: `color-mix(in srgb, ${C.brand100} 60%, transparent)` }}
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl"
            style={{ background: `color-mix(in srgb, ${C.wine100} 55%, transparent)` }}
          />

          <div className="relative p-8 md:p-12 grid gap-10 md:grid-cols-2 items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <Pill>CSR initiative • Longhorn Publishers PLC</Pill>
                <Pill tone="wine">Kenya & East Africa</Pill>
              </div>

              <h1 className="mt-5 text-4xl md:text-5xl font-bold leading-tight" style={{ color: C.ink }}>
                Strong foundations for lifelong learning.
              </h1>

              <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(15,23,42,.7)" }}>
                We support early grade literacy and numeracy by strengthening
                teaching, expanding access to learning resources, and building
                community support around the learner.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/get-involved"
                  className="rounded-xl text-white font-semibold px-5 py-3 transition"
                  style={{ background: C.brand500, boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = C.brand600)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = C.brand500)}
                >
                  Get Involved
                </Link>

                <Link
                  to="/programs"
                  className="rounded-xl font-semibold px-5 py-3 transition border"
                  style={{
                    background: "rgba(15,23,42,.04)",
                    borderColor: "rgba(15,23,42,.08)",
                    color: "rgba(15,23,42,.85)",
                  }}
                >
                  Explore Programs
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap gap-4 text-sm" style={{ color: "rgba(15,23,42,.7)" }}>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: C.brand500 }} />
                  Teacher training & coaching
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: C.brand500 }} />
                  Learning resources & practice
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: C.brand500 }} />
                  Community learning spaces
                </span>
              </div>

              {/* About teaser */}
              <div
                className="mt-7 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-3 border"
                style={{
                  background: `linear-gradient(90deg,
                    color-mix(in srgb, ${C.brand50} 85%, white) 0%,
                    color-mix(in srgb, ${C.wine50} 70%, white) 100%)`,
                  borderColor: "rgba(15,23,42,.08)",
                }}
              >
                <div className="text-sm" style={{ color: "rgba(15,23,42,.8)" }}>
                  Learn who we are, what guides our work, and how we stay accountable.
                </div>
                <Link
                  to="/about"
                  className="inline-flex rounded-xl font-semibold px-4 py-2 transition border bg-white"
                  style={{
                    borderColor: "rgba(15,23,42,.08)",
                    color: "rgba(15,23,42,.85)",
                    boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
                  }}
                >
                  About the foundation
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <MiniCard
                label="Focus"
                title="Early grade foundations"
                desc="Literacy and numeracy foundations that unlock learning across all subjects."
                tone="brand"
              />
              <MiniCard
                label="Delivery"
                title="Schools, teachers, communities"
                desc="Support is designed around the learner—inside classrooms and beyond school."
                tone="wine"
              />

              <div className="grid grid-cols-2 gap-4">
                <StatCard
                  value="Inclusive"
                  label="Equity-first"
                  hint="Prioritizing underserved and marginalized communities."
                  tone="brand"
                />
                <StatCard
                  value="Evidence"
                  label="Data-driven"
                  hint="MEL supports learning and continuous improvement."
                  tone="wine"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <Section
        eyebrow="Programs"
        title="How we deliver impact"
        subtitle="A quick look at our program pillars. Full details live on the Programs page."
        accent="wine"
        headingLevel={2}
      >
        <div className="grid gap-5 md:grid-cols-3">
          <ProgramTeaser
            title="Literacy Support"
            tag="Pillar"
            bullets={[
              "Reading fluency & comprehension practice",
              "Supportive learning materials",
              "Teacher coaching for literacy instruction",
            ]}
            tone="brand"
          />
          <ProgramTeaser
            title="Numeracy Support"
            tag="Pillar"
            bullets={[
              "Number sense & problem-solving activities",
              "Practical tools for classroom learning",
              "Support for learners who need a boost",
            ]}
            tone="brand"
          />
          <ProgramTeaser
            title="Community Learning Hubs"
            tag="Access"
            bullets={[
              "Reading culture beyond school",
              "Partnerships with hubs & libraries",
              "Community participation & ownership",
            ]}
            tone="wine"
          />
        </div>

        <div
          className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl p-6 border"
          style={{
            background: `linear-gradient(90deg,
              color-mix(in srgb, ${C.brand50} 85%, white) 0%,
              color-mix(in srgb, ${C.wine50} 70%, white) 100%)`,
            borderColor: "rgba(15,23,42,.08)",
          }}
        >
          <div className="text-sm" style={{ color: "rgba(15,23,42,.8)" }}>
            Want to partner, donate, or support a school initiative?
            <span className="font-semibold"> Let’s talk.</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              to="/programs"
              className="inline-flex rounded-xl font-semibold px-4 py-2 transition border bg-white"
              style={{
                borderColor: "rgba(15,23,42,.08)",
                color: "rgba(15,23,42,.85)",
                boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
              }}
            >
              View all programs
            </Link>

            <Link
              to="/contact"
              className="inline-flex rounded-xl text-white font-semibold px-4 py-2 transition"
              style={{ background: C.brand500, boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = C.brand600)}
              onMouseLeave={(e) => (e.currentTarget.style.background = C.brand500)}
            >
              Contact us
            </Link>
          </div>
        </div>
      </Section>

      {/* WHY IT MATTERS */}
      <Section
        eyebrow="Why it matters"
        title="Closing the gap between schooling and learning"
        subtitle="Enrollment has increased, but too many learners still miss foundational skills. We focus on early intervention where it matters most."
        accent="brand"
        headingLevel={2}
      >
        <div className="grid gap-5 md:grid-cols-3">
          <StatCard
            value="Early grades"
            label="Highest leverage"
            hint="Foundational skills unlock learning across all subjects."
            tone="brand"
          />
          <StatCard
            value="Underserved"
            label="Priority communities"
            hint="Rural, informal settlements, and marginalized regions."
            tone="wine"
          />
          <StatCard
            value="Measurable"
            label="Accountable impact"
            hint="Monitoring, Evaluation & Learning informs continuous improvement."
            tone="brand"
          />
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div
            className="rounded-2xl bg-white border border-black/5 p-7 relative overflow-hidden"
            style={{ boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
          >
            <div className="absolute left-0 top-0 w-full" style={{ height: 6, background: C.wine500 }} />
            <div className="text-sm font-semibold" style={{ color: C.wine700 }}>
              Transparency
            </div>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(15,23,42,.7)" }}>
              Learn more about our governance structures, oversight, and stewardship.
            </p>
            <Link
              to="/governance"
              className="mt-5 inline-flex rounded-xl font-semibold px-4 py-2 transition border"
              style={{
                background: "rgba(15,23,42,.04)",
                borderColor: "rgba(15,23,42,.08)",
                color: "rgba(15,23,42,.85)",
              }}
            >
              View governance
            </Link>
          </div>

          <div
            className="rounded-2xl text-white p-7 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${C.brand500} 0%, ${C.brand600} 55%, ${C.wine500} 120%)`,
              boxShadow: "0 10px 25px rgba(15, 23, 42, 0.12)",
            }}
          >
            <div className="text-sm font-semibold" style={{ color: "rgba(255,255,255,.9)" }}>
              Ready to collaborate?
            </div>
            <h3 className="mt-2 text-2xl font-bold">Partner with us to grow learning outcomes.</h3>
            <p className="mt-3 leading-relaxed" style={{ color: "rgba(255,255,255,.9)" }}>
              We work with schools, communities, government, NGOs, and donors to
              expand reach and strengthen foundational learning.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/get-involved"
                className="inline-flex rounded-xl font-semibold px-4 py-2 transition bg-white border"
                style={{ color: C.brand800, borderColor: "rgba(255,255,255,.25)" }}
              >
                Ways to get involved
              </Link>
              <Link
                to="/contact"
                className="inline-flex rounded-xl font-semibold px-4 py-2 transition border"
                style={{
                  background: "rgba(255,255,255,.12)",
                  borderColor: "rgba(255,255,255,.22)",
                  color: "white",
                }}
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
