import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const MenuSection = styled('section')`
  padding: 80px 0;
  background-color: #fff;
`;

const MenuCard = styled(Paper)`
  padding: 24px;
  height: 100%;
  border-radius: 16px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const MenuItem = styled(Box)`
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px dashed #e0e0e0;
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const Menu = () => {
  const menuItems = {
    starters: [
      {
        name: 'חומוס הדרומית',
        description: 'חומוס ביתי עם שמן זית, פטרוזיליה ופפריקה',
        price: '32'
      },
      {
        name: 'סלט ירקות קצוץ',
        description: 'ירקות טריים קצוצים דק עם שמן זית ולימון',
        price: '28'
      },
      {
        name: 'כרובית מטוגנת',
        description: 'כרובית פריכה ברוטב צ׳ילי מתוק',
        price: '38'
      }
    ],
    mains: [
      {
        name: 'שיפודי פרגית',
        description: 'שיפודי פרגית במרינדה ביתית עם ירקות צלויים',
        price: '78'
      },
      {
        name: 'קציצות דגים מרוקאיות',
        description: 'קציצות דגים ברוטב עגבניות פיקנטי',
        price: '82'
      },
      {
        name: 'צלי בקר',
        description: 'נתח בקר בבישול ארוך עם ירקות שורש',
        price: '98'
      }
    ],
    desserts: [
      {
        name: 'מלבי',
        description: 'מלבי ביתי עם קוקוס, בוטנים ופיסטוקים',
        price: '32'
      },
      {
        name: 'עוגת שוקולד חמה',
        description: 'עם גלידת וניל וסירופ שוקולד',
        price: '38'
      }
    ]
  };

  return (
    <MenuSection>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            התפריט שלנו
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph sx={{ mb: 6 }}>
            מסע קולינרי בטעמים מהדרום
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <MenuCard elevation={3}>
                <Typography variant="h4" gutterBottom color="primary">
                  מנות ראשונות
                </Typography>
                {menuItems.starters.map((item, index) => (
                  <MenuItem key={index}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="subtitle1" color="primary">₪{item.price}</Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </MenuItem>
                ))}
              </MenuCard>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <MenuCard elevation={3}>
                <Typography variant="h4" gutterBottom color="primary">
                  מנות עיקריות
                </Typography>
                {menuItems.mains.map((item, index) => (
                  <MenuItem key={index}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="subtitle1" color="primary">₪{item.price}</Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </MenuItem>
                ))}
              </MenuCard>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <MenuCard elevation={3}>
                <Typography variant="h4" gutterBottom color="primary">
                  קינוחים
                </Typography>
                {menuItems.desserts.map((item, index) => (
                  <MenuItem key={index}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography variant="subtitle1" color="primary">₪{item.price}</Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </MenuItem>
                ))}
              </MenuCard>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </MenuSection>
  );
};

export default Menu;
