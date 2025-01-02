import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, confession } = body;
    console.log('Confession:', body);

    if (!name || !confession) {
      return NextResponse.json({ error: 'Name and confession are required.' }, { status: 400 });
    }

    const newConfession = await prisma.confession.create({
      data: {
        name,
        confession,
        username: crypto.randomUUID(), 
      },
    });

    return NextResponse.json(newConfession, { status: 201 });
  } catch (error) {
    console.error('Error creating confession:', error);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}