import { Container, Typography, Box, Paper, Button, Stack } from '@mui/material';
import styled from '@emotion/styled';
import CookieManager from '../components/CookieManager';

const Section = styled.section`
  padding: 80px 0;
  background: linear-gradient(165deg, #f8fafc 0%, #ffffff 100%);
`;

const StyledPaper = styled(Paper)`
  padding: 32px;
  margin-bottom: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Cookies = () => {
  return (
    <Section>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          gutterBottom
          sx={{
            fontWeight: 700,
            textAlign: 'center',
            mb: 4
          }}
        >
          מדיניות עוגיות
        </Typography>

        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
            <Button
              variant="contained"
              size="large"
              onClick={() => document.getElementById('cookie-manager')?.scrollIntoView({ behavior: 'smooth' })}
              sx={{ minWidth: 200 }}
            >
              ניהול הגדרות קוקיז
            </Button>
          </Stack>
        </Box>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            1. מהן עוגיות?
          </Typography>
          <Typography paragraph>
            עוגיות (Cookies) הן קבצי טקסט קטנים המאוחסנים על המכשיר שלך בעת גלישה באתר. הן מסייעות לנו להבטיח את פעילותו התקינה של האתר ולשפר את חווית המשתמש שלך.
          </Typography>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            2. סוגי העוגיות בהן אנו משתמשים
          </Typography>
          <Typography paragraph>
            אנו משתמשים בסוגי העוגיות הבאים:
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <Box component="li">
              <Typography paragraph>
                <strong>עוגיות הכרחיות:</strong> נדרשות לפעילות הבסיסית של האתר
              </Typography>
            </Box>
            <Box component="li">
              <Typography paragraph>
                <strong>עוגיות ביצועים:</strong> מסייעות לנו להבין כיצד משתמשים באתר
              </Typography>
            </Box>
            <Box component="li">
              <Typography paragraph>
                <strong>עוגיות פונקציונליות:</strong> מאפשרות שמירת העדפות אישיות
              </Typography>
            </Box>
            <Box component="li">
              <Typography paragraph>
                <strong>עוגיות שיווקיות:</strong> משמשות להתאמת תוכן פרסומי (אם קיים)
              </Typography>
            </Box>
          </Box>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            3. מטרת השימוש בעוגיות
          </Typography>
          <Typography paragraph>
            אנו משתמשים בעוגיות למטרות הבאות:
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <Box component="li">
              <Typography>שיפור חווית המשתמש והניווט באתר</Typography>
            </Box>
            <Box component="li">
              <Typography>שמירת העדפות המשתמש</Typography>
            </Box>
            <Box component="li">
              <Typography>ניתוח תנועת המבקרים באתר</Typography>
            </Box>
            <Box component="li">
              <Typography>אבטחת המידע והגנה מפני הונאות</Typography>
            </Box>
          </Box>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            4. ניהול העוגיות
          </Typography>
          <Typography paragraph>
            באפשרותך לנהל את העדפות העוגיות שלך בכל עת:
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <Box component="li">
              <Typography>שינוי הגדרות הדפדפן לחסימת עוגיות</Typography>
            </Box>
            <Box component="li">
              <Typography>מחיקת עוגיות קיימות מהמכשיר</Typography>
            </Box>
            <Box component="li">
              <Typography>הגדרת התראות לפני קבלת עוגיות</Typography>
            </Box>
          </Box>
          <Typography paragraph sx={{ mt: 2 }}>
            שים לב: חסימת עוגיות עלולה להשפיע על חווית השימוש באתר ועל זמינות חלק מהתכונות.
          </Typography>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            5. עוגיות צד שלישי
          </Typography>
          <Typography paragraph>
            חלק מהעוגיות באתר מגיעות מספקי שירות חיצוניים (כגון Google Analytics). ספקים אלו כפופים למדיניות הפרטיות שלהם, ואנו ממליצים לעיין בה.
          </Typography>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            6. שינויים במדיניות העוגיות
          </Typography>
          <Typography paragraph>
            אנו שומרים על הזכות לעדכן את מדיניות העוגיות מעת לעת. שינויים מהותיים יפורסמו באתר ויכנסו לתוקף מיד עם פרסומם.
          </Typography>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            7. שאלות ופניות
          </Typography>
          <Typography paragraph>
            לכל שאלה או בירור בנוגע למדיניות העוגיות, ניתן ליצור קשר באמצעות הטלפון: 058-627-6261 או באימייל: dvir@example.com
          </Typography>
        </StyledPaper>

        <Box sx={{ textAlign: 'center', mt: 4, color: 'text.secondary' }}>
          <Typography variant="body2">
            עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}
          </Typography>
        </Box>

        <Box id="cookie-manager" sx={{ mt: 6 }}>
          <CookieManager />
        </Box>
      </Container>
    </Section>
  );
};

export default Cookies; 