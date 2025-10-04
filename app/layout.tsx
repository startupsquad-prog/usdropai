import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { QueryProvider } from "@/lib/providers/query-provider";
import { Footer } from "@/components/shared/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "USDrop - Your Dropshipping Empire Starts Here",
  description: "AI-powered dropshipping platform. Find winning products, import instantly, and scale your business faster than ever.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${GeistSans.className} antialiased`}
        suppressHydrationWarning
      >
        <QueryProvider>
          <main>{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}

