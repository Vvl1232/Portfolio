import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GA_TRACKING_ID, pageview } from '../utils/analytics';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && !window.GA_INITIALIZED) {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.GA_INITIALIZED = true;
  }
};

// Track page views
export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    if (window.GA_INITIALIZED) {
      pageview(location.pathname + location.search);
    }
  }, [location]);

  return null;
};

export default Analytics;
