'use client';

import React from 'react';

const Main = ({ type = 'type1', children }) => {
  switch (type) {
    // 메인 지도
    case 'type1':
      return <main className="flex-1 w-full h-full pt-14 bg-white">{children}</main>;

    // padding-top 0px
    case 'type2':
      return <main className="flex-1 bg-white">{children}</main>;

    default:
      return <main>default</main>;
  }
};

export default Main;
