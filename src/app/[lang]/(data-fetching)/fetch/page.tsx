import { API_URL } from '../../constants/constants';

const DataFetchingPage: React.FC = async () => {
  const data = await fetch(`${API_URL}/api/data-fetching`).then((res) => res.json());

  return <>{data.kusas.map((kusa: { hoge: string }) => kusa.hoge)}</>;
};

export default DataFetchingPage;
