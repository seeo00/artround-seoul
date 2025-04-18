'use client';

import { Container } from '@chakra-ui/react';
import { Globe, Heart, House, MessageSquareCode, Navigation, Search, Share, User } from 'lucide-react';
import React, { useState } from 'react';
import { GrHomeRounded } from 'react-icons/gr';
import { GrSearch } from 'react-icons/gr';
import { GrFormSearch } from 'react-icons/gr';
import { GoSearch } from 'react-icons/go';
import { LuSearch } from 'react-icons/lu';
import LikeButton from '@/components/ui/LikeButton';

const ActionBar = ({ isLike, onClick }) => {
  const [selected, setSelected] = useState(1);
  return (
    <nav className="bg-white max-w-[390px] mx-auto fixed bottom-0 left-0 right-0 border-t border-t-gray-200 z-50 h-20">
      <Container>
        <div className="flex justify-end gap-5 pt-4">
          <LikeButton isLike={isLike} onClick={onClick} />
          <button className="w-8 h-8 flex justify-center items-center">
            <Share size={20} />
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default ActionBar;
