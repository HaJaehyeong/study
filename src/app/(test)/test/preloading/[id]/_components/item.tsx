import { getItem } from '@/app/utils/get-item';

type ItemProps = {
  id: string;
};

const Item: React.FC<ItemProps> = async ({ id }) => {
  // NOTE(hajae): 캐시된 데이터를 가져온다
  const item = await getItem(id);

  console.log('Item Page rendering');

  return (
    <>
      <div>{item.id}</div>
      <div>{item.title}</div>
      <div>{item.content}</div>
      <div>{item.date}</div>
    </>
  );
};

export default Item;
