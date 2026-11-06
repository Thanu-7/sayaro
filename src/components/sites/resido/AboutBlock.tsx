"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { SectionLabel } from "@/components/sites/resido/SectionLabel";

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
    <div ref={ref} className="font-heading text-[48px] lg:text-[60px] font-medium tracking-tight leading-none">
      {value.toLocaleString()}
      {suffix}
    </div>
  );
}

const counters = [
  { index: "/01", target: 50, suffix: "+", desc: "Successful\nprojects completed" },
  { index: "/02", target: 98, suffix: "%", desc: "Client satisfaction\nin post-project reviews." },
  { index: "/04", target: 2016, suffix: "", desc: "Founded, 9 years\nof experience." },
] as const;

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

export function AboutBlock() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <SectionLabel>Built on experience and craft</SectionLabel>
        </motion.div>

        <div className="mt-10 flex flex-col lg:flex-row gap-10 lg:gap-16">
          <motion.div
            className="lg:w-[45%]"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="flex items-center gap-6">
              <blockquote className="font-heading text-[18px] lg:text-[22px] font-medium tracking-tight leading-snug">
                &ldquo;A smooth process from start to finish. Highly
                professional team!&rdquo;
              </blockquote>
              <div className="h-16 w-px bg-neutral-300 shrink-0" />
              <div className="flex items-center gap-3 shrink-0">
                <Image
                  src="/sites/resido/images/avatar-2.jpg"
                  alt="Alisson Backer"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-heading text-sm font-medium">Alisson Backer</p>
                  <p className="text-xs text-neutral-500">Builder, Railspeed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-[55%]"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <h3 className="font-heading text-[28px] lg:text-[42px] font-medium tracking-tight leading-[1.15]">
              <span className="text-black">
                We deliver architecture and renovation projects focused on quality.
              </span>{" "}
              <span className="text-neutral-400">
                Our work blends design with expertise.
              </span>
            </h3>

            <div className="mt-8 flex items-center gap-6">
              <div className="relative w-[140px] h-[100px] overflow-hidden rounded-xl shrink-0">
                <Image
                  src="/sites/resido/images/about-service.jpg"
                  alt="About our service"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="size-10 rounded-full bg-white/80 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="black">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-neutral-500 text-[15px] leading-relaxed">
                We collaborate with clients to ensure every project meets their
                goals, budget, and timeline.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {counters.map((c) => (
            <motion.div
              key={c.index}
              className="rounded-2xl bg-white p-8"
              variants={staggerItem}
            >
              <span className="font-mono text-sm text-neutral-400">
                {c.index}
              </span>
              <div className="mt-6">
                <AnimatedCounter target={c.target} suffix={c.suffix} />
              </div>
              <p className="mt-4 text-sm text-neutral-500 whitespace-pre-line leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
