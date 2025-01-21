"use client";
import useSWR from 'swr';
import ConfessionPost from '../confess/confession-post';
import MaxWidthWrapper from '../shared/max-width-wrapper';

const fetcher = (url) => fetch(url).then((res) => {
  if (!res.ok) throw new Error('Failed to fetch confessions');
  return res.json();
});

export default function ConfessionList() {
  const { data: confessions, error, isLoading } = useSWR('/api/confess/fetch', fetcher);

  if (isLoading) return <p className='text-center'>Loading confessions...</p>;
  if (error) return <p className='text-center'>Failed to load confessions. Please try again later.</p>;

  return (
    <MaxWidthWrapper className="py-6 md:pb-8 md:pt-10">
      <div className="max-w-screen-sm">
        <h1 className="pb-2 font-heading text-3xl md:text-4xl">Confessions</h1>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-4">
        {confessions.map((confession: { username: string, confession: string, id: number }) => (
          <ConfessionPost key={confession.id} username={confession.username} confession={confession.confession} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
}