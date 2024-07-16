import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ContentWizard - Your Personal Content Creation Assistant",
  description:
    "ContentWizard is a personal content creation assistant that helps you create content for your blog, social media, and more using Google Gemini.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
