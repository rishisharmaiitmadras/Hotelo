import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jaise hi route/path change hoga, window top par scroll ho jayegi
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Yeh koi UI render nahi karta
};

export default ScrollToTop;