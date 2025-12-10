import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";

const heading = Bebas_Neue({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const body = Space_Grotesk({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skinwalkergame.net"),
  title: {
    default: "Skinwalker Game | Horror Hub",
    template: "%s | Skinwalker Game",
  },
  description:
    "Skinwalker Game is a modern horror hub for trending games, guides, trailers, and community spotlights. Discover where to play, how to survive, and what to watch next.",
  alternates: {
    canonical: "https://skinwalkergame.net/",
  },
  openGraph: {
    title: "Skinwalker Game | Horror Hub",
    description:
      "Curated Skinwalker-inspired horror games, survival guides, and community picks. Explore playable links, trailers, and tips that keep you ahead of the fear.",
    url: "https://skinwalkergame.net/",
    siteName: "Skinwalker Game",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Skinwalker Game brand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skinwalker Game | Horror Hub",
    description:
      "Discover Skinwalker-themed horror games, guides, and community spotlights with a neon-dark visual system.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${heading.variable} ${body.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
