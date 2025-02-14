import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LinearProgress } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { AccessibilityButton } from './AccessibilityButton';

// Lazy load pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Contact = lazy(() => import('../pages/Contact'));
const FAQ = lazy(() => import('../pages/FAQ'));
const Accessibility = lazy(() => import('../pages/Accessibility'));

// Loading component
const PageLoader = () => (
  <LinearProgress 
    sx={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999
    }} 
  />
);

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <a href="#main-content" className="skip-link">
        דלג לתוכן הראשי
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/accessibility" element={<Accessibility />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <AccessibilityButton />
    </div>
  );
};

export default Layout; 