import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hasPointer, setHasPointer] = useState(false);

  // Always call useMotionTemplate before any conditional returns
  const background = useMotionTemplate`
    radial-gradient(500px circle at ${cursorX}px ${cursorY}px,
      rgba(124, 160, 249, 0.08), transparent 80%)
  `;

  useEffect(() => {
    const hasPointerDevice = window.matchMedia("(pointer: fine)").matches;
    setHasPointer(hasPointerDevice);

    if (!hasPointerDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!hasPointer) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        background,
      }}
    />
  );
}
