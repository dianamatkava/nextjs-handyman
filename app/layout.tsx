import "@/app/ui/global.css";
import HeroHeader from "@/app/ui/Header/HeroHeader";
import Footer from "@/app/ui/Footer/Footer";
import { Metadata } from "next";

// Add this JSON-LD script for Schema.org metadata
const schemaData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "ALX Handyman Services",
  image: "https://www.alxhandyman.com/og-image.jpg",
  description:
    "Professional handyman services in San Diego. Expert home repairs, maintenance, and improvements with quality workmanship and reliable service.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Diego",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "32.7157",
    longitude: "-117.1611",
  },
  url: "https://www.alxhandyman.com",
  telephone: "+16195101998",
  priceRange: "$$",
  openingHours: "Mo-Sa 08:00-18:00",
};

export const metadata: Metadata = {
  title: "ALX Handyman Services | Professional Home Repairs in San Diego",
  description:
    "Professional handyman services in San Diego. Expert home repairs, maintenance, and improvements with quality workmanship and reliable service.",
  metadataBase: new URL("https://www.alxhandyman.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ALX Handyman Services | Professional Home Repairs in San Diego",
    description:
      "Professional handyman services in San Diego. Expert home repairs, maintenance, and improvements with quality workmanship and reliable service.",
    url: "https://www.alxhandyman.com",
    siteName: "ALX Handyman Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.alxhandyman.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ALX Handyman Services in San Diego",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALX Handyman Services | Professional Home Repairs in San Diego",
    description:
      "Professional handyman services in San Diego. Expert home repairs, maintenance, and improvements.",
    images: ["https://www.alxhandyman.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Force www subdomain */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (window.location.hostname === 'alxhandyman.com') {
              window.location.href = 'https://www.alxhandyman.com' + window.location.pathname;
            }
          `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`antialiased`}>
        <HeroHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
