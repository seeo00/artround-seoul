'use client';

import { Container } from '@chakra-ui/react';
import React from 'react';

const Wrap = ({ type = 'type1', children }) => {
  switch (type) {
    // padding-bottom 56px
    case 'type1':
      return <div className="min-h-svh flex flex-col pb-14">{children}</div>;

    // padding-bottom 0px
    case 'type2':
      return <div className="min-h-svh flex flex-col ">{children}</div>;

    // padding-bottom 80px
    case 'type3':
      return <div className="min-h-svh flex flex-col pb-20">{children}</div>;

    default:
      return <Container>defaul</Container>;
  }
};

export default Wrap;
