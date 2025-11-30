import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SmoothScroll from "@/components/SmoothScroll"
import Cursor from "@/components/Cursor"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Datta Katikaneni | Software Engineer | AI & Clean Code",
  description: "Just a curious developer and lifelong student trying to build things that matter — mostly with AI, clean code, and a bit of stubborn optimism.",
  keywords: ["Software Engineer", "Developer", "Machine Learning", "AI", "Python", "React", "Django", "TensorFlow", "PyTorch"],
  authors: [{ name: "Datta Katikaneni" }],
  openGraph: {
    title: "Datta Katikaneni | Software Engineer",
    description: "Building things that matter with AI, clean code, and a bit of stubborn optimism.",
    url: "https://dattakatikaneni.dev",
    siteName: "Datta Katikaneni Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Datta Katikaneni | Software Engineer",
    description: "Building things that matter with AI, clean code, and a bit of stubborn optimism.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.variable}>
        <SmoothScroll>
          <Cursor />
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}

