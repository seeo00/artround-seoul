import React, { useState } from 'react';
import ExhibitionInfoSheet from './ExhibitionInfoSheet';
import KakaoMap from './KakaoMap';
import { mockExhibitions } from '../../data/exhibitionsData';

const Home = () => {
  const [selectedExhibitionId, setSelectedExhibitionId] = useState(null);

  const handleMarkerClick = (exhibitionId) => {
    setSelectedExhibitionId(exhibitionId);
  };

  return (
    <>
      <KakaoMap exhibitionsData={mockExhibitions} onMarkerClick={handleMarkerClick} />
      <ExhibitionInfoSheet selectedExhibitionId={selectedExhibitionId} />
    </>
  );
};

export default Home;
