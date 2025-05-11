export interface Intro {
  badges: string[];
  description: string;
  serviceDescription: string;
}

export interface Project {
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
  dateRange: { start: string; end: string };
  title: string;
  description: string;
}

export interface Contact {
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
  name: string;
  img: string;
  category: TechstackCategory;
}

export interface Techstacks {
  currentUsed: {
    techstacks: Techstack[];
  };
  interested: {
    techstacks: Techstack[];
  };
}
