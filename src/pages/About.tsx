import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const StyledPaper = styled(Paper)`
  padding: 32px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const Section = styled.section`
  padding: 80px 0;
  position: relative;
  
  &:nth-of-type(even) {
    background-color: #f5f5f5;
  }
`;

const About = () => {
  return (
    <>
      <Section>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h2" gutterBottom>
                  קצת עלי
                </Typography>
                <Typography variant="h5" gutterBottom color="primary">
                  14 שנות ניסיון בפייטנות וחזנות
                </Typography>
                <Typography paragraph>
                  היי, נעים מאוד! אני דביר דלויה, פייטן וחזן שמופיע בתעשיית המוזיקה מעל 14 שנים,
                  מאירועים פרטיים ועד היכלי תרבות. תמיד אהבתי לשלב בין מזרח ומערב,
                  ובמיוחד את החזנות הספרדית הירושלמית.
                </Typography>
                <Typography paragraph>
                  אחד הדברים היפים בהופעות שלי הוא האפשרות לקחת את הקהל למסע מוזיקלי עשיר,
                  שנע על מנעד רחב מאוד - משיריה ולחניה של נעמי שמר, דרך חזנות ירושלמית מודרנית
                  ועד לפיוטים מבית אבא מתקופת המאה ה-19.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/about-main.jpg"
                alt="דביר דלויה"
                sx={{
                  width: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            הגישה שלי
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {approaches.map((approach, index) => (
              <Grid item xs={12} md={4} key={index}>
                <StyledPaper elevation={3}>
                  <Typography variant="h5" gutterBottom color="primary">
                    {approach.title}
                  </Typography>
                  <Typography>
                    {approach.description}
                  </Typography>
                </StyledPaper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            למי זה מתאים?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <StyledPaper elevation={3}>
                <Typography variant="h5" gutterBottom color="primary">
                  מתאים ל...
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {forWho.map((item, index) => (
                    <Box component="li" key={index} sx={{ mb: 2 }}>
                      <Typography>{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </StyledPaper>
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledPaper elevation={3}>
                <Typography variant="h5" gutterBottom color="primary">
                  פחות מתאים ל...
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {notForWho.map((item, index) => (
                    <Box component="li" key={index} sx={{ mb: 2 }}>
                      <Typography>{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </StyledPaper>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </>
  );
};

const approaches = [
  {
    title: 'מסורת ספרדית',
    description: 'שימור והעברת המסורת הספרדית העתיקה של הפיוט והחזנות, עם דגש על הסגנון הירושלמי המקורי.'
  },
  {
    title: 'חדשנות מוזיקלית',
    description: 'שילוב אלמנטים מודרניים ועיבודים חדשניים, תוך שמירה על רוח המסורת והמקוריות.'
  },
  {
    title: 'התאמה אישית',
    description: 'התאמת הרפרטואר והסגנון לאופי האירוע והקהל, יצירת חוויה מוזיקלית מותאמת ומרגשת.'
  }
];

const forWho = [
  'לאנשים שחשוב להם שהאורחים יהיו מרותקים ונרגשים לאורך כל האירוע',
  'לאנשים שמבינים שאירוע בלי פייטן זה כמו חתונה בלי רב',
  'לאנשים שרוצים ליצור חוויה בלתי נשכחת עבור האורחים שלהם',
  'לאנשים שמחפשים שילוב מושלם בין מסורת לחדשנות',
  'לאנשים שרוצים שהאירוע שלהם יהיה מקצועי ומרגש מהרגע הראשון ועד האחרון'
];

const notForWho = [
  'לאנשים שרואים באירוע רק משהו שצריך לסמן עליו V',
  'לאנשים שרוצים "אירוע פשוט ורגיל"',
  'לאנשים שלא מתכוונים להזמין יותר מ-10 אנשים לאירוע',
  'לאנשים שלא רואים חשיבות ביצירת חוויה עבור האורחים',
  'לאנשים שמחפשים את האופציה הזולה ביותר'
];

export default About; 