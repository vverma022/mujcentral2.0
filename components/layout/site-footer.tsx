import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { Icons } from "../shared/icons";
import { ContactButton } from "../shared/contact-us";



export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t", className)}>
      <div>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 flex items-center space-x-1.5 md:mb-0">
          <Icons.logo/>
            <span className="font-urban text-xl font-bold">MUJ Central 2.0</span>
          </div>
          <nav className="flex flex-wrap justify-center space-x-6 md:justify-end">
            <Link href="legal/about" className="text-sm text-muted-foreground">
              About Us
            </Link>
            <Link href="legal/terms" className="text-sm text-muted-foreground">
              Terms
            </Link>
            <Link href="legal/privacy" className="text-sm text-muted-foreground">
              Privacy
            </Link>
              <ContactButton />
          </nav>
        </div>
      </div>
      </div>
      <div className="border-t py-4">
        <div className="container flex max-w-6xl items-center justify-between">
           <span className="text-sm text-muted-foreground">
            Copyright &copy; 2025. All rights reserved.
          </span> 
          <p className="text-left text-sm text-muted-foreground">
            Built by passionate students of MUJ
            . Hosted on{" "}
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </Link>
          </p>

          <div className="flex items-center gap-3">
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
