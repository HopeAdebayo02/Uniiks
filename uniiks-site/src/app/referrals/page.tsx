"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const waiverOptions = [
  "Developmental Disabilities (DD)",
  "Community Access for Disability Inclusion (CADI)",
  "Brain Injury (BI)",
  "Community Alternative Care (CAC)",
  "Elderly Waiver (EW)",
  "Alternative Care (AC)",
  "Not Sure / Other",
];

const serviceOptions = [
  "Individualized Home Supports with Family Training",
  "Adult Companion Services",
  "Respite Care",
  "Homemaker Services",
  "Individual Community Living Support",
  "Employment Services",
  "24-Hour Emergency Assistance",
];

export default function ReferralsPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/support-home.jpg" alt="Caregiver supporting client at home" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/95 via-[var(--color-primary)]/85 to-[var(--color-primary-light)]/70" />
        </div>
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider mb-3">For Professionals & Families</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Make a Referral</h1>
            <p className="text-xl text-white/85 max-w-2xl leading-relaxed">
              Are you a case manager, social worker, or family member? Submit a referral for home and community-based services through UNIIKS.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <AnimatedSection animation="slide-left" className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-green-800 mb-2">Referral Submitted Successfully</h2>
                  <p className="text-green-700">Thank you for your referral. Our team will review it and reach out within 1-2 business days.</p>
                </div>
              ) : (
                <div className="bg-white border border-[var(--color-border)] rounded-2xl p-8 md:p-10 shadow-sm">
                  <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">Referral Information</h2>
                  <div className="section-divider mb-8" />

                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Referrer Info */}
                    <fieldset className="space-y-4">
                      <legend className="text-lg font-semibold text-[var(--color-text)] mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-[var(--color-secondary)]/10 rounded-lg flex items-center justify-center text-[var(--color-secondary)]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        Your Information (Referrer)
                      </legend>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="referrerName" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Full Name *</label>
                          <input type="text" id="referrerName" name="referrerName" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                        </div>
                        <div>
                          <label htmlFor="referrerRole" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Role / Title *</label>
                          <input type="text" id="referrerRole" name="referrerRole" required placeholder="e.g., Case Manager, Family Member" className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="referrerEmail" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Email *</label>
                          <input type="email" id="referrerEmail" name="referrerEmail" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                        </div>
                        <div>
                          <label htmlFor="referrerPhone" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Phone Number *</label>
                          <input type="tel" id="referrerPhone" name="referrerPhone" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Organization / Agency</label>
                        <input type="text" id="organization" name="organization" className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                      </div>
                    </fieldset>

                    {/* Client Info */}
                    <fieldset className="space-y-4">
                      <legend className="text-lg font-semibold text-[var(--color-text)] mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-[var(--color-warm)]/10 rounded-lg flex items-center justify-center text-[var(--color-warm)]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                          </svg>
                        </div>
                        Individual Being Referred
                      </legend>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="clientName" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Full Name *</label>
                          <input type="text" id="clientName" name="clientName" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                        </div>
                        <div>
                          <label htmlFor="clientDob" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Date of Birth</label>
                          <input type="date" id="clientDob" name="clientDob" className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="clientPhone" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Phone Number</label>
                          <input type="tel" id="clientPhone" name="clientPhone" className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                        </div>
                        <div>
                          <label htmlFor="clientCounty" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">County of Residence *</label>
                          <input type="text" id="clientCounty" name="clientCounty" required placeholder="e.g., Ramsey County" className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                        </div>
                      </div>
                    </fieldset>

                    {/* Service Info */}
                    <fieldset className="space-y-4">
                      <legend className="text-lg font-semibold text-[var(--color-text)] mb-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center text-[var(--color-accent)]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        Service Details
                      </legend>
                      <div>
                        <label htmlFor="waiver" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Waiver Program *</label>
                        <select id="waiver" name="waiver" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none bg-white">
                          <option value="">Select a waiver program</option>
                          {waiverOptions.map((w) => (
                            <option key={w} value={w}>{w}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[var(--color-text)] mb-2">Services Needed *</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {serviceOptions.map((service) => (
                            <label key={service} className="flex items-start gap-2.5 text-sm text-[var(--color-text-light)] cursor-pointer p-2 rounded-lg hover:bg-[var(--color-bg-alt)] transition-colors">
                              <input type="checkbox" name="services" value={service} className="mt-0.5 rounded border-[var(--color-border)] text-[var(--color-secondary)] focus:ring-[var(--color-secondary)]" />
                              {service}
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Additional Notes</label>
                        <textarea id="notes" name="notes" rows={4} placeholder="Any additional information about the individual's needs, preferences, or situation..." className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none resize-y" />
                      </div>
                    </fieldset>

                    <button
                      type="submit"
                      className="bg-[var(--color-secondary)] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[var(--color-primary-light)] transition-colors w-full sm:w-auto"
                    >
                      Submit Referral
                    </button>
                  </form>
                </div>
              )}
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection animation="slide-right" className="space-y-5">
              <div className="bg-white rounded-xl p-7 border border-[var(--color-border)] shadow-sm">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--color-secondary)]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  Need Help?
                </h3>
                <p className="text-[var(--color-text-light)] text-sm mb-4">
                  If you have questions about the referral process or need assistance, please contact us directly.
                </p>
                <div className="space-y-3">
                  <a href="tel:8479036172" className="flex items-center gap-2 text-[var(--color-secondary)] font-semibold text-sm hover:text-[var(--color-primary)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    (847) 903-6172
                  </a>
                  <a href="mailto:admin@uniikscare.com" className="flex items-center gap-2 text-[var(--color-secondary)] font-semibold text-sm hover:text-[var(--color-primary)] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    admin@uniikscare.com
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl p-7 border border-[var(--color-border)] shadow-sm gradient-border">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4 mt-2">What Happens Next?</h3>
                <ol className="space-y-5">
                  {[
                    "We review your referral within 1-2 business days.",
                    "Our team contacts the individual and/or referrer to schedule an assessment.",
                    "We develop a personalized support plan together.",
                    "Services begin based on the agreed-upon plan.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-7 h-7 bg-[var(--color-secondary)] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0">{i + 1}</span>
                      <span className="text-sm text-[var(--color-text-light)] leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
