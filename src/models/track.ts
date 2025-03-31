import {Artist} from './artist';

export interface Track {
  id: number;
  name: string;
  image: string;
  type: string;
  permalink: string;
  release_date: string;
  duration: number;
  artists: Artist[];
  file_url: string;
  track_number: number;
}
