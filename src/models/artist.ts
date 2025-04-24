export interface Artist {
  id: number;
  name: string;
  image: string;
  permalink: string;
  genres?: number[];
  created_at?: string;
  updated_at?: string;
}

export interface ArtistCreate {
  name: string;
  image: string;
  permalink: string;
  genres?: number[];
}

export interface ArtistUpdate {
  name?: string;
  image?: string;
  permalink?: string;
  genres?: number[];
}
