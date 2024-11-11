'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LinkExample: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      <div style={{ height: '100dvh' }}>
        <Link href={'/dashboard/settings'}>to settings</Link>
        <div>This is Dashboard page &gt;_ &lt;</div>
        <Link className={`link ${pathname === '/dashboard#setting' ? 'active' : ''}`} href="/dashboard#setting">
          &gt;&gt; To Setting
        </Link>
      </div>
      <section id="setting" style={{ height: '100dvh' }}>
        Setting
      </section>
    </>
  );
};

export default LinkExample;
