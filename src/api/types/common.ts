export interface Author {
  name: string;
  lastName: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  limit: number;
}
