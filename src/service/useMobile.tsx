import { useState, useEffect } from 'react';

export default function useMobile(breakpoint : number = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect( () => {
    const handleMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    } 
    window.addEventListener('resize', handleMobile);

    return () => {
      window.removeEventListener('resize', handleMobile);
    }
  },[breakpoint])

  return isMobile;
}