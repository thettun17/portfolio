import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Developed By Thet Tun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mt-10 w-[90%] mx-auto">
          <div className="flex flex-row gap-x-4">
            <div className="w-1.8/6">
              <Sidebar />
            </div>
            <div className="w-5/6 bg-primaryColor relative rounded-lg overflow-y-auto">
              <Navbar />
              <div className="px-12 my-8 ">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
