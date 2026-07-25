import type { Metadata } from "next";
import { Fraunces, Caveat, Quicksand } from "next/font/google";

import "./globals.css";

import { SITE } from "@/lib/content";
import { MusicProvider } from "@/context/music-context";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["500", "600", "700"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `🎂 Happy Birthday ${SITE.herName}`,
  description: `A special birthday surprise made with ❤️ by ${SITE.yourName}`,

  keywords: [
    "Birthday",
    "Happy Birthday",
    SITE.herName,
    SITE.yourName,
    "Birthday Surprise",
  ],

  authors: [
    {
      name: SITE.yourName,
    },
  ],

  openGraph: {
    title: `🎂 Happy Birthday ${SITE.herName}`,

    description: `A birthday surprise made with ❤️ by ${SITE.yourName}`,

    images: [
      {
        url: SITE.heroImage,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
          ${fraunces.variable}
          ${caveat.variable}
          ${quicksand.variable}
          font-body
          antialiased
          overflow-x-hidden
          bg-[#09090f]
          text-white
          selection:bg-pink-400
          selection:text-white
        `}
      >
        {/* Background Glow */}

        <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[700px]
              w-[700px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-pink-500/10
              blur-[160px]
            "
          />

          <div
            className="
              absolute
              right-0
              top-0
              h-[350px]
              w-[350px]
              rounded-full
              bg-fuchsia-500/10
              blur-[120px]
            "
          />

          <div
            className="
              absolute
              bottom-0
              left-0
              h-[300px]
              w-[300px]
              rounded-full
              bg-yellow-300/10
              blur-[100px]
            "
          />
        </div>

        {/* Music Provider */}

        <MusicProvider>

          {children}

        </MusicProvider>
      </body>
    </html>
  );
}