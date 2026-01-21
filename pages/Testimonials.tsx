import React from 'react';
import { TESTIMONIALS } from '../constants';
import SectionTitle from '../components/SectionTitle';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  // Filter for ratings >= 3 as requested
  const validTestimonials = TESTIMONIALS.filter(t => t.rating >= 3);
  
  // Duplicate the array to ensure smooth infinite scrolling
  // We double the list to create the seamless loop effect
  const marqueeList = [...validTestimonials, ...validTestimonials];

  return (
    <div id="testimonials" className="relative py-16 md:py-24 overflow-hidden bg-brand-light/30">
      
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
        
        {/* Teal Orb */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-brand-green/10 rounded-full blur-[80px]"
        />
        
        {/* Gold Orb */}
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-0 w-[30rem] h-[30rem] bg-brand-gold/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto relative z-10 mb-8 px-4">
        <SectionTitle 
            title="What Our Clients Say" 
            subtitle="Heartfelt stories from our community."
        />
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden mask-linear-gradient">
        {/* 
           The inner div contains the doubled list. 
           Animation moves it from 0% to -50% translateX. 
           The hover class pauses the animation.
        */}
        <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused] py-4 px-4">
            {marqueeList.map((t, index) => (
                <div 
                    key={`${t.id}-${index}`}
                    className="w-[300px] md:w-[400px] flex-shrink-0 bg-white/80 backdrop-blur-sm p-8 rounded-xl relative shadow-sm hover:shadow-xl transition-all duration-300 border border-white/50 group select-none"
                >
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 z-10 opacity-20 group-hover:opacity-100 transition-opacity">
                        <Quote className="w-8 h-8 text-brand-green" />
                    </div>

                    <div className="flex text-yellow-400 mb-4 relative z-10">
                         {[...Array(5)].map((_, i) => (
                           <Star 
                             key={i} 
                             className={`w-5 h-5 ${i < t.rating ? 'fill-current text-yellow-400' : 'text-gray-300'}`} 
                           />
                         ))}
                    </div>
                    
                    <p className="text-gray-600 mb-6 italic leading-relaxed relative z-10 text-sm md:text-base line-clamp-4">
                      "{t.review}"
                    </p>
                    
                    <div className="border-t border-brand-green/10 pt-4 relative z-10 flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-brand-dark">{t.name}</h4>
                          <span className="text-xs font-semibold text-brand-green uppercase tracking-wide">{t.service}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
      
      {/* Gradient Masks for smooth fade out on edges */}
      <div className="absolute top-0 left-0 w-8 md:w-32 h-full bg-gradient-to-r from-brand-light/80 to-transparent pointer-events-none z-20" />
      <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-brand-light/80 to-transparent pointer-events-none z-20" />
    </div>
  );
};

export default Testimonials;