'use client';
import { redirect } from 'next/navigation';

const LoginPage: React.FC = () => {
  // NOTE(hajae): 현재 /login으로 modal을 띄우고, 새로고침 시 /login 페이지로 이동하기에 일단 메인으로 리디렉트
  // + 추후 auth 인증을 통해 어떻게 할지 처리하는 기능을 추가하면 될 듯
  redirect('/');
};

export default LoginPage;
