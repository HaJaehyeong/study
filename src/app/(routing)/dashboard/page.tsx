'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Dashboard: React.FC = () => {
  const pathname = usePathname();

  return (
    <div>
      <div style={{ height: '100dvh' }}>
        <div>This is Dashboard page &gt;_ &lt;</div>
        <Link className={`link ${pathname === '/dashboard#setting' ? 'active' : ''}`} href="/dashboard#setting">
          &gt;&gt; To Setting
        </Link>
      </div>
      <section id="setting" style={{ height: '100dvh' }}>
        Setting
      </section>
    </div>
  );
};

export default Dashboard;
