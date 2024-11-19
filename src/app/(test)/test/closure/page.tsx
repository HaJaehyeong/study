import { getLatestVersion } from './actions';

// NOTE(hajae): 자신이 생성될 때의 환경(Lexical environment)을 기억하는 함수
const ClosurePage: React.FC = async () => {
  const publishVersion = await getLatestVersion();

  const publish = async () => {
    'use server';
    if (publishVersion !== (await getLatestVersion())) {
      throw new Error('The version has changed since pressing publish');
    }
    console.log(publishVersion);
  };

  return (
    <form>
      <button formAction={publish}>Publish</button>
    </form>
  );
};

export default ClosurePage;

/* MEMO(hajae):
 * [의문점]
 * `useState()` 훅은 클로저 개념을 이용한 상태관리인데 클로저는 데이터 은닉이라는 장점도 존재하는데
 * `useState()`의 변수는 React Dev Tool로 데이터를 확인할 수 있지 않은가??
 * 그럼 데이터 은닉의 장점을 살리지않고 (클로저 개념상의) 외부함수의 변수를 참조하기 위해서만 사용하는가?
 * > GPT 답변: useState에서 클로저를 사용하는 목적은 '외부에서 상태를 직접적으로 수정하거나 접근하는 것을 방지하는 목적'
 *
 * [추가 의문]
 * 데이터 은닉이라는게 '참조를 못하게 한다'는 것인지, 아니면 '클라이언트 측에서 이 값들을 뜯어보지 못하게 하는 것'이 은닉인지.
 * > GPT 답변: 데이터 은닉이란 '외부에서 변수를 직접 참조하거나 수정하는 것을 방지'
 * >> 내가 데이터 은닉의 정의를 잘못 알고있었다 😇
 *
 * [NOTE]
 * 클로저는 보안을 위한 도구가 아니며, 클라이언트 측 보안을 위해서는 암호화, 권한 제어, 서버 측 인증 및 요청 처리와 같은 다른 보안기법이 필요
 * 클로저를 사용한다고 해서 브라우저나 네트워크에서 데이터를 완전히 숨길 수 있는 것이 아니기에
 * `중요한 데이터를 클라이언트 측에 저장하는 것은 보안상 위험할 수 있다.`
 *
 * 데이터 은닉을 위해 조심해야할 부분
 * - 민감한 정보는 절대로 props로 클라이언트에 전달하지 않는다.
 * - 서버에서만 사용할 데이터는 API 라우트를 통해 처리하고, 인증 및 권한 관리를 적용
 * - 민감한 환경 변수는 `NEXT_PUBLIC_` 접두사 사용 절대 X (클라이언트 코드에서 사용할 수 있음)
 * - 민감 정보는 서버 코드(예: getServerSideProps, API 라우트)에서만 접근
 * - 민감한 데이터에 접근하기 전에 사용자 권한을 확인
 * - localStorage나 sessionStorage는 보안 목적으로 사용 X
 * - 상태 관리는 클라이언트와 서버에서 철저히 분리
 */
