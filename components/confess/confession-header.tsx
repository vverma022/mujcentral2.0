"use server";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { UserButton } from "@clerk/nextjs";

export async function ConfessHeaderLayout() {
    return(
      <MaxWidthWrapper className="py-6 md:pb-8 md:pt-10">
  <div className="flex w-full items-center justify-between">
    <h1 className="font-heading text-3xl md:text-4xl">
      MUJ Confess
    </h1>
    <UserButton />
  </div>
  <p className="mt-3.5 text-base text-muted-foreground md:text-lg">
    Confess my friend, confess.
  </p>
</MaxWidthWrapper>
    )

}