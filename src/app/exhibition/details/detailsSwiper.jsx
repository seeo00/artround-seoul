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

export default function DetailsSwiper() {
  return (
    <div className="detailsSwiper">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper  h-[400px] !overflow-visible"
      >
        <SwiperSlide>
          <Image
            src="/images/pattern/thumb/overview-swiper-2.avif"
            alt=""
            width={1470}
            height={980}
            className="w-full h-full object-cover object-center"
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
      <div className="custom-pagination text-center"></div>
    </div>
  );
}
