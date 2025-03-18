// 'use client';

// import { Input } from '@chakra-ui/react';
// import { Search } from 'lucide-react';
// import React, { useEffect, useState } from 'react';
// import { mockExhibitions } from '../../data/exhibitionsData';
// import Image from 'next/image';
// import { HiSparkles } from 'react-icons/hi2';
// import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';

// const SearchPage = () => {
//   const [text, setText] = useState('');
//   const [results, setResults] = useState([]);
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const tagParam = searchParams.get('tag');
//     if (tagParam) {
//       setText(tagParam);
//       performSearch(tagParam);
//     }
//   }, [searchParams]);

//   const handleChange = (e) => {
//     setText(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     performSearch();
//   };

//   const performSearch = (searchText = text) => {
//     const filteredResults = mockExhibitions.filter(
//       (item) =>
//         (item.title && item.title.toLowerCase().includes(searchText.toLowerCase())) ||
//         (item.artists &&
//           typeof item.artists === 'string' &&
//           item.artists.toLowerCase().includes(searchText.toLowerCase())) ||
//         (item.tags &&
//           Array.isArray(item.tags) &&
//           item.tags.some((tag) => tag.toLowerCase().includes(searchText.toLowerCase())))
//     );
//     setResults(filteredResults);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} className="relative">
//         <Input
//           autoFocus
//           placeholder="검색어를 입력해주세요"
//           variant="flushed"
//           size="lg"
//           focusBorderColor="#000000"
//           value={text}
//           onChange={handleChange}
//           className="px-5 font-medium"
//         />
//         <button type="submit" className="absolute top-[50%] right-5 -translate-y-[50%]">
//           <Search />
//         </button>
//       </form>

//       <div className="container mt-8">
//         {results.length > 0 ? (
//           <>
//             <span className="block text-sm text-gray-500 py-5">{results.length}개의 전시</span>
//             <div className="space-y-4">
//               {results.map((item) => (
//                 <Link key={item.id} href={`/exhibition/overview/${item.id}`} className="flex">
//                   {item.images && item.images.length > 0 && (
//                     <div className="w-28 h-28 flex-shrink-0 ">
//                       <Image
//                         src={item.images[0]}
//                         alt={item.title}
//                         width={500}
//                         height={300}
//                         className="w-full h-full object-cover rounded"
//                       />
//                     </div>
//                   )}
//                   <div className="px-4 py-2 overflow-hidden">
//                     <strong className="block font-semibold mb-2">{item.title}</strong>
//                     {item.description && (
//                       <p className="one-line-ellipsis text-gray-500 text-sm mb-1">{item.description}</p>
//                     )}
//                     {item.details?.period && (
//                       <p className="text-xs">{item.details.period.start.split('-').join('.')}</p>
//                     )}
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </>
//         ) : text ? (
//           <div className="flex flex-col items-center justify-center mt-28 gap-5">
//             <p className="text-gray-500 font-paperlogy font-medium">검색 결과가 없습니다</p>
//           </div>
//         ) : (
//           <div className="flex flex-col items-center justify-center mt-28 gap-5">
//             <HiSparkles size={36} />
//             <p className="font-paperlogy font-medium">전시명, 작가, 키워드를 입력하세요</p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default SearchPage;

'use client';
import { Input } from '@chakra-ui/react';
import { Search } from 'lucide-react';
import React, { Suspense, useEffect, useState } from 'react';
import { mockExhibitions } from '../../data/exhibitionsData';
import Image from 'next/image';
import { HiSparkles } from 'react-icons/hi2';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const SearchResults = () => {
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const tagParam = searchParams.get('tag');
    if (tagParam) {
      setText(tagParam);
      performSearch(tagParam);
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    performSearch();
  };

  const performSearch = (searchText = text) => {
    const filteredResults = mockExhibitions.filter(
      (item) =>
        (item.title && item.title.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.artists &&
          typeof item.artists === 'string' &&
          item.artists.toLowerCase().includes(searchText.toLowerCase())) ||
        (item.tags &&
          Array.isArray(item.tags) &&
          item.tags.some((tag) => tag.toLowerCase().includes(searchText.toLowerCase())))
    );
    setResults(filteredResults);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="relative">
        <Input
          autoFocus
          placeholder="검색어를 입력해주세요"
          variant="flushed"
          size="lg"
          focusBorderColor="#000000"
          value={text}
          onChange={handleChange}
          className="px-5 font-medium"
        />
        <button type="submit" className="absolute top-[50%] right-5 -translate-y-[50%]">
          <Search />
        </button>
      </form>
      <div className="container mt-8">
        {results.length > 0 ? (
          <>
            <span className="block text-sm text-gray-500 py-5">{results.length}개의 전시</span>
            <div className="space-y-4">
              {results.map((item) => (
                <Link key={item.id} href={`/exhibition/overview/${item.id}`} className="flex">
                  {item.images && item.images.length > 0 && (
                    <div className="w-28 h-28 flex-shrink-0 ">
                      <Image
                        src={item.images[0]}
                        alt={item.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  )}
                  <div className="px-4 py-2 overflow-hidden">
                    <strong className="block font-semibold mb-2">{item.title}</strong>
                    {item.description && (
                      <p className="one-line-ellipsis text-gray-500 text-sm mb-1">{item.description}</p>
                    )}
                    {item.details?.period && (
                      <p className="text-xs">{item.details.period.start.split('-').join('.')}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : text ? (
          <div className="flex flex-col items-center justify-center mt-28 gap-5">
            <p className="text-gray-500 font-paperlogy font-medium">검색 결과가 없습니다</p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-28 gap-5">
            <HiSparkles size={36} />
            <p className="font-paperlogy font-medium">전시명, 작가, 키워드를 입력하세요</p>
          </div>
        )}
      </div>
    </>
  );
};

const SearchPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center p-10">
          <p className="font-medium">검색 로딩 중...</p>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
};

export default SearchPage;
