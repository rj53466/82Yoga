import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock, Star } from 'lucide-react';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col"
          >
            <h1 className="text-3xl font-serif text-brand-dark mb-8">Get In Touch</h1>
            
            <div className="space-y-8 flex-grow">
              <div className="flex items-start gap-4">
                <div className="bg-brand-light p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Visit Us</h3>
                  <p className="text-gray-600 leading-relaxed max-w-xs">{CONTACT_INFO.address}</p>
                  <a href={CONTACT_INFO.googleMapLink} target="_blank" rel="noreferrer" className="text-brand-green text-sm font-semibold hover:underline mt-2 inline-block">
                    Get Directions
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-light p-3 rounded-full">
                  <Phone className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Call / WhatsApp</h3>
                  <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-[#25D366] hover:underline font-semibold"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-light p-3 rounded-full">
                  <Mail className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email Us</h3>
                  <p className="text-gray-600">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-light p-3 rounded-full">
                  <Clock className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Studio Hours</h3>
                  <p className="text-gray-600">{CONTACT_INFO.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="bg-brand-light/50 p-6 rounded-xl border border-brand-green/10 text-center transition-all hover:bg-brand-light hover:shadow-sm">
                    <h3 className="font-bold text-brand-dark mb-2 flex items-center justify-center gap-2">
                        <Star className="w-5 h-5 text-brand-gold fill-current" />
                        Share Your Experience
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Your feedback helps us grow and serve you better. We'd love to hear from you!
                    </p>
                    {/* Fixed Google Review Button using Centralized Link */}
                    <a 
                        href={CONTACT_INFO.googleReviewLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block"
                    >
                        <Button variant="outline" fullWidth className="justify-center bg-white hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-colors">
                            Leave a Google Review
                        </Button>
                    </a>
                </div>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-200"
          >
             <iframe 
                src="https://maps.google.com/maps?q=Kapila%2013%2FA%2C%20Whitefield%20Main%20Road%2C%20Rushtamjee%20Layout%2C%20Whitefield%2C%20Bangalore-%20560066&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '100%' }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Blissful Aura Location"
             ></iframe>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;