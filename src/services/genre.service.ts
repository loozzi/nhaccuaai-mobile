import apiService from './api.service';
import {
  Genre,
  GenreCreate,
  GenreUpdate,
  PaginatedGenreResponse,
} from '../models/genre';

class GenreService {
  private readonly baseUrl = '/genre';

  /**
   * Get genres with pagination
   * @param limit Number of results to return
   * @param page Page number
   * @param keyword Search keyword
   * @returns Paginated list of genres
   */
  async getGenres(
    limit: number = 10,
    page: number = 1,
    keyword: string = '',
  ): Promise<PaginatedGenreResponse> {
    return apiService.get<PaginatedGenreResponse>(
      `${
        this.baseUrl
      }/?limit=${limit}&page=${page}&keyword=${encodeURIComponent(keyword)}`,
    );
  }

  /**
   * Get genre by ID
   * @param id Genre ID
   * @returns Genre details
   */
  async getGenre(id: number): Promise<Genre> {
    return apiService.get<Genre>(`${this.baseUrl}/${id}`);
  }

  /**
   * Create a new genre
   * @param genreData Genre creation data
   * @returns Created genre
   */
  async createGenre(genreData: GenreCreate): Promise<Genre> {
    return apiService.post<Genre>(`${this.baseUrl}/`, genreData);
  }

  /**
   * Update a genre
   * @param id Genre ID
   * @param genreData Genre update data
   * @returns Updated genre
   */
  async updateGenre(id: number, genreData: GenreUpdate): Promise<Genre> {
    return apiService.put<Genre>(`${this.baseUrl}/${id}`, genreData);
  }

  /**
   * Delete a genre
   * @param id Genre ID
   * @returns Deleted genre or success message
   */
  async deleteGenre(id: number): Promise<any> {
    return apiService.delete<any>(`${this.baseUrl}/${id}`);
  }
}

export default new GenreService();
