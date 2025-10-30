import type React from "react";
import { cn } from "../utils/cn";

export function Link({
  children,
  className,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      className={cn(
        "text-[#7ca0f9] hover:text-white border border-[#7ca0f9] hover:bg-linear-to-b hover:from-[#7ca0f9] hover:to-[#375198] focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center transition duration-150 ease-in cursor-pointer btn-shadow flex items-center gap-1",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
