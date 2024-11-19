'use client';
import { updateUser } from '../action';
import styles from './client-component.module.css';

type ClientComponentProps = {
  userId: string;
  updateItemAction: (formData: FormData) => void;
};

const ClientComponent: React.FC<ClientComponentProps> = ({ userId, updateItemAction }) => {
  // NOTE(hajae): JavaScript bind 메서드를 사용하여 Server Action에 추가 인수를 전달
  const updateUserWithId = updateUser.bind(null, userId);

  return (
    // <form className={styles.form} action={updateUserWithId}>
    <form className={styles.form} action={updateItemAction}>
      <div className={styles.fromItem}>
        <label>customerId: </label>
        <input type="text" name="customerId" />
      </div>
      <div className={styles.fromItem}>
        <label>amount: </label>
        <input type="text" name="amount" />
      </div>
      <div className={styles.fromItem}>
        <label>status: </label>
        <input type="text" name="status" />
      </div>
      <button type="submit" style={{ width: '100px' }}>
        submit
      </button>
    </form>
  );
};

export default ClientComponent;
