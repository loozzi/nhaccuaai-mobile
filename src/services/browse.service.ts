import {PreviewModel} from '../models/preview';
import {PaginatedResponse} from '../models/utils';
import apiService from './api.service';

class BrowseService {
  private readonly baseUrl: string = '/browse';

  /**
   * Fetch search data from the API
   * @param limit Number of results to return
   * @param page Page number
   * @param keyword Search keyword
   * @returns Paginated list of search results
   */
  async search(
    limit: number = 10,
    page: number = 1,
    keyword: string = '',
  ): Promise<PaginatedResponse<PreviewModel>> {
    try {
      return apiService.get<PaginatedResponse<PreviewModel>>(
        `${this.baseUrl}/search`,
        {
          params: {
            limit,
            page,
            keyword: encodeURIComponent(keyword),
          },
        },
      );
    } catch (error) {
      console.error('Error fetching browse data:', error);
      throw error;
    }
  }
}

export default new BrowseService();
