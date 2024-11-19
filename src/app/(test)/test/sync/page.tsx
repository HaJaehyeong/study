'use client';
import { API_URL } from '@/app/[lang]/constants/constants';
import { useEffect, useState } from 'react';

/* NOTE(hajae): async 페이지 주석을 먼저 보고오면 이해가 편함
 * 아마 15버전 이전에는 이러한 방법으로 개발을 했을 것이다.
 * 페이지 렌더링 -> useEffect로 비동기 처리 -> state 변화로 인한 Rerendering
 * 위 흐름으로 페이지가 2번 렌더링
 *
 * 하지만 15버전에는 async page('/(test)/test/async/page.tsx'))처럼 작성하면 데이터 fetch 후 한번에 렌더링을 처리하게 할 수 있다.
 */
const SyncPage: React.FC = () => {
  const [posts, setPosts] = useState();

  console.log('Sync Page Rendering');

  useEffect(() => {
    fetch(`${API_URL}/api/vercel/posts`).then(async (res) => {
      const data = await res.json();
      setPosts(data);
    });
  }, []);

  console.log(posts);

  return <>Sync Page</>;
};

export default SyncPage;
