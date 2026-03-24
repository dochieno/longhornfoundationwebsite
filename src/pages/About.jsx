// src/pages/About.jsx
import Section from "../components/Section.jsx";
import { useMemo } from "react";
import { C, SHADOW_SOFT } from "../styles/brand";

/* ---------- Small branded building blocks ---------- */

function Badge({ children, tone = "brand" }) {
  const isWine = tone === "wine";
  return (
    <span
      className="text-xs font-semibold rounded-full px-3 py-1 border"
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

function BrandedCard({ title, children, tag, tone = "brand", accent = "left" }) {
  const isWine = tone === "wine";
  const accentColor = isWine ? C.wine500 : C.brand500;

  return (
    <div
      className="rounded-2xl bg-white border border-black/5 p-7 relative overflow-hidden"
      style={{ boxShadow: SHADOW_SOFT }}
    >
      {accent === "left" ? (
        <div className="absolute left-0 top-0 h-full" style={{ width: 6, background: accentColor }} />
      ) : (
        <div
          className="absolute left-0 top-0 w-full"
          style={{
            height: 6,
            background: `linear-gradient(90deg, ${C.brand500} 0%, ${C.brand200} 45%, ${C.wine500} 100%)`,
          }}
        />
      )}

      <div className="flex items-center justify-between gap-3">
        <div className="text-lg font-semibold" style={{ color: C.ink }}>
          {title}
        </div>
        {tag ? <Badge tone={tone}>{tag}</Badge> : null}
      </div>

      <div className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(15,23,42,.75)" }}>
        {children}
      </div>
    </div>
  );
}

function ValueCard({ letter, word, desc }) {
  return (
    <div className="rounded-2xl bg-white border border-black/5 p-7 relative overflow-hidden" style={{ boxShadow: SHADOW_SOFT }}>
      <div
        className="absolute left-0 top-0 w-full"
        style={{
          height: 6,
          background: `linear-gradient(90deg, ${C.wine500} 0%, ${C.brand500} 55%, ${C.brand200} 100%)`,
        }}
      />

      <div className="flex items-center gap-3">
        <div
          className="h-11 w-11 rounded-2xl border flex items-center justify-center"
          style={{ background: C.wine50, borderColor: C.wine200 }}
        >
          <span className="font-extrabold" style={{ color: C.wine700 }}>
            {letter}
          </span>
        </div>
        <div className="text-base font-semibold" style={{ color: C.ink }}>
          {word}
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(15,23,42,.75)" }}>
        {desc}
      </p>
    </div>
  );
}

function YouTubeEmbed({ url, title = "Longhorn Foundation video" }) {
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
      className="rounded-[28px] bg-white border border-black/5 overflow-hidden h-full flex flex-col"
      style={{ boxShadow: SHADOW_SOFT }}
    >
      <div
        style={{
          height: 6,
          background: `linear-gradient(90deg, ${C.brand500} 0%, ${C.brand200} 45%, ${C.wine500} 100%)`,
        }}
      />

      <div className="relative bg-black flex-1 min-h-65">
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
            Featured
          </div>
          <div className="mt-1 text-base font-semibold" style={{ color: C.ink }}>
            {title}
          </div>
          <div className="mt-1 text-sm" style={{ color: "rgba(15,23,42,.7)" }}>
            A quick look at our work and community impact.
          </div>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl text-white font-semibold px-4 py-2 transition"
          style={{ background: C.brand500, boxShadow: SHADOW_SOFT }}
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

/* ---------- Page ---------- */

export default function About() {
  return (
    <div>
      <Section
        eyebrow="About"
        title="Our story and mandate"
        accent="wine"
        subtitle="Who we are, why we exist, and how we strengthen foundational learning for underserved children in Kenya and beyond."
      >
        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          <div className="grid gap-6">
            <BrandedCard title="Who we are" tag="Foundation" tone="brand">
              Longhorn Foundation Trust is a Corporate Social Responsibility initiative of
              Longhorn Publishers PLC. Established under the auspices of the company and
              inspired by the vision of its founding Chair, the Late FT Nyammo, the Foundation
              was fully accredited in July 2025 and builds on more than 60 years of contribution
              to literacy and numeracy initiatives in Kenya and beyond.
            </BrandedCard>

            <BrandedCard title="What we do" tag="Mandate" tone="wine">
              The Foundation strengthens foundational literacy and numeracy through inclusive,
              sustainable education programs. It leverages high-quality educational resources,
              including textbooks and storybooks aligned to the curriculum, together with teacher
              training, mentorship, and direct support to schools and communities.
            </BrandedCard>

            <BrandedCard title="Where we work" tag="Region" tone="brand">
              We work in Kenya and beyond, with strong relevance across East Africa, prioritizing
              underserved and marginalized communities and building supportive learning environments
              through partnerships with educators, communities, and other stakeholders.
            </BrandedCard>
          </div>

          <YouTubeEmbed
            url="https://www.youtube.com/watch?v=zTeKb3V_-ZE"
            title="Longhorn Foundation — Community • Literacy • Impact"
          />
        </div>
      </Section>

      <Section eyebrow="Direction" title="Mission and vision" accent="brand" headingLevel={2}>
        <div className="grid gap-5 md:grid-cols-2">
          <BrandedCard title="Mission" tag="Mission" tone="brand" accent="top">
            To advance education in Kenya and beyond by equipping underserved children with
            strong foundational literacy and numeracy skills, fostering lifelong learning,
            personal growth, and meaningful societal contribution.
          </BrandedCard>

          <BrandedCard title="Vision" tag="Vision" tone="wine" accent="top">
            Transforming education in Kenya and beyond by equipping underserved children with
            foundational literacy and numeracy skills.
          </BrandedCard>
        </div>
      </Section>

      <Section
        eyebrow="Values"
        title="EQUIP"
        subtitle="The principles that guide how we work with learners, educators, and communities."
        accent="wine"
        headingLevel={2}
      >
        <div className="grid gap-5 md:grid-cols-2">
          <ValueCard
            letter="E"
            word="Equity"
            desc="Ensuring all children, regardless of gender, ability, or socioeconomic background, can access quality foundational literacy and numeracy education, especially in underserved communities."
          />
          <ValueCard
            letter="Q"
            word="Quality"
            desc="Providing excellence in educational programs that improve learning outcomes, strengthen teacher capacity, and support better school performance."
          />
          <ValueCard
            letter="U"
            word="Understanding"
            desc="Engaging meaningfully with learners, educators, and communities to design inclusive and relevant responses to real literacy and numeracy challenges."
          />
          <ValueCard
            letter="I"
            word="Integrity"
            desc="Maintaining transparency, accountability, and ethical practice in operations, partnerships, and resource management."
          />
          <ValueCard
            letter="P"
            word="Purpose"
            desc="Driving impactful education initiatives that strengthen foundational learning, empower teachers, and support community engagement."
          />
        </div>
      </Section>
    </div>
  );
}