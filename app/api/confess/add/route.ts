import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { uniqueNamesGenerator,adjectives, colors, animals } from 'unique-names-generator';
import {parse , serialize} from 'cookie'
import redis from '@/lib/redis';

const prisma = new PrismaClient();
const confessionqueue = 'confessionqueue';


// Background process to handle queue processing
setInterval(async () => {
  const confessions: any[] = [];
  let confession;

  while ((confession = await redis.lpop(confessionqueue))) {
    try {
      const parsedConfession = typeof confession === 'string' ? JSON.parse(confession) : confession;
      confessions.push(parsedConfession);
    } catch (error) {
      console.error('Error parsing confession from Redis:', confession, error);
    }
  }

  if (confessions.length > 0) {
    console.log("Writing batch to database:", confessions);
    try {
      await prisma.confession.createMany({ data: confessions });
    } catch (error) {
      console.error('Error writing to database:', error);
    }
  }
}, 30000);


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, confession } = body;
    const cookies = parse(req.headers.get('cookie') || '');
    const cookiedata = cookies.user_data ? JSON.parse(cookies.user_data) : null;

    if (!cookiedata || !cookiedata.uuid) {
      return NextResponse.json(
        { success: false, message: "You need to allow cookies to submit a confession." },
        { status: 403 }
      );
    }

    if (!name || !confession) {
      return NextResponse.json({ error: "Name and confession are required." }, { status: 400 });
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

    if (updatedCount >= 14) {
      return NextResponse.json(
        { success: false, message: "You can only submit 14 confessions per week." },
        { status: 403 }
      );
    }

    const username = uniqueNamesGenerator({
      dictionaries: [adjectives, animals, colors],
      separator: "_",
    });

    const newConfession = {
      name,
      confession,
      username,
      createdAt: new Date(),
    };

    updatedCount += 1;

    const cookie = serialize(
      "user_data",
      JSON.stringify({ uuid, confessionCount: updatedCount, lastReset: updatedLastReset }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "strict",
      }
    );

    // Add the confession to the Redis queue
    // await redis.rpush(confessionqueue, JSON.stringify(newConfession));

    const response = NextResponse.json(newConfession, { status: 201 });
    response.headers.set("Set-Cookie", cookie);
    return response;
  } catch (error) {
    console.error("Error creating confession:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}