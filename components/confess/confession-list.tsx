"use client";
import useSWR from 'swr';
import ConfessionPost from './confession-post';
import MaxWidthWrapper from '../shared/max-width-wrapper';
import axios from 'axios';
import { Key } from 'react';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);


export default function ConfessionList({ initialData }) {
  const { data: confessions, error } = useSWR('/api/confess/fetch', fetcher, {
    fallbackData: initialData, // Use SSR-fetched data initially
  });

  if (error) return <p className='text-center'>Failed to load confessions. Please try again later.</p>;

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