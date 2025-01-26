'use client';

import { Card, CardBody, Heading, IconButton, Image, Text } from '@chakra-ui/react';
import { Calendar, Heart } from 'lucide-react';
import React, { useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import LikeButton from '../ui/LikeButton';
import { formatDate } from '@/app/utils/date';
import Link from 'next/link';

const ExhibitionList = ({ list, toggleLike }) => {
  const [selected, setSelected] = useState(false);
  return (
    <>
      <li>
        <Link href={`/exhibition/overview/${list.id}`} className="flex gap-4">
          <Image
            src={list.images[0]}
            alt={list.title}
            width={1000}
            height={1000}
            className="relative w-full max-w-32 h-40 object-cover rounded"
          />
          <div className="w-full flex">
            <div className="flex flex-col gap-2 py-3">
              <span className="text-orange-500 font-medium text-xs">{list.status}</span>
              <strong className="text-sm two-line-ellipsis">{list.title}</strong>
              <span className="text-gray-700 font-light text-xs">{list.details.location.name}</span>
              <span className="text-gray-700 flex items-center gap-1 font-normal text-xs">
                <Calendar size={14} className="text-gray-700" />
                {formatDate(list.details.period.start)} ~ {formatDate(list.details.period.end)}
              </span>
            </div>
            <div className="mt-auto ml-auto">
              {/* <LikeButton /> */}
              <LikeButton
                isLike={list.isLike}
                onClick={() => {
                  toggleLike(list.id);
                }}
                type="red"
              />
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};

export default ExhibitionList;
