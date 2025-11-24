export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeatureCategory {
  id: string;
  name: string;
  items: FeatureItem[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Algorithm {
  title: string;
  tech: string;
  description: string;
}

export interface USP {
  title: string;
  description: string;
  icon: string;
}