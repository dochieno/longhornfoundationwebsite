// src/pages/Programs.jsx
import Section from "../components/Section.jsx";
import ImageFrame from "../components/ImageFrame.jsx";
import { Link } from "react-router-dom";
import { useMemo } from "react";

import adultLiteracyImg from "../assets/programs/Adult-Literacy.png";
import educationResearchImg from "../assets/programs/Education Research.png";
import foundationalLearningImg from "../assets/programs/Foundational-Learning.png";
import inclusivityImg from "../assets/programs/Inclusivity.jpg";
import lastMileDigitalLearningImg from "../assets/programs/Last-Mile-Digital-Learning.png";
import scholarshipsImg from "../assets/programs/Scholarships.png";

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
        aspect="aspect-[3/4]"
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
      <div
        className="h-2"
        style={{
          background: `linear-gradient(90deg, ${C.brand500} 0%, ${C.brand200} 45%, ${C.wine500} 100%)`,
        }}
      />

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

      <div className="p-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-sm font-semibold" style={{ color: C.wine700 }}>
            Programs
          </div>
          <div className="mt-1 text-base font-semibold" style={{ color: C.ink }}>
            {title}
          </div>
          <div className="mt-1 text-sm" style={{ color: "rgba(15,23,42,.72)" }}>
            A short overview of how our work supports learners, teachers, and communities.
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
      <Section
        eyebrow="Programs"
        title="What we do"
        accent="wine"
        subtitle="Our programs strengthen foundational literacy and numeracy through practical support for learners, teachers, schools, and communities."
      >
        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          <div
            className="h-full rounded-[28px] bg-white border border-black/5 p-8 md:p-10 flex flex-col relative overflow-hidden"
            style={{ boxShadow: "0 10px 25px rgba(15, 23, 42, 0.08)" }}
          >
            <div
              className="absolute left-0 top-0 w-full"
              style={{
                height: 8,
                background: `linear-gradient(90deg, ${C.brand500} 0%, ${C.brand200} 45%, ${C.wine500} 100%)`,
              }}
            />

            <div className="flex flex-wrap gap-2">
              <Pill>Foundational learning</Pill>
              <Pill tone="wine">Digital access</Pill>
              <Pill>Teacher support</Pill>
              <Pill tone="wine">Inclusive education</Pill>
            </div>

            <div className="mt-5 text-sm font-semibold" style={{ color: C.wine700 }}>
              Program approach
            </div>
            <div className="mt-2 text-2xl md:text-3xl font-bold" style={{ color: C.ink }}>
              Evidence-informed, community-driven education support
            </div>

            <p className="mt-3 leading-relaxed" style={{ color: "rgba(15,23,42,.72)" }}>
              The Foundation delivers targeted programs that improve access to learning resources,
              strengthen instructional quality, and create enabling environments for sustained learning.
              The goal is not only school attendance, but real gains in literacy, numeracy, inclusion,
              and long-term educational participation.
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

          <YouTubeEmbed
            url="https://www.youtube.com/watch?v=zTeKb3V_-ZE"
            title="Longhorn Foundation Programs — Overview"
          />
        </div>
      </Section>

      <Section
        eyebrow="Focus areas"
        title="Our programs"
        accent="brand"
        headingLevel={2}
        subtitle="Six complementary programs designed to improve foundational learning access, quality, and equity."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <ProgramCard
            title="Foundational Learning Acceleration Program (FLAP)"
            desc="Strengthens early grade literacy and numeracy outcomes through structured teaching approaches, quality learning materials, and continuous learner assessment."
            bullets={[
              "Reading fluency, comprehension, and number sense",
              "Teacher coaching and guided instruction",
              "Improved lesson delivery and learner engagement",
            ]}
            imgSrc={foundationalLearningImg}
            tag="Flagship"
            tone="brand"
          />

          <ProgramCard
            title="Last-Mile Digital Learning & Content Access"
            desc="Expands access to curriculum-aligned educational content through inclusive digital and blended learning solutions for underserved and hard-to-reach areas."
            bullets={[
              "Offline learning platforms and devices",
              "Digital content access for schools and communities",
              "Teacher and facilitator support for digital instruction",
            ]}
            imgSrc={lastMileDigitalLearningImg}
            tag="Digital"
            tone="wine"
          />

          <ProgramCard
            title="Community Learning & Adult Literacy"
            desc="Builds safe, inclusive, and accessible learning spaces in communities while strengthening reading, numeracy, and caregiver engagement at household level."
            bullets={[
              "Community libraries, school centers, and youth hubs",
              "Read & Rise expansion",
              "Adult literacy and reading culture support",
            ]}
            imgSrc={adultLiteracyImg}
            tag="Community"
            tone="brand"
          />

          <ProgramCard
            title="Education Research, Data & Policy Lab"
            desc="Generates and applies evidence to improve literacy and numeracy programming through research, assessments, evaluation, and policy engagement."
            bullets={[
              "Research studies and learning assessments",
              "Program evaluation and data analysis",
              "Knowledge sharing and policy engagement",
            ]}
            imgSrc={educationResearchImg}
            tag="Evidence"
            tone="wine"
          />

          <ProgramCard
            title="Inclusive Education & Gender Equity"
            desc="Promotes equitable access to foundational education for learners of all genders, abilities, and socioeconomic backgrounds."
            bullets={[
              "Inclusive learning practices",
              "Targeted outreach for marginalized learners",
              "Capacity building for educators",
            ]}
            imgSrc={inclusivityImg}
            tag="Inclusion"
            tone="brand"
          />

          <ProgramCard
            title="Scholarships & Education Access Support"
            desc="Supports vulnerable and high-potential learners through scholarships, bursaries, mentorship, and learner support systems that improve retention and progression."
            bullets={[
              "Scholarships and bursaries",
              "Academic guidance and mentorship",
              "Retention and transition support",
            ]}
            imgSrc={scholarshipsImg}
            tag="Access"
            tone="wine"
          />
        </div>
      </Section>

      <Section
        eyebrow="How we work"
        title="Operational approach"
        accent="wine"
        headingLevel={2}
        subtitle="Programs are strengthened by partnerships, accountability, learning, and safeguarding."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <OutcomeCard
            title="Strategic partnerships"
            desc="We work with public schools, county governments, national education authorities, NGOs, and community institutions to align with education priorities and strengthen sustainability."
            tone="brand"
          />
          <OutcomeCard
            title="Financial management & accountability"
            desc="Strong internal controls, transparent reporting, and prudent stewardship support compliance and effective use of resources."
            tone="wine"
          />
          <OutcomeCard
            title="Monitoring, Evaluation & Learning"
            desc="A data-driven MEL framework tracks progress, measures outcomes, and informs continuous improvement and evidence-based decision-making."
            tone="brand"
          />
          <OutcomeCard
            title="Child safeguarding & protection"
            desc="Comprehensive safeguarding measures help ensure learning environments are safe, inclusive, respectful, and responsive."
            tone="wine"
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
            Looking for a partnership, school support, research collaboration, or a community initiative?
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