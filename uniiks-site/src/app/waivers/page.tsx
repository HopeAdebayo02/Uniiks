import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Waivers & Eligibility",
  description:
    "Learn about the Medicaid waiver programs accepted by UNIIKS LLC including DD, CADI, BI, CAC, Elderly Waiver, and Alternative Care waiver programs in Minnesota.",
};

const waivers = [
  {
    abbreviation: "DD",
    name: "Developmental Disabilities Waiver",
    description:
      "The DD Waiver provides home and community-based services for individuals with developmental disabilities as an alternative to institutional care. It supports people in living as independently as possible in their communities.",
    eligibility: [
      "Diagnosis of a developmental disability (e.g., intellectual disability, cerebral palsy, epilepsy, autism)",
      "Disability manifested before age 22",
      "Meet the level of care provided in an ICF/DD facility",
      "Meet financial eligibility requirements for Medical Assistance",
    ],
    servicesAvailable: [
      "Individualized Home Supports with Family Training",
      "Respite Care",
      "Adult Companion Services",
      "Employment Services",
      "Community Living Support",
    ],
  },
  {
    abbreviation: "CADI",
    name: "Community Access for Disability Inclusion Waiver",
    description:
      "The CADI Waiver serves people with disabilities who would otherwise require care in a nursing facility. It provides a wide range of services to help individuals live in their homes and communities.",
    eligibility: [
      "Have a disability or chronic illness",
      "Meet the level of care provided in a nursing facility",
      "Be 18 years of age or older (or under 18 with approval)",
      "Meet financial eligibility requirements for Medical Assistance",
    ],
    servicesAvailable: [
      "Individualized Home Supports",
      "Homemaker Services",
      "Adult Companion Services",
      "Respite Care",
      "Employment Services",
    ],
  },
  {
    abbreviation: "BI",
    name: "Brain Injury Waiver",
    description:
      "The BI Waiver provides services for individuals with brain injuries who need support beyond what is available through standard Medical Assistance. It helps people recover, adapt, and maintain independence after a brain injury.",
    eligibility: [
      "Diagnosed with a brain injury",
      "Meet the level of care provided in a nursing facility or neurobehavioral hospital",
      "Meet financial eligibility requirements for Medical Assistance",
      "Have a comprehensive service plan",
    ],
    servicesAvailable: [
      "Individualized Home Supports",
      "Homemaker Services",
      "Respite Care",
      "Adult Companion Services",
      "Employment Services",
    ],
  },
  {
    abbreviation: "CAC",
    name: "Community Alternative Care Waiver",
    description:
      "The CAC Waiver serves individuals who are medically fragile or technology-dependent and would otherwise need hospital-level care. It provides comprehensive community-based services as an alternative to hospitalization.",
    eligibility: [
      "Be medically fragile or technology-dependent",
      "Meet the level of care provided in a hospital",
      "Meet financial eligibility requirements for Medical Assistance",
      "Require ongoing medical supervision",
    ],
    servicesAvailable: [
      "Individualized Home Supports",
      "Homemaker Services",
      "Respite Care",
      "Adult Companion Services",
    ],
  },
  {
    abbreviation: "EW",
    name: "Elderly Waiver",
    description:
      "The Elderly Waiver provides home and community-based services for older adults as an alternative to nursing facility care. It helps seniors maintain their independence and continue living in their own homes.",
    eligibility: [
      "Be 65 years of age or older",
      "Meet the level of care provided in a nursing facility",
      "Meet financial eligibility requirements for Medical Assistance",
      "Reside in Minnesota",
    ],
    servicesAvailable: [
      "Homemaker Services",
      "Adult Companion Services",
      "Respite Care",
      "Community Living Support",
    ],
  },
  {
    abbreviation: "AC",
    name: "Alternative Care Waiver",
    description:
      "The Alternative Care program provides services similar to the Elderly Waiver for older adults who do not meet the financial requirements for Medical Assistance but still need home and community-based support.",
    eligibility: [
      "Be 65 years of age or older",
      "Meet the level of care provided in a nursing facility",
      "Have income too high for Medical Assistance but not sufficient to privately pay for services",
      "Reside in Minnesota",
    ],
    servicesAvailable: [
      "Homemaker Services",
      "Adult Companion Services",
      "Respite Care",
    ],
  },
];

export default function WaiversPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Waivers & Eligibility</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            We are an enrolled provider for multiple Minnesota Medicaid waiver programs. Learn about each program and find out if you qualify.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-[var(--color-bg-alt)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl p-8 border border-[var(--color-border)]">
            <h2 className="text-xl font-bold text-[var(--color-text)] mb-3">What Are Medicaid Waivers?</h2>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              Medicaid waivers are programs that allow states to provide home and community-based services as an alternative to institutional care (such as nursing facilities or hospitals). These waivers &ldquo;waive&rdquo; certain Medicaid requirements so that individuals can receive services in their homes and communities instead. Each waiver program has specific eligibility criteria and covers different types of services.
            </p>
          </div>
        </div>
      </section>

      {/* Waiver Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          {waivers.map((waiver) => (
            <div key={waiver.abbreviation} id={waiver.abbreviation.toLowerCase()} className="bg-white border border-[var(--color-border)] rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white p-6 flex items-center gap-4">
                <span className="bg-white/20 text-white text-xl font-bold px-4 py-2 rounded-lg">
                  {waiver.abbreviation}
                </span>
                <h2 className="text-xl md:text-2xl font-bold">{waiver.name}</h2>
              </div>
              <div className="p-8">
                <p className="text-[var(--color-text-light)] leading-relaxed mb-8">{waiver.description}</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-[var(--color-text)] mb-4 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-secondary)]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Eligibility Requirements
                    </h3>
                    <ul className="space-y-2">
                      {waiver.eligibility.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-[var(--color-text-light)] text-sm">
                          <span className="text-[var(--color-secondary)] mt-1.5 shrink-0">&bull;</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-text)] mb-4 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-secondary)]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      Services We Provide Under This Waiver
                    </h3>
                    <ul className="space-y-2">
                      {waiver.servicesAvailable.map((service) => (
                        <li key={service} className="flex items-start gap-2 text-[var(--color-text-light)] text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--color-secondary)] shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl p-8 md:p-12 border border-[var(--color-border)] text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
              Need Help Determining Your Eligibility?
            </h2>
            <p className="text-[var(--color-text-light)] max-w-2xl mx-auto mb-8 text-lg">
              Navigating waiver programs can be complex. Our team is here to help you understand your options and guide you through the process. Contact your county case manager or reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[var(--color-secondary)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-primary-light)] transition-colors">
                Contact Us for Help
              </Link>
              <Link href="/referrals" className="border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-secondary)]/5 transition-colors">
                Submit a Referral
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
