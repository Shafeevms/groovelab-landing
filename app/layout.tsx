import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://groovelab.app'),
  title: "GrooveLab — Drum practice & teaching tool",
  description: "Assign drum homework in notation, run live lessons, and track student progress — powered by an endless exercise generator. Start free.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "GrooveLab — Drum practice & teaching tool",
    description: "Assign drum homework in notation, run live lessons, and track student progress — powered by an endless exercise generator. Start free.",
    url: "https://groovelab.app",
    siteName: "GrooveLab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrooveLab — Drum practice & teaching tool",
    description: "Assign drum homework in notation, run live lessons, and track student progress — powered by an endless exercise generator. Start free.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#f5f5f5]">
        <LanguageProvider>
          {children}
          <Toaster position="top-center" richColors closeButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
