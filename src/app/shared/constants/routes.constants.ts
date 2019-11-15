export const ROUTE = {
  EMPLOYEE_ID: ':id',
  HOME: 'home',
  ARTICLE: 'article',
  ARTICLE_DETAIL(id: string): string {
    return `${ROUTE.ARTICLE}/${id}`;
  },
  SEARCH: 'search',
  MY_LIST: 'my-list',
};
