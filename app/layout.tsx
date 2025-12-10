import type { Metadata } from "next";
import Script from "next/script";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";

const GA_ID = "G-WW2Z4TEH9Z";
const CLARITY_ID = "ujf2cecihx";
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://skinwalkergame.net/#website",
      url: "https://skinwalkergame.net/",
      name: "Skinwalker Game",
      description:
        "Skinwalker Game curates playable horror demos, guides, trailers, and community highlights so you know where to play, how to survive, and what to watch next.",
      inLanguage: "en",
    },
    {
      "@type": "Organization",
      "@id": "https://skinwalkergame.net/#organization",
      name: "Skinwalker Game",
      url: "https://skinwalkergame.net/",
      logo: {
        "@type": "ImageObject",
        url: "https://skinwalkergame.net/logo.png",
      },
      sameAs: [
        "https://www.youtube.com/results?search_query=skinwalker+game",
        "https://twitter.com/search?q=skinwalker%20game",
      ],
    },
  ],
};

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
    default: "Skinwalker Game | Playable Horror Demos, Guides, Clips",
    template: "%s | Skinwalker Game",
  },
  description:
    "Skinwalker Game curates playable horror demos, guides, trailers, and community highlights so you know where to play, how to survive, and what to watch next.",
  openGraph: {
    title: "Skinwalker Game | Playable Horror Demos, Guides, Clips",
    description:
      "Skinwalker Game curates playable horror demos, guides, trailers, and community highlights so you know where to play, how to survive, and what to watch next.",
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
    title: "Skinwalker Game | Playable Horror Demos, Guides, Clips",
    description:
      "Skinwalker Game curates playable horror demos, guides, trailers, and community highlights so you know where to play, how to survive, and what to watch next.",
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
        <Script
          id="gtag-src"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
          }}
        />
        <Script
          id="clarity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
            `,
          }}
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
