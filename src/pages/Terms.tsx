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

const Terms = () => {
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
          תנאי שימוש
        </Typography>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            1. כללי
          </Typography>
          <Typography paragraph>
            ברוכים הבאים לאתר האינטרנט של דביר דלויה. השימוש באתר זה כפוף לתנאים המפורטים להלן. הגלישה באתר ו/או הרשמה לשירותים המוצעים בו מהווים הסכמה מצדך לתנאים אלו.
          </Typography>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            2. השירותים המוצעים
          </Typography>
          <Typography paragraph>
            האתר מציע שירותי פייטנות וחזנות לאירועים שונים. כל המידע המוצג באתר הינו לצורך המחשה בלבד. ההתקשרות הסופית תיעשה בהסכם נפרד ומפורט.
          </Typography>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            3. קניין רוחני
          </Typography>
          <Typography paragraph>
            כל זכויות הקניין הרוחני באתר, לרבות זכויות היוצרים, המדגמים, השיטות והסודות המסחריים, הינם רכושו הבלעדי של דביר דלויה. אין להעתיק, לשכפל, להפיץ, לפרסם או להשתמש בכל דרך אחרת בתכנים המופיעים באתר ללא הסכמה מראש ובכתב.
          </Typography>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            4. הגבלת אחריות
          </Typography>
          <Typography paragraph>
            השימוש באתר הינו באחריותך הבלעדית. דביר דלויה אינו אחראי לכל נזק ישיר או עקיף, הפסד, אובדן או הוצאה שייגרמו לך או לצד שלישי כתוצאה משימוש או הסתמכות על המידע המופיע באתר.
          </Typography>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            5. מדיניות ביטולים
          </Typography>
          <Typography paragraph>
            ביטול הזמנת שירות יתבצע בהתאם לחוק הגנת הצרכן ובכפוף למדיניות הביטולים המפורטת בהסכם ההתקשרות הספציפי.
          </Typography>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            6. שינויים בתנאי השימוש
          </Typography>
          <Typography paragraph>
            דביר דלויה שומר לעצמו את הזכות לשנות את תנאי השימוש בכל עת וללא הודעה מוקדמת. השינויים ייכנסו לתוקף מיד עם פרסומם באתר.
          </Typography>
        </StyledPaper>

        <StyledPaper>
          <Typography variant="h5" gutterBottom color="primary">
            7. דין וסמכות שיפוט
          </Typography>
          <Typography paragraph>
            על תנאי שימוש אלה יחולו דיני מדינת ישראל. סמכות השיפוט הבלעדית בכל הקשור לתנאים אלה תהא נתונה לבתי המשפט המוסמכים במחוז ירושלים.
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

export default Terms; 