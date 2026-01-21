// src/components/Footer.jsx
import { Link } from "react-router-dom";

function Icon({ name, className = "h-4 w-4" }) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "phone":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L9.09 10.91a16 16 0 0 0 4 4l1.58-1.58a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 4h16v16H4z" opacity=".15" fill="currentColor" stroke="none" />
          <path d="M4 4h16v16H4z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      );
    case "map":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 21s-6-4.35-6-10a6 6 0 0 1 12 0c0 5.65-6 10-6 10z" />
          <path d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
          <path d="M3.6 9h16.8" />
          <path d="M3.6 15h16.8" />
          <path d="M12 3a14 14 0 0 1 0 18" />
          <path d="M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 0 1 18 0z" />
          <path d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
        </svg>
      );
    default:
      return null;
  }
}

function Item({ icon, label, children }) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10 text-white">
        <Icon name={icon} className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wide text-white/70">
          {label}
        </div>
        <div className="mt-0.5 text-sm text-white/90 break-words">{children}</div>
      </div>
    </div>
  );
}

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-white/80 hover:text-white hover:underline underline-offset-4 transition"
    >
      {children}
    </Link>
  );
}

function FooterA({ href, children, ...rest }) {
  return (
    <a
      href={href}
      className="text-white/90 hover:text-white hover:underline underline-offset-4 transition"
      {...rest}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const year = 2026; // fixed to 2026 as requested

  return (
      <footer className="bg-[#702840] text-white">
      {/* Signature top accent */}
      <div className="h-1 bg-gradient-to-r from-brand-500 via-brand-400 to-wine-500" />

      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="font-semibold text-lg">Longhorn Foundation</div>
          <p className="mt-3 text-sm text-white/85 leading-relaxed">
            Partnership, accountability, safeguarding, measurable impact, and
            community-centered design.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white/10 ring-1 ring-white/10 px-4 py-2 text-xs text-white/85">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-500" />
            <span>Community • Literacy • Impact</span>
          </div>
        </div>

        {/* Links */}
        <div className="text-sm">
          <div className="font-semibold text-white">Quick Links</div>
          <div className="mt-4 grid gap-2">
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/programs">Programs</FooterLink>
            <FooterLink to="/governance">Governance</FooterLink>
            <FooterLink to="/policies">Policies</FooterLink>
            <FooterLink to="/get-involved">Get Involved</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </div>
        </div>

        {/* Contact */}
        <div className="text-sm">
          <div className="font-semibold text-white">Contact</div>

          <div className="mt-4 grid gap-4">
            <Item icon="phone" label="Phone">
              <FooterA href="tel:+254708282260">+254 708 282260</FooterA>
            </Item>

            <Item icon="mail" label="Email">
              <FooterA href="mailto:longhornfoundation@longhornpublishers.com">
                longhornfoundation@longhornpublishers.com
              </FooterA>
            </Item>

            <Item icon="map" label="Address">
              <div className="grid gap-1">
                <div>P.O. BOX 18033-500</div>
                <div>Funzi Road, Off Enterprise Rd, Industrial Area</div>
                <div>Nairobi-Kenya</div>

                <FooterA
                  href="https://maps.app.goo.gl/mkaSWeJLQu7fjWzx8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon name="pin" className="h-4 w-4" />
                    <span>Open in Google Maps</span>
                  </span>
                </FooterA>
              </div>
            </Item>

            <Item icon="globe" label="Website">
              <FooterA
                href="https://www.longhornfoundationtrust.org"
                target="_blank"
                rel="noreferrer"
              >
                www.longhornfoundationtrust.org
              </FooterA>
            </Item>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-white/75 grid gap-2 sm:gap-0 sm:grid-cols-3 sm:items-center">
          <div className="text-center sm:text-left">
            Foundation Trust • Community Impact
          </div>

          <div className="text-center">
            © {year} Longhorn Foundation. All rights reserved.
          </div>

          <div className="flex justify-center sm:justify-end gap-4">
            <FooterLink to="/policies">Policies</FooterLink>
            <FooterLink to="/contact">Support</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}