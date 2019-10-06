import { Tag } from './tag';

export interface ArticleResumeData {
  id: string;
  title: string;
  img: string;
  content: string;
  tags: string[];
  likesNumber: number;
}

export interface ArticleResume {
  id: string;
  title: string;
  tags: Tag[];
  data: ArticleResumeData[];
}

export interface HomeResume {
  list: ArticleResume[];
}
