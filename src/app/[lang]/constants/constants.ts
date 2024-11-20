// NOTE(hajae): 이런식으로 NEXT_PUBLIC을 접두사로 붙이면 클라이언트에 유출가능성이 있다.
// 클라이언트 번들에 포함시키지 않으려면
// - constants.ts에 server-only를 사용
// - constants.server.ts를 만들어서 server-only사용 client에 노출돼도 상관없는건 constants.client.ts등에 선언
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
