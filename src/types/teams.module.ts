export interface RemoteTeam {
  id: number;
  logo: string;
  name: string;
  slug: string;
  tag: string;
  university: string;
  university_tag: string;
  instagram: string;
  twitch: string;
  estado: string;
}

export interface Team {
  id: number;
  slug: string;
  name: string;
  imageUrl: string;
  university: string;
  tag: string;
  universityTag: string;
  uf: string;
  instagram: string;
  twitch: string;
}
