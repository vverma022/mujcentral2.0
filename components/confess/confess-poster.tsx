"use server"
import Image from "next/image";
import Poster from "@/public/_static/illustrations/romantic-dinner.svg";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import  AddConfessionButton  from "@/components/confess/add-confession";
import { cn } from "@/lib/utils";


export async function ConfessPoster() {
    return (
<MaxWidthWrapper className="grid gap-10 px-2.5 lg:grid-cols-2 lg:items-center lg:px-7">
    <div className={cn("overflow-hidden rounded-xl border lg:-m-4")}>
      <div className="aspect-video">
        <Image
          className="size-full bg-gray-100 object-center"
          src={Poster}
          alt="People sharing their confessions"
          width={1000}
          height={500}
          priority={true}
        />
      </div>
    </div>
    <div>
      <h2 className="font-heading text-2xl text-foreground md:text-4xl lg:text-[40px]">
      Your Voice, Your Story, Your <span className="text-gradient_indigo-purple">Confession</span>
      </h2>
      <dl className="mt-4 text-muted-foreground">
      Express yourself freely and anonymously. Share your thoughts, experiences, and confessions with the MUJ community
      </dl>
      <div className='mt-4'>
      <AddConfessionButton />
      </div>
    </div>
  </MaxWidthWrapper>
    )
}