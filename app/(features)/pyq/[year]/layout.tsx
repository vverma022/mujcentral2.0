import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>

      <MaxWidthWrapper className="pb-16">{children}</MaxWidthWrapper>
    </>
  );
}
