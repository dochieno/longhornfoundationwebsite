// src/components/Section.jsx
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Section({
  eyebrow,
  title,
  subtitle,
  children,
  accent = "wine",
  align = "left", // "left" | "center"
  headingLevel = 1, // keeps backward compatibility with your existing pages
  className = "",
  innerClassName = "",
}) {
  const eyebrowClass = accent === "brand" ? "text-brand-800" : "text-wine-700";
  const isCenter = align === "center";

  const HeadingTag =
    headingLevel === 1
      ? "h1"
      : headingLevel === 2
      ? "h2"
      : headingLevel === 3
      ? "h3"
      : "h2";

  return (
    <section className={cn("mx-auto max-w-6xl px-4 py-10", className)}>
      <div className={cn(isCenter && "text-center", innerClassName)}>
        {eyebrow ? (
          <div
            className={cn(
              "text-xs font-semibold tracking-wide uppercase",
              eyebrowClass
            )}
          >
            {eyebrow}
          </div>
        ) : null}

        {title ? (
          <HeadingTag className="mt-2 text-3xl md:text-4xl font-bold">
            {title}
          </HeadingTag>
        ) : null}

        {subtitle ? (
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div className={cn("mt-6", isCenter && "mx-auto", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
