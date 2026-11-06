"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { PillButton } from "./PillButton";

const tags = ["Concept", "Design", "Planning", "Permits"];

const smallServices = [
  {
    number: "/002",
    title: "Renovation",
    image: "/sites/resido/images/service-02.png",
  },
  {
    number: "/003",
    title: "Construction",
    image: "/sites/resido/images/service-03.png",
  },
  {
    number: "/004",
    title: "Architecture & Design",
    image: "/sites/resido/images/service-04.jpg",
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

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionLabel>Services</SectionLabel>
              <h2 className="mt-4 font-heading text-[40px] font-medium tracking-[-0.04em] lg:text-[60px]">
                Our Services
              </h2>
            </div>
            <PillButton href="/contact">Get Started</PillButton>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[380px_1fr]">
          {/* Left sidebar */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div className="rounded-2xl bg-white p-8">
                <div className="flex gap-8">
                  <div>
                    <h3 className="font-heading text-[48px] font-medium tracking-tight">
                      2x
                    </h3>
                    <p className="text-sm text-neutral-500">Business Growth</p>
                  </div>
                  <div>
                    <h3 className="font-heading text-[48px] font-medium tracking-tight">
                      5x
                    </h3>
                    <p className="text-sm text-neutral-500">Conversion Rate</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 }}
            >
              <div className="rounded-2xl bg-white p-8">
                <div className="mb-4 flex gap-1.5">
                  <span className="size-2 rounded-full bg-neutral-300" />
                  <span className="size-2 rounded-full bg-neutral-400" />
                  <span className="size-2 rounded-full bg-black" />
                </div>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Sayaro is very reliable at all times. We have enjoyed working
                  &amp; their designs are truly amazing, also noteworthy.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src="/sites/resido/images/avatar-testimonial.jpg"
                    alt="Michael Turner"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">Michael Turner</p>
                    <p className="text-xs text-neutral-500">Developer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div className="rounded-2xl bg-white p-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-neutral-100">
                    <Image
                      src="/sites/resido/images/service-01.png"
                      alt="Project Management"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h4 className="font-heading text-[24px] font-medium tracking-tight">
                        Project Management
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                        We create functional, well considered designs that
                        balance aesthetics, usability, and long term
                        performance.
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-black px-4 py-1.5 font-heading text-sm text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-6 grid gap-6 sm:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {smallServices.map((service) => (
                <motion.div
                  key={service.number}
                  className="rounded-2xl bg-white p-5"
                  variants={staggerItem}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 font-mono text-xs text-neutral-400">
                    {service.number}
                  </p>
                  <h4 className="mt-1 font-heading text-[16px] font-medium tracking-tight">
                    {service.title}
                  </h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
