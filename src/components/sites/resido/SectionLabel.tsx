import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 font-mono text-sm tracking-tight",
        className
      )}
    >
      <span className="size-2 rounded-full bg-current" />
      <span>{children}</span>
    </div>
  );
}
