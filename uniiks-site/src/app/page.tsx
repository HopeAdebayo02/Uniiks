import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import StatsCounter from "@/components/StatsCounter";

const audiences = [
  {
    n: "01",
    label: "For Individuals",
    title: "A life of purpose, with the right support.",
    body: "Services designed to honor your independence, goals, and routines — in a residence that truly feels like home.",
    href: "/services",
    linkLabel: "Explore services",
  },
  {
    n: "02",
    label: "For Families",
    title: "Peace of mind, built around your loved one.",
    body: "Transparent communication, individualized care plans, and a staff who shows up like family does — every single day.",
    href: "/contact",
    linkLabel: "Talk with our team",
  },
  {
    n: "03",
    label: "For Case Managers",
    title: "A referral partner who responds promptly.",
    body: "Submit securely, hear back within 1–2 business days, and count on a provider enrolled across Minnesota's major waivers.",
    href: "/referrals",
    linkLabel: "Make a referral",
  },
];

const services = [
  { n: "01", title: "24-Hour Care & Supervision", body: "Trained staff on-site around the clock for safety oversight, emergency response, and steady reassurance." },
  { n: "02", title: "Medication Management", body: "Coordinated administration, documentation, and monitoring — with direct handoff to residents' providers." },
  { n: "03", title: "Personal Care & Daily Living", body: "Dignified assistance with bathing, dressing, grooming, and mobility — tailored to each resident's rhythm." },
  { n: "04", title: "Nutritious Meals & Dining", body: "Three home-cooked meals plus snacks every day, planned around dietary needs and personal preferences." },
  { n: "05", title: "Housekeeping & Laundry", body: "A clean, safe, and comfortable residence — with routine housekeeping, linens, and laundry handled." },
  { n: "06", title: "Community & Companionship", body: "Activities, conversation, and shared moments that make a house a home for every resident." },
];

const waivers = [
  { abbr: "DD", name: "Developmental Disabilities" },
  { abbr: "CADI", name: "Community Access for Disability Inclusion" },
  { abbr: "BI", name: "Brain Injury" },
  { abbr: "CAC", name: "Community Alternative Care" },
  { abbr: "EW", name: "Elderly Waiver" },
  { abbr: "AC", name: "Alternative Care" },
];

const stats = [
  { value: 7, suffix: "+", label: "Service Programs" },
  { value: 6, label: "Waivers Accepted" },
  { value: 24, suffix: "/7", label: "Emergency Support" },
  { value: 100, suffix: "%", label: "Person-Centered" },
];

const convictions = [
  "Person-centered care tailored to individual needs",
  "Trained and compassionate support staff",
  "Family involvement and training programs",
  "24/7 emergency assistance available",
  "Accepted by major Medicaid waiver programs",
  "Culturally responsive services",
];

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative bg-[var(--color-cream)] overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-0 min-h-[640px] lg:min-h-[720px]">
          {/* Left — cream editorial panel */}
          <div className="lg:col-span-5 px-6 lg:pl-8 lg:pr-12 py-16 lg:py-24 flex flex-col justify-center relative z-10">
            <AnimatedSection>
              <p className="eyebrow mb-8">Senior Care · Brooklyn Park, MN</p>
              <h1 className="display-serif text-5xl md:text-6xl lg:text-[68px] text-[var(--color-primary)] mb-6">
                We care <em className="not-italic text-[var(--color-terracotta)]">like family.</em>
              </h1>
              <div className="rule mb-8" />
              <p className="text-lg text-[var(--color-ink-muted)] leading-relaxed mb-10 max-w-lg">
                UNIIKS provides compassionate, person-centered <span className="text-[var(--color-ink)] font-medium">144G Assisted Living</span> in Brooklyn Park, Minnesota — alongside 245D home and community-based services that help people live with independence and dignity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-[var(--color-terracotta)] transition-colors"
                >
                  Schedule a Tour
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  href="/referrals"
                  className="link-quiet text-[13px] tracking-[0.15em] uppercase"
                >
                  Make a referral
                </Link>
              </div>

              {/* Micro contact row */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-8 border-t border-[var(--color-rule)] text-[13px] text-[var(--color-ink-muted)]">
                <a href="tel:7632882496" className="hover:text-[var(--color-terracotta)] transition-colors">
                  (763) 288-2496
                </a>
                <span className="text-[var(--color-rule)]">·</span>
                <span>24/7 Emergency Line</span>
                <span className="text-[var(--color-rule)]">·</span>
                <span>MN DHS #1112536</span>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — photo */}
          <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-full">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 ken-burns">
                <Image
                  src="/hero-caregiver.jpg"
                  alt="A caregiver offering a steady, reassuring presence"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
              </div>
              {/* Soft cream wash on left edge blending into panel */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-cream)] to-transparent pointer-events-none hidden lg:block" />
              <div className="absolute bottom-6 right-6 max-w-xs bg-[var(--color-bone)]/95 backdrop-blur-sm px-6 py-5 border-l-2 border-[var(--color-terracotta)]">
                <p className="pullquote text-xl text-[var(--color-primary)] leading-snug">
                  &ldquo;Dignity, independence, and a home that truly feels like one.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS STRIP ═══ */}
      <section className="bg-white border-b border-[var(--color-rule)]">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* ═══ WHO WE SERVE — numbered editorial ═══ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-20">
              <div className="lg:col-span-7">
                <p className="eyebrow mb-6">How Can We Help</p>
                <h2 className="display-serif text-4xl md:text-5xl text-[var(--color-primary)]">
                  Whoever you are,<br />we&apos;re ready for you.
                </h2>
              </div>
              <div className="lg:col-span-5 lg:pb-3">
                <p className="text-[var(--color-ink-muted)] text-lg leading-relaxed">
                  Whether you&apos;re exploring options for yourself, for someone you love, or making a professional referral — UNIIKS meets you where you are.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            {audiences.map((a, i) => (
              <AnimatedSection key={a.n} delay={(i * 100) as 100 | 200 | 300}>
                <Link href={a.href} className="group block">
                  <p className="numeral text-6xl mb-6 transition-colors group-hover:text-[var(--color-primary)]">
                    {a.n}
                  </p>
                  <p className="eyebrow mb-4">{a.label}</p>
                  <h3 className="font-serif text-[26px] text-[var(--color-primary)] leading-tight mb-4" style={{ fontWeight: 400 }}>
                    {a.title}
                  </h3>
                  <p className="text-[var(--color-ink-muted)] leading-relaxed mb-6">
                    {a.body}
                  </p>
                  <span className="text-[12px] tracking-[0.2em] uppercase font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-terracotta)] inline-flex items-center gap-2 transition-colors">
                    {a.linkLabel}
                    <span className="w-6 h-px bg-current transition-all group-hover:w-10" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MISSION ROW — image left, copy right ═══ */}
      <section className="py-24 lg:py-32 bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <AnimatedSection animation="slide-left" className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/care-hands.jpg"
                alt="Two hands gently holding each other"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              {/* Corner caption */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <p className="pullquote text-2xl text-white">
                  &ldquo;We Care Like Family.&rdquo;
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right" className="lg:col-span-6">
            <p className="eyebrow mb-6">Our Mission</p>
            <h2 className="display-serif text-4xl md:text-5xl text-[var(--color-primary)] mb-8">
              Building a home where independence and dignity are daily practice.
            </h2>
            <p className="text-lg text-[var(--color-ink-muted)] leading-relaxed mb-6">
              At UNIIKS, we believe every individual deserves the opportunity to thrive. Our person-centered approach means every support plan reflects the unique strengths, preferences, and goals of the person in our care.
            </p>
            <p className="text-lg text-[var(--color-ink-muted)] leading-relaxed mb-10">
              We exist to empower individuals with disabilities and seniors through high-quality, individualized home and community-based services that promote independence, dignity, and a fuller quality of life.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-[var(--color-rule)]">
              <div>
                <p className="eyebrow mb-3">Vision</p>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  A community where every person, regardless of ability, has what they need to live a life of purpose.
                </p>
              </div>
              <div>
                <p className="eyebrow mb-3">Promise</p>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  Transparent communication, culturally responsive care, and a team that treats every resident like family.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ FEATURED 144G ═══ */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-16 lg:mb-20 max-w-3xl">
              <p className="eyebrow mb-6">What We Offer</p>
              <h2 className="display-serif text-4xl md:text-5xl text-[var(--color-primary)] mb-6">
                A residence designed for real life — supported by people who care.
              </h2>
              <p className="text-lg text-[var(--color-ink-muted)] leading-relaxed">
                Our 144G Assisted Living community pairs a home-like residence with around-the-clock support, dignified personal care, and every comfort residents need to thrive.
              </p>
            </div>
          </AnimatedSection>

          {/* Featured row */}
          <AnimatedSection>
            <div className="grid lg:grid-cols-12 gap-0 items-stretch mb-20 lg:mb-24">
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto lg:min-h-[460px] overflow-hidden">
                <Image
                  src="/happy-senior.jpg"
                  alt="A resident enjoying a peaceful moment in their home"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                />
              </div>
              <div className="lg:col-span-5 bg-[var(--color-primary)] text-white p-10 lg:p-14 flex flex-col justify-center">
                <p className="eyebrow mb-6" style={{ color: "#E4A38A" }}>Flagship Program</p>
                <h3 className="display-serif text-3xl md:text-4xl mb-5 text-white">
                  144G Assisted Living
                </h3>
                <p className="text-white/80 leading-relaxed mb-8">
                  A licensed, comfortable, home-like residence under MN Statute 144G — with personalized support plans built around each resident&apos;s life, not a script.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-semibold text-white hover:text-[var(--color-terracotta)] transition-colors"
                >
                  Explore the program
                  <span className="w-8 h-px bg-current" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Services list — editorial 2-col */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-2">
            {services.map((s, i) => (
              <AnimatedSection key={s.n} delay={((i % 3) * 100) as 100 | 200 | 300}>
                <div className="group flex gap-6 py-8 border-t border-[var(--color-rule)]">
                  <span className="numeral text-2xl shrink-0 w-10 pt-1">
                    {s.n}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-serif text-[22px] text-[var(--color-primary)] mb-2 transition-colors group-hover:text-[var(--color-terracotta)]" style={{ fontWeight: 500 }}>
                      {s.title}
                    </h4>
                    <p className="text-[var(--color-ink-muted)] leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="pt-12 border-t border-[var(--color-rule)] mt-2">
            <Link
              href="/services"
              className="link-quiet text-[13px] tracking-[0.2em] uppercase"
            >
              View full services
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ WHY UNIIKS — pullquote + convictions ═══ */}
      <section className="py-24 lg:py-32 bg-[var(--color-sand)] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 lg:gap-24">
          <AnimatedSection animation="slide-left" className="lg:col-span-6">
            <p className="eyebrow mb-6">Why UNIIKS</p>
            <h2 className="pullquote text-3xl md:text-[42px] text-[var(--color-primary)] leading-tight mb-10">
              &ldquo;Every person who walks through our doors deserves to be met as whole — with their story, their strengths, and their own way of living.&rdquo;
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-[var(--color-terracotta)]" />
              <div>
                <p className="text-[var(--color-ink)] font-medium">Kayode Odufuye</p>
                <p className="text-[13px] text-[var(--color-ink-muted)] tracking-wide">Founder, UNIIKS LLC</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right" className="lg:col-span-6">
            <p className="eyebrow mb-6">Our Convictions</p>
            <ul className="space-y-0 divide-y divide-[var(--color-rule)]">
              {convictions.map((item, i) => (
                <li key={item} className="flex items-start gap-5 py-5">
                  <span className="numeral text-lg w-10 shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[var(--color-ink)] text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ WAIVERS STRIP ═══ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <p className="eyebrow mb-4">Insurance & Coverage</p>
                <h2 className="display-serif text-3xl md:text-4xl text-[var(--color-primary)]">
                  Medicaid waivers we accept.
                </h2>
              </div>
              <Link href="/waivers" className="link-quiet text-[12px] tracking-[0.2em] uppercase shrink-0">
                Check your eligibility
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-t border-[var(--color-rule)]">
            {waivers.map((w, i) => (
              <AnimatedSection key={w.abbr} delay={((i % 3) * 100) as 100 | 200 | 300}>
                <Link
                  href={`/waivers#${w.abbr.toLowerCase()}`}
                  className="group block border-b border-r border-[var(--color-rule)] last:border-r-0 p-8 text-center hover:bg-[var(--color-cream)] transition-colors h-full"
                >
                  <p className="display-serif text-4xl text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-terracotta)] transition-colors">
                    {w.abbr}
                  </p>
                  <p className="text-[12px] tracking-wide text-[var(--color-ink-muted)] leading-snug">
                    {w.name}
                  </p>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA — full-bleed lifestyle ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about-community.jpg"
            alt="A warm community gathering"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[var(--color-primary-dark)]/70" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-28 lg:py-36 text-center text-white">
          <AnimatedSection>
            <p className="eyebrow eyebrow-center mb-8" style={{ color: "#E4A38A" }}>
              Begin the Conversation
            </p>
            <h2 className="display-serif text-4xl md:text-5xl lg:text-6xl mb-8">
              Ready to find a home that feels like family?
            </h2>
            <div className="w-16 h-px bg-[var(--color-terracotta)] mx-auto mb-10" />
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Call us, send a note, or schedule a tour. We&apos;ll listen first — then help you find the right path forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-[var(--color-terracotta)] hover:text-white transition-colors"
              >
                Schedule a Tour
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
