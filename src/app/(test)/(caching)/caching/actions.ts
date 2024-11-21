import 'server-only';

// NOTE(hajae): 이런식으로 NEXT_PUBLIC이 붙지 않은것을 이런식으로 사용하는게 좋다고 한다 (클라이언트에 노출이 안됨)
const API_URL = process.env.API_URL;

const getCacheItem = async () => {
  const cache = await fetch(`${API_URL}/api/caching`);
  const res = await cache.json();

  // NOTE(hajae): 로그로는 두번찍히지만 API자체는 한번만 호출되는 듯하다
  console.log('called getCacheItem function!');
  return res;
};

export { getCacheItem };
