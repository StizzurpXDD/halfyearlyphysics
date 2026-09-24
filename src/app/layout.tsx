import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NavigationProgress } from "@/components/NavigationProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Class 11 Physics | Derivations & Formulas Compendium",
  description: "Comprehensive, step-by-step Class 11 Physics derivations, formula sheets, and key conceptual notes designed with precision.",
};

export const viewport: Viewport = {
  width: 1280,
  minimumScale: 0.1,
  maximumScale: 5.0,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function fitDesktop() {
                  var targetWidth = 1280;
                  var screenWidth = window.screen.width;
                  if (screenWidth < targetWidth) {
                    var scale = screenWidth / targetWidth;
                    var meta = document.querySelector('meta[name="viewport"]');
                    if (!meta) {
                      meta = document.createElement('meta');
                      meta.name = 'viewport';
                      document.head.appendChild(meta);
                    }
                    meta.setAttribute('content', 'width=' + targetWidth + ', initial-scale=' + scale + ', minimum-scale=' + (scale * 0.5) + ', maximum-scale=5.0, user-scalable=yes');
                  }
                }
                fitDesktop();
                window.addEventListener('orientationchange', fitDesktop);
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#09090b] text-zinc-100 selection:bg-cyan-500/25 selection:text-cyan-200">
        <NavigationProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
