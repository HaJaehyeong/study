import { NextResponse } from 'next/server';

export type Posts = {
  id: string;
  title: string;
  content: string;
}[];

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET(req: Request) {
  try {
    await delay(2000);

    return NextResponse.json(
      {
        posts: [
          { id: '1', title: 'First Post', content: 'Hello, Next.js!' },
          { id: '2', title: 'Second Post', content: 'Welcome to the second post!' },
          { id: '3', title: 'Third Post', content: 'Hello, World!!' },
        ],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
