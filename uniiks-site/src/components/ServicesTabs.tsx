"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Service = {
  id: string;
  shortLabel: string;
  title: string;
  description: string;
  features: string[];
  image: string;
};

const services: Service[] = [
  {
    id: "assisted-living",
    shortLabel: "144G Assisted Living",
    title: "144G Assisted Living",
    description:
      "Our flagship service. Licensed under Minnesota Statute 144G, our Assisted Living community combines a comfortable, home-like residence with the health, personal care, and supportive services people need to live with dignity and independence. We tailor each resident's support plan to their preferences, routines, and goals.",
    features: [
      "Private, home-like residence",
      "24-hour staffing and safety oversight",
      "Medication management and health monitoring",
      "Assistance with activities of daily living",
      "Nutritious meals and housekeeping",
      "Personalized care plans",
    ],
    image: "/happy-senior.jpg",
  },
  {
    id: "ihs",
    shortLabel: "Home Supports",
    title: "Individualized Home Supports with Family Training (245D)",
    description:
      "Our 245D home supports program provides personalized in-home support that helps individuals with disabilities develop and maintain the skills needed for independent living. We work closely with families, providing training and guidance to ensure a supportive home environment.",
    features: [
      "Daily living skills development",
      "Health and safety support in the home",
      "Family training and education",
      "Behavioral support and guidance",
      "Household management assistance",
      "Adaptive skills training",
    ],
    image: "/support-home.jpg",
  },
  {
    id: "companion",
    shortLabel: "Adult Companion",
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
    image: "/team-interaction.jpg",
  },
  {
    id: "respite",
    shortLabel: "Respite Care",
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
    image: "/care-hands.jpg",
  },
  {
    id: "homemaker",
    shortLabel: "Homemaker",
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
    image: "/about-community.jpg",
  },
  {
    id: "icls",
    shortLabel: "Community Living",
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
    image: "/services-independence.jpg",
  },
  {
    id: "employment",
    shortLabel: "Employment",
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
    image: "/careers-team.jpg",
  },
  {
    id: "emergency",
    shortLabel: "24-Hour Emergency",
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
    image: "/hero-caregiver.jpg",
  },
];

export default function ServicesTabs() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  const active = services[index];

  function select(next: number) {
    if (next === index || phase === "out") return;
    setPhase("out");
    window.setTimeout(() => {
      setIndex(next);
      window.setTimeout(() => setPhase("in"), 20);
    }, 260);
  }

  return (
    <div>
      {/* Tabs nav */}
      <div className="border-b border-[var(--color-rule)] mb-12 lg:mb-16">
        <div className="overflow-x-auto -mx-6 px-6 scrollbar-hide">
          <div className="flex min-w-max">
            {services.map((s, i) => {
              const isActive = i === index;
              return (
                <button
                  key={s.id}
                  onClick={() => select(i)}
                  className={`relative group shrink-0 px-5 lg:px-6 py-5 text-left transition-colors ${
                    isActive
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-ink-muted)] hover:text-[var(--color-primary)]"
                  }`}
                  aria-pressed={isActive}
                >
                  <span className="flex items-baseline gap-2.5 whitespace-nowrap">
                    <span
                      className={`font-serif text-sm ${
                        isActive
                          ? "text-[var(--color-terracotta)]"
                          : "text-[var(--color-ink-soft)]"
                      }`}
                      style={{ fontWeight: 400 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-[13px] tracking-wide ${
                        isActive ? "font-semibold" : "font-medium"
                      }`}
                    >
                      {s.shortLabel}
                    </span>
                  </span>
                  <span
                    className={`absolute left-5 right-5 lg:left-6 lg:right-6 -bottom-px h-[2px] bg-[var(--color-terracotta)] transition-transform origin-left duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content pane */}
      <div
        key={active.id}
        className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-start transition-all duration-[320ms] ease-out ${
          phase === "in"
            ? "opacity-100 translate-y-0 blur-0"
            : "opacity-0 -translate-y-2 blur-[3px]"
        }`}
        style={{
          boxShadow:
            phase === "in" ? "none" : "0 20px 50px -30px rgba(26, 58, 82, 0.4)",
        }}
      >
        {/* Left — image */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden">
            <Image
              src={active.image}
              alt={active.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-[var(--color-cream)] flex items-center justify-center">
              <span
                className="font-serif text-5xl text-[var(--color-terracotta)]"
                style={{ fontWeight: 400 }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* Right — copy */}
        <div className="lg:col-span-5 lg:pt-6">
          <p className="eyebrow mb-5">Service {String(index + 1).padStart(2, "0")} of 08</p>
          <h3 className="display-serif text-3xl md:text-[40px] text-[var(--color-primary)] leading-[1.05] mb-6">
            {active.title}
          </h3>
          <div className="rule mb-7" />
          <p className="text-[17px] text-[var(--color-ink-muted)] leading-relaxed mb-8">
            {active.description}
          </p>
          <p className="eyebrow mb-4">What&apos;s Included</p>
          <ul className="space-y-3 mb-10 border-t border-[var(--color-rule)] pt-4">
            {active.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-4 text-[var(--color-ink)] text-[15px]"
              >
                <span className="w-6 h-px bg-[var(--color-terracotta)] mt-3 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[var(--color-primary)] text-white px-7 py-4 text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-[var(--color-terracotta)] transition-colors"
          >
            Inquire about this service
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Prev/Next controls */}
      <div className="mt-14 pt-10 border-t border-[var(--color-rule)] flex items-center justify-between">
        <button
          onClick={() => select((index - 1 + services.length) % services.length)}
          className="group flex items-center gap-3 text-[12px] tracking-[0.2em] uppercase font-semibold text-[var(--color-ink-muted)] hover:text-[var(--color-terracotta)] transition-colors"
        >
          <span className="w-8 h-px bg-current transition-all group-hover:w-12" />
          Previous
        </button>
        <p className="text-[11px] tracking-[0.3em] uppercase text-[var(--color-ink-soft)]">
          {String(index + 1).padStart(2, "0")} <span className="text-[var(--color-rule)]">/</span>{" "}
          {String(services.length).padStart(2, "0")}
        </p>
        <button
          onClick={() => select((index + 1) % services.length)}
          className="group flex items-center gap-3 text-[12px] tracking-[0.2em] uppercase font-semibold text-[var(--color-primary)] hover:text-[var(--color-terracotta)] transition-colors"
        >
          Next
          <span className="w-8 h-px bg-current transition-all group-hover:w-12" />
        </button>
      </div>
    </div>
  );
}
