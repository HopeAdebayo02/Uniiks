"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const benefits = [
  {
    title: "Competitive Pay",
    description: "We offer competitive compensation that reflects your skills and dedication.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Flexible Scheduling",
    description: "Work schedules that fit your life, with full-time and part-time options available.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Training & Growth",
    description: "Comprehensive training programs and ongoing professional development opportunities.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Meaningful Work",
    description: "Make a real difference in people's lives every single day.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Supportive Team",
    description: "Join a collaborative team that values your contributions and supports your growth.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Career Advancement",
    description: "Opportunities to grow within the organization as we expand our services.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const openings = [
  {
    title: "Direct Support Professional (DSP)",
    type: "Full-Time / Part-Time",
    location: "St. Paul, MN & Surrounding Areas",
    description:
      "Provide direct support to individuals with disabilities in their homes and communities. Assist with daily living skills, community participation, and achieving personal goals.",
    requirements: [
      "Must be 18 years or older",
      "Valid driver's license and reliable transportation",
      "Ability to pass a background check",
      "High school diploma or GED",
      "Compassionate and patient demeanor",
      "Previous experience preferred but not required — we provide training",
    ],
  },
  {
    title: "Personal Care Aide (PCA)",
    type: "Full-Time / Part-Time",
    location: "St. Paul, MN & Surrounding Areas",
    description:
      "Assist individuals with personal care needs, household tasks, and health-related activities to support independent living.",
    requirements: [
      "Must be 18 years or older",
      "Ability to pass a background check",
      "Reliable transportation",
      "Strong communication skills",
      "Compassion and dedication to quality care",
      "PCA certification preferred — training available",
    ],
  },
  {
    title: "Home Health Aide",
    type: "Full-Time / Part-Time",
    location: "St. Paul, MN & Surrounding Areas",
    description:
      "Provide in-home health support services including monitoring health status, assisting with health-related tasks, and supporting overall well-being.",
    requirements: [
      "Must be 18 years or older",
      "Home Health Aide certification or willingness to obtain",
      "Valid driver's license and reliable transportation",
      "Ability to pass a background check",
      "Experience in healthcare or home care setting preferred",
      "Strong attention to detail",
    ],
  },
];

export default function CareersPage() {
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
          <Image
            src="/careers-team.jpg"
            alt="Healthcare team walking through a hospital corridor"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/95 via-[var(--color-primary)]/85 to-[var(--color-primary-light)]/70" />
        </div>
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider mb-3">Careers</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Join Our Team</h1>
            <p className="text-xl text-white/85 max-w-2xl leading-relaxed">
              Build a rewarding career making a difference in people&apos;s lives. We&apos;re looking for compassionate individuals to join the UNIIKS family.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider mb-3">Benefits</p>
              <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">Why Work at UNIIKS?</h2>
              <div className="section-divider mx-auto mb-4" />
              <p className="text-[var(--color-text-light)] max-w-2xl mx-auto text-lg">
                We invest in our team because great care starts with great people.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={(i % 3) * 100 as 100 | 200 | 300}>
                <div className="bg-white border border-[var(--color-border)] rounded-xl p-6 card-hover h-full">
                  <div className="w-11 h-11 bg-[var(--color-secondary)]/10 rounded-xl flex items-center justify-center mb-4 text-[var(--color-secondary)]">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{benefit.title}</h3>
                  <p className="text-[var(--color-text-light)] text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider mb-3">Opportunities</p>
              <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">Open Positions</h2>
              <div className="section-divider mx-auto mb-4" />
              <p className="text-[var(--color-text-light)] max-w-2xl mx-auto text-lg">
                Explore our current openings and find the role that&apos;s right for you.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {openings.map((job, i) => (
              <AnimatedSection key={job.title} delay={(i % 3) * 100 as 100 | 200 | 300}>
                <div className="bg-white border border-[var(--color-border)] rounded-xl p-7 card-hover">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-text)]">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-semibold px-3 py-1 rounded-full">
                          {job.type}
                        </span>
                        <span className="bg-gray-100 text-[var(--color-text-light)] text-xs font-semibold px-3 py-1 rounded-full">
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <a
                      href="#apply"
                      className="bg-[var(--color-secondary)] text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-[var(--color-primary-light)] transition-colors whitespace-nowrap shrink-0"
                    >
                      Apply Now
                    </a>
                  </div>
                  <p className="text-[var(--color-text-light)] text-sm mb-4 leading-relaxed">{job.description}</p>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text)] mb-2">Requirements:</p>
                    <ul className="grid sm:grid-cols-2 gap-1.5">
                      {job.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-sm text-[var(--color-text-light)]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--color-success)] shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-10">
              <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-wider mb-3">Apply</p>
              <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">Apply Today</h2>
              <div className="section-divider mx-auto mb-4" />
              <p className="text-[var(--color-text-light)] text-lg">
                Interested in joining our team? Fill out the form below and we&apos;ll be in touch.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">Application Submitted!</h3>
                <p className="text-green-700">Thank you for your interest. We&apos;ll review your application and reach out soon.</p>
              </div>
            ) : (
              <div className="bg-white border border-[var(--color-border)] rounded-2xl p-8 md:p-10 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">First Name *</label>
                      <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Last Name *</label>
                      <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Email *</label>
                      <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Phone *</label>
                      <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Position Interested In *</label>
                    <select id="position" name="position" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none bg-white">
                      <option value="">Select a position</option>
                      {openings.map((job) => (
                        <option key={job.title} value={job.title}>{job.title}</option>
                      ))}
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-[var(--color-text)] mb-1.5">Relevant Experience</label>
                    <textarea id="experience" name="experience" rows={4} placeholder="Tell us about your relevant experience, certifications, and why you want to join UNIIKS..." className="w-full px-4 py-3 border border-[var(--color-border)] rounded-xl focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none resize-y" />
                  </div>
                  <button
                    type="submit"
                    className="bg-[var(--color-secondary)] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[var(--color-primary-light)] transition-colors w-full"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
