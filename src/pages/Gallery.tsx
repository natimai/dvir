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
  'gallery/orenk-140 Large.jpeg',
  'gallery/orenk-139 Large.jpeg',
  'gallery/orenk-134 Large.jpeg',
  'gallery/orenk-98 Large.jpeg',
  'gallery/orenk-97 Large.jpeg',
  'gallery/orenk-85 Large.jpeg',
  'gallery/orenk-84 Large.jpeg',
  'gallery/orenk-78 Large.jpeg',
  'gallery/orenk-44 Large.jpeg',
  'gallery/orenk-38 Large.jpeg',
  'gallery/orenk-37 Large.jpeg',
  'gallery/IMG-20231122-WA0015 Large.jpeg',
  'gallery/IMG-20231122-WA0014 Large.jpeg',
  'gallery/IMG-20231122-WA0013 Large.jpeg',
  'gallery/IMG-20231122-WA0012 Large.jpeg',
  'gallery/IMG-20231122-WA0011 Large.jpeg',
  'gallery/IMG-20231122-WA0010 Large.jpeg',
  'gallery/IMG-20231122-WA0009 Large.jpeg',
  'gallery/IMG-20231122-WA0008 Large.jpeg',
  'gallery/IMG-20231122-WA0007 Large.jpeg',
  'gallery/IMG-20231122-WA0006 Large.jpeg',
  'gallery/IMG-20231122-WA0005 Large.jpeg',
  'gallery/IMG-20230719-WA0255 Large.jpeg',
  'gallery/IMG-20230719-WA0253 Large.jpeg',
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
    setSelectedImage(galleryImages[currentIndex - 1] || galleryImages[galleryImages.length - 1]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex >= galleryImages.length) return 0;
      return newIndex;
    });
    setSelectedImage(galleryImages[currentIndex + 1] || galleryImages[0]);
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
                key={image}
                onClick={() => handleImageClick(image, index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Image src={image} alt={`תמונה ${index + 1}`} loading="lazy" />
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
                  alt="תמונה מוגדלת"
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