import { API_URL } from '@/app/[lang]/constants/constants';
import { Suspense, use } from 'react';

const getPosts = async () => {
  const res = await fetch(`${API_URL}/api/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data.posts;
};

const PostFeed = () => {
  const posts = use(getPosts());

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          {post.title} - {post.content}
        </li>
      ))}
    </ul>
  );
};

const PostFeedWithSuspense: React.FC = () => {
  return (
    <Suspense fallback={<p>🌀 Loading Posts...</p>}>
      <PostFeed />
    </Suspense>
  );
};

export default PostFeedWithSuspense;
