import Image from 'next/image'
import Poster from '@/public/_static/illustrations/romantic-dinner.svg'
import MaxWidthWrapper from '@/components/shared/max-width-wrapper'


export function UnimatesPoster() {

    return (
         <div className='py-8'>
        <MaxWidthWrapper className="grid gap-10 px-2.5 lg:grid-cols-2 lg:items-center lg:px-7">
          <div className="overflow-hidden rounded-xl border lg:-m-4">
            <div className="aspect-video">
              <Image
                className="size-full  object-center"
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
             Meet your Unimates
            </h2>
            <dl className="text-muted-foreground mt-4">
             Unimates helps you find people from your city coming to your university. So you can connect with them before you even reach the campus.
            </dl>
            <div className='mt-4'>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      )
}