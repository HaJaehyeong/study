'use client';

import { useEffect } from 'react';

// NOTE(hajae): global error handler는 프로덕션 환경에서만 동작함
const ErrorTrigger: React.FC = () => {
  useEffect(() => {
    // NOTE(hajae): 컴포넌트가 렌더링될 때 에러 발생
    throw new Error('This is a test error');
  }, []);

  return <div>Error will be thrown on page load</div>;
};

export default ErrorTrigger;
