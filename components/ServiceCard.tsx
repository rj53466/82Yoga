import React from 'react';
import { ServiceCategory } from '../types';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceCategory;
  onClick?: () => void;
  isActive?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick, isActive }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        group relative flex flex-col h-full bg-white rounded-xl overflow-hidden border border-gray-100 cursor-pointer
        transition-all duration-300 ease-in-out
        hover:-translate-y-1 hover:shadow-2xl
        ${isActive ? 'shadow-xl -translate-y-1' : 'shadow-lg'}
      `}
    >
      <div className="h-48 relative overflow-hidden bg-gray-100">
        {/* Electric Border Background (Spinning Conic Gradient) */}
        <div className={`absolute inset-[-200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0d9488_0%,#d97706_50%,#0d9488_100%)] ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'} transition-opacity duration-500`} />
        
        {/* Image Container (Inset to create border) */}
        <div className="absolute inset-[3px] bg-white rounded-t-[9px] overflow-hidden">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {isActive && (
              <div className="absolute inset-0 bg-brand-green/20 flex items-center justify-center">
                <span className="bg-white text-brand-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm">
                  Selected
                </span>
              </div>
            )}
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-brand-green' : 'text-brand-dark group-hover:text-brand-green'}`}>
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm flex-grow leading-relaxed">
          {service.shortDescription}
        </p>
        
        <div className="space-y-2 mb-6">
          {service.items.slice(0, 3).map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-gold mt-1 flex-shrink-0" />
              <span className="text-sm text-gray-700">{item.name}</span>
            </div>
          ))}
          {service.items.length > 3 && (
            <p className="text-xs text-gray-500 italic pl-6">+ {service.items.length - 3} more</p>
          )}
        </div>

        <button 
          className={`mt-auto w-full py-3 rounded-lg border font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${isActive ? 'bg-brand-green text-white border-brand-green' : 'border-brand-green text-brand-green group-hover:bg-brand-green group-hover:text-white'}`}
        >
          {isActive ? 'Currently Viewing' : 'View Details'} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;