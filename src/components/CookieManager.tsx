import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  Switch,
  FormControlLabel,
  Paper,
  Stack,
  Alert,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Cookie as CookieIcon,
  Security as SecurityIcon,
  Analytics as AnalyticsIcon,
  Campaign as CampaignIcon
} from '@mui/icons-material';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieManager: React.FC = () => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // טען הגדרות קיימות
    const savedPreferences = localStorage.getItem('cookiePreferences');
    if (savedPreferences) {
      try {
        const parsed = JSON.parse(savedPreferences);
        setPreferences(parsed);
      } catch (error) {
        console.error('Error parsing saved preferences:', error);
      }
    }
  }, []);

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setSaved(true);
    
    // עדכן את הסכמה ב-Google Tag Manager
    if (typeof window !== 'undefined' && (window as any).updateGTMConsent) {
      (window as any).updateGTMConsent(preferences);
    }
    
    // הסתר ההודעה אחרי 3 שניות
    setTimeout(() => setSaved(false), 3000);
  };

  const handleResetPreferences = () => {
    const defaultPreferences = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    setPreferences(defaultPreferences);
    localStorage.removeItem('cookiePreferences');
    localStorage.removeItem('cookieConsent');
    setSaved(false);
  };

  const cookieTypes = [
    {
      key: 'necessary' as keyof CookiePreferences,
      title: 'קוקיז הכרחיים',
      description: 'קוקיז אלה נדרשים לפעולת האתר הבסיסית ולא ניתן לכבות אותם.',
      icon: <SecurityIcon color="success" />,
      required: true,
      examples: ['Session cookies', 'Authentication cookies', 'Security cookies']
    },
    {
      key: 'analytics' as keyof CookiePreferences,
      title: 'קוקיז אנליטיקה',
      description: 'עוזרים לנו להבין איך המבקרים משתמשים באתר ולשפר את השירותים.',
      icon: <AnalyticsIcon color="info" />,
      required: false,
      examples: ['Google Analytics', 'Page view tracking', 'User behavior analysis']
    },
    {
      key: 'marketing' as keyof CookiePreferences,
      title: 'קוקיז שיווק',
      description: 'משמשים להצגת פרסומות מותאמות אישית ולעקוב אחר ביצועי קמפיינים.',
      icon: <CampaignIcon color="warning" />,
      required: false,
      examples: ['Advertising cookies', 'Social media pixels', 'Retargeting cookies']
    }
  ];

  return (
    <Box sx={{ maxWidth: 'md', mx: 'auto', p: 3 }}>
      <Stack spacing={3}>
        <Box textAlign="center">
          <CookieIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
          <Typography variant="h4" component="h1" gutterBottom>
            ניהול הגדרות קוקיז
          </Typography>
          <Typography variant="body1" color="text.secondary">
            כאן תוכל לנהל את העדפות הקוקיז שלך ולשלוט באיזה סוגי קוקיז מותרים באתר
          </Typography>
        </Box>

        {saved && (
          <Alert severity="success" onClose={() => setSaved(false)}>
            ההגדרות נשמרו בהצלחה!
          </Alert>
        )}

        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            הגדרות קוקיז
          </Typography>
          
          <Stack spacing={3}>
            {cookieTypes.map((cookieType) => (
              <Box key={cookieType.key}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    {cookieType.icon}
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {cookieType.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {cookieType.description}
                      </Typography>
                    </Box>
                  </Stack>
                  
                  <Stack direction="row" alignItems="center" spacing={2}>
                    {cookieType.required && (
                      <Chip label="נדרש" color="success" size="small" />
                    )}
                    <FormControlLabel
                      control={
                        <Switch
                          checked={preferences[cookieType.key]}
                          onChange={() => handlePreferenceChange(cookieType.key)}
                          disabled={cookieType.required}
                        />
                      }
                      label={preferences[cookieType.key] ? "פעיל" : "לא פעיל"}
                    />
                  </Stack>
                </Stack>
                
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="body2" color="primary">
                      דוגמאות לקוקיז מסוג זה
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack spacing={1}>
                      {cookieType.examples.map((example, index) => (
                        <Typography key={index} variant="body2" color="text.secondary">
                          • {example}
                        </Typography>
                      ))}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              </Box>
            ))}
          </Stack>
        </Paper>

        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            פעולות
          </Typography>
          
          <Stack direction="row" spacing={2} flexWrap="wrap" gap={1}>
            <Button
              variant="outlined"
              onClick={handleResetPreferences}
              color="error"
            >
              איפוס הגדרות
            </Button>
            
            <Button
              variant="contained"
              onClick={handleSavePreferences}
              startIcon={<CookieIcon />}
            >
              שמור הגדרות
            </Button>
          </Stack>
        </Paper>

        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            מידע נוסף
          </Typography>
          
          <Typography variant="body2" color="text.secondary" paragraph>
            קוקיז הם קבצי טקסט קטנים שנשמרים במכשיר שלך כאשר אתה מבקר באתרים. 
            הם עוזרים לאתרים לזכור את העדפותיך ולשפר את חוויית הגלישה.
          </Typography>
          
          <Typography variant="body2" color="text.secondary" paragraph>
            אתה יכול לשנות את הגדרות הקוקיז שלך בכל עת באמצעות דף זה. 
            שינויים ייכנסו לתוקף מיד וישמרו לפעם הבאה שתבקר באתר.
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
            למידע נוסף על השימוש שלנו בקוקיז, ראה את{' '}
            <a href="/cookies" style={{ color: 'inherit', textDecoration: 'underline' }}>
              מדיניות הקוקיז המלאה
            </a>
            {' '}שלנו.
          </Typography>
        </Paper>
      </Stack>
    </Box>
  );
};

export default CookieManager;
