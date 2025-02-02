import "@/styles/globals.css";
import { fontGeist, fontHeading, fontSans, fontUrban } from "@/assets/fonts";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn, constructMetadata } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@/components/analytics";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import CookieConsentBanner from "@/components/shared/cookie-consent";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = constructMetadata(); // Generate metadata

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <title>MUJ CENTRAL 2.0</title>
        {/* Inject Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.title?.toString() ?? ''} />
        <meta property="og:description" content={metadata.description?.toString() ?? ''} />
        <meta property="og:image" content={metadata.openGraph?.images?.[0]?.toString() ?? ''} />
        {metadata.openGraph && (
          <>
            <meta property="og:url" content={metadata.openGraph.url?.toString() ?? ''} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={metadata.openGraph.siteName} />
          </>
        )}

        {/* Inject Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title?.toString() ?? ''} />
        <meta name="twitter:description" content={metadata.description ?? ''} />
        <meta name="twitter:image" content={metadata.twitter?.images?.[0] ?? ''} />
        {/* Add the rest of the metadata */}
        <link rel="icon" href={metadata.icons?.toString() ?? ''} />
        <link rel="manifest" href={metadata.manifest?.toString() ?? ''} />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontUrban.variable,
          fontHeading.variable,
          fontGeist.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CookieConsentBanner />
          {children}
          <SpeedInsights />
          <Analytics />
          <Toaster richColors closeButton />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}