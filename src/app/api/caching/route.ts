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

// NOTE(hajae): 공식 문서의 예시
// export async function GET() {
//   const data = await fetch('https://...', {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   }).then((res) => res.json());

//   return Response.json({ data });
// }
