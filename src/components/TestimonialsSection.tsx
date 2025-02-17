import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import { Typography, Container, Box, IconButton } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const testimonials = [
  {
    content: "דביר הוא פייטן מדהים! הוא הפך את בר המצווה של הבן שלנו לחוויה בלתי נשכחת. הקול שלו והיכולת שלו לשלב בין מסורת למודרני פשוט מרגשת.",
    name: "משפחת כהן",
    event: "בר מצווה"
  },
  {
    content: "הופעתו של דביר בחתונה שלנו הייתה פשוט מושלמת. האורחים לא מפסיקים לדבר על הביצועים המרגשים של הפיוטים והשירים המסורתיים.",
    name: "רועי ושירה לוי",
    event: "חתונה"
  },
  {
    content: "דביר וצוות הנגנים שלו העניקו לאירוע שלנו אווירה קסומה. השילוב של הפיוטים המסורתיים עם העיבודים המודרניים היה מושלם.",
    name: "משפחת אברהם",
    event: "בר מצווה"
  },
  {
    content: "מקצועיות ברמה הגבוהה ביותר! דביר הצליח לרגש את כל הקהל בביצועים המיוחדים שלו. ממליצים בחום!",
    name: "משפחת דוד",
    event: "אירוע קהילתי"
  },
  {
    content: "החאפלה שדביר הוביל הייתה מטורפת! השילוב של הפיוטים המסורתיים עם הקצב המזרחי יצר אווירה שאי אפשר לתאר במילים.",
    name: "משפחת אלמליח",
    event: "חאפלה"
  },
  {
    content: "דביר הביא את האנרגיות הכי טובות לחאפלה שלנו. כל האורחים רקדו והשתתפו בשירה. פשוט חוויה בלתי נשכחת!",
    name: "משפחת עמר",
    event: "חאפלה"
  }
];

const TestimonialsContainer = styled.section`
  position: relative;
  overflow: hidden;
  background: linear-gradient(165deg, #f8fafc 0%, #ffffff 100%);
  padding: 120px 0;
  color: #1e3a8a;
  min-height: 80vh;
  display: flex;
  align-items: center;
  
  @media (max-width: 600px) {
    padding: 80px 0;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: white;
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(30, 58, 138, 0.1);
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  &:before {
    content: '"';
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 120px;
    font-family: Georgia, serif;
    color: rgba(30, 58, 138, 0.1);
    line-height: 1;
  }

  &:after {
    content: '"';
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-size: 120px;
    font-family: Georgia, serif;
    color: rgba(30, 58, 138, 0.1);
    line-height: 1;
    transform: rotate(180deg);
  }
`;

const EventTag = styled.span`
  background: rgba(30, 58, 138, 0.1);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-top: 12px;
  display: inline-block;
  backdrop-filter: blur(5px);
  color: #1e3a8a;
`;

const NavigationButton = styled(IconButton)`
  color: #1e3a8a;
  background: white;
  backdrop-filter: blur(10px);
  margin: 0 8px;
  padding: 12px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  svg {
    font-size: 28px;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
`;

const Dot = styled(FiberManualRecordIcon)<{ active?: boolean }>`
  font-size: 12px;
  color: \${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <TestimonialsContainer ref={containerRef}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography 
              variant="h2" 
              gutterBottom 
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                color: '#1e3a8a'
              }}
            >
              מה אומרים עלינו
            </Typography>
            <Typography 
              variant="h5"
              sx={{ 
                maxWidth: '600px', 
                margin: '0 auto',
                color: '#3b82f6'
              }}
            >
              חוויות אמיתיות מלקוחות מרוצים
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ position: 'relative', height: '400px', mb: 4 }}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.3 }
              }}
              style={{
                position: 'absolute',
                width: '100%'
              }}
            >
              <TestimonialCard>
                <Typography 
                  paragraph 
                  sx={{ 
                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                    lineHeight: 1.8,
                    position: 'relative',
                    zIndex: 1,
                    color: '#1e3a8a',
                    mb: 4,
                    fontWeight: 500
                  }}
                >
                  {testimonials[currentIndex].content}
                </Typography>
                <Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      color: '#3b82f6',
                      fontSize: { xs: '1.1rem', md: '1.3rem' }
                    }}
                  >
                    {testimonials[currentIndex].name}
                  </Typography>
                  <EventTag>
                    {testimonials[currentIndex].event}
                  </EventTag>
                </Box>
              </TestimonialCard>
            </motion.div>
          </AnimatePresence>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          <NavigationButton onClick={handlePrevious}>
            <NavigateBeforeIcon />
          </NavigationButton>
          
          <Dots>
            {testimonials.map((_, index) => (
              <Dot 
                key={index}
                active={index === currentIndex}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </Dots>

          <NavigationButton onClick={handleNext}>
            <NavigateNextIcon />
          </NavigationButton>
        </Box>
      </Container>
    </TestimonialsContainer>
  );
};
