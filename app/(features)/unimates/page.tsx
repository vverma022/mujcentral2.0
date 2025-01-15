import Image from 'next/image'
import Poster from '@/public/_static/illustrations/romantic-dinner.svg'
import MaxWidthWrapper from '@/components/shared/max-width-wrapper'
import UnimatesPost from '@/components/unimates/post-component'





export default function UnimatesPage(){
  const placeholder = {
    username: "Vasu",
    avatarUrl: "/placeholder.svg?height=400&width=400",
    course: "B.Tech",
    major: "CSE",
    yearofentry: "2023",
    yearofgraduation: "2027",
    city: "Jaipur",
    imageUrl: "/placeholder.svg?height=400&width=400",
    caption: "I'm looking for a roommate in Jaipur. DM me if you're interested!",
    facebookUrl: "https://facebook.com",
    instagramUrl: "https://instagram.com",
    twitterUrl: "https://twitter.com",
  };

    return(
        <>
      <div className="max-w-screen-sm py-6 md:pb-8 md:pt-10">
        <h1 className="pb-2 font-heading text-3xl md:text-4xl">Your Unimates</h1>
      </div>
      <div className="container mx-auto p-4">
      <UnimatesPost {...{...placeholder, yearofentry: parseInt(placeholder.yearofentry), yearofgraduation: parseInt(placeholder.yearofgraduation)}} />
      </div>
        </>
    )
}