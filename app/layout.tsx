import type { Metadata } from "next";

// Import global styles
import "./globals.css";

// Metadata for the application
export const metadata: Metadata = {
  title: "Invsto", // Replace with your app's name
  description: "Your app's description", // Replace with your app's description
  icons: {
    icon: "/favicon-32x32.png", // Path to your favicon
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
        <link rel="icon" href="/favicon-32x32.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
