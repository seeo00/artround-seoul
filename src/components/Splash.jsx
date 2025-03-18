'use client';
import { Grid, GridItem } from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Splash = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const plusIconVariants = {
    visible: {
      rotate: 90,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const imageItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="min-h-[100svh] container bg-black"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex flex-col items-center gap-1 pt-5 w-full">
        <div className="w-full flex justify-end">
          <motion.div variants={plusIconVariants} style={{ originX: 0.5, originY: 0.5 }}>
            <BiPlus color="#fff" size={60} />
          </motion.div>
        </div>
        <h1 className="text-white font-paperlogy font-bold text-[32px]">ARTROUND SEOUL</h1>
      </div>

      <motion.div variants={gridVariants} className="pt-10 h-[calc(100vh-200px)]">
        <Grid templateColumns="repeat(4, 1fr)" templateRows="1fr 1fr 1fr 1fr 1fr 1.5fr" gap={2} className="h-full">
          <GridItem rowSpan={3} colSpan={2} className="overflow-hidden flex items-end justify-center">
            <motion.div variants={imageItemVariants} whileHover={{ scale: 1.05 }} className="w-full h-full">
              <Image
                src="/images/splash-1.avif"
                alt="splash image"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </GridItem>

          <GridItem
            rowSpan={2}
            colSpan={2}
            colStart={3}
            rowStart={2}
            className="overflow-hidden flex items-end justify-center"
          >
            <motion.div variants={imageItemVariants} whileHover={{ scale: 1.05 }} className="w-full h-full">
              <Image
                src="/images/splash-2.avif"
                alt="splash image"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </GridItem>

          <GridItem rowSpan={2} colSpan={3} colStart={2} className="overflow-hidden flex items-end justify-center">
            <motion.div variants={imageItemVariants} whileHover={{ scale: 1.05 }} className="w-full h-full">
              <Image
                src="/images/splash-3.avif"
                alt="splash image"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </GridItem>

          <GridItem rowSpan={1} colSpan={3} className="overflow-hidden flex items-end justify-center">
            <motion.div variants={imageItemVariants} whileHover={{ scale: 1.05 }} className="w-full h-full">
              <Image
                src="/images/splash-4.avif"
                alt="splash image"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </GridItem>
        </Grid>
      </motion.div>
    </motion.div>
  );
};

export default Splash;
