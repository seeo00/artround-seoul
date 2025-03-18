'use client';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { BottomSheetProvider } from '@/context/BottomSheetContext';
import theme from '@/theme';

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <BottomSheetProvider>{children}</BottomSheetProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
