export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  profileImage: string;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  contact: ContactInfo;
}