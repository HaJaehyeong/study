import Login from '@/app/[lang]/ui/login';
import Modal from '@/app/[lang]/ui/modal';

// NOTE(hajae): @auth slot 내에서 /(.)login 폴더로 /login 라우트를 가로챔
const AuthLoginPage: React.FC = () => {
  return (
    <Modal>
      <Login />
    </Modal>
  );
};

export default AuthLoginPage;
