'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/header/Header';
import Main from '@/components/layout/Main';
import Home from './home/home';
import TabBar from '@/components/layout/navigation/TabBar';
import Wrap from '@/components/layout/Wrap';
import Splash from '@/components/Splash';

export default function Page() {
  const [showSplash, setShowSplash] = useState(null);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    if (hasVisited) {
      setShowSplash(false);
    } else {
      setShowSplash(true);
      localStorage.setItem('hasVisited', 'true');

      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {showSplash === null ? null : showSplash ? (
        <Splash />
      ) : (
        <Wrap>
          <Header />
          <Main>
            <Home />
          </Main>
          <TabBar />
        </Wrap>
      )}
    </>
  );
}
