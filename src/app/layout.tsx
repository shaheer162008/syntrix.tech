import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={'https://www.googletagmanager.com/gtag/js?id=G-MMYK26YV53'}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MMYK26YV53');
            `,
          }}
        />
      </body>
    </html>
  );
}
