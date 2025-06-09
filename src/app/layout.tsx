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
