"use server";

import ConfessionList from '@/components/confess/confession-list';


const fetchConfessions = async () => {
  const url =  'http://localhost:3000';
  const res = await fetch(`${url}/api/confess/fetch`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch confessions');
  }
  return res.json();
};


export default async function ConfessionsPage() {
  const confessions = await fetchConfessions();
  return confessions.length > 0 ? (
    <ConfessionList confessions={confessions} />
  ) : (
    <p className="pt-16 text-center font-heading text-xl text-foreground ">No confessions found.</p>
  );
}

