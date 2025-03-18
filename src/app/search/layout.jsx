import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';
import TabBar from '@/components/layout/navigation/TabBar';
import Wrap from '@/components/layout/Wrap';
import React from 'react';

const SearchLayout = ({ children }) => {
  return (
    <Wrap type="type4">
      <Header type="type4" title={'검색'} />
      <Main>{children}</Main>
      <TabBar />
    </Wrap>
  );
};

export default SearchLayout;
