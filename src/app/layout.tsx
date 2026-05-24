import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageGuard from "@/components/PageGuard";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], weight: ["400", "600", "700", "800", "900"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "COMSNETS 2027",
  description: "The 19th International Conference on COMmunication Systems & NETworkS. January 5 - 9, 2027 in Bangalore, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow legacy-main hp">
          <PageGuard>
            {children}
          </PageGuard>
        </main>
        <Footer />
      </body>
    </html>
  );
}
