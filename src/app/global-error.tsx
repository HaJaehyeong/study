'use client';

// NOTE(hajae): global error handler는 프로덕션 환경에서만 동작함
// 출처: https://stackoverflow.com/questions/77662425/next-js-13-how-to-test-global-error-tsx-during-development (더블체크 chat gpt)
const GlobalError: React.FC<{ error: Error & { digest?: string }; reset: () => void }> = ({ error, reset }) => {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
};

export default GlobalError;
