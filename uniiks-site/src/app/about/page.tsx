import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about UNIIKS — our mission, values, and commitment to providing 144G Assisted Living and 245D support services in Brooklyn Park, Minnesota.",
};

const values = [
  {
    title: "Person-Centered",
    description:
      "Every individual is unique. We design our services around each person's strengths, preferences, and aspirations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Compassion",
    description:
      "We approach every interaction with empathy, kindness, and a genuine desire to make a positive difference.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description:
      "We hold ourselves to the highest ethical standards, building trust through transparency and accountability.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Empowerment",
    description:
      "We believe in building skills and confidence so that every individual can achieve their fullest potential.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Cultural Responsiveness",
    description:
      "We respect and honor the diverse backgrounds, traditions, and perspectives of the individuals and families we serve.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Collaboration",
    description:
      "We work closely with families, case managers, and community partners to deliver comprehensive, coordinated care.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/team-interaction.jpg"
            alt="Caregivers interacting warmly with clients"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
        </div>
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              We Care Like Family
            </h1>
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              Since 2022, UNIIKS has been committed to providing compassionate 144G Assisted Living and 245D support services for individuals with disabilities and seniors in Brooklyn Park, Minnesota.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-left">
              <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
              <h2 className="text-3xl font-bold text-[var(--color-text)] mb-2">How It All Started</h2>
              <div className="section-divider mb-6" />
              <div className="space-y-4 text-[var(--color-text-light)] leading-relaxed">
                <p>
                  Founded in 2022, UNIIKS was born out of a deep commitment to improving the lives of individuals with disabilities and seniors in the Twin Cities community. We recognized a need for 144G Assisted Living and 245D services that truly put the individual first — services that are not just about meeting basic needs, but about unlocking potential and fostering genuine independence.
                </p>
                <p>
                  Based in Brooklyn Park, we serve individuals and families throughout Hennepin County and the greater Twin Cities area. Our team of dedicated professionals brings together diverse experiences and a shared passion for making a meaningful difference in people&apos;s lives.
                </p>
                <p>
                  As a licensed provider under the Minnesota Department of Human Services, we are committed to maintaining the highest standards of care while continuously evolving to meet the changing needs of our community.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <div className="relative rounded-2xl overflow-hidden h-52 mb-6 shadow-lg">
                <Image
                  src="/about-community.jpg"
                  alt="Elderly people and caregiver in a community room"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  At a Glance
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Founded", value: "2022" },
                    { label: "Location", value: "Brooklyn Park, MN" },
                    { label: "Service Area", value: "Hennepin County & Beyond" },
                    { label: "License", value: "MN DHS #1112536" },
                    { label: "Status", value: "Active" },
                    { label: "Founder", value: "Kayode Odufuye" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider mb-3">What Guides Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Our Core Values</h2>
              <div className="section-divider mx-auto mb-4" />
              <p className="text-[var(--color-text-light)] max-w-2xl mx-auto text-lg">
                These values guide everything we do at UNIIKS.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={(i % 3) * 100 as 100 | 200 | 300}>
                <div className="bg-white rounded-xl p-7 border border-[var(--color-border)] card-hover h-full">
                  <div className="w-12 h-12 bg-[var(--color-secondary)]/10 rounded-xl flex items-center justify-center mb-4 text-[var(--color-secondary)]">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[var(--color-text)]">{value.title}</h3>
                  <p className="text-[var(--color-text-light)] text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider mb-3">Leadership</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Our Team</h2>
              <div className="section-divider mx-auto mb-4" />
              <p className="text-[var(--color-text-light)] max-w-2xl mx-auto text-lg">
                Our dedicated team of professionals is passionate about making a difference.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm text-center">
                <div className="w-28 h-28 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full mx-auto mb-5 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">KO</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text)]">Kayode Odufuye</h3>
                <p className="text-[var(--color-secondary)] font-medium mb-4">Founder & Owner</p>
                <p className="text-[var(--color-text-light)] text-sm leading-relaxed">
                  With a deep passion for community service and disability advocacy, Kayode founded UNIIKS to create a company that truly puts individuals first, providing the highest quality of person-centered care.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mt-10">
            <p className="text-[var(--color-text-light)] mb-4">Interested in joining our growing team?</p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 bg-[var(--color-secondary)] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
            >
              View Open Positions
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/care-hands.jpg"
            alt="Caring hands"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-xl text-white/85 mb-10 max-w-2xl mx-auto">
              Whether you need support services or want to join our team, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:shadow-lg">
                Contact Us
              </Link>
              <Link href="/careers" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all">
                View Careers
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
