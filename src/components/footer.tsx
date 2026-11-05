import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "#destinations" },
  { label: "My Bookings", href: "/bookings" },
  { label: "My Profile", href: "#profile" },
];

const supportLinks = [
  { label: "Help Center", href: "#help-center" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Privacy Policy", href: "#privacy" },
];

const socialLinks = [
  {
    label: "X",
    href: "#x",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#linkedin",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#instagram",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0b0d0c]">
      <div className="mx-auto w-full max-w-[1240px] px-5 pt-16 pb-8 sm:px-6 sm:pt-20">
        <div>
          <Link
            href="/"
            aria-label="Wanderlust home"
            className="font-logo text-[40px] font-bold leading-none tracking-[-0.04em] text-white sm:text-5xl"
          >
            Wanderlust
          </Link>
          <p className="mt-4 max-w-md text-sm text-white/60">
            Your gateway to extraordinary travel experiences around the world.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-8">
          <div>
            <h2 className="text-[11px] font-semibold tracking-[0.14em] text-white/50 uppercase">
              Newsletter
            </h2>
            <p className="mt-3 text-sm text-white/60">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <NewsletterForm />
          </div>

          <nav aria-label="Quick links">
            <h2 className="text-[11px] font-semibold tracking-[0.14em] text-white/50 uppercase">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Support">
            <h2 className="text-[11px] font-semibold tracking-[0.14em] text-white/50 uppercase">
              Support
            </h2>
            <ul className="mt-4 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-semibold tracking-[0.14em] text-white/50 uppercase">
              Contact Us
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+17869011622"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  786 901 1622
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@wanderlust.com"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  info@wanderlust.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Wanderlust. All rights reserved.
          </p>

          <ul className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="block text-white/80 transition-colors hover:text-white [&_svg]:size-4"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
