import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, ReactNode } from 'react';
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
const Terms = lazy(() => import('../pages/Terms'));
const Privacy = lazy(() => import('../pages/Privacy'));
const Cookies = lazy(() => import('../pages/Cookies'));
const RefundPolicy = lazy(() => import('../pages/RefundPolicy'));
const Sitemap = lazy(() => import('../pages/Sitemap'));
const BarMitzvah = lazy(() => import('../pages/services/BarMitzvah'));
const SpecialEvents = lazy(() => import('../pages/services/SpecialEvents'));
const Teaching = lazy(() => import('../pages/services/Teaching'));

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
              <Route path="/services/bar-mitzvah" element={
                <PageTransition>
                  <BarMitzvah />
                </PageTransition>
              } />
              <Route path="/services/special-events" element={
                <PageTransition>
                  <SpecialEvents />
                </PageTransition>
              } />
              <Route path="/services/teaching" element={
                <PageTransition>
                  <Teaching />
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
              <Route path="/terms" element={
                <PageTransition>
                  <Terms />
                </PageTransition>
              } />
              <Route path="/privacy" element={
                <PageTransition>
                  <Privacy />
                </PageTransition>
              } />
              <Route path="/cookies" element={
                <PageTransition>
                  <Cookies />
                </PageTransition>
              } />
              <Route path="/refund-policy" element={
                <PageTransition>
                  <RefundPolicy />
                </PageTransition>
              } />
              <Route path="/sitemap" element={
                <PageTransition>
                  <Sitemap />
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