import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/HeaderSection/Header/Header";
import SessionWrapper from "@/components/SessionWrapper/SessionWrapper";
import Providers from "./Providers/Providers";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Insta App",
  description: "A clone of Instagram built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <Toaster position="bottom-center" reverseOrder={false} />
            <Header />

            {children}
          </Providers>
        </body>
      </html>
    </SessionWrapper>
  );
}
