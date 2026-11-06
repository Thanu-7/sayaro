"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const cardHover = {
  y: -6,
  transition: { type: "spring" as const, stiffness: 300, damping: 20 },
};

const posts = [
  {
    title: "Our Design Philosophy",
    readTime: "10 min read",
    excerpt:
      "Learn about our approach to taking projects from initial idea to successful completion. Evolving needs of their occupants.",
    image: "/sites/resido/images/blog-philosophy.png",
    href: "/blogs/our-design-philosophy",
  },
  {
    title: "Smart Home Renovations",
    readTime: "6 min read",
    excerpt:
      "Important factors to consider before you begin your next renovation. The durability and longevity of architectural designs stem from a combination of careful planning, strategic selection of materials",
    image: "/sites/resido/images/blog-renovations.jpg",
    href: "/blogs/smart-home-renovations",
  },
  {
    title: "Enduring Home Design",
    readTime: "8 min read",
    excerpt:
      "How to create spaces that stand the test of time with smart design and quality materials. When function guides form, the result remains relevant far longer.",
    image: "/sites/resido/images/blog-enduring.png",
    href: "/blogs/enduring-home-design",
  },
];

export function BlogInsights() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel className="mb-4">Blog</SectionLabel>
              <h2 className="font-heading text-[48px] font-medium tracking-[-0.04em] lg:text-[60px]">
                Insights
              </h2>
            </div>
            <a
              href="/blogs"
              className="font-heading text-sm underline"
            >
              Read our Blog
            </a>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {posts.map((post) => (
            <motion.a
              key={post.title}
              href={post.href}
              className="group block"
              variants={staggerItem}
              whileHover={cardHover}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <span className="font-mono text-xs text-neutral-400">
                  {post.readTime}
                </span>
                <h4 className="mt-2 font-heading text-lg font-medium tracking-tight">
                  {post.title}
                </h4>
                <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-neutral-500">
                  {post.excerpt}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
