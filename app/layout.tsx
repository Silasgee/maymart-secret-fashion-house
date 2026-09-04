import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maymart Secret | Fashion House, Lagos",
  description:
    "Explore streetwear, ready-to-wear and wedding outfits from Maymart Secret, a fashion-forward clothing brand in Lagos State.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080808",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
