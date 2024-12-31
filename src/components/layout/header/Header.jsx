'use client';

import { Button, CloseButton, Container, Heading, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { ChevronLeft, Menu, Search, Share, X } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const headerNav = [
  { name: '주변', href: '/' },
  { name: '추천', href: '/recommend' },
];

const Header = ({ type = 'type1', title, sharing, prev }) => {
  const [selected, setSelected] = useState(0);
  const pathname = usePathname();

  const renderHeader = () => {
    switch (type) {
      // home header
      case 'type1':
        return (
          <header className="fixed top-0 left-0 right-0 z-50 flex items-center shadow-sm bg-white">
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
      // 이전, 타이틀, 각페이지에 맞는 버튼
      case 'type2':
        return (
          <header className="fixed top-0 left-0 right-0 z-50 flex items-center h-14 shadow-sm bg-white">
            <div className="container flex justify-between items-center relative">
              <button className="w-9 h-9 flex items-center">
                <ChevronLeft size={28} />
                <span className="sr-only">이전</span>
              </button>
            </div>
          </header>
        );
      // 닫기 헤더
      case 'type3':
        return (
          <header className="fixed top-0 left-0 right-0 z-50 flex items-center h-14 ">
            <div className="container flex justify-between items-center relative">
              <button className="w-9 h-9 rounded-full bg-white shadow-md flex justify-center items-center">
                <X size={24} />
                <span className="sr-only">닫기</span>
              </button>
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
