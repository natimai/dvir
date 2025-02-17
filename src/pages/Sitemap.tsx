import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GavelIcon from '@mui/icons-material/Gavel';
import SecurityIcon from '@mui/icons-material/Security';
import CookieIcon from '@mui/icons-material/Cookie';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';

const Section = styled.section`
  padding: 80px 0;
  background: linear-gradient(165deg, #f8fafc 0%, #ffffff 100%);
`;

const StyledPaper = styled(Paper)`
  padding: 32px;
  margin-bottom: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100%;
`;

const SitemapLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #1e3a8a;
  text-decoration: none;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  margin-bottom: 8px;

  &:hover {
    background: rgba(59, 130, 246, 0.1);
    transform: translateX(-4px);
  }

  svg {
    margin-left: 8px;
    color: #3b82f6;
  }
`;

const Sitemap = () => {
  const pages = [
    {
      title: 'דפים ראשיים',
      links: [
        { to: '/', text: 'דף הבית', icon: <HomeIcon /> },
        { to: '/about', text: 'אודות', icon: <InfoIcon /> },
        { to: '/gallery', text: 'גלריה', icon: <PhotoLibraryIcon /> },
        { to: '/contact', text: 'צור קשר', icon: <ContactMailIcon /> },
      ],
    },
    {
      title: 'מידע משפטי',
      links: [
        { to: '/terms', text: 'תנאי שימוש', icon: <GavelIcon /> },
        { to: '/privacy', text: 'מדיניות פרטיות', icon: <SecurityIcon /> },
        { to: '/cookies', text: 'מדיניות עוגיות', icon: <CookieIcon /> },
        { to: '/refund-policy', text: 'מדיניות ביטולים והחזרים', icon: <AssignmentReturnIcon /> },
      ],
    },
  ];

  return (
    <Section>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          gutterBottom
          sx={{
            fontWeight: 700,
            textAlign: 'center',
            mb: 4
          }}
        >
          מפת האתר
        </Typography>

        <Grid container spacing={4}>
          {pages.map((section, index) => (
            <Grid item xs={12} md={6} key={index}>
              <StyledPaper>
                <Typography variant="h5" gutterBottom color="primary" sx={{ mb: 3 }}>
                  {section.title}
                </Typography>
                <Box>
                  {section.links.map((link, linkIndex) => (
                    <SitemapLink to={link.to} key={linkIndex}>
                      {link.icon}
                      <Typography>{link.text}</Typography>
                    </SitemapLink>
                  ))}
                </Box>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 4, color: 'text.secondary' }}>
          <Typography variant="body2">
            עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}
          </Typography>
        </Box>
      </Container>
    </Section>
  );
};

export default Sitemap; 