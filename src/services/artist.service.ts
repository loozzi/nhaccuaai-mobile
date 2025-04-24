import apiService from './api.service';
import {Artist, ArtistCreate, ArtistUpdate} from '../models/artist';
import {PaginatedResponse} from '../models/utils';

class ArtistService {
  private readonly baseUrl = '/artist';

  /**
   * Get artists with pagination
   * @param limit Number of results to return
   * @param page Page number
   * @param keyword Search keyword
   * @returns Paginated list of artists
   */
  async getArtists(
    limit: number = 10,
    page: number = 1,
    keyword: string = '',
  ): Promise<PaginatedResponse<Artist>> {
    return apiService.get<PaginatedResponse<Artist>>(
      `${
        this.baseUrl
      }/?limit=${limit}&page=${page}&keyword=${encodeURIComponent(keyword)}`,
    );
  }

  /**
   * Get artist by ID
   * @param id Artist ID
   * @returns Artist details
   */
  async getArtist(id: number): Promise<Artist> {
    return apiService.get<Artist>(`${this.baseUrl}/${id}`);
  }

  /**
   * Create a new artist
   * @param artistData Artist creation data
   * @returns Created artist
   */
  async createArtist(artistData: ArtistCreate): Promise<Artist> {
    return apiService.post<Artist>(`${this.baseUrl}/`, artistData);
  }

  /**
   * Update an artist
   * @param id Artist ID
   * @param artistData Artist update data
   * @returns Updated artist
   */
  async updateArtist(id: number, artistData: ArtistUpdate): Promise<Artist> {
    return apiService.put<Artist>(`${this.baseUrl}/${id}`, artistData);
  }

  /**
   * Delete an artist
   * @param id Artist ID
   * @returns Deleted artist or success message
   */
  async deleteArtist(id: number): Promise<any> {
    return apiService.delete<any>(`${this.baseUrl}/${id}`);
  }
}

export default new ArtistService();
