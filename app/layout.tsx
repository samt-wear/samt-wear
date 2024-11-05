import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "SAMT-wear",
  description: "SAMT is the best local brand in egypt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
