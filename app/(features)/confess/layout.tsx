import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { ConfessHeaderLayout } from '@/components/confess/confession-header';
import { ConfessPoster } from "@/components/confess/confess-poster";

export default function ConfessionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
     <ConfessHeaderLayout />
     <ConfessPoster />
     <MaxWidthWrapper className="pb-16">{children}</MaxWidthWrapper>
    </>
  );
}
