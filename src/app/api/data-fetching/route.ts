import { NextResponse } from 'next/server';

export type DataFetch = {
  kusas: { hoge: string }[];
};

export async function GET(req: Request) {
  try {
    return NextResponse.json(
      {
        kusas: [{ hoge: 'hoge1' }, { hoge: 'hoge2' }, { hoge: 'hoge3' }],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
