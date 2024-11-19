import ClientComponent from './_components/client-component';
import { create } from './action';

const FormWithAction: React.FC = () => {
  return <ClientComponent updateItemAction={create} userId="1" />;
};

export default FormWithAction;
