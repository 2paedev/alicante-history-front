import { CustomImage } from '@models/index';
import { Author } from './author';
import { Tag } from './tag';

export interface ArticlePage {
  next: string;
  previous: string;
  count: number;
  limit: number;
  results: Article[];
}

export interface Article {
  id: number;
  created: string;
  title: string;
  tags: Tag[];
  images: CustomImage[];
  date: string;
  author: Author;
  text: string;
  likes: number;
  bibliography: string[];
}

export interface ArticleResume {
  id: number;
  created: string;
  date: string;
  text: string;
  title: string;
  tags: Tag[];
  likes: number;
  images: CustomImage[];
  author: Author;
}
