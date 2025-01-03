import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { AspectRatio, Container } from '@chakra-ui/react';
import Image from 'next/image';

export default function OverviewSwiper({ title, images }) {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={true}
      modules={[Autoplay, Pagination]}
      className="mySwiper overviewSwiper !overflow-visible h-full"
    >
      {images.slice(1).map((src, index) => (
        <SwiperSlide key={index}>
          <Image
            src={src}
            alt={`${title} - 이미지 ${index + 1}`}
            width={1470}
            height={980}
            className="w-full h-full object-cover object-center aspect-video"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
