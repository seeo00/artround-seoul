'use client';

import { Container } from '@chakra-ui/react';
import { Heart, House, MessageSquareCode, Search, User } from 'lucide-react';
import React, { useState } from 'react';
import { GrHomeRounded } from 'react-icons/gr';
import { GrSearch } from 'react-icons/gr';
import { GrFormSearch } from 'react-icons/gr';
import { GoSearch } from 'react-icons/go';
import { LuSearch } from 'react-icons/lu';
import Link from 'next/link';

const tabBarNav = [
  {
    label: '검색',
    href: '#',
    icon: Search,
  },
  {
    label: '홈',
    href: '#',
    icon: House,
  },
  {
    label: '좋아요',
    href: '#',
    icon: Heart,
  },
];

const TabBar = () => {
  const [selected, setSelected] = useState(1);
  return (
    <nav className="bg-white fixed bottom-0 left-0 right-0 z-50 h-14 border-t border-t-gray-200">
      <ul className="container flex gap-10 h-14">
        {tabBarNav.map(({ label, icon: Icon, href }, index) => (
          <li key={index} className="basis-2/6">
            <Link
              href={href}
              onClick={() => {
                setSelected(index);
              }}
              className="w-full h-full flex items-center justify-center"
            >
              <span className="blind">{label}</span>
              <Icon size={28} className={`${selected === index ? 'text-gray-900' : 'text-gray-300'}`} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TabBar;
