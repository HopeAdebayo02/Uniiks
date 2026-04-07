"use client";

import { useState, type FormEvent } from "react";

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
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Referral</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Are you a case manager, social worker, or family member? Submit a referral for home and community-based services through UNIIKS.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h2 className="text-2xl font-bold text-green-800 mb-2">Referral Submitted Successfully</h2>
                  <p className="text-green-700">Thank you for your referral. Our team will review it and reach out within 1-2 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Referral Information</h2>

                    {/* Referrer Info */}
                    <fieldset className="space-y-4 mb-8">
                      <legend className="text-lg font-semibold text-[var(--color-text)] mb-4">Your Information (Referrer)</legend>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="referrerName" className="block text-sm font-medium text-[var(--color-text)] mb-1">Full Name *</label>
                          <input type="text" id="referrerName" name="referrerName" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                        </div>
                        <div>
                          <label htmlFor="referrerRole" className="block text-sm font-medium text-[var(--color-text)] mb-1">Role / Title *</label>
                          <input type="text" id="referrerRole" name="referrerRole" required placeholder="e.g., Case Manager, Social Worker, Family Member" className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="referrerEmail" className="block text-sm font-medium text-[var(--color-text)] mb-1">Email *</label>
                          <input type="email" id="referrerEmail" name="referrerEmail" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                        </div>
                        <div>
                          <label htmlFor="referrerPhone" className="block text-sm font-medium text-[var(--color-text)] mb-1">Phone Number *</label>
                          <input type="tel" id="referrerPhone" name="referrerPhone" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-[var(--color-text)] mb-1">Organization / Agency</label>
                        <input type="text" id="organization" name="organization" className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                      </div>
                    </fieldset>

                    {/* Client Info */}
                    <fieldset className="space-y-4 mb-8">
                      <legend className="text-lg font-semibold text-[var(--color-text)] mb-4">Individual Being Referred</legend>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="clientName" className="block text-sm font-medium text-[var(--color-text)] mb-1">Full Name *</label>
                          <input type="text" id="clientName" name="clientName" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                        </div>
                        <div>
                          <label htmlFor="clientDob" className="block text-sm font-medium text-[var(--color-text)] mb-1">Date of Birth</label>
                          <input type="date" id="clientDob" name="clientDob" className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="clientPhone" className="block text-sm font-medium text-[var(--color-text)] mb-1">Phone Number</label>
                          <input type="tel" id="clientPhone" name="clientPhone" className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                        </div>
                        <div>
                          <label htmlFor="clientCounty" className="block text-sm font-medium text-[var(--color-text)] mb-1">County of Residence *</label>
                          <input type="text" id="clientCounty" name="clientCounty" required placeholder="e.g., Ramsey County" className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                        </div>
                      </div>
                    </fieldset>

                    {/* Service Info */}
                    <fieldset className="space-y-4">
                      <legend className="text-lg font-semibold text-[var(--color-text)] mb-4">Service Details</legend>
                      <div>
                        <label htmlFor="waiver" className="block text-sm font-medium text-[var(--color-text)] mb-1">Waiver Program *</label>
                        <select id="waiver" name="waiver" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none bg-white">
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
                            <label key={service} className="flex items-start gap-2 text-sm text-[var(--color-text-light)] cursor-pointer">
                              <input type="checkbox" name="services" value={service} className="mt-1 rounded border-[var(--color-border)] text-[var(--color-secondary)] focus:ring-[var(--color-secondary)]" />
                              {service}
                            </label>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-[var(--color-text)] mb-1">Additional Notes</label>
                        <textarea id="notes" name="notes" rows={4} placeholder="Any additional information about the individual's needs, preferences, or situation..." className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none resize-y" />
                      </div>
                    </fieldset>
                  </div>

                  <button
                    type="submit"
                    className="bg-[var(--color-secondary)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-primary-light)] transition-colors w-full sm:w-auto"
                  >
                    Submit Referral
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-[var(--color-bg-alt)] rounded-xl p-8 border border-[var(--color-border)]">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">Need Help?</h3>
                <p className="text-[var(--color-text-light)] text-sm mb-4">
                  If you have questions about the referral process or need assistance filling out this form, please contact us directly.
                </p>
                <div className="space-y-3">
                  <a href="tel:8479036172" className="flex items-center gap-2 text-[var(--color-secondary)] font-semibold text-sm hover:text-[var(--color-primary)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    (847) 903-6172
                  </a>
                  <a href="mailto:admin@uniikscare.com" className="flex items-center gap-2 text-[var(--color-secondary)] font-semibold text-sm hover:text-[var(--color-primary)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    admin@uniikscare.com
                  </a>
                </div>
              </div>

              <div className="bg-[var(--color-bg-alt)] rounded-xl p-8 border border-[var(--color-border)]">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">What Happens Next?</h3>
                <ol className="space-y-4 text-sm text-[var(--color-text-light)]">
                  <li className="flex items-start gap-3">
                    <span className="bg-[var(--color-secondary)] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">1</span>
                    <span>We review your referral within 1-2 business days.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-[var(--color-secondary)] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">2</span>
                    <span>Our team contacts the individual and/or referrer to schedule an assessment.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-[var(--color-secondary)] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">3</span>
                    <span>We develop a personalized support plan together.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-[var(--color-secondary)] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">4</span>
                    <span>Services begin based on the agreed-upon plan.</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
