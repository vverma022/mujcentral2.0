import { SignIn } from '@clerk/nextjs'
import MaxWidthWrapper from '@/components/shared/max-width-wrapper';
import { SiteFooter } from '@/components/layout/site-footer';


export default function Page() {
    return (
        <>
        <header className="sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all">
          <MaxWidthWrapper className="flex h-14 items-center justify-center border-b py-4">
            <div className="flex w-full justify-center">
              <span className="font-urban text-xl font-bold">MUJ CENTRAL CONFESS</span>
            </div>
          </MaxWidthWrapper>
        </header>
      
        <div className="flex items-center justify-center py-16">
          <SignIn />
        </div>
      </>
    )
 
}