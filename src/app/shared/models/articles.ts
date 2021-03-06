import { Author } from './author';
import { CustomImage } from './custom-image';
import { Tag } from './tag';

export interface Article {
  id: string;
  title: string;
  tags: Tag[];
  images: CustomImage[];
  date: string;
  author: Author;
  text: string;
}

export interface ArticleResume {
  id: string;
  title: string;
  tags: Tag[];
  articles: Article[];
}
