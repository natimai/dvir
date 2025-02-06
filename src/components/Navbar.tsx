import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Container, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';

const StyledAppBar = styled(AppBar)`
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
`;

const StyledLink = styled(Link)`
  color: #1e3a8a;
  margin: 0 8px;
  font-weight: 500;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(30, 58, 138, 0.1);
  }
`;

const menuItems = [
  { text: 'ראשי', path: '/' },
  { text: 'אודות', path: '/about' },
  { text: 'שירותים', path: '/services' },
  { text: 'שאלות נפוצות', path: '/faq' },
  { text: 'צור קשר', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem
          key={item.text}
          component={Link}
          to={item.path}
          onClick={handleDrawerToggle}
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <StyledAppBar position="sticky" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              color="primary"
              aria-label="פתח תפריט"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            
            <Box component={Link} to="/" sx={{ textDecoration: 'none', marginLeft: 'auto', marginRight: { xs: 'auto', sm: '0' } }}>
              <img src="/logo.svg" alt="דביר דלויה" height={40} />
            </Box>

            <Box sx={{ marginRight: 'auto', display: { xs: 'none', sm: 'block' } }}>
              {menuItems.map((item) => (
                <StyledLink key={item.text} to={item.path}>
                  {item.text}
                </StyledLink>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 