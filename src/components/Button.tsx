import type React from "react";
import { cn } from "../utils/cn";

export function Button({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      className={cn(
        "text-brand-500 hover:text-white border border-brand-500 hover:bg-linear-to-b hover:from-brand-500 hover:to-brand-700 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center transition duration-150 ease-in cursor-pointer shadow-btn flex items-center gap-1",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
