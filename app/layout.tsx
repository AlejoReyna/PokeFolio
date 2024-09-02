import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MusicProvider } from '@components/MusicContext';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alejo's Portfolio",
  description: "Here I post what I code :P",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <MusicProvider>
        {children}
      </MusicProvider>
      </body>
      </html>
  );
}