const API_URL = 'http://localhost:3000';

export const API_ROUTE = {
  ARTICLES: {
    ALL: `${API_URL}/articles/all`,
    DETAIL: (articleId: string): string => `${API_URL}/articles/${articleId}`
  }
};
