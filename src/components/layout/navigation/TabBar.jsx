import { Container } from '@chakra-ui/react';
import { Heart, House, MessageSquareCode, Search, User } from 'lucide-react';
import React, { useState } from 'react';
import { GrHomeRounded } from 'react-icons/gr';
import { GrSearch } from 'react-icons/gr';
import { GrFormSearch } from 'react-icons/gr';
import { GoSearch } from 'react-icons/go';
import { LuSearch } from 'react-icons/lu';

const tabBarNav = [
  {
    label: '검색',
    href: '#',
    icon: <Search size={28} />,
  },
  {
    label: '홈',
    href: '#',
    icon: <House size={28} />,
  },
  {
    label: '좋아요',
    href: '#',
    icon: <Heart size={28} />,
  },
];

const TabBar = () => {
  const [selected, setSelected] = useState(1);
  return (
    <nav className="bg-white fixed bottom-0 left-0 right-0 border-t border-t-gray-200 z-50">
      <Container>
        <div className="flex gap-4 h-[55px]">
          {tabBarNav.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => {
                setSelected(index);
              }}
              className="basis-2/6 flex items-center justify-center"
            >
              {React.cloneElement(item.icon, {
                className: `${selected === index ? 'text-gray-900' : 'text-gray-300'}`,
              })}
              <span className="blind">{item.label}</span>
            </a>
          ))}
        </div>
      </Container>
    </nav>
  );
};

export default TabBar;
