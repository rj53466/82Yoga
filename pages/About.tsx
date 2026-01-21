import React, { useRef } from 'react';
import { FOUNDER_BIO, CONTACT_INFO, IMAGES } from '../constants';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Award, Users } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position state (normalized 0 to 1)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth out movement - high damping for very subtle lag
  const springConfig = { damping: 50, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax effects - reduced range for subtle interaction
  const layer1X = useTransform(smoothX, [0, 1], [30, -30]);
  const layer1Y = useTransform(smoothY, [0, 1], [30, -30]);
  const layer2X = useTransform(smoothX, [0, 1], [-20, 20]);
  const layer2Y = useTransform(smoothY, [0, 1], [-20, 20]);
  const layer3X = useTransform(smoothX, [0, 1], [-15, 15]);
  const layer3Y = useTransform(smoothY, [0, 1], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Bento Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    }
  };

  return (
    <div 
      id="about" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-16 md:py-20 scroll-mt-16 overflow-hidden bg-white group"
    >
      
      {/* Interactive Background Layers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-brand-light/30" />
        <motion.div
          style={{ x: layer1X, y: layer1Y }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[10%] w-[40rem] h-[40rem] bg-gradient-to-br from-brand-green/10 to-transparent rounded-full blur-[100px]"
        />
        <motion.div
          style={{ x: layer2X, y: layer2Y }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-[10%] -left-[10%] w-[45rem] h-[45rem] bg-gradient-to-tr from-brand-gold/10 to-brand-accent/20 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ x: layer3X, y: layer3Y }}
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] left-[30%] w-[35rem] h-[35rem] bg-brand-light/40 rounded-full blur-[90px] mix-blend-multiply"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title="About The Founder" subtitle="Blending ancient wisdom with modern science." />

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mt-8 md:mt-12">
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/3 relative md:sticky md:top-24"
          >
            <div className="relative max-w-sm mx-auto md:max-w-none">
                {/* Electric Border Container for Rectangular Image */}
                <div className="relative rounded-xl overflow-hidden p-[3px] shadow-2xl">
                    <div className="absolute inset-[-200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0d9488_0%,#d97706_50%,#0d9488_100%)] opacity-80" />
                    <div className="relative bg-white rounded-[9px] overflow-hidden">
                        <img 
                          src={IMAGES.founder} 
                          alt={FOUNDER_BIO.name} 
                          className="w-full h-[400px] md:h-[500px] object-cover relative z-10"
                        />
                    </div>
                </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-2/3"
          >
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-serif text-brand-dark mb-2">{FOUNDER_BIO.name}</h2>
              <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                {FOUNDER_BIO.titles.map((title) => (
                  <span key={title} className="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
                    {title}
                  </span>
                ))}
              </div>
            </div>

            <div className="prose prose-lg text-gray-600 mb-8 bg-white/60 p-5 md:p-6 rounded-xl backdrop-blur-sm border border-white/50 shadow-sm text-base md:text-lg">
              <p className="mb-4">{FOUNDER_BIO.description}</p>
              <p className="mb-0">
                Neetu brings a unique approach that empowers both her clients and those aspiring to become holistic health coaches. 
                Her philosophy relies on the belief that true healing encompasses the mind, body, and soul.
              </p>
            </div>

            {/* Nested Bento Grid for Cards */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10"
            >
              <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-sm p-5 md:p-6 rounded-lg border-l-4 border-brand-gold shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-brand-gold" />
                  <h3 className="font-bold text-brand-dark">Associations</h3>
                </div>
                
                {/* Professional Logo Grid */}
                <div className="space-y-3">
                  {FOUNDER_BIO.associations.map((assoc) => (
                    <div key={assoc.name} className="flex items-center gap-4 p-3 rounded-xl bg-white border border-brand-gold/10 shadow-sm hover:shadow-md transition-all hover:translate-x-1 group/assoc">
                      {/* Logo Container - Adjusted for non-circular logos like Shields */}
                      <div className="w-12 h-12 flex-shrink-0 bg-white rounded-lg p-1 border border-gray-100 flex items-center justify-center">
                        <img 
                            src={assoc.logo} 
                            alt={assoc.name} 
                            className="w-full h-full object-contain" 
                        />
                      </div>
                      <span className="text-sm font-bold text-gray-700 group-hover/assoc:text-brand-dark transition-colors">
                        {assoc.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-sm p-5 md:p-6 rounded-lg border-l-4 border-brand-green shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-brand-green" />
                  <h3 className="font-bold text-brand-dark">Mentorship</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {FOUNDER_BIO.mentorship}
                </p>
              </motion.div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent("Hello! I am interested in your mentorship program.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button fullWidth>Connect for Mentorship</Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;