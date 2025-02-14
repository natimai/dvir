import { Container, Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const FooterContainer = styled.footer`
  background-color: #1e3a8a;
  color: white;
  padding: 48px 0;
  margin-top: auto;

  @media (prefers-reduced-motion: reduce) {
    * {
      animation: none !important;
      transition: none !important;
    }
  }
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover, &:focus {
    text-decoration: underline;
    background: rgba(255, 255, 255, 0.1);
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px white;
  }
`;

const SocialButton = styled('a')`
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
  margin: 0 8px;
  padding: 12px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  position: relative;

  &:hover, &:focus {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px white;
  }

  svg {
    font-size: 24px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover, &:focus {
      transform: none;
    }
  }
`;

const ContactItem = styled('a')`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 8px;
  color: white;
  text-decoration: none;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover, &:focus {
    background: rgba(255, 255, 255, 0.1);
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px white;
  }

  svg {
    font-size: 20px;
    opacity: 0.8;
  }
`;

const SkipLink = styled('a')`
  position: absolute;
  top: -40px;
  left: 0;
  background: #1e3a8a;
  color: white;
  padding: 8px;
  z-index: 100;
  transition: top 0.3s;

  &:focus {
    top: 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer role="contentinfo" aria-label="פוטר האתר">
      <SkipLink href="#main-content">
        דלג לתוכן הראשי
      </SkipLink>
      
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="h2" gutterBottom>
              צור קשר
            </Typography>
            
            <ContactItem href="tel:+972586276261" aria-label="התקשר אלינו">
              <PhoneIcon aria-hidden="true" />
              <Typography variant="body2">
                טלפון: 058-627-6261
              </Typography>
            </ContactItem>
            
            <ContactItem href="mailto:dvir@example.com" aria-label="שלח לנו אימייל">
              <EmailIcon aria-hidden="true" />
              <Typography variant="body2">
                אימייל: dvir@example.com
              </Typography>
            </ContactItem>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="h2" gutterBottom>
              ניווט מהיר
            </Typography>
            <nav aria-label="ניווט מהיר">
              <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
                <li>
                  <FooterLink to="/about">
                    אודות
                  </FooterLink>
                </li>
                <li>
                  <FooterLink to="/services">
                    שירותים
                  </FooterLink>
                </li>
                <li>
                  <FooterLink to="/faq">
                    שאלות נפוצות
                  </FooterLink>
                </li>
                <li>
                  <FooterLink to="/contact">
                    צור קשר
                  </FooterLink>
                </li>
                <li>
                  <FooterLink to="/accessibility">
                    הצהרת נגישות
                  </FooterLink>
                </li>
              </Box>
            </nav>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" component="h2" gutterBottom>
              שעות פעילות
            </Typography>
            <ContactItem>
              <AccessTimeIcon aria-hidden="true" />
              <Box>
                <Typography variant="body2">
                  ימים א'-ה': 09:00-20:00
                </Typography>
                <Typography variant="body2">
                  יום ו': 09:00-13:00
                </Typography>
              </Box>
            </ContactItem>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6, mb: 4, textAlign: 'center' }}>
          <nav aria-label="רשתות חברתיות">
            <SocialButton 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="עקבו אחרינו בפייסבוק"
            >
              <FacebookIcon aria-hidden="true" />
            </SocialButton>
            <SocialButton 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="עקבו אחרינו באינסטגרם"
            >
              <InstagramIcon aria-hidden="true" />
            </SocialButton>
            <SocialButton 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="צרו איתנו קשר בוואטסאפ"
            >
              <WhatsAppIcon aria-hidden="true" />
            </SocialButton>
            <SocialButton 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="הצטרפו לערוץ היוטיוב שלנו"
            >
              <YouTubeIcon aria-hidden="true" />
            </SocialButton>
          </nav>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" component="p" sx={{ mb: 1 }}>
            © {new Date().getFullYear()} דביר דלויה. כל הזכויות שמורות.
          </Typography>
          <Typography variant="body2" component="p" sx={{ 
            color: 'rgba(255, 255, 255, 0.8)',
            fontStyle: 'italic'
          }}>
            השירות ניתן על ידי עמותת למען באר שבע והנגב
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 