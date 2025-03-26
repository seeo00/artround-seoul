import { CaretLeft } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const BackButton = ({ size = 28, variant = 'default' }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // 이전 페이지로 이동
  };

  const btnVariants = {
    default: 'flex items-center',
    rounded: 'rounded-full bg-white shadow-md flex justify-center items-center',
  };

  return (
    <button onClick={handleBack} className={`w-10 h-10 ${btnVariants[variant]}`}>
      <span className="sr-only">이전</span>
      <CaretLeft size={size} weight="bold" />
    </button>
  );
};

export default BackButton;
