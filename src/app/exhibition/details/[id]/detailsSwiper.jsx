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

export default function DetailsSwiper({ title, images }) {
  return (
    <div className="detailsSwiper">
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper  h-[400px] !overflow-visible"
      >
        {images.slice(2).map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`${title} - 이미지 ${index + 2}`}
              width={1470}
              height={980}
              className="w-full h-full object-cover object-center aspect-video"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination text-center"></div>
    </div>
  );
}
