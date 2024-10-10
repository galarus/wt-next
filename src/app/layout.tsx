import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ClerkProvider, } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>

          </header>
          <NextUIProvider>
            {children}
          </NextUIProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
