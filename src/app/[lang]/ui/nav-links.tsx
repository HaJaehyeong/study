'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="links">
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Home
      </Link>
      {/* scroll: false -> 새 페이지로 이동할 때도 기존 스크롤 위치를 유지 (default: true) */}
      <Link className={`link ${pathname === '/dashboard' ? 'active' : ''}`} scroll={false} href="/dashboard">
        Dashboard
      </Link>
      <Link className={`link ${pathname === '/team' ? 'active' : ''}`} scroll={false} href="/team/ID">
        Team
      </Link>
      <Link className={`link ${pathname === '/sort-products' ? 'active' : ''}`} scroll={false} href="/sort-products">
        SortProducts
      </Link>
      <Link className={`link ${pathname === '/login' ? 'active' : ''}`} scroll={false} href="/login">
        OpenLoginModal
      </Link>
    </nav>
  );
}
