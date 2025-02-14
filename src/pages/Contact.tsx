import { useState, ChangeEvent } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  CircularProgress,
  SelectChangeEvent
} from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const StyledPaper = styled(Paper)`
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactInfo = styled.div`
  background-color: #1e3a8a;
  color: white;
  padding: 32px;
  border-radius: 8px;
  height: 100%;
`;

interface FormData {
  name: string;
  phone: string;
  email: string;
  eventDate: string;
  eventType: string;
  package: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    eventType: '',
    package: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // כאן יהיה הקוד לשליחת הטופס לשרת
      await new Promise(resolve => setTimeout(resolve, 1500)); // סימולציה של שליחה
      setSubmitStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventDate: '',
        eventType: '',
        package: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" gutterBottom>
              צור קשר
            </Typography>
            <Typography paragraph color="textSecondary">
              נשמח לשמוע מכם ולהתאים עבורכם את החבילה המושלמת לאירוע שלכם
            </Typography>
            
            <StyledPaper>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="שם מלא"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="טלפון"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="אימייל"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="תאריך האירוע"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleChange}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel>סוג האירוע</InputLabel>
                      <Select
                        name="eventType"
                        value={formData.eventType}
                        label="סוג האירוע"
                        onChange={handleChange}
                      >
                        <MenuItem value="wedding">חתונה</MenuItem>
                        <MenuItem value="barMitzva">בר מצווה</MenuItem>
                        <MenuItem value="batMitzva">בת מצווה</MenuItem>
                        <MenuItem value="henna">חינה</MenuItem>
                        <MenuItem value="shabbat">שבת חתן</MenuItem>
                        <MenuItem value="concert">ערב פיוטים</MenuItem>
                        <MenuItem value="other">אחר</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>חבילה מועדפת</InputLabel>
                      <Select
                        name="package"
                        value={formData.package}
                        label="חבילה מועדפת"
                        onChange={handleChange}
                      >
                        <MenuItem value="basic">חבילה בסיסית</MenuItem>
                        <MenuItem value="extended">חבילה מורחבת</MenuItem>
                        <MenuItem value="premium">חבילת פרימיום</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="הודעה"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="ספרו לנו על האירוע שלכם ועל הבקשות המיוחדות שלכם"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? <CircularProgress size={24} /> : 'שליחה'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
              
              {submitStatus && (
                <Box mt={2}>
                  <Alert severity={submitStatus}>
                    {submitStatus === 'success'
                      ? 'הטופס נשלח בהצלחה! ניצור איתך קשר בהקדם.'
                      : 'אירעה שגיאה בשליחת הטופס. אנא נסה שוב.'}
                  </Alert>
                </Box>
              )}
            </StyledPaper>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactInfo>
              <Typography variant="h4" gutterBottom>
                פרטי התקשרות
              </Typography>
              <Box mt={4}>
                <Typography variant="h6" gutterBottom>
                  טלפון
                </Typography>
                <Typography paragraph>
                  058-627-6261
                </Typography>
                
                <Typography variant="h6" gutterBottom>
                  אימייל
                </Typography>
                <Typography paragraph>
                  dvir@example.com
                </Typography>
                
                <Typography variant="h6" gutterBottom>
                  שעות פעילות
                </Typography>
                <Typography paragraph>
                  ימים א'-ה': 09:00-20:00
                  <br />
                  יום ו': 09:00-13:00
                </Typography>
                
                <Typography variant="h6" gutterBottom>
                  אזורי פעילות
                </Typography>
                <Typography>
                  מופיע בכל רחבי הארץ
                  <br />
                  תוספת נסיעות לאזורים מרוחקים
                </Typography>
              </Box>
            </ContactInfo>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact; 