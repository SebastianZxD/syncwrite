import { Inter as FontSans } from "next/font/google"

import './globals.css'
import { cn } from "@/lib/utils"
import { Metadata } from "next"

import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import Provider from "./Provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'SyncWrite',
  description: 'Seamless Real-Time Collaboration, Editing, and Document Synchronization',
  icons: '/favicon.ico',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: { 
          colorPrimary: "#F8A3AF", 
          fontSize: '16px',          
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}
          >
            <Provider>
              {children}
            </Provider>
        </body>
      </html>
    </ClerkProvider>
  )
}
