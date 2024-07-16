import { GardenThemeProvider } from "@/components/GardenThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContentLayout } from "@/components/ContentLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: "Garden",
    default: "Garden",
    template: "%s | Garden",
  },
  description: "Garden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GardenThemeProvider>
          <ContentLayout>{children}</ContentLayout>
        </GardenThemeProvider>
      </body>
    </html>
  );
}
