import { Container, Typography, Grid, Box, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterWrapper = styled('footer')`
  background: linear-gradient(165deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  padding: 80px 0 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #1e3a8a, #3b82f6);
  }
`;

const FooterSection = styled(Box)`
  margin-bottom: 32px;
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  display: block;
  margin-bottom: 8px;
  font-size: 0.9rem;

  &:hover {
    color: white;
    transform: translateX(-4px);
  }
`;

const ContactItem = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  color: rgba(255, 255, 255, 0.8);

  svg {
    margin-left: 8px;
    font-size: 20px;
    color: #60a5fa;
  }
`;

const SocialButton = styled('a')`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
  transition: all 0.3s ease;
  color: white;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
  }

  svg {
    font-size: 20px;
  }
`;

const LegalSection = styled(Box)`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* מידע על החברה */}
          <Grid item xs={12} md={4}>
            <FooterSection>
              <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 600 }}>
                דביר דלויה
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 2 }}>
                פייטן וחזן מקצועי לאירועים מיוחדים
              </Typography>
              <ContactItem>
                <LocationOnIcon />
                <Box>
                  <Typography variant="body2">
                    באר שבע והסביבה
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    שירות ניתן בכל רחבי הארץ
                  </Typography>
                </Box>
              </ContactItem>
              <ContactItem>
                <PhoneIcon />
                <Typography variant="body2">
                  058-627-6261
                </Typography>
              </ContactItem>
              <ContactItem>
                <EmailIcon />
                <Typography variant="body2">
                  dvir@example.com
                </Typography>
              </ContactItem>
              <ContactItem>
                <AccessTimeIcon />
                <Box>
                  <Typography variant="body2">
                    ימים א'-ה': 09:00-20:00
                  </Typography>
                  <Typography variant="body2">
                    יום ו': 09:00-13:00
                  </Typography>
                </Box>
              </ContactItem>
            </FooterSection>
          </Grid>

          {/* קישורים מהירים */}
          <Grid item xs={12} sm={6} md={4}>
            <FooterSection>
              <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 600 }}>
                ניווט מהיר
              </Typography>
              <FooterLink to="/about">אודות</FooterLink>
              <FooterLink to="/services">שירותים</FooterLink>
              <FooterLink to="/gallery">גלריה</FooterLink>
              <FooterLink to="/faq">שאלות נפוצות</FooterLink>
              <FooterLink to="/contact">צור קשר</FooterLink>
            </FooterSection>
          </Grid>

          {/* מידע משפטי */}
          <Grid item xs={12} sm={6} md={4}>
            <FooterSection>
              <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 600 }}>
                מידע משפטי
              </Typography>
              <FooterLink to="/terms">תנאי שימוש</FooterLink>
              <FooterLink to="/privacy">מדיניות פרטיות</FooterLink>
              <FooterLink to="/accessibility">הצהרת נגישות</FooterLink>
              <FooterLink to="/cookies">מדיניות עוגיות</FooterLink>
              <FooterLink to="/refund-policy">מדיניות ביטולים והחזרים</FooterLink>
            </FooterSection>
          </Grid>
        </Grid>

        {/* רשתות חברתיות */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 600 }}>
            עקבו אחרינו
          </Typography>
          <Box sx={{ mt: 2 }}>
            <SocialButton 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="עקבו אחרינו בפייסבוק"
            >
              <FacebookIcon />
            </SocialButton>
            <SocialButton 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="עקבו אחרינו באינסטגרם"
            >
              <InstagramIcon />
            </SocialButton>
            <SocialButton 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="צרו איתנו קשר בוואטסאפ"
            >
              <WhatsAppIcon />
            </SocialButton>
            <SocialButton 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="הצטרפו לערוץ היוטיוב שלנו"
            >
              <YouTubeIcon />
            </SocialButton>
          </Box>
        </Box>

        {/* מידע משפטי בתחתית */}
        <LegalSection>
          <Typography variant="body2" paragraph>
            © {currentYear} עמותת למען באר שבע והנגב. כל הזכויות שמורות.
          </Typography>
          <Typography variant="body2">
            האתר נבנה על ידי נתנאל מימון | 
            <Link to="/sitemap" style={{ color: 'inherit', marginRight: '4px' }}>מפת אתר</Link>
          </Typography>
        </LegalSection>
      </Container>
    </FooterWrapper>
  );
};

export default Footer; 