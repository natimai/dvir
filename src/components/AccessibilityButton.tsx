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
  Zoom,
  Divider
} from '@mui/material';
import styled from '@emotion/styled';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ContrastIcon from '@mui/icons-material/Contrast';
import AnimationIcon from '@mui/icons-material/Animation';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import ImageIcon from '@mui/icons-material/Image';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import MouseIcon from '@mui/icons-material/Mouse';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import LinkIcon from '@mui/icons-material/Link';
import TitleIcon from '@mui/icons-material/Title';
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
  const [highlightLinks, setHighlightLinks] = useState<boolean>(false);
  const [highlightTitles, setHighlightTitles] = useState<boolean>(false);
  const [lineSpacing, setLineSpacing] = useState<number>(1.5);
  const [letterSpacing, setLetterSpacing] = useState<number>(0);
  const [readableFont, setReadableFont] = useState<boolean>(false);
  const [showImageDescriptions, setShowImageDescriptions] = useState<boolean>(false);
  const [stopAnimations, setStopAnimations] = useState<boolean>(false);
  const [monochrome, setMonochrome] = useState<boolean>(false);
  const [biggerCursor, setBiggerCursor] = useState<boolean>(false);
  const [focusHighlight, setFocusHighlight] = useState<boolean>(false);

  const handleClick = (_event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(_event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFontSizeChange = (_event: Event, newValue: number | number[]) => {
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

  const handleHighlightLinksChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHighlightLinks(event.target.checked);
    if (event.target.checked) {
      document.body.classList.add('highlight-links');
    } else {
      document.body.classList.remove('highlight-links');
    }
  };

  const handleHighlightTitlesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHighlightTitles(event.target.checked);
    if (event.target.checked) {
      document.body.classList.add('highlight-titles');
    } else {
      document.body.classList.remove('highlight-titles');
    }
  };

  const handleLineSpacingChange = (_event: Event, newValue: number | number[]) => {
    const spacing = newValue as number;
    setLineSpacing(spacing);
    document.body.style.lineHeight = `${spacing}`;
  };

  const handleLetterSpacingChange = (_event: Event, newValue: number | number[]) => {
    const spacing = newValue as number;
    setLetterSpacing(spacing);
    document.body.style.letterSpacing = `${spacing}px`;
  };

  const handleReadableFontChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReadableFont(event.target.checked);
    if (event.target.checked) {
      document.body.classList.add('readable-font');
    } else {
      document.body.classList.remove('readable-font');
    }
  };

  const handleImageDescriptionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowImageDescriptions(event.target.checked);
    if (event.target.checked) {
      document.body.classList.add('show-image-descriptions');
    } else {
      document.body.classList.remove('show-image-descriptions');
    }
  };

  const handleStopAnimationsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStopAnimations(event.target.checked);
    if (event.target.checked) {
      document.body.classList.add('stop-animations');
    } else {
      document.body.classList.remove('stop-animations');
    }
  };

  const handleMonochromeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonochrome(event.target.checked);
    if (event.target.checked) {
      document.body.classList.add('monochrome');
    } else {
      document.body.classList.remove('monochrome');
    }
  };

  const handleBiggerCursorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBiggerCursor(event.target.checked);
    if (event.target.checked) {
      document.body.classList.add('bigger-cursor');
    } else {
      document.body.classList.remove('bigger-cursor');
    }
  };

  const handleFocusHighlightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFocusHighlight(event.target.checked);
    if (event.target.checked) {
      document.body.classList.add('focus-highlight');
    } else {
      document.body.classList.remove('focus-highlight');
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

            <Divider />

            <ListItem>
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText 
                primary="הדגשת קישורים"
                secondary="הדגשת כל הקישורים באתר"
              />
              <Switch
                edge="end"
                checked={highlightLinks}
                onChange={handleHighlightLinksChange}
                inputProps={{
                  'aria-label': 'הפעל הדגשת קישורים'
                }}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <TitleIcon />
              </ListItemIcon>
              <ListItemText 
                primary="הדגשת כותרות"
                secondary="הדגשת כל הכותרות באתר"
              />
              <Switch
                edge="end"
                checked={highlightTitles}
                onChange={handleHighlightTitlesChange}
                inputProps={{
                  'aria-label': 'הפעל הדגשת כותרות'
                }}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <FormatLineSpacingIcon />
              </ListItemIcon>
              <ListItemText 
                primary="מרווח בין שורות"
                secondary={
                  <Slider
                    value={lineSpacing}
                    onChange={handleLineSpacingChange}
                    min={1}
                    max={3}
                    step={0.1}
                    aria-label="מרווח בין שורות"
                    valueLabelDisplay="auto"
                  />
                }
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <TextFormatIcon />
              </ListItemIcon>
              <ListItemText 
                primary="מרווח בין אותיות"
                secondary={
                  <Slider
                    value={letterSpacing}
                    onChange={handleLetterSpacingChange}
                    min={0}
                    max={5}
                    step={0.5}
                    aria-label="מרווח בין אותיות"
                    valueLabelDisplay="auto"
                    valueLabelFormat={value => `${value}px`}
                  />
                }
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <FontDownloadIcon />
              </ListItemIcon>
              <ListItemText 
                primary="גופן קריא"
                secondary="שימוש בגופן נגיש יותר"
              />
              <Switch
                edge="end"
                checked={readableFont}
                onChange={handleReadableFontChange}
                inputProps={{
                  'aria-label': 'הפעל גופן קריא'
                }}
              />
            </ListItem>

            <Divider />

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
                <MonochromePhotosIcon />
              </ListItemIcon>
              <ListItemText 
                primary="מצב מונוכרום"
                secondary="המרת כל הצבעים לשחור-לבן"
              />
              <Switch
                edge="end"
                checked={monochrome}
                onChange={handleMonochromeChange}
                inputProps={{
                  'aria-label': 'הפעל מצב מונוכרום'
                }}
              />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemIcon>
                <ImageIcon />
              </ListItemIcon>
              <ListItemText 
                primary="תיאורי תמונות"
                secondary="הצגת תיאורים לתמונות"
              />
              <Switch
                edge="end"
                checked={showImageDescriptions}
                onChange={handleImageDescriptionsChange}
                inputProps={{
                  'aria-label': 'הפעל תיאורי תמונות'
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

            <ListItem>
              <ListItemIcon>
                <PauseCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText 
                primary="עצירת תנועה"
                secondary="עצירת כל האלמנטים הנעים"
              />
              <Switch
                edge="end"
                checked={stopAnimations}
                onChange={handleStopAnimationsChange}
                inputProps={{
                  'aria-label': 'עצור תנועה'
                }}
              />
            </ListItem>

            <Divider />

            <ListItem>
              <ListItemIcon>
                <MouseIcon />
              </ListItemIcon>
              <ListItemText 
                primary="סמן מוגדל"
                secondary="הגדלת סמן העכבר"
              />
              <Switch
                edge="end"
                checked={biggerCursor}
                onChange={handleBiggerCursorChange}
                inputProps={{
                  'aria-label': 'הפעל סמן מוגדל'
                }}
              />
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <CenterFocusStrongIcon />
              </ListItemIcon>
              <ListItemText 
                primary="הדגשת מיקוד"
                secondary="הדגשת האלמנט הנבחר"
              />
              <Switch
                edge="end"
                checked={focusHighlight}
                onChange={handleFocusHighlightChange}
                inputProps={{
                  'aria-label': 'הפעל הדגשת מיקוד'
                }}
              />
            </ListItem>
          </List>

          <AccessibilityLink to="/accessibility" onClick={handleClose}>
            הצהרת נגישות מלאה
          </AccessibilityLink>
          
          <AccessibilityLink 
            to="/cookies" 
            onClick={(e) => {
              e.preventDefault();
              handleClose();
              document.getElementById('cookie-manager')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            עדכן הגדרות קוקיז
          </AccessibilityLink>
        </AccessibilityPanel>
      </Popover>
    </>
  );
}; 