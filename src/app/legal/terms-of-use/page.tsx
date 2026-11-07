import { LenisWrapper } from "@/components/sites/resido/LenisWrapper";
import { Navbar } from "@/components/sites/resido/Navbar";
import { Footer } from "@/components/sites/resido/Footer";

export default function TermsOfUsePage() {
  return (
    <LenisWrapper>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="font-heading text-[36px] lg:text-[48px] font-medium tracking-tight">
          Terms of Use
        </h1>
        <p className="text-sm text-neutral-400 mt-2">
          Last updated: January 1, 2026
        </p>

        <article>
          <h2 className="font-heading text-xl font-medium tracking-tight mt-10 mb-4">
            Acceptance of Terms
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            By accessing and using this website, you agree to be bound by these
            terms of use. If you do not agree, please do not use our website.
          </p>

          <h2 className="font-heading text-xl font-medium tracking-tight mt-10 mb-4">
            Use of Website
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            This website is provided for informational purposes about our
            laboratory and scientific equipment products and services. You may
            not use this website for any unlawful purpose.
          </p>

          <h2 className="font-heading text-xl font-medium tracking-tight mt-10 mb-4">
            Intellectual Property
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            All content on this website, including text, images, designs, and
            logos, is the property of Sayaro Inc. and is protected by copyright
            laws. You may not reproduce or distribute any content without our
            written permission.
          </p>

          <h2 className="font-heading text-xl font-medium tracking-tight mt-10 mb-4">
            Project Inquiries
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Information submitted through our contact forms is used solely for
            the purpose of responding to your enquiry and providing
            equipment-related quotations and services.
          </p>

          <h2 className="font-heading text-xl font-medium tracking-tight mt-10 mb-4">
            Limitation of Liability
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Sayaro Inc. is not liable for any damages arising from your use of
            this website. All equipment orders and services are governed by
            separate contractual agreements.
          </p>

          <h2 className="font-heading text-xl font-medium tracking-tight mt-10 mb-4">
            Changes to Terms
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            We reserve the right to update these terms at any time. Continued
            use of the website constitutes acceptance of any changes.
          </p>

          <h2 className="font-heading text-xl font-medium tracking-tight mt-10 mb-4">
            Contact
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            For questions about these terms, contact us at
            thermalscientific2021@gmail.com.
          </p>
        </article>
      </main>
      <Footer />
    </LenisWrapper>
  );
}
