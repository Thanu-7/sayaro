"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    letters: ["I", "G"],
    separator: "/",
    href: "https://www.instagram.com/",
  },
  {
    letters: ["D", "R"],
    separator: "/",
    href: "https://www.dribbble.com/",
  },
  {
    letters: ["B", "E"],
    separator: "/",
    href: "https://www.behance.net/",
  },
  {
    letters: ["X"],
    separator: "",
    href: "https://www.x.com/",
  },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="max-w-[1400px] mx-auto px-6 py-16">
      {/* Top section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className="relative"
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Logo */}
          <div className="shrink-0">
            <span className="font-heading text-[48px] lg:text-[64px] font-medium tracking-tight leading-none">
              Sayaro.Inc<sup className="text-[0.45em] align-super">&trade;</sup>
            </span>
          </div>

          {/* Navigation + Socials columns */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 lg:pr-16">
            {/* Navigation */}
            <div>
              <p className="text-sm text-neutral-400 mb-4">Navigation</p>
              <ul className="flex flex-wrap gap-4 lg:gap-6">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-heading text-[15px] tracking-tight hover:opacity-70 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div>
              <p className="text-sm text-neutral-400 mb-4">Socials</p>
              <ul className="flex flex-wrap gap-3 lg:gap-4">
                {socialLinks.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-[15px] tracking-tight flex gap-1 hover:opacity-70 transition-opacity"
                    >
                      {social.letters.map((letter) => (
                        <span key={letter}>{letter}</span>
                      ))}
                      {social.separator && (
                        <span className="text-neutral-400 ml-1">
                          {social.separator}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-0 right-0 size-12 flex items-center justify-center rounded-full bg-black text-white hover:opacity-80 transition-opacity"
          aria-label="Back to top"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 16V4m0 0-5 5m5-5 5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </motion.div>

      {/* Divider */}
      <hr className="border-t border-neutral-200 my-10" />

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1] as const,
        }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <span>
            Built in{" "}
            <a
              href="https://www.framer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-black transition-colors"
            >
              Framer
            </a>
          </span>
          <span>&copy;2026 Sayaro.Inc.&trade; All rights reserved.</span>
          <div className="flex gap-4">
            <Link
              href="/legal/privacy-policy"
              className="font-heading text-sm text-neutral-400 hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms-of-use"
              className="font-heading text-sm text-neutral-400 hover:text-black transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
