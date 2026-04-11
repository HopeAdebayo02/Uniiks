"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...data }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "Unable to send message. Please try again.");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/happy-senior.jpg" alt="Happy senior" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
        </div>
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Contact Us</h1>
            <p className="text-xl text-white/85 max-w-2xl leading-relaxed">
              Have questions about our services? Ready to get started? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info Cards */}
            <AnimatedSection animation="slide-left" className="space-y-5">
              {[
                {
                  title: "Our Office",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  ),
                  content: (
                    <address className="not-italic text-[var(--color-text-light)] text-sm">
                      1909 S Meadowwood Ct<br />Brooklyn Park, MN 55444
                    </address>
                  ),
                },
                {
                  title: "Phone",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  ),
                  content: (
                    <a href="tel:7632882496" className="text-[var(--color-secondary)] font-semibold hover:text-[var(--color-primary)] transition-colors">
                      (763) 288-2496
                    </a>
                  ),
                },
                {
                  title: "Email",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  ),
                  content: (
                    <a href="mailto:admin@uniikscare.com" className="text-[var(--color-secondary)] font-semibold hover:text-[var(--color-primary)] transition-colors">
                      admin@uniikscare.com
                    </a>
                  ),
                },
                {
                  title: "Hours",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  ),
                  content: (
                    <div className="text-[var(--color-text-light)] text-sm space-y-1">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p>Saturday - Sunday: Closed</p>
                      <p className="text-[var(--color-secondary)] font-medium mt-2">24/7 Emergency Line Available</p>
                    </div>
                  ),
                },
              ].map((card) => (
                <div key={card.title} className="bg-white border border-[var(--color-border)] rounded-xl p-6 card-hover">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[var(--color-secondary)]/10 rounded-xl flex items-center justify-center text-[var(--color-secondary)]">
                      {card.icon}
                    </div>
                    <h3 className="text-base font-bold text-[var(--color-text)]">{card.title}</h3>
                  </div>
                  {card.content}
                </div>
              ))}
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="slide-right" className="lg:col-span-2">
              <div className="bg-white border border-[var(--color-border)] rounded-2xl p-8 md:p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2">Send Us a Message</h2>
                <div className="section-divider mb-6" />

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700">Thank you for reaching out. We&apos;ll respond within 1 business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
                        {error}
                      </div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Full Name *</label>
                        <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" placeholder="Your full name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Email *</label>
                        <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" placeholder="you@example.com" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Phone</label>
                        <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" placeholder="(XXX) XXX-XXXX" />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Subject *</label>
                        <select id="subject" name="subject" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none bg-white">
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
                      <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Message *</label>
                      <textarea id="message" name="message" required rows={5} placeholder="How can we help you?" className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none resize-y" />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="bg-[var(--color-secondary)] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[var(--color-primary-light)] transition-colors w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[var(--color-bg-alt)] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-[var(--color-text)] mb-2 text-center">Find Us</h2>
            <div className="section-divider mx-auto mb-8" />
            <div className="bg-white border border-[var(--color-border)] rounded-2xl overflow-hidden h-96 shadow-sm">
              <iframe
                title="UNIIKS Office Location"
                src="https://www.google.com/maps?q=1909+S+Meadowwood+Ct,+Brooklyn+Park,+MN+55444&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
