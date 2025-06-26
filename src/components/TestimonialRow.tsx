import { ReactNode } from "react";

interface TestimonialRowProps {
  position: "left" | "right";
  children: ReactNode;
}

export default function TestimonialRow({
  position,
  children,
}: TestimonialRowProps) {
  return (
    <div
      className={`w-full flex ${position === "left" ? "justify-start" : "justify-end"} my-12`}
      data-oid="5107t6d"
    >
      {children}
    </div>
  );
}
