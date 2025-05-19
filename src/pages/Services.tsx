import { Container, Typography, Grid, Box, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Section = styled.section`
  padding: 80px 0;
  
  &:nth-of-type(even) {
    background-color: #f5f5f5;
  }
`;

const ServiceCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  padding: 32px;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const Services = () => {
  return (
    <>
      <Section>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            השירותים שלנו
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            מגוון שירותים מותאמים אישית לכל אירוע ולקוח
          </Typography>
          
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <ServiceCard
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Typography variant="h4" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography paragraph>
                    {service.description}
                  </Typography>
                  <Box component="ul" sx={{ flexGrow: 1, pl: 2 }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    component={Link}
                    to={service.link}
                    sx={{ mt: 2 }}
                  >
                    לפרטים נוספים
                  </Button>
                </ServiceCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            איך זה עובד?
          </Typography>
          <Box sx={{ mt: 4 }}>
            {howItWorks.map((step, index) => (
              <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">{step.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{step.description}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Section>

      <Section>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            שאלות נפוצות
          </Typography>
          <Box sx={{ mt: 4 }}>
            {faqs.map((faq, index) => (
              <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Section>
    </>
  );
};

const services = [
  {
    title: 'הופעות בר מצווה',
    description: 'הופעות מרגשות ומקצועיות המשלבות פיוטים מסורתיים עם עיבודים מודרניים',
    features: [
      'פיוטים וקטעי חזנות מסורתיים',
      'שילוב שירים מודרניים בעיבודים ייחודיים',
      'ליווי מוזיקלי מקצועי',
      'התאמה אישית לסגנון המשפחה',
      'אפשרות להקלטת קטעים נבחרים',
      'חזרות והכנה מקדימה'
    ],
    link: '/services/bar-mitzvah'
  },
  {
    title: 'אירועים מיוחדים',
    description: 'הפקה מוזיקלית מקצועית לאירועים מיוחדים וערבי פיוטים',
    features: [
      'חתונות וחינות בסגנון ספרדי מסורתי',
      'ערבי פיוטים וסליחות',
      'אירועים קהילתיים',
      'שבתות חתן מיוחדות',
      'הופעות בבתי כנסת',
      'אירועי גיבוש וחברה'
    ],
    link: '/services/special-events'
  },
  {
    title: 'לימוד והדרכה',
    description: 'שיעורים והדרכה אישית בתחום הפיוטים והחזנות',
    features: [
      'לימוד פיוטים וחזנות',
      'הכנה לבר מצווה',
      'סדנאות קבוצתיות',
      'הדרכת חזנים צעירים',
      'לימוד מסורת ספרדית',
      'הכשרת בעלי תפילה'
    ],
    link: '/services/teaching'
  }
];

const howItWorks = [
  {
    title: 'פגישת היכרות והתאמה',
    description: 'נפגש לשיחת היכרות כדי להבין את הצרכים והרצונות שלכם, ולהתאים את התוכנית המושלמת לאירוע.'
  },
  {
    title: 'בחירת רפרטואר',
    description: 'יחד נבחר את הפיוטים והשירים שילוו את האירוע, משילוב של מסורת ספרדית עתיקה עם נגיעות מודרניות.'
  },
  {
    title: 'חזרות והכנה',
    description: 'נקיים חזרות והכנות מקדימות כדי להבטיח שהכל יהיה מושלם ביום האירוע.'
  },
  {
    title: 'ביצוע מושלם',
    description: 'ביום האירוע, נדאג לכל הפרטים הטכניים והמוזיקליים כדי שתוכלו להתרכז רק בשמחה.'
  }
];

const faqs = [
  {
    question: 'האם אתם מלווים לאורך כל האירוע?',
    answer: 'כן בהחלט, אנחנו מנהלים את האירוע מתחילתו ועד סופו, עם תוכנית אמנותית מסודרת שאורכה בהתאם לחבילה שנבחרה.'
  },
  {
    question: 'כמה זמן לפני האירוע צריך לתאם?',
    answer: 'מומלץ לשריין תאריך כ-3-6 חודשים מראש, במיוחד בעונות השיא. עם זאת, אנחנו תמיד משתדלים להיות גמישים ולמצוא פתרונות גם בהתראה קצרה יותר.'
  },
  {
    question: 'האם אתם ממשיכים גם לסעודה?',
    answer: 'בהחלט! אנחנו שמחים להמשיך ולשמח גם בסעודה. קיימת אפשרות לליווי מוזיקלי הכולל מוזיקת רקע, הופעה מיוחדת או טברנה, בתנאי תשלום נפרדים.'
  },
  {
    question: 'האם אתם מופיעים בכל הארץ?',
    answer: 'כן, אנחנו מופיעים בכל רחבי הארץ. לאירועים מחוץ לאזור המרכז יתכן חיוב נוסף עבור הנסיעות.'
  }
];

export default Services;