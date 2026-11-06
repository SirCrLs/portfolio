'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/data/site';

export default function Navbar() {
  const path = usePathname();
  const active = (h) => (h === '/' ? path === '/' : path.startsWith(h));
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="brand">{site.name}</Link>
        {site.nav.map(({ label, href }) => (
          <Link key={href} href={href} className={`link${active(href) ? ' active' : ''}`}>{label}</Link>
        ))}
      </div>
    </nav>
  );
}