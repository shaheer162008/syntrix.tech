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
      suppressHydrationWarning
    >
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NDP693FL');
          `}
        </Script>
      </head>
      <body 
        className="min-h-full flex flex-col overflow-x-hidden bg-background text-foreground"
        suppressHydrationWarning
      >
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-NDP693FL"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
