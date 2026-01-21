// src/pages/Governance.jsx
import Section from "../components/Section.jsx";
import PersonCard from "../components/PersonCard.jsx";
import ImageFrame from "../components/ImageFrame.jsx";
import { Link } from "react-router-dom";
import { C, SHADOW, SHADOW_SOFT } from "../styles/brand";

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
      {/* SUPER visible accent */}
      <div className="absolute left-0 top-0 h-full" style={{ width: 14, background: accent }} />

      {/* subtle glow */}
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
      {/* INTRO */}
      <Section
        eyebrow="Governance"
        title="Leadership & accountability"
        accent="wine"
        subtitle="Good governance protects learners, strengthens partnerships, and ensures responsible stewardship of resources."
      >
        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          {/* Left hero card */}
          <BrandedShell tone="mix">
            <div
              className="h-full border border-black/5 p-8 md:p-10 relative overflow-hidden flex flex-col rounded-[28px]"
              style={{ boxShadow: SHADOW }}
            >
              {/* VERY visible top band */}
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
                The Foundation is guided by a Board of Trustees that provides strategic oversight and accountability,
                supported by a management team responsible for operations and program delivery.
              </p>

              <div className="mt-6 grid gap-2">
                <Bullet>Strategic oversight and responsible stewardship</Bullet>
                <Bullet tone="wine">Transparent decision-making and compliance</Bullet>
                <Bullet>Safeguarding and ethical partnerships</Bullet>
                <Bullet tone="wine">Clear accountability for results and learning (MEL)</Bullet>
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

          {/* Right hero image card */}
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
                  src={null}
                  alt="Governance"
                  caption="Add a governance/board image here (optional)."
                  ring="ring-black/5"
                  aspect="aspect-[16/11]"
                />
              </div>
            </div>
          </BrandedShell>
        </div>
      </Section>

      {/* GOVERNANCE MODEL */}
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
            desc="Provides strategic direction, governance oversight, and accountability to ensure the Foundation remains aligned to its mandate."
            tone="wine"
            tag="Oversight"
          />
          <InfoCard
            title="Management Team"
            desc="Leads day-to-day operations and program implementation, coordinating partners and ensuring quality delivery."
            tone="brand"
            tag="Delivery"
          />
          <InfoCard
            title="Accountability & Learning"
            desc="Monitoring, Evaluation & Learning (MEL) supports transparency, tracks progress, and helps improve program effectiveness."
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

      {/* BOARD */}
      <Section eyebrow="Board" title="Board of Trustees" accent="wine" headingLevel={2}>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(15,23,42,.72)" }}>
          The Board of Trustees provides oversight, approves strategic priorities, and supports integrity and accountability
          across operations and partnerships.
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <PersonCard name="Name Surname" role="Chairperson" />
          <PersonCard name="Name Surname" role="Trustee" />
          <PersonCard name="Name Surname" role="Trustee" />
        </div>

        <p className="mt-6 text-sm" style={{ color: "rgba(15,23,42,.55)" }}>
          Replace names/roles with the official list from your Foundation Profile.
        </p>
      </Section>

      {/* MANAGEMENT */}
      <Section
        eyebrow="Management"
        title="Management Team"
        accent="brand"
        headingLevel={2}
        subtitle="The management team supports day-to-day delivery and partnership coordination."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <PersonCard name="Name Surname" role="Executive Director" />
          <PersonCard name="Name Surname" role="Programs & Partnerships" />
          <PersonCard name="Name Surname" role="Operations & Compliance" />
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
