import ChildrenComponent from './_components/children';
import { getCacheItem } from './actions';

/* NOTE(hajae):
 * 경로 전체에서 동일한 데이터를 사용해야 하는 경우(예: Layout, Page 및 여러 컴포넌트에서)
 * 트리 상단에서 데이터를 가져와 컴포넌트 간에 props를 전달할 필요가 없습니다.
 * 대신, 데이터를 필요로 하는 컴포넌트에서 데이터를 가져와 네트워크를 통해 동일한 데이터에 대해 여러 요청을 하는 성능 문제를 걱정할 필요 없이 데이터를 가져올 수 있습니다.
 * 오! prop로 건내는 그런것 안해도 될 듯
 *
 * 메모이제이션은 React 컴포넌트 트리에만 적용되므로:
 * generateMetadata, generateStaticParams, Layouts, Pages 및 기타 Server Components의 fetch 요청에 적용됩니다.
 * React 컴포넌트 트리의 일부가 아닌 Route Handlers의 fetch 요청에는 적용되지 않습니다.
 */
const CachingPage: React.FC = async () => {
  const data = await getCacheItem();

  if (!data) {
    return <>Page Loading</>;
  }

  return (
    <>
      {data.id}
      <ChildrenComponent />
      <ChildrenComponent />
      <ChildrenComponent />
    </>
  );
};

export default CachingPage;
