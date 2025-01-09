import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch confessions from the database
    const confessions = await prisma.confession.findMany({
      select: {
        username: true,
        confession: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return NextResponse.json(confessions);
  } catch (error) {
    console.error('Error fetching confessions:', error);
    return NextResponse.json({ error: 'Failed to fetch confessions' }, { status: 500 });
  }
}