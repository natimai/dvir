import { Container, Typography, Grid, Box, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

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

const PriceTag = styled.div`
  background: #1e3a8a;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  display: inline-block;
  margin: 16px 0;
`;

const Services = () => {
  return (
    <>
      <Section>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            חבילות שירות
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            מגוון אפשרויות להתאמה מושלמת לאירוע שלכם
          </Typography>
          
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {packages.map((pkg, index) => (
              <Grid item xs={12} md={4} key={index}>
                <ServiceCard
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Typography variant="h4" gutterBottom>
                    {pkg.title}
                  </Typography>
                  <PriceTag>
                    החל מ-{pkg.price}₪
                  </PriceTag>
                  <Typography paragraph>
                    {pkg.description}
                  </Typography>
                  <Box component="ul" sx={{ flexGrow: 1, pl: 2 }}>
                    {pkg.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    href="/contact"
                    sx={{ mt: 2 }}
                  >
                    להזמנת הופעה
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

const packages = [
  {
    title: 'חבילה בסיסית',
    price: '2,000',
    description: 'מתאים לאירועים קטנים ומשפחתיים',
    features: [
      'הופעה של שעה',
      'רפרטואר פיוטים מסורתי',
      'ליווי מוזיקלי בסיסי',
      'הגברה בסיסית',
      'תיאום ציפיות מקדים'
    ]
  },
  {
    title: 'חבילה מורחבת',
    price: '3,500',
    description: 'החבילה המומלצת שלנו לאירועים גדולים',
    features: [
      'הופעה של שעתיים',
      'רפרטואר מותאם אישית',
      'ליווי מוזיקלי מלא',
      'הגברה מקצועית',
      'שילוב קטעי סולו מיוחדים',
      'פגישת תיאום מקדימה'
    ]
  },
  {
    title: 'חבילת פרימיום',
    price: '5,000',
    description: 'החבילה המושלמת לאירועים מיוחדים',
    features: [
      'הופעה של עד 3 שעות',
      'רפרטואר מותאם אישית',
      'הרכב מוזיקלי מורחב',
      'מערכת הגברה מקצועית',
      'שילוב קטעים מקוריים',
      'הקלטת קטעים נבחרים',
      'וידאו מקצועי של ההופעה',
      'פגישת תיאום והכנה מקיפה'
    ]
  }
];

const howItWorks = [
  {
    title: 'נתחיל עם קטעי חזנות מסולסלים',
    description: 'בסגנון ספרדי-ירושלמי, מה שיוצר אווירה מרגשת ונוגעת ללב ולנשמה של כל הקהל.'
  },
  {
    title: 'נמשיך עם תכנית אמנותית מגוונת',
    description: 'משלבים שירים ים תיכוניים ופיוטים מבית אבא בעיבודים חדשניים, עם ליווי מוזיקלי מקצועי.'
  },
  {
    title: 'יוצרים אווירה מיוחדת',
    description: 'מתאימים את הרפרטואר והסגנון לאופי האירוע והקהל, יוצרים חוויה מוזיקלית מרגשת ובלתי נשכחת.'
  },
  {
    title: 'מלווים אתכם לאורך כל הדרך',
    description: 'מפגישת ההיכרות ועד לסיום האירוע, אנחנו כאן בשבילכם עם ליווי מקצועי ואישי.'
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