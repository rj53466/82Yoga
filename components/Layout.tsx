import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, MapPin, Phone, Mail, MessageCircle, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_NAME, CONTACT_INFO, SUB_TAGLINE, WHATSAPP_MESSAGE, IMAGES } from '../constants';
import Button from './Button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  // Handle Scroll for Back to Top Button
  useEffect(() => {
    const handleScroll = () => {
      // Show button when user is near the bottom/footer
      // We define "near footer" as being within 800px of the document bottom
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (documentHeight - scrollPosition < 800) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    closeMenu();

    const scrollToElement = () => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      // Allow time for the Home component to mount
      setTimeout(scrollToElement, 100);
    } else {
      scrollToElement();
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-light">
      
      {/* 
         Navigation Bar Design:
         - Solid Light Teal Green Background (Teal 700 - #0f766e)
         - Brand Name: Golden Mustard Metallic Gold (#d4af37)
      */}
      <header className="fixed w-full z-50 transition-all duration-300 shadow-md lg:shadow-lg bg-[#0f766e]">
        <div className="container mx-auto px-4 py-2 lg:py-0 flex justify-between items-center h-[70px] lg:h-[90px]">
          
          {/* Logo Section */}
          <a href="/" onClick={(e) => handleScroll(e, 'home')} className="flex items-center gap-3 group relative z-50">
            {/* Logo Image */}
            <div className="rounded-full border border-[#d4af37]/50 p-[2px] shadow-md group-hover:shadow-lg transition-shadow duration-300 bg-white/10">
              <div className="rounded-full bg-white p-[2px]">
                <img 
                  src={IMAGES.logo} 
                  alt="Blissful Aura Logo" 
                  className="w-10 h-10 md:w-14 md:h-14 object-contain rounded-full transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </div>
            
            {/* Brand Text - Golden Mustard Metallic Gold */}
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-serif font-bold leading-none tracking-tight text-[#d4af37]">
                Blissful Aura
              </h1>
              <span className="text-xs md:text-sm font-bold tracking-[0.15em] uppercase mt-0.5 text-[#d4af37]/90">
                Yoga Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav - White Text to contrast with Teal Background */}
          <nav className="hidden lg:flex items-center gap-6 ml-auto pl-12">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={`#${link.id}`}
                onClick={(e) => handleScroll(e, link.id)}
                onMouseEnter={() => setHoveredTab(link.id)}
                onMouseLeave={() => setHoveredTab(null)}
                className="relative py-2 text-sm uppercase tracking-widest transition-colors text-white hover:text-[#d4af37] cursor-pointer font-medium group"
              >
                <span className="relative z-10">{link.name}</span>
                {/* Underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            {/* Book Now Button */}
            <a href="#book" onClick={(e) => handleScroll(e, 'book')} className="ml-4">
              <Button 
                variant="secondary" 
                className="px-6 py-2.5 text-sm shadow-lg hover:shadow-xl bg-[#d4af37] text-white border-none hover:bg-[#b5952f]"
              >
                Book Now
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Toggle - Gold color */}
          <button 
            className="lg:hidden text-[#d4af37] p-2 relative z-50 active:scale-90 transition-transform hover:bg-white/10 rounded-full" 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-7 h-7 text-white" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[70px] bg-white/98 backdrop-blur-xl z-40 flex flex-col p-6 lg:hidden overflow-y-auto border-t border-gray-100"
          >
            <div className="flex flex-col gap-2 mt-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={`#${link.id}`}
                  className="text-2xl font-serif font-medium text-brand-dark py-4 border-b border-gray-100 flex items-center justify-between group"
                  onClick={(e) => handleScroll(e, link.id)}
                >
                  {link.name}
                  <span className="text-brand-green transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">→</span>
                </a>
              ))}
            </div>
            
            <div className="mt-8 space-y-4">
              <a href="#book" onClick={(e) => handleScroll(e, 'book')} className="block">
                <Button fullWidth className="justify-center py-4 text-lg shadow-brand-green/20 bg-[#d4af37] hover:bg-[#b5952f]">Book Consultation</Button>
              </a>
              
              <div className="flex justify-center gap-6 mt-8 pt-8 border-t border-gray-100">
                  <a 
                    href={CONTACT_INFO.instagram}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-brand-green transition-colors"
                  >
                    <Instagram className="w-8 h-8"/>
                  </a>
                  <a 
                    href={CONTACT_INFO.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-brand-green transition-colors"
                  >
                    <Facebook className="w-8 h-8"/>
                  </a>
                  {/* Fixed Call Icon to trigger Phone Call */}
                  <a 
                    href={`tel:${CONTACT_INFO.phone}`} 
                    className="text-gray-400 hover:text-brand-green transition-colors"
                  >
                    <Phone className="w-8 h-8"/>
                  </a>
                  {/* Added separate WhatsApp option for clarity */}
                   <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-green transition-colors"
                  >
                    <MessageCircle className="w-8 h-8"/>
                  </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - Added padding top to account for fixed header */}
      <main className="flex-grow pt-[70px] lg:pt-[90px]">
        {children}
      </main>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 bg-brand-gold text-white p-3 rounded-full shadow-lg hover:bg-brand-dark hover:shadow-xl transition-all duration-300 active:scale-95"
            aria-label="Back to Top"
            title="Back to Top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer - bg-brand-dark (Teal Green) */}
      <footer className="bg-brand-dark text-white pt-16 pb-8 border-t-4 border-brand-gold">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              {/* Logo with Gradient and White Border (Footer) */}
              <div className="rounded-full bg-gradient-to-br from-brand-gold via-yellow-500 to-brand-green p-[2px] shadow-lg">
                <div className="rounded-full bg-white p-[2px]">
                  <img src={IMAGES.logo} alt="Blissful Aura Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full" />
                </div>
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-[#d4af37]">{BRAND_NAME}</span>
            </div>
            <p className="text-brand-light/80 mb-6 leading-relaxed text-sm max-w-sm mx-auto md:mx-0">
              {SUB_TAGLINE}. Guided by {CONTACT_INFO.address.includes('Bangalore') ? 'Neetu K Verma' : 'experts'} to blend ancient wisdom with modern science for a complete transformation.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a 
                href={CONTACT_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-2.5 rounded-full hover:bg-brand-gold hover:text-white transition-all hover:scale-110" 
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={CONTACT_INFO.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-2.5 rounded-full hover:bg-brand-gold hover:text-white transition-all hover:scale-110" 
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              {/* Added WhatsApp Button */}
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 p-2.5 rounded-full hover:bg-brand-gold hover:text-white transition-all hover:scale-110" 
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-brand-accent mb-6 font-serif">Quick Links</h3>
            <ul className="space-y-3 text-sm inline-block md:block">
              <li><a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-gray-300 hover:text-brand-gold transition-colors flex items-center justify-center md:justify-start gap-2">About Neetu K Verma</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, 'services')} className="text-gray-300 hover:text-brand-gold transition-colors flex items-center justify-center md:justify-start gap-2">Our Services</a></li>
              <li><a href="#book" onClick={(e) => handleScroll(e, 'book')} className="text-gray-300 hover:text-brand-gold transition-colors flex items-center justify-center md:justify-start gap-2">Book a Class</a></li>
              <li><Link to="/legal" className="text-gray-300 hover:text-brand-gold transition-colors flex items-center justify-center md:justify-start gap-2">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-brand-accent mb-6 font-serif">Contact Us</h3>
            <ul className="space-y-4 text-sm inline-block md:block text-left">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5 group-hover:text-white transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-brand-gold group-hover:text-white transition-colors" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-300 group-hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-brand-gold group-hover:text-white transition-colors" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-300 group-hover:text-white transition-colors">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-4 pt-8 border-t border-white/10 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;