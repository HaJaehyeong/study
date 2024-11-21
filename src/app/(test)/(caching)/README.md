# Caching in Next.js

매우 요약해서 정리 예정

## Overview

![요약본](image.png)

## Request Memoization

동일한 URL과 옵션을 가진 요청을 자동으로 메모이제이션하도록 `fetch API` 를 확장.

- 메모이제이션은 fetch 요청의 GET 메서드에만 적용됩니다.
- React 컴포넌트 트리에만 적용
  - `generateMetadata`, `generateStaticParams`, `Layouts`, `Pages` 및 기타 `Server Components`의 `fetch` 요청에 적용

### Duration (지속성)

**초기 페이지 렌더링이 끝날 때까지 유지**

### Revalidating (재검증)

서버 요청 간에 공유되지 않으며 렌더링 중에만 적용되므로 재검증 필요 없음

<br/><br/><br/>

## Data Cache

서버 요청과 배포 간에 데이터 페치를 지속적으로 유지하는 내장 데이터 캐시

- 기본적으로 `fetch`를 사용하는 데이터 요청은 캐싱되지 않습니다
- `force-cache` 옵션이 있는 `fetch` 요청이 렌더링 중 처음 호출되면 데이터 캐시에서 캐시된 응답을 확인

### Duration

선택 해제하지 않는 한 유지

### Revalidating

- 시간 기반
  - `fetch('https://...', { next: { revalidate: 3600 } })`
- 온디맨드 재검증
  - 데이터는 경로(`revalidatePath`) 또는 캐시 태그(`revalidateTag`)에 따라 온디맨드로 재검증

<br/><br/><br/>

## Full Route Cache

빌드 시 자동으로 경로를 렌더링하고 캐싱

1. **React Rendering on the Server**
1. **Next.js Caching on the Server (Full Route Cache)**
   - 경로의 렌더링 결과(RSC Payload와 HTML)를 서버에 캐시
1. **React Hydration and Reconciliation on the Client**
   1. HTML은 클라이언트 및 서버 컴포넌트의 빠른 비상호작용 초기 미리보기를 즉시 보여줌
   1. RSC Payload는 클라이언트 및 렌더링된 서버 컴포넌트 트리를 일치시키고 DOM을 업데이트
   1. 자바스크립트 명령은 클라이언트 컴포넌트를 `hydrate` 하여 상호작용 가능하게 만듦
      - `hydrate`란 HTML 코드와 JavaScript 코드를 서로 매칭 시키는 과정
1. **Next.js Caching on the Client (Router Cache)**
   - RSC Payload는 클라이언트 측 Router Cache에 저장
   - 이전에 방문한 경로를 저장하고 미래의 경로를 프리페치하여 탐색 경험을 향상시키는 데 사용
1. **Subsequent Navigations**
   - RSC Payload가 Router Cache에 저장되어 있는지 확인합니다. 그렇다면 서버에 새 요청을 보내는 것을 건너뜀

### Static and Dynamic Rendering

정적 경로는 기본적으로 캐시되지만, 동적 경로는 요청 시 렌더링되며 캐시되지 않음

![alt text](image-1.png)

위 이미지를 살짝 요약해보면

- 초기 방문
  - Static Route : 빌드 시 생선된 정적 리소스를 그대로 재활용
  - Dynamic Route : 요청 시 동적 리소스를 요청해서 사용
- 그 다음 방문부터는 Client측의 Router Cache에 caching된 리소스를 사용

### Duration

지속적

### Revalidating

Data Cache를 재검증 또는, 재배포

<br/><br/><br/>

## Client-side Router Cache

- 방문한 경로 세그먼트를 캐시하고 사용자가 탐색할 가능성이 있는 경로를 `prefetch`
- 즉시 뒤로/앞으로 탐색을 가능하게 하고, 탐색 간 전체 페이지 리로드를 없애며, React 상태 및 브라우저 상태를 유지

### Duration

캐시는 브라우저의 임시 메모리에 저장

- Session: 캐시는 탐색 간에 지속, 새로고침 시 지워짐
- 자동 무효화 기간: 레이아웃 및 로딩 상태의 캐시는 특정 시간이 지나면 자동 무효화.
  - 기간은 리소스가 prefetched 된 방법에 따라 다름
  - 기본 프리페칭: (`prefetch={null}` 또는 미지정): 0초
  - 전체 프리페칭: (`prefetch={true}` 또는 `router.prefetch`): 5분

### Invalidation

- 서버 액션에서: `revalidatePath`, `revalidateTag`, `cookies.set`, `cookies.delete`를 사용. 쿠키는 사용하는 경로가 오래
  되지 않도록 Router Cache를 무효화함
- `router.refresh`를 호출
