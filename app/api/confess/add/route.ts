import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, confession } = req.body;

    if (!name || !confession) {
      return res.status(400).json({ error: 'Name and confession are required.' });
    }

    try {
      const newConfession = await prisma.confession.create({
        data: {
          name,
          confession,
          username: crypto.randomUUID(), 
        },
      });

      return res.status(201).json(newConfession);
    } catch (error) {
      console.error('Error creating confession:', error);
      return res.status(500).json({ error: 'Something went wrong.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}