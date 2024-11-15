import { API_URL } from '@/app/[lang]/constants/constants';
import { Suspense } from 'react';

const Cart = async () => {
  const data = await fetch(`${API_URL}/api/data-fetching`).then((res) => res.json());

  return (
    <>
      {data.kusas.map((kusa: { hoge: string }, index: number) => (
        <div key={kusa.hoge}>{kusa.hoge}</div>
      ))}
    </>
  );
};

const FetchNavigation: React.FC = () => {
  return (
    <>
      <Suspense fallback={<>Loading~</>}>
        <Cart />
      </Suspense>
    </>
  );
};

export default FetchNavigation;
