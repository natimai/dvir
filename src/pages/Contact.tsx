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
import DOMPurify from 'dompurify';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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

const ContactSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  position: relative;
  overflow: hidden;
`;

const GlowingOrb = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%);
  filter: blur(40px);
`;

const ContentWrapper = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 48px;
  text-align: center;
  color: white;
  max-width: 600px;
  width: 90%;
  position: relative;
  z-index: 1;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;

const WhatsAppButton = styled(Button)`
  background: #25D366;
  color: white;
  padding: 16px 32px;
  font-size: 1.2rem;
  border-radius: 50px;
  margin-top: 32px;
  text-transform: none;
  transition: all 0.3s ease;

  &:hover {
    background: #128C7E;
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .MuiSvgIcon-root {
    font-size: 1.5rem;
    margin-left: 8px;
  }
`;

const InfoItem = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  color: rgba(255, 255, 255, 0.9);

  .MuiSvgIcon-root {
    margin-left: 8px;
    opacity: 0.8;
  }
`;

const FloatingEmoji = styled(motion.span)`
  position: absolute;
  font-size: 2rem;
  user-select: none;
  pointer-events: none;
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
    setSubmitStatus(null);
    
    // Sanitize input
    const sanitizedData: FormData = {
      name: DOMPurify.sanitize(formData.name),
      email: DOMPurify.sanitize(formData.email),
      phone: DOMPurify.sanitize(formData.phone),
      eventDate: DOMPurify.sanitize(formData.eventDate),
      eventType: DOMPurify.sanitize(formData.eventType),
      package: DOMPurify.sanitize(formData.package),
      message: DOMPurify.sanitize(formData.message)
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
        },
        body: JSON.stringify(sanitizedData),
        credentials: 'same-origin'
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        eventType: '',
        package: '',
        message: ''
      });

      setSubmitStatus('success');
      
      // שלח אירוע Google Tag Manager
      if (typeof window !== 'undefined' && (window as any).sendGTMEvent) {
        (window as any).sendGTMEvent('form_submit', {
          form_name: 'contact_form',
          event_type: sanitizedData.eventType,
          package: sanitizedData.package,
          user_email: sanitizedData.email
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      
      // שלח אירוע שגיאה Google Tag Manager
      if (typeof window !== 'undefined' && (window as any).sendGTMEvent) {
        (window as any).sendGTMEvent('form_error', {
          form_name: 'contact_form',
          error_message: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '972586276261';
    const message = 'היי דביר, אשמח לשמוע פרטים על שירותי הפייטנות והחזנות';
    
    // שלח אירוע Google Tag Manager
    if (typeof window !== 'undefined' && (window as any).sendGTMEvent) {
      (window as any).sendGTMEvent('whatsapp_click', {
        phone_number: phoneNumber,
        source: 'contact_page'
      });
    }
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const emojis = ['🎵', '🎤', '🎼', '✨', '🎹'];
  
  return (
    <ContactSection>
      {/* אנימציית רקע */}
      <GlowingOrb
        initial={{ x: -200, y: -200 }}
        animate={{ 
          x: [0, 200, 0], 
          y: [0, 200, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* אימוג'ים מרחפים */}
      {emojis.map((emoji, index) => (
        <FloatingEmoji
          key={index}
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{ 
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: index * 2
          }}
        >
          {emoji}
        </FloatingEmoji>
      ))}

      <ContentWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" gutterBottom sx={{ 
            fontWeight: 700,
            background: 'linear-gradient(45deg, #ffffff 30%, #e0e7ff 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            בואו נדבר
          </Typography>
        </motion.div>

        <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
          נשמח להפוך את האירוע שלכם לחוויה מוזיקלית בלתי נשכחת
        </Typography>

        <InfoItem>
          <AccessTimeIcon />
          <Typography>
            ימים א'-ה': 09:00-20:00 | יום ו': 09:00-13:00
          </Typography>
        </InfoItem>

        <InfoItem>
          <LocationOnIcon />
          <Typography>
            מופיע בכל רחבי הארץ
          </Typography>
        </InfoItem>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <WhatsAppButton
            variant="contained"
            onClick={handleWhatsAppClick}
            endIcon={<WhatsAppIcon />}
          >
            דברו איתי בוואטסאפ
          </WhatsAppButton>
        </motion.div>
      </ContentWrapper>
    </ContactSection>
  );
};

export default Contact; 