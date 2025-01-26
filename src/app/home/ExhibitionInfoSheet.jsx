'use client';

import ExhibitionList from '@/components/list/ExhibitionList';
import { mockExhibitions } from '@/data/exhibitionsData';
import { useToast } from '@chakra-ui/react';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
// import useExhibitions from '../utils/hooks/useExhibitions';

const ExhibitionInfoSheet = () => {
  const toast = useToast(); // useToast 훅
  const [open, setOpen] = useState(true); // 초기값 true로 설정하여 페이지 진입 시 열림
  const bottomSheetRef = useRef(null); // BottomSheet에 연결할 ref 생성
  const [mounted, setMounted] = useState(false);
  const [exhibitions, setExhibitions] = useState(mockExhibitions);

  // 바텀시트 내부
  const [selected, setSelected] = useState('Ongoing');

  const handleDismiss = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.snapTo(0); // 스냅포인트 배열의 첫 번째 값(최소 높이)로 이동
    }
  };

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

  if (!mounted) return null;

  const orderedStatuses = ['Ongoing', 'Ending Soon', 'Upcoming']; // 내부 탭 순서 고정
  const uniqueStatuses = orderedStatuses.filter((status) => exhibitions.some((item) => item.status === status)); // orderedStatuses 배열을 기준으로 filter 함수 실행
  const filteredList = exhibitions.filter((item) => {
    return item.status === selected;
  });

  //좋아요 토글 함수
  const toggleLike = (id) => {
    setExhibitions((prevExhibitions) =>
      prevExhibitions.map((exhibition) =>
        exhibition.id === id ? { ...exhibition, isLike: !exhibition.isLike } : exhibition
      )
    );
  };

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
          <div className="container h-10 flex items-center gap-2 cursor-grab select-none">
            {uniqueStatuses.map((status) => (
              <button
                key={status}
                onClick={() => {
                  setSelected(status);
                }}
                className={classNames('text-gray-900 font-normal text-xs bg-gray-100 rounded-full px-3 py-1.5', {
                  'text-white bg-gray-900': selected === status,
                })}
              >
                {status}
              </button>
            ))}
          </div>
        }
      >
        <ul className="container flex flex-col gap-4">
          {filteredList.map((list) => (
            <ExhibitionList key={list.id} list={list} toggleLike={toggleLike} />
          ))}
        </ul>
      </BottomSheet>
    </div>
  );
};

export default ExhibitionInfoSheet;
