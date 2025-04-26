import {AlbumPreview} from './album';
import {PreviewModel} from './preview';

export interface Artist {
  id: number;
  name: string;
  image: string;
  permalink: string;
  genres?: number[];
  tracks: PreviewModel[];
  albums: AlbumPreview[];
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
