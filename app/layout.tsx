
import type { Metadata, Viewport } from "next";
import "maplibre-gl/dist/maplibre-gl.css";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Abijan Life",
    template: "%s | Abijan Life"
  },
  description:
    "Explore a living virtual city inspired by Grand-Bassam and everyday life in Côte d’Ivoire.",
  applicationName: "Abijan Life",
  keywords: [
    "Abijan Life",
    "Grand-Bassam",
    "Côte d’Ivoire",
    "virtual life simulation"
  ]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1220"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
