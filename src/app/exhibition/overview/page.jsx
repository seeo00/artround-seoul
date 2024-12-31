'use client';

import { Box, Container, Heading, HStack, Icon, List, ListIcon, ListItem, Text, VStack } from '@chakra-ui/react';
import { Calendar, Clock, Globe, Info, MapPin, MapPinned, Navigation, Ticket } from 'lucide-react';
import React from 'react';
import IntroSwiper from './introSwiper';
import Link from 'next/link';
import { mockExhibitions } from '@/data/exhibitionsData';
import { formatDate } from '@/app/utils/date';

export const infoList = [
  {
    icon: Calendar,
    label: '기간',
    content: '2024.01.01 ~ 2024.01.01',
  },
  {
    icon: MapPinned,
    label: '장소',
    content: ['Gallery X2', '서울특별시 서초구 잠원로 51'],
  },
  {
    icon: Clock,
    label: '시간',
    content: '매일 10:30 ~ 22:00',
  },
  {
    icon: Ticket,
    label: '가격',
    content: '4,000원',
  },
];

const navigationData = [
  { label: '전시 소개', icon: Info },
  { label: '웹사이트 방문', icon: Globe },
  { label: '길찾기', icon: Navigation },
];

const OverviewPage = () => {
  return (
    <div className="flex flex-col h-main-minus-header">
      <div className="container">
        <div className="py-8">
          <h2 className="text-2xl font-bold font-paperlogy break-keep">당신의 경이로운 세계, 그리고 예술</h2>
          <dl className="text-sm pt-5">
            {infoList.map(({ label, icon: Icon, content }) => (
              <div key={label} className="flex items-center gap-3 mt-2">
                <dt className="font-bold flex-shrink-0">
                  <span className="sr-only">{label}</span>
                  <Icon size={16} />
                </dt>
                <dd>
                  {Array.isArray(content) ? content.map((item, index) => <div key={index}>{item}</div>) : content}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <ul className="flex justify-center gap-4 py-5  border-t border-gray-200">
          {navigationData.map((item) => (
            <li key={item.label} className="basis-2/6">
              <Link href="#" className="flex flex-col gap-3 items-center justify-between">
                <Icon as={item.icon} boxSize={6} />
                <Text fontSize="sm" fontWeight="medium">
                  {item.label}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1">
        <IntroSwiper />
      </div>
    </div>
  );
};

export default OverviewPage;
