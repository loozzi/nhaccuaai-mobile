import {Track} from './track';
import {Author} from './user';

export interface Playlist {
  id: number;
  permalink: string;
  image: string;
  duration: number;
  tracks: Track[];
  author: Author;
  description: string;
  name: string;
}
