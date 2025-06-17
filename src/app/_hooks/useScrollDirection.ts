'use client';

import { useState, useEffect } from 'react';

type ScrollDirection = 'up' | 'down' | null;

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [prevOffset, setPrevOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.scrollY;
      const direction = currentOffset > prevOffset ? 'down' : 'up';
      
      if (direction !== scrollDirection && 
          (Math.abs(currentOffset - prevOffset) > 10)) {
        setScrollDirection(direction);
      }
      
      setPrevOffset(currentOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevOffset, scrollDirection]);

  return scrollDirection;
} 