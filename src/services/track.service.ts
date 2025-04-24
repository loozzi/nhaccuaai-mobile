import apiService from './api.service';
import {TrackCreate, TrackUpdate, Track} from '../models/track';
import {PaginatedResponse} from '../models/utils';
import {PreviewCartModel} from '../models/preview';

class TrackService {
  private readonly baseUrl = '/track';

  /**
   * Get tracks with pagination
   * @param limit Number of results to return
   * @param page Page number
   * @param keyword Search keyword
   * @returns Paginated list of tracks
   */
  async getTracks(
    limit: number = 10,
    page: number = 1,
    keyword: string = '',
  ): Promise<PaginatedResponse<PreviewCartModel>> {
    return apiService.get<PaginatedResponse<PreviewCartModel>>(
      `${
        this.baseUrl
      }/?limit=${limit}&page=${page}&keyword=${encodeURIComponent(keyword)}`,
    );
  }

  /**
   * Create a new track
   * @param trackData Track creation data
   * @returns Created track
   */
  async createTrack(trackData: TrackCreate): Promise<Track> {
    return apiService.post<Track>(`${this.baseUrl}/`, trackData);
  }

  /**
   * Update a track
   * @param id Track ID
   * @param trackData Track update data
   * @returns Updated track
   */
  async updateTrack(id: number, trackData: TrackUpdate): Promise<Track> {
    return apiService.put<Track>(`${this.baseUrl}/${id}`, trackData);
  }

  /**
   * Delete a track
   * @param id Track ID
   * @returns Deleted track or success message
   */
  async deleteTrack(id: number): Promise<any> {
    return apiService.delete<any>(`${this.baseUrl}/${id}`);
  }

  /**
   * Get track by permalink
   * @param permalink Track permalink
   * @returns Track details
   */
  async getTrackByPermalink(permalink: string): Promise<Track> {
    return apiService.get<Track>(
      `${this.baseUrl}/by-permalink/${encodeURIComponent(permalink)}`,
    );
  }

  /**
   * Crawl track information from a link
   * @param link Track link to crawl
   * @returns Crawled track information
   */
  async crawlTrack(link: string): Promise<Track> {
    return apiService.get<Track>(
      `${this.baseUrl}/crawl/${encodeURIComponent(link)}`,
    );
  }
}

export default new TrackService();
