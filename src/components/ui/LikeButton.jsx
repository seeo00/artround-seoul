import { Box, useToast } from '@chakra-ui/react';
import { Heart } from 'lucide-react';

const LikeButton = ({ isLike, onClick, size = 20, type = 'red' }) => {
  const toast = useToast();

  const styles = {
    red: {
      defaultColor: '',
      selectedColor: 'fill-red-500 stroke-red-500',
    },
    white: {
      defaultColor: 'stroke-white fill-black/50',
      selectedColor: 'stroke-white fill-white',
    },
  };

  const { defaultColor, selectedColor } = styles[type];

  // selected 상태 제거하고 isLike prop만 사용
  // const handleClick = (e) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   if (onClick) onClick(e);
  // };

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    // Toast 메시지 표시
    if (isLike) {
      toast({
        position: 'bottom',
        duration: 3000,
        render: () => (
          <Box color="white" p={4} bg="rgba(0, 0, 0, 0.8)" borderRadius="md" fontWeight="semibold">
            관심 리스트 저장이 취소되었습니다 💔
          </Box>
        ),
      });
    } else {
      toast({
        position: 'bottom',
        duration: 3000,
        render: () => (
          <Box color="white" p={4} bg="rgba(0, 0, 0, 0.8)" borderRadius="md" fontWeight="semibold">
            관심 리스트에 저장되었습니다 ❤️
          </Box>
        ),
      });
    }

    if (onClick) onClick(e);
  };

  return (
    <button onClick={handleClick} className="w-8 h-8 flex justify-center items-center">
      <Heart size={size} className={isLike ? selectedColor : defaultColor} />
    </button>
  );
};

export default LikeButton;
