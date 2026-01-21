import React from 'react';
import { CONTACT_INFO, WHATSAPP_MESSAGE } from '../constants';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group flex items-center gap-2 overflow-hidden hover:pr-6"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-bold">Chat Now</span>
    </a>
  );
};

export default FloatingWhatsApp;