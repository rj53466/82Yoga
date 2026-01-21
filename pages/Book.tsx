import React, { useState } from 'react';
import { CONTACT_INFO, SERVICES } from '../constants';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Send, Calendar, User, Phone, FileText, ShieldCheck, CreditCard, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Book: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    // Phone Validation (Allows +, space, -, and digits, min 10 chars)
    const phoneRegex = /^[+]?[\d\s-]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (min 10 digits).';
    }

    // Service Validation
    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for the field being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Format the message for WhatsApp
    const text = `*New Booking Request from Website*
    
Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Preferred Date: ${formData.date || 'Flexible'}
Message: ${formData.message || 'N/A'}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  const baseInputClasses = "w-full pl-10 pr-4 py-3 rounded-lg border text-gray-900 placeholder-gray-500 bg-white outline-none transition-all shadow-sm font-medium";
  const defaultInputClasses = "border-gray-300 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20";
  const errorInputClasses = "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200";
  const labelClasses = "block text-sm font-bold text-brand-dark mb-2 tracking-wide";

  return (
    <div id="book" className="bg-white py-20 scroll-mt-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionTitle 
          title="Book Your Consultation" 
          subtitle="Ready to start your journey? Fill out the details below to book a consultation instantly via WhatsApp."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Context/Info Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-brand-light p-8 rounded-2xl order-2 md:order-1"
            >
                <h3 className="text-xl font-serif font-bold text-brand-dark mb-6">Simple Booking Process</h3>
                <ol className="space-y-6 text-gray-700 relative border-l-2 border-brand-green/20 ml-3 pl-8">
                    <li className="relative">
                        <span className="absolute -left-[2.35rem] top-0 bg-brand-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</span>
                        <h4 className="font-bold text-brand-dark">Fill the Form</h4>
                        <p className="text-sm">Provide your name, contact info, and the service you are interested in.</p>
                    </li>
                    <li className="relative">
                        <span className="absolute -left-[2.35rem] top-0 bg-brand-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</span>
                        <h4 className="font-bold text-brand-dark">Send via WhatsApp</h4>
                        <p className="text-sm">Click the button to open WhatsApp with your pre-filled details.</p>
                    </li>
                    <li className="relative">
                        <span className="absolute -left-[2.35rem] top-0 bg-brand-green text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</span>
                        <h4 className="font-bold text-brand-dark">Confirm & Pay</h4>
                        <p className="text-sm">We will confirm the slot availability and share payment details directly.</p>
                    </li>
                </ol>

                {/* Consultation Fee Highlight */}
                <div className="mt-8 flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm transition-transform hover:scale-[1.02] duration-300">
                    <div className="bg-brand-light p-3 rounded-full text-brand-gold shadow-sm">
                        <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-brand-dark font-medium text-base">
                           Consultation fee <span className="font-bold text-xl ml-1 text-brand-green">RS.349/-</span>.
                        </p>
                    </div>
                </div>
                
                <div className="mt-8 p-6 bg-white rounded-xl border border-brand-green/20 shadow-sm">
                    <p className="text-sm text-gray-600 italic">
                        "Your journey to wellness is personal. We ensure a direct connection with Neetu K Verma to tailor the experience for you."
                    </p>
                </div>

                {/* Payment Security Notice */}
                <div className="mt-6 p-4 bg-brand-accent/30 border border-brand-gold/20 rounded-lg flex items-start gap-3">
                    <div className="bg-white p-2 rounded-full flex-shrink-0 shadow-sm">
                        <ShieldCheck className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-brand-dark mb-1">Secure Payment Processing</h4>
                        <p className="text-xs text-gray-700 leading-relaxed">
                            To ensure transparency and security, all payments are coordinated directly through our official contact number only after your consultation is confirmed.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Form Side */}
            <motion.form 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              onSubmit={handleSubmit} 
              className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200 order-1 md:order-2"
              noValidate
            >
                <h3 className="text-xl font-bold text-brand-dark mb-6 border-b border-gray-100 pb-4">Consultation Request</h3>
                <div className="space-y-6">
                    
                    {/* Name */}
                    <div>
                        <label className={labelClasses}>Full Name <span className="text-red-500">*</span></label>
                        <div className="relative">
                            <User className={`absolute left-3 top-3.5 w-5 h-5 ${errors.name ? 'text-red-500' : 'text-gray-400'}`} />
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="e.g. Aditi Sharma"
                                className={`${baseInputClasses} ${errors.name ? errorInputClasses : defaultInputClasses}`}
                            />
                        </div>
                        {errors.name && (
                          <div className="flex items-center gap-1 mt-1.5 text-red-500 text-xs font-medium animate-pulse">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </div>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <label className={labelClasses}>Phone Number <span className="text-red-500">*</span></label>
                        <div className="relative">
                            <Phone className={`absolute left-3 top-3.5 w-5 h-5 ${errors.phone ? 'text-red-500' : 'text-gray-400'}`} />
                            <input 
                                type="tel" 
                                name="phone" 
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="e.g. +91 98765 43210"
                                className={`${baseInputClasses} ${errors.phone ? errorInputClasses : defaultInputClasses}`}
                            />
                        </div>
                        {errors.phone && (
                          <div className="flex items-center gap-1 mt-1.5 text-red-500 text-xs font-medium animate-pulse">
                            <AlertCircle className="w-3 h-3" /> {errors.phone}
                          </div>
                        )}
                    </div>

                    {/* Service Selection */}
                    <div>
                        <label className={labelClasses}>Service of Interest <span className="text-red-500">*</span></label>
                        <div className="relative">
                            <select 
                                name="service" 
                                value={formData.service}
                                onChange={handleChange}
                                className={`${baseInputClasses} appearance-none cursor-pointer ${errors.service ? errorInputClasses : defaultInputClasses}`}
                            >
                                <option value="" className="text-gray-500">Select a Service...</option>
                                {SERVICES.map(service => (
                                    <optgroup key={service.id} label={service.title} className="font-bold text-brand-dark">
                                        {service.items.map(item => (
                                            <option key={item.name} value={`${service.title} - ${item.name}`} className="text-gray-900">
                                                {item.name}
                                            </option>
                                        ))}
                                    </optgroup>
                                ))}
                                <option value="General Inquiry" className="text-gray-900">General Inquiry</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                <svg className={`w-4 h-4 ${errors.service ? 'text-red-500' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </div>
                        {errors.service && (
                          <div className="flex items-center gap-1 mt-1.5 text-red-500 text-xs font-medium animate-pulse">
                            <AlertCircle className="w-3 h-3" /> {errors.service}
                          </div>
                        )}
                    </div>

                    {/* Date */}
                    <div>
                        <label className={labelClasses}>Preferred Date (Optional)</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                            <input 
                                type="date" 
                                name="date" 
                                value={formData.date}
                                onChange={handleChange}
                                className={`${baseInputClasses} ${defaultInputClasses} text-gray-900`}
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <label className={labelClasses}>Message (Optional)</label>
                        <div className="relative">
                            <FileText className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                            <textarea 
                                name="message" 
                                value={formData.message}
                                onChange={handleChange}
                                rows={3}
                                placeholder="Any specific concerns or questions?"
                                className={`${baseInputClasses} ${defaultInputClasses} resize-none`}
                            ></textarea>
                        </div>
                    </div>

                    <Button 
                        type="submit" 
                        fullWidth 
                        className="mt-4 py-4 text-lg shadow-lg hover:shadow-xl !bg-brand-dark text-white !hover:bg-brand-green border-none !transform !hover:translate-x-2 !hover:translate-y-0 transition-all duration-300"
                    >
                        Book Now via WhatsApp <Send className="w-5 h-5 ml-2" />
                    </Button>
                    <p className="text-xs text-center text-gray-500 mt-3 font-medium">You will be redirected to WhatsApp to send the details securely.</p>
                </div>
            </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Book;