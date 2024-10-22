'use client';

import { createUser } from '@/app/actions';
import { useFormState } from 'react-dom';

const initialState = {
  message: 'Hello Mr.My Yesterday time machine을 타고',
};

export function Signup() {
  const [state, formAction] = useFormState(createUser, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="id">ID</label>
      <input type="text" id="id" name="id" required />
      <input type="password" id="password" name="password" />
      <input type="name" id="name" name="name" />
      <p aria-live="polite">{state?.message}</p>
      <button>Sign up</button>
    </form>
  );
}
