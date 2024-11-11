import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/layouts/Sidebar";
import Navbar from "@/components/layouts/Navbar";

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
  title: "Portfolio | Thet Tun",
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
        <div className="w-[90%] mx-auto relative">
          <div className="flex laptop:flex-row mobile:flex-col gap-4 my-8 w-full static">
            <div className="laptop:w-2/6 mobile:w-full rounded-lg bg-primaryColor sticy-sidebar laptop:sticky mobile:relative h-full">
              <Sidebar />
            </div>
            <div className="laptop:w-5/6 mobile:w-full bg-primaryColor laptop:relative rounded-lg overflow-y-auto laptop:mb-0 mobile:mb-10">
              <Navbar />
              <div className="tablet:px-12 mobile:px-6 my-8">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
