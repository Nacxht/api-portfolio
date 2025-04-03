export interface Intro {
  badges: string[];
  description: string;
  serviceDescription: string;
}

export interface Project {
  name: string;
  description: string;
  thumbnail: string;
  techstacks: string[];
  screenshots: string[] | null;
}

export interface Experience {
  dateRange: { start: string; end: string };
  title: string;
  description: string;
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
  discord: string | null;
  instagram: string | null;
}

export interface Techstack {
  name: string;
  img: string;
}

export interface Techstacks {
  currentUsed: {
    techstacks: Techstack[];
  };
  interested: {
    techstacks: Techstack[];
  };
}
