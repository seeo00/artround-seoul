import { useRouter } from 'next/navigation';
import React from 'react';

const TagButton = ({ tag }) => {
  const router = useRouter();

  const handleTagClick = () => {
    router.push(`/search?tag=${encodeURIComponent(tag)}`);
  };
  return (
    <button onClick={handleTagClick} className="text-sm font-medium bg-gray-100 px-3 py-2 rounded">
      #{tag}
    </button>
  );
};

export default TagButton;
