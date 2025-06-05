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
    <html lang="en" data-oid="vfqnnj5">
      <head data-oid="slycmbz"></head>
      <body
        className="relative min-h-screen overflow-x-hidden h-[529px]"
        data-oid="yd24mxz"
      >
        {children}
      </body>
    </html>
  );
}
