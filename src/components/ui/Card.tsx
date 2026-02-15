import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/10 bg-neutral-900",
        className,
      )}
      {...props}
    />
  );
}

export function CardImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("aspect-video w-full overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-5", className)} {...props} />;
}
