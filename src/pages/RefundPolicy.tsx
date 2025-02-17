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

const RefundPolicy = () => {
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
          מדיניות ביטולים והחזרים
        </Typography>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            1. כללי
          </Typography>
          <Typography paragraph>
            מדיניות זו מפרטת את התנאים לביטול הזמנת שירותים וקבלת החזר כספי. המדיניות כפופה לחוק הגנת הצרכן, התשמ"א-1981 ולתקנות שהותקנו מכוחו.
          </Typography>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            2. זכות ביטול
          </Typography>
          <Typography paragraph>
            הנך רשאי לבטל את העסקה בהתאם לתנאים הבאים:
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <Box component="li">
              <Typography paragraph>
                <strong>ביטול בתוך 14 ימים:</strong> מיום ההזמנה או מיום קבלת מסמך המכיל את פרטי העסקה (המאוחר מביניהם)
              </Typography>
            </Box>
            <Box component="li">
              <Typography paragraph>
                <strong>ביטול עד 7 ימי עסקים:</strong> לפני מועד האירוע המתוכנן
              </Typography>
            </Box>
          </Box>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            3. אופן הביטול
          </Typography>
          <Typography paragraph>
            ניתן לבטל את העסקה באחת מהדרכים הבאות:
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <Box component="li">
              <Typography>טלפון: 058-627-6261</Typography>
            </Box>
            <Box component="li">
              <Typography>אימייל: dvir@example.com</Typography>
            </Box>
            <Box component="li">
              <Typography>טופס יצירת קשר באתר</Typography>
            </Box>
          </Box>
          <Typography paragraph sx={{ mt: 2 }}>
            בעת הביטול, יש לציין את שם המזמין, מספר הזמנה ותאריך ההזמנה.
          </Typography>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            4. דמי ביטול
          </Typography>
          <Typography paragraph>
            במקרה של ביטול, יחולו דמי הביטול הבאים:
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <Box component="li">
              <Typography paragraph>
                <strong>ביטול עד 14 יום:</strong> ללא דמי ביטול
              </Typography>
            </Box>
            <Box component="li">
              <Typography paragraph>
                <strong>ביטול בין 14-7 ימים:</strong> 5% מערך העסקה או 100 ₪ (הנמוך מביניהם)
              </Typography>
            </Box>
            <Box component="li">
              <Typography paragraph>
                <strong>ביטול פחות מ-7 ימים:</strong> 25% מערך העסקה
              </Typography>
            </Box>
          </Box>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            5. החזר כספי
          </Typography>
          <Typography paragraph>
            ההחזר הכספי יבוצע באמצעות אותו אמצעי תשלום בו בוצעה העסקה, תוך 14 ימי עסקים מיום קבלת הודעת הביטול.
          </Typography>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            6. סייגים לביטול
          </Typography>
          <Typography paragraph>
            לא ניתן לבטל עסקה במקרים הבאים:
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <Box component="li">
              <Typography>פחות מ-24 שעות לפני מועד האירוע</Typography>
            </Box>
            <Box component="li">
              <Typography>לאחר תחילת מתן השירות בפועל</Typography>
            </Box>
            <Box component="li">
              <Typography>בנסיבות מיוחדות שיפורטו בהסכם ההתקשרות</Typography>
            </Box>
          </Box>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            7. כוח עליון
          </Typography>
          <Typography paragraph>
            במקרה של ביטול עקב כוח עליון (כגון מחלה, אסון טבע, או נסיבות שאינן בשליטתנו), נפעל למציאת פתרון הוגן בהתאם לנסיבות.
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

export default RefundPolicy; 