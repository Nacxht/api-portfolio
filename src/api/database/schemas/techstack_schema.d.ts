export interface Techstack {
  id: string;
  name: string;
  icon: string;
  category: TechstackCategory;
}

export enum TechstackCategory {
  CURRENTLY_USED = "Currently Used",
  THINGS_WANT_TO_LEARN = "Things I Want to Learn",
}
