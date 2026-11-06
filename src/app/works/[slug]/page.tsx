import Image from "next/image";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/sites/resido/Navbar";
import { Footer } from "@/components/sites/resido/Footer";
import { LenisWrapper } from "@/components/sites/resido/LenisWrapper";
import { LetsBuildTogether } from "@/components/sites/resido/LetsBuildTogether";
import { projects } from "@/components/sites/resido/data";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
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
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  const metadata: { label: string; value: string }[] = [
    { label: "Location", value: project.location },
    { label: "Industry", value: project.industry },
    { label: "Scope", value: project.scope },
    { label: "Timeline", value: project.timeline },
    { label: "Year", value: project.year },
  ];

  return (
    <LenisWrapper>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-[#f7f7f7] pb-16 pt-32">
          <div className="mx-auto max-w-[1400px] px-6">
            <h1 className="font-heading text-[40px] font-medium tracking-[-0.04em] lg:text-[60px]">
              {project.title}
            </h1>
            <p className="mt-2 font-mono text-sm text-neutral-500">
              {project.location} · {project.year}
            </p>
          </div>
        </section>

        {/* Metadata grid */}
        <section className="py-20">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
              {metadata.map((item) => (
                <div key={item.label}>
                  <p className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                    {item.label}
                  </p>
                  <p className="mt-1 font-heading text-sm font-medium">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Overview card */}
            <div className="mt-16 rounded-2xl bg-white p-8">
              <p className="leading-relaxed text-neutral-600">
                {project.overview}
              </p>
            </div>

            {/* Materials & Approach */}
            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* Materials */}
              <div>
                <h3 className="font-heading text-2xl font-medium tracking-tight">
                  Materials
                </h3>
                <p className="mt-4 leading-relaxed text-neutral-600">
                  {project.materialsText}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.materials.map((material) => (
                    <span
                      key={material}
                      className="rounded-full bg-neutral-100 px-4 py-2 text-sm"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Approach */}
              <div>
                <h3 className="font-heading text-2xl font-medium tracking-tight">
                  Approach
                </h3>
                <p className="mt-4 leading-relaxed text-neutral-600">
                  {project.approachText}
                </p>
              </div>
            </div>

            {/* Before & After */}
            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* Before */}
              <div>
                <h3 className="font-heading text-2xl font-medium tracking-tight">
                  Before
                </h3>
                <p className="mt-4 leading-relaxed text-neutral-600">
                  {project.beforeAfter.before}
                </p>
              </div>

              {/* After */}
              <div>
                <h3 className="font-heading text-2xl font-medium tracking-tight">
                  After
                </h3>
                <p className="mt-4 leading-relaxed text-neutral-600">
                  {project.beforeAfter.after}
                </p>
              </div>
            </div>

            {/* Project image */}
            <div className="relative mt-16 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Related projects */}
            <div className="mt-20">
              <h2 className="font-heading text-2xl font-medium tracking-tight">
                Related Projects
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                {relatedProjects.map((related) => (
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
                      {related.year} · {related.location}
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
