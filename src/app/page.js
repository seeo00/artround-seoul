'use client';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';
import Home from './home/home';
import SearchInput from '@/components/layout/header/SearchInput';
import TabBar from '@/components/layout/navigation/TabBar';
import Wrap from '@/components/layout/Wrap';

export default function Page() {
  return (
    <>
      <Wrap>
        <Header />
        <Main>
          <Home />
        </Main>
        <TabBar />
      </Wrap>
    </>
  );
}
