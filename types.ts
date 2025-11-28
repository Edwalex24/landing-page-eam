export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum SectionId {
  HERO = 'inicio',
  FEATURES = 'caracteristicas',
  PRICING = 'planes',
  SOLUTIONS = 'soluciones',
  TESTIMONIALS = 'testimonios',
  CONTACT = 'contacto'
}