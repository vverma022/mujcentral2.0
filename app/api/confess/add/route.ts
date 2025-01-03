import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, confession } = body;
    console.log('Confession:', body);

    if (!name || !confession) {
      return NextResponse.json({ error: 'Name and confession are required.' }, { status: 400 });
    }

    
    const username = uniqueNamesGenerator({
      dictionaries: [adjectives, animals,colors ], 
      separator: '_', 
    });

    const newConfession = await prisma.confession.create({
      data: {
        name,
        confession,
        username,
      },
    });

    return NextResponse.json(newConfession, { status: 201 });
  } catch (error) {
    console.error('Error creating confession:', error);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}