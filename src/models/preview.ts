import {Artist} from './artist';

export interface PreviewModel {
  id: number;
  name: string;
  image: string;
  artist: Artist;
  permalink: string;
  type: string;
  duration?: number;
}
