export interface PaginatedResponse<T> {
  items: T[];
  meta: {
    total: number;
    limit: number;
    page: number;
  };
}
