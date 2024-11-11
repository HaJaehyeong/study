'use client';
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
import { useSelectedLayoutSegment } from 'next/navigation';
import Error from './error';

// export const metadata: Metadata = {
//   title: 'Dashboard',
//   description: 'This is Dashboard page',
// };

type DashboardLayoutProps = {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
};

// NOTE(hajae): Parallel Routes를 사용하면 동일한 레이아웃 내에서 하나 이상의 페이지를 동시에 또는 조건부로 렌더링할 수 있습니다.
// 이는 소셜 사이트의 대시보드 및 피드와 같은 매우 동적인 앱 섹션에 유용합니다.

/**
 * NOTE(hajae):
 * Soft Navigation -> client측 routing으로 부분 렌더링을 수행할 때 URL과 일치하지 않더라도
 * 다른 slot의 활성 하위 페이지를 유지하면서 slot 내의 하위 페이지를 변경합니다.
 * => 이건 페이지 새로고침이 아닌 Link등의 Navigation 변화로 인한 페이지 변경
 *
 * Hard Navigation -> 새로고침 같은 페이지 전체 로드할 때 URL과 일치하지 않는 slot의 활성상태를 결정할 수 없다.
 * ⭐️⭐️일치하지 않을때 default.js 파일을 렌더링하거나 그것도 없으면 404를 렌더링⭐️⭐️
 *
 * 말 그대로인데 너무 헷갈려서 내 나름 이해한 대로 설명
 * Soft Navigation
 * 1. 페이지 이동할 때
 * 2. slot 유지하면서 이동
 * 3. 해당 페이지에 맞는 page가 있으면 그부분만 바뀜
 * ex)
 * 1. /dashboard를 엶
 * 2. @team/settings/page.tsx는 URL이 맞지않아서 default.tsx가 표시
 * 3. /dashboard/settings로 Link를 통해 이동
 * 4. analytics, dashboard page는 그대로 {team}부분만 @team/settings/page로 변경
 *
 * Hard Navigation
 * 1. 페이지 새로고침할 때
 * 2. URL에 맞는 slot 표시
 * 3. 맞는게 없으면 default.js 표시 것도 없으면 404
 * ex)
 * 1. /dashboard를 엶
 * 2. @team/settings/page.tsx는 URL이 맞지않아서 default.tsx가 표시
 * 3. /dashboard/settings로 Link를 통해 이동
 * 4. analytics, dashboard page는 그대로 {team}부분만 @team/settings/page로 변경
 * 5. 화면 새로고침
 * 6. analytics와 dashboard는 URL이 맞지않아 default.tsx가 표시
 *
 * 간단히 설명하면
 * - 페이지 이동할때는 기존 데이터를 유지하고 해당 페이지의 URL에 맞는 페이지만 변경
 * - 새로고침시 url이 맞지않으면 default.tsx가 표시 없으면 404
 */
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, team, analytics }) => {
  // NOTE(hajae): 활성 라우트의 세그먼트를 읽을 수 있음
  const teamSegment = useSelectedLayoutSegment('team');

  // NOTE(hajae): /dashboard에서는 null, /dashboard/settings에서는 settings
  console.log('teamSegment: ', teamSegment);

  return (
    <ErrorBoundary errorComponent={Error}>
      <section>
        {team}
        {analytics}
        {children}
      </section>
    </ErrorBoundary>
  );
};

export default DashboardLayout;
