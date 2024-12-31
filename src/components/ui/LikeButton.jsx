import { useState } from 'react';
import { Heart } from 'lucide-react';

const LikeButton = ({ size = 20, selectedColor = 'fill-red-500 stroke-red-500', defaultColor = '' }) => {
  const [selected, setSelected] = useState(false);

  return (
    <button onClick={() => setSelected(!selected)} className="w-8 h-8 flex justify-center items-center">
      <Heart size={size} className={selected ? selectedColor : defaultColor} />
    </button>
  );
};

export default LikeButton;
