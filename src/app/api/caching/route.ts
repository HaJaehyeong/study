import { NextResponse } from 'next/server';

export type CachingDatasType = {
  id: string;
  title: string;
  content: string;
};

export const GET = async (req: Request) => {
  try {
    return NextResponse.json({ id: '1', title: 'Test', content: 'Hello, World!' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
};
