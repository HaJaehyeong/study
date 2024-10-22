'use server';
import { redirect } from 'next/navigation';

const createUser = async (prevState: any, formData: FormData) => {
  const id = formData.get('id') as string;
  const password = formData.get('password') as string;
  const name = formData.get('name') as string;

  const res = await fetch('http://localhost:3000/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, password, name }),
  });

  if (!res.ok) {
    const errorMessage = await res.json();
    return { message: errorMessage.message };
  }

  redirect('/dashboard');
};

export { createUser };
