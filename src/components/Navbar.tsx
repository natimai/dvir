import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Container, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';

const StyledAppBar = styled(AppBar)`
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const StyledLink = styled(Link)`
  color: #1e3a8a;
  margin: 0 8px;
  font-weight: 500;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;
  
  &:hover {
    background-color: rgba(30, 58, 138, 0.1);
  }

  &.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 2px;
    background: #1e3a8a;
    border-radius: 2px;
  }
`;

const MobileDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 100%;
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
    color: white;
    padding: 20px;
  }
`;

const MobileNavItem = styled(motion.div)`
  margin: 8px 0;
  
  a {
    display: block;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    padding: 16px;
    border-radius: 12px;
    transition: all 0.2s ease;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);

    &.active {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  z-index: 1000;
`;

const menuItems = [
  { text: 'ראשי', path: '/' },
  { text: 'אודות', path: '/about' },
  { text: 'שירותים', path: '/services' },
  { text: 'שאלות נפוצות', path: '/faq' },
  { text: 'צור קשר', path: '/contact' },
];

const mobileNavVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.645, 0.045, 0.355, 1.000],
    },
  }),
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  const drawer = (
    <Box sx={{ height: '100%', position: 'relative' }}>
      <CloseButton onClick={handleDrawerToggle} aria-label="סגור תפריט">
        <CloseIcon />
      </CloseButton>
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        height: '100%',
        pt: 4
      }}>
        {menuItems.map((item, index) => (
          <MobileNavItem
            key={item.text}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={mobileNavVariants}
          >
            <Link
              to={item.path}
              onClick={handleDrawerToggle}
              className={isActive(item.path)}
            >
              {item.text}
            </Link>
          </MobileNavItem>
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="sticky">
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
            
            <Box component={Link} to="/" sx={{ 
              textDecoration: 'none',
              marginLeft: 'auto',
              marginRight: { xs: 'auto', sm: '0' },
              transform: 'scale(0.9)',
              '@media (max-width: 600px)': {
                transform: 'scale(0.8)',
              }
            }}>
              <img src="/logo.svg" alt="דביר דלויה" height={40} />
            </Box>

            <Box sx={{ marginRight: 'auto', display: { xs: 'none', sm: 'block' } }}>
              {menuItems.map((item) => (
                <StyledLink 
                  key={item.text} 
                  to={item.path}
                  className={isActive(item.path)}
                >
                  {item.text}
                </StyledLink>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>

      <AnimatePresence>
        {mobileOpen && (
          <MobileDrawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
            }}
          >
            {drawer}
          </MobileDrawer>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 