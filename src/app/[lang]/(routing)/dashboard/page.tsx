import { lazy, Suspense } from 'react';
import LinkExample from './_components/link-exmaple/link-example';
import PostFeedWithSuspense from './_components/post-feed/post-feed';

// NOTE(hajae): 동적 렌더링을 강제하여 각 사용자 요청 시 라우트를 렌더링합니다.
export const dynamic = 'force-dynamic';

/* NOTE(hajae):
 * 스트리밍: SSR의 단점을 해결하기 위해 페이지의 HTML을 더 작은 청크로 나누고 서버에서 클라이언트로 점진적으로 전송하는 방식입니다.
 * Suspense 경계는 UI 컴포넌트를 수동으로 스트리밍할 수 있도록 합니다. Node.js 및 Edge 런타임에서도 사용할 수 있습니다.
 *
 * ※ Suspense가 가능한 데이터만이 Suspense 컴포넌트를 활성화합니다.
 * 아래와 같은 것들이 해당됩니다.
 * 1. Relay와 Next.js 같이 Suspense가 가능한 프레임워크를 사용한 데이터 가져오기
 * 2. lazy를 활용한 지연 로딩 컴포넌트
 * 3. use를 사용해서 Promise 값 읽기
 */
const Weather = lazy(() => import('./_components/weather/weather'));

const Dashboard: React.FC = () => {
  return (
    <div>
      <PostFeedWithSuspense />
      <Suspense fallback={<p>🌀 Loading Weathers...</p>}>
        <Weather />
      </Suspense>
      <LinkExample />
    </div>
  );
};

export default Dashboard;
