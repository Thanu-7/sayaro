"use client";

import { motion } from "framer-motion";
import { AvatarStack } from "@/components/sites/resido/AvatarStack";

const brands = [
  "Structura",
  "Pinewood",
  "Whitfield",
  "Apex Group",
  "Landmark",
];

export function TrustMarquee() {
  return (
    <section className="bg-white py-6 border-y border-divider">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Top row */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="font-sans text-sm text-neutral-500">
              Trusted by property teams
            </span>
            <AvatarStack size={28} />
            <span className="font-sans text-sm text-neutral-500">
              Used by 60+ developers &amp; builders
            </span>
          </div>
        </motion.div>

        {/* Logo marquee */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 }}
        >
          <div className="overflow-hidden">
            <div className="flex w-max gap-12 animate-marquee">
              {[...brands, ...brands].map((name, i) => (
                <span
                  key={i}
                  className="font-heading font-medium text-xl text-neutral-300 whitespace-nowrap"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
