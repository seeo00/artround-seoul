'use client';

import { ChevronLeft, Menu, Search, Share, X } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import BackButton from '@/components/ui/BackButton';
import CloseButton from '@/components/ui/CloseButton';
import { CaretLeft, House } from '@phosphor-icons/react';

const headerNav = [
  { name: '주변', href: '/' },
  { name: '추천', href: '/recommend' },
];

const Header = ({ type = 'type1', title }) => {
  const [selected, setSelected] = useState(0);
  const pathname = usePathname();

  const renderHeader = () => {
    switch (type) {
      // home header
      case 'type1':
        return (
          <header className="w-full max-w-[390px] fixed top-0 left-0 right-0 z-50 flex items-center shadow-sm bg-white">
            <nav className="container">
              <ul className="flex items-center">
                {headerNav.map((item, index) => (
                  <React.Fragment key={item.name}>
                    <li>
                      <Link
                        href={item.href}
                        className={`relative text-xl font-bold font-paperlogy  h-14 flex items-center text-gray-300 ${
                          pathname === item.href ? 'text-gray-900' : ''
                        }`}
                      >
                        {item.name}
                        <span
                          className={`${
                            pathname === item.href ? 'block w-full h-[3px] bg-gray-900 absolute bottom-0 left-0' : ''
                          }`}
                        ></span>
                      </Link>
                    </li>
                    {index < headerNav.length - 1 && <span className="h-4 w-[1px] bg-gray-300 mx-2"></span>}
                  </React.Fragment>
                ))}
              </ul>
            </nav>
          </header>
        );
      // 이전 버튼 header
      case 'type2':
        return (
          <header className="fixed top-0 left-0 right-0 z-50 flex items-center h-14 shadow-sm bg-white">
            <div className="container flex justify-between items-center relative">
              <BackButton />
            </div>
          </header>
        );
      // 이전 버튼, 홈 버튼 header
      case 'type3':
        return (
          <header className="fixed top-0 left-0 right-0 z-50 flex items-center h-14 ">
            <div className="container flex justify-between items-center relative">
              <BackButton size={24} variant="rounded" />
              <button className="w-10 h-10 rounded-full bg-white shadow-md flex justify-center items-center">
                <span className="sr-only">닫기</span>
                <House size={24} weight="fill" />
              </button>
            </div>
          </header>
        );
      // 타이틀 제목 header
      case 'type4':
        return (
          <header className="fixed top-0 left-0 right-0 z-50 flex items-center h-14 shadow-sm bg-white">
            <div className="container flex justify-between items-center relative">
              <h2 className="text-xl font-bold font-paperlogy">{title}</h2>
            </div>
          </header>
        );
      default:
        return <div className="container">default</div>;
    }
  };

  return <>{renderHeader()}</>;
};

export default Header;
