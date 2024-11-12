'use client';
import { useRouter } from 'next/navigation';
import styles from './modal.module.css';

type ModalProps = {
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className={styles.modalBackground}>
      <section className={styles.modalWrapper}>
        <button
          onClick={() => {
            router.back();
          }}
        >
          Close modal
        </button>
        {children}
      </section>
    </div>
  );
};

export default Modal;
