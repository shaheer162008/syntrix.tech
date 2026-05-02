import type { Metadata } from "next";
import localFont from "next/font/local";
import "@fontsource/geist-sans";
import "@fontsource/geist-mono";
import "./globals.css";
import { homeMetadata } from "@/metadata";
import { FloatingButtons } from "@/components/ui/floating-buttons";

const neganFont = localFont({
  src: "../../public/font/Negan.otf",
  variable: "--font-negan",
});

export const metadata: Metadata = homeMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${neganFont.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-background text-foreground">
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
