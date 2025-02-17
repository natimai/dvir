import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Section = styled.section`
  padding: 80px 0;
`;

const Accordion = styled(MuiAccordion)`
  margin-bottom: 16px;
  border-radius: 8px !important;
  
  &:before {
    display: none;
  }
  
  &.Mui-expanded {
    margin: 16px 0;
  }
`;

const AccordionSummary = styled(MuiAccordionSummary)`
  border-radius: 8px;
  background-color: #f8fafc;
  
  &.Mui-expanded {
    border-radius: 8px 8px 0 0;
  }
`;

const AccordionDetails = styled(MuiAccordionDetails)`
  padding: 24px;
`;

const FAQ = () => {
  return (
    <Section>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            שאלות נפוצות
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph sx={{ mb: 6 }}>
            כל מה שרציתם לדעת על שירותי הפייטנות והחזנות שלנו
          </Typography>

          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            {faqItems.map((item, index) => (
              <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Section>
  );
};

const faqItems = [
  {
    question: 'מהו הסגנון המוזיקלי שלכם?',
    answer: 'אנחנו מתמחים בפיוטים וחזנות בסגנון ספרדי ירושלמי מסורתי, תוך שילוב עיבודים מודרניים ומקוריים. הרפרטואר שלנו כולל פיוטים עתיקים, קטעי חזנות קלאסיים ושילובים מוזיקליים ייחודיים.'
  },
  {
    question: 'לאילו אירועים אתם מתאימים?',
    answer: 'אנחנו מופיעים במגוון אירועים: חתונות, בר/בת מצווה, חינות, שבתות חתן, ערבי פיוטים, אירועים קהילתיים ועוד. אנחנו מתאימים את הרפרטואר והסגנון לאופי האירוע ולקהל.'
  },
  {
    question: 'האם אתם מופיעים עם ליווי מוזיקלי?',
    answer: 'כן, אנחנו מציעים מגוון אפשרויות ליווי מוזיקלי: החל מליווי בסיסי ועד להרכב מורחב. הליווי המוזיקלי מותאם לסוג האירוע, התקציב והעדפות הלקוח.'
  },
  {
    question: 'מה כוללת ההופעה?',
    answer: 'ההופעה כוללת ביצוע פיוטים וקטעי חזנות בהתאם לחבילה שנבחרה, כולל הגברה (בחבילות המתאימות), ליווי מוזיקלי, והתאמת הרפרטואר לאירוע. בחבילת הפרימיום מקבלים גם צילום והקלטה של ההופעה.'
  },
  {
    question: 'כמה זמן נמשכת הופעה?',
    answer: 'משך ההופעה משתנה בהתאם לחבילה: החבילה הבסיסית כוללת שעה, החבילה המורחבת שעתיים, וחבילת הפרימיום עד 3 שעות. ניתן להתאים את משך ההופעה לצרכי האירוע.'
  },
  {
    question: 'האם אתם מופיעים בכל הארץ?',
    answer: 'כן, אנחנו מופיעים בכל רחבי הארץ. לאירועים מחוץ לאזור המרכז יתכן חיוב נוסף עבור נסיעות, בהתאם למרחק ולשעת האירוע.'
  },
  {
    question: 'האם ניתן לבחור את הפיוטים?',
    answer: 'בהחלט! אנחנו נשמח להתאים את הרפרטואר לבקשותיכם. מומלץ לתאם את בחירת הפיוטים מראש כדי שנוכל להיערך בהתאם ולהבטיח ביצוע מושלם.'
  },
  {
    question: 'מה נדרש מבחינת ציוד והגברה?',
    answer: 'בחבילות המורחבת והפרימיום אנחנו מספקים את כל הציוד הנדרש, כולל מערכת הגברה איכותית. בחבילה הבסיסית ניתן להוסיף הגברה בתשלום נוסף או להשתמש במערכת הקיימת באולם.'
  },
  {
    question: 'איך מתבצע התשלום?',
    answer: 'ניתן לשלם במגוון אמצעים: מזומן, העברה בנקאית או כרטיס אשראי. נדרש מקדמה של 30% בעת ההזמנה, והיתרה עד שבוע לפני האירוע.'
  },
  {
    question: 'מה קורה במקרה של ביטול?',
    answer: 'מדיניות הביטול שלנו גמישה. ביטול עד חודש לפני האירוע - החזר מלא של המקדמה. ביטול עד שבועיים לפני - החזר של 50% מהמקדמה. ביטול של פחות משבועיים - ללא החזר.'
  }
];

export default FAQ; 