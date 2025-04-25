import apiService from './api.service';
import {Album, AlbumCreate, AlbumUpdate} from '../models/album';
import {PaginatedResponse} from '../models/utils';
import {PreviewModel} from '../models/preview';

class AlbumService {
  private readonly baseUrl = '/album';

  /**
   * Get albums with pagination
   * @param limit Number of results to return
   * @param page Page number
   * @param keyword Search keyword
   * @returns Paginated list of albums
   */
  async getAlbums(
    limit: number = 10,
    page: number = 1,
    keyword: string = '',
  ): Promise<PaginatedResponse<PreviewModel>> {
    return apiService.get<PaginatedResponse<PreviewModel>>(
      `${
        this.baseUrl
      }/?limit=${limit}&page=${page}&keyword=${encodeURIComponent(keyword)}`,
    );
  }

  /**
   * Get album by ID
   * @param id Album ID
   * @returns Album details
   */
  async getAlbum(id: number): Promise<Album> {
    return apiService.get<Album>(`${this.baseUrl}/${id}`);
  }

  /**
   * Create a new album
   * @param albumData Album creation data
   * @returns Created album
   */
  async createAlbum(albumData: AlbumCreate): Promise<Album> {
    return apiService.post<Album>(`${this.baseUrl}/`, albumData);
  }

  /**
   * Update an album
   * @param id Album ID
   * @param albumData Album update data
   * @returns Updated album
   */
  async updateAlbum(id: number, albumData: AlbumUpdate): Promise<Album> {
    return apiService.put<Album>(`${this.baseUrl}/${id}`, albumData);
  }

  /**
   * Delete an album
   * @param id Album ID
   * @returns Deleted album or success message
   */
  async deleteAlbum(id: number): Promise<any> {
    return apiService.delete<any>(`${this.baseUrl}/${id}`);
  }
}

export default new AlbumService();
