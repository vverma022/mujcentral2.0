"use server";
import ConfessionPost from './confession-post';
import MaxWidthWrapper from '../shared/max-width-wrapper';

export default async function ConfessionList({ confessions }) {
  return (
    <MaxWidthWrapper className="py-6 md:pb-8 md:pt-10">
      <div className="max-w-screen-sm">
        <h1 className="pb-2 font-heading text-3xl md:text-4xl">Confessions</h1>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-4">
         {confessions?.map((confession: { id: any; username: string; confession: string; }, index: any) => (
       <ConfessionPost 
      key={confession.id ?? index} 
      username={confession.username} 
      confession={confession.confession} 
    />
  ))}
</div>
    </MaxWidthWrapper>
  );
}