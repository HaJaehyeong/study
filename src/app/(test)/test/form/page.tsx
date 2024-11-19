import styles from './page.module.css';

const FormPage: React.FC = () => {
  // NOTE(hajae): 폼 액션은 이런식으로 만들면 됐네.. useState로 데이터가져와서 set하고 ... 막 그런식으로 했는데 그럴 필요가 없었다.
  const createInvoice = async (formData: FormData) => {
    'use server';

    const rawFormData = {
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    };

    console.log(rawFormData);
  };

  return (
    <form className={styles.form} action={createInvoice}>
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

export default FormPage;
