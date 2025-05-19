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

const Teaching = () => {
  return (
    <Section>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            לימוד והדרכה
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph sx={{ mb: 6 }}>
            הכשרה מקצועית בתחום הפיוטים והחזנות
          </Typography>

          <ContentImage 
            src="/gallery/orenk-97 Large.jpeg" 
            alt="דביר דלויה מלמד פיוטים וחזנות" 
          />

          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" gutterBottom color="primary">
                השירות שלנו
              </Typography>
              <Typography paragraph>
                אנו מציעים מסלולי לימוד והדרכה מקצועיים בתחום הפיוטים והחזנות. השיעורים מותאמים אישית לכל תלמיד, מתחילים ומתקדמים כאחד.
              </Typography>
              <Typography paragraph>
                הלימוד כולל תיאוריה מוזיקלית, טכניקות שירה, היכרות עם מסורות שונות ופיתוח סגנון אישי.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <FeatureCard>
                <Typography variant="h5" gutterBottom color="primary">
                  תחומי לימוד
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Typography>לימוד פיוטים וחזנות</Typography>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Typography>הכנה לבר מצווה</Typography>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Typography>סדנאות קבוצתיות</Typography>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Typography>הדרכת חזנים צעירים</Typography>
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Typography>לימוד מסורת ספרדית</Typography>
                  </Box>
                  <Box component="li">
                    <Typography>הכשרת בעלי תפילה</Typography>
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
              לתיאום שיעור ניסיון
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Teaching;