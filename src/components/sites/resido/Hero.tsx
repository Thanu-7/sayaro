"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PillButton } from "@/components/sites/resido/PillButton";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="w-full bg-[#f7f7f7] px-4 pt-4 lg:px-6 lg:pt-6">
      <div
        className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[24px] bg-[#047E9F]"
        style={{ minHeight: 600 }}
      >
        {/* Hero background image with slow zoom */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 14, ease: "easeOut" }}
        >
          <Image
            src="/sites/resido/images/hero.jpg"
            alt="Sayaro laboratory and scientific equipment"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Content */}
        <div className="relative flex min-h-[600px] flex-col justify-end p-6 pb-8 lg:h-[calc(100vh-120px)] lg:p-12 lg:pb-12">
          <motion.div
            className="max-w-[720px]"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUp}
              className="font-heading text-[36px] font-medium leading-[1.12] tracking-[-0.04em] text-white lg:text-[64px]"
            >
              Precision Equipment for
              <br />
              Laboratory Applications.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[540px] text-base leading-relaxed text-white/80 lg:text-lg"
            >
              Explore scientific and laboratory equipment from Sayaro —
              sterilization, incubation, thermal processing, airflow systems,
              and temperature-controlled baths for research, pharma, and
              industrial laboratories.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <PillButton href="/works" variant="secondary">
                Explore Our Products
                <span className="ml-1 text-lg leading-none">&rsaquo;</span>
              </PillButton>

              <PillButton href="/contact" variant="tertiary">
                Request a Quote
              </PillButton>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
