"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const textCards = [
  {
    title: "Precision Engineering",
    description: "Advanced engineering solutions designed for accuracy, durability, and high operational performance across all laboratory applications.",
    icon: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="55" cy="60" r="42" />
        <circle cx="55" cy="60" r="30" />
        <circle cx="55" cy="60" r="16" fill="currentColor" />
        <line x1="80" y1="35" x2="105" y2="18" />
        <line x1="83" y1="40" x2="108" y2="26" />
        <line x1="85" y1="46" x2="110" y2="34" />
        <polygon points="105,14 108,22 100,20" fill="currentColor" stroke="none" />
        <polygon points="108,22 111,30 103,28" fill="currentColor" stroke="none" />
        <polygon points="110,30 113,38 105,36" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Custom Manufacturing",
    description: "Laboratory equipment tailored to your industry-specific requirements — capacity, dimensions, temperature range, and configuration.",
    icon: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="15" y="25" width="42" height="42" rx="6" fill="currentColor" />
        <rect x="63" y="25" width="42" height="42" rx="6" />
        <path d="M57 38 h6 M60 35 v6" strokeWidth="2.5" />
        <rect x="20" y="78" width="14" height="14" rx="3" />
        <rect x="40" y="78" width="14" height="14" rx="3" />
        <rect x="66" y="78" width="14" height="14" rx="3" />
        <rect x="86" y="78" width="14" height="14" rx="3" />
      </svg>
    ),
  },
  {
    title: "Quality Assurance",
    description: "Strict quality control procedures ensuring reliable performance and consistent product standards across every instrument we deliver.",
    icon: (
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="22" y="12" width="62" height="82" rx="6" />
        <rect x="32" y="6" width="42" height="10" rx="3" />
        <line x1="36" y1="36" x2="72" y2="36" />
        <line x1="36" y1="48" x2="72" y2="48" />
        <line x1="36" y1="60" x2="58" y2="60" />
        <circle cx="42" cy="74" r="7" />
        <path d="M39 74 l3 3 5-6" strokeWidth="2" />
        <circle cx="90" cy="35" r="14" />
        <path d="M86 35 l4 4 6-8" strokeWidth="2" />
      </svg>
    ),
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-sayaro" className="py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <SectionLabel>Why Sayaro</SectionLabel>
          <h3 className="mt-4 max-w-3xl font-heading text-[24px] font-medium leading-tight tracking-tight lg:text-[40px]">
            <span className="text-black">
              We combine precision engineering, custom manufacturing,
            </span>{" "}
            <span className="text-neutral-400">
              and strict quality assurance to deliver laboratory equipment you can rely on.
            </span>
          </h3>
        </motion.div>

        {/* Row 1 — 3 text cards with large illustration icons */}
        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {textCards.map((card) => (
            <motion.div
              key={card.title}
              variants={staggerItem}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <div className="flex h-full min-h-[360px] flex-col rounded-2xl bg-white border border-neutral-100 p-8">
                <div className="flex flex-1 items-center justify-center text-black">
                  {card.icon}
                </div>
                <div className="mt-auto pt-6">
                  <h4 className="font-heading text-[20px] font-medium tracking-tight">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Row 2 — 2 image cards with overlay text */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[3fr_2fr]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
          >
            <div className="relative overflow-hidden rounded-2xl h-[320px] lg:h-[380px]">
              <Image
                src="/sites/resido/images/bento-quality.png"
                alt="Experienced Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="font-heading text-[22px] font-medium tracking-tight text-white">
                  Experienced Team
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-white/80 max-w-sm">
                  Skilled professionals with deep expertise in laboratory
                  engineering, manufacturing, and scientific infrastructure
                  solutions.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
          >
            <div className="relative overflow-hidden rounded-2xl h-[320px] lg:h-[380px]">
              <Image
                src="/sites/resido/images/bento-longterm.png"
                alt="End-to-End Support"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="font-heading text-[22px] font-medium tracking-tight text-white">
                  End-to-End Support
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-white/80 max-w-sm">
                  From design and fabrication to installation and ongoing
                  support — complete laboratory solutions under one roof.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
