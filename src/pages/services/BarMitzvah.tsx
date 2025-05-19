import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Section = styled.section`
  padding: 80px 0;
  background: linear-gradient(165deg, #f8fafc 0%, #ffffff 100%);
`;

const FeatureCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100%;
`;

const ContentImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 32px;
`;

const BarMitzvah = () => {
  return (
    <Section>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            הופעות בר מצווה
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph sx={{ mb: 6 }}>
            חוויה מוזיקלית בלתי נשכחת לאירוע המיוחד שלכם
          </Typography>

          <ContentImage 
            src="/gallery/orenk-98 Large.jpeg" 
            alt="דביר דלויה מופיע בבר מצווה" 
          />

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom color="primary">
                השירות שלנו
              </Typography>
              <Typography paragraph>
                אנו מציעים חוויה מוזיקלית מושלמת לבר המצווה, המשלבת בין מסורת לחדשנות. הופעה מרגשת המשלבת פיוטים מסורתיים עם עיבודים מודרניים, מותאמת במיוחד לאופי האירוע ולטעם המשפחה.
              </Typography>
              <Typography paragraph>
                כל הופעה מלווה בצוות מוזיקאים מקצועי, ציוד הגברה איכותי, וניהול מוזיקלי מלא של האירוע.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard>
                <Typography variant="h5" gutterBottom color="primary">
                  כלול בשירות
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Typography>פיוטים וקטעי חזנות מסורתיים</Typography>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Typography>שילוב שירים מודרניים</Typography>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Typography>ליווי מוזיקלי מקצועי</Typography>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Typography>התאמה אישית לסגנון המשפחה</Typography>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Typography>אפשרות להקלטת קטעים נבחרים</Typography>
                  </Box>
                  <Box component="li">
                    <Typography>חזרות והכנה מקדימה</Typography>
                  </Box>
                </Box>
              </FeatureCard>
            </Grid>
          </Grid>

          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                fontSize: '1.2rem',
                padding: '12px 36px',
                borderRadius: '50px'
              }}
            >
              לתיאום פגישת היכרות
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Section>
  );
};

export default BarMitzvah;