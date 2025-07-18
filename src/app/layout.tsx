import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";

import { ModalProvider, QueryProvider, ThemeProvider } from "@/providers";

import "./globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { GlobalFooter, GlobalHeader } from "./components";

config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UniVLR - Ranking Universitário de Valorant",
  description: "Ranking Universitário de Valorant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ModalProvider>
              <GlobalHeader />

              {children}

              <GlobalFooter />
            </ModalProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
