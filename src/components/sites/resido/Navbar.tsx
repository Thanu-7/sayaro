"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Products", href: "/works" },
  { label: "Why Sayaro", href: "/#why-sayaro" },
  { label: "Contact", href: "/contact" },
];

const panelLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/works" },
  { label: "Why Sayaro", href: "/#why-sayaro" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { letters: "IM", separator: "", href: "https://www.indiamart.com/thermalscientificinstruments" },
];

const navStaggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const navStaggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/90 backdrop-blur-md"
      )}
    >
      <nav className="mx-auto flex h-[84px] max-w-[1400px] items-center px-6 lg:px-10">
        <Link
          href="/"
          className="font-heading text-xl font-medium tracking-tight"
        >
          Sayaro.Inc
          <sup className="ml-0.5 text-[10px] font-normal align-super">™</sup>
        </Link>

        <motion.ul
          className="hidden lg:flex items-center gap-8 mx-auto"
          variants={navStaggerContainer}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => (
            <motion.li key={link.label} variants={navStaggerItem}>
              <Link
                href={link.href}
                className="font-heading text-lg font-normal tracking-tight"
                style={{ letterSpacing: "-0.72px" }}
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <button
          type="button"
          className="relative z-50 ml-auto flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={cn(
              "block h-[2px] w-6 bg-black transition-transform duration-300",
              menuOpen && "translate-y-[7px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-[2px] w-6 bg-black transition-opacity duration-300",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-[2px] w-6 bg-black transition-transform duration-300",
              menuOpen && "-translate-y-[7px] -rotate-45"
            )}
          />
        </button>
      </nav>

      {/* Dropdown panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="overflow-hidden bg-white border-b border-neutral-100"
          >
            <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-8">
              {/* Nav links — horizontal row */}
              <div className="flex flex-wrap gap-6 lg:gap-10">
                {panelLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-heading text-[28px] lg:text-[36px] font-medium tracking-tight hover:opacity-60 transition-opacity"
                    style={{ letterSpacing: "-1px" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Newsletter row */}
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <p className="text-sm text-neutral-500">
                  Stay Updated on Our Latest Equipment
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="rounded-full border border-neutral-200 px-5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 w-[220px]"
                  />
                  <button className="rounded-full bg-black px-5 py-2.5 text-sm font-heading font-medium text-white hover:opacity-80 transition-opacity">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Contact + socials row */}
              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
                <a
                  href="mailto:thermalscientific2021@gmail.com"
                  className="font-heading hover:opacity-60 transition-opacity"
                >
                  thermalscientific2021@gmail.com
                </a>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading hover:opacity-60 transition-opacity"
                    >
                      {social.letters}
                      {social.separator && (
                        <span className="text-neutral-400 ml-1">
                          {social.separator}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
