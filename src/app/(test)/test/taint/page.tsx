import { UserInfo } from '@/app/api/user/route';
import { getUserData } from '@/app/utils/get-user';
import ClientComponent from './_components/client';

const TaintPage: React.FC = async () => {
  // NOTE(hajae): 설명은 get-user.ts 파일 참고
  const usersData: UserInfo[] = await getUserData();

  return (
    <>
      <ClientComponent users={usersData} passwords={usersData.map((user) => user.password)} />
    </>
  );
};

export default TaintPage;
