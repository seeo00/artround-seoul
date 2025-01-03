'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, House, Search } from 'lucide-react';
import { usePathname } from 'next/navigation';

const tabBarNav = [
  {
    label: '검색',
    href: '/search',
    icon: Search,
  },
  {
    label: '홈',
    href: '/',
    icon: House,
  },
  {
    label: '좋아요',
    href: '/liked',
    icon: Heart,
  },
];

const TabBar = () => {
  const pathname = usePathname();
  const isHomeActive = pathname === '/' || pathname === '/recommend';
  // const [selected, setSelected] = useState(1);
  const handleHomeClick = (event) => {
    if (pathname === '/recommend') {
      // 기본 링크 동작 방지
      event.preventDefault();
    }
  };
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-14 bg-white">
      <ul className="container flex gap-10 h-14  border-t border-t-gray-200">
        {tabBarNav.map(({ label, icon: Icon, href }, index) => (
          <li key={index} className="basis-2/6">
            <Link
              href={href}
              onClick={(event) => {
                if (label === '홈') {
                  handleHomeClick(event);
                }
              }}
              className="w-full h-full flex items-center justify-center"
            >
              <span className="blind">{label}</span>
              <Icon
                size={28}
                className={`${
                  (label === '홈' && isHomeActive) || pathname === href ? 'stroke-gray-900' : 'stroke-gray-300'
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TabBar;
