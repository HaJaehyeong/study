'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { API_URL } from './constants/constants';

export type CreateUserState = {
  message: string;
};

const createUser = async (prevState: CreateUserState, formData: FormData) => {
  const id = formData.get('id') as string;
  const password = formData.get('password') as string;
  const name = formData.get('name') as string;

  const res = await fetch(`${API_URL}/api/user`, {
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

  revalidatePath('/dashboard');
  redirect('/dashboard');
};

export default createUser;
