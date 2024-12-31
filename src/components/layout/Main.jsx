'use client';

import { Container, Heading } from '@chakra-ui/react';
import React from 'react';

const Main = ({ type = 'type1', children }) => {
  switch (type) {
    // padding-top 56px
    case 'type1':
      return <main className="flex-1 pt-14">{children}</main>;

    // padding-top 0px
    case 'type2':
      return <main className="flex-1">{children}</main>;

    default:
      return <Container>defaul</Container>;
  }
};

export const Section = ({ title, children }) => {
  return (
    <section className="py-20">
      <Container className="flex flex-col gap-5">
        {title && <Heading>{title}</Heading>}
        <div>{children}</div>
      </Container>
    </section>
  );
};

export default Main;
