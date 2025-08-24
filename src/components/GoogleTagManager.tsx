import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GoogleTagManager: React.FC = () => {
  useEffect(() => {
    // בדוק אם המשתמש הסכים לקוקיז
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent) {
      try {
        const consent = JSON.parse(cookieConsent);
        
        // הפעל Google Tag Manager בהתאם להסכמה
        if (typeof window !== 'undefined' && window.dataLayer) {
          // עדכן את הסכמת הקוקיז
          window.dataLayer.push({
            'event': 'cookie_consent_update',
            'cookie_consent': {
              necessary: consent.necessary,
              analytics: consent.analytics,
              marketing: consent.marketing,
              timestamp: consent.timestamp
            }
          });

          // אם הותר אנליטיקה, הפעל Google Analytics
          if (consent.analytics && window.gtag) {
            window.gtag('consent', 'update', {
              analytics_storage: 'granted'
            });
          }

          // אם הותר שיווק, הפעל Google Ads
          if (consent.marketing && window.gtag) {
            window.gtag('consent', 'update', {
              ad_storage: 'granted'
            });
          }
        }
      } catch (error) {
        console.error('Error parsing cookie consent:', error);
      }
    } else {
      // אם אין הסכמה, הגדר את כל הקוקיז כחסומים
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'default', {
          analytics_storage: 'denied',
          ad_storage: 'denied'
        });
      }
    }
  }, []);

  // פונקציה לעדכון הסכמה
  const updateConsent = (consent: {
    necessary: boolean;
    analytics: boolean;
    marketing: boolean;
  }) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      // שלח אירוע עדכון הסכמה
      window.dataLayer.push({
        'event': 'cookie_consent_update',
        'cookie_consent': {
          ...consent,
          timestamp: new Date().toISOString()
        }
      });

      // עדכן את הסכמה ב-GTM
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: consent.analytics ? 'granted' : 'denied',
          ad_storage: consent.marketing ? 'granted' : 'denied'
        });
      }
    }
  };

  // ייצא את הפונקציה לשימוש בקומפוננטים אחרים
  if (typeof window !== 'undefined') {
    (window as any).updateGTMConsent = updateConsent;
  }

  return null; // קומפוננט זה לא מציג כלום
};

export default GoogleTagManager;
