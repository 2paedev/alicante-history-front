import { environment } from './../../../environments/environment';

const API_URL = environment.baseUrl;

export const API_ROUTE = {
  ARTICLES: {
    RESUME: `${API_URL}/resume/`,
    DETAIL: (articleId: string): string => `${API_URL}/articles/${articleId}/`,
    LIKES: (articleId: string): string => `${API_URL}/articles/${articleId}/like/`
  },
  USER: {
    MAIL_SUBSCRIPTION: `${API_URL}/mail/subscription/`
  }
};
