import type { Metadata } from "next";
import {Oswald, Carlito, Calistoga} from "next/font/google"
import "./globals.css";
import { twMerge } from "tailwind-merge";

const carlito = Carlito({
  weight: ['400'],
  subsets: ['latin'],
  variable: "--font-carlito"
});

const calistoga = Calistoga({
  subsets: ['latin'],
  variable: "--font-calistoga",
  weight: ['400'],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
      className={twMerge(
        carlito.variable, 
        calistoga.variable, 
        "bg-blue-950 text-white antialiased font-carlito"
        )}>
          {children}
      </body>
    </html>
  );
}
