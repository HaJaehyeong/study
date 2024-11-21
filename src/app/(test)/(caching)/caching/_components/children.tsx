import { getCacheItem } from '../actions';

const ChildrenComponent: React.FC = async () => {
  const data = await getCacheItem();

  if (!data) {
    return <>Children Loading~</>;
  }

  return <>{data.title}</>;
};

export default ChildrenComponent;
