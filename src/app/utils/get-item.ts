import { cache } from 'react';
import 'server-only';
import { API_URL } from '../[lang]/constants/constants';

// NOTE(hajae): cache 함수, preload 패턴 및 server-only 패키지를 결합하여 애플리케이션 전체에서 사용할 수 있는 데이터 가져오기 유틸리티를 만들 수 있습니다.
export const preload = (id: string) => {
  void getItem(id);
};

export const getItem = cache(async (id: string) => {
  const item = await fetch(`${API_URL}/api/vercel/posts/${id}`);
  const result = await item.json();
  return result;
});
