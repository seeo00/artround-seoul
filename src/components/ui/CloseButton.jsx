import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const CloseButton = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back(); // 이전 페이지로 이동
  };
  return (
    <button onClick={handleClose} className="w-9 h-9 rounded-full bg-white shadow-md flex justify-center items-center">
      <span className="sr-only">닫기</span>
      <X size={24} />
    </button>
  );
};

export default CloseButton;
