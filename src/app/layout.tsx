import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "E=mc² Biotech's AutoImplant Guide pairs a US-made one-body flapless implant (MYQ) with AI-driven, automated surgical guide design — from CT scan to ready-to-print guide in minutes.";

export const metadata: Metadata = {
  metadataBase: new URL("https://emc2-biotech.com"),
  title: "E=mc² Biotech | AutoImplant Guide - Automated Implant Positioning",
  description: siteDescription,
  keywords: [
    "E=mc2 Biotech",
    "AutoImplant Guide",
    "MYQ Flapless Implant",
    "EMC2 Implant System",
    "flapless implant",
    "one-body implant",
    "immediate loading implant",
    "dental implant surgical guide",
    "AI implant planning",
    "automated implant guide design",
    "3D implant simulation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://emc2-biotech.com",
    siteName: "E=mc² Biotech",
    title: "E=mc² Biotech | AutoImplant Guide",
    description: siteDescription,
    images: [{ url: "/slides/03.jpeg", alt: "E=mc² Biotech AutoImplant Guide ecosystem" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "E=mc² Biotech | AutoImplant Guide",
    description: siteDescription,
    images: ["/slides/03.jpeg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "E=mc² Biotech",
  url: "https://emc2-biotech.com",
  logo: "https://emc2-biotech.com/logo.jpg",
  description: siteDescription,
  email: "ekpark@emc2-biotech.com",
  telephone: "+1-650-400-0800",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1055 Stewart Dr, #113",
    addressLocality: "Sunnyvale",
    addressRegion: "CA",
    postalCode: "94085",
    addressCountry: "US",
  },
  founder: { "@type": "Person", name: "Eun Park" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
