export type Language = 'ID' | 'EN';

export interface LocalizedString {
  ID: string;
  EN: string;
}

export interface Category {
  id: number;
  name: {
    ID: string;
    EN: string;
  };
  slug: string;
  icon: string;
  is_active: boolean;
  order: number;
}

export interface Destination {
  id: number;
  category_id: number;
  category_slug: string;
  name: string;
  slug: string;
  location: string;
  description: {
    ID: string;
    EN: string;
  };
  rating: number;
  image: string;
  is_featured: boolean;
  is_active: boolean;
  order: number;
}

export interface EmergencyContact {
  id: number;
  title: {
    ID: string;
    EN: string;
  };
  description: {
    ID: string;
    EN: string;
  };
  phone_number: string;
  button_text: {
    ID: string;
    EN: string;
  };
  is_active: boolean;
}

export interface HeroConfig {
  title1: string;
  title2: string;
  subtitle: {
    ID: string;
    EN: string;
  };
  background_images: string[];
  is_active: boolean;
}

export interface Organization {
  id: number;
  name: string;
  image: string;
  desc: {
    ID: string;
    EN: string;
  };
  is_active: boolean;
}

export interface EventItem {
  id: number;
  title: string;
  image: string;
  date?: string;
  desc: {
    ID: string;
    EN: string;
  };
  is_active: boolean;
}
