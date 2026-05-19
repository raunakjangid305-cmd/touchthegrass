import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-chakra",
});

export const metadata: Metadata = {
  title: "Touch the Grass",
  description: "Travels & Films",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${chakraPetch.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#F9F9F9] text-[#282828]">
        {children}
      </body>
    </html>
  );
}