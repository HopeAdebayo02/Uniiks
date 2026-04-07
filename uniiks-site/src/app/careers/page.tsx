"use client";

import { useState, type FormEvent } from "react";

const benefits = [
  { title: "Competitive Pay", description: "We offer competitive compensation that reflects your skills and dedication." },
  { title: "Flexible Scheduling", description: "Work schedules that fit your life, with full-time and part-time options available." },
  { title: "Training & Development", description: "Comprehensive training programs and ongoing professional development opportunities." },
  { title: "Meaningful Work", description: "Make a real difference in people's lives every day." },
  { title: "Supportive Team", description: "Join a collaborative team that values your contributions and supports your growth." },
  { title: "Career Advancement", description: "Opportunities to grow within the organization as we expand our services." },
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
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Build a rewarding career making a difference in people&apos;s lives. We&apos;re looking for compassionate individuals to join the UNIIKS family.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">Why Work at UNIIKS?</h2>
            <p className="text-[var(--color-text-light)] max-w-2xl mx-auto text-lg">
              We invest in our team because great care starts with great people.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white border border-[var(--color-border)] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{benefit.title}</h3>
                <p className="text-[var(--color-text-light)] text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">Open Positions</h2>
            <p className="text-[var(--color-text-light)] max-w-2xl mx-auto text-lg">
              Explore our current openings and find the role that&apos;s right for you.
            </p>
          </div>
          <div className="space-y-6">
            {openings.map((job) => (
              <div key={job.title} className="bg-white border border-[var(--color-border)] rounded-xl p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text)]">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2">
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
                    className="bg-[var(--color-secondary)] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[var(--color-primary-light)] transition-colors whitespace-nowrap"
                  >
                    Apply Now
                  </a>
                </div>
                <p className="text-[var(--color-text-light)] mb-4">{job.description}</p>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text)] mb-2">Requirements:</p>
                  <ul className="grid sm:grid-cols-2 gap-1">
                    {job.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-[var(--color-text-light)]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--color-secondary)] shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">Apply Today</h2>
            <p className="text-[var(--color-text-light)] text-lg">
              Interested in joining our team? Fill out the form below and we&apos;ll be in touch.
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Application Submitted!</h3>
              <p className="text-green-700">Thank you for your interest in joining UNIIKS. We&apos;ll review your application and reach out soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[var(--color-text)] mb-1">First Name *</label>
                  <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[var(--color-text)] mb-1">Last Name *</label>
                  <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-1">Email *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text)] mb-1">Phone *</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none" />
                </div>
              </div>
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-[var(--color-text)] mb-1">Position Interested In *</label>
                <select id="position" name="position" required className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none bg-white">
                  <option value="">Select a position</option>
                  {openings.map((job) => (
                    <option key={job.title} value={job.title}>{job.title}</option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-[var(--color-text)] mb-1">Relevant Experience</label>
                <textarea id="experience" name="experience" rows={4} placeholder="Tell us about your relevant experience, certifications, and why you want to join UNIIKS..." className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent outline-none resize-y" />
              </div>
              <button
                type="submit"
                className="bg-[var(--color-secondary)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-primary-light)] transition-colors w-full"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
