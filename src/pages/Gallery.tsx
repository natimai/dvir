import { useState } from 'react';
import { Container, Typography, Box, Modal, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Section = styled.section`
  padding: 80px 0;
  background: linear-gradient(165deg, #f8fafc 0%, #ffffff 100%);
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  padding: 24px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
    padding: 16px;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  cursor: pointer;
  aspect-ratio: 1;

  &:hover {
    .image-overlay {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(30, 58, 138, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(2px);
`;

const ModalContent = styled(Box)`
  position: relative;
  width: 90vw;
  max-width: 1200px;
  max-height: 90vh;
  margin: auto;
  outline: none;
`;

const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

const NavigationButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8) !important;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.9) !important;
  }
`;

const CloseButton = styled(IconButton)`
  position: absolute;
  top: -40px;
  right: 0;
  color: white !important;
`;

// רשימת התמונות בגלריה
const galleryImages = [
  { src: 'gallery/orenk-140 Large.jpeg', alt: 'דביר דלויה שר בהופעה חיה עם מיקרופון, מלא באנרגיה ותשוקה למוזיקה' },
  { src: 'gallery/orenk-139 Large.jpeg', alt: 'דביר דלויה מופיע באירוע משפחתי, מלווה בכלי נגינה מסורתיים' },
  { src: 'gallery/orenk-134 Large.jpeg', alt: 'דביר דלויה בפגישת היכרות עם לקוחות, מסביר על שירותיו בחיוך חם' },
  { src: 'gallery/orenk-98 Large.jpeg', alt: 'דביר דלויה מלמד נער בר מצווה, מדריך אותו בקריאה בתורה' },
  { src: 'gallery/orenk-97 Large.jpeg', alt: 'דביר דלויה בחזרה לקראת אירוע, עובד על בחירת רפרטואר מוזיקלי' },
  { src: 'gallery/orenk-85 Large.jpeg', alt: 'דביר דלויה בחזרה אחרונה לפני אירוע, מתרגל עם הצוות המוזיקלי' },
  { src: 'gallery/orenk-84 Large.jpeg', alt: 'דביר דלויה מופיע בחתונה, שר פיוטים מסורתיים בליווי תזמורת' },
  { src: 'gallery/orenk-78 Large.jpeg', alt: 'דביר דלויה בביצוע מרגש באירוע משפחתי, הקהל מתרגש ומשתתף' },
  { src: 'gallery/orenk-44 Large.jpeg', alt: 'דביר דלויה בהופעה בבית כנסת, מבצע תפילות וניגונים מסורתיים' },
  { src: 'gallery/orenk-38 Large.jpeg', alt: 'דביר דלויה בשמחת חתן וכלה, מלווה את החופה בשירה מסורתית' },
  { src: 'gallery/orenk-37 Large.jpeg', alt: 'דביר דלויה בהופעה קהילתית, מחבר בין הקהל דרך המוזיקה' },
  { src: 'gallery/IMG-20231122-WA0015 Large.jpeg', alt: 'דביר דלויה בחגיגת בר מצווה, מלווה את הנער בקריאה בתורה' },
  { src: 'gallery/IMG-20231122-WA0014 Large.jpeg', alt: 'דביר דלויה בשיעור פרטי, מלמד טעמי המקרא' },
  { src: 'gallery/IMG-20231122-WA0013 Large.jpeg', alt: 'דביר דלויה באירוע משפחתי, יוצר אווירה שמחה עם שירה וניגונים' },
  { src: 'gallery/IMG-20231122-WA0012 Large.jpeg', alt: 'דביר דלויה בהופעה מיוחדת, משלב מוזיקה מסורתית עם עיבודים מודרניים' },
  { src: 'gallery/IMG-20231122-WA0011 Large.jpeg', alt: 'דביר דלויה בחאפלה משפחתית, מבצע שירים מסורתיים בסגנון מזרחי' },
  { src: 'gallery/IMG-20231122-WA0010 Large.jpeg', alt: 'דביר דלויה בשמחת חתן, מלווה את הריקודים בשירה מסורתית' },
  { src: 'gallery/IMG-20231122-WA0009 Large.jpeg', alt: 'דביר דלויה בהופעה באירוע קהילתי, מחבר בין המסורת למודרני' },
  { src: 'gallery/IMG-20231122-WA0008 Large.jpeg', alt: 'דביר דלויה בחגיגת בת מצווה, יוצר אווירה משפחתית וחמה' },
  { src: 'gallery/IMG-20231122-WA0007 Large.jpeg', alt: 'דביר דלויה בהופעה מרגשת, מבצע פיוטים בסגנון ייחודי' },
  { src: 'gallery/IMG-20231122-WA0006 Large.jpeg', alt: 'דביר דלויה בשמחת משפחה, מלווה את האירוע בשירה מסורתית' },
  { src: 'gallery/IMG-20231122-WA0005 Large.jpeg', alt: 'דביר דלויה בהופעה חיה, משלב בין מסורת למודרני בביצועיו' },
  { src: 'gallery/IMG-20230719-WA0255 Large.jpeg', alt: 'דביר דלויה באירוע קהילתי, מחבר בין הדורות דרך המוזיקה' },
  { src: 'gallery/IMG-20230719-WA0253 Large.jpeg', alt: 'דביר דלויה בהופעה מיוחדת, יוצר חוויה מוזיקלית בלתי נשכחת' }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      if (newIndex < 0) return galleryImages.length - 1;
      return newIndex;
    });
    setSelectedImage(galleryImages[currentIndex - 1]?.src || galleryImages[galleryImages.length - 1]?.src);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex >= galleryImages.length) return 0;
      return newIndex;
    });
    setSelectedImage(galleryImages[currentIndex + 1]?.src || galleryImages[0]?.src);
  };

  return (
    <Section>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1e3a8a 30%, #3b82f6 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            גלריית תמונות
          </Typography>
          <Typography 
            variant="h5" 
            align="center" 
            color="textSecondary" 
            paragraph
            sx={{ mb: 6 }}
          >
            רגעים מיוחדים מאירועים ושמחות
          </Typography>

          <GalleryGrid>
            {galleryImages.map((image, index) => (
              <ImageContainer
                key={image.src}
                onClick={() => handleImageClick(image.src, index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Image src={image.src} alt={image.alt} loading="lazy" />
                <ImageOverlay className="image-overlay">
                  <Typography 
                    variant="body1" 
                    color="white"
                    sx={{ 
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                      fontWeight: 500
                    }}
                  >
                    לחץ להגדלה
                  </Typography>
                </ImageOverlay>
              </ImageContainer>
            ))}
          </GalleryGrid>
        </motion.div>
      </Container>

      <Modal
        open={!!selectedImage}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'rgba(0, 0, 0, 0.9)'
        }}
      >
        <AnimatePresence mode="wait">
          <ModalContent>
            <CloseButton onClick={handleClose}>
              <CloseIcon />
            </CloseButton>
            
            <NavigationButton
              onClick={handlePrevious}
              sx={{ left: { xs: 8, sm: -56 } }}
            >
              <NavigateBeforeIcon />
            </NavigationButton>

            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {selectedImage && (
                <ModalImage
                  src={selectedImage}
                  alt={galleryImages.find(img => img.src === selectedImage)?.alt || 'תמונה מוגדלת'}
                  loading="lazy"
                />
              )}
            </motion.div>

            <NavigationButton
              onClick={handleNext}
              sx={{ right: { xs: 8, sm: -56 } }}
            >
              <NavigateNextIcon />
            </NavigationButton>
          </ModalContent>
        </AnimatePresence>
      </Modal>
    </Section>
  );
};

export default Gallery; 