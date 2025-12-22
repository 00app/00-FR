import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "00 → FR",
  description: "The 15-minute French method built for real life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black">{children}</body>
    </html>
  );
}

