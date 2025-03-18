'use client';

import React, { use, useEffect, useRef, useState } from 'react';
import ActionBar from './ActionBar';
import Image from 'next/image';
import DetailsSwiper from './detailsSwiper';
import { mockExhibitions } from '@/data/exhibitionsData';
import { formatDate } from '@/app/utils/date';
import TagButton from '@/components/ui/TagButton';
import { useParams } from 'next/navigation';
import { useExhibitionLikes } from '@/app/utils/hooks/useExhibitionLikes';

const DetailsPage = () => {
  const params = useParams();
  const id = params?.id || null;

  const { exhibitions, toggleLike } = useExhibitionLikes(mockExhibitions);
  const exhibition = exhibitions.find((item) => item.id === Number(id));

  if (!exhibition) {
    return <p>해당 전시 정보가 없습니다.</p>;
  }

  return (
    <div className="relative">
      <div className="w-full max-w-[390px] mx-auto fixed top-0 left-0 right-0 z-[-1] overflow-hidden">
        <Image
          src={exhibition.images[1]}
          alt={`${exhibition.title} - 대표 이미지`}
          width={1470}
          height={980}
          className="w-full h-[55svh] object-cover object-center brightness-[75%] relative"
        />
        <div className="container absolute bottom-14 left-0">
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
