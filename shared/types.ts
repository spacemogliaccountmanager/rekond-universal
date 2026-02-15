export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  price?: string;
}

export interface GalleryItem {
  id: string;
  before: string;
  after: string;
  caption: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    logo: string;
    favicon: string;
    primaryColor: string;
    primaryColorDark: string;
    accentColor: string;
  };
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ctaText: string;
  };
  services: Service[];
  gallery: GalleryItem[];
  about: {
    title: string;
    description: string;
    image: string;
    features: string[];
  };
  contact: ContactInfo;
  footer: {
    text: string;
    socials: SocialLink[];
  };
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    description: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}
