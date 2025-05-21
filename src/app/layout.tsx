import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Jibbit | Seu companheiro de estudo",
  description: "Jibbit é um assistente de estudo que ajuda você a estudar melhor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Retrieve the theme preference from local storage
                try {
                  const themeMode = localStorage.getItem('theme');
                  const uiTheme = localStorage.getItem('ui-theme');
                  
                  // Apply the theme class to the html element
                  if (uiTheme) {
                    document.documentElement.classList.add('theme-' + uiTheme);
                  } else {
                    document.documentElement.classList.add('theme-jibbit');
                  }
                  
                  // Set the color mode
                  if (themeMode === 'dark' || 
                      (!themeMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  // Do nothing if localStorage is not available
                }
              })()
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${redHatDisplay.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
