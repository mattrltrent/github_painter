"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./../redux/provider";
import Head from "next/head";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  // Add global spacebar listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        console.log("Eraser tool selected via spacebar");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Head>
        <title>GitHub Painter | Free Contribution Graph Customization Tool</title>
        <meta
          name="description"
          content="Customize your Contribution Graph · Create art with your GitHub contributions · Includes examples · Paint your commits · By Matthew Trent"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-adsense-account"
          content="ca-pub-2826294656662096"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2826294656662096"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <html lang="en">
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  );
}
