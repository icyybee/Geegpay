import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
const jakarta_font = Plus_Jakarta_Sans({ style: 'normal', weight: '400', subsets: ["latin"]}) 

export const metadata: Metadata = {
  title: "Geegpay",
  description: "Geegpay Frontend Hackathon Challenge created using NextJs and Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakarta_font.className}>{children}</body>
    </html>
  );
}
