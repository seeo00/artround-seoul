'use client';

import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import { Calendar, Heart } from 'lucide-react';

import React from 'react';

const ExhibitionList = ({ exhibitions }) => {
  const uniqueStatuses = [...new Set(exhibitions.map((item) => item.status))];
  console.log(uniqueStatuses);
  return (
    <>
      {exhibitions.map((item) => (
        <Card key={item.id} direction={{ base: 'row' }} overflow="hidden" className="shadow-none rounded-none h-40 ">
          <Image maxW={{ base: '40%' }} src={item.imageUrl} alt="Caffe Latte" className="rounded" />
          <div className="py-2 px-4 flex w-full">
            <CardBody className="flex flex-col gap-2 p-0 ">
              <Text className="text-orange-500 font-medium text-xs">{item.status}</Text>
              <Heading size="sm">{item.title}</Heading>
              <Text className="text-gray-700 font-light text-xs">{item.location}</Text>
              <Text className="text-gray-700 flex items-center gap-1 font-normal text-xs ">
                <Calendar size={14} className="text-gray-700" /> {item.date}
              </Text>
            </CardBody>
            <div className="mt-auto">
              <Heart size={20} className="text-gray-700" />
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default ExhibitionList;
