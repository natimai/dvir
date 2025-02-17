import { IconButton, Tooltip, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styled from '@emotion/styled';

const FloatingButton = styled(IconButton)`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  background-color: #25D366;
  padding: 15px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #128C7E;
    transform: scale(1.1);
  }

  svg {
    color: white;
    font-size: 32px;
  }
`;

const WhatsAppButton = () => {
  const phoneNumber = '972586276261'; // מספר הטלפון המעודכן של דביר
  const message = 'היי דביר, אשמח לשמוע פרטים על שירותי הפייטנות והחזנות';
  
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Tooltip 
      title="שלח הודעה בוואטסאפ"
      placement="right"
      TransitionComponent={Zoom}
    >
      <FloatingButton
        onClick={handleClick}
        aria-label="שלח הודעה בוואטסאפ"
      >
        <WhatsAppIcon />
      </FloatingButton>
    </Tooltip>
  );
};

export default WhatsAppButton; 