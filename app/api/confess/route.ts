// app/api/confessions/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { nanoid } from 'nanoid';
import { currentUser , auth } from "@clerk/nextjs/server";


const prisma = new PrismaClient();

// Function to generate random anonymous names
function generateAnonymousName(): string {
  const adjectives = [
    'Silent', 'Hidden', 'Secret', 'Mystery', 'Anonymous', 'Masked', 'Unknown', 
    'Shadow', 'Veiled', 'Covert', 'Phantom', 'Cryptic', 'Enigmatic', 'Obscure'
  ];
  
  const nouns = [
    'Whisperer', 'Voyager', 'Guardian', 'Wanderer', 'Observer', 'Explorer', 
    'Dreamer', 'Nomad', 'Specter', 'Soul', 'Spirit', 'Phantom', 'Voice', 'Echo'
  ];
  
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const identifier = nanoid(4); // Short unique identifier
  
  return `${adj}${noun}${identifier}`;
}

export async function POST(request: NextRequest) {
  try {
    
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized. Please sign in.' }, 
        { status: 401 }
      );
    }

    // Get user data
    const clerkUser = await currentUser();
    if (!clerkUser) {
      return NextResponse.json(
        { error: 'Unable to retrieve user information.' }, 
        { status: 400 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { content } = body;
    
    if (!content || content.trim() === '') {
      return NextResponse.json(
        { error: 'Confession content is required' }, 
        { status: 400 }
      );
    }

    // Get user email and name from Clerk
    const email = clerkUser.emailAddresses[0]?.emailAddress;
    const name = clerkUser.firstName && clerkUser.lastName 
      ? `${clerkUser.firstName} ${clerkUser.lastName}`
      : clerkUser.username || 'Anonymous User';
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required from Google sign-in' }, 
        { status: 400 }
      );
    }

    // Find or create user
    let user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          name,
        }
      });
    }

    // Generate random anonymous name for the confession
    const anonymousName = generateAnonymousName();

    // Create the confession
    const confession = await prisma.confession.create({
      data: {
        content,
        anonymousName,
        authorId: user.id,
      }
    });

    // Update the user's confession count
    await prisma.user.update({
      where: { id: user.id },
      data: { confessionCount: { increment: 1 } }
    });

    // Return the created confession without exposing the authorId
    const { authorId, ...safeConfession } = confession;
    return NextResponse.json(safeConfession, { status: 201 });
    
  } catch (error) {
    console.error('Error creating confession:', error);
    return NextResponse.json(
      { error: 'Failed to create confession' }, 
      { status: 500 }
    );
  }
}