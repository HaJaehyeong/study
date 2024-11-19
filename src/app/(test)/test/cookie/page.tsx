import { exampleAction } from './actions';

const CookiePage: React.FC = async () => {
  return (
    <form action={exampleAction}>
      <button type="submit">Run Server Action</button>
    </form>
  );
};

export default CookiePage;
