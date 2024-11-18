import ClientComponent from './_components/client-component';
import { createUser } from './action';

const FormValidation: React.FC = () => {
  return <ClientComponent createUserAction={createUser} />;
};

export default FormValidation;
