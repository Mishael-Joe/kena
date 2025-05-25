import type React from "react";
// Root layout component
// This component wraps all pages and provides global styles and metadata
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

// Load Inter font for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Load Playfair Display for headings
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

// Define metadata for SEO
export const metadata: Metadata = {
  title: "Actionable Results, Delivered Fast",
  description: "Helping busy people grow their brand and income online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
