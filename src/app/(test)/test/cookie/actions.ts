'use server';
import { cookies } from 'next/headers';

export const exampleAction = async () => {
  // NOTE(hajae): Security. Server Actions를 공개 API 엔드포인트처럼 취급하고 사용자가 해당 작업을 수행할 권한이 있는지 확인이 필요
  // const { user } = auth();
  // if (!user) {
  //   throw new Error('You must be signed in to perform this action');
  // }

  const cookieStore = await cookies();

  const name1 = cookieStore.get('name')?.value;
  console.log(name1);

  cookieStore.set('name', 'Delba');
  const name2 = cookieStore.get('name')?.value;
  console.log(name2);

  cookieStore.delete('name');
  const name3 = cookieStore.get('name')?.value;
  console.log(name3);
};
