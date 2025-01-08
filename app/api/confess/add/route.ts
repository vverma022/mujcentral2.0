import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { uniqueNamesGenerator,adjectives, colors, animals } from 'unique-names-generator';
import {parse,serialize} from 'cookie';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, confession } = body;
    const cookies = parse(req.headers.get('cookie') || '');
    const cookiedata = cookies.user_data ? JSON.parse(cookies.user_data) : null;

    if (!cookiedata || !cookiedata.uuid) {
      return NextResponse.json({
        success: false,
        message: "You need to allow cookies to submit a confession.",
      },{status: 403});
    }

    if (!name || !confession) {
      return NextResponse.json({ error: 'Name and confession are required.' }, { status: 400 });
    }

  const { uuid, confessionCount, lastReset } = cookiedata;
  const now = Date.now();
  const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000; 

  
  let updatedCount = confessionCount;
  let updatedLastReset = lastReset;

  if (lastReset < oneWeekAgo) {
    updatedCount = 0;
    updatedLastReset = now;
  }

  if (updatedCount >= 2) {
    return NextResponse.json({
      success: false,
      message: "You can only submit 2 confessions per week.",
    },{status: 403});
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

 updatedCount += 1;

 const cookie =  serialize(
      "user_data",
      JSON.stringify({ uuid, confessionCount: updatedCount, lastReset: updatedLastReset }),
      {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      }
    );

    const response = NextResponse.json(newConfession, { status: 201 });
    response.headers.set("Set-Cookie", cookie);
    return response;
  } catch (error) {
    console.error('Error creating confession:', error);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}