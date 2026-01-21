import React from 'react';
import { motion, Variants } from 'framer-motion';

import { SUB_TAGLINE, CONTACT_INFO, FOUNDER_BIO, IMAGES } from '../constants';
import Button from '../components/Button';
import Testimonials from './Testimonials';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Book from './Book';

const Home: React.FC = () => {
  const scrollToId = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <main className="flex flex-col">

      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100vh-60px)] md:min-h-[90vh] flex items-center bg-brand-light overflow-hidden py-12 md:py-0">
        {/* Decorative Shapes */}
        <div aria-hidden="true" className="absolute top-0 right-0 w-2/3 md:w-1/2 h-full bg-brand-green/5 md:bg-brand-green/10 rounded-l-full translate-x-1/3" />
        <div aria-hidden="true" className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-brand-gold/10 rounded-full -translate-x-1/3 translate-y-1/3" />

        {/* Container: Flexbox for centered professional layout */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 relative z-10 max-w-6xl">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center md:text-left md:pr-4 max-w-xl"
          >
            {/* H1: Main Heading - Large, Serif, No Box */}
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-dark mb-4 leading-tight"
            >
               Heal, Transform and Glow
            </motion.h2>

            {/* H2: Sub Heading - Smaller, Green, Italic */}
            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-3xl text-brand-green mb-8 font-medium font-serif italic"
            >
              Holistic Healing for Mind, Body, and Soul.
            </motion.h2>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg mx-auto md:mx-0 font-light"
            >
              Rediscover your inner rhythm through the sacred practice of Yoga. 
              We bridge ancient wisdom with modern wellness to nurture your 
              physical vitality, mental clarity, and spiritual awakening.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a href="#book" onClick={scrollToId('book')} className="w-full sm:w-auto">
                <Button variant="primary" fullWidth className="shadow-brand-green/20">Begin Transformation</Button>
              </a>
              <a href="#services" onClick={scrollToId('services')} className="w-full sm:w-auto">
                <Button variant="outline" fullWidth>Explore Services</Button>
              </a>
            </motion.div>
          </motion.div>

          {/* HERO IMAGE */}
          <div className="relative mt-8 md:mt-0 flex-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Electric Border Container */}
                <div className="relative w-64 h-64 md:w-[450px] md:h-[450px] flex items-center justify-center">
                   {/* Spinning Gradient Border */}
                   <div className="absolute inset-[-4px] rounded-full animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0d9488_0%,#d97706_50%,#0d9488_100%)] opacity-80 blur-[2px]"></div>
                   
                   {/* White Gap/Mask */}
                   <div className="absolute inset-0 bg-white rounded-full"></div>

                   {/* Image */}
                   <div className="absolute inset-[5px] rounded-full overflow-hidden z-10">
                       <img
                         src={IMAGES.hero}
                         alt="Man meditating in lotus position in a serene temple setting"
                         loading="lazy"
                         className="w-full h-full object-cover"
                       />
                   </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <About />

      {/* SERVICES SECTION */}
      <Services />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* BOOK SECTION */}
      <Book />

      {/* CONTACT */}
      <Contact />

    </main>
  );
};

export default Home;