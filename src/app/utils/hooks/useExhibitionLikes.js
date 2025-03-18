// hooks/useExhibitionLikes.js
import { useState, useEffect } from 'react';

export const useExhibitionLikes = (initialExhibitions) => {
  // exhibitions 상태 초기화를 useEffect 내부로 이동
  const [exhibitions, setExhibitions] = useState([]);
  const [likedExhibitions, setLikedExhibitions] = useState([]);

  // 초기화 및 localStorage 동기화
  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likedExhibitions')) || [];

    // initialExhibitions와 localStorage 데이터를 동기화
    const updatedExhibitions = initialExhibitions.map((exhibition) => ({
      ...exhibition,
      isLike: storedLikes.some((item) => item.id === exhibition.id),
    }));

    setExhibitions(updatedExhibitions);
    setLikedExhibitions(storedLikes);
  }, []); // initialExhibitions를 의존성 배열에서 제거

  // 좋아요 토글 함수
  const toggleLike = (id) => {
    setExhibitions((prevExhibitions) => {
      const updatedExhibitions = prevExhibitions.map((exhibition) =>
        exhibition.id === id ? { ...exhibition, isLike: !exhibition.isLike } : exhibition
      );

      // 좋아요 목록 업데이트
      const newLikedExhibitions = updatedExhibitions.filter((exhibition) => exhibition.isLike);

      // localStorage 업데이트
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
