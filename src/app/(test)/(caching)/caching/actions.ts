import 'server-only';

// NOTE(hajae): 이런식으로 NEXT_PUBLIC이 붙지 않은것을 이런식으로 사용하는게 좋다고 한다 (클라이언트에 노출이 안됨)
const API_URL = process.env.API_URL;

const getCacheItem = async () => {
  // NOTE(hajae): 현재 서버가 따로 없어서 Next.js의 route handler를 이용해서 api를 작성해서 이런식으로 만들었지만
  // 서버에 따로 API가 작성되어있다면 route handler를 거치지않고 직접적으로 통신해서 가져오는것이 효율적이다.
  // '서버 컴포넌트가 요청 → API Route 실행 → 데이터 반환 → 서버컴포넌트 렌더링'보다 직접 외부 API를 호출해서 사용
  // 공식문서 TIP: Server Components는 서버에서 렌더링되므로, Server Component에서 Route Handler를 호출할 필요가 없습니다. 데이터를 직접 액세스할 수 있습니다.
  const cache = await fetch(`${API_URL}/api/caching`);
  const res = await cache.json();

  // NOTE(hajae): 로그로는 두번찍히지만 API자체는 한번만 호출되는 듯하다
  console.log('called getCacheItem function!');
  return res;
};

export { getCacheItem };
