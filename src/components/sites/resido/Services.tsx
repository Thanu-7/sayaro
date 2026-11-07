"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { PillButton } from "./PillButton";

const tags = ["Autoclaves", "Sterilizers", "Hospital", "Triple-Wall"];

const smallServices = [
  {
    number: "/002",
    title: "Life Science & Research",
    image: "/sites/resido/images/service-02.png",
    href: "/works/bod-incubator",
  },
  {
    number: "/003",
    title: "Thermal & Industrial Processing",
    image: "/sites/resido/images/service-03.png",
    href: "/works/muffle-furnace-1200c",
  },
  {
    number: "/004",
    title: "Laboratory Safety & Airflow",
    image: "/sites/resido/images/service-04.jpg",
    href: "/works/fume-hood",
  },
  {
    number: "/005",
    title: "Thermal Bath & Agitation",
    image: "/sites/resido/images/service-02.png",
    href: "/works/constant-temperature-water-bath",
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
    <section id="products" className="py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionLabel>Products</SectionLabel>
              <h2 className="mt-4 font-heading text-[40px] font-medium tracking-[-0.04em] lg:text-[60px]">
                Our Products
              </h2>
            </div>
            <PillButton href="/contact">Request a Quote</PillButton>
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
                      5
                    </h3>
                    <p className="text-sm text-neutral-500">Product Families</p>
                  </div>
                  <div>
                    <h3 className="font-heading text-[48px] font-medium tracking-tight">
                      40+
                    </h3>
                    <p className="text-sm text-neutral-500">Equipment Models</p>
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
                  Delivering precision-engineered laboratory solutions with
                  quality, reliability, and technical excellence.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src="/sites/resido/images/avatar-testimonial.jpg"
                    alt="M. Aravindh"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">M. Aravindh</p>
                    <p className="text-xs text-neutral-500">Sayaro</p>
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
              <a href="/works/vertical-autoclave" className="block rounded-2xl bg-white p-6 transition-opacity hover:opacity-90">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-neutral-100">
                    <Image
                      src="/sites/resido/images/service-01.png"
                      alt="Sterilization & Decontamination"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h4 className="font-heading text-[24px] font-medium tracking-tight">
                        Sterilization & Decontamination
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                        Equipment for laboratory and healthcare sterilization
                        workflows — bucket type, portable, vertical, and
                        horizontal autoclaves, hospital sterilizers, and
                        triple-wall sterilizers.
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
              </a>
            </motion.div>

            <motion.div
              className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {smallServices.map((service) => (
                <motion.div
                  key={service.number}
                  variants={staggerItem}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                >
                  <a href={service.href} className="block rounded-2xl bg-white p-5">
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
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
