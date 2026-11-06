"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { LenisWrapper } from "@/components/sites/resido/LenisWrapper";
import { Navbar } from "@/components/sites/resido/Navbar";
import { Footer } from "@/components/sites/resido/Footer";
import { PageHero } from "@/components/sites/resido/PageHero";
import { PillButton } from "@/components/sites/resido/PillButton";
import { SectionLabel } from "@/components/sites/resido/SectionLabel";
import { ScrollReveal } from "@/components/sites/resido/ScrollReveal";
import { LetsBuildTogether } from "@/components/sites/resido/LetsBuildTogether";

function AnimatedCounter({
  target,
  suffix,
  duration = 2000,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  const animate = useCallback(() => {
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [target, duration]);

  useEffect(() => {
    if (isInView) {
      animate();
    }
  }, [isInView, animate]);

  return (
    <div
      ref={ref}
      className="font-heading text-[48px] font-medium leading-none tracking-tight lg:text-[60px]"
    >
      {value.toLocaleString()}
      {suffix}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const stats = [
  { index: "/01", target: 5000, suffix: "+", label: "Square ft. designed" },
  { index: "/02", target: 120, suffix: "", label: "Planning approvals" },
  { index: "/03", target: 45, suffix: "", label: "Skilled tradespeople" },
  { index: "/04", target: 30, suffix: "+", label: "Trusted partners" },
] as const;

const teamMembers = [
  { name: "Elowen Vance", role: "Project Manager" },
  { name: "Ronan Frost", role: "Lead Architect" },
  { name: "Eamon Blackwood", role: "Construction Manager" },
  { name: "Saoirse Wynn", role: "Interior Designer" },
  { name: "Kelly Blake", role: "Sustainability Expert" },
] as const;

// Each member repeated 4 times = 20 cards
const teamGrid = Array.from({ length: 4 }, () => teamMembers).flat();

const awards = [
  {
    title: "Excellence in Residential Design",
    body: "National Architecture & Build Awards",
  },
  {
    title: "Best Renovation Residential Design",
    body: "Urban Design & Construction Awards",
  },
  {
    title: "Outstanding Construction Quality",
    body: "Regional Builders Association Awards",
  },
  {
    title: "Sustainable Building Recognition",
    body: "Green Design Council Awards 2025",
  },
] as const;

const comparisonRows = [
  {
    label: "Experience",
    sayaro: "Proven track record across residential, commercial, and renovation.",
    contractors: "Varies by contractor.",
    freelancers: "Limited to individual expertise.",
  },
  {
    label: "Management",
    sayaro: "Full project management included.",
    contractors: "Often requires separate oversight.",
    freelancers: "Self-managed.",
  },
  {
    label: "Quality",
    sayaro: "Consistent standards across all phases.",
    contractors: "Depends on subcontractors.",
    freelancers: "Inconsistent.",
  },
  {
    label: "Communication",
    sayaro: "Dedicated point of contact.",
    contractors: "Multiple contacts.",
    freelancers: "Direct but limited availability.",
  },
  {
    label: "Cost",
    sayaro: "Transparent, fixed-price proposals.",
    contractors: "Variable, often with extras.",
    freelancers: "Lower upfront, hidden costs possible.",
  },
  {
    label: "Ideal for",
    sayaro: "End-to-end projects.",
    contractors: "Specialized trades.",
    freelancers: "Small, defined tasks.",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function TrophyIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-neutral-700"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function CheckMark() {
  return (
    <span className="inline-flex size-5 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
      &#10003;
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  return (
    <LenisWrapper>
      <Navbar />
      <main>
        {/* ============================================ */}
        {/* 1. Hero                                      */}
        {/* ============================================ */}
        <PageHero
          label="About"
          title="Inspiring with design. Empowering through technology"
        />

        {/* ============================================ */}
        {/* 2. Studio Description                        */}
        {/* ============================================ */}
        <section className="py-16">
          <div className="mx-auto max-w-[1400px] px-6">
            <ScrollReveal>
              <p className="max-w-3xl font-heading text-[24px] font-medium leading-relaxed tracking-tight text-neutral-700 lg:text-[32px]">
                We are a design and construction studio delivering projects
                focused on quality and value. Our work combines architecture,
                renovation, and construction under one team.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ============================================ */}
        {/* 3. Stats Section - Animated Counters         */}
        {/* ============================================ */}
        <section className="py-16">
          <div className="mx-auto max-w-[1400px] px-6">
            <ScrollReveal>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.index} className="flex flex-col gap-2">
                    <span className="font-mono text-sm text-neutral-400">
                      {stat.index}
                    </span>
                    <AnimatedCounter
                      target={stat.target}
                      suffix={stat.suffix}
                    />
                    <p className="text-sm text-neutral-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ============================================ */}
        {/* 4. Testimonial                               */}
        {/* ============================================ */}
        <section className="py-16">
          <div className="mx-auto max-w-[1400px] px-6">
            <ScrollReveal>
              <div className="rounded-2xl bg-white p-8 lg:p-12">
                <blockquote className="max-w-2xl font-heading text-2xl italic leading-relaxed tracking-tight lg:text-3xl">
                  &ldquo;I&apos;m extremely pleased with the apartment designed
                  by Sayaro. The quality and communication were excellent
                  throughout.&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-3">
                  <Image
                    src="/sites/resido/images/avatar-testimonial.jpg"
                    alt="Michael Turner"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-heading text-sm font-medium">
                      Michael Turner
                    </p>
                    <p className="text-sm text-neutral-500">Developer</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ============================================ */}
        {/* 5. Team Section - People                     */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="mx-auto max-w-[1400px] px-6">
            <ScrollReveal>
              <SectionLabel>Our Team</SectionLabel>
              <h2 className="mt-4 font-heading text-[40px] font-medium leading-tight tracking-[-0.04em] lg:text-[60px]">
                People
              </h2>
            </ScrollReveal>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
              {teamGrid.map((member, index) => (
                <ScrollReveal key={`${member.name}-${index}`} delay={index * 40}>
                  <div className="rounded-2xl bg-white p-4">
                    <div className="mx-auto size-16 rounded-full bg-neutral-200" />
                    <p className="mt-3 text-center font-heading text-sm font-medium">
                      {member.name}
                    </p>
                    <p className="text-center text-xs text-neutral-500">
                      {member.role}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 6. Awards                                    */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="mx-auto max-w-[1400px] px-6">
            <ScrollReveal>
              <SectionLabel>Recognition</SectionLabel>
              <h3 className="mt-4 font-heading text-[28px] font-medium tracking-tight lg:text-[36px]">
                Some of the honors we&apos;ve achieved
              </h3>
            </ScrollReveal>

            <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
              {awards.map((award, index) => (
                <ScrollReveal key={award.title} delay={index * 80}>
                  <div className="rounded-2xl bg-white p-6">
                    <TrophyIcon />
                    <p className="mt-4 font-heading text-base font-medium tracking-tight">
                      {award.title}
                    </p>
                    <p className="mt-1 text-xs text-neutral-500">
                      {award.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* 7. Comparison Table                          */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="mx-auto max-w-[1400px] px-6">
            <ScrollReveal>
              <SectionLabel>Why Us</SectionLabel>
              <h3 className="mt-4 font-heading text-[28px] font-medium tracking-tight lg:text-[36px]">
                Choosing the right partner
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="mt-10 overflow-hidden rounded-2xl bg-white">
                {/* Desktop table */}
                <div className="hidden md:block">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr>
                        <th className="px-6 py-4 font-heading text-sm font-medium text-neutral-500">
                          Feature
                        </th>
                        <th className="bg-black px-6 py-4 font-heading text-sm font-medium text-white">
                          Sayaro.Inc
                        </th>
                        <th className="px-6 py-4 font-heading text-sm font-medium text-neutral-500">
                          Contractors
                        </th>
                        <th className="px-6 py-4 font-heading text-sm font-medium text-neutral-500">
                          Freelancers
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row) => (
                        <tr
                          key={row.label}
                          className="border-t border-neutral-100"
                        >
                          <td className="px-6 py-4 font-heading text-sm font-medium">
                            {row.label}
                          </td>
                          <td className="bg-neutral-50 px-6 py-4">
                            <div className="flex items-start gap-2">
                              <CheckMark />
                              <span className="text-sm text-neutral-700">
                                {row.sayaro}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-neutral-500">
                            {row.contractors}
                          </td>
                          <td className="px-6 py-4 text-sm text-neutral-500">
                            {row.freelancers}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile stacked cards */}
                <div className="space-y-6 p-6 md:hidden">
                  {comparisonRows.map((row) => (
                    <div key={row.label}>
                      <p className="font-heading text-sm font-medium">
                        {row.label}
                      </p>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-start gap-2 rounded-lg bg-neutral-50 p-3">
                          <CheckMark />
                          <div>
                            <span className="text-xs font-medium">
                              Sayaro.Inc
                            </span>
                            <p className="text-sm text-neutral-700">
                              {row.sayaro}
                            </p>
                          </div>
                        </div>
                        <div className="rounded-lg p-3">
                          <span className="text-xs font-medium text-neutral-400">
                            Contractors
                          </span>
                          <p className="text-sm text-neutral-500">
                            {row.contractors}
                          </p>
                        </div>
                        <div className="rounded-lg p-3">
                          <span className="text-xs font-medium text-neutral-400">
                            Freelancers
                          </span>
                          <p className="text-sm text-neutral-500">
                            {row.freelancers}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                <PillButton href="/contact" variant="primary">
                  Become a Client
                </PillButton>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ============================================ */}
        {/* 8. LetsBuildTogether CTA                     */}
        {/* ============================================ */}
        <LetsBuildTogether />
      </main>
      <Footer />
    </LenisWrapper>
  );
}
