import {Artist} from './artist';
import {PreviewModel} from './preview';
import {Track} from './track';

export interface Album {
  id: number;
  name: string;
  image?: string;
  permalink: string;
  album_type: string;
  release_date: string;
  artists: Artist[];
  tracks: PreviewModel[];
  created_at?: string;
  updated_at?: string;
}

export interface AlbumCreate {
  name: string;
  image?: string;
  permalink: string;
  album_type: string;
  release_date: string;
  artist_ids?: number[];
}

export interface AlbumUpdate {
  name?: string;
  image?: string;
  permalink?: string;
  album_type?: string;
  release_date?: string;
  artist_ids?: number[];
}
