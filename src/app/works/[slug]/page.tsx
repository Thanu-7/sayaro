import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/sites/resido/Navbar";
import { Footer } from "@/components/sites/resido/Footer";
import { LenisWrapper } from "@/components/sites/resido/LenisWrapper";
import { LetsBuildTogether } from "@/components/sites/resido/LetsBuildTogether";
import { PillButton } from "@/components/sites/resido/PillButton";
import { projects } from "@/components/sites/resido/data";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0 mt-0.5"
    >
      <path
        d="M16.667 5L7.5 14.167 3.333 10"
        stroke="#16a34a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DotIcon() {
  return <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-neutral-400" />;
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 2);

  const fallbackRelated =
    relatedProjects.length < 2
      ? [
          ...relatedProjects,
          ...projects
            .filter(
              (p) =>
                p.slug !== project.slug &&
                !relatedProjects.some((r) => r.slug === p.slug)
            )
            .slice(0, 2 - relatedProjects.length),
        ]
      : relatedProjects;

  const quickFacts = [
    { label: "Product Family", value: project.year },
    { label: "Configuration", value: project.scope },
    { label: "Lead Time", value: project.timeline },
  ];

  const applications = project.approachText
    .split(/,\s*(?=and\s|[A-Z])|,\s+/)
    .map((s) => s.replace(/^and\s+/i, "").trim())
    .filter((s) => s.length > 0);

  return (
    <LenisWrapper>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-[#f7f7f7] pb-16 pt-32">
          <div className="mx-auto max-w-[1400px] px-6">
            <Link
              href="/works"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-neutral-400 hover:text-neutral-600 transition-colors"
            >
              <span>&larr;</span> All Products
            </Link>

            <h1 className="mt-6 font-heading text-[40px] font-medium tracking-[-0.04em] lg:text-[60px]">
              {project.title}
            </h1>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-neutral-500">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-black px-4 py-1.5 font-heading text-sm text-white">
                {project.year}
              </span>
              <span className="font-mono text-sm text-neutral-400">
                {project.location}
              </span>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-[1400px] px-6">
            {/* Product image */}
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Quick facts strip */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl bg-white p-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                    {fact.label}
                  </p>
                  <p className="mt-2 font-heading text-lg font-medium tracking-tight">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Overview */}
            <div className="mt-12 rounded-2xl bg-white p-8 lg:p-10">
              <h2 className="font-heading text-2xl font-medium tracking-tight">
                Overview
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-600">
                {project.overview}
              </p>
            </div>

            {/* Specs + Applications — two-column */}
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Key Specifications */}
              <div className="rounded-2xl bg-white p-8">
                <h3 className="font-heading text-xl font-medium tracking-tight">
                  Key Specifications
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  {project.materialsText}
                </p>
                <ul className="mt-6 space-y-3">
                  {project.materials.map((spec) => (
                    <li key={spec} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-sm text-neutral-700">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="rounded-2xl bg-white p-8">
                <h3 className="font-heading text-xl font-medium tracking-tight">
                  Ideal For
                </h3>
                <ul className="mt-6 space-y-4">
                  {applications.map((app) => (
                    <li key={app} className="flex items-start gap-3">
                      <DotIcon />
                      <span className="text-sm leading-relaxed text-neutral-600">
                        {app}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Inline CTA */}
            <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-[#f7f7f7] p-10 text-center">
              <h3 className="font-heading text-2xl font-medium tracking-tight">
                Interested in the {project.title}?
              </h3>
              <p className="text-sm text-neutral-500">
                Share your requirements and our team will get back to you.
              </p>
              <PillButton href="/contact" variant="primary">
                Request a Quote
              </PillButton>
            </div>

            {/* Related products */}
            <div className="mt-20">
              <h2 className="font-heading text-2xl font-medium tracking-tight">
                Related Products
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                {fallbackRelated.map((related) => (
                  <a
                    key={related.slug}
                    href={`/works/${related.slug}`}
                    className="group"
                  >
                    <div className="relative aspect-[5/3] overflow-hidden rounded-2xl">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <h4 className="mt-4 font-heading text-xl font-medium tracking-tight">
                      {related.title}
                    </h4>
                    <p className="mt-1 font-mono text-sm text-neutral-500">
                      {related.year}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <LetsBuildTogether />
      </main>

      <Footer />
    </LenisWrapper>
  );
}
