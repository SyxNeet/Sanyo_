'use client';

import { useEffect, useRef, useState } from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

export default function HeaderContainer({ isMobile, data, isTablet }) {
  const headerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    let prevScroll = 0;
    const handleScroll = () => {
      const currentScroll = document.documentElement.scrollTop;
      if (currentScroll > prevScroll) {
        headerRef.current.style.transform = 'translateY(-103%)';
      } else {
        headerRef.current.style.transform = 'translateY(0%)';
      }
      prevScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobileView = windowWidth <= 1024;

  return (
    <header ref={headerRef} className="fixed top-0 left-0 z-50 w-full header transition-500">
      {isMobileView ? (
        <HeaderMobile isMobile={isMobileView} data={data} />
      ) : (
        <HeaderDesktop isMobile={isMobileView} data={data} />
      )}
    </header>
  );
}
