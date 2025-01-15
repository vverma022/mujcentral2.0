import UnimatesPost from "./post-component";

// Define a type for the profile
type Profile = {
  id?: string;
  name: string;
  photos: string[];
  course: string;
  major: string;
  enrollmentYear: number;
  graduationYear: number;
  city: string;
  description?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
};

export default function UnimatesPosts({ profiles = [] }: { profiles: Profile[] }) {
  return (
    <>
      <div className="max-w-screen-sm">
        <h1 className="pb-2 font-heading text-3xl md:text-4xl">Your Unimates</h1>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        
        {profiles.map((profile, index) => (
          <UnimatesPost
            key={profile.id || index} // Use profile ID or fallback to index
            username={profile.name}
            avatarUrl={profile.photos[0] || '/placeholder.svg'} // Use the first photo or a placeholder
            course={profile.course}
            major={profile.major}
            yearofentry={profile.enrollmentYear}
            yearofgraduation={profile.graduationYear}
            city={profile.city}
            imageUrl={profile.photos[0] || '/placeholder.svg'}
            caption={profile.description || 'Looking for a roommate!'}
            facebookUrl={profile.facebook}
            instagramUrl={profile.instagram}
            twitterUrl={profile.twitter}
          />
        ))}
      </div>
    </>
  );
}