import { API_URL } from '../[lang]/constants/constants';
import { UserInfo } from '../api/user/route';

export const getUserData = async () => {
  const data = await fetch(`${API_URL}/api/user`, { method: 'GET' });
  const users: UserInfo[] = await data.json();

  // NOTE(hajae): 객체 전체 노출막기
  // experimental_taintObjectReference('전체 사용자 객체를 클라이언트에 전달하지 마십시오', users);

  // NOTE(hajae): 단일 Prop 노출막기
  // users.map((user) =>
  //   experimental_taintUniqueValue('사용자의 비밀번호를 클라이언트에 전달하지 마십시오.', user, user.password)
  // );

  return users;
};
