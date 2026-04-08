"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[var(--color-primary-dark)] text-white text-sm py-2.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <a href="tel:8479036172" className="hover:text-[var(--color-accent)] flex items-center gap-1.5 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (847) 903-6172
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <a href="mailto:admin@uniikscare.com" className="hover:text-[var(--color-accent)] hidden sm:flex items-center gap-1.5 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              admin@uniikscare.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-white/70">MN DHS Licensed Provider</span>
            <span className="hidden lg:inline text-white/30">|</span>
            <span className="hidden lg:inline text-white/70">24/7 Emergency Line Available</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm border-b border-[var(--color-border)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.jpg"
              alt="UNIIKS LLC Logo"
              width={160}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[var(--color-secondary)]"
                    : "text-[var(--color-text)] hover:text-[var(--color-secondary)]"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[var(--color-secondary)] rounded-full" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 bg-[var(--color-secondary)] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[var(--color-primary-light)] transition-colors pulse-glow"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile: Phone + Hamburger */}
          <div className="flex items-center gap-3 xl:hidden">
            <a
              href="tel:8479036172"
              className="p-2 rounded-lg text-[var(--color-secondary)] hover:bg-[var(--color-bg-alt)] transition-colors"
              aria-label="Call us"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`xl:hidden mobile-menu-enter ${mobileOpen ? "open" : ""}`}
          aria-label="Mobile navigation"
        >
          <nav className="bg-white border-t border-[var(--color-border)] px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[var(--color-secondary)]/5 text-[var(--color-secondary)] border-l-3 border-[var(--color-secondary)]"
                    : "text-[var(--color-text)] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-3 bg-[var(--color-secondary)] text-white text-center px-5 py-3 rounded-lg text-sm font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
            >
              Get Started
            </Link>
            <div className="flex items-center justify-center gap-4 mt-3 pt-3 border-t border-[var(--color-border)]">
              <a href="tel:8479036172" className="text-sm text-[var(--color-primary)] font-semibold">
                Call: (847) 903-6172
              </a>
              <span className="text-[var(--color-border)]">|</span>
              <a href="mailto:admin@uniikscare.com" className="text-sm text-[var(--color-primary)] font-semibold">
                Email Us
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
