import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from '@emotion/styled';
import { Typography, Container, Box } from '@mui/material';

const testimonials = [
  {
    content: "דביר הוא מורה מדהים! הוא עזר לי להתקדם בצורה משמעותית בלימודי המתמטיקה שלי. הוא מסביר בצורה ברורה ומותאמת אישית.",
    name: "דניאל כהן"
  },
  {
    content: "השיעורים עם דביר עזרו לי להעלות את הציון שלי מ-60 ל-85! הוא סבלני, מקצועי ותמיד זמין לעזור.",
    name: "מיכל לוי"
  },
  {
    content: "דביר הוא מורה מעולה שבאמת אכפת לו מהתלמידים שלו. הוא עזר לי להבין נושאים מורכבים בצורה פשוטה.",
    name: "יובל שרון"
  },
  {
    content: "תודה רבה דביר! בזכותך הצלחתי במבחן הבגרות במתמטיקה. אתה מורה מצוין!",
    name: "רועי אברהם"
  }
];

const TestimonialsContainer = styled.section`
  position: relative;
  overflow: hidden;
  background: linear-gradient(165deg, #f8fafc 0%, #ffffff 100%);
  padding: 120px 0;
  
  @media (max-width: 600px) {
    padding: 80px 0;
  }
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 32px;
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.02),
    0 10px 15px rgba(0, 0, 0, 0.03),
    0 20px 30px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.7);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #1e3a8a, #3b82f6);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover:before {
    opacity: 1;
  }
`;

const QuoteMark = styled(Typography)`
  position: absolute;
  top: -20px;
  right: 20px;
  font-size: 120px;
  color: rgba(30, 58, 138, 0.05);
  font-family: Georgia, serif;
  pointer-events: none;
`;

export const TestimonialsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

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
                background: 'linear-gradient(45deg, #1e3a8a 30%, #3b82f6 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              המלצות
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary"
              sx={{ 
                maxWidth: '600px', 
                margin: '0 auto',
                opacity: 0.8
              }}
            >
              מה הלקוחות שלנו אומרים עלינו
            </Typography>
          </motion.div>
        </Box>

        <motion.div style={{ opacity, scale }}>
          <TestimonialsGrid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
              >
                <QuoteMark>"</QuoteMark>
                <Typography 
                  paragraph 
                  sx={{ 
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  {testimonial.content}
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontWeight: 600,
                    color: 'primary.main',
                    mt: 2
                  }}
                >
                  {testimonial.name}
                </Typography>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </motion.div>
      </Container>
    </TestimonialsContainer>
  );
};
