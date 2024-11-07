'use client';

import { createUser } from '@/app/actions';
import { useActionState } from 'react';

const initialState = {
  message: 'Hello Mr.My Yesterday time machine을 타고',
};

export function Signup() {
  const [state, formAction] = useActionState(createUser, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="id">ID</label>
      <input type="text" id="id" name="id" required />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <label htmlFor="name">Name</label>
      <input type="name" id="name" name="name" />
      <p aria-live="polite">{state?.message}</p>
      <button>Sign up</button>
    </form>
  );
}
