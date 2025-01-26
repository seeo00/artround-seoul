'use client';

import LikeButton from '@/components/ui/LikeButton';
import { mockExhibitions } from '@/data/exhibitionsData';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';

const LikedPage = () => {
  const [mounted, setMounted] = useState(false);
  const [likedExhibitions, setLikedExhibitions] = useState([]);

  // 초기 로컬스토리지 데이터 로드
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('exhibitions');
    if (stored) {
      const parsedData = JSON.parse(stored);
      const filteredData = parsedData.filter((item) => item.isLike);
      setLikedExhibitions(filteredData);
    } else {
      const filteredMockData = mockExhibitions.filter((item) => item.isLike);
      setLikedExhibitions(filteredMockData);
      localStorage.setItem('exhibitions', JSON.stringify(mockExhibitions));
    }
  }, []);

  // likedExhibitions 변경 시 로컬스토리지 업데이트
  useEffect(() => {
    if (mounted && likedExhibitions.length > 0) {
      const stored = localStorage.getItem('exhibitions');
      if (stored) {
        const parsedData = JSON.parse(stored);

        const updatedData = parsedData.map((item) => {
          const likedItem = likedExhibitions.find((ex) => ex.id === item.id);
          return likedItem ? { ...item, isLike: likedItem.isLike } : item;
        });

        localStorage.setItem('exhibitions', JSON.stringify(updatedData));
      }
    }
  }, [likedExhibitions, mounted]);

  if (!mounted) return null;

  const toggleLike = (id) => {
    setLikedExhibitions((prevExhibitions) =>
      prevExhibitions.map((exhibition) =>
        exhibition.id === id ? { ...exhibition, isLike: !exhibition.isLike } : exhibition
      )
    );
  };

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
