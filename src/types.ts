export type NavTab = 
  | 'home' 
  | 'about' 
  | 'menu' 
  | 'services' 
  | 'gallery' 
  | 'events' 
  | 'contact' 
  | 'directions';

export type MenuCategory = 
  | 'COFFEE & ESPRESSO'
  | 'TEA'
  | 'BREAKFAST'
  | 'SANDWICHES'
  | 'PASTRIES'
  | 'DESSERTS'
  | 'COLD DRINKS';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: string;
  description: string;
  badge?: string;
  popular?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  role?: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  fullText: string;
  thumbnail: string;
  author: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  bullets?: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Café Interior' | 'Coffee' | 'Pastries' | 'Food' | 'Customers' | 'Events';
  imageUrl: string;
  caption: string;
}

export interface EventItem {
  id: string;
  title: string;
  day: string;
  time: string;
  dateStr: string;
  description: string;
  admission: string;
}
