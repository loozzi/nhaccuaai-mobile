import {Artist} from './artist';

export interface PreviewCartModel {
  id: number;
  name: string;
  image: string;
  artist: Artist;
  permalink: string;
  type: string;
  duration?: number;
}
