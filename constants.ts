import { ServiceCategory, Testimonial } from './types';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
const BASE = import.meta.env.BASE_URL;
export const BRAND_NAME = "Blissful Aura Yoga Studio";
export const FOUNDER_NAME = "Neetu K Verma";
export const TAGLINE = "Holistic Healing for Mind, Body And Soul";
export const SUB_TAGLINE = "Heal • Transform • Glow";

// CENTRALIZED IMAGES

export const IMAGES = {
  logo: `${BASE}logo.png`,
  hero: "https://images.unsplash.com/photo-1758599878920-d42cccc4aeca?auto=format&fit=crop&w=800&q=80",
  founder: `${BASE}founder.jpeg`
};


export const CONTACT_INFO = {
  phone: "+91 9902632359",
  whatsapp: "919902632359", // Clean number for API with country code
  email: "nee2bfy@gmail.com",
  address: "Kapila 13/A, Whitefield Main Road, Rushtamjee Layout, Whitefield, Bangalore- 560066",
  googleMapLink: "https://maps.app.goo.gl/9w5AFZudYw4b6S4V7",
  // Updated Review Link to point to the Map Profile so it works immediately
  googleReviewLink: "https://maps.app.goo.gl/9w5AFZudYw4b6S4V7", 
  facebook: "https://www.facebook.com/blissfulaurayoga/#",
  instagram: "https://www.instagram.com/blissfulaurayogastudio?igsh=MXJwcmd6YmkzYmwydg==", // Update this link to your actual Instagram
  hours: "Mon - Sat: 6:00 AM - 8:00 PM"
};

export const WHATSAPP_MESSAGE = "Hello! I am interested in scheduling a consultation.";
export const SERVICES: ServiceCategory[] = [
  {
    id: 'yoga',
    title: 'Yoga & Healing',
    shortDescription: 'Ancient wisdom combined with modern science for holistic mind-body wellness.',
    fullDescription: 'Our Yoga programs are designed to bring balance and harmony to your life. Whether you are a beginner or looking for therapeutic healing, we offer sessions tailored to your needs.',
    benefits: [
      'Stress reduction and mental clarity',
      'Improved flexibility and strength',
      'Holistic healing for chronic conditions',
      'Better sleep and emotional balance'
    ],
    items: [
      { name: 'General Yoga' },
      { name: 'Yoga Therapy' },
      { name: 'Meditation and Breathwork' },
      { name: 'Personal and Group Sessions' },
      { name: 'Prenatal/Postnatal Yoga' },
      { name: 'Yoga for Senior Citizens' },
      { name: 'Yoga for Kids' },
      { name: 'Sessions at Homes/Apartments' },
      { name: 'Corporate Yoga' }
    ],
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80' 
  },
  {
    id: 'diet',
    title: 'Diet & Nutrition',
    shortDescription: 'Expert guidance on healthy weight loss and therapeutic diets.',
    fullDescription: 'Nutrition is the foundation of health. We provide personalized diet plans that align with your lifestyle and health goals, focusing on sustainable changes.',
    benefits: [
      'Sustainable weight management',
      'Improved digestion and energy levels',
      'Management of lifestyle diseases',
      'Personalized meal planning'
    ],
    items: [
      { name: 'Healthy Weight Loss Programs' },
      { name: 'Therapeutic Diet Consultation' },
      { name: 'Lifestyle Correction' }
    ],
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'skin',
    title: 'Skin & Wellness',
    shortDescription: 'Holistic glow programs and skin care consultations.',
    fullDescription: 'Radiant skin starts from within. Our holistic approach combines nutrition, yoga, and skincare expertise to help you achieve a natural glow.',
    benefits: [
      'Natural, lasting glow',
      'Holistic acne and pigmentation management',
      'Anti-aging through natural methods',
      'Confidence boost'
    ],
    items: [
      { name: 'Skin Care Consultation' },
      { name: 'Holistic Glow Programs' }
    ],
    image: 'https://i.pinimg.com/1200x/ce/e4/ba/cee4ba68cccdefc4e599b0ff5ac718c1.jpg?auto=format&fit=crop&w=800&q=80'
  }
];

export const FOUNDER_BIO = {
  name: "Neetu K Verma",
  titles: [
    "Yoga Therapist",
    "Dietitian & Nutritionist",
    "Skin Care Specialist"
  ],
  description: `Neetu K Verma is a Yoga Therapist, Dietitian, Nutritionist, and Skin Care Specialist with a passion for holistic transformation. She combines ancient wisdom with modern science to guide her clients on a journey of mind-body-skin wellness.`,
  associations: [
    {
      name: "Reshape Nation",
      logo: `${BASE}reshape-nation.png`
    },
    {
      name: "RisingS-He Community",
      logo: `${BASE}rising-she.png`
    }
  ],
  mentorship: "Neetu mentors a small circle of professionals and enthusiasts in Yoga, Nutrition, and Skin Wellness."
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Anjali P.",
    service: "Yoga Therapy",
    review: "Blissful Aura has completely transformed my approach to health. The yoga therapy sessions helped my back pain immensely.",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul S.",
    service: "Diet & Nutrition",
    review: "Neetu's diet plan was easy to follow and very effective. I lost 5kg in 2 months without feeling starved.",
    rating: 5
  },
  {
    id: 3,
    name: "Sneha K.",
    service: "Prenatal Yoga",
    review: "The prenatal yoga classes were a blessing during my pregnancy. I felt supported and prepared for labor.",
    rating: 5
  },
  {
    id: 4,
    name: "Priya M.",
    service: "Skin Wellness",
    review: "My skin has never looked better! The natural approach really works wonders.",
    rating: 5
  },
  {
    id: 5,
    name: "Karan D.",
    service: "Corporate Yoga",
    review: "Great session for our team. It really helped reduce workplace stress.",
    rating: 4
  }
];

export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfD_PLACEHOLDER_FORM_ID/viewform?embedded=true";