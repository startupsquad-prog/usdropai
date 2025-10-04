import { cn } from "@/lib/utils";

interface ExampleCardProps {
  title: string;
  description?: string;
  className?: string;
}

export function ExampleCard({
  title,
  description,
  className,
}: ExampleCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-6 shadow-sm",
        className
      )}
    >
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      {description && (
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

