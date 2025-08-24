import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const GTMEvents: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // שלח אירוע שינוי דף
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        'event': 'page_view',
        'page_path': location.pathname,
        'page_title': document.title,
        'page_location': window.location.href,
        'timestamp': new Date().toISOString()
      });
    }
  }, [location]);

  // פונקציה לשליחת אירועים מותאמים אישית
  const sendEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        'event': eventName,
        ...parameters,
        'timestamp': new Date().toISOString()
      });
    }
  };

  // ייצא את הפונקציה לשימוש בקומפוננטים אחרים
  if (typeof window !== 'undefined') {
    (window as any).sendGTMEvent = sendEvent;
  }

  return null; // קומפוננט זה לא מציג כלום
};

export default GTMEvents;
