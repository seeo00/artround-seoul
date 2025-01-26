import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';
import TabBar from '@/components/layout/navigation/TabBar';
import Wrap from '@/components/layout/Wrap';
import React from 'react';

const LikedLayout = ({ children }) => {
  return (
    <Wrap type="type3">
      <Header type="type4" title={'관심 리스트'} />
      <Main>{children}</Main>
      <TabBar />
    </Wrap>
  );
};

export default LikedLayout;
