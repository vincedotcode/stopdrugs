'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/education', label: 'Drug Education' },
    { href: '/cannabis', label: 'Cannabis Facts' },
    { href: '/myths', label: 'Myth Busting' },
  ];
  
  return (
    <nav className="bg-gradient-to-r from-green-800 to-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">
            🌿 StopDrugs
          </Link>
          
          <div className="flex space-x-1 sm:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-white text-green-800'
                    : 'hover:bg-green-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
