import { useState, useEffect } from 'react';

export const useExhibitionLikes = (initialExhibitions) => {
  const [exhibitions, setExhibitions] = useState([]);
  const [likedExhibitions, setLikedExhibitions] = useState([]);

  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likedExhibitions')) || [];

    const updatedExhibitions = initialExhibitions.map((exhibition) => ({
      ...exhibition,
      isLike: storedLikes.some((item) => item.id === exhibition.id),
    }));

    setExhibitions(updatedExhibitions);
    setLikedExhibitions(storedLikes);
  }, []);

  const toggleLike = (id) => {
    setExhibitions((prevExhibitions) => {
      const updatedExhibitions = prevExhibitions.map((exhibition) =>
        exhibition.id === id ? { ...exhibition, isLike: !exhibition.isLike } : exhibition
      );

      const newLikedExhibitions = updatedExhibitions.filter((exhibition) => exhibition.isLike);

      localStorage.setItem('likedExhibitions', JSON.stringify(newLikedExhibitions));

      setLikedExhibitions(newLikedExhibitions);
      return updatedExhibitions;
    });
  };

  return {
    exhibitions,
    likedExhibitions,
    toggleLike,
  };
};
