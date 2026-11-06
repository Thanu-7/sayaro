"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CEOCard } from "./CEOCard";

const faqs = [
  {
    question: "What types of projects do you work on?",
    answer:
      "We work on residential and commercial projects, including new builds, renovations, and upgrades. Each project is approached based on its specific goals and requirements.",
  },
  {
    question: "Do you handle both design and construction?",
    answer:
      "Yes. We provide architecture, construction, and renovation services under one team, ensuring a coordinated process from early design through final delivery.",
  },
  {
    question: "How involved will I be during the project?",
    answer:
      "We work closely with clients throughout the project. You'll be involved at key milestones, with regular updates and clear opportunities for feedback and decisions.",
  },
  {
    question: "Do you help with permits and approvals?",
    answer:
      "Yes. We assist with required permits and regulatory approvals as part of our project management service, keeping the process on track.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary based on scope and complexity. We provide a detailed schedule during the planning phase and keep you informed of progress throughout.",
  },
];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div>
            <h3 className="font-heading text-[28px] font-medium tracking-tight leading-tight lg:text-[36px]">
              Frequently Asked
              <br />
              Questions
            </h3>
            <p className="mt-4 text-sm text-neutral-500">
              Questions? We have answers. Here&apos;s what you need to know about
              working with us.
            </p>
            <p className="mt-8 text-sm text-neutral-500">
              Need to ask something else?
            </p>
            <div className="mt-4">
              <CEOCard />
            </div>
          </div>
        </motion.div>

        {/* Right column — Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="mb-3 rounded-2xl bg-white"
              >
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between p-6"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                >
                  <h6 className="text-left font-heading text-base font-medium tracking-tight">
                    {faq.question}
                  </h6>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-neutral-500">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
