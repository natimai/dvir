import { Container, Typography, Button, Box, Grid, Dialog, DialogContent, DialogTitle, IconButton, Paper, Theme, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FloatingEmojis from '../components/FloatingEmojis';
import { useState } from 'react';
import { TestimonialsSection } from '../components/TestimonialsSection';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { styled as muiStyled } from '@mui/material/styles';

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

const Section = styled('section')`
  padding: 80px 0;
  position: relative;
  &.light-bg {
    background-color: #f8fafc;
  }
`;

const StyledCard = styled(motion.div)`
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

const ContentImage = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;

const QuestionCard = styled(Paper)`
  padding: 32px;
  height: 100%;
  transition: transform 0.3s ease;
  border-radius: 16px;
  &:hover {
    transform: translateY(-5px);
  }
`;

interface ProcessStep {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  imageAlt: string;
  fullDescription: string;
  expertise?: string;
  education?: string;
  experience?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

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
                  <ProcessImage src={step.image} alt={step.imageAlt} />
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

      <Section className="light-bg">
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            קצת עלינו
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph sx={{ mb: 6 }}>
            מסורת, מקצועיות וחדשנות
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', height: '100%', minHeight: 300 }}>
                <ContentImage 
                  src="/gallery/orenk-134 Large.jpeg" 
                  alt="דביר דלויה בהופעה, מבצע פיוטים מסורתיים בהתלהבות" 
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 3 }}>
                <Typography variant="h4" gutterBottom color="primary">
                  המסע המוזיקלי שלנו
                </Typography>
                <Typography paragraph>
                  כבר למעלה מעשור שאנחנו מביאים את הקסם של המוזיקה היהודית המסורתית לאירועים מיוחדים. המסע שלנו התחיל מאהבה עמוקה למסורת ולפיוטים, והתפתח לכדי חוויה מוזיקלית ייחודית המשלבת בין העבר להווה.
                </Typography>
                <Typography paragraph>
                  הצוות שלנו מורכב ממוזיקאים מקצועיים, שכל אחד מהם מביא איתו ניסיון עשיר וכישרון ייחודי. יחד, אנחנו יוצרים הרמוניה מושלמת שמתאימה לכל אירוע ולכל קהל.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            המטרה החברתית שלנו
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph sx={{ mb: 6 }}>
            מחזירים לקהילה
          </Typography>

          <Box sx={{ 
            bgcolor: 'primary.main', 
            color: 'white', 
            p: 4, 
            borderRadius: 2,
            textAlign: 'center',
            mb: 4
          }}>
            <Typography variant="h4" gutterBottom>
              100% מההכנסות נתרמות לקהילה
            </Typography>
            <Typography variant="body1" paragraph>
              כל ההכנסות מהאירועים והפייטנים שלנו מוקדשות במלואן לטובת עמותת למען באר שבע והנגב, האקדמיה לבר מצווה, והפקת בר מצווה לילדים בעלי צרכים מיוחדים וחסרי יכולת כלכלית.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom color="primary">
                    עמותת למען באר שבע והנגב
                  </Typography>
                  <Typography>
                    אנו פועלים לקידום החינוך והתרבות בבאר שבע והנגב, תוך דגש על שימור והנחלת המסורת היהודית לדורות הבאים.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom color="primary">
                    הנגשת בר מצווה לכולם
                  </Typography>
                  <Typography>
                    אנו מאמינים שכל ילד ראוי לחגוג את כניסתו למצוות בכבוד ובשמחה, ללא קשר למצבו הכלכלי או צרכיו המיוחדים.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Section>

      <Section className="light-bg">
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            הכר את הצוות
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph sx={{ mb: 6 }}>
            האנשים שהופכים כל אירוע לחוויה בלתי נשכחת
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
                >
                  <Box sx={{ p: 2 }}>
                    <Box 
                      component="img"
                      src={member.image}
                      alt={member.imageAlt}
                      sx={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover',
                        borderRadius: 2,
                        mb: 2
                      }}
                    />
                    <TeamMemberInfo>
                      <Typography variant="h6" gutterBottom>
                        {member.name}
                      </Typography>
                      <Typography color="primary" gutterBottom>
                        {member.role}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.description}
                      </Typography>
                    </TeamMemberInfo>
                  </Box>
                </TeamCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            שאלות נפוצות
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph sx={{ mb: 6 }}>
            כל מה שרצית לדעת
          </Typography>

          <Grid container spacing={3}>
            {faq.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <QuestionCard elevation={3}>
                  <Typography variant="h6" gutterBottom color="primary">
                    {item.question}
                  </Typography>
                  <Typography>
                    {item.answer}
                  </Typography>
                </QuestionCard>
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
    title: 'תרומה לקהילה',
    description: '100% מההכנסות מכלל האירועים והפייטנים שלנו נתרמות לטובת עמותת למען באר שבע והנגב ולהפקת בר מצווה לילדים בעלי צרכים מיוחדים.'
  }
];

const team = [
  {
    name: 'דביר דלויה',
    role: 'מנהל האקדמיה',
    description: 'מומחה בחזנות מרוקאית, פיוטים ספרדיים ומסורת חזנות ירושלמית',
    image: '/staff/dvir.jpeg',
    imageAlt: 'דביר דלויה, מנהל אקדמיה לבר מצווה ופייטן מקצועי',
    fullDescription: 'דביר דלויה הוא מנהל אקדמיה לבר מצווה ופייטן מקצועי עם 14 שנות ניסיון. הוא מתמחה בחזנות מרוקאית, פיוטים ספרדיים ומסורת חזנות ירושלמית. כבוגר חינוך מיוחד, דביר מביא גישה ייחודית ומותאמת אישית להוראת בר מצווה.',
    expertise: 'חזנות מרוקאית, פיוטים ספרדיים, מסורת חזנות ירושלמית, הוראת בר מצווה',
    education: 'בוגר חינוך מיוחד, הכשרה מקצועית בחזנות ופיוטים',
    experience: '14 שנות ניסיון בהוראת בר מצווה, הופעות וניהול אקדמיה'
  },
  {
    name: 'רז נעמן',
    role: 'פייטן וחזן',
    description: 'בוגר מרכז שירה ופיוט באשדוד, מומחה בחזנות מרוקאית ופיוטים ספרדיים',
    image: '/staff/raz naaman.jpg',
    imageAlt: 'רז נעמן, פייטן וחזן מקצועי',
    fullDescription: 'רז נעמן הוא בוגר מרכז שירה ופיוט באשדוד עם 8 שנות ניסיון בתחום הפיוט והשירה. הוא מתמחה בחזנות מרוקאית, פיוטים ספרדיים ושירה מזרחית.',
    expertise: 'חזנות מרוקאית, פיוטים ספרדיים, שירה מזרחית',
    education: 'בוגר מרכז שירה ופיוט באשדוד',
    experience: '8 שנות ניסיון בפיוט ושירה'
  },
  {
    name: 'חיים אלון',
    role: 'פייטן בכיר',
    description: 'מגדולי הפייטנים בארץ, מתמחה במוזיקה חסידית ומזרחית',
    image: '/staff/haim.jpg',
    imageAlt: 'חיים אלון, מגדולי הפייטנים בארץ',
    fullDescription: 'חיים אלון הוא מגדולי הפייטנים בארץ, בעל ניסיון עשיר של למעלה מ-30 שנה בתחום. מתמחה במוזיקה חסידית ומזרחית והופיע על הבמות הגדולות ביותר בארץ.',
    expertise: 'מוזיקה חסידית, מוזיקה מזרחית, פיוטים מסורתיים',
    education: 'הכשרה מקצועית בפיוט וחזנות',
    experience: 'מעל 30 שנות ניסיון בהופעות ופיוט'
  },
  {
    name: 'אופיר אלחייני',
    role: 'זמר ויוצר',
    description: 'זמר ויוצר בזמר הישראלי, בעל סגנון ייחודי',
    image: '/staff/offir.jpg',
    imageAlt: 'אופיר אלחייני, זמר ויוצר בזמר הישראלי',
    fullDescription: 'אופיר אלחייני הוא זמר ויוצר מוכשר שהחל את דרכו המוזיקלית בגיל צעיר. בעל סגנון ייחודי המשלב בין המסורתי למודרני, פרץ לאחרונה עם אלבום בכורה.',
    expertise: 'זמר ישראלי, יצירה מוזיקלית, הופעות חיות',
    education: 'הכשרה מוזיקלית מקצועית',
    experience: '10 שנות ניסיון בשירה והופעות'
  }
];

const process: ProcessStep[] = [
  {
    title: 'פגישת היכרות',
    description: 'נפגש לשיחת היכרות כדי להבין את הצרכים והרצונות שלכם',
    image: '/gallery/orenk-134 Large.jpeg',
    imageAlt: 'דביר דלויה יושב עם לקוחות בפגישת היכרות, מקשיב בתשומת לב לדרישותיהם'
  },
  {
    title: 'בחירת רפרטואר',
    description: 'נבחר יחד את הפיוטים והשירים שילוו את האירוע',
    image: '/gallery/orenk-97 Large.jpeg',
    imageAlt: 'דביר דלויה עובר על רשימת שירים עם לקוחות, מתאים את הרפרטואר לאופי האירוע'
  },
  {
    title: 'חזרות והכנה',
    description: 'נקיים חזרות והכנות מקדימות לקראת האירוע',
    image: '/gallery/orenk-85 Large.jpeg',
    imageAlt: 'דביר דלויה בחזרה עם הצוות המוזיקלי, מתאמים את הביצועים לקראת האירוע'
  },
  {
    title: 'ביצוע מושלם',
    description: 'נדאג לכל הפרטים כדי שתוכלו להתרכז רק בשמחה',
    image: '/gallery/orenk-78 Large.jpeg',
    imageAlt: 'דביר דלויה מופיע באירוע, יוצר אווירה שמחה ומרגשת עם הקהל'
  }
];

const faq: FAQItem[] = [
  {
    question: "איך מתחיל תהליך ההזמנה?",
    answer: "התהליך מתחיל בפגישת היכרות חינם, בה נשמע על האירוע שלכם, נבין את הצרכים והרצונות שלכם, ונתאים לכם את החבילה המושלמת."
  },
  {
    question: "כמה זמן מראש צריך להזמין?",
    answer: "מומלץ להזמין לפחות 10 חודשים מראש, במיוחד בעונות החתונות והאירועים. עם זאת, אנחנו תמיד משתדלים לעזור גם בהזמנות ברגע האחרון."
  },
  {
    question: "האם אתם מופיעים בכל הארץ?",
    answer: "כן, אנחנו מופיעים בכל רחבי הארץ. המשרד שלנו נמצא בבאר שבע, אך אנחנו נגיעים לכל מקום בארץ."
  },
  {
    question: "איזה סוגי אירועים אתם מכסים?",
    answer: "אנחנו מופיעים במגוון אירועים: חתונות, בר/בת מצווה, בריתות, אירועים קהילתיים, אירועי חברה ועוד. כל אירוע מקבל התאמה אישית."
  }
];

const processStepVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const teamMemberVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const faqVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default Home;