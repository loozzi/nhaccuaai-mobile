export interface Track {
  id: number;
  name: string;
  file_url: string;
  duration: number;
  permalink: string;
  type?: string;
  release_date?: string;
  track_number?: number;
  album_id?: number;
  artists?: number[];
  genres?: number[];
  created_at?: string;
  updated_at?: string;
}

export interface TrackCreate {
  name: string;
  file_url: string;
  duration: number;
  permalink: string;
  type?: string;
  release_date?: string;
  track_number?: number;
}

export interface TrackUpdate {
  name?: string;
  file_url?: string;
  duration?: number;
  permalink?: string;
  type?: string;
  release_date?: string;
  track_number?: number;
}

export interface PaginatedTrackResponse {
  items: Track[];
  total: number;
  page: number;
  size: number;
  pages: number;
}
