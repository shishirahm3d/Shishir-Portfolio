import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Shishir Ahmed - Personal Portfolio",
  description:
    "Software Developer and Full Stack Engineer specializing in web development, applications, and modern tech solutions.",
  keywords: ["Shishir Ahmed", "Software Developer", "Full Stack", "Web Development", "Portfolio", "React", "Next.js"],
  authors: [{ name: "Shishir Ahmed" }],
  creator: "Shishir Ahmed",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Shishir Ahmed - Personal Portfolio",
    description: "Software Developer and Full Stack Engineer specializing in web development, applications, and modern tech solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shishir Ahmed - Personal Portfolio",
    description: "Software Developer and Full Stack Engineer specializing in web development, applications, and modern tech solutions.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
