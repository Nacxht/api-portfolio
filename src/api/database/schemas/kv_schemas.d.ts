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

export interface Token {
  id: string;
  userId: string;
  expiresAt: number;
}
