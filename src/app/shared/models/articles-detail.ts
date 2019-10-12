import { Author } from './author';

export interface ArticlesDetail {
  id: string;
  title: string;
  author: Author;
  tags: string[];
  text: string;
  image: string;
  date: string
}
