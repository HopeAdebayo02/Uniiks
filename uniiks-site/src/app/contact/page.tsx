"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Have questions about our services? Ready to get started? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-white border border-[var(--color-border)] rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[var(--color-secondary)]/10 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-secondary)]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text)]">Our Office</h3>
                </div>
                <address className="not-italic text-[var(--color-text-light)]">
                  220 Robert St S, Ste 107<br />
                  St. Paul, MN 55107
                </address>
              </div>

              <div className="bg-white border border-[var(--color-border)] rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[var(--color-secondary)]/10 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-secondary)]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text)]">Phone</h3>
                </div>
                <a href="tel:8479036172" className="text-[var(--color-secondary)] font-semibold hover:text-[var(--color-primary)] transition-colors">
                  (847) 903-6172
                </a>
              </div>

              <div className="bg-white border border-[var(--color-border)] rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[var(--color-secondary)]/10 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-secondary)]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text)]">Email</h3>
                </div>
                <a href="mailto:admin@uniikscare.com" className="text-[var(--color-secondary)] font-semibold hover:text-[var(--color-primary)] transition-colors">
                  admin@uniikscare.com
                </a>
              </div>

              <div className="bg-white border border-[var(--color-border)] rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[var(--color-secondary)]/10 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--color-secondary)]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text)]">Hours</h3>
                </div>
                <div className="text-[var(--color-text-light)] text-sm space-y-1">
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                  <p className="text-[var(--color-secondary)] font-medium mt-2">24/7 Emergency Line Available</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-[var(--color-border)] rounded-xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Send Us a Message</h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700">Thank you for reaching out. We&apos;ll respond within 1 business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-1">Full Name *</label>
                        <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-1">Email *</label>
                        <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text)] mb-1">Phone</label>
                        <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-text)] mb-1">Subject *</label>
                        <select id="subject" name="subject" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none bg-white">
                          <option value="">Select a subject</option>
                          <option value="services">Service Inquiry</option>
                          <option value="referral">Referral Question</option>
                          <option value="careers">Career Inquiry</option>
                          <option value="waiver">Waiver Information</option>
                          <option value="general">General Question</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-1">Message *</label>
                      <textarea id="message" name="message" required rows={6} placeholder="How can we help you?" className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none resize-y" />
                    </div>
                    <button
                      type="submit"
                      className="bg-[var(--color-secondary)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-primary-light)] transition-colors w-full sm:w-auto"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[var(--color-bg-alt)] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6 text-center">Find Us</h2>
          <div className="bg-white border border-[var(--color-border)] rounded-xl overflow-hidden h-96">
            <iframe
              title="UNIIKS LLC Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.5!2d-93.0935!3d44.9465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f7d519f1e11111%3A0x0!2s220+Robert+St+S%2C+St+Paul%2C+MN+55107!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
