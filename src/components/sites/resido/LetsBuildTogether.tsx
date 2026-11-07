"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PillButton } from "./PillButton";
import { CEOCard } from "./CEOCard";

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 mt-0.5"
    >
      <path
        d="M16.667 5L7.5 14.167 3.333 10"
        stroke="#16a34a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LetsBuildTogether() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");

  const inputClasses =
    "w-full border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/10";

  return (
    <section className="py-20 max-w-[1400px] mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left column — image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-[500px]">
            <Image
              src="/sites/resido/images/footer-cta.png"
              alt="Sayaro laboratory equipment"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right column — two stacked cards */}
        <div className="flex flex-col gap-6">
          {/* Top card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="rounded-2xl bg-white p-8">
              <h2 className="font-heading text-[36px] lg:text-[48px] font-medium tracking-tight leading-tight">
                Let&apos;s Find the Right Equipment.
              </h2>

              <div className="mt-6 space-y-3">
                <div className="flex gap-2">
                  <CheckIcon />
                  <span className="text-sm">
                    Share your equipment, application, and technical requirements.
                  </span>
                </div>
                <div className="flex gap-2">
                  <CheckIcon />
                  <span className="text-sm">
                    Our team will review and respond within 24 hours.
                  </span>
                </div>
              </div>

              <hr className="border-divider my-6" />

              <CEOCard />
            </div>
          </motion.div>

          {/* Bottom card — form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="rounded-2xl bg-white p-8">
              <h3 className="font-heading text-xl font-medium tracking-tight">
                Have an equipment requirement? Let&apos;s get started
              </h3>
              <p className="text-sm text-neutral-500 mt-2 mb-6">
                Share the product, application, and technical details you need.
                We&apos;ll review your requirement and get back to you.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-4"
              >
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Equipment Requirement
                  </label>
                  <textarea
                    placeholder="Tell us the product, application, capacity, temperature range, and quantity you need..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    rows={4}
                    className={inputClasses}
                  />
                </div>

                <PillButton type="submit" variant="primary" className="w-full">
                  Send Enquiry
                </PillButton>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
