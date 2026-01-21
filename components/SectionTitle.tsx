import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, alignment = 'center' }) => {
  const alignClass = alignment === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col mb-10 md:mb-12 ${alignClass}`}>
      <h2 className="text-2xl md:text-4xl font-serif text-brand-dark mb-3 relative pb-4">
        {title}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-brand-gold rounded-full opacity-80" style={{ left: alignment === 'left' ? '0' : '50%', transform: alignment === 'left' ? 'none' : 'translate(-50%)' }}></span>
      </h2>
      {subtitle && <p className="text-gray-600 max-w-2xl text-base md:text-lg px-4 md:px-0 leading-relaxed">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;