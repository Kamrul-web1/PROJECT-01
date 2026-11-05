import Link from "next/link";
import { Menu, UserRound } from "lucide-react";
import { cn } from "cn";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destination" },
  {label:'Ad-DEstinations', href:'/add-destination'},
  { label: "My Bookings", href: "/bookings" },
  { label: "Admin", href: "#admin" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0d0c]">
      <div className="flex h-[72px] items-center justify-between px-5 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const active = link.href === "/";

            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-1 text-[13px] font-medium transition-colors hover:text-white",
                  active
                    ? "text-white after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:bg-brand"
                    : "text-white/65"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/"
          aria-label="Wanderlust home"
          className="font-logo text-[28px] font-bold leading-none tracking-[-0.04em] text-brand sm:text-[32px] lg:justify-self-center"
        >
          Wanderlust
        </Link>

        <div className="flex items-center gap-4 text-[13px] text-white/65 sm:gap-6 lg:justify-self-end">
          <Link
            href="#profile"
            className="hidden items-center gap-1.5 transition-colors hover:text-white lg:flex"
          >
            <UserRound className="size-3.5" aria-hidden="true" />
            Profile
          </Link>
          <Link
            href="#login"
            className="hidden transition-colors hover:text-white lg:block"
          >
            Login
          </Link>
          <Link
            href="#signup"
            className="font-semibold text-white transition-colors hover:text-brand"
          >
            Sign Up
          </Link>

          <details className="group relative lg:hidden">
            <summary
              aria-label="Open menu"
              className="flex size-8 cursor-pointer list-none items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:bg-white/10 [&::-webkit-details-marker]:hidden"
            >
              <Menu className="size-4" aria-hidden="true" />
            </summary>
            <div className="absolute top-full right-0 z-50 mt-3 w-48 border border-white/10 bg-[#0b0d0c] p-2 shadow-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
