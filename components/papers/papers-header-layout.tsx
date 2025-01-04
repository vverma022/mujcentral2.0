import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export function PapersHeaderLayout() {
    return(
        <MaxWidthWrapper className="py-6 md:pb-8 md:pt-10">
    <div className="max-w-screen-sm">
          <h1 className="font-heading text-3xl md:text-4xl">
            Past Year Papers
          </h1>
          <p className="mt-3.5 text-base text-muted-foreground md:text-lg">
             Help your preparation with past year papers sourced from you guys.
          </p>
        </div>
    </MaxWidthWrapper>
    )

}