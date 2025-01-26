'use client';

import React, { use, useEffect, useRef, useState } from 'react';
import ActionBar from './ActionBar';
import Image from 'next/image';
import DetailsSwiper from './detailsSwiper';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mockExhibitions } from '@/data/exhibitionsData';
import { formatDate } from '@/app/utils/date';
import TagButton from '@/components/ui/TagButton';
import { useParams } from 'next/navigation';

const DetailsPage = () => {
  const [mounted, setMounted] = useState(false);
  const [exhibitions, setExhibitions] = useState(mockExhibitions);
  const params = useParams();
  const id = params?.id || null;

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('exhibitions');
    if (stored) {
      setExhibitions(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('exhibitions', JSON.stringify(exhibitions));
    }
  }, [exhibitions, mounted]);

  const exhibition = exhibitions.find((item) => item.id === Number(id));

  const triggerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!triggerRef.current || !textRef.current || !imageRef.current) {
      // console.warn('DOM 요소가 렌더링되지 않았습니다.');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'bottom center',
        end: 'bottom 40%',
        scrub: true,
        //markers: true,
      },
      opacity: 0.3,
    });

    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'bottom center',
        end: 'bottom 40%',
        scrub: true,
        //markers: true,
      },
      scale: 1.2,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [mounted, triggerRef, textRef, imageRef]);

  const toggleLike = (id) => {
    setExhibitions((prevExhibitions) =>
      prevExhibitions.map((exhibition) =>
        exhibition.id === id ? { ...exhibition, isLike: !exhibition.isLike } : exhibition
      )
    );
  };

  if (!mounted) return null;

  if (!exhibition) {
    return <p>해당 전시 정보가 없습니다.</p>;
  }

  return (
    <div className="relative">
      <div ref={triggerRef} className="w-full max-w-[390px] mx-auto fixed top-0 left-0 right-0 z-[-1] overflow-hidden">
        <Image
          src={exhibition.images[1]}
          alt={`${exhibition.title} - 대표 이미지`}
          width={1470}
          height={980}
          ref={imageRef}
          className="w-full h-[55svh] object-cover object-center brightness-[75%] relative"
        />
        <div ref={textRef} className="container absolute bottom-14 left-0">
          <div className="flex items-center">
            <span className="text-xs text-white font-medium">{exhibition.type}</span>
            <span className="block h-[10px] w-[1px] bg-gray-300 mx-2"></span>
            <span className="text-xs text-white font-medium">{formatDate(exhibition.details.period.start)}</span>
          </div>
          <h2 className="text-3xl font-paperlogy font-bold !max-w-[80%] leading-tight text-white break-keep mt-3">
            {exhibition.title}
          </h2>
          <p className="text-sm text-white font-medium mt-3">{exhibition.description}</p>
        </div>
      </div>

      <div className="pt-[60px] py-[100px] flex flex-col gap-7 relative mt-[calc(55svh+1px)] bg-white">
        <div className="container leading-[1.75] text-[15px]">
          {exhibition.fullDescription.map((item, index) => (
            <p key={index} className="pt-5 first:pt-0">
              {item}
            </p>
          ))}
        </div>
        <DetailsSwiper title={exhibition.title} images={exhibition.images} />
        <div className="container">
          <div className="bg-gray-100 p-5 rounded">
            <strong>{exhibition.title}</strong>
            <dl className="text-sm">
              <div className="flex gap-3 mt-2">
                <dt className="flex-shrink-0 font-bold">기간</dt>
                <dd>
                  {formatDate(exhibition.details.period.start)} ~ {formatDate(exhibition.details.period.end)}
                </dd>
              </div>
              <div className="flex gap-3 mt-2">
                <dt className="flex-shrink-0 font-bold">장소</dt>
                <dd className="flex flex-col">
                  <span>{exhibition.details.location.name}</span>
                  <span>{exhibition.details.location.address}</span>
                </dd>
              </div>
              <div className="flex  gap-3 mt-2">
                <dt className="flex-shrink-0 font-bold">시간</dt>
                <dd>{exhibition.details.time}</dd>
              </div>
              <div className="flex gap-3 mt-2">
                <dt className="flex-shrink-0 font-bold">가격</dt>
                <dd>{exhibition.details.price}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="container flex flex-wrap gap-3">
          {exhibition.tags.map((tag, index) => (
            <TagButton key={index} tag={tag} />
          ))}
        </div>
      </div>
      <ActionBar
        isLike={exhibition.isLike}
        onClick={() => {
          toggleLike(exhibition.id);
        }}
      />
    </div>
  );
};

export default DetailsPage;
