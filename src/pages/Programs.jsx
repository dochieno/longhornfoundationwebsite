// src/pages/Programs.jsx
import Section from "../components/Section.jsx";
import ImageFrame from "../components/ImageFrame.jsx";
import { Link } from "react-router-dom";
import { useMemo } from "react";

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

function ProgramCard({ title, desc, bullets, imgSrc, tag = "Program", tone = "brand" }) {
  const isWine = tone === "wine";
  const dot = isWine ? C.wine500 : C.brand500;

  return (
    <div
      className="rounded-2xl bg-white border border-black/5 overflow-hidden flex flex-col relative"
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

      <ImageFrame
        src={imgSrc || null}
        alt={title}
        ring="ring-black/5"
        aspect="aspect-[16/10]"
        className="rounded-none border-0 shadow-none"
      />

      <div className="p-7 flex-1 flex flex-col">
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

        <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(15,23,42,.72)" }}>
          {desc}
        </p>

        {bullets?.length ? (
          <div className="mt-5 grid gap-2 text-sm" style={{ color: "rgba(15,23,42,.85)" }}>
            {bullets.map((b, i) => (
              <div key={i} className="flex gap-2">
                <span className="mt-2 inline-block h-2 w-2 rounded-full" style={{ background: dot }} />
                <span>{b}</span>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-6">
          <Link
            to="/contact"
            className="inline-flex rounded-xl text-white font-semibold px-4 py-2 transition"
            style={{ background: C.brand500, boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = C.brand600)}
            onMouseLeave={(e) => (e.currentTarget.style.background = C.brand500)}
          >
            Partner with us
          </Link>
        </div>
      </div>
    </div>
  );
}

function OutcomeCard({ title, desc, tone = "brand" }) {
  const isWine = tone === "wine";
  const accent = isWine ? C.wine500 : C.brand500;

  return (
    <div
      className="rounded-2xl bg-white border border-black/5 p-7 relative overflow-hidden"
      style={{ boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
    >
      {/* left accent strip */}
      <div className="absolute left-0 top-0 h-full" style={{ width: 5, background: accent }} />
      <div className="text-lg font-semibold" style={{ color: C.ink }}>
        {title}
      </div>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(15,23,42,.72)" }}>
        {desc}
      </p>
    </div>
  );
}

function YouTubeEmbed({ url, title = "Programs video" }) {
  const embedUrl = useMemo(() => {
    try {
      const u = new URL(url);

      if (u.hostname.includes("youtu.be")) {
        const id = u.pathname.replace("/", "").trim();
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }

      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;

      const parts = u.pathname.split("/").filter(Boolean);
      const idx = parts.indexOf("embed");
      if (idx >= 0 && parts[idx + 1]) return `https://www.youtube.com/embed/${parts[idx + 1]}`;

      return null;
    } catch {
      return null;
    }
  }, [url]);

  return (
    <div
      className="h-full flex flex-col rounded-[28px] bg-white border border-black/5 overflow-hidden"
      style={{ boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
    >
      {/* top accent bar */}
      <div
        className="h-2"
        style={{
          background: `linear-gradient(90deg, ${C.brand500} 0%, ${C.brand200} 45%, ${C.wine500} 100%)`,
        }}
      />

      {/* IMPORTANT: this grows to match left card height */}
      <div className="relative flex-1 bg-black">
        {embedUrl ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={embedUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-white/80">
            Video link is invalid.
          </div>
        )}
      </div>

      {/* footer sticks to bottom */}
      <div className="p-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-sm font-semibold" style={{ color: C.wine700 }}>
            Programs
          </div>
          <div className="mt-1 text-base font-semibold" style={{ color: C.ink }}>
            {title}
          </div>
          <div className="mt-1 text-sm" style={{ color: "rgba(15,23,42,.72)" }}>
            A short overview of how our work supports learners and teachers.
          </div>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl text-white font-semibold px-4 py-2 transition"
          style={{ background: C.brand500, boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = C.brand600)}
          onMouseLeave={(e) => (e.currentTarget.style.background = C.brand500)}
        >
          <span className="text-base leading-none">↗</span>
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}

export default function Programs() {
  return (
    <div>
      {/* HERO */}
      <Section
        eyebrow="Programs"
        title="What we do"
        accent="wine"
        subtitle="Our programs strengthen early grade literacy and numeracy through practical support for learners, teachers, and learning spaces."
      >
        {/* equal height columns */}
        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          {/* Left card */}
          <div
            className="h-full rounded-[28px] bg-white border border-black/5 p-8 md:p-10 flex flex-col relative overflow-hidden"
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

            <div className="flex flex-wrap gap-2">
              <Pill>Foundational learning</Pill>
              <Pill tone="wine">Teacher support</Pill>
              <Pill>Community learning</Pill>
            </div>

            <div className="mt-5 text-sm font-semibold" style={{ color: C.wine700 }}>
              Primary focus
            </div>
            <div className="mt-2 text-2xl md:text-3xl font-bold" style={{ color: C.ink }}>
              Literacy & Numeracy foundations
            </div>

            <p className="mt-3 leading-relaxed" style={{ color: "rgba(15,23,42,.72)" }}>
              We focus on early skills because they unlock learning across all subjects. Our role is to
              strengthen classroom practice, expand access to learning resources, and build community
              support around the learner.
            </p>

            <div className="mt-auto pt-6 flex flex-wrap gap-3">
              <Link
                to="/get-involved"
                className="inline-flex rounded-xl font-semibold px-4 py-2 transition border bg-white"
                style={{
                  borderColor: "rgba(15,23,42,.10)",
                  color: "rgba(15,23,42,.85)",
                  boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)",
                }}
              >
                Ways to get involved
              </Link>

              <Link
                to="/contact"
                className="inline-flex rounded-xl text-white font-semibold px-4 py-2 transition"
                style={{ background: C.brand500, boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = C.brand600)}
                onMouseLeave={(e) => (e.currentTarget.style.background = C.brand500)}
              >
                Partner with us
              </Link>
            </div>
          </div>

          {/* Right card (video) — EXACT SAME HEIGHT as left */}
          <YouTubeEmbed
            url="https://www.youtube.com/watch?v=zTeKb3V_-ZE"
            title="Longhorn Foundation Programs — Overview"
          />
        </div>
      </Section>

      {/* PROGRAM PILLARS */}
      <Section eyebrow="Focus areas" title="Program pillars" accent="brand" headingLevel={2}>
        <div className="grid gap-5 md:grid-cols-3">
          <ProgramCard
            title="Literacy Support"
            desc="Strengthening reading fluency, comprehension, vocabulary, and foundational language skills in early grades."
            bullets={[
              "Reading practice and structured support",
              "Supportive learning materials",
              "Teacher coaching for literacy instruction",
            ]}
            imgSrc={null}
            tag="Pillar"
            tone="brand"
          />
          <ProgramCard
            title="Numeracy Support"
            desc="Building confidence with numbers, problem-solving, and practical numeracy skills for everyday learning."
            bullets={[
              "Number sense and problem-solving activities",
              "Classroom-friendly tools and methods",
              "Support for learners who need a boost",
            ]}
            imgSrc={null}
            tag="Pillar"
            tone="brand"
          />
          <ProgramCard
            title="Community Learning Hubs"
            desc="Creating and strengthening spaces beyond the classroom where children can read, practice, and stay engaged."
            bullets={[
              "Partnerships with libraries and learning centers",
              "After-school reading and learning sessions",
              "Community participation and ownership",
            ]}
            imgSrc={null}
            tag="Access"
            tone="wine"
          />
        </div>
      </Section>

      {/* WHAT IT LOOKS LIKE */}
      <Section
        eyebrow="In practice"
        title="What implementation can include"
        accent="wine"
        headingLevel={2}
        subtitle="Programs are adapted to context—school needs, community priorities, and partnership models."
      >
        <div className="grid gap-5 md:grid-cols-3">
          <OutcomeCard
            title="Teacher training & coaching"
            desc="Workshops, mentorship, and practical tools that strengthen instruction and classroom routines."
            tone="brand"
          />
          <OutcomeCard
            title="Learning resources"
            desc="Textbooks, readers, numeracy kits, and supportive materials that increase practice and engagement."
            tone="wine"
          />
          <OutcomeCard
            title="Community engagement"
            desc="Reading culture initiatives, parent/community participation, and locally supported learning spaces."
            tone="brand"
          />
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
            Looking for a partnership, school support, or a community initiative?
            <span className="font-semibold"> Let’s build it together.</span>
          </div>

          <Link
            to="/contact"
            className="inline-flex rounded-xl text-white font-semibold px-4 py-2 transition"
            style={{ background: C.brand500, boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = C.brand600)}
            onMouseLeave={(e) => (e.currentTarget.style.background = C.brand500)}
          >
            Start a conversation
          </Link>
        </div>
      </Section>
    </div>
  );
}
