'use client';

import ExhibitionList from '@/components/list/ExhibitionList';
import { Button, Card, CardBody, CardFooter, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { ClassNames } from '@emotion/react';
import classNames from 'classnames';
import { Calendar, Heart } from 'lucide-react';

import React, { useRef, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';

const TestBottomSheet = () => {
  const [open, setOpen] = useState(true); // 초기값 true로 설정하여 페이지 진입 시 열림
  const bottomSheetRef = useRef(null); // BottomSheet에 연결할 ref 생성

  const handleDismiss = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.snapTo(0); // 스냅포인트 배열의 첫 번째 값(최소 높이)로 이동
    }
  };

  // 바텀시트 내부
  const [selected, setSelected] = useState(0);

  const exhibitions = [
    {
      id: 1,
      status: 'Ongoing',
      title: 'KENSHI : 영원',
      location: '서울, Gallery X2',
      date: '2024.01.01 ~ 2024.01.01',
      imageUrl: '/images/pattern/main/list_1.jpg',
    },
    {
      id: 2,
      status: 'Ending Soon',
      title: '생명에 질감이 있다면',
      location: '서울, 이랜드갤러리',
      date: '2024.02.01 ~ 2024.02.28',
      imageUrl: '/images/pattern/main/list_2.avif',
    },
    {
      id: 3,
      status: 'Upcoming',
      title: '모건 애비뉴',
      location: '서울, Gallery JJ',
      date: '2024.03.01 ~ 2024.03.15',
      imageUrl: '/images/pattern/main/list_3.avif',
    },
    {
      id: 4,
      status: 'Ongoing',
      title: '파라노이아 파라다이스',
      location: '서울, 아뜰리에 에르메스',
      date: '2024.04.01 ~ 2024.05.15',
      imageUrl: '/images/pattern/main/list_4.avif',
    },
    {
      id: 5,
      status: 'Ongoing',
      title: '꿈결 물결 바람결',
      location: '서울, 아뜰리에 에르메스',
      date: '2024.04.01 ~ 2024.05.15',
      imageUrl: '/images/pattern/main/list_5.avif',
    },
    {
      id: 6,
      status: 'Upcoming',
      title: '파리의 휴일',
      location: '서울, 아뜰리에 에르메스',
      date: '2024.04.01 ~ 2024.05.15',
      imageUrl: '/images/pattern/main/list_6.avif',
    },
  ];

  return (
    <div>
      <BottomSheet
        blocking={false}
        ref={bottomSheetRef} // ref 연결
        open={open}
        snapPoints={({ minHeight, maxHeight }) => [124, maxHeight * 0.4, maxHeight * 0.9]} // 스냅 포인트 설정
        defaultSnap={({ maxHeight }) => maxHeight * 0.5} // 초기 위치를 50%로 설정
        onDismiss={handleDismiss} // 최소 높이로 이동하도록 설정
        header={
          // 탭 버튼
          <Container>
            <div className="h-10 flex items-center gap-2 cursor-grab select-none">
              {exhibitions.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelected(index);
                  }}
                  className={classNames('text-gray-900 font-normal text-xs bg-gray-100 rounded-full px-3 py-1.5', {
                    'text-white bg-gray-900': selected === index,
                  })}
                >
                  {item.status}
                </button>
              ))}
            </div>
          </Container>
        }
      >
        <Container>
          <div className="flex flex-col gap-4">
            <ExhibitionList exhibitions={exhibitions} />
          </div>
        </Container>
      </BottomSheet>
    </div>
  );
};

export default TestBottomSheet;
