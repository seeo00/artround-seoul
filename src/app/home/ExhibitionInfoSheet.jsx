'use client';

import { useBottomSheet } from '@/context/BottomSheetContext';
import ExhibitionList from '@/components/list/ExhibitionList';
import { mockExhibitions } from '@/data/exhibitionsData';
import classNames from 'classnames';
import React, { useRef, useEffect } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import { useExhibitionLikes } from '../utils/hooks/useExhibitionLikes';

const ExhibitionInfoSheet = ({ selectedExhibitionId }) => {
  const { sheetState, setSheetState } = useBottomSheet();
  const bottomSheetRef = useRef(null);
  const { exhibitions, toggleLike } = useExhibitionLikes(mockExhibitions);

  const handleTabChange = (newTab) => {
    setSheetState((prev) => ({
      ...prev,
      selectedTab: newTab,
    }));
  };

  const handleSnapChange = (snapIndex) => {
    setSheetState((prev) => ({
      ...prev,
      snapIndex,
    }));
  };

  useEffect(() => {
    if (bottomSheetRef.current) {
      setTimeout(() => {
        bottomSheetRef.current.snapTo(sheetState.snapIndex);
      }, 100);
    }
  }, [sheetState.snapIndex]);

  useEffect(() => {
    if (selectedExhibitionId) {
      const selectedExhibition = exhibitions.find((ex) => ex.id === selectedExhibitionId);
      if (selectedExhibition && selectedExhibition.status !== sheetState.selectedTab) {
        handleTabChange(selectedExhibition.status);
      }
    }
  }, [selectedExhibitionId, exhibitions, sheetState.snapIndex]);

  const handleDismiss = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.snapTo(0);
      handleSnapChange(0);
    }
  };

  const orderedStatuses = ['Ongoing', 'Ending Soon', 'Upcoming'];
  const uniqueStatuses = orderedStatuses.filter((status) => exhibitions.some((item) => item.status === status));

  const filteredList = exhibitions.filter((item) => item.status === sheetState.selectedTab);

  const sortedFilteredList = [...filteredList].sort((a, b) => {
    if (a.id === selectedExhibitionId) return -1;
    if (b.id === selectedExhibitionId) return 1;
    return 0;
  });

  return (
    <div>
      <BottomSheet
        blocking={false}
        ref={bottomSheetRef}
        open={true}
        snapPoints={({ minHeight, maxHeight }) => [124, maxHeight * 0.4, maxHeight * 0.9]}
        defaultSnap={({ maxHeight }) => maxHeight * 0.4}
        onDismiss={handleDismiss}
        onChange={handleSnapChange}
        header={
          <div className="container h-10 flex items-center gap-2 cursor-grab select-none">
            {uniqueStatuses.map((status) => (
              <button
                key={status}
                onClick={() => handleTabChange(status)}
                className={classNames('text-gray-900 font-normal text-xs bg-gray-100 rounded-full px-3 py-1.5', {
                  'text-white bg-gray-900': sheetState.selectedTab === status,
                })}
              >
                {status}
              </button>
            ))}
          </div>
        }
      >
        <ul className="container flex flex-col gap-4">
          {sortedFilteredList.map((list) => (
            <ExhibitionList
              key={list.id}
              list={list}
              toggleLike={toggleLike}
              isSelected={list.id === selectedExhibitionId}
            />
          ))}
        </ul>
      </BottomSheet>
    </div>
  );
};

export default ExhibitionInfoSheet;
