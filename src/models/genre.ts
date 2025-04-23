export interface Genre {
  id: number;
  name: string;
  permalink: string;
  created_at?: string;
  updated_at?: string;
}

export interface GenreCreate {
  name: string;
  permalink: string;
}

export interface GenreUpdate {
  name?: string;
  permalink?: string;
}

export interface PaginatedGenreResponse {
  items: Genre[];
  total: number;
  page: number;
  size: number;
  pages: number;
}
