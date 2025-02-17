import { Container, Typography, Box, Paper, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const Section = styled.section`
  padding: 80px 0;
  background: linear-gradient(165deg, #f8fafc 0%, #ffffff 100%);
`;

const StyledPaper = styled(Paper)`
  padding: 32px;
  margin-bottom: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const Accessibility = () => {
  return (
    <Section>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant="h1" 
            gutterBottom
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              textAlign: 'center',
              mb: 6
            }}
          >
            הצהרת נגישות
          </Typography>

          <StyledPaper>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              מחויבות לנגישות
            </Typography>
            <Typography paragraph>
              אנו באתר דביר דלויה מאמינים ומקדמים את נושא הנגישות ופועלים ליישום התקן הישראלי לנגישות תכנים באינטרנט (ת"י 5568) ברמת AA ומעלה, ובהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות.
            </Typography>
          </StyledPaper>

          <StyledPaper>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              התאמות הנגישות באתר
            </Typography>
            <List>
              {accessibilityFeatures.map((feature, index) => (
                <ListItem key={index}>
                  <ListItemText 
                    primary={feature.title}
                    secondary={feature.description}
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontWeight: 600,
                        color: 'primary.main',
                        mb: 1
                      }
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </StyledPaper>

          <StyledPaper>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              דרכי פנייה בנושא נגישות
            </Typography>
            <Typography paragraph>
              אם נתקלתם בבעיית נגישות באתר או שיש לכם הצעות לשיפור, נשמח לשמוע מכם:
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography>
                רכז הנגישות: דביר דלויה
              </Typography>
              <Typography>
                טלפון: 058-627-6261
              </Typography>
              <Typography>
                אימייל: dvir@example.com
              </Typography>
            </Box>
          </StyledPaper>

          <StyledPaper>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              תאריך עדכון ההצהרה
            </Typography>
            <Typography>
              הצהרת הנגישות עודכנה לאחרונה בתאריך: {new Date().toLocaleDateString('he-IL')}
            </Typography>
          </StyledPaper>
        </motion.div>
      </Container>
    </Section>
  );
};

const accessibilityFeatures = [
  {
    title: 'ניווט מקלדת',
    description: 'האתר תומך בניווט מלא באמצעות המקלדת, כולל קיצורי דרך וסימון ברור של האלמנט בפוקוס'
  },
  {
    title: 'תאימות לקורא מסך',
    description: 'האתר מותאם לשימוש עם קוראי מסך ומכיל תיאורים חלופיים לתמונות ואייקונים'
  },
  {
    title: 'התאמת גודל טקסט',
    description: 'ניתן להגדיל את הטקסט באתר עד 200% ללא פגיעה בתצוגה'
  },
  {
    title: 'ניגודיות צבעים',
    description: 'האתר מציע אפשרות למצב ניגודיות גבוהה ועומד בתקני WCAG 2.1'
  },
  {
    title: 'תמיכה במכשירים ניידים',
    description: 'האתר מותאם לשימוש במכשירים ניידים ומסכי מגע'
  },
  {
    title: 'מבנה סמנטי',
    description: 'האתר בנוי בצורה סמנטית עם כותרות ברורות ומדרג הגיוני'
  }
];

export default Accessibility; 