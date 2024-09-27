import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A showcase of my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white p-4 flex items-center">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src="/profile-picture.png"
                alt="Samuel Lain Hedden"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold">Samuel Lain Hedden</span>
            </Link>
            <div className="space-x-4">
              <Link href="/projects" className="hover:underline">Projects</Link>
              <Link href="/resume" className="hover:underline">Resume</Link>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
