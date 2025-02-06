import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { AccessibilityButton } from './AccessibilityButton';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import FAQ from '../pages/FAQ';
import Accessibility from '../pages/Accessibility';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <a href="#main-content" className="skip-link">
        דלג לתוכן הראשי
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accessibility" element={<Accessibility />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <AccessibilityButton />
    </div>
  );
};

export default Layout; 