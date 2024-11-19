'use client';
import { useOptimistic } from 'react';
import { send } from '../actions';

type Message = {
  message: string;
};

const Thread: React.FC<{ messages: Message[] }> = ({ messages }) => {
  /** NOTE(hajae): `useOptimistic`는 비동기 작업이 완료되기를 기다리지 않고 클라이언트에서 예상되는 결과를 미리 화면에 띄워주는 훅
   * 현재 서버가 없기 때문에 실제로 데이터를 insert하거나 fetch(get)하지 않아, 클라이언트 측에서 예상 결과를 보여준 뒤 사라지는 것을 확인
   *
   * 실제 서버와 연동된 환경에서는 message를 submit했을 때 서버 응답을 기다리지 않고 `useOptimistic`로 먼저 화면에 보여줍니다.
   * 이후 subscribe, useSelector(redux) 등을 사용하고 있다면 서버 응답에 따라 Redux 상태나 데이터가 업데이트되며 결과가 반영 예상
   */
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<Message[], string>(messages, (state, newMessage) => [
    ...state,
    { message: newMessage },
  ]);

  const formAction = async (formData: FormData) => {
    const message = formData.get('message') as string;
    addOptimisticMessage(message);
    await send(message);
  };

  return (
    <div>
      {optimisticMessages.map((m, i) => (
        <div key={i}>{m.message}</div>
      ))}
      <form action={formAction}>
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Thread;
