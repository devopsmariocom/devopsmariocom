import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevOpsMario — Power Up Your Infrastructure",
  description: "Scalable systems, automated workflows, and real-world DevOps mentoring. Book your free 30-minute session today",
  openGraph: {
    title: "DevOpsMario — Power Up Your Infrastructure",
    description: "Scalable systems, automated workflows, and real-world DevOps mentoring. Book your free 30-minute session today.",
    images: ["https://devopsmario.com/preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOpsMario — Power Up Your Infrastructure",
    description: "Scalable systems, automated workflows, and real-world DevOps mentoring. Book your free 30-minute session today.",
    images: ["https://devopsmario.com/preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-oid="mgts_tb">
      <head data-oid="1buvo0x"></head>
      <body
        className="relative min-h-screen overflow-x-hidden h-[529px]"
        data-oid="3_:ofwc"
      >
        {children}
      </body>
    </html>
  );
}
