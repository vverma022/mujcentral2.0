import Link from "next/link";

import { studymaterial } from "@/config/landing";
import { Button } from "@/components/ui/button";
import { HeaderSection } from "@/components/shared/header-section";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function StudyMaterial() {
  return (
    <section id="studymaterial" >
      <div className="pt-24">
        <MaxWidthWrapper>
          <HeaderSection
            label="Study Material"
            title="Know what to prepare for your exams with ease"
            subtitle="Access to the best study material to prepare for your exams. Sourced from the community."
          />

          <div className="mt-12 grid items-center gap-3 sm:grid-cols-2 lg:grid-cols-2">
            {studymaterial.map((studymaterial) => {
              const Icon = Icons[studymaterial.icon || "nextjs"];
              return (
                <div
                  className="group relative overflow-hidden rounded-2xl border bg-background p-5 md:p-8"
                >
                  <h4 className="flex items-center space-x-2 text-xl font-semibold">
                  <div className="relative mx-2 flex size-12 rounded-2xl border border-border shadow-sm *:relative *:m-auto *:size-6">
                      <Icon className=" text-" />
                    </div>
                    {studymaterial.title}
                    </h4>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b from-orange-500/80 to-white opacity-25 blur-2xl duration-300 group-hover:-translate-y-1/4 dark:from-white dark:to-white dark:opacity-5 dark:group-hover:opacity-10"
                  />
                  <div className="relative">
                    <p className="mt-6 pb-6 text-muted-foreground">
                      {studymaterial.description}
                    </p>

                    <div className="-mb-5 flex gap-3 border-t border-muted py-4 md:-mb-7">
                      <Button
                        variant="secondary"
                        size="sm"
                        rounded="xl"
                        className="px-4"
                      >
                        <Link href={studymaterial.link} className="flex items-center gap-2">
                          <span>Get Access</span>
                          <Icons.arrowUpRight className="size-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
