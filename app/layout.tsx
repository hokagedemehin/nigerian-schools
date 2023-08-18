import { Providers } from "@/store/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { StyledEnginesProviders } from "@/util/MUIProvider";
import React from "react";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Nigerian Schools",
  description: "Contribute to the Nigerian Schools Project",
  metadataBase: new URL("https://moolah-app.vercel.app/"),
  openGraph: {
    title: "Nigerian Schools",
    description: "Contribute to the Nigerian Schools Project",
    type: "website",
    locale: "en_US",
    url: "https://moolah-app.vercel.app/",
    siteName: "Nigerian Schools",
    images: [
      {
        url: "https://res.cloudinary.com/dfmtuwgcf/image/upload/v1691479961/Property_1_Moolah_1_u9kzq7.png",
        width: 800,
        height: 600,
        alt: "Nigerian Schools",
      },
    ],
  },
  other: {
    "google-site-verification": "Fq--p0wlBVqj7NN77EOZlxW22rfQKnHu1i9AbTQI7-M",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.variable}>
        <Providers>
          <StyledEnginesProviders>{children}</StyledEnginesProviders>
        </Providers>
      </body>
    </html>
  );
}
