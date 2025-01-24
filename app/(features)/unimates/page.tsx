"use client"
import { useState, useEffect } from 'react';
import UnimatesPosts from '@/components/unimates/unimates-posts';


type Profile = {
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


export default function UnimatesPage() {
  const [profile, setProfile] = useState<Profile | null>(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/unimates/fetch'); // Your backend API endpoint
        if (!response.ok) {
          throw new Error(`Failed to fetch profiles: ${response.status}`);
        }
        const data = await response.json();

        
        if (data.length > 0) {
          setProfile(data[0]); // Set the first profile
        } else {
          setError('No profiles found.');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div className="py-4 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="py-4 text-center text-red-500">Error: {error}</div>;
  }

  if (!profile) {
    return <div className="py-4 text-center">No profile available.</div>;
  }

  return <UnimatesPosts profiles={[profile]} />
}