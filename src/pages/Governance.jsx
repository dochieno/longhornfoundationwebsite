// src/pages/Governance.jsx
import { useState } from "react";
import Section from "../components/Section.jsx";
import ImageFrame from "../components/ImageFrame.jsx";
import { Link } from "react-router-dom";
import { C, SHADOW, SHADOW_SOFT } from "../styles/brand";

import fezileMaunchoImg from "../assets/governance/fezile-mauncho.png";
import heroImage from "../assets/governance/Hero-Image.png";
import josphatLowoiImg from "../assets/governance/josphat-lowoi.png";
import makennaNyammoImg from "../assets/governance/makenna-nyammo.png";
import pritchardOnyangoImg from "../assets/governance/pritchard-onyango.png";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function BrandedShell({ children, tone = "mix", className = "" }) {
  const bg =
    tone === "brand"
      ? `linear-gradient(180deg, ${C.brand50} 0%, white 55%, white 100%)`
      : tone === "wine"
      ? `linear-gradient(180deg, ${C.wine50} 0%, white 55%, white 100%)`
      : `linear-gradient(180deg, ${C.brand50} 0%, ${C.wine50} 30%, white 70%, white 100%)`;

  return (
    <div className={cn("rounded-[30px] p-[1.5px]", className)} style={{ background: bg }}>
      <div className="rounded-[28px] bg-white">{children}</div>
    </div>
  );
}

function ButtonLink({ to, tone = "brand", children, className = "" }) {
  const base =
    tone === "brand"
      ? { from: C.brand500, to: C.brand600, hoverFrom: C.brand600, hoverTo: C.brand800 }
      : tone === "wine"
      ? { from: C.wine500, to: C.wine800, hoverFrom: C.wine700, hoverTo: C.wine800 }
      : {
          from: "rgba(15,23,42,.06)",
          to: "rgba(15,23,42,.02)",
          hoverFrom: "rgba(15,23,42,.10)",
          hoverTo: "rgba(15,23,42,.04)",
        };

  const isNeutral = tone === "neutral";

  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold px-4 py-2 transition",
        isNeutral ? "border bg-white" : "text-white shadow-soft",
        className
      )}
      style={
        isNeutral
          ? {
              borderColor: "rgba(15,23,42,.10)",
              color: "rgba(15,23,42,.85)",
              boxShadow: SHADOW_SOFT,
              background: "rgba(15,23,42,.04)",
            }
          : {
              background: `linear-gradient(135deg, ${base.from} 0%, ${base.to} 100%)`,
              boxShadow: SHADOW_SOFT,
              color: "white",
            }
      }
      onMouseEnter={(e) => {
        if (!isNeutral) {
          e.currentTarget.style.background = `linear-gradient(135deg, ${base.hoverFrom} 0%, ${base.hoverTo} 100%)`;
        } else {
          e.currentTarget.style.background = "rgba(15,23,42,.08)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isNeutral) {
          e.currentTarget.style.background = `linear-gradient(135deg, ${base.from} 0%, ${base.to} 100%)`;
        } else {
          e.currentTarget.style.background = "rgba(15,23,42,.04)";
        }
      }}
    >
      {children}
    </Link>
  );
}

function Bullet({ children, tone = "brand" }) {
  const dot = tone === "wine" ? C.wine500 : C.brand500;

  return (
    <div className="flex gap-2">
      <span
        className="mt-2 inline-block h-2.5 w-2.5 rounded-full"
        style={{
          background: dot,
          boxShadow: `0 0 0 6px color-mix(in srgb, ${dot} 18%, transparent)`,
        }}
      />
      <span className="text-sm" style={{ color: "rgba(15,23,42,.85)" }}>
        {children}
      </span>
    </div>
  );
}

function InfoCard({ title, desc, tone = "brand", tag }) {
  const isWine = tone === "wine";
  const accent = isWine ? C.wine500 : C.brand500;
  const tint = isWine ? C.wine50 : C.brand50;

  return (
    <div
      className="rounded-2xl bg-white border border-black/5 p-7 relative overflow-hidden"
      style={{
        boxShadow: SHADOW,
        background: `linear-gradient(180deg, ${tint} 0%, white 55%)`,
      }}
    >
      <div className="absolute left-0 top-0 h-full" style={{ width: 14, background: accent }} />

      <div
        className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full blur-3xl"
        style={{ background: `color-mix(in srgb, ${accent} 22%, transparent)` }}
      />

      <div className="flex items-start justify-between gap-3">
        <div className="text-lg font-semibold" style={{ color: C.ink }}>
          {title}
        </div>

        {tag ? (
          <span
            className="text-xs font-semibold rounded-full px-3 py-1 border"
            style={{
              background: isWine ? C.wine100 : C.brand100,
              color: isWine ? C.wine800 : C.brand800,
              borderColor: isWine ? C.wine200 : C.brand200,
            }}
          >
            {tag}
          </span>
        ) : null}
      </div>

      <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(15,23,42,.72)" }}>
        {desc}
      </p>
    </div>
  );
}

function GovernanceProfileCard({ profile, tone = "wine" }) {
  const [expanded, setExpanded] = useState(false);
  const isWine = tone === "wine";
  const accent = isWine ? C.wine500 : C.brand500;
  const tint = isWine ? C.wine50 : C.brand50;

  return (
    <div
      className="rounded-3xl border border-black/5 overflow-hidden bg-white"
      style={{
        boxShadow: SHADOW,
        background: `linear-gradient(180deg, ${tint} 0%, white 42%)`,
      }}
    >
      <div
        className="h-3"
        style={{
          background: `linear-gradient(90deg, ${accent} 0%, ${
            isWine ? C.wine200 : C.brand200
          } 55%, ${C.brand500} 120%)`,
        }}
      />

      <div className="p-5">
        <div className="mb-5">
          <ImageFrame
            src={profile.imageSrc || null}
            alt={profile.imageAlt || profile.name}
            caption={profile.imageSrc ? undefined : "Profile image to be added."}
            ring="ring-black/5"
            aspect="aspect-[3/3]"
          />
        </div>

        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold leading-snug" style={{ color: C.ink }}>
              {profile.name}
            </h3>
            <p className="mt-1 text-sm font-medium" style={{ color: accent }}>
              {profile.role}
            </p>
          </div>

          {profile.tag ? (
            <span
              className="text-xs font-semibold rounded-full px-3 py-1 border"
              style={{
                background: isWine ? C.wine100 : C.brand100,
                color: isWine ? C.wine800 : C.brand800,
                borderColor: isWine ? C.wine200 : C.brand200,
              }}
            >
              {profile.tag}
            </span>
          ) : null}
        </div>

        <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(15,23,42,.78)" }}>
          {profile.summary}
        </p>

        {expanded ? (
          <div className="mt-4 space-y-3">
            {profile.details?.map((item, index) => (
              <p
                key={index}
                className="text-sm leading-relaxed"
                style={{ color: "rgba(15,23,42,.72)" }}
              >
                {item}
              </p>
            ))}

            {profile.motto ? (
              <div
                className="rounded-2xl px-4 py-3 text-sm italic"
                style={{
                  background: "rgba(15,23,42,.035)",
                  color: "rgba(15,23,42,.72)",
                }}
              >
                “{profile.motto}”
              </div>
            ) : null}
          </div>
        ) : null}

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-5 inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold border transition"
          style={{
            borderColor: "rgba(15,23,42,.10)",
            color: accent,
            background: "white",
            boxShadow: SHADOW_SOFT,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(15,23,42,.04)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "white";
          }}
        >
          {expanded ? "View less" : "View more"}
        </button>
      </div>
    </div>
  );
}

const trustees = [
  {
    name: "Makenna Nyammo",
    role: "Chairperson",
    tag: "Board Leadership",
    imageSrc: makennaNyammoImg,
    imageAlt: "Makenna Nyammo",
    summary:
      "A seasoned leader with over 35 years of experience in business strategy, brand management, governance, and organizational growth.",
    details: [
      "She brings strong corporate leadership and a deep commitment to education and community development, helping guide the Foundation’s mission around literacy, numeracy, and meaningful learning outcomes.",
      "She serves as Executive Director at Thammo Holdings Limited and as a Non-Executive Director at Longhorn Publishers Plc, where she provides strategic oversight and promotes ethical governance.",
      "Her experience includes high-impact work with leading brands such as DHL, Coca-Cola, MultiChoice, and Shell.",
    ],
    motto:
      "A child who reads for pleasure will outlearn a child who reads for grades every single time. Curiosity beats compliance.",
  },
  {
    name: "Pritchard Moth Onyango",
    role: "Trustee",
    tag: "Inclusive Education",
    imageSrc: pritchardOnyangoImg,
    imageAlt: "Pritchard Moth Onyango",
    summary:
      "An education and gender development practitioner with 19 years of experience in early learning, inclusive education, and gender equality.",
    details: [
      "His expertise includes research, programme design, curriculum development, teacher support materials, learner resources, and low-cost teaching aids for diverse learning environments.",
      "He currently serves as Chief Executive Officer of Kindergarten Experts International, providing technical leadership, advisory support, and capacity building for education initiatives.",
      "He has also served with Humanity & Inclusion, Plan International Kenya, and WERK, with a strong focus on girls’ education, disability inclusion, and community engagement.",
      "He holds a Master of Arts in Education, Gender and International Development from University College London and a Bachelor of Education in Early Childhood Education from Kenyatta University.",
    ],
  },
  {
    name: "Hon. Josphat Lodeya Lowoi, OGW",
    role: "Trustee",
    tag: "Public Leadership",
    imageSrc: josphatLowoiImg,
    imageAlt: "Hon. Josphat Lodeya Lowoi, OGW",
    summary:
      "A senior civil servant and public leader with strong experience in inclusive governance, cultural recognition, and advocacy for marginalized communities.",
    details: [
      "He currently serves as Secretary for the Minorities and Marginalized Communities Affairs Unit at the Executive Office of the President.",
      "In this role, he leads national efforts supporting over 79 Ethnic Minority and Marginalized Communities through programmes focused on inclusive governance, education access, cultural preservation, and socio-economic empowerment.",
      "He previously served two terms as Member of the County Assembly in Uasin Gishu County and also as Assembly Majority Leader.",
      "He is a recipient of the Order of the Grand Warrior state honour and is recognized for his advocacy for inclusion and national cohesion.",
    ],
  },
  {
    name: "Fezile Mauncho",
    role: "Trustee",
    tag: "Regenerative Learning",
    imageSrc: fezileMaunchoImg,
    imageAlt: "Fezile Mauncho",
    summary:
      "A Kenyan educator and systems practitioner with deep experience in regenerative, community-based, and culturally grounded learning approaches.",
    details: [
      "Her work spans educational design, interdisciplinary pedagogy, community engagement, and the development of learning environments rooted in culture, ecology, and indigenous knowledge.",
      "She is the co-founder of Kitovu Learning Space, a nature-inspired educational biome for learners aged 5–19, where she supports relational and experiential learning.",
      "She has collaborated with teachers, parents, mentors, organizations, and businesses across Kenya to build partnerships that extend learning beyond traditional classrooms.",
      "She also contributes to storytelling and cultural preservation through Daraja Band, a musical collective focused on healing and cultural memory.",
    ],
  },
];

export default function Governance() {
  return (
    <div
      style={{
        background: `linear-gradient(180deg,
          color-mix(in srgb, ${C.brand50} 95%, white) 0%,
          color-mix(in srgb, ${C.wine50} 75%, white) 35%,
          white 75%)`,
      }}
    >
      <Section
        eyebrow="Governance"
        title="Leadership & accountability"
        accent="wine"
        subtitle="Good governance protects learners, strengthens partnerships, and ensures responsible stewardship of resources."
      >
        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          <BrandedShell tone="mix">
            <div
              className="h-full border border-black/5 p-8 md:p-10 relative overflow-hidden flex flex-col rounded-[28px]"
              style={{ boxShadow: SHADOW }}
            >
              <div
                className="absolute left-0 top-0 w-full"
                style={{
                  height: 14,
                  background: `linear-gradient(90deg, ${C.brand500} 0%, ${C.brand200} 40%, ${C.wine500} 100%)`,
                }}
              />

              <div
                className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full blur-3xl"
                style={{ background: `color-mix(in srgb, ${C.brand100} 50%, transparent)` }}
              />
              <div
                className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full blur-3xl"
                style={{ background: `color-mix(in srgb, ${C.wine100} 42%, transparent)` }}
              />

              <div className="text-sm font-semibold" style={{ color: C.wine800 }}>
                How we are governed
              </div>

              <p className="mt-3 leading-relaxed" style={{ color: "rgba(15,23,42,.72)" }}>
                The Foundation is guided by a Board of Trustees that provides strategic oversight,
                accountability, and direction for the organization, while management supports daily
                operations and program delivery.
              </p>

              <div className="mt-6 grid gap-2">
                <Bullet>Strategic oversight and responsible stewardship</Bullet>
                <Bullet tone="wine">Transparent decision-making and compliance</Bullet>
                <Bullet>Safeguarding and ethical partnerships</Bullet>
                <Bullet tone="wine">Clear accountability for results and learning</Bullet>
              </div>

              <div className="mt-auto pt-7 flex flex-wrap gap-3">
                <ButtonLink to="/policies" tone="neutral">
                  View policies
                </ButtonLink>
                <ButtonLink to="/contact" tone="brand">
                  Partner with us
                </ButtonLink>
              </div>
            </div>
          </BrandedShell>

          <BrandedShell tone="wine">
            <div
              className="h-full border border-black/5 overflow-hidden flex flex-col rounded-[28px]"
              style={{ boxShadow: SHADOW }}
            >
              <div
                className="h-3"
                style={{
                  background: `linear-gradient(90deg, ${C.wine500} 0%, ${C.wine200} 55%, ${C.brand500} 120%)`,
                }}
              />
              <div className="flex-1">
                <ImageFrame
                  src={heroImage}
                  alt="Longhorn Foundation Board of Trustees"
                  caption={undefined}
                  ring="ring-black/5"
                  aspect="aspect-[16/11]"
                />
              </div>
            </div>
          </BrandedShell>
        </div>
      </Section>

      <Section
        eyebrow="Structure"
        title="How oversight and delivery work together"
        accent="brand"
        headingLevel={2}
        subtitle="A simple model: the Board governs; management delivers."
      >
        <div className="grid gap-5 md:grid-cols-3">
          <InfoCard
            title="Board of Trustees"
            desc="Provides strategic direction, governance oversight, and accountability to keep the Foundation aligned to its mission and mandate."
            tone="wine"
            tag="Oversight"
          />
          <InfoCard
            title="Management Team"
            desc="Leads day-to-day operations, programme implementation, partner coordination, and internal execution."
            tone="brand"
            tag="Delivery"
          />
          <InfoCard
            title="Accountability & Learning"
            desc="Supports transparency, tracks progress, and helps strengthen programme effectiveness through learning and evidence."
            tone="brand"
            tag="MEL"
          />
        </div>

        <BrandedShell tone="mix" className="mt-6">
          <div className="rounded-[28px] p-6 border border-black/5" style={{ boxShadow: SHADOW_SOFT }}>
            <div className="text-sm" style={{ color: "rgba(15,23,42,.8)" }}>
              Need documentation for a partnership or due diligence?
              <span className="font-semibold"> We can share governance and policy materials.</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <ButtonLink to="/policies" tone="neutral">
                Policies
              </ButtonLink>
              <ButtonLink to="/contact" tone="wine">
                Request documents
              </ButtonLink>
            </div>
          </div>
        </BrandedShell>
      </Section>

      <Section eyebrow="Board" title="Board of Trustees" accent="wine" headingLevel={2}>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(15,23,42,.72)" }}>
        The Board of Trustees offers strategic guidance, robust governance, and oversight to
        ensure organizational accountability and long‑term sustainability. The Board is
        composed of individuals with extensive expertise across corporate leadership,
        inclusive education, public service, and regenerative learning. Together, they
        provide informed direction and uphold the mission, values, and integrity of the institution.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {trustees.map((profile) => (
            <GovernanceProfileCard key={profile.name} profile={profile} tone="wine" />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Management"
        title="Management Team"
        accent="brand"
        headingLevel={2}
        subtitle="The management team supports day-to-day delivery and partnership coordination."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <GovernanceProfileCard
            tone="brand"
            profile={{
              name: "Profile name",
              role: "Executive Director",
              tag: "To update",
              summary: "Add official management profile details here.",
              details: ["Leave space for profile image and a short operational biography."],
            }}
          />
          <GovernanceProfileCard
            tone="brand"
            profile={{
              name: "Profile name",
              role: "Programs & Partnerships",
              tag: "To update",
              summary: "Add official management profile details here.",
              details: ["Leave space for profile image and a short operational biography."],
            }}
          />
          <GovernanceProfileCard
            tone="brand"
            profile={{
              name: "Profile name",
              role: "Operations & Compliance",
              tag: "To update",
              summary: "Add official management profile details here.",
              details: ["Leave space for profile image and a short operational biography."],
            }}
          />
        </div>

        <div
          className="mt-6 rounded-2xl p-7 flex flex-wrap items-center justify-between gap-3 text-white"
          style={{
            background: `linear-gradient(135deg, ${C.brand500} 0%, ${C.brand600} 55%, ${C.wine500} 120%)`,
            boxShadow: "0 18px 45px rgba(15, 23, 42, 0.14)",
          }}
        >
          <div>
            <div className="text-sm font-semibold" style={{ color: "rgba(255,255,255,.9)" }}>
              Work with us
            </div>
            <div className="mt-1 text-xl md:text-2xl font-bold">
              Let’s build a partnership with clear governance and measurable outcomes.
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex rounded-xl font-semibold px-4 py-2 transition bg-white border"
            style={{
              color: C.brand800,
              borderColor: "rgba(255,255,255,.25)",
              boxShadow: SHADOW_SOFT,
            }}
          >
            Contact us
          </Link>
        </div>
      </Section>
    </div>
  );
}