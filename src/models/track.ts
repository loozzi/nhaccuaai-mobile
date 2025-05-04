import {AlbumPreview} from './album';
import {PreviewModel} from './preview';

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
  album?: AlbumPreview;
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

export interface TrackPlayerModel {
  id: number;
  title: string;
  artist: string;
  artwork: string;
  url: string;
  duration: number;
  album?: string;
  genre?: string;

  [key: string]: any;
}
