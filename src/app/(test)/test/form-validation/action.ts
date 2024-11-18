'use server';
import { CreateUserState } from '@/app/[lang]/actions';
import { API_URL } from '@/app/[lang]/constants/constants';

export const createUser = async (prevState: CreateUserState, formData: FormData) => {
  const rawFormData = {
    email: formData.get('email'),
  };

  const res = await fetch(`${API_URL}/api/form/user`, { method: 'POST', body: JSON.stringify(rawFormData) });

  if (!res.ok) {
    const errorMessage = await res.json();
    return { message: errorMessage.message };
  }

  // NOTE(hajae): 원래 다른 리디렉션이나 지정된 Response를 해야하지만 현재는 테스트를 위해 메시지를 반환
  const response = await res.json();
  return { message: response.message };
};
