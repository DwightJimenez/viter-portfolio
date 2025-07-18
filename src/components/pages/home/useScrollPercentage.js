import { useState, useEffect, useCallback } from 'react';

const useScrollPercentage = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const calculateScrollPercentage = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = window.scrollY;
    if (scrollHeight > 0) {
      const percentage = (scrolled / scrollHeight) * 100;
      setScrollPercentage(percentage);
    } else {
      setScrollPercentage(0); // No scrollable content
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', calculateScrollPercentage);
    // Initial calculation
    calculateScrollPercentage(); 

    return () => {
      window.removeEventListener('scroll', calculateScrollPercentage);
    };
  }, [calculateScrollPercentage]);

  return scrollPercentage;
};

export default useScrollPercentage;