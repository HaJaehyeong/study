import { notFound } from 'next/navigation';

interface Post {
  id: string;
  title: string;
  content: string;
}

async function getPost(id: string) {
  let res = await fetch(`https://api.vercel.app/blog/${id}`, {
    cache: 'force-cache',
  });
  let post: Post = await res.json();
  if (!post) notFound();
  return post;
}

export async function generateStaticParams() {
  let posts = await fetch('https://api.vercel.app/blog', {
    cache: 'force-cache',
  }).then((res) => res.json());

  return posts.map((post: Post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  let post = await getPost(id);

  return {
    title: post.title,
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  // NOTE(hajae): Next.js 15 버전에서는 여러가지 비동기 API를 사용할 경우 아래와 같은 에러가 발생한다.
  // await를 이용하거나 React.use를 이용해서 Promise를 풀어야한다.
  // Route "/[lang]/reuse/[id]" used`params.id`. `params` should be awaited before using its properties
  // ※참고: https://nextjs.org/docs/app/building-your-application/upgrading/version-15
  const { id } = await params;

  // NOTE(hajae): 15버전 이전에는 useEffect와 같은 비동기 처리로 가져와야했던 데이터를 async await 등으로 비동기 처리를 보다 쉽게 처리 가능
  let post = await getPost(id);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
