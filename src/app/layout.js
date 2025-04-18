import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./../redux/provider";
import GlobalEvents from "./components/GlobalEvents";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GitHub Painter | Free Contribution Graph Customization Tool",
  description:
    "Customize your Contribution Graph · Create art with your GitHub contributions · Includes examples · Paint your commits · By Matthew Trent",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2826294656662096"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <GlobalEvents />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
