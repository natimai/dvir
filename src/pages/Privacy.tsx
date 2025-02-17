import { Container, Typography, Box, Paper } from '@mui/material';
import styled from '@emotion/styled';

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

const Privacy = () => {
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
          מדיניות פרטיות
        </Typography>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            1. כללי
          </Typography>
          <Typography paragraph>
            דביר דלויה מכבד את פרטיותך ומחויב להגן על המידע האישי שאתה מוסר. מדיניות פרטיות זו מסבירה את האופן בו אנו אוספים, משתמשים ומגנים על המידע האישי שלך.
          </Typography>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            2. איסוף מידע
          </Typography>
          <Typography paragraph>
            אנו אוספים מידע שאתה מספק לנו באופן ישיר, כגון:
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <Box component="li">
              <Typography>שם מלא</Typography>
            </Box>
            <Box component="li">
              <Typography>פרטי התקשרות (טלפון, אימייל)</Typography>
            </Box>
            <Box component="li">
              <Typography>פרטי האירוע המבוקש</Typography>
            </Box>
            <Box component="li">
              <Typography>מידע נוסף שתבחר לספק</Typography>
            </Box>
          </Box>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            3. שימוש במידע
          </Typography>
          <Typography paragraph>
            המידע שנאסף משמש אותנו למטרות הבאות:
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <Box component="li">
              <Typography>יצירת קשר ומתן מענה לפניות</Typography>
            </Box>
            <Box component="li">
              <Typography>תיאום והתאמת השירותים המבוקשים</Typography>
            </Box>
            <Box component="li">
              <Typography>שיפור השירות והחוויה באתר</Typography>
            </Box>
            <Box component="li">
              <Typography>שליחת עדכונים ומידע שיווקי (בכפוף להסכמתך)</Typography>
            </Box>
          </Box>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            4. אבטחת מידע
          </Typography>
          <Typography paragraph>
            אנו נוקטים באמצעי אבטחה סבירים כדי להגן על המידע האישי שלך מפני גישה, שימוש או חשיפה בלתי מורשים. עם זאת, אין באפשרותנו להבטיח אבטחה מוחלטת של המידע המועבר באינטרנט.
          </Typography>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            5. שיתוף מידע
          </Typography>
          <Typography paragraph>
            אנו לא מוכרים, מסחרים או משכירים את המידע האישי שלך לצדדים שלישיים. אנו עשויים לשתף מידע עם ספקי שירות הפועלים מטעמנו, תחת התחייבות לשמירה על סודיות ופרטיות.
          </Typography>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            6. זכויותיך
          </Typography>
          <Typography paragraph>
            הנך זכאי:
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <Box component="li">
              <Typography>לעיין במידע האישי שלך המוחזק אצלנו</Typography>
            </Box>
            <Box component="li">
              <Typography>לבקש תיקון מידע לא מדויק</Typography>
            </Box>
            <Box component="li">
              <Typography>לבקש מחיקת המידע (בכפוף למגבלות חוקיות)</Typography>
            </Box>
            <Box component="li">
              <Typography>לבטל את הסכמתך לקבלת דיוור שיווקי</Typography>
            </Box>
          </Box>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            7. עדכונים למדיניות הפרטיות
          </Typography>
          <Typography paragraph>
            אנו עשויים לעדכן את מדיניות הפרטיות מעת לעת. שינויים מהותיים יובאו לידיעתך באמצעות הודעה באתר או בדואר אלקטרוני.
          </Typography>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            8. יצירת קשר
          </Typography>
          <Typography paragraph>
            לכל שאלה או בירור בנוגע למדיניות הפרטיות, ניתן ליצור קשר באמצעות הטלפון: 058-627-6261 או באימייל: dvir@example.com
          </Typography>
        </StyledPaper>

        <Box sx={{ textAlign: 'center', mt: 4, color: 'text.secondary' }}>
          <Typography variant="body2">
            עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}
          </Typography>
        </Box>
      </Container>
    </Section>
  );
};

export default Privacy; 