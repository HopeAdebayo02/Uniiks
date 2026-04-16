"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/waivers", label: "Waivers" },
  { href: "/referrals", label: "Referrals" },
  { href: "/careers", label: "Careers" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Slim utility bar */}
      <div className="bg-[var(--color-primary-dark)] text-white/80 text-[12px] tracking-wide">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-9">
          <div className="flex items-center gap-5">
            <a href="tel:7632882496" className="hover:text-[var(--color-terracotta)] transition-colors flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[var(--color-terracotta)]" />
              (763) 288-2496
            </a>
            <span className="hidden sm:inline text-white/20">·</span>
            <a href="mailto:admin@uniikscare.com" className="hover:text-[var(--color-terracotta)] hidden sm:inline transition-colors">
              admin@uniikscare.com
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4 text-white/60">
            <span>MN DHS Licensed · #1112536</span>
            <span className="hidden lg:inline text-white/20">·</span>
            <span className="hidden lg:inline">24/7 Emergency Line</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-[0_1px_20px_-8px_rgba(26,58,82,0.25)]" : "border-b border-[var(--color-rule)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.jpg"
              alt="UNIIKS"
              width={200}
              height={64}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[13px] tracking-wide uppercase transition-colors ${
                  pathname === link.href
                    ? "text-[var(--color-terracotta)] font-semibold"
                    : "text-[var(--color-ink)] hover:text-[var(--color-terracotta)] font-medium"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-[var(--color-terracotta)]" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-5 inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-5 py-3 text-[12px] tracking-[0.18em] uppercase font-semibold hover:bg-[var(--color-terracotta)] transition-colors"
            >
              Schedule a Tour
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href="tel:7632882496"
              className="p-2 text-[var(--color-primary)] hover:bg-[var(--color-cream)] transition-colors"
              aria-label="Call us"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>
            <button
              className="p-2 hover:bg-[var(--color-cream)] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`xl:hidden mobile-menu-enter ${mobileOpen ? "open" : ""}`} aria-label="Mobile navigation">
          <nav className="bg-white border-t border-[var(--color-rule)] px-6 pb-6 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-3 text-sm tracking-wide uppercase transition-colors ${
                  pathname === link.href
                    ? "text-[var(--color-terracotta)] font-semibold"
                    : "text-[var(--color-ink)] hover:text-[var(--color-terracotta)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-4 bg-[var(--color-primary)] text-white text-center px-5 py-3.5 text-[12px] tracking-[0.18em] uppercase font-semibold hover:bg-[var(--color-terracotta)] transition-colors"
            >
              Schedule a Tour
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
