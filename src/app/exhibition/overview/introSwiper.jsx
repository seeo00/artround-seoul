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

export default function IntroSwiper() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={true}
      modules={[Autoplay, Pagination]}
      className="mySwiper overviewSwiper !overflow-visible h-full"
    >
      <SwiperSlide className="bg-gray-200">
        <Image
          src="/images/pattern/thumb/overview-swiper-1.avif"
          alt=""
          width={1470}
          height={980}
          className="w-full h-full object-cover object-center aspect-video"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/pattern/thumb/overview-swiper-2.avif"
          alt=""
          width={1470}
          height={980}
          className="w-full h-full object-cover object-center aspect-video"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/pattern/thumb/overview-swiper-3.avif"
          alt=""
          width={1470}
          height={980}
          className="w-full h-full object-cover object-center aspect-video"
        />
      </SwiperSlide>
    </Swiper>
  );
}
