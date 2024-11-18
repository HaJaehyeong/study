// NOTE(hajae): REST API를 고려하면 /api/user로 만들면 좋지만..
// 다른 테스트에서 사용하고있어서 일단 사용 목적에 맞게 form test용으로 api/form/user로 작성
import { NextResponse } from 'next/server';

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const createResponse = (success: boolean, message: string, email: string | null, status: number) => {
  return NextResponse.json(
    {
      success,
      message,
      user: email ? { email } : null,
    },
    { status }
  );
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const POST = async (req: Request) => {
  try {
    const requestBody: { email: string } = await req.json();

    // NOTE(hajae): Pending Test를 위한 딜레이
    await delay(3000);

    if (!isValidEmail(requestBody.email)) {
      return createResponse(false, 'Please enter a valid email', requestBody.email, 400);
    }

    return createResponse(true, 'User created successfully: valid email!!', requestBody.email, 200);
  } catch (error) {
    console.error('Error while creating user:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
};
