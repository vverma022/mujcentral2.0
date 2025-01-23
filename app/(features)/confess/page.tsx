"use server";

import { GetServerSideProps } from 'next';
import ConfessionList from '@/components/confess/confession-list';

const url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

const fetchConfessions = async () => {
  const res = await fetch(`${url}/api/confess/fetch`); 
  const data = await res.json();
  return data;
};


export default async function ConfessionsPage() {
  const confessions = await fetchConfessions();
  return (
    <>
      <div className="py-8"></div>
      <ConfessionList confessions={confessions} /> 
    </>
  );
}
