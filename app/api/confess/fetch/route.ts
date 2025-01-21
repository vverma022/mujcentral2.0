import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import redis from '@/lib/redis';


const prisma = new PrismaClient();

export async function GET() {
  const cachedConfessions = 'confessions';
  const TTL = 600; // 10 minutes
  try {
    const cachedData = await redis.get(cachedConfessions);
    if (cachedData) {
      console.log('Cache hit')
      return NextResponse.json(cachedData);
    }
    // Fetch confessions from the database
    console.log('Cache miss')
    const confessions = await prisma.confession.findMany({
      select: {
        username: true,
        confession: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    await redis.set(cachedConfessions, confessions, {'ex': TTL});
    
    return NextResponse.json(confessions);
  } catch (error) {
    console.error('Error fetching confessions:', error);
    return NextResponse.json({ error: 'Failed to fetch confessions' }, { status: 500 });
  }
}