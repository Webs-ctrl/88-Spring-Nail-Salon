export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  priceStart: number;
  durationMin: number;
  category: 'manicure' | 'pedicure' | 'extension' | 'art' | 'repair';
  popular?: boolean;
  features?: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string; // e.g. "Local Guide", "Regular Client"
  stars: number;
  relativeTime: string;
  text: string;
  tags: string[];
  nailPhotoUrl?: string; // High-quality image representing their nails
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string; // e.g. "French Touch", "Gel-X Art", "Minimalist"
  description: string;
  photoUrl: string;
  badge: string;
}

export interface InspirationCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  colors: { name: string; hex: string }[];
  styleTips: string[];
  sampleImages: string[];
}

export interface ArtistProfile {
  id: string;
  name: string;
  role: string;
  strengths: string[];
  bio: string;
  avatarUrl: string;
}

export interface BookingDetails {
  services: string[];
  artistId: string;
  date: string;
  timeSlot: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
  silentZenSession: boolean;
}
