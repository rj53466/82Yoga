export interface ServiceItem {
  name: string;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  items: ServiceItem[];
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  service: string;
  review: string;
  rating: number;
}