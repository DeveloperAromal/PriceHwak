import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const APP_NAME = "next-pwa example";
const APP_DESCRIPTION = "This is an example of using next-pwa";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: "%s - PWA App",
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" className="background text-white">
      <body>{children}</body>
    </html>
  );
}
