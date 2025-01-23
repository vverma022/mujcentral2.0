import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import redis from '@/lib/redis';

const prisma = new PrismaClient();
const cachedConfessions = 'confessions';
const TTL = 600; // 10 minutes

export async function POST() {
  try {
    console.log('Refreshing cache...');
    const confessions = await prisma.confession.findMany({
      select: {
        username: true,
        confession: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 20, // Fetch latest 50 confessions
    });

    await redis.set(cachedConfessions, JSON.stringify(confessions), { ex: TTL });
    console.log('Cache refreshed successfully!');
    return NextResponse.json({ message: 'Cache refreshed successfully!' });
  } catch (error) {
    console.error('Error refreshing cache:', error);
    return NextResponse.json({ error: 'Failed to refresh cache' }, { status: 500 });
  }
}