'use client';

import ExhibitionInfoSheet from '@/app/home/ExhibitionInfoSheet';
import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';
import TabBar from '@/components/layout/navigation/TabBar';
import Wrap from '@/components/layout/Wrap';
import React from 'react';

const OverviewLayout = ({ children }) => {
  return (
    <>
      <Wrap type="type2">
        <Header type="type2" />
        <Main>{children}</Main>
      </Wrap>
    </>
  );
};

export default OverviewLayout;
