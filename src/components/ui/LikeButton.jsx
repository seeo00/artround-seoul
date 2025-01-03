import { HeartStraight } from '@phosphor-icons/react';
import { Heart } from 'lucide-react';
import { useState } from 'react';

const LikeButton = ({ onClick, size = 20, selectedColor = 'fill-red-500 stroke-red-500', defaultColor = '' }) => {
  const [selected, setSelected] = useState(false);
  const handleClick = (e) => {
    e.stopPropagation(); // 이벤트 전파 중단
    e.preventDefault(); // 기본 동작(링크 이동) 방지
    setSelected(!selected); // 상태 변경
    if (onClick) onClick(e); // 추가 로직이 있다면 실행
  };

  return (
    <button onClick={handleClick} className="w-8 h-8 flex justify-center items-center">
      <Heart size={size} className={selected ? selectedColor : defaultColor} />
    </button>
  );
};

export default LikeButton;
