"use client";
import ConfessionPost from './confession-post'
import MaxWidthWrapper from '../shared/max-width-wrapper'
import { useState, useEffect } from 'react'

export default function ConfessionList() {
  const [confessions, setConfessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchConfessions = async () => {
      try {
        const response = await fetch('/api/confess/fetch');
        if (!response.ok) {
          throw new Error('Failed to fetch confessions');
        }

        const data = await response.json();
        setConfessions(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load confessions. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchConfessions();
  }, []);

  if (loading) return <p className='text-center'>Loading confessions...</p>;
  if (error) return <p className='text-center'>{error}</p>;

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

