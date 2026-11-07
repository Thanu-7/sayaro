"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { PillButton } from "./PillButton";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const features = [
  {
    title: "Precision-Engineered Equipment",
    description:
      "Every instrument is built for accuracy, durability, and consistent performance across demanding laboratory applications.",
    icon: (
      <svg width="100" height="100" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="50" cy="60" r="38" />
        <circle cx="50" cy="60" r="26" />
        <circle cx="50" cy="60" r="12" fill="currentColor" />
        <line x1="74" y1="36" x2="100" y2="18" />
        <line x1="77" y1="42" x2="103" y2="27" />
        <line x1="79" y1="48" x2="105" y2="35" />
        <polygon points="100,14 103,22 95,20" fill="currentColor" stroke="none" />
        <polygon points="103,23 106,31 98,29" fill="currentColor" stroke="none" />
        <polygon points="105,31 108,39 100,37" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Configured to Your Requirements",
    description:
      "Equipment selected and configured around your application, capacity, temperature range, and laboratory workflow.",
    icon: (
      <svg width="100" height="100" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M25 70 Q35 50 50 55 Q55 56 58 60 L62 60 Q65 56 70 55 Q85 50 95 70" />
        <path d="M40 70 L40 85 M80 70 L80 85" />
        <circle cx="60" cy="45" r="8" />
        <path d="M52 45 L46 38 M68 45 L74 38" />
        <rect x="55" y="38" width="10" height="5" rx="1" />
        <path d="M38 85 Q60 95 82 85" strokeWidth="1.5" />
        <circle cx="90" cy="42" r="5" />
        <path d="M88 42 L86 44 M92 42 L94 44" strokeWidth="1" />
        <rect x="86" y="35" width="8" height="4" rx="1" />
      </svg>
    ),
  },
  {
    title: "Reliable Technical Support",
    description:
      "From initial enquiry through delivery and beyond — clear communication and responsive support at every stage.",
    icon: (
      <svg width="100" height="100" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 95 L50 55 L60 65 L100 25" />
        <polyline points="85,25 100,25 100,40" />
        <path d="M55 60 L55 35 L65 35 L65 60" fill="none" />
        <line x1="55" y1="42" x2="65" y2="42" />
        <line x1="55" y1="48" x2="65" y2="48" />
        <circle cx="60" cy="30" r="3" fill="currentColor" />
        <path d="M30 95 L45 75" strokeWidth="1.2" />
        <path d="M40 95 L52 78" strokeWidth="1.2" />
        <path d="M75 95 L85 65" strokeWidth="1.2" />
        <path d="M85 95 L92 70" strokeWidth="1.2" />
      </svg>
    ),
  },
];

export function WhyPartner() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Header — single row */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <SectionLabel>Why partner with Sayaro</SectionLabel>

          <h3 className="mx-auto text-center font-heading text-[24px] font-medium tracking-tight leading-tight lg:text-[36px]">
            <span className="text-black">
              We combine precision equipment, technical expertise,
            </span>{" "}
            <span className="text-neutral-400">
              and reliable support for laboratory success.
            </span>
          </h3>

          <PillButton variant="primary" href="/about" className="ml-auto">
            Learn More
            <span className="ml-1 text-lg leading-none">&rsaquo;</span>
          </PillButton>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-neutral-200 mt-8 mb-12" />

        {/* 3 feature cards — NO white bg */}
        <motion.div
          className="grid grid-cols-1 gap-10 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={staggerItem}>
              <div className="text-black mb-6">
                {feature.icon}
              </div>
              <h4 className="font-heading text-[22px] font-medium tracking-tight">
                {feature.title}
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
