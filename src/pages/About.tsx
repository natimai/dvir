import { Container, Typography, Grid, Box, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledPaper = styled(Paper)`
  padding: 32px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  transition: transform 0.3s ease;
  border-radius: 16px;
  
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

const StorySection = styled(Section)`
  background: linear-gradient(165deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  padding: 120px 0;
`;

const StoryImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;

const StoryCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 24px;
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
                  דביר דלויה - הקול שמלווה את הרגעים המיוחדים שלכם
                </Typography>
                <Typography variant="h5" gutterBottom color="primary">
                  זמר מקצועי לאירועים ומלמד בר מצווה
                </Typography>
                <Typography paragraph>
                  ברוכים הבאים לעולמו של דביר וצוות המוזיקאים המדהים שלו! דביר הוא זמר מוכשר עם תשוקה למוזיקה יהודית, והוא מלווה בכמה מהמוזיקאים יוצאי הדופן בתעשייה. יחד, הם מביאים רמה של אנרגיה והתרגשות לכל אירוע שאין שני לו.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <StoryImage src="/gallery/orenk-140 Large.jpeg" alt="דביר דלויה" />
            </Grid>
          </Grid>
        </Container>
      </Section>

      <StorySection>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
            הסיפור שלנו
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <StoryCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography variant="h5" gutterBottom>
                  תשוקה למוזיקה
                </Typography>
                <Typography paragraph>
                  מה שמייחד את הצוות שלנו הוא היכולת למזג בצורה חלקה מוזיקה יהודית מסורתית עם סגנונות וז'אנרים עכשוויים. הרפרטואר שלנו כולל הכל, משירי עם יהודיים קלאסיים ועד להיטי פופ מודרניים.
                </Typography>
              </StoryCard>

              <StoryCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography variant="h5" gutterBottom>
                  צוות מקצועי
                </Typography>
                <Typography paragraph>
                  כל אחד מחברי הצוות הוא אמן בכלי שלו, בין אם זה גיטרה, מקלדת או תופים. הם עובדים יחד ללא רבב, ויוצרים צליל שהוא גם חזק וגם הרמוני. יחד, אנחנו יוצרים חוויה מוזיקלית שלמה ומרגשת.
                </Typography>
              </StoryCard>

              <StoryCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography variant="h5" gutterBottom>
                  חוויה בלתי נשכחת
                </Typography>
                <Typography paragraph>
                  דביר הוא שואומן אמיתי, עם קול שיכול ללכוד את תשומת הלב של כל קהל. הוא יודע לעסוק בקהל שלו וליצור אווירה של שמחה וחגיגה מושלמת לכל אירוע, מעלייה לתורה ועד בר מצווה והלאה.
                </Typography>
              </StoryCard>

              <StoryCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Typography variant="h5" gutterBottom>
                  המחויבות שלנו
                </Typography>
                <Typography paragraph>
                  אנחנו מתחייבים להפוך את היום המיוחד שלכם לבלתי נשכח. עם הכישרון והתשוקה יוצאי הדופן שלנו למוזיקה, אנחנו מבטיחים לכם חוויה מוזיקלית מושלמת שתישאר איתכם לתמיד.
                </Typography>
              </StoryCard>
            </Grid>
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)'
                }
              }}
            >
              קבע שיעור ניסיון חינם
            </Button>
          </Box>
        </Container>
      </StorySection>

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
    title: 'מוזיקה מסורתית ומודרנית',
    description: 'שילוב מושלם בין מוזיקה יהודית מסורתית לבין להיטים עכשוויים, המתאים לכל קהל ולכל אירוע.'
  },
  {
    title: 'צוות מקצועי ומיומן',
    description: 'דביר מלווה בצוות נגנים מקצועי ומנוסה, היוצר יחד איתו הרמוניה מושלמת וחוויה מוזיקלית עשירה.'
  },
  {
    title: 'התאמה אישית',
    description: 'התאמת הרפרטואר המוזיקלי לטעם האישי שלכם ולאופי האירוע, תוך שמירה על האווירה המושלמת.'
  }
];

const forWho = [
  'לאנשים שמחפשים חוויה מוזיקלית בלתי נשכחת באירוע שלהם',
  'למי שרוצה שילוב מושלם של מסורת ומודרניות באירוע',
  'לחובבי מוזיקה איכותית וביצועים חיים מרגשים',
  'למי שמעוניין ביצירת אווירה שמחה ומרוממת באירוע',
  'לאנשים שמחפשים מקצוענות ואמינות בכל היבט של האירוע'
];

const notForWho = [
  'למי שמעדיף מוזיקה מוקלטת בלבד',
  'לאירועים קטנים מאוד (פחות מ-50 אנשים)',
  'למי שמחפש פתרון מוזיקלי בסיסי בלבד',
  'לאירועים שאינם מעוניינים בהופעה חיה',
  'למי שאין לו עניין בחוויה מוזיקלית מקצועית'
];

export default About; 