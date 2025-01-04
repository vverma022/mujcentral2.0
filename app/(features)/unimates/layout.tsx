import { UnimatesHeaderLayout } from "@/components/unimates/unimates-header";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { UnimatesPoster } from "@/components/unimates/unimates-poster";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <UnimatesHeaderLayout />
        <UnimatesPoster />
      <MaxWidthWrapper className="pb-16">{children}</MaxWidthWrapper>
    </>
  );
}
