import type { Metadata } from "next";
import { Dosis, Solway } from "next/font/google";
import "./globals.css";

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dosis"
});

const solway = Solway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-solway"
});

export const metadata: Metadata = {
  title: "Hello Melon",
  description: "This isn't a clinic. It's a village."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dosis.variable} ${solway.variable} bg-[#efe4cc] antialiased`}>
        {children}
      </body>
    </html>
  );
}
