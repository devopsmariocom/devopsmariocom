import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevOpsMario",
  description: "DevOps consulting for businesses ready to level up",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-oid="pa:-xpv">
      <head data-oid="4:pna89"></head>
      <body
        className="relative min-h-screen overflow-x-hidden h-[529px]"
        data-oid="gghw949"
      >
        {children}
      </body>
    </html>
  );
}
