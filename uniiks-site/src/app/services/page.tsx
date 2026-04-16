import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ServicesTabs from "@/components/ServicesTabs";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore UNIIKS services — 144G Assisted Living and 245D home & community-based services including individualized home supports, respite care, companion services, homemaker services, and employment support in Brooklyn Park, MN.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative bg-[var(--color-cream)] overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-0 min-h-[520px] lg:min-h-[580px]">
          {/* Left copy panel */}
          <div className="lg:col-span-5 px-6 lg:pl-8 lg:pr-12 py-16 lg:py-20 flex flex-col justify-center relative z-10">
            <AnimatedSection>
              <p className="eyebrow mb-7">What We Offer</p>
              <h1 className="display-serif text-4xl md:text-5xl lg:text-[58px] text-[var(--color-primary)] mb-6">
                Services designed <em className="not-italic text-[var(--color-terracotta)]">around each life.</em>
              </h1>
              <div className="rule mb-7" />
              <p className="text-lg text-[var(--color-ink-muted)] leading-relaxed mb-8 max-w-lg">
                Our 144G Assisted Living pairs with comprehensive 245D home and community-based services — built to support independence, build skills, and bring real quality of life.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 border-t border-[var(--color-rule)] text-[13px] text-[var(--color-ink-muted)]">
                <span className="font-medium text-[var(--color-primary)]">8 Programs</span>
                <span className="text-[var(--color-rule)]">·</span>
                <span>6 Medicaid Waivers</span>
                <span className="text-[var(--color-rule)]">·</span>
                <span>24/7 Support</span>
              </div>
            </AnimatedSection>
          </div>

          {/* Right photo */}
          <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-full">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 ken-burns">
                <Image
                  src="/team-interaction.jpg"
                  alt="A caregiver in warm conversation with two residents"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
              </div>
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-cream)] to-transparent pointer-events-none hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES TABS — interactive ═══ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid lg:grid-cols-12 gap-8 items-end mb-14 lg:mb-16">
              <div className="lg:col-span-7">
                <p className="eyebrow mb-5">Our Programs</p>
                <h2 className="display-serif text-3xl md:text-[42px] text-[var(--color-primary)] leading-[1.05]">
                  Eight programs.<br />One person-centered approach.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:pb-2">
                <p className="text-[var(--color-ink-muted)] leading-relaxed">
                  Select a service to explore what&apos;s included. Each program is tailored to the individual&apos;s preferences, routines, and goals.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <ServicesTabs />
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/support-home.jpg"
            alt="A support worker with a client in a home setting"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[var(--color-primary-dark)]/75" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 py-24 lg:py-28 text-center text-white">
          <AnimatedSection>
            <p className="eyebrow eyebrow-center mb-7" style={{ color: "#E4A38A" }}>
              Not Sure Which Service Fits
            </p>
            <h2 className="display-serif text-4xl md:text-5xl mb-7">
              Let&apos;s figure it out together.
            </h2>
            <div className="w-16 h-px bg-[var(--color-terracotta)] mx-auto mb-8" />
            <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
              Schedule a free consultation — we&apos;ll listen first, then help you understand your options and find the right support plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-[var(--color-terracotta)] hover:text-white transition-colors"
              >
                Schedule a Consultation
              </Link>
              <a
                href="tel:7632882496"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-white/10 transition-colors"
              >
                Call (763) 288-2496
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
