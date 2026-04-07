import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about UNIIKS LLC — our mission, values, and commitment to providing person-centered disability support services in St. Paul, Minnesota.",
};

const values = [
  {
    title: "Person-Centered",
    description: "Every individual is unique. We design our services around each person's strengths, preferences, and aspirations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Compassion",
    description: "We approach every interaction with empathy, kindness, and a genuine desire to make a positive difference.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    description: "We hold ourselves to the highest ethical standards in everything we do, building trust through transparency and accountability.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Empowerment",
    description: "We believe in building skills and confidence so that every individual can achieve their fullest potential.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Cultural Responsiveness",
    description: "We respect and honor the diverse backgrounds, traditions, and perspectives of the individuals and families we serve.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Collaboration",
    description: "We work closely with families, case managers, and community partners to deliver comprehensive, coordinated care.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About UNIIKS</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Dedicated to empowering individuals with disabilities through compassionate, person-centered support services in St. Paul, Minnesota.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-text)] mb-6">Our Story</h2>
              <div className="space-y-4 text-[var(--color-text-light)] leading-relaxed">
                <p>
                  Founded in 2022, UNIIKS LLC was born out of a deep commitment to improving the lives of individuals with disabilities in the Twin Cities community. We recognized a need for home and community-based services that truly put the individual first — services that are not just about meeting basic needs, but about unlocking potential and fostering genuine independence.
                </p>
                <p>
                  Located in the heart of St. Paul, we serve individuals and families throughout Ramsey County. Our team of dedicated professionals brings together diverse experiences and a shared passion for making a meaningful difference in people&apos;s lives.
                </p>
                <p>
                  As a licensed provider under the Minnesota Department of Human Services, we are committed to maintaining the highest standards of care while continuously evolving to meet the changing needs of our community.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">At a Glance</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-white/70 text-sm uppercase tracking-wider">Founded</p>
                  <p className="text-xl font-semibold">2022</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm uppercase tracking-wider">Location</p>
                  <p className="text-xl font-semibold">St. Paul, Minnesota</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm uppercase tracking-wider">Service Area</p>
                  <p className="text-xl font-semibold">Ramsey County</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm uppercase tracking-wider">License</p>
                  <p className="text-xl font-semibold">MN DHS #1112536</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm uppercase tracking-wider">Status</p>
                  <p className="text-xl font-semibold">Active — No Restrictions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Our Core Values</h2>
            <p className="text-[var(--color-text-light)] max-w-2xl mx-auto text-lg">
              These values guide everything we do at UNIIKS.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-8 border border-[var(--color-border)]">
                <div className="text-[var(--color-secondary)] mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">{value.title}</h3>
                <p className="text-[var(--color-text-light)] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">Our Team</h2>
            <p className="text-[var(--color-text-light)] max-w-2xl mx-auto text-lg">
              Our dedicated team of professionals is passionate about making a difference.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Kayode Odufuye", role: "Founder & Owner" },
              { name: "Team Member", role: "Direct Support Professional" },
              { name: "Team Member", role: "Direct Support Professional" },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-40 h-40 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 rounded-full mx-auto mb-5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[var(--color-text-light)]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text)]">{member.name}</h3>
                <p className="text-[var(--color-text-light)]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need support services or want to join our team, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </Link>
            <Link href="/careers" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
