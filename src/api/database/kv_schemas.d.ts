export interface Intro {
  id: string;
  badges: string[];
  description: string;
  serviceDescription: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  techstacks: Techstack[];
  links: {
    github: string | null;
    demo: string | null;
  };
  screenshots: string[] | null;
}

export interface Experience {
  id: string;
  dateRange: { start: string; end: string };
  title: string;
  description: string;
}

export interface Contact {
  id: string;
  email?: string;
  linkedin?: string;
  github?: string;
  discord?: string;
  instagram?: string;
}

export enum TechstackCategory {
  CURRENTLY_USED = "currently_used",
  INTERESTED = "interested",
}

export interface Techstack {
  id: string;
  name: string;
  img: string;
  category: TechstackCategory;
}

export interface Token {
  id: string;
  userId: string;
  expiresAt: number;
}
