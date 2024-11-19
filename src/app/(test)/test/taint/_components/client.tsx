'use client';

import { UsersInfo } from '@/app/api/user/route';

type ClientComponentProps = {
  users: UsersInfo;
  passwords?: string[];
};

const ClientComponent: React.FC<ClientComponentProps> = ({ users, passwords }) => {
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
};

export default ClientComponent;
