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
  metadataBase: new URL("https://hellomelon.com"),
  title: {
    default: "Hello Melon",
    template: "%s | Hello Melon"
  },
  description: "This isn't a clinic. It's a village.",
  openGraph: {
    title: "Hello Melon",
    description: "This isn't a clinic. It's a village.",
    type: "website",
    url: "/"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hello Melon",
    description: "This isn't a clinic. It's a village."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dosis.variable} ${solway.variable} bg-melon-base antialiased`}>
        {children}
      </body>
    </html>
  );
}
