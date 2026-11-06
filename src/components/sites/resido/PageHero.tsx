export function PageHero({
  label,
  title,
  subtitle,
}: {
  label?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-[#f7f7f7] pb-16 pt-12">
      <div className="mx-auto max-w-[1400px] px-6">
        {label && (
          <p className="mb-4 font-mono text-sm text-neutral-400">{label}</p>
        )}
        <h1 className="max-w-3xl font-heading text-[40px] font-medium leading-tight tracking-[-0.04em] lg:text-[64px]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-xl text-lg text-neutral-500">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
