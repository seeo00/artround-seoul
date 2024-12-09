import React from 'react';
import IntroSwiper from './introSwiper';
import News from './news';
import { mockNews } from '@/data/newsData';
import Link from 'next/link';
import Image from 'next/image';
import Hero from './hero';
import Bento from './bento';

import TestBottomSheet from './bottomSheet';
import TestBottomSheet2, { ScrollableSnapPoints } from './bottomSheet2';
import MyModal from './bottomSheet2';
import VaulDrawer from './bottomSheet2';

const Home = () => {
  return (
    <>
      {/* <Hero />

      <Bento />
      <IntroSwiper /> */}
      <TestBottomSheet />

      {/* <News mockNews={mockNews} title="뉴스" /> */}
      {/* <VaulDrawer /> */}
    </>
  );
};

export default Home;
