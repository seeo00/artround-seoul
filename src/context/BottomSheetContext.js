'use client';

import { createContext, useContext, useState } from 'react';

const BottomSheetContext = createContext();

export function BottomSheetProvider({ children }) {
  const [sheetState, setSheetState] = useState({
    snapIndex: 1,
    selectedTab: 'Ongoing',
  });

  return <BottomSheetContext.Provider value={{ sheetState, setSheetState }}>{children}</BottomSheetContext.Provider>;
}

export function useBottomSheet() {
  const context = useContext(BottomSheetContext);
  if (context === undefined) {
    throw new Error('useBottomSheet must be used within a BottomSheetProvider');
  }
  return context;
}
