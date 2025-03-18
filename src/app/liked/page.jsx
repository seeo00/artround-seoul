'use client';

import LikeButton from '@/components/ui/LikeButton';
import { mockExhibitions } from '@/data/exhibitionsData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { useExhibitionLikes } from '../utils/hooks/useExhibitionLikes';

const LikedPage = () => {
  const { likedExhibitions, toggleLike } = useExhibitionLikes(mockExhibitions);

  return (
    <div className="container">
      {likedExhibitions.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-40 gap-5">
          <FaMapMarkedAlt size={36} />
          <p className="font-paperlogy font-medium">저장된 관심 리스트가 없습니다.</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 pt-3">
          {likedExhibitions.map((item) => (
            <Link key={item.id} href={`/exhibition/overview/${item.id}`} className="basis-[calc(50%-8px)]">
              <div className="relative">
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="aspect-square rounded-lg brightness-[60%] w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0">
                  <LikeButton
                    type="white"
                    isLike={item.isLike}
                    onClick={() => {
                      toggleLike(item.id);
                    }}
                  />
                </div>
              </div>
              <p className="text-sm font-semibold mt-2 two-line-ellipsis">{item.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedPage;
