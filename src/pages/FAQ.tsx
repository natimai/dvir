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
            כל מה שרציתם לדעת על פייטן לבר מצווה בבאר שבע ושירותי החזנות שלנו
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
    question: "מהו הסגנון המוזיקלי של פייטן באר שבע?",
    answer: "אנחנו מתמחים בפיוטים מרוקאיים וחזנות ירושלמית מסורתית, תוך שילוב עיבודים מודרניים ומקוריים. הרפרטואר שלנו כולל פיוטים עתיקים, קטעי חזנות קלאסיים ושילובים מוזיקליים ייחודיים."
  },
  {
    question: "לאילו אירועי בר מצווה אתם מתאימים?",
    answer: "אנחנו מופיעים במגוון אירועי בר מצווה: בבתי כנסת, באולמות אירועים, בבתים פרטיים, שבתות חתן, ערבי פיוטים ועוד. אנחנו מתאימים את הרפרטואר והסגנון לאופי האירוע ולקהילה."
  },
  {
    question: "כמה זמן מראש צריך להזמין פייטן לבר מצווה?",
    answer: "מומלץ להזמין פייטן לבר מצווה לפחות 3-6 חודשים מראש, במיוחד בעונות השיא. עם זאת, אנחנו תמיד משתדלים לעזור גם בהזמנות ברגע האחרון."
  },
  {
    question: "איך מתבצע התשלום?",
    answer: "כעמותה, כל ההכנסות של הפייטנים נתרמות לעמותה. הנגנים מקבלים תשלום ומספקים חשבונית עבור שירותיהם, בעוד שהפייטן תורם את הכנסתו במלואה לעמותה."
  },
  {
    question: "האם אתם מופיעים בכל אזור באר שבע והדרום?",
    answer: "כן, אנחנו מופיעים בכל רחבי באר שבע והדרום. לאירועי בר מצווה מחוץ לאזור באר שבע יתכן חיוב נוסף עבור הנסיעות."
  }
];

export default FAQ;