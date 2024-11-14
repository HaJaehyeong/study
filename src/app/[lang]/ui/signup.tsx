'use client';
import { useRouter } from 'next/navigation';
import { useActionState } from 'react';
import createUser, { CreateUserState } from '../actions';

const initialCreateUserState: CreateUserState = {
  message: 'Hello Mr.My Yesterday time machine을 타고',
};

export function Signup() {
  const [state, formAction] = useActionState(createUser, initialCreateUserState);

  // NOTE(hajae): 클라이언트 컴포넌트의 이벤트 핸들러 내에서 리디렉션이 필요한 경우 useRouter훅의 push 메서드를 사용
  const router = useRouter();

  return (
    <>
      <form action={formAction}>
        <label htmlFor="id">ID</label>
        <input type="text" id="id" name="id" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <label htmlFor="name">Name</label>
        <input type="name" id="name" name="name" />
        <p aria-live="polite">{state.message}</p>
        <button>Sign up</button>
      </form>
      <button type="button" onClick={() => router.push('/dashboard')}>
        To Dashboard
      </button>
    </>
  );
}
