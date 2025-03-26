'use client';

import { useDisclosure } from '@chakra-ui/react';
import { Calendar, Clock, Globe, Info, MapPinned, Navigation, Ticket } from 'lucide-react';
import React, { use } from 'react';
import Link from 'next/link';
import { mockExhibitions } from '@/data/exhibitionsData';
import { formatDate } from '@/app/utils/date';
import OverviewSwiper from './overviewSwiper';
import { useParams } from 'next/navigation';
import ActionSheet from '@/components/ui/ActionSheet';

const OverviewPage = () => {
  const params = useParams();
  const id = params?.id || null;

  const { isOpen, onOpen, onClose } = useDisclosure(); // ActionSheet 상태 제어
  // 해당 전시 데이터 찾기
  const exhibition = mockExhibitions.find((item) => item.id === Number(id));
  // URL 파라미터에서 id 값 가져오기

  if (!exhibition) {
    return <p>해당 전시 정보가 없습니다.</p>;
  }
  return (
    <div className="flex flex-col h-main-minus-header">
      <div className="container">
        <div className="py-8">
          <h2 className="text-2xl font-bold font-paperlogy break-keep">{exhibition.title}</h2>
          <dl className="text-sm pt-3">
            <div className="flex items-center gap-3 mt-2">
              <dt className="flex-shrink-0">
                <Calendar size={16} />
              </dt>
              <dd>
                {formatDate(exhibition.details.period.start)} ~ {formatDate(exhibition.details.period.end)}
              </dd>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <dt className="flex-shrink-0">
                <MapPinned size={16} />
              </dt>
              <dd className="flex flex-col">
                <span>{exhibition.details.location.name}</span>
                <span>{exhibition.details.location.address}</span>
              </dd>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <dt className="flex-shrink-0">
                <Clock size={16} />
              </dt>
              <dd>{exhibition.details.time}</dd>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <dt className="flex-shrink-0">
                <Ticket size={16} />
              </dt>
              <dd>{exhibition.details.price}</dd>
            </div>
          </dl>
        </div>
        <ul className="flex justify-center gap-4 py-5  border-t border-gray-200">
          <li className="basis-2/6">
            <Link
              href={`/exhibition/details/${exhibition.id}`}
              className="w-full flex flex-col gap-3 items-center justify-between"
            >
              <Info size={24} />
              <p className="text-sm font-medium">전시 소개</p>
            </Link>
          </li>
          <li className="basis-2/6">
            <a
              href={exhibition.details.location.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex flex-col gap-3 items-center justify-between"
            >
              <Globe size={24} />
              <p className="text-sm font-medium">웹사이트 방문</p>
            </a>
          </li>
          <li className="basis-2/6">
            <button onClick={onOpen} className="w-full flex flex-col gap-3 items-center justify-between">
              <Navigation size={24} />
              <p className="text-sm font-medium">길찾기</p>
            </button>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <OverviewSwiper title={exhibition.title} images={exhibition.images} />
      </div>
      <ActionSheet isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default OverviewPage;
