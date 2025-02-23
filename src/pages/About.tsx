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
                  דביר דלויה - מנהל אקדמיה לבר מצווה ופייטן מקצועי
                </Typography>
                <Typography variant="h5" gutterBottom color="primary">
                  14 שנות ניסיון בפייטנות וחזנות
                </Typography>
                <Typography paragraph>
                  דביר דלויה הוא פייטן וחזן מקצועי המתמחה בפייטנות מרוקאית, פיוטים ספרדיים וחזנות ירושלמית. כבעל תואר ראשון בחינוך מיוחד, דביר משלב את כישוריו החינוכיים עם אהבתו למוזיקה ולמסורת, ומעניק חוויה ייחודית ומעשירה לכל תלמיד ואירוע.
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mt: 3, 
                    color: 'primary.main',
                    fontWeight: 'bold',
                    bgcolor: 'rgba(59, 130, 246, 0.1)',
                    p: 2,
                    borderRadius: 2
                  }}
                >
                  100% מההכנסות מכלל האירועים והפייטנים שלנו נתרמות לטובת עמותת למען באר שבע והנגב, האקדמיה לבר מצווה, והפקת בר מצווה לילדים בעלי צרכים מיוחדים וחסרי יכולת כלכלית.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <StoryImage 
                src="/gallery/orenk-140 Large.jpeg" 
                alt="דביר דלויה בהופעה חיה, מבצע פיוטים מסורתיים בהתלהבות ובמקצועיות, מחובר לקהל ולמוזיקה" 
              />
            </Grid>
          </Grid>
        </Container>
      </Section>

      <StorySection>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ mb: 6 }}>
            התמחות וניסיון
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <StoryCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Typography variant="h5" gutterBottom>
                  התמחות מקצועית
                </Typography>
                <Typography paragraph>
                  מומחה בפייטנות מרוקאית, פיוטים ספרדיים וחזנות ירושלמית. משלב בין מסורת עתיקה לביצועים מודרניים, תוך שמירה על האותנטיות והעומק של המוזיקה היהודית.
                </Typography>
              </StoryCard>

              <StoryCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography variant="h5" gutterBottom>
                  השכלה וכישורים
                </Typography>
                <Typography paragraph>
                  בעל תואר ראשון בחינוך מיוחד, המאפשר גישה מותאמת אישית לכל תלמיד. משלב את הידע החינוכי עם המומחיות המוזיקלית ליצירת חוויית למידה מעשירה ומעצימה.
                </Typography>
              </StoryCard>

              <StoryCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography variant="h5" gutterBottom>
                  ניסיון עשיר
                </Typography>
                <Typography paragraph>
                  14 שנות ניסיון בתחום הפייטנות והחזנות, במהלכן ליווה מאות אירועים ותלמידים. מביא עמו ניסיון עשיר בהופעות חיות, הוראה והכנה לבר מצווה, וניהול אקדמיה מקצועית.
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

      <Section sx={{ bgcolor: '#1e3a8a', color: 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom sx={{ color: 'white' }}>
            המטרה החברתית שלנו
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <StyledPaper sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white' }}>
                <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
                  תרומה לקהילה
                </Typography>
                <Typography paragraph>
                  כל ההכנסות מהאירועים והפייטנים שלנו מוקדשות במלואן לטובת עמותת למען באר שבע והנגב. אנחנו מאמינים שכוחה של קהילה נמדד ביכולתה לתמוך בחבריה.
                </Typography>
              </StyledPaper>
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledPaper sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white' }}>
                <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
                  הנגשת בר מצווה לכולם
                </Typography>
                <Typography paragraph>
                  אנו מקדישים את המשאבים להפקת אירועי בר מצווה עבור ילדים בעלי צרכים מיוחדים וילדים ממשפחות מעוטות יכולת, מתוך אמונה שכל ילד ראוי לחגוג את כניסתו למצוות בכבוד ובשמחה.
                </Typography>
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