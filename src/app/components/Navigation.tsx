'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation({ currentPage }: { currentPage?: string }) {
  const pathname = usePathname();
  
  const isActive = (page: string) => {
    if (page === 'home') return pathname === '/';
    return pathname?.startsWith(`/${page}`);
  };

  return (
    <nav className="flex justify-center gap-8 md:gap-16 px-4 py-8 border-b border-white/15">
      <Link
        href="/"
        className={`text-white hover:opacity-70 transition-all duration-200 ${isActive('home') ? 'opacity-100' : 'opacity-50'}`}
        style={{ 
          fontFamily: 'var(--font-body)', 
          fontWeight: 'var(--font-weight-bold)', 
          fontSize: 'var(--text-h4)',
          lineHeight: 'var(--line-height-tight)'
        }}
      >
        home
      </Link>
      <Link
        href="/practice"
        className={`text-white hover:opacity-70 transition-all duration-200 ${isActive('practice') ? 'opacity-100' : 'opacity-50'}`}
        style={{ 
          fontFamily: 'var(--font-body)', 
          fontWeight: 'var(--font-weight-bold)', 
          fontSize: 'var(--text-h4)',
          lineHeight: 'var(--line-height-tight)'
        }}
      >
        practice
      </Link>
      <Link
        href="/settings"
        className={`text-white hover:opacity-70 transition-all duration-200 ${isActive('settings') ? 'opacity-100' : 'opacity-50'}`}
        style={{ 
          fontFamily: 'var(--font-body)', 
          fontWeight: 'var(--font-weight-bold)', 
          fontSize: 'var(--text-h4)',
          lineHeight: 'var(--line-height-tight)'
        }}
      >
        settings
      </Link>
    </nav>
  );
}
