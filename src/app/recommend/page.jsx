'use client';
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { EffectCreative, Mousewheel, Pagination, Scrollbar } from 'swiper/modules';

import { AspectRatio, Box, Container } from '@chakra-ui/react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { mockExhibitions } from '@/data/exhibitionsData';
import LikeButton from '@/components/ui/LikeButton';
import Link from 'next/link';
import { useExhibitionLikes } from '../utils/hooks/useExhibitionLikes';

const RecommendPage = () => {
  const [mounted, setMounted] = useState(false);
  const [isLastSlideActive, setIsLastSlideActive] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isInitialRender, setIsInitialRender] = useState(true);

  // useExhibitionLikes 훅 사용
  const { exhibitions, toggleLike } = useExhibitionLikes(mockExhibitions);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && isInitialRender) {
      setIsInitialRender(false);
      setIsFirstLoad(false);
    }
  }, [mounted, isInitialRender]);

  if (!mounted) return null;

  return (
    <div className="container h-full overflow-hidden">
      <Swiper
        grabCursor={true}
        direction={'vertical'}
        mousewheel={{
          sensitivity: 0.5,
        }}
        spaceBetween={30}
        slidesPerView={1}
        effect={'creative'}
        creativeEffect={{
          prev: {
            translate: [0, 0, -1],
          },
          next: {
            translate: [0, 'calc(100% + 30px)', 0],
          },
        }}
        modules={[EffectCreative, Mousewheel]}
        onTransitionEnd={(swiper) => {
          setIsLastSlideActive(swiper.isEnd);
        }}
        className="!overflow-visible h-[500px] w-full"
      >
        {exhibitions.map((slide) => (
          <SwiperSlide key={slide.id} className="h-[500px] rounded-lg overflow-hidden relative">
            {({ isActive, isNext, isPrev }) => (
              <Link
                href={`/exhibition/overview/${slide.id}`}
                className={`block w-full h-full rounded-lg overflow-hidden transition-all duration-500 
                ${isFirstLoad ? '' : !isActive && !isPrev && (isNext ? 'translate-y-0' : 'translate-y-[100%]')}`}
              >
                <Image
                  src={slide.images[1]}
                  alt={slide.title}
                  width={1000}
                  height={100}
                  className="w-full h-full object-center object-cover brightness-[60%]"
                />
                <div className="p-4 pb-14 absolute top-0 left-0 w-full h-full flex flex-col justify-between">
                  <div className="ml-auto">
                    <LikeButton
                      isLike={slide.isLike}
                      onClick={() => {
                        toggleLike(slide.id);
                      }}
                      size={24}
                      type="white"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-3 overflow-hidden w-full">
                    <span className="px-3 py-px rounded-full bg-white text-xs font-bold">{slide.type}</span>
                    <strong className="text-white text-3xl font-paperlogy w-[80%] leading-tight break-keep">
                      {slide.title}
                    </strong>
                    <span className="w-full text-white text-sm font-bold">{slide.description}</span>
                  </div>
                </div>
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendPage;
