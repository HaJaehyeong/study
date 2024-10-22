type DashboardTemplateProps = {
  children: React.ReactNode;
};
/**
 * NOTE(hajae):
 * 템플릿은 자식 레이아웃 또는 페이지를 래핑한다는 점에서 레이아웃과 유사합니다. 경로 간에 지속되고 상태를 유지하는 레이아웃과 달리, 템플릿은 탐색 시 자식의 새 인스턴스를 생성합니다.
 * 이는 사용자가 템플릿을 공유하는 경로 간에 탐색할 때마다 자식의 새 인스턴스가 마운트되고, DOM 요소가 재생성되며, 클라이언트 컴포넌트의 상태가 유지되지 않고, 이펙트가 다시 동기화됨을 의미합니다.
 *
 * 이러한 특정 동작이 필요한 경우 템플릿이 레이아웃보다 더 적합한 옵션일 수 있습니다. 예를 들어:
 * - 탐색 시 useEffect를 다시 동기화하려는 경우.
 * - 탐색 시 자식 클라이언트 컴포넌트의 상태를 재설정하려는 경우.
 *
 * From Next.js Doc
 * https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#templates
 */
const DashboardTemplate: React.FC<DashboardTemplateProps> = ({ children }) => {
  setTimeout(() => {
    throw new Error('여기인가?');
  }, 2000);
  return <div className="template">{children}</div>;
};

export default DashboardTemplate;
