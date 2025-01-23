import "@/styles/globals.css";

import { SWRConfig } from "swr";
import { fontGeist, fontHeading, fontSans, fontUrban } from "@/assets/fonts";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { cn, constructMetadata } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@/components/analytics";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import CookieConsentBanner from "@/components/shared/cookie-consent";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = constructMetadata();

export default async function RootLayout({ children }: RootLayoutProps) {
  const url = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  const fetchConfessions = async () => {
    try {
      const response = await fetch(`${url}/api/confess/fetch`);
      if (!response.ok) throw new Error("Failed to fetch confessions");
      return await response.json();
    } catch (error) {
      console.error("Error preloading confessions:", error);
      return [];
    }
  };

  const preloadedConfessions = await fetchConfessions();

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
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
           <SWRConfig
            value={{
              fallback: {
                "/api/confess/fetch": preloadedConfessions, 
              },
              revalidateOnFocus: false, 
              refreshInterval: 60000, 
            }}
          ></SWRConfig>
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
