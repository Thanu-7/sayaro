"use client";

import { motion } from "framer-motion";
import { PillButton } from "@/components/sites/resido/PillButton";

const offices = [
  { phone: "+91 9952204307", tel: "+919952204307", country: "Head Office", address: "Bavani Amman Kovil, No:4,\n1st Street, Manimedu, Thandalam,\nChennai-600122" },
  { phone: "+91 9952204307", tel: "+919952204307", country: "Phone", address: "Mon – Sat\n9:00 AM – 6:00 PM IST" },
  { phone: "+91 9952204307", tel: "+919952204307", country: "Email", address: "thermalscientific2021\n@gmail.com" },
  { phone: "+91 9952204307", tel: "+919952204307", country: "Online", address: "indiamart.com/\nthermalscientificinstruments" },
];

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 6L2 7" />
    </svg>
  );
}

export function ContactCTA() {
  return (
    <section className="py-20 bg-[#f7f7f7]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
          {/* Left — heading + offices */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <h3 className="font-heading text-[32px] lg:text-[40px] font-medium tracking-tight">
                <span className="text-black">Need Laboratory Equipment?</span>{" "}
                <span className="text-neutral-400">Let&apos;s Talk</span>
              </h3>
              <p className="text-neutral-500 mt-3">
                Share your requirements and we&apos;ll follow up.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mt-12"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            >
              {offices.map((office) => (
                <div key={office.country}>
                  <a
                    href={`tel:${office.tel}`}
                    className="inline-flex items-center gap-2 font-heading text-[16px] font-medium tracking-tight hover:opacity-70 transition-opacity"
                  >
                    <PhoneIcon />
                    {office.phone}
                  </a>
                  <div className="h-px bg-neutral-200 my-5" />
                  <h4 className="font-heading text-[20px] font-medium">
                    {office.country}
                  </h4>
                  <p className="text-sm text-neutral-500 mt-2 leading-relaxed whitespace-pre-line">
                    {office.address}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Business Inquiry card */}
          <motion.div
            className="rounded-2xl bg-white p-8 h-fit lg:sticky lg:top-[100px]"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <h5 className="font-heading text-[22px] font-medium tracking-tight">
              Business Inquiry
            </h5>

            <div className="mt-6 space-y-4">
              <div>
                <span className="text-sm text-neutral-400 block mb-1">Email</span>
                <a
                  href="mailto:thermalscientific2021@gmail.com"
                  className="inline-flex items-center gap-2 font-heading text-sm hover:opacity-70 transition-opacity"
                >
                  <MailIcon />
                  thermalscientific2021@gmail.com
                </a>
              </div>
              <div>
                <span className="text-sm text-neutral-400 block mb-1">Support</span>
                <a
                  href="mailto:thermalscientific2021@gmail.com"
                  className="inline-flex items-center gap-2 font-heading text-sm hover:opacity-70 transition-opacity"
                >
                  <MailIcon />
                  thermalscientific2021@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-8">
              <PillButton variant="primary" href="/contact" className="w-full justify-center">
                Get in Touch
                <span className="ml-1 text-lg leading-none">&rsaquo;</span>
              </PillButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
