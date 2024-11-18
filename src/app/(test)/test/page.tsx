import Link from 'next/link';

const TestMain: React.FC = () => {
  return (
    <>
      <Link href="/test/async">async</Link>
      <Link href="/test/sync">sync</Link>
    </>
  );
};

export default TestMain;
