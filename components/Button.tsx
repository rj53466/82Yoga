import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button',
  fullWidth = false
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-md flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brand-green text-white hover:bg-brand-dark hover:shadow-lg",
    secondary: "bg-brand-gold text-white hover:bg-amber-700 hover:shadow-lg",
    outline: "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E]"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      type={type}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;