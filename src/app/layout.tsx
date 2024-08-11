import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Star Wars API",
  description: "Star Wars API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
