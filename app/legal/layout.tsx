import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { NavMobile } from "@/components/layout/mobile-nav";
import { NavBar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
     <div className="flex min-h-screen flex-col">
      <NavMobile />
      <NavBar scroll={true} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
    </>
  );
}
