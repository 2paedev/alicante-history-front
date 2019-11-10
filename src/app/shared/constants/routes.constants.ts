export const ROUTE = {
  EMPLOYEE_ID: ':id',
  HOME: 'home',
  ARTICLE: 'article',
  ARTICLE_DETAIL(id: string): string {
    return `${ROUTE.ARTICLE}/${id}`;
  },
  ALL_ARTICLES: 'all-articles',
  MY_LIST: 'my-list'
};
