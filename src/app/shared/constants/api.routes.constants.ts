import { environment } from '../../../environments/environment';

const API_URL = environment.baseUrl;

export const API_ROUTE = {
  ARTICLES: {
    RESUME: `${API_URL}/resume/`,
    LAST_FIVE: `${API_URL}/resume/lastfive/`,
    ALL: `${API_URL}/articles/`,
    DETAIL: (articleId: number): string => `${API_URL}/articles/${articleId}/`,
    LIKES: (articleId: number): string =>
      `${API_URL}/articles/${articleId}/like/`,
  },
  USER: {
    MAIL_SUBSCRIPTION: `${API_URL}/mail/subscription/`,
  },
};
