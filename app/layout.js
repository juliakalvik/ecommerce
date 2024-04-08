import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JulezShoez",
  description: "We're not basic around here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={"min-h-screen flex flex-col relative " + inter.className}
      >
        <Header />
        <div className="flex1">{children}</div>
        <footer className="flex items-center mt-auto flex-wrap justify-center border-t border-solid border-slate-300 p-4 md:p-8 gap-4">
          <Link href={"https://www.instagram.com/juuliamor"} target="_blank">
            <i className="fa-brands fa-instagram text-slate-700 hover:text-slate-500 cursor-pointer text-xl"></i>
          </Link>
          <Link href={"https://www.instagram.com/juuliamor"} target="_blank">
            <i className="fa-brands fa-facebook text-slate-700 hover:text-slate-500 cursor-pointer text-xl"></i>
          </Link>
          <Link href={"https://www.instagram.com/juuliamor"} target="_blank">
            <i className="fa-brands fa-tiktok text-slate-700 hover:text-slate-500 cursor-pointer text-xl"></i>
          </Link>
          <div id="portal"></div>
        </footer>
      </body>
    </html>
  );
}
