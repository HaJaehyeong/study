import { NextResponse } from 'next/server';

type CreateUserRequestBody = {
  id: string;
  password: string;
  name: string;
};

// NOTE(hajae): nextjs routing을 우선하고 있기 때문에 임시로 하드코딩
export const POST = async (req: Request) => {
  try {
    if (req.headers.get('Content-Type') !== 'application/json') {
      // NOTE(hajae): 요청의 Content-Type이 application/json인지 확인
      return NextResponse.json({ error: 'Invalid content type. Expected application/json.' }, { status: 400 });
    }

    const requestBody: CreateUserRequestBody = await req.json();

    // NOTE(hajae): 임시로 Error Handling
    if (requestBody.id === undefined || requestBody.id === '') {
      return NextResponse.json({ message: `Invalid ID` }, { status: 400 });
    } else if (requestBody.password === undefined || requestBody.password === '') {
      return NextResponse.json({ message: `Invalid Password` }, { status: 400 });
    } else if (requestBody.name === undefined || requestBody.name === '') {
      return NextResponse.json({ message: `Invalid Name` }, { status: 400 });
    }

    return NextResponse.json(
      {
        success: true,
        message: 'User created successfully',
        user: {
          id: requestBody.id,
          name: requestBody.name,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error while creating user:', error);

    // NOTE(hajae): 클라이언트 요청 오류 (400)
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid JSON format' }, { status: 400 });
    }

    // NOTE(hajae): 기타 예상치 못한 서버 오류 (500 Internal Server Error)
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
};

export type UsersInfo = UserInfo[];

export type UserInfo = {
  id: string;
  name: string;
  password: string;
};

const Users: UsersInfo = [
  {
    id: 'user1',
    name: '이유저',
    password: '1234',
  },
  {
    id: 'user2',
    name: '삼유저',
    password: '4321',
  },
];

export const GET = async (req: Request) => {
  try {
    return NextResponse.json(Users, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
};
