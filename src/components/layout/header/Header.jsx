'use client';

import { Button, Container, Heading, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { ChevronLeft, Menu, Search, Share } from 'lucide-react';
import React, { useState } from 'react';
import Navigation from './Navigation';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, DialogPanel } from '@headlessui/react';
import { LuUser } from 'react-icons/lu';

const tabNav = [
  { name: '주변', href: '#' },
  { name: '추천', href: '#' },
];

const Header = ({ type = 'type1', title, sharing, prev }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const renderHeader = () => {
    switch (type) {
      // 메인헤더
      case 'type1':
        return (
          <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur flex items-center shadow-sm">
            <Container>
              <div className="flex gap-4">
                {tabNav.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setSelected(index);
                    }}
                    className="text-lg/6 font-bold text-gray-900 h-12 flex items-center relative"
                  >
                    {item.name}
                    <span
                      className={`${
                        selected === index ? 'block w-full h-0.5 bg-gray-900 absolute bottom-0 left-0' : ''
                      }`}
                    ></span>
                  </a>
                ))}
              </div>
            </Container>
          </header>
        );
      // 이전, 타이틀, 각페이지에 맞는 버튼
      case 'type2':
        return (
          <header className="fixed top-0 left-0 right-0 z-50 bg-white flex items-center h-14 border-b border-gray-200">
            <Container className="flex justify-between items-center relative">
              <Button variant="icon" align="left">
                <ChevronLeft strokeWidth={3} size={3} />
                <span className="blind">이전</span>
              </Button>
              {title && (
                <Heading as="h1" className="text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {title}
                </Heading>
              )}
              {sharing && (
                <Button variant="icon" align="right">
                  <Share strokeWidth={3} />
                  <span className="blind">공유</span>
                </Button>
              )}
              {/* {등록 && <Button>등록</Button>} */}
            </Container>
          </header>
        );
      // 로그인 헤더
      case 'type3':
        return <Container>type3</Container>;
      default:
        return <Container>default</Container>;
    }
  };

  return <>{renderHeader()}</>;
};

export default Header;
