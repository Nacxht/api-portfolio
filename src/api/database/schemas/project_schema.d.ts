import { Techstack } from "./techstack_schema.d.ts";

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
  screenshots: string[];
}
