import { useState, useEffect } from 'react';
import { mockExhibitions } from '@/data/exhibitionsData';

const useExhibitions = () => {
  const [exhibitions, setExhibitions] = useState([]);

  useEffect(() => {
    const storedExhibitions = JSON.parse(localStorage.getItem('exhibitions')) || mockExhibitions;
    setExhibitions(storedExhibitions);
  }, []);

  useEffect(() => {
    localStorage.setItem('exhibitions', JSON.stringify(exhibitions));
  }, [exhibitions]);

  const toggleLike = (id) => {
    setExhibitions((prevExhibitions) =>
      prevExhibitions.map((item) => (item.id === id ? { ...item, isLike: !item.isLike } : item))
    );
  };

  return { exhibitions, toggleLike };
};

export default useExhibitions;
