import { NextResponse } from 'next/server';

export type Weathers = {
  city: string;
  temperature: number;
  description: string;
}[];

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET(req: Request) {
  try {
    await delay(3000);

    return NextResponse.json(
      {
        weathers: [
          { city: 'Seoul', temperature: 20, description: 'Sunny' },
          { city: 'Tokyo', temperature: 25, description: 'Cloudy' },
          { city: 'New York', temperature: 22, description: 'Rainy' },
        ],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
