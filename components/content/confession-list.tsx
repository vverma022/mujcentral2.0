import ConfessionPost from './confession-post'
import MaxWidthWrapper from '../shared/max-width-wrapper'
import { useState, useEffect } from 'react'

const confessions = [
  {
    id: 1,
    confession: "I secretly love pineapple on pizza.",
    username: "PizzaLover123",
  },
  {
    id: 2,
    confession: "I've never seen Star Wars.",
    username: "MovieBuff99",
  },
]

export default function ConfessionList() {
  const [confessions, setConfessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchConfessions = async () => {
      try {
        const response = await fetch('/api/confess/list');
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

  return (
    <MaxWidthWrapper className="py-6 md:pb-8 md:pt-10">
  <div className="max-w-screen-sm">
    <h1 className="font-heading text-3xl md:text-4xl pb-2">
      Confessions
    </h1>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
    {confessions.map((confession) => (
      <ConfessionPost key={confession,} {...confession} />
    ))}
  </div>
</MaxWidthWrapper>
  )
}

