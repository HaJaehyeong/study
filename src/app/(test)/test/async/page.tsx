import { API_URL } from '@/app/[lang]/constants/constants';

/* NOTE(hajae):
 * 아래 api에 3초 딜레이를 줬음
 * 3초후 데이터를 fetch 성공 후 렌더링이 됨
 * 기존에는 useEffect와 같은 React Hook을 사용해서 데이터를 비동기적으로 가져와야 했으나,
 * Next.js 15부터는 서버 컴포넌트에서 async와 await를 활용하여 비동기 작업을 더 직관적으로 처리할 수 있게 됨
 */
const AsyncPage: React.FC = async () => {
  console.log('Async Page Rendering: 3초 후 출력');
  const res = await fetch(`${API_URL}/api/vercel/posts`);
  const posts = await res.json();
  console.log(posts);

  if (!res) {
    return <>Loading</>;
  }

  return <>Async Page</>;
};

export default AsyncPage;
