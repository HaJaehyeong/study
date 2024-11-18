'use client';
import { CreateUserState } from '@/app/[lang]/actions';
import { useActionState } from 'react';
import styles from './client-component.module.css';

type ClientComponentProps = {
  createUserAction: (
    prevState: CreateUserState,
    formData: FormData
  ) => Promise<{
    message: string;
  }>;
};

const initialState: CreateUserState = {
  message: '',
};

const ClientComponent: React.FC<ClientComponentProps> = ({ createUserAction }) => {
  const [state, formAction, pending] = useActionState(createUserAction, initialState);

  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.fromItem}>
        <label>email: </label>
        {/* NOTE(hajae): required, type='email'과 같은 HTML 검증을 사용하는 것이 좋지만 테스트를 위해 일단 제외 */}
        {/* <input type="email" name="email" required /> */}
        <input type="text" name="email" />
        <button type="submit" style={{ width: '100px' }} aria-disabled={pending}>
          {pending ? 'submitting...' : 'submit'}
        </button>
      </div>
      <p aria-live="polite" className={styles.formItem}>
        {state.message}
      </p>
    </form>
  );
};

export default ClientComponent;
