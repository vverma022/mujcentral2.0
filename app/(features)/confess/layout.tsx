import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { ConfessHeaderLayout } from '@/components/content/confession-header';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
     <ConfessHeaderLayout />
      <MaxWidthWrapper className="pb-16">{children}</MaxWidthWrapper>
    </>
  );
}
