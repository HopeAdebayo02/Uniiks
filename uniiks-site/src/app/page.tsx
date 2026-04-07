import Link from "next/link";

const services = [
  {
    title: "Individualized Home Supports",
    description:
      "Personalized in-home support with family training to help individuals build independence and daily living skills.",
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const steps = [
  { number: "1", title: "Contact Us", description: "Reach out by phone, email, or through our referral form." },
  { number: "2", title: "Assessment", description: "We meet with you to understand your unique needs and goals." },
  { number: "3", title: "Personalized Plan", description: "Together, we develop a customized support plan tailored to you." },
  { number: "4", title: "Ongoing Support", description: "Our dedicated team provides consistent, quality care and adjusts as needed." },
];

const waivers = [
  "Developmental Disabilities (DD)",
  "Community Access for Disability Inclusion (CADI)",
  "Brain Injury (BI)",
  "Community Alternative Care (CAC)",
  "Elderly Waiver (EW)",
  "Alternative Care (AC)",
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-secondary)] text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold mb-4 text-sm uppercase tracking-wider">
              Home & Community-Based Services in St. Paul, MN
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empowering Independence,{" "}
              <span className="text-[var(--color-accent)]">One Person at a Time</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
              UNIIKS LLC provides compassionate, individualized support services that help people with disabilities live fulfilling lives in their homes and communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Request Services
              </Link>
              <Link
                href="/referrals"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-white/10 transition-colors"
              >
                Make a Referral
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[var(--color-bg-alt)] border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-[var(--color-primary)]">Since 2022</p>
              <p className="text-sm text-[var(--color-text-light)]">Established</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--color-primary)]">7+</p>
              <p className="text-sm text-[var(--color-text-light)]">Service Programs</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--color-primary)]">6</p>
              <p className="text-sm text-[var(--color-text-light)]">Waivers Accepted</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--color-primary)]">Licensed</p>
              <p className="text-sm text-[var(--color-text-light)]">MN DHS #1112536</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Our Services
            </h2>
            <p className="text-[var(--color-text-light)] max-w-2xl mx-auto text-lg">
              We offer a comprehensive range of home and community-based services designed to support independence and improve quality of life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-[var(--color-border)] rounded-xl p-8 hover:shadow-lg hover:border-[var(--color-accent)]/30 transition-all group"
              >
                <div className="text-[var(--color-secondary)] mb-4 group-hover:text-[var(--color-accent)] transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-text)]">
                  {service.title}
                </h3>
                <p className="text-[var(--color-text-light)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[var(--color-secondary)] font-semibold hover:text-[var(--color-primary)] transition-colors"
            >
              View All Services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">
                Why Families Choose UNIIKS
              </h2>
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-secondary)] shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[var(--color-text)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                To empower individuals with disabilities by providing high-quality, individualized home and community-based services that promote independence, dignity, and an enhanced quality of life.
              </p>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                A community where every person, regardless of ability, has the support and resources they need to live a life of purpose and fulfillment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              How It Works
            </h2>
            <p className="text-[var(--color-text-light)] max-w-2xl mx-auto text-lg">
              Getting started with UNIIKS is simple. We guide you through every step of the process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-[var(--color-secondary)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-5">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-text)]">
                  {step.title}
                </h3>
                <p className="text-[var(--color-text-light)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waivers Accepted */}
      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              Medicaid Waivers We Accept
            </h2>
            <p className="text-[var(--color-text-light)] max-w-2xl mx-auto text-lg">
              We are an enrolled provider for multiple Minnesota Medicaid waiver programs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {waivers.map((waiver) => (
              <div
                key={waiver}
                className="bg-white border border-[var(--color-border)] rounded-lg p-5 flex items-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-secondary)] shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-[var(--color-text)]">{waiver}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/waivers"
              className="text-[var(--color-secondary)] font-semibold hover:text-[var(--color-primary)] transition-colors"
            >
              Learn more about waiver eligibility &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
              What Families Are Saying
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "UNIIKS has been a lifeline for our family. Their staff truly cares about my son's progress and independence.",
                name: "Family Member",
                relation: "Parent of Client",
              },
              {
                quote: "The individualized approach makes all the difference. They listen to our needs and adapt their support accordingly.",
                name: "Family Member",
                relation: "Sibling of Client",
              },
              {
                quote: "Professional, compassionate, and reliable. We couldn't ask for a better support team.",
                name: "Family Member",
                relation: "Guardian of Client",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-[var(--color-bg-alt)] rounded-xl p-8 border border-[var(--color-border)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--color-accent)] mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <p className="text-[var(--color-text)] mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-[var(--color-text)]">{testimonial.name}</p>
                  <p className="text-sm text-[var(--color-text-light)]">{testimonial.relation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to learn how UNIIKS can support you or your loved one on the path to greater independence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
            <a
              href="tel:8479036172"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Call (847) 903-6172
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
