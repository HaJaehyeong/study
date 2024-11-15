import { API_URL } from '../../constants/constants';
import FetchNavigation from './_components/navigation/navigation';

const DataFetchingPage: React.FC = async () => {
  // NOTE(hajae): fetch(Web API)는 Server Components, Route Handlers, 및 Server Actions에서 사용 가능
  const data = await fetch(`${API_URL}/api/data-fetching`, { cache: 'force-cache' }).then((res) => res.json());

  /**
   * 기본적으로 fetch 요청은 새로운 데이터를 검색합니다. 이를 사용하면 전체 경로가 동적으로 렌더링되며 데이터는 캐시되지 않습니다.
   * fetch 요청을 캐시하려면 cache 옵션을 force-cache로 설정합니다. 이렇게 하면 데이터가 캐시되며, 해당 구성 요소가 정적으로 렌더링됩니다:
   */

  return (
    <>
      {data.kusas.map((kusa: { hoge: string }, index: number) => (
        <div key={kusa.hoge}>{kusa.hoge}</div>
      ))}
      <FetchNavigation />
    </>
  );
};

export default DataFetchingPage;
