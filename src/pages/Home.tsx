import { Container, Typography, Button, Box, Grid, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FloatingEmojis from '../components/FloatingEmojis';
import { useState, useRef } from 'react';
import PauseIcon from '@mui/icons-material/Pause';
import { TestimonialsSection } from '../components/TestimonialsSection';
import CloseIcon from '@mui/icons-material/Close';

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

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 24px;
  min-width: calc(100vw - 64px);
  max-width: calc(100vw - 64px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  
  @media (min-width: 768px) {
    min-width: 400px;
    max-width: 400px;
    padding: 32px;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const TestimonialsContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  padding: 40px 0;
  position: relative;

  @media (min-width: 768px) {
    padding: 80px 0;
  }

  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50px;
    z-index: 2;
    pointer-events: none;

    @media (min-width: 768px) {
      width: 100px;
    }
  }

  &:before {
    left: 0;
    background: linear-gradient(90deg, #1e3a8a 80%, transparent 100%);
  }

  &:after {
    right: 0;
    background: linear-gradient(-90deg, #1e3a8a 80%, transparent 100%);
  }
`;

const TestimonialsTrack = styled(motion.div)`
  display: flex;
  gap: 16px;
  padding: 20px 0;
  cursor: grab;
  padding-left: 16px;
  will-change: transform;

  @media (min-width: 768px) {
    gap: 24px;
    padding: 40px 0 40px 24px;
  }

  &:active {
    cursor: grabbing;
  }
`;

const ControlButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  z-index: 3;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const PauseButton = styled(motion.button)<{ isPaused: boolean }>`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: ${props => props.isPaused ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)'};
  border: none;
  border-radius: 25px;
  padding: 8px 16px;
  color: white;
  cursor: pointer;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    bottom: 20px;
    padding: 10px 20px;
    font-size: 16px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const Home = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  const handleDragStart = (event: any) => {
    setDragStartX(event.clientX);
  };

  const handleDragEnd = (event: any) => {
    const dragEndX = event.clientX;
    const dragDistance = dragEndX - dragStartX;
    
    if (Math.abs(dragDistance) > 100) {
      setIsPaused(true);
    }
  };

  // חישוב הרוחב הכולל של כל הביקורות
  const calculateTotalWidth = () => {
    const cardWidth = window.innerWidth >= 768 ? 400 : window.innerWidth - 64;
    const gap = window.innerWidth >= 768 ? 24 : 16;
    return testimonials.length * (cardWidth + gap);
  };

  const handleOpenDialog = (member: typeof team[0]) => {
    setSelectedMember(member);
  };

  const handleCloseDialog = () => {
    setSelectedMember(null);
  };

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
                  onClick={() => handleOpenDialog(member)}
                  style={{ cursor: 'pointer' }}
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

      <Section>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6 }}>
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
                style={{ backgroundColor: '#f8fafc' }}
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