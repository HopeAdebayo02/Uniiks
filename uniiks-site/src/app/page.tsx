import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const services = [
  {
    title: "Individualized Home Supports",
    description:
      "Personalized in-home support with family training to help individuals build independence and daily living skills.",
    href: "/services#ihs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Adult Companion Services",
    description:
      "Meaningful companionship and social engagement to reduce isolation and enhance quality of life.",
    href: "/services#companion",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Respite Care",
    description:
      "Temporary relief for primary caregivers, ensuring your loved one receives attentive, quality care.",
    href: "/services#respite",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Employment Services",
    description:
      "Employment exploration, development, and ongoing support to help individuals find and maintain meaningful work.",
    href: "/services#employment",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Homemaker Services",
    description:
      "Assistance with household tasks including cooking, cleaning, and home maintenance for a safe living environment.",
    href: "/services#homemaker",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Community Living Support",
    description:
      "Helping individuals participate in community activities and develop the skills needed for independent living.",
    href: "/services#icls",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "Contact Us",
    description: "Reach out by phone, email, or through our referral form to get started.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C8.716 21 3 15.284 3 8V5z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Assessment",
    description: "We meet with you to understand your unique needs, strengths, and goals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Personalized Plan",
    description: "Together, we develop a customized support plan tailored to your life.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "Our dedicated team provides consistent, quality care and adjusts as needed.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const waivers = [
  { abbr: "DD", name: "Developmental Disabilities" },
  { abbr: "CADI", name: "Community Access for Disability Inclusion" },
  { abbr: "BI", name: "Brain Injury" },
  { abbr: "CAC", name: "Community Alternative Care" },
  { abbr: "EW", name: "Elderly Waiver" },
  { abbr: "AC", name: "Alternative Care" },
];

const testimonials = [
  {
    quote:
      "UNIIKS has been a lifeline for our family. Their staff truly cares about my son's progress and independence. Every day I see him growing more confident.",
    name: "Sarah M.",
    relation: "Parent of Client",
  },
  {
    quote:
      "The individualized approach makes all the difference. They listen to our needs and adapt their support accordingly. It's truly person-centered care.",
    name: "James K.",
    relation: "Sibling of Client",
  },
  {
    quote:
      "Professional, compassionate, and reliable. We couldn't ask for a better support team. They go above and beyond every single day.",
    name: "Maria L.",
    relation: "Guardian of Client",
  },
  {
    quote:
      "As a case manager, I've referred several individuals to UNIIKS and the feedback has been consistently positive. Their communication is excellent.",
    name: "David R.",
    relation: "County Case Manager",
  },
  {
    quote:
      "The employment services helped my daughter find meaningful work for the first time. The ongoing support has been invaluable to her confidence.",
    name: "Patricia W.",
    relation: "Parent of Client",
  },
];

const stats = [
  { value: 7, suffix: "+", label: "Service Programs" },
  { value: 6, label: "Waivers Accepted" },
  { value: 24, suffix: "/7", label: "Emergency Support" },
  { value: 100, suffix: "%", label: "Person-Centered" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-caregiver.jpg"
            alt="Caregiver assisting an elderly person"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/95 via-[var(--color-primary)]/85 to-[var(--color-secondary)]/70" />
        </div>
        <div className="absolute inset-0 hero-pattern" />

        <div className="relative max-w-7xl mx-auto px-4 py-28 md:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm mb-6">
              <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-pulse" />
              Home & Community-Based Services in St. Paul, MN
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              We Care Like Family
            </h1>
            <p className="text-xl md:text-2xl text-[var(--color-accent)] font-semibold mb-6">
              Empowering Independence, One Person at a Time
            </p>

            <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl leading-relaxed">
              UNIIKS LLC provides compassionate, individualized support services
              that help people with disabilities live fulfilling lives in their
              homes and communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold text-center hover:bg-gray-100 transition-all hover:shadow-lg hover:shadow-white/20"
              >
                Request Services
              </Link>
              <Link
                href="/referrals"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-center hover:bg-white/10 hover:border-white/50 transition-all backdrop-blur-sm"
              >
                Make a Referral
              </Link>
            </div>

            {/* Quick contact */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10 pt-8 border-t border-white/10">
              <a
                href="tel:8479036172"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (847) 903-6172
              </a>
              <span className="hidden sm:inline text-white/20">|</span>
              <a
                href="mailto:admin@uniikscare.com"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                admin@uniikscare.com
              </a>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="flex items-center gap-2 text-white/80 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                24/7 Emergency Line
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-[var(--color-border)] -mt-1">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* Who We Serve - Segmented Entry Points */}
      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider mb-3">
                How Can We Help?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
                We&apos;re Here for You
              </h2>
              <div className="section-divider mx-auto mb-4" />
              <p className="text-[var(--color-text-light)] max-w-2xl mx-auto text-lg">
                Whether you&apos;re seeking services for yourself, a loved one, or making a professional referral, we&apos;re ready to help.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection delay={100}>
              <Link href="/services" className="block bg-white rounded-2xl p-8 border border-[var(--color-border)] card-hover group text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">For Individuals</h3>
                <p className="text-[var(--color-text-light)] text-sm mb-4">
                  Discover services designed to support your independence and help you achieve your personal goals.
                </p>
                <span className="text-[var(--color-secondary)] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore Services
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <Link href="/contact" className="block bg-white rounded-2xl p-8 border border-[var(--color-border)] card-hover group text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">For Families</h3>
                <p className="text-[var(--color-text-light)] text-sm mb-4">
                  Find the right support for your loved one. We work with families to create personalized care plans.
                </p>
                <span className="text-[var(--color-secondary)] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Get in Touch
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <Link href="/referrals" className="block bg-white rounded-2xl p-8 border border-[var(--color-border)] card-hover group text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-warm)] to-[var(--color-warm-light)] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">For Case Managers</h3>
                <p className="text-[var(--color-text-light)] text-sm mb-4">
                  Submit referrals quickly and securely. We respond within 1-2 business days.
                </p>
                <span className="text-[var(--color-secondary)] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Make a Referral
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider mb-3">
                What We Offer
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
                Our Services
              </h2>
              <div className="section-divider mx-auto mb-4" />
              <p className="text-[var(--color-text-light)] max-w-2xl mx-auto text-lg">
                We offer a comprehensive range of home and community-based services designed to support independence and improve quality of life.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={(i % 3) * 100 as 100 | 200 | 300}>
                <Link
                  href={service.href}
                  className="block bg-white border border-[var(--color-border)] rounded-xl p-7 card-hover group h-full"
                >
                  <div className="w-12 h-12 bg-[var(--color-secondary)]/10 rounded-xl flex items-center justify-center mb-4 text-[var(--color-secondary)] group-hover:bg-[var(--color-secondary)] group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-text-light)] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[var(--color-bg-alt)] border border-[var(--color-border)] px-6 py-3 rounded-xl text-[var(--color-primary)] font-semibold hover:bg-[var(--color-secondary)] hover:text-white hover:border-[var(--color-secondary)] transition-all"
            >
              View All Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-left">
              <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider mb-3">
                Why UNIIKS
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">
                Why Families Choose Us
              </h2>
              <div className="section-divider mb-6" />
              <p className="text-[var(--color-text-light)] text-lg mb-8 leading-relaxed">
                At UNIIKS, we believe every individual deserves the opportunity to thrive. Our person-centered approach ensures that each support plan reflects the unique strengths, preferences, and goals of the people we serve.
              </p>
              <ul className="space-y-4">
                {[
                  "Person-centered care tailored to individual needs",
                  "Trained and compassionate support staff",
                  "Family involvement and training programs",
                  "24/7 emergency assistance available",
                  "Accepted by major Medicaid waiver programs",
                  "Culturally responsive services",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[var(--color-success)]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-[var(--color-success)]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[var(--color-text)]">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <div className="space-y-6">
                {/* Photo */}
                <div className="relative rounded-2xl overflow-hidden h-56">
                  <Image
                    src="/care-hands.jpg"
                    alt="Two hands gently holding each other in comfort"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/80 to-transparent flex items-end p-6">
                    <p className="text-white font-bold text-lg italic">&ldquo;We Care Like Family&rdquo;</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-accent)]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    Our Mission
                  </h3>
                  <p className="text-white/85 leading-relaxed">
                    To empower individuals with disabilities by providing high-quality, individualized home and community-based services that promote independence, dignity, and an enhanced quality of life.
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-[var(--color-text)] flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-warm)]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    Our Vision
                  </h3>
                  <p className="text-[var(--color-text-light)] leading-relaxed">
                    A community where every person, regardless of ability, has the support and resources they need to live a life of purpose and fulfillment.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider mb-3">
                Getting Started
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
                How It Works
              </h2>
              <div className="section-divider mx-auto mb-4" />
              <p className="text-[var(--color-text-light)] max-w-2xl mx-auto text-lg">
                Getting started with UNIIKS is simple. We guide you through every step of the process.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={(i % 4) * 100 as 100 | 200 | 300 | 400}>
                <div className="relative text-center group">
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-[var(--color-border)]" />
                  )}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[var(--color-secondary)] group-hover:text-white transition-all shadow-sm">
                      {step.icon}
                    </div>
                    <p className="text-xs font-bold text-[var(--color-secondary)] mb-1">{step.number}</p>
                    <h3 className="text-lg font-semibold mb-2 text-[var(--color-text)]">
                      {step.title}
                    </h3>
                    <p className="text-[var(--color-text-light)] text-sm">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Waivers Accepted */}
      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider mb-3">
                Insurance & Coverage
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
                Medicaid Waivers We Accept
              </h2>
              <div className="section-divider mx-auto mb-4" />
              <p className="text-[var(--color-text-light)] max-w-2xl mx-auto text-lg">
                We are an enrolled provider for multiple Minnesota Medicaid waiver programs.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {waivers.map((waiver, i) => (
              <AnimatedSection key={waiver.abbr} animation="scale" delay={(i % 3) * 100 as 100 | 200 | 300}>
                <Link
                  href={`/waivers#${waiver.abbr.toLowerCase()}`}
                  className="block bg-white border border-[var(--color-border)] rounded-xl p-5 text-center card-hover group"
                >
                  <p className="text-2xl font-bold text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors mb-1">
                    {waiver.abbr}
                  </p>
                  <p className="text-xs text-[var(--color-text-light)] leading-tight">
                    {waiver.name}
                  </p>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-8">
            <Link
              href="/waivers"
              className="text-[var(--color-secondary)] font-semibold hover:text-[var(--color-primary)] transition-colors inline-flex items-center gap-1"
            >
              Learn more about waiver eligibility
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider mb-3">
                Testimonials
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
                What Families Are Saying
              </h2>
              <div className="section-divider mx-auto" />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <TestimonialCarousel testimonials={testimonials} />
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about-community.jpg"
            alt="Elderly people and caregiver in a warm community setting"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/90 via-[var(--color-primary)]/85 to-[var(--color-secondary)]/80" />
        </div>
        <div className="absolute inset-0 hero-pattern" />

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/85 mb-10 max-w-2xl mx-auto">
              Contact us today to learn how UNIIKS can support you or your loved one on the path to greater independence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:shadow-lg"
              >
                Contact Us Today
              </Link>
              <a
                href="tel:8479036172"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all"
              >
                Call (847) 903-6172
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
