import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dosis = localFont({
  src: [
    {
      path: "../public/fonts/dosis/Dosis-Regular.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/dosis/Dosis-Medium.otf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../public/fonts/dosis/Dosis-SemiBold.otf",
      weight: "600",
      style: "normal"
    },
    {
      path: "../public/fonts/dosis/Dosis-Bold.otf",
      weight: "700",
      style: "normal"
    }
  ],
  variable: "--font-dosis",
  display: "swap"
});

const solway = localFont({
  src: [
    {
      path: "../public/fonts/solway/Solway-Light.ttf",
      weight: "300",
      style: "normal"
    },
    {
      path: "../public/fonts/solway/Solway-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/solway/Solway-Medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "../public/fonts/solway/Solway-Bold.ttf",
      weight: "700",
      style: "normal"
    },
    {
      path: "../public/fonts/solway/Solway-ExtraBold.ttf",
      weight: "800",
      style: "normal"
    }
  ],
  variable: "--font-solway",
  display: "swap"
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
