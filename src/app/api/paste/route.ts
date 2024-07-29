// app/api/paste/route.ts
import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { nanoid } from 'nanoid';

export async function POST(request: Request) {
  const { content } = await request.json();
  const id = nanoid();
  await kv.set(id, content);
  return NextResponse.json({ id });
}