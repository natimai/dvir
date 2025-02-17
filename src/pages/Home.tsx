import { Container, Typography, Button, Box, Grid, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FloatingEmojis from '../components/FloatingEmojis';
import { useState } from 'react';
import { TestimonialsSection } from '../components/TestimonialsSection';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const HeroSection = styled(motion.section)`
  min-height: 90vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/gallery/orenk-140 Large.jpeg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

const HeroContent = styled(Box)`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 0 20px;
`;

const Section = styled.section`
  padding: 80px 0;
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

const TeamMemberDialog = styled(Dialog)`
  .MuiDialog-paper {
    border-radius: 20px;
    max-width: 600px;
    width: 100%;
    margin: 20px;
    background: linear-gradient(to bottom, #ffffff, #f8fafc);
  }
`;

const TeamMemberDialogContent = styled(DialogContent)`
  display: grid;
  gap: 24px;
  padding: 24px;
`;

const TeamMemberImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const TeamMemberInfo = styled.div`
  text-align: center;
  padding: 24px;
`;

const TeamMemberDetails = styled.div`
  display: grid;
  gap: 16px;
  text-align: right;
  margin-top: 24px;
`;

const DetailItem = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
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

const ProcessCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const ProcessImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const Home = () => {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  const handleOpenDialog = (member: typeof team[0]) => {
    setSelectedMember(member);
  };

  const handleCloseDialog = () => {
    setSelectedMember(null);
  };

  return (
    <>
      <HeroSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Container maxWidth="lg">
          <HeroContent>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Typography 
                variant="h1" 
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '4.5rem' },
                  fontWeight: 700,
                  marginBottom: 2,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                דביר דלויה
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Typography 
                variant="h2" 
                sx={{ 
                  fontSize: { xs: '1.5rem', md: '2.5rem' },
                  fontWeight: 500,
                  marginBottom: 4,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                פייטן וחזן מקצועי לאירועים מיוחדים
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="large"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  padding: '12px 40px',
                  borderRadius: '50px',
                  backgroundColor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    transform: 'scale(1.05)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                בואו נדבר
              </Button>
            </motion.div>
          </HeroContent>
        </Container>
      </HeroSection>

      <Section>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            איך זה עובד?
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph sx={{ mb: 6 }}>
            תהליך פשוט בארבעה שלבים
          </Typography>

          <Grid container spacing={4}>
            {process.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <ProcessCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <ProcessImage src={step.image} alt={step.title} />
                  <Typography variant="h5" gutterBottom color="primary">
                    {step.title}
                  </Typography>
                  <Typography>
                    {step.description}
                  </Typography>
                </ProcessCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <TestimonialsSection />

      <TeamMemberDialog
        open={Boolean(selectedMember)}
        onClose={handleCloseDialog}
        aria-labelledby="team-member-dialog-title"
      >
        {selectedMember && (
          <>
            <DialogTitle id="team-member-dialog-title" sx={{ m: 0, p: 2 }}>
              <IconButton
                aria-label="סגור"
                onClick={handleCloseDialog}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <TeamMemberDialogContent>
              <TeamMemberImage src={selectedMember.image} alt={selectedMember.name} />
              <Box>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                  {selectedMember.name}
                </Typography>
                <Typography variant="h6" color="primary" gutterBottom>
                  {selectedMember.role}
                </Typography>
                <Typography paragraph color="text.secondary">
                  {selectedMember.fullDescription}
                </Typography>
                <TeamMemberDetails>
                  {selectedMember.expertise && (
                    <DetailItem>
                      <Typography variant="subtitle1" fontWeight={600}>
                        תחומי התמחות:
                      </Typography>
                      <Typography>{selectedMember.expertise}</Typography>
                    </DetailItem>
                  )}
                  {selectedMember.education && (
                    <DetailItem>
                      <Typography variant="subtitle1" fontWeight={600}>
                        השכלה:
                      </Typography>
                      <Typography>{selectedMember.education}</Typography>
                    </DetailItem>
                  )}
                  {selectedMember.experience && (
                    <DetailItem>
                      <Typography variant="subtitle1" fontWeight={600}>
                        ניסיון:
                      </Typography>
                      <Typography>{selectedMember.experience}</Typography>
                    </DetailItem>
                  )}
                </TeamMemberDetails>
              </Box>
            </TeamMemberDialogContent>
          </>
        )}
      </TeamMemberDialog>
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
    image: '/images/team/dvir.jpg',
    fullDescription: 'דביר דלויה הוא פייטן וחזן מוביל בעל ניסיון עשיר של 14 שנים בתחום הפייטנות והחזנות. הוא מתמחה בסגנון הספרדי-ירושלמי המסורתי, תוך שילוב ייחודי של מסורת עתיקה עם נגיעות מודרניות.',
    expertise: 'פיוטים ספרדיים, חזנות ירושלמית, הוראת בר מצווה',
    education: 'בוגר בית הספר למוזיקה מזרחית, תעודת הסמכה בחזנות מהמכון למוזיקה יהודית',
    experience: '14 שנות ניסיון בהופעות, הוראה והנחיית טקסים'
  },
  {
    name: 'יוסי כהן',
    role: 'חזן',
    description: 'בעל ניסיון עשיר בחזנות ספרדית מסורתית',
    image: '/images/team/yossi.jpg',
    fullDescription: 'יוסי כהן הוא חזן מנוסה המתמחה בחזנות ספרדית מסורתית. הוא ידוע בקולו העשיר ובהבנתו העמוקה של המסורת והמנגינות העתיקות.',
    expertise: 'חזנות ספרדית, תפילות מסורתיות, פיוטי שבת',
    education: 'למד אצל גדולי החזנים בירושלים, בוגר קורס מתקדם בחזנות',
    experience: '20 שנות ניסיון כחזן בבתי כנסת מובילים'
  },
  {
    name: 'משה לוי',
    role: 'נגן עוד וכינור',
    description: 'וירטואוז בכלי נגינה מזרחיים מסורתיים',
    image: '/images/team/moshe.jpg',
    fullDescription: 'משה לוי הוא נגן מחונן בעל שליטה מרשימה בכלי נגינה מזרחיים מסורתיים. הוא מתמחה בנגינת עוד וכינור, ומביא את הצליל האותנטי של המוזיקה המזרחית.',
    expertise: 'נגינת עוד, כינור, קאנון ובוזוקי',
    education: 'בוגר האקדמיה למוזיקה, התמחות במוזיקה מזרחית',
    experience: '15 שנות ניסיון בהופעות והקלטות'
  },
  {
    name: 'דוד ישראלי',
    role: 'קלידן',
    description: 'מומחה בעיבודים מוזיקליים ושילוב סגנונות',
    image: '/images/team/david.jpg',
    fullDescription: 'דוד ישראלי הוא קלידן מוכשר ומעבד מוזיקלי מנוסה. הוא מתמחה ביצירת עיבודים מודרניים לפיוטים מסורתיים ובשילוב סגנונות מוזיקליים שונים.',
    expertise: 'עיבודים מוזיקליים, הפקה מוזיקלית, נגינת קלידים',
    education: 'תואר ראשון במוזיקה, התמחות בהלחנה ועיבוד',
    experience: '12 שנות ניסיון בהפקה מוזיקלית והופעות חיות'
  }
];

const process = [
  {
    title: 'פגישת היכרות',
    description: 'נפגש לשיחת היכרות כדי להבין את הצרכים והרצונות שלכם',
    image: '/gallery/orenk-134 Large.jpeg'
  },
  {
    title: 'בחירת רפרטואר',
    description: 'נבחר יחד את הפיוטים והשירים שילוו את האירוע',
    image: '/gallery/orenk-97 Large.jpeg'
  },
  {
    title: 'חזרות והכנה',
    description: 'נקיים חזרות והכנות מקדימות לקראת האירוע',
    image: '/gallery/orenk-85 Large.jpeg'
  },
  {
    title: 'ביצוע מושלם',
    description: 'נדאג לכל הפרטים כדי שתוכלו להתרכז רק בשמחה',
    image: '/gallery/orenk-78 Large.jpeg'
  }
];

export default Home; 