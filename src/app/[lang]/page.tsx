import { getDictionary } from './dictionaries';
import { Signup } from './ui/signup';

type HomeProps = {
  params: {
    lang: 'en' | 'ko';
  };
};

const Home: React.FC<HomeProps> = async ({ params }) => {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return (
    <div>
      <Signup />
      <button>{dict.products.cart}</button>
    </div>
  );
};

export default Home;
