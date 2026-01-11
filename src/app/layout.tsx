import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spun Swan - AI Chat Experience",
  description: "Connect with AI model creators for intimate conversations.",
  icons: {
    icon: "/logo192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
