"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/sites/resido/Navbar";
import { Footer } from "@/components/sites/resido/Footer";
import { LenisWrapper } from "@/components/sites/resido/LenisWrapper";
import { SectionLabel } from "@/components/sites/resido/SectionLabel";
import { PillButton } from "@/components/sites/resido/PillButton";
import { LetsBuildTogether } from "@/components/sites/resido/LetsBuildTogether";
import { projects } from "@/components/sites/resido/data";
import type { Project } from "@/components/sites/resido/data";

const filters = ["All Products", "Sterilization", "Life Science", "Thermal & Industrial", "Safety & Airflow", "Thermal Baths"] as const;

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All Products");

  const filteredProjects: Project[] =
    activeFilter === "All Products"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <LenisWrapper>
      <Navbar />

      <main>
        {/* Header section */}
        <section className="pt-32 pb-16">
          <div className="mx-auto max-w-[1400px] px-6">
            <SectionLabel>Our Products</SectionLabel>

            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h1 className="font-heading text-[40px] font-medium tracking-[-0.04em] lg:text-[60px]">
                  Products
                </h1>
                <p className="mt-4 text-lg text-neutral-500">
                  Explore our range of laboratory and scientific equipment across
                  sterilization, life science, and thermal processing.
                </p>
              </div>

              <PillButton variant="primary" href="/contact">
                Request a Quote
              </PillButton>
            </div>
          </div>
        </section>

        {/* Filter tabs + Project grid */}
        <section className="py-20">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="mb-12 flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-[70px] px-[30px] py-[10px] text-sm font-heading font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-neutral-50"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Project grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {filteredProjects.map((project) => (
                <a
                  key={project.slug}
                  href={`/works/${project.slug}`}
                  className="group block rounded-[15px] bg-white p-2"
                >
                  <div className="relative aspect-[7/4] overflow-hidden rounded-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="px-2 pt-6 pb-3">
                    <h4 className="font-heading text-xl font-medium tracking-tight">
                      {project.title}
                    </h4>
                    <p className="mt-1.5 font-mono text-[16px] text-[#707070]">
                      {project.year} · {project.location}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <LetsBuildTogether />
      </main>

      <Footer />
    </LenisWrapper>
  );
}
