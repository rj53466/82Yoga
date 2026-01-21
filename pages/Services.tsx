import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { CheckCircle, Video, Home as HomeIcon } from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id);

  const activeService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

  const handleServiceClick = (id: string) => {
    setActiveTab(id);
    // On mobile/tablet, scrolling to details is helpful
    const detailsElement = document.getElementById('service-details');
    if (detailsElement) {
      // Small offset for header
      const headerOffset = 100;
      const elementPosition = detailsElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToBook = (e: React.MouseEvent) => {
    e.preventDefault();
    const bookSection = document.getElementById('book');
    if (bookSection) {
      const headerOffset = 90;
      const elementPosition = bookSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Bento Grid Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 70, damping: 20 } 
    }
  };

  return (
    <div id="services" className="bg-gray-50 py-16 md:py-20 scroll-mt-16">
      <div className="container mx-auto px-4">
        
        <SectionTitle 
            title="Our Offerings" 
            subtitle="Comprehensive solutions for your wellness journey. Select a service to learn more."
        />

        {/* Service Cards Grid - Bento Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.id} variants={cardVariants}>
              <ServiceCard 
                service={service} 
                onClick={() => handleServiceClick(service.id)}
                isActive={activeTab === service.id}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed View - Smooth Transition */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            id="service-details" 
            className="scroll-mt-24 bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-brand-green"
          >
            <div className="grid md:grid-cols-2">
              
              {/* Content Side */}
              <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center bg-white relative z-20 order-2 md:order-1">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                  className="text-brand-gold font-bold uppercase tracking-wider text-xs md:text-sm mb-2"
                >
                  Detailed Overview
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-serif text-brand-dark mb-6 leading-tight"
                >
                  {activeService.title}
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                  className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed"
                >
                  {activeService.fullDescription}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                  className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-8 bg-brand-light/30 p-5 md:p-6 rounded-xl border border-brand-green/10"
                >
                  <div>
                    <h3 className="font-bold text-brand-dark mb-3 uppercase tracking-wider text-xs border-b border-brand-green/20 pb-2">Key Benefits</h3>
                    <ul className="space-y-3">
                      {activeService.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 sm:mt-0">
                    <h3 className="font-bold text-brand-dark mb-3 uppercase tracking-wider text-xs border-b border-brand-green/20 pb-2">Available Sessions</h3>
                    <div className="flex flex-wrap gap-2">
                      {activeService.items.map((item, idx) => (
                        <span key={idx} className="bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-md text-xs font-medium shadow-sm">
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 pt-2"
                >
                   <a href="#book" onClick={scrollToBook} className="flex-1">
                      <Button fullWidth>Book {activeService.title}</Button>
                   </a>
                   <div className="flex gap-4 items-center justify-center text-gray-500 text-sm bg-gray-50 px-4 py-3 sm:py-0 rounded-lg border border-gray-100">
                      <div className="flex items-center gap-1.5"><Video className="w-4 h-4 text-brand-gold"/> Online</div>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <div className="flex items-center gap-1.5"><HomeIcon className="w-4 h-4 text-brand-gold"/> Offline</div>
                   </div>
                </motion.div>
              </div>

              {/* Image Side */}
              <div className="relative bg-gradient-to-br from-brand-light via-teal-200 to-teal-600 flex items-center justify-center p-8 md:p-12 min-h-[300px] order-1 md:order-2">
                <div className="absolute inset-0 overflow-hidden opacity-30">
                   <div className="absolute top-0 left-0 w-80 h-80 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                   <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-900/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                </div>

                <motion.div 
                   initial={{ scale: 0.8, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   transition={{ type: "spring", duration: 0.8, bounce: 0.3 }}
                   className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 shadow-2xl rounded-full z-10"
                >
                  <div className="absolute inset-0 rounded-full p-[4px] overflow-hidden">
                    {/* Electric Spin */}
                    <div className="absolute inset-[-50%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0d9488_0%,#d97706_50%,#0d9488_100%)] opacity-80" />
                    
                    {/* Inner Image Mask */}
                    <div className="absolute inset-[4px] rounded-full bg-white overflow-hidden">
                      <img 
                        src={activeService.image} 
                        alt={activeService.title} 
                        className="w-full h-full object-cover rounded-full transform hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Services;