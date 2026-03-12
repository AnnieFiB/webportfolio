import type { Metadata } from "next";

import "./globals.css";
import { getLatestSettings } from "@/lib/getSettings";
import { PREVIEW_IMAGE } from "@/lib/constants";
import { Masthead } from "./_components/masthead";
import { Sidebar } from "./_components/sidebar";

const { userName, userIntro } = getLatestSettings();

export const metadata: Metadata = {
  title: `Portfolio | ${userName}`,
  description: userIntro,
  openGraph: {
    images: [PREVIEW_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#fff" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className="min-h-screen bg-[var(--color-mm-bg)] text-[var(--color-mm-dark)]"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", Arial, sans-serif',
        }}
      >
        <div className="min-h-screen flex flex-col">
          <Masthead />
          <div className="flex flex-1 flex-col lg:flex-row max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <Sidebar />
            <main className="flex-1 min-w-0 py-8 lg:pl-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
