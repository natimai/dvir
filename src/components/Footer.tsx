import { Container, Grid, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: #1e3a8a;
  color: white;
  padding: 48px 0;
  margin-top: auto;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: block;
  margin-bottom: 8px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              צור קשר
            </Typography>
            <Typography variant="body2">
              טלפון: 050-1234567
            </Typography>
            <Typography variant="body2">
              אימייל: dvir@example.com
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              קישורים מהירים
            </Typography>
            <Box component="nav">
              <Box component="ul" sx={{ listStyle: 'none', p: 0 }}>
                <li>
                  <FooterLink to="/about">אודות</FooterLink>
                </li>
                <li>
                  <FooterLink to="/services">שירותים</FooterLink>
                </li>
                <li>
                  <FooterLink to="/faq">שאלות נפוצות</FooterLink>
                </li>
                <li>
                  <FooterLink to="/contact">צור קשר</FooterLink>
                </li>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              שעות פעילות
            </Typography>
            <Typography variant="body2">
              ימים א'-ה': 09:00-20:00
            </Typography>
            <Typography variant="body2">
              יום ו': 09:00-13:00
            </Typography>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} דביר דלויה. כל הזכויות שמורות.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 