import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    
    const profiles = await prisma.profile.findMany({
      include: {
        photos: {
          select: {
            url: true, // Fetch only the URL field
          },
        },
      },
    });

    
    if (!profiles.length) {
      return NextResponse.json({ message: 'No profiles found.' }, { status: 404 });
    }

    
    const formattedProfiles = profiles.map((profile) => ({
      id: profile.id,
      name: profile.name,
      gender: profile.gender,
      course: profile.course,
      major: profile.major,
      city: profile.city,
      instagram: profile.instagram,
      twitter: profile.twitter,
      facebook: profile.facebook,
      description: profile.description,
      enrollmentYear: profile.enrollmentYear,
      graduationYear: profile.graduationYear,
      createdAt: profile.createdAt,
      photos: profile.photos.map((photo) => photo.url), // Only return the URLs of the photos
    }));

    return NextResponse.json(formattedProfiles, { status: 200 });
  } catch (error) {
    console.error('Error fetching profiles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch profiles. Please try again later.' },
      { status: 500 }
    );
  }
}