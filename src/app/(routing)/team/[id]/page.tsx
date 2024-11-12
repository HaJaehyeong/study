import { API_URL } from '@/app/constants/constants';
import { redirect } from 'next/navigation';

const fetchTeam = async (id: string, password: string) => {
  const res = await fetch(`${API_URL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, password }),
  });

  if (!res.ok) return undefined;
  return res.json();
};

type ProfileProps = Promise<{ id: string }>;

const Profile = async (props: { params: ProfileProps }) => {
  const { id } = await props.params;
  const team = await fetchTeam(id, 'PASSWORD');

  if (!team) {
    /* NOTE(hajae): next.js doc
     * - redirect는 기본적으로 307 (임시 리디렉션) 상태 코드를 반환합니다. 서버 액션에서 사용될 때는 303 (다른 페이지 보기)를 반환하며, 이는 POST 요청 결과로 성공 페이지로 리디렉션하는 데 자주 사용됩니다.
     * - redirect는 내부적으로 오류를 발생시키므로 try/catch 블록 외부에서 호출해야 합니다.
     * - redirect는 렌더링 프로세스 동안 클라이언트 컴포넌트에서 호출될 수 있지만, 이벤트 핸들러에서는 호출될 수 없습니다. 대신 useRouter 훅을 사용할 수 있습니다.
     * - redirect는 절대 URL도 허용하며 외부 링크로 리디렉션하는 데 사용할 수 있습니다.
     * - 렌더링 프로세스 전에 리디렉션하려면 next.config.js 또는 미들웨어를 사용하세요.
     */
    redirect('/login');
  } else {
    return <>Login Success!</>;
  }
};

export default Profile;
