import { LenisWrapper } from "@/components/sites/resido/LenisWrapper";
import { Navbar } from "@/components/sites/resido/Navbar";
import { Footer } from "@/components/sites/resido/Footer";

export default function PrivacyPolicyPage() {
  return (
    <LenisWrapper>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="font-heading text-[36px] lg:text-[48px] font-medium tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-neutral-400 mt-2">
          Last updated: January 1, 2026
        </p>

        <article>
          <h2 className="font-heading text-xl font-medium tracking-tight mt-10 mb-4">
            Information We Collect
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            We collect information you provide directly, such as your name,
            email address, phone number, and equipment requirement details when
            you contact us through our website forms.
          </p>

          <h2 className="font-heading text-xl font-medium tracking-tight mt-10 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            We use your information to respond to enquiries, provide equipment
            quotations, communicate about orders and deliveries, and improve our
            services. We do not sell your personal information to third parties.
          </p>

          <h2 className="font-heading text-xl font-medium tracking-tight mt-10 mb-4">
            Data Security
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the internet is
            100% secure.
          </p>

          <h2 className="font-heading text-xl font-medium tracking-tight mt-10 mb-4">
            Cookies
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Our website may use cookies to enhance your browsing experience. You
            can control cookie settings through your browser preferences.
          </p>

          <h2 className="font-heading text-xl font-medium tracking-tight mt-10 mb-4">
            Your Rights
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            You have the right to access, correct, or delete your personal
            information. Contact us at thermalscientific2021@gmail.com to
            exercise these rights.
          </p>

          <h2 className="font-heading text-xl font-medium tracking-tight mt-10 mb-4">
            Contact Us
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            If you have questions about this privacy policy, please contact us
            at thermalscientific2021@gmail.com or visit our contact page.
          </p>
        </article>
      </main>
      <Footer />
    </LenisWrapper>
  );
}
