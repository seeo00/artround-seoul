'use client';

import { Card, CardBody, Heading, IconButton, Image, Text } from '@chakra-ui/react';
import { Calendar, Heart } from 'lucide-react';
import React, { useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import LikeButton from '../ui/LikeButton';
import { formatDate } from '@/app/utils/date';

const ExhibitionList = ({ item: { images, title, status, details } }) => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <div className="flex gap-4">
        <Image
          src={images[0]}
          alt={title}
          width={1000}
          height={1000}
          className="relative w-full max-w-32 h-40 object-cover rounded"
        />
        <div className="w-full flex">
          <div className="flex flex-col gap-2 py-3">
            <span className="text-orange-500 font-medium text-xs">{status}</span>
            <strong className="text-sm two-line-ellipsis">{title}</strong>
            <span className="text-gray-700 font-light text-xs">{details.location.name}</span>
            <span className="text-gray-700 flex items-center gap-1 font-normal text-xs">
              <Calendar size={14} className="text-gray-700" />
              {formatDate(details.period.start)} ~ {formatDate(details.period.end)}
            </span>
          </div>
          <div className="mt-auto ml-auto">
            <LikeButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExhibitionList;
