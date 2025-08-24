import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Button, 
  Typography, 
  Link, 
  Paper,
  Stack,
  Chip
} from '@mui/material';
import { 
  Cookie as CookieIcon,
  Close as CloseIcon,
  Info as InfoIcon 
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // בדוק אם המשתמש כבר הסכים לקוקיז
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    localStorage.setItem('cookiePreferences', JSON.stringify(consent));
    setShowBanner(false);
    
    // עדכן את הסכמה ב-Google Tag Manager
    if (typeof window !== 'undefined' && (window as any).updateGTMConsent) {
      (window as any).updateGTMConsent(consent);
    }
  };

  const handleAcceptNecessary = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    localStorage.setItem('cookiePreferences', JSON.stringify(consent));
    setShowBanner(false);
    
    // עדכן את הסכמה ב-Google Tag Manager
    if (typeof window !== 'undefined' && (window as any).updateGTMConsent) {
      (window as any).updateGTMConsent(consent);
    }
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setShowBanner(false);
    
    // עדכן את הסכמה ב-Google Tag Manager
    if (typeof window !== 'undefined' && (window as any).updateGTMConsent) {
      (window as any).updateGTMConsent(preferences);
    }
  };

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
    <Paper
      elevation={8}
      sx={{
        position: 'fixed',
        bottom: 20,
        left: 20,
        right: 20,
        zIndex: 9999,
        p: 3,
        maxWidth: 'md',
        mx: 'auto',
        borderRadius: 2,
        backgroundColor: 'background.paper',
        border: '2px solid',
        borderColor: 'primary.main'
      }}
    >
      {!showPreferences ? (
        // באנר ראשי
        <Box>
          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            <CookieIcon color="primary" />
            <Typography variant="h6" component="h2" color="primary">
              הצהרת קוקיז
            </Typography>
          </Stack>
          
          <Typography variant="body1" mb={2} sx={{ lineHeight: 1.6 }}>
            אנו משתמשים בקוקיז כדי לשפר את חוויית הגלישה שלך באתר. 
            קוקיז הכרחיים נדרשים לפעולת האתר, בעוד שקוקיז אחרים עוזרים לנו 
            לשפר את השירותים שלנו ולספק תוכן מותאם אישית.
          </Typography>
          
          <Typography variant="body2" color="text.secondary" mb={3}>
            על ידי המשך השימוש באתר, אתה מסכים לשימוש בקוקיז בהתאם ל-
            <Link component={RouterLink} to="/privacy" color="primary" underline="hover">
              מדיניות הפרטיות
            </Link>
            {' '}ול-
            <Link component={RouterLink} to="/cookies" color="primary" underline="hover">
              מדיניות הקוקיז
            </Link>
            {' '}שלנו.
          </Typography>
          
          <Stack direction="row" spacing={2} flexWrap="wrap" gap={1}>
            <Button
              variant="outlined"
              onClick={() => setShowPreferences(true)}
              startIcon={<InfoIcon />}
              size="small"
            >
              הגדרות מתקדמות
            </Button>
            
            <Button
              variant="outlined"
              onClick={handleAcceptNecessary}
              size="small"
            >
              רק הכרחיים
            </Button>
            
            <Button
              variant="contained"
              onClick={handleAcceptAll}
              startIcon={<CookieIcon />}
              size="small"
            >
              קבל הכל
            </Button>
          </Stack>
        </Box>
      ) : (
        // הגדרות מתקדמות
        <Box>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <InfoIcon color="primary" />
              <Typography variant="h6" component="h2" color="primary">
                הגדרות קוקיז
              </Typography>
            </Stack>
            
            <Button
              onClick={() => setShowPreferences(false)}
              startIcon={<CloseIcon />}
              size="small"
            >
              חזור
            </Button>
          </Stack>
          
          <Stack spacing={2} mb={3}>
            <Box>
              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
                <Typography variant="subtitle1" fontWeight="bold">
                  קוקיז הכרחיים
                </Typography>
                <Chip label="תמיד פעיל" color="success" size="small" />
              </Stack>
              <Typography variant="body2" color="text.secondary">
                קוקיז אלה נדרשים לפעולת האתר הבסיסית ולא ניתן לכבות אותם.
              </Typography>
            </Box>
            
            <Box>
              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
                <Typography variant="subtitle1" fontWeight="bold">
                  קוקיז אנליטיקה
                </Typography>
                <Button
                  variant={preferences.analytics ? "contained" : "outlined"}
                  size="small"
                  onClick={() => handlePreferenceChange('analytics')}
                  color={preferences.analytics ? "success" : "primary"}
                >
                  {preferences.analytics ? "פעיל" : "לא פעיל"}
                </Button>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                עוזרים לנו להבין איך המבקרים משתמשים באתר ולשפר את השירותים.
              </Typography>
            </Box>
            
            <Box>
              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={1}>
                <Typography variant="subtitle1" fontWeight="bold">
                  קוקיז שיווק
                </Typography>
                <Button
                  variant={preferences.marketing ? "contained" : "outlined"}
                  size="small"
                  onClick={() => handlePreferenceChange('marketing')}
                  color={preferences.marketing ? "success" : "primary"}
                >
                  {preferences.marketing ? "פעיל" : "לא פעיל"}
                </Button>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                משמשים להצגת פרסומות מותאמות אישית ולעקוב אחר ביצועי קמפיינים.
              </Typography>
            </Box>
          </Stack>
          
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button
              variant="outlined"
              onClick={handleAcceptNecessary}
              size="small"
            >
              רק הכרחיים
            </Button>
            
            <Button
              variant="contained"
              onClick={handleSavePreferences}
              startIcon={<CookieIcon />}
              size="small"
            >
              שמור הגדרות
            </Button>
          </Stack>
        </Box>
      )}
    </Paper>
  );
};

export default CookieBanner;
