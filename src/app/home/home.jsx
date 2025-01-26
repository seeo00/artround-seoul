import React from 'react';
import ExhibitionInfoSheet from './ExhibitionInfoSheet';
import { Container } from '@chakra-ui/react';
import Map from './Map';

const Home = () => {
  return (
    <>
      <Map />
      <ExhibitionInfoSheet />
    </>
  );
};

export default Home;
