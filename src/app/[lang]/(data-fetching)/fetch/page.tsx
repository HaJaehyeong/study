// NOTE(hajae): 한글 번역 버전은 아직 Next.js 15버전부분이 적용되어있지 않아서 주석처리
// const DataFetchingPage: React.FC = async () => {
//   // NOTE(hajae): fetch(Web API)는 Server Components, Route Handlers, 및 Server Actions에서 사용 가능
//   const data = await fetch(`${API_URL}/api/data-fetching`, { cache: 'force-cache' }).then((res) => res.json());

//   /**
//    * 기본적으로 fetch 요청은 새로운 데이터를 검색합니다. 이를 사용하면 전체 경로가 동적으로 렌더링되며 데이터는 캐시되지 않습니다.
//    * fetch 요청을 캐시하려면 cache 옵션을 force-cache로 설정합니다. 이렇게 하면 데이터가 캐시되며, 해당 구성 요소가 정적으로 렌더링됩니다:
//    */

//   return (
//     <>
//       {data.kusas.map((kusa: { hoge: string }, index: number) => (
//         <div key={kusa.hoge}>{kusa.hoge}</div>
//       ))}
//       <FetchNavigation />
//     </>
//   );
// };

// export default DataFetchingPage;

export const dynamic = 'force-dynamic';

const DataFetchingPage: React.FC = async () => {
  // NOTE(hajae): 오 15버전 Document에선 API도 지원해주네..
  // 수동 fetch으로 useEffect(권장하지 않음)
  let data = await fetch('https://api.vercel.app/blog');
  let posts = await data.json();

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default DataFetchingPage;
