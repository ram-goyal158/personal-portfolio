// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import { Inter, Poppins } from 'next/font/google'

// Font for body text
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter', // CSS variable for body
})

// Font for headings
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins', // CSS variable for headings
})

export const metadata = {
  title: 'Ram Goyal | Full Stack Developer',
  description: 'Ram Goyal\'s professional portfolio showcasing skills in Next.js and MERN stack.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      {/* Applying font variables to the body */}
      <body className={`${inter.variable} ${poppins.variable} bg-slate-900 text-slate-300`}>
        {children}
      </body>
    </html>
  )
}