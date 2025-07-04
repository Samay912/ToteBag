export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}