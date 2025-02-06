import { useState } from 'react';
import { 
  Box, 
  IconButton, 
  Popover, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Typography,
  Slider,
  Switch,
  Tooltip,
  Zoom
} from '@mui/material';
import styled from '@emotion/styled';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ContrastIcon from '@mui/icons-material/Contrast';
import AnimationIcon from '@mui/icons-material/Animation';
import { Link } from 'react-router-dom';

const AccessibilityFab = styled(IconButton)`
  position: fixed;
  left: 20px;
  bottom: 90px;
  z-index: 1000;
  background-color: #1e3a8a;
  padding: 15px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1e40af;
    transform: scale(1.1);
  }

  svg {
    color: white;
    font-size: 28px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

const AccessibilityPanel = styled(Box)`
  padding: 16px;
  min-width: 280px;
  max-width: 320px;
`;

const AccessibilityLink = styled(Link)`
  color: #1e3a8a;
  text-decoration: none;
  display: block;
  padding: 8px;
  margin-top: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(30, 58, 138, 0.1);
  }
`;

export const AccessibilityButton = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [fontSize, setFontSize] = useState<number>(100);
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [reduceMotion, setReduceMotion] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFontSizeChange = (event: Event, newValue: number | number[]) => {
    const size = newValue as number;
    setFontSize(size);
    document.documentElement.style.fontSize = `${size}%`;
  };

  const handleContrastChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHighContrast(event.target.checked);
    if (event.target.checked) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  };

  const handleMotionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReduceMotion(event.target.checked);
    if (event.target.checked) {
      document.body.classList.add('reduce-motion');
    } else {
      document.body.classList.remove('reduce-motion');
    }
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Tooltip 
        title="הגדרות נגישות"
        placement="right"
        TransitionComponent={Zoom}
      >
        <AccessibilityFab
          onClick={handleClick}
          aria-label="פתח הגדרות נגישות"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <AccessibilityNewIcon />
        </AccessibilityFab>
      </Tooltip>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <AccessibilityPanel>
          <Typography variant="h6" gutterBottom>
            הגדרות נגישות
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <TextFieldsIcon />
              </ListItemIcon>
              <ListItemText 
                primary="גודל טקסט"
                secondary={
                  <Slider
                    value={fontSize}
                    onChange={handleFontSizeChange}
                    min={80}
                    max={200}
                    step={10}
                    aria-label="גודל טקסט"
                    valueLabelDisplay="auto"
                    valueLabelFormat={value => `${value}%`}
                  />
                }
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <ContrastIcon />
              </ListItemIcon>
              <ListItemText 
                primary="ניגודיות גבוהה"
                secondary="שיפור הניגודיות בין הטקסט לרקע"
              />
              <Switch
                edge="end"
                checked={highContrast}
                onChange={handleContrastChange}
                inputProps={{
                  'aria-label': 'הפעל מצב ניגודיות גבוהה'
                }}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <AnimationIcon />
              </ListItemIcon>
              <ListItemText 
                primary="הפחתת אנימציות"
                secondary="ביטול אנימציות ואפקטים"
              />
              <Switch
                edge="end"
                checked={reduceMotion}
                onChange={handleMotionChange}
                inputProps={{
                  'aria-label': 'הפעל מצב הפחתת אנימציות'
                }}
              />
            </ListItem>
          </List>

          <AccessibilityLink to="/accessibility" onClick={handleClose}>
            הצהרת נגישות מלאה
          </AccessibilityLink>
        </AccessibilityPanel>
      </Popover>
    </>
  );
}; 