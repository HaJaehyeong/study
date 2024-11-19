import { NextResponse } from 'next/server';

// NOTE(hajae): nextjs routing을 우선하고 있기 때문에 임시로 하드코딩
export async function POST(req: Request) {
  try {
    const requestBody = await req.json();
    if (requestBody.id === 'ID' && requestBody.password === 'PASSWORD') {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.error();
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
