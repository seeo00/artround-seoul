'use client';

import { Container } from '@chakra-ui/react';
import React from 'react';

const Wrap = ({ type = 'type1', children }) => {
  switch (type) {
    // 메인 지도
    case 'type1':
      return <div className="w-full h-full flex flex-col pb-14 bg-white">{children}</div>;

    // padding-bottom 0px
    case 'type2':
      return <div className="w-full h-full flex flex-col bg-white">{children}</div>;

    // padding-bottom 80px
    case 'type3':
      return <div className="w-full h-full bg-white pb-20">{children}</div>;

    case 'type4':
      return <div className="w-full min-h-full bg-white pb-20">{children}</div>;

    default:
      return <Container>defaul</Container>;
  }
};

export default Wrap;
