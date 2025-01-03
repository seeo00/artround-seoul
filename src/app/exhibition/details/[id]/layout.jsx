'use client';

import ExhibitionInfoSheet from '@/app/home/ExhibitionInfoSheet';
import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';
import TabBar from '@/components/layout/navigation/TabBar';
import Wrap from '@/components/layout/Wrap';
import React from 'react';

const DetailsLayout = ({ children }) => {
  return (
    <>
      <Wrap type="type3">
        <Header type="type3" />
        <Main type="type2">{children}</Main>
      </Wrap>
    </>
  );
};

export default DetailsLayout;
