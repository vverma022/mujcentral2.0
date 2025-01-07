import Image from 'next/image'
import ConfessionList from '@/components/content/confession-list'
import AddConfessionButton from '@/components/content/add-confession'
import Poster from '@/public/_static/avatars/podcast-man.svg'
import { InfoLdg } from "@/types";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { ConfessHeaderLayout } from '@/components/content/confession-header';




export default function ConfessionsPage() {
  return (
    <>
  <div className='py-8'>
  <MaxWidthWrapper className="grid gap-10 px-2.5 lg:grid-cols-2 lg:items-center lg:px-7">
    <div className={cn("overflow-hidden rounded-xl border lg:-m-4")}>
      <div className="aspect-video">
        <Image
          className="size-full object-center"
          src={Poster}
          alt="People sharing their confessions"
          width={1000}
          height={500}
          priority={true}
          style={{backgroundColor: 'white'}}
        />
      </div>
    </div>
    <div>
      <h2 className="font-heading text-2xl text-foreground md:text-4xl lg:text-[40px]">
      Your Voice, Your Story, Your Confession
      </h2>
      <dl className="mt-4 text-muted-foreground">
      Express yourself freely and anonymously. Share your thoughts, experiences, and confessions with the MUJ community
      </dl>
      <div className='mt-4'>
      <AddConfessionButton />
      </div>
    </div>
  </MaxWidthWrapper>
</div>
    <ConfessionList />
    </>
  )
}

