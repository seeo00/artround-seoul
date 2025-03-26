'use client';

import React from 'react';
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody } from '@chakra-ui/react';
import { SiNaver } from 'react-icons/si';
import { SiKakaotalk } from 'react-icons/si';
import { SiGoogle } from 'react-icons/si';

const ActionSheet = ({ isOpen, onClose }) => {
  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} size="xs">
      <DrawerOverlay className="!max-w-[390px] mx-auto left-auto" />
      <DrawerContent borderRadius="16px 16px 0 0" className="!max-w-[390px] mx-auto bg-gray-100">
        <DrawerHeader className=" relative">
          <span className="w-10 h-1 bg-gray-300 rounded-[4px] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"></span>
        </DrawerHeader>
        <DrawerBody className="pb-4">
          <ul className="bg-white rounded">
            <li className="p-4 border-b text-gray-700 text-sm font-semibold flex justify-between items-center">
              <p>카카오맵</p>
              <SiKakaotalk />
            </li>
            <li className="p-4 border-b text-gray-700 text-sm font-semibold flex justify-between items-center">
              <p>네이버 지도</p>
              <SiNaver />
            </li>
            <li className="p-4 border-b text-gray-700 text-sm font-semibold flex justify-between items-center">
              <p>구글 지도</p>
              <SiGoogle />
            </li>
          </ul>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ActionSheet;
