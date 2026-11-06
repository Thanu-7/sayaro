"use client";

import { useState } from "react";
import { Navbar } from "@/components/sites/resido/Navbar";
import { Footer } from "@/components/sites/resido/Footer";
import { LenisWrapper } from "@/components/sites/resido/LenisWrapper";
import { PillButton } from "@/components/sites/resido/PillButton";
import { CEOCard } from "@/components/sites/resido/CEOCard";
import { FAQ } from "@/components/sites/resido/FAQ";

const offices = [
  {
    phone: "+43123600",
    tel: "+43123600",
    country: "Austria",
    address: "Wagramer Straße 94, 1220 Vienna",
  },
  {
    phone: "+3222293311",
    tel: "+3222293311",
    country: "Belgium",
    address: "Rue Royale 151, 1210 Brussels",
  },
  {
    phone: "+3222293311",
    tel: "+3222293311",
    country: "Croatia",
    address: "Ul. Grada Vukovara 72, 10000 Zagreb",
  },
  {
    phone: "+4533937733",
    tel: "+4533937733",
    country: "Denmark",
    address: "Nyhavn 14, 1051 Copenhagen",
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [consent, setConsent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <LenisWrapper>
      <Navbar />

      <main>
        <div className="mx-auto max-w-[1400px] px-6 py-16">
          {/* Top section: email + phone */}
          <section className="pt-16 pb-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-12">
              <div>
                <span className="block font-mono text-xs uppercase tracking-wider text-neutral-400">
                  Email
                </span>
                <a
                  href="mailto:hello@sayaro.inc"
                  className="font-heading text-lg font-medium transition-opacity hover:opacity-70"
                >
                  hello@sayaro.inc
                </a>
              </div>
              <div>
                <span className="block font-mono text-xs uppercase tracking-wider text-neutral-400">
                  Phone
                </span>
                <a
                  href="tel:+43123600"
                  className="font-heading text-lg font-medium transition-opacity hover:opacity-70"
                >
                  +43123600
                </a>
              </div>
            </div>
          </section>

          {/* Office cards */}
          <section className="py-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {offices.map((office) => (
                <div
                  key={office.country}
                  className="rounded-2xl bg-white p-6"
                >
                  <a
                    href={`tel:${office.tel}`}
                    className="font-heading text-lg font-medium transition-opacity hover:opacity-70"
                  >
                    {office.phone}
                  </a>
                  <h4 className="mt-4 font-heading text-base font-medium">
                    {office.country}
                  </h4>
                  <p className="mt-1 text-sm text-neutral-500">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA heading */}
          <section className="py-12">
            <h2 className="max-w-2xl font-heading text-[28px] font-medium tracking-tight lg:text-[36px]">
              Have a project idea? Reach out, and we&apos;ll find the best path.
            </h2>
          </section>

          {/* Contact form */}
          <section className="py-12">
            <div className="rounded-2xl bg-white p-8">
              <h3 className="mb-8 font-heading text-xl font-medium tracking-tight">
                Write to us
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-xs uppercase tracking-wider text-neutral-400"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Cooper"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition-colors focus:border-neutral-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-xs uppercase tracking-wider text-neutral-400"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="hello@site.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition-colors focus:border-neutral-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="details"
                    className="mb-2 block font-mono text-xs uppercase tracking-wider text-neutral-400"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    placeholder="Tell us more about your idea.."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    rows={5}
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none transition-colors focus:border-neutral-400"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 size-4 rounded border-neutral-300"
                  />
                  <label htmlFor="consent" className="text-sm text-neutral-500">
                    By clicking the Submit button you agree to our{" "}
                    <a
                      href="/legal/privacy-policy"
                      className="underline hover:text-neutral-800"
                    >
                      Privacy Policy
                    </a>{" "}
                    &amp;{" "}
                    <a
                      href="/legal/terms-of-use"
                      className="underline hover:text-neutral-800"
                    >
                      Terms
                    </a>
                  </label>
                </div>

                <PillButton
                  variant="primary"
                  type="submit"
                  className="w-full"
                >
                  Send Message
                </PillButton>
              </form>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12">
            <FAQ />
          </section>

          {/* CEO Card */}
          <section className="py-12">
            <div className="rounded-2xl bg-white p-8">
              <CEOCard />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </LenisWrapper>
  );
}
