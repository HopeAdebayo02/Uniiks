import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about UNIIKS LLC's disability services, Medicaid waivers, referral process, and more.",
};

const generalFAQs = [
  {
    question: "What is UNIIKS LLC?",
    answer:
      "UNIIKS LLC is a licensed home and community-based services (HCBS) provider based in St. Paul, Minnesota. We provide person-centered support services for individuals with disabilities, helping them live independently and participate fully in their communities. We are licensed by the Minnesota Department of Human Services (License #1112536).",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve individuals in Ramsey County and the greater Twin Cities metropolitan area. If you're located outside this area, please contact us to discuss whether we can accommodate your needs.",
  },
  {
    question: "What types of disabilities do you serve?",
    answer:
      "We serve individuals with a wide range of disabilities including developmental disabilities, intellectual disabilities, brain injuries, physical disabilities, autism spectrum disorders, and other conditions that qualify for Minnesota Medicaid waiver programs.",
  },
  {
    question: "Do I need a referral to receive services?",
    answer:
      "While referrals from case managers and social workers are common, they are not the only way to get started. Individuals and family members can also contact us directly. We'll help guide you through the process of determining eligibility and accessing services.",
  },
  {
    question: "How quickly can services begin?",
    answer:
      "After receiving a referral or inquiry, we typically respond within 1-2 business days. The timeline for starting services depends on factors like waiver approval, assessment completion, and care plan development. We work to begin services as quickly as possible.",
  },
];

const serviceFAQs = [
  {
    question: "What services does UNIIKS provide?",
    answer:
      "We offer seven core services: Individualized Home Supports with Family Training, Adult Companion Services, Respite Care, Homemaker Services, Individual Community Living Support (ICLS), Employment Services, and 24-Hour Emergency Assistance. Each service is tailored to the individual's unique needs and goals.",
  },
  {
    question: "What is Individualized Home Supports with Family Training?",
    answer:
      "This is our flagship service that provides personalized in-home support to help individuals develop daily living skills, manage their health and safety, and work toward independence. It also includes training for family members so they can better support their loved one at home.",
  },
  {
    question: "What is respite care and who is it for?",
    answer:
      "Respite care provides temporary relief for primary caregivers. When a family caregiver needs a break — whether for a few hours or a few days — our trained staff steps in to provide quality care for their loved one. This helps prevent caregiver burnout while ensuring continuity of care.",
  },
  {
    question: "Do you provide 24/7 support?",
    answer:
      "Yes. While our office hours are Monday through Friday, 8 AM to 5 PM, we maintain a 24-hour emergency assistance line. Our on-call team is available around the clock to respond to urgent situations and ensure the safety of the individuals we serve.",
  },
  {
    question: "Can services be customized?",
    answer:
      "Absolutely. Person-centered care is at the heart of everything we do. Every support plan is developed collaboratively with the individual, their family, and their care team to reflect their unique strengths, preferences, goals, and cultural background.",
  },
];

const waiverFAQs = [
  {
    question: "What Medicaid waivers do you accept?",
    answer:
      "We accept six Minnesota Medicaid waiver programs: Developmental Disabilities (DD), Community Access for Disability Inclusion (CADI), Brain Injury (BI), Community Alternative Care (CAC), Elderly Waiver (EW), and Alternative Care (AC). Visit our Waivers page for detailed information about each program.",
  },
  {
    question: "How do I know if I qualify for a waiver?",
    answer:
      "Eligibility for Medicaid waivers is determined by your county case manager based on factors like your disability type, level of care needed, and financial eligibility for Medical Assistance. Contact your county's social services department or reach out to us and we can help guide you through the process.",
  },
  {
    question: "What if I don't have a waiver yet?",
    answer:
      "If you don't have a waiver but believe you may be eligible, we can help connect you with the right resources. Contact your county's social services department to request an assessment, or reach out to us and we'll help point you in the right direction.",
  },
  {
    question: "Is there a cost to the individual?",
    answer:
      "Services covered under Medicaid waiver programs are typically provided at no cost to the individual, as they are funded through Medical Assistance. However, eligibility requirements must be met. We can help you understand the financial aspects during our initial consultation.",
  },
];

const processFAQs = [
  {
    question: "How does the referral process work?",
    answer:
      "You can submit a referral through our online form, by phone, or by email. Once received, our team reviews the referral within 1-2 business days, contacts the referrer and/or individual to schedule an assessment, develops a personalized support plan, and begins services based on the agreed-upon plan.",
  },
  {
    question: "Who can make a referral?",
    answer:
      "Referrals can come from county case managers, social workers, healthcare providers, family members, guardians, or the individuals themselves. Anyone who knows someone who might benefit from our services is welcome to reach out.",
  },
  {
    question: "What happens during the initial assessment?",
    answer:
      "During the assessment, our team meets with the individual (and family members, if appropriate) to understand their needs, strengths, preferences, and goals. We review their current support plan, discuss available services, and begin developing a personalized care plan together.",
  },
  {
    question: "Are you hiring?",
    answer:
      "Yes! We're always looking for compassionate, dedicated individuals to join our team. We offer competitive pay, flexible scheduling, training, and the opportunity to make a real difference. Visit our Careers page to see current openings and apply.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/team-interaction.jpg" alt="Caring team interacting warmly" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/95 via-[var(--color-primary)]/85 to-[var(--color-primary-light)]/70" />
        </div>
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider mb-3">Help Center</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Frequently Asked Questions</h1>
            <p className="text-xl text-white/85 max-w-2xl leading-relaxed">
              Find answers to common questions about our services, eligibility, and the referral process.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-white border-b border-[var(--color-border)] sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-3 -mx-4 px-4">
            {[
              { id: "general", label: "General" },
              { id: "services", label: "Services" },
              { id: "waivers", label: "Waivers & Eligibility" },
              { id: "process", label: "Process & Referrals" },
            ].map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium text-[var(--color-text-light)] hover:bg-[var(--color-secondary)]/5 hover:text-[var(--color-secondary)] transition-colors shrink-0"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          {/* General */}
          <AnimatedSection>
            <div id="general" className="scroll-mt-40">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center text-[var(--color-primary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[var(--color-text)]">General Questions</h2>
              </div>
              <FAQ items={generalFAQs} />
            </div>
          </AnimatedSection>

          {/* Services */}
          <AnimatedSection>
            <div id="services" className="scroll-mt-40">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[var(--color-secondary)]/10 rounded-xl flex items-center justify-center text-[var(--color-secondary)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[var(--color-text)]">About Our Services</h2>
              </div>
              <FAQ items={serviceFAQs} />
            </div>
          </AnimatedSection>

          {/* Waivers */}
          <AnimatedSection>
            <div id="waivers" className="scroll-mt-40">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[var(--color-warm)]/10 rounded-xl flex items-center justify-center text-[var(--color-warm)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[var(--color-text)]">Waivers & Eligibility</h2>
              </div>
              <FAQ items={waiverFAQs} />
            </div>
          </AnimatedSection>

          {/* Process */}
          <AnimatedSection>
            <div id="process" className="scroll-mt-40">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[var(--color-accent)]/10 rounded-xl flex items-center justify-center text-[var(--color-accent)]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-[var(--color-text)]">Process & Referrals</h2>
              </div>
              <FAQ items={processFAQs} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-[var(--color-border)] shadow-sm text-center">
              <div className="w-16 h-16 bg-[var(--color-secondary)]/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
                Still Have Questions?
              </h2>
              <p className="text-[var(--color-text-light)] max-w-2xl mx-auto mb-8 text-lg">
                Can&apos;t find the answer you&apos;re looking for? Our team is always happy to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-[var(--color-secondary)] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[var(--color-primary-light)] transition-colors">
                  Contact Us
                </Link>
                <a href="tel:8479036172" className="border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] px-8 py-4 rounded-xl font-semibold hover:bg-[var(--color-secondary)]/5 transition-colors">
                  Call (847) 903-6172
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
