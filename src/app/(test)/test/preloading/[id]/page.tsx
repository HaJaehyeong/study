import { preload } from '@/app/utils/get-item';
import Item from './_components/item';

const PreloadingPage: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const { id } = await params;

  // NOTE(hajae): 사전로딩 -> 아이템 데이터를 로딩 시작
  // 미리 로딩을 시켜놓고 다른 컴포넌트에서 캐싱된 데이터를 사용할 때 사용
  preload(id);
  console.log('Preloading Page rendering');
  return <Item id={id} />;
};

export default PreloadingPage;
