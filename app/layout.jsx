import Navbar from "@/components/Navbar";
import "./globals.css";
import Home from "./page";
import { NextAuthProvider } from "./Providers";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <div className="max-w-3xl mx-auto p-4">
            <Navbar />
            <div className="mt-8"> {children}</div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
