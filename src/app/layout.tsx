import "@/styles/globals.css";

import { Bricolage_Grotesque } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import type { Metadata } from "next";

const bricolage = Bricolage_Grotesque({
  weight: ["200", "400", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Readora",
    template: "%s | Readora",
  },
  description:
    "Readora is a Blog websites for Content Writers who love writing articles, sharing thoughts, and making the world better place",
  creator: "Abdulrahman Ismael",
  authors: [
    {
      name: "Abdulrahman Ismael",
      url: "https://abdulrahman-ismael-portfolio.vercel.app/",
    },
  ],
  applicationName: "Readora",
  keywords: "blog, nextjs, react, content, content writing, writing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.className} antialiased bg-secondary text-primary flex flex-col min-h-screen`}
      >
        <Header />
        <main className="grow overflow-y-hidden flex justify-stretch overflow-x-hidden">
          <div className="container mx-auto">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
