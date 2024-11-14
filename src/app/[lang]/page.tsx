import { getDictionary } from '../dictionaries';
import { Signup } from './ui/signup';

// NOTE(hajae): 정적 메타데이터
// export const metadata: Metadata = {
//   title: '...',
// };

// NOTE(hajae): 동적 세그먼트를 이용하는 페이지에서는 동적 메타데이터를 이용해서 설정을 해야하는 것 같다. layout의 metadata가 적용되지 않는다.

/** 
 * 동적 정보(예: 현재 경로 매개변수, 외부 데이터 또는 상위 세그먼트의 metadata)에 의존하는 동적 메타데이터는 generateMetadata 함수를 내보내어 설정할 수 있으며, 이 함수는 Metadata 객체를 반환합니다.
 * 
 * 알아두면 좋은 정보 (Tip)
 * - 메타데이터가 런타임 정보에 의존하지 않는 경우, generateMetadata 대신 정적 metadata 객체를 사용하여 정의해야 합니다.
 * - fetch 요청은 generateMetadata, generateStaticParams, 레이아웃, 페이지 및 서버 컴포넌트 간에 동일한 데이터를 위해 자동으로 메모이제이션됩니다. fetch가 사용 불가능한 경우, React cache를 사용할 수 있습니다.
 * - searchParams는 page.js 세그먼트에서만 사용할 수 있습니다.
redirect() 및 notFound() Next.js 메서드는 generateMetadata 내에서도 사용할 수 있습니다.

 */
// export async function generateMetadata() {
//   return {
//     title: 'Main Page',
//   };
// }

type HomeProps = Promise<{ lang: 'en' | 'ko' }>;

const Home = async (props: { params: HomeProps }): Promise<JSX.Element> => {
  const { lang } = await props.params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <Signup />
      <button>{dict.products.cart}</button>
    </div>
  );
};

export default Home;
