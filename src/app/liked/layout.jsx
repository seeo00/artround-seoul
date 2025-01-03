import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';
import TabBar from '@/components/layout/navigation/TabBar';
import Wrap from '@/components/layout/Wrap';
import React from 'react';

const LikedLayout = ({ children }) => {
  return (
    <Wrap>
      <Header />
      <Main>{children}</Main>
      <TabBar />
    </Wrap>
  );
};

export default LikedLayout;
