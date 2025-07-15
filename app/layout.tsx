import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Code_Pro, Noto_Sans_Bhaiksuki } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoSansBhaiksuki = Noto_Sans_Bhaiksuki({
  variable: "--font-noto-sans-bhaiksuki",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "code-logic",
  description:
    "It is an paper checking system designed to help students improve their coding skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${sourceCodePro.variable} ${notoSansBhaiksuki.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
