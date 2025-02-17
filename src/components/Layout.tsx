import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LinearProgress } from '@mui/material';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { AccessibilityButton } from './AccessibilityButton';
import { PageTransition } from './PageTransition';

// Lazy load pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Contact = lazy(() => import('../pages/Contact'));
const FAQ = lazy(() => import('../pages/FAQ'));
const Accessibility = lazy(() => import('../pages/Accessibility'));
const Gallery = lazy(() => import('../pages/Gallery'));

// Loading component
const PageLoader = () => (
  <LinearProgress 
    sx={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      height: '3px',
      '& .MuiLinearProgress-bar': {
        background: 'linear-gradient(90deg, #1e3a8a, #3b82f6)',
      }
    }} 
  />
);

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" className="flex-grow relative">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={
                <PageTransition>
                  <Home />
                </PageTransition>
              } />
              <Route path="/about" element={
                <PageTransition>
                  <About />
                </PageTransition>
              } />
              <Route path="/services" element={
                <PageTransition>
                  <Services />
                </PageTransition>
              } />
              <Route path="/faq" element={
                <PageTransition>
                  <FAQ />
                </PageTransition>
              } />
              <Route path="/contact" element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              } />
              <Route path="/accessibility" element={
                <PageTransition>
                  <Accessibility />
                </PageTransition>
              } />
              <Route path="/gallery" element={
                <PageTransition>
                  <Gallery />
                </PageTransition>
              } />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <AccessibilityButton />
    </div>
  );
};

export default Layout; 