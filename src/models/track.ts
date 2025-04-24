import {PreviewCartModel} from './preview';

export type TrackType = 'track' | 'playlist' | 'album' | 'artist' | 'genre';

export interface Track {
  id: number;
  name: string;
  file_url: string;
  duration: number;
  permalink: string;
  type?: TrackType;
  release_date?: string;
  track_number?: number;
  album_id?: number;
  image?: string;
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
  type?: TrackType;
  release_date?: string;
  track_number?: number;
}

export interface TrackUpdate {
  name?: string;
  file_url?: string;
  duration?: number;
  permalink?: string;
  type?: TrackType;
  release_date?: string;
  track_number?: number;
}
