'use client';

import { API_URL } from '@/app/[lang]/constants/constants';
import { useEffect, useState } from 'react';

type Posts = Post[];

type Post = {
  author: string;
  category: string;
  content: string;
  date: string;
  id: number;
  title: string;
};

// NOTE(hajae): Next.js 15 Document에 있길래 따라 작성했는데 CORS Error 발생..
// 클라이언트 측에서의 요청은 브라우저를 통해 요청이 이루어지기 때문에 CORS 정책이 적용됨.
const ClientComponent: React.FC = () => {
  const [posts, setPosts] = useState<Posts | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      // let res = await fetch('https://api.vercel.app/blog');
      // NOTE(hajae): cors error로 인해 vercel posts의 response를 복사 후 신규 API로 작성, 직접 반환하도록 수정
      let res = await fetch(`${API_URL}/api/vercel/posts`);
      let data: Posts = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  if (!posts) return <div>Loading...</div>;

  return <ul>{posts.length > 0 && posts.map((post: Post) => <li key={post.id}>{post.title}</li>)}</ul>;
};

export default ClientComponent;
