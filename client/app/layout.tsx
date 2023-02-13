import "./globals.css";
import { Inter } from "@next/font/google";
import Image from "next/image";
import Navbar from "./Navbar";

// This is the font used throughout the app
const inter = Inter({
  weight: ["200", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

// This is the root layout for the entire app. It is used to wrap all pages.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`${inter.className} bg-[#F2F6FF] overflow-visible`}>
        <Image
          src="/background.svg"
          width={1000}
          height={1000}
          alt="background-image"
          className="hidden xl:block fixed top-0 w-full z-[-1]"
        />
        <Image
          src="/background-mobile.svg"
          width={1000}
          height={1000}
          alt="background-image"
          className="xl:hidden fixed top-0 w-full z-[-1]"
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
