'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import SortProductsLoading from './loading';

/* NOTE(hajae):
 * 페이지를 다시 로드하지 않고 브라우저의 히스토리 스택을 업데이트할 수 있습니다.
 *
 * window.history.pushState
 * 브라우저의 히스토리 스택에 새 항목을 추가하는 데 사용됩니다. 사용자는 이전 상태로 돌아갈 수 있습니다.
 *
 * window.history.replaceState
 * 브라우저의 히스토리 스택에서 현재 항목을 대체하는 데 사용됩니다. 사용자는 이전 상태로 돌아갈 수 없습니다.
 */
const SortProducts: React.FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const updateSorting = (sortOrder: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', sortOrder);
    window.history.pushState(null, '', `?${params.toString()}`);
  };

  const switchLocale = (locale: string) => {
    const newPath = `/${locale}${pathname}`;
    window.history.replaceState(null, '', newPath);
  };

  return (
    <Suspense fallback={<SortProductsLoading />}>
      <button onClick={() => updateSorting('asc')}>Sort Ascending</button>
      <button onClick={() => updateSorting('desc')}>Sort Descending</button>
      <button onClick={() => switchLocale('en')}>English</button>
      <button onClick={() => switchLocale('kr')}>French</button>
    </Suspense>
  );
};

export default SortProducts;
