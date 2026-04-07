import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore UNIIKS LLC's comprehensive home and community-based services including individualized home supports, respite care, companion services, homemaker services, and employment support in St. Paul, MN.",
};

const services = [
  {
    id: "ihs",
    title: "Individualized Home Supports with Family Training",
    description:
      "Our flagship service provides personalized in-home support that helps individuals with disabilities develop and maintain the skills needed for independent living. We work closely with families, providing training and guidance to ensure a supportive home environment.",
    features: [
      "Daily living skills development",
      "Health and safety support in the home",
      "Family training and education",
      "Behavioral support and guidance",
      "Household management assistance",
      "Adaptive skills training",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: "companion",
    title: "Adult Companion Services",
    description:
      "Our companion services provide meaningful social engagement and supervision for individuals who may otherwise experience isolation. Our trained companions offer friendship, support with community activities, and assistance with daily routines.",
    features: [
      "Social engagement and companionship",
      "Community activity participation",
      "Supervision and safety monitoring",
      "Transportation assistance",
      "Recreational activities",
      "Emotional support",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: "respite",
    title: "Respite Care",
    description:
      "We understand the demands of caregiving. Our respite care services provide temporary, reliable relief for primary caregivers while ensuring your loved one receives attentive, high-quality care in a comfortable environment.",
    features: [
      "Temporary caregiver relief",
      "Flexible scheduling options",
      "In-home respite support",
      "Trained and vetted staff",
      "Continuity of care plans",
      "Emergency respite available",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: "homemaker",
    title: "Homemaker Services",
    description:
      "Our homemaker services help individuals maintain a clean, safe, and comfortable living environment. We assist with essential household tasks that may be difficult for individuals to manage independently.",
    features: [
      "Meal planning and preparation",
      "Light housekeeping and laundry",
      "Grocery shopping assistance",
      "Home safety maintenance",
      "Organization and decluttering",
      "Routine household management",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "icls",
    title: "Individual Community Living Support (ICLS)",
    description:
      "Our ICLS program supports individuals in developing the skills and connections needed to participate fully in their communities. We focus on building independence, social skills, and community integration.",
    features: [
      "Community participation support",
      "Social skills development",
      "Independent living skills",
      "Resource navigation",
      "Advocacy and self-advocacy training",
      "Community resource connections",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: "employment",
    title: "Employment Services",
    description:
      "We help individuals explore career interests, develop job skills, and find and maintain meaningful employment. Our employment services cover the full spectrum from exploration to ongoing workplace support.",
    features: [
      "Career exploration and assessment",
      "Job search and application assistance",
      "Resume and interview preparation",
      "On-the-job training support",
      "Workplace accommodations guidance",
      "Ongoing employment coaching",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: "emergency",
    title: "24-Hour Emergency Assistance",
    description:
      "Because emergencies don't keep business hours, UNIIKS provides round-the-clock emergency assistance to ensure the safety and well-being of the individuals we serve. Our team is always just a phone call away.",
    features: [
      "24/7 on-call support",
      "Crisis intervention",
      "Emergency response coordination",
      "Safety planning",
      "After-hours support line",
      "Rapid response protocols",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Comprehensive home and community-based services designed to support independence, build skills, and enhance quality of life.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid md:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="text-[var(--color-secondary)] mb-4">{service.icon}</div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
                  {service.title}
                </h2>
                <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[var(--color-secondary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
                >
                  Inquire About This Service
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              <div className={`bg-[var(--color-bg-alt)] rounded-xl p-8 border border-[var(--color-border)] ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="font-semibold text-[var(--color-text)] mb-4">What&apos;s Included:</h3>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-secondary)] shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-[var(--color-text-light)]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Service Is Right for You?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation. We&apos;ll help you understand your options and find the best support plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Consultation
            </Link>
            <a href="tel:8479036172" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Call (847) 903-6172
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
