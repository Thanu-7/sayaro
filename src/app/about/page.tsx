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
  { index: "/01", target: 5, suffix: "", label: "Core product families" },
  { index: "/02", target: 40, suffix: "+", label: "Equipment models" },
  { index: "/03", target: 5, suffix: "", label: "Service stages" },
  { index: "/04", target: 12, suffix: "", label: "Pages in product brochure" },
] as const;

const teamMembers = [
  { name: "M. Aravindh", role: "Director" },
  { name: "Engineering Team", role: "Product Design" },
  { name: "Manufacturing Team", role: "Fabrication" },
  { name: "Quality Team", role: "Quality Assurance" },
  { name: "Service Team", role: "Installation & Support" },
] as const;

// Each member repeated 4 times = 20 cards
const teamGrid = Array.from({ length: 4 }, () => teamMembers).flat();

const awards = [
  {
    title: "Precision Engineering",
    body: "High-quality engineering for reliability and performance",
  },
  {
    title: "Custom Manufacturing",
    body: "Equipment tailored to industry-specific requirements",
  },
  {
    title: "Quality Assurance",
    body: "Strict quality control across every instrument",
  },
  {
    title: "End-to-End Solutions",
    body: "Design, fabrication, installation, and support",
  },
] as const;

const comparisonRows = [
  {
    label: "Product Range",
    sayaro: "Focused range across 5 core laboratory product families.",
    contractors: "Broad catalogue, limited depth.",
    freelancers: "Single-category specialists.",
  },
  {
    label: "Customization",
    sayaro: "Equipment configured to your capacity, temperature, and application.",
    contractors: "Limited to standard models.",
    freelancers: "Minimal customization.",
  },
  {
    label: "Technical Support",
    sayaro: "Dedicated technical guidance from enquiry to installation.",
    contractors: "Sales-focused support.",
    freelancers: "Limited availability.",
  },
  {
    label: "Quality Control",
    sayaro: "Consistent standards across all equipment.",
    contractors: "Depends on source manufacturer.",
    freelancers: "No formal QC process.",
  },
  {
    label: "After-Sales",
    sayaro: "Installation, commissioning, and ongoing support.",
    contractors: "Warranty claims only.",
    freelancers: "None or limited.",
  },
  {
    label: "Ideal For",
    sayaro: "Complete laboratory equipment requirements.",
    contractors: "Bulk standard purchases.",
    freelancers: "One-off small items.",
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
          title="Precision equipment. Engineered for your laboratory."
        />

        {/* ============================================ */}
        {/* 2. Studio Description                        */}
        {/* ============================================ */}
        <section className="py-16">
          <div className="mx-auto max-w-[1400px] px-6">
            <ScrollReveal>
              <p className="max-w-3xl font-heading text-[24px] font-medium leading-relaxed tracking-tight text-neutral-700 lg:text-[32px]">
                Sayaro is a laboratory equipment manufacturer and supplier
                delivering scientific infrastructure solutions for research,
                pharmaceutical, industrial, and educational laboratories across
                India.
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
        {/* 4. Vision & Mission                          */}
        {/* ============================================ */}
        <section className="py-16">
          <div className="mx-auto max-w-[1400px] px-6">
            <ScrollReveal>
              <div className="rounded-2xl bg-white p-8 lg:p-12">
                <blockquote className="max-w-2xl font-heading text-2xl italic leading-relaxed tracking-tight lg:text-3xl">
                  &ldquo;To provide safe, efficient, and modern laboratory
                  environments that support scientific research and industrial
                  development.&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-3">
                  <Image
                    src="/sites/resido/images/avatar-testimonial.jpg"
                    alt="M. Aravindh"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-heading text-sm font-medium">
                      M. Aravindh
                    </p>
                    <p className="text-sm text-neutral-500">Director, Sayaro</p>
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
        {/* 6. Capabilities                              */}
        {/* ============================================ */}
        <section className="py-20">
          <div className="mx-auto max-w-[1400px] px-6">
            <ScrollReveal>
              <SectionLabel>Capabilities</SectionLabel>
              <h3 className="mt-4 font-heading text-[28px] font-medium tracking-tight lg:text-[36px]">
                What sets Sayaro apart
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
              <SectionLabel>Why Sayaro</SectionLabel>
              <h3 className="mt-4 font-heading text-[28px] font-medium tracking-tight lg:text-[36px]">
                Choosing the right equipment partner
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
                          Generic Suppliers
                        </th>
                        <th className="px-6 py-4 font-heading text-sm font-medium text-neutral-500">
                          Online Marketplaces
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
                            Generic Suppliers
                          </span>
                          <p className="text-sm text-neutral-500">
                            {row.contractors}
                          </p>
                        </div>
                        <div className="rounded-lg p-3">
                          <span className="text-xs font-medium text-neutral-400">
                            Online Marketplaces
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
                  Request a Quote
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
