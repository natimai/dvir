import { Container, Typography, Button, Box, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import GroupsIcon from '@mui/icons-material/Groups';
import FloatingEmojis from '../components/FloatingEmojis';

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
              url('/images/hero-bg.jpg') center/cover;
  color: white;
  padding: 180px 0;
  text-align: center;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(30, 58, 138, 0.3) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const Section = styled.section`
  padding: 100px 0;
  position: relative;
  
  &:nth-of-type(even) {
    background-color: #f8fafc;
  }
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #1e3a8a, #3b82f6);
  }
`;

const TeamCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const TeamMemberImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-bottom: 4px solid #1e3a8a;
`;

const TeamMemberInfo = styled.div`
  padding: 24px;
  text-align: center;
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: 120px;
  color: rgba(30, 58, 138, 0.05);
  z-index: 0;
`;

const GradientButton = styled(Button)`
  background: linear-gradient(45deg, #1e3a8a, #3b82f6);
  color: white;
  padding: 12px 36px;
  font-size: 1.2rem;
  border-radius: 50px;
  text-transform: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(30, 58, 138, 0.3);
  }
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <FloatingEmojis />
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{ position: 'relative', zIndex: 2 }}
          >
            <Typography variant="h1" gutterBottom sx={{ 
              fontSize: { xs: '2.5rem', md: '4rem' }, 
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
              צלילי התפילה העתיקים מסתלסלים בנעימות
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ 
              mb: 6, 
              maxWidth: '800px', 
              mx: 'auto', 
              opacity: 0.9,
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
            }}>
              פייטנות וחזנות בסגנון ספרדי ירושלמי מסורתי המשלב מסורת עתיקה עם נגיעות מודרניות
            </Typography>
            <GradientButton
              variant="contained"
              size="large"
              href="/contact"
              startIcon={<PlayArrowIcon />}
            >
              הזמן הופעה
            </GradientButton>
          </motion.div>
        </Container>
      </HeroSection>

      <Section>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6 }}>
              למה לבחור בנו?
            </Typography>
            <Grid container spacing={4}>
              {benefits.map((benefit, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FloatingIcon
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <MusicNoteIcon />
                    </FloatingIcon>
                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                      <Typography variant="h5" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
                        {benefit.title}
                      </Typography>
                      <Typography>
                        {benefit.description}
                      </Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Section>

      <Section>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6 }}>
            הצוות שלנו
          </Typography>
          <Grid container spacing={4}>
            {team.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <TeamCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <TeamMemberImage src={member.image} alt={member.name} />
                  <TeamMemberInfo>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                      {member.name}
                    </Typography>
                    <Typography color="primary" gutterBottom>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.description}
                    </Typography>
                  </TeamMemberInfo>
                </TeamCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section sx={{ backgroundColor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            איך זה עובד?
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box>
                {process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Box sx={{ mb: 4, display: 'flex', gap: 2 }}>
                      <Box sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #1e3a8a, #3b82f6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexShrink: 0
                      }}>
                        {index + 1}
                      </Box>
                      <Box>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                          {step.title}
                        </Typography>
                        <Typography paragraph>
                          {step.description}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Box
                  component="img"
                  src="/images/about-image.jpg"
                  alt="דביר דלויה מופיע"
                  sx={{
                    width: '100%',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6 }}>
            המלצות
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <Typography variant="h3" color="primary" sx={{ fontSize: '4rem', mb: 2, opacity: 0.1 }}>
                      "
                    </Typography>
                    <Typography paragraph sx={{ fontSize: '1.1rem' }}>
                      {testimonial.content}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: 600 }}>
                      - {testimonial.name}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};

const benefits = [
  {
    title: 'חוויה מוזיקלית ייחודית',
    description: 'שילוב מושלם בין מסורת עתיקה לבין נגיעות מודרניות, יוצר חוויה מוזיקלית עשירה ומרגשת שתישאר בזיכרון לאורך שנים.'
  },
  {
    title: 'התאמה מושלמת לכל אירוע',
    description: 'מחתונות ועד אירועים קהילתיים, אנחנו מתאימים את הרפרטואר והסגנון לאופי האירוע והקהל שלכם.'
  },
  {
    title: 'צוות מקצועי ומנוסה',
    description: 'צוות של מוזיקאים מקצועיים, פייטנים וחזנים מנוסים, שיחד יוצרים הרמוניה מושלמת באירוע שלכם.'
  }
];

const team = [
  {
    name: 'דביר דלויה',
    role: 'פייטן ראשי',
    description: '14 שנות ניסיון בפייטנות וחזנות, מומחה בסגנון הספרדי-ירושלמי',
    image: '/images/team/dvir.jpg'
  },
  {
    name: 'יוסי כהן',
    role: 'חזן',
    description: 'בעל ניסיון עשיר בחזנות ספרדית מסורתית',
    image: '/images/team/yossi.jpg'
  },
  {
    name: 'משה לוי',
    role: 'נגן עוד וכינור',
    description: 'וירטואוז בכלי נגינה מזרחיים מסורתיים',
    image: '/images/team/moshe.jpg'
  },
  {
    name: 'דוד ישראלי',
    role: 'קלידן',
    description: 'מומחה בעיבודים מוזיקליים ושילוב סגנונות',
    image: '/images/team/david.jpg'
  }
];

const process = [
  {
    title: 'פגישת היכרות',
    description: 'נפגש לשיחת היכרות כדי להבין את הצרכים והרצונות שלכם, ולהתאים את התוכנית המושלמת לאירוע.'
  },
  {
    title: 'בחירת רפרטואר',
    description: 'יחד נבחר את הפיוטים והשירים שילוו את האירוע, משילוב של מסורת ספרדית עתיקה עם נגיעות מודרניות.'
  },
  {
    title: 'הכנה מושלמת',
    description: 'נדאג לכל הפרטים הטכניים, כולל הגברה מקצועית וליווי מוזיקלי, כדי שתוכלו להתרכז רק בשמחה.'
  }
];

const testimonials = [
  {
    content: 'דביר והצוות שלו הביאו אווירה קסומה לחתונה שלנו. השילוב של הפיוטים המסורתיים עם העיבודים המודרניים היה מושלם.',
    name: 'משפחת כהן'
  },
  {
    content: 'הקול המיוחד והסגנון המסורתי יצרו חוויה בלתי נשכחת. המקצועיות של כל הצוות הייתה מרשימה במיוחד.',
    name: 'משפחת לוי'
  },
  {
    content: 'ערב הפיוטים היה מרגש ומעורר השראה. הצוות המוזיקלי המקצועי יצר אווירה מיוחדת שריגשה את כל האורחים.',
    name: 'משפחת ישראלי'
  }
];

export default Home; 